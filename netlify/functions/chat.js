const OpenAI = require("openai")

const openai = new OpenAI(process.env.OPENAI_API_KEY)

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    }
  }

  const { messages } = JSON.parse(event.body)

  try {
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-4o-mini",
    })

    return {
      statusCode: 200,
      body: JSON.stringify(completion.choices[0].message),
    }
  } catch (error) {
    console.error("Error fetching AI response:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch AI response" }),
    }
  }
}
