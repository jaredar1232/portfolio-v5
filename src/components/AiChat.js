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
  const [hasError, setHasError] = useState(false)

  const chatBoxRef = useRef(null)

  const fetchAssistantMessage = async newMessages => {
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
      setHasError(true)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (input.trim() === "") return

    const userMessage = { role: "user", content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")

    fetchAssistantMessage(newMessages)
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

  if (hasError) {
    return null
  }

  return (
    <ChatWrapper onClick={onFocus}>
      <div className="chat-box">
        <div className="messages" ref={chatBoxRef}>
          {messages.slice(1).map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            className="input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder=" Ask my AI assistant... 🙂"
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
    padding: 1rem;
    margin: 2rem auto;
    max-height: 500px;
    opacity: 0;
    animation: fadeIn 1s forwards 0.5s;

    min-width: 350px;
    width: 90%;

    @media (min-width: 56.25em) {
      animation: fadeIn 2s forwards 1s;
      max-width: 600px;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .messages {
    display: flex;
    flex-direction: column;
    max-height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow-y: auto;

    @media (min-width: 56.25em) {
      max-height: 400px;
    }
  }

  .message {
    font-size: 16px;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 1rem;
    max-width: 70%;
    word-wrap: break-word;
    color: black;
    line-height: 20px;

    @media (min-width: 56.25em) {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  }

  .user {
    background: #007bff;
    color: white;
    align-self: flex-end;
    text-align: right;
  }

  .assistant {
    background: #f1f1f1;
    align-self: flex-start;
    text-align: left;
  }

  .input-form {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;

    @media (min-width: 56.25em) {
      font-size: 1.1rem;
    }
  }

  input {
    padding: 0.5rem;
    margin: 1rem 0;
  }

  button {
    border: none;
    background: #007bff;
    color: white;
    border-radius: 5px;
    margin-left: 0.5rem;
    font-size: 1.1rem;
    padding: 1rem;

    @media (min-width: 56.25em) {
      padding: 0.5rem;
    }
  }
`
