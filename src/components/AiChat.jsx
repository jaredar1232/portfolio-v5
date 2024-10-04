import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MarkdownIt from "markdown-it";
import { prompt } from "../../public/AiPrompt";

const md = new MarkdownIt();

// Instead of using onSubmit, I use onClick to avoid the keyboard closing on iOS/Safari
export default function AiChat({ onFocus }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: prompt,
    },
  ]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);

  const fetchAssistantMessage = async (newMessages) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Unknown error');
      }

      const assistantMessage = await response.json();
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error.message);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    fetchAssistantMessage(newMessages);
    inputRef.current?.focus(); // Keep focus on input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (hasError) {
    return (
      <ChatWrapper>
        <div className="error-message">
          An error occurred while fetching the AI response. Please try again later.
        </div>
      </ChatWrapper>
    );
  }

  return (
    <ChatWrapper onClick={onFocus}>
      <div className="chat-box">
        <div className="messages" ref={chatBoxRef}>
          {messages.slice(1).map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role}`}
              dangerouslySetInnerHTML={{ __html: md.render(msg.content) }}
            />
          ))}
          {isLoading && (
            <div className="loader">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>
        <div className="input-form">
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=" Ask my AI assistant..."
            ref={inputRef}
            onKeyDown={handleKeyDown} // Handles Enter key
          />
          <button type="button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </ChatWrapper>
  );
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

    ul,
    ol {
      padding-left: 2.5rem; /* Indentation for list items */
      margin: 0; /* Remove default margin */

      @media (min-width: 56.25em) {
        padding-left: 1.5rem; /* Indentation for list items */
      }
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

  .loader {
    align-self: center;
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 12px;
    height: 12px;
    margin: 10px 0;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(54, 78, 216)
    );
    border-radius: 50%;
    display: inline-block;
    animation: bounce 0.6s infinite alternate;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -8px, 0);
    }
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
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(54, 78, 216)
    );
    color: white;
    border-radius: 5px;
    margin-left: 0.5rem;
    font-size: 1.1rem;
    padding: 1rem;

    @media (min-width: 56.25em) {
      padding: 0.5rem;
    }
  }

  .error-message {
    color: red;
    text-align: center;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;