import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { prompt } from "../../static/AiPrompt"

export default function AiChat({ onFocus }) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: prompt,
    },
  ])

  const messagesEndRef = useRef(null)
  const chatBoxRef = useRef(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (input.trim() === "") return

    const userMessage = { role: "user", content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")

    try {
      const response = await fetch(
        "https://chatgpt-server-indol.vercel.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newMessages }),
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText)
      }

      const assistantMessage = await response.json()
      setMessages(prevMessages => [...prevMessages, assistantMessage])
    } catch (error) {
      console.error("Error fetching AI response:", error.message)
    }
  }

  const scrollToBottom = () => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <ChatWrapper onClick={onFocus}>
      <div className="chat-box">
        <div className="messages" ref={chatBoxRef}>
          {messages.slice(1).map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask my AI assistant... 🙂"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  .chat-box {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 0.5rem 1rem 1rem 1rem;
    max-width: 400px;
    margin: 2rem auto;
    max-height: 500px; /* Add a fixed height for the chat box */
  }

  .messages {
    max-height: 300px;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow-y: auto; /* Allow vertical scrolling */
  }

  .message {
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 1.2rem; /* Increased text size */
    margin: 0.5rem;
    color: black;
  }

  .user {
    background: #007bff;
    color: white;
    text-align: right;
  }

  .assistant {
    background: #f1f1f1;
  }

  .input-form {
    display: flex;
    align-items: center;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1rem; /* Increased text size */
  }

  button {
    padding: 0.5rem;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 5px;
    margin-left: 0.5rem;
    font-size: 1.1rem; /* Increased text size */
  }
`
