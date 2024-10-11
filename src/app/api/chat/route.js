import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request) {
  try {
    const { messages } = await request.json()

    // Validate the 'messages' field
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid input. 'messages' should be an array." },
        { status: 400 }
      )
    }

    // Optional: Validate each message object
    for (const msg of messages) {
      if (!msg.role || !msg.content) {
        return NextResponse.json(
          { error: "Each message must have 'role' and 'content' fields." },
          { status: 400 }
        )
      }
    }

    // Ensure the OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      )
    }

    // Make a request to the OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    })

    // Extract the assistant's message
    const assistantMessage = completion.choices[0].message

    // Return the assistant's message as JSON
    return NextResponse.json(assistantMessage, { status: 200 })
  } catch (error) {
    console.error("Error fetching AI response:", error)

    // Handle specific OpenAI errors if needed
    if (error.response && error.response.data && error.response.data.error) {
      return NextResponse.json(
        { error: error.response.data.error.message },
        { status: error.response.status }
      )
    }

    // Generic server error
    return NextResponse.json(
      { error: "Failed to fetch AI response" },
      { status: 500 }
    )
  }
}
