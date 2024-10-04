import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
  const { messages } = req.body

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    res.status(405).json({ error: "Method not allowed, use POST" })
    return
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: "OpenAI API key not configured" })
    return
  }

  if (!messages) {
    res.status(400).json({ error: "No messages provided" })
    return
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    })

    res.status(200).json(completion.choices[0].message)
  } catch (error) {
    console.error("Error fetching AI response:", error)
    res.status(500).json({ error: "Failed to fetch AI response" })
  }
}
