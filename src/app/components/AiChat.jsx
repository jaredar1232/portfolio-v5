"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { prompt } from "../../../public/AiPrompt";

export default function AiChat({ onFocus }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: prompt,
    },
  ]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);

  const fetchAssistantMessage = async (newMessages) => {
    setIsLoading(true);
    setHasError(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error");
      }

      const assistantMessage = await response.json();
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error.message);
      setHasError(true);
      setErrorMessage(error.message);
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
    inputRef.current?.focus();
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
      <div className="flex justify-center mt-8">
        <div className="text-center mt-8 text-lg text-red-500">
          An error occurred while fetching the AI response: {errorMessage}. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div onClick={onFocus} className="flex justify-center">
      <div
        className="bg-white bg-opacity-10 rounded-xl px-4 py-2 m-8 max-w-full sm:max-w-md w-[95%] md:w-[66%] lg:max-w-2xl opacity-0 animate-fadeIn"
        style={{ animationDelay: "0.8s" }}
      >
        {messages.length > 1 && (
          <div
            className="flex flex-col max-h-80 md:max-h-96 bg-white bg-opacity-10 rounded-lg overflow-y-auto p-2"
            ref={chatBoxRef}
          >
            {messages.slice(1).map((msg, index) => (
              <div
                key={index}
                className={`py-1 px-2 my-1 rounded leading-6 ${msg.role === "user"
                  ? "bg-gradient-to-br from-customBlue to-customBlueDark text-white self-end max-w-xs md:max-w-sm text-left"
                  : "bg-customGray text-black self-start max-w-xs md:max-w-sm text-left"
                  }`}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className={`prose ${msg.role === "user"
                    ? "text-white"
                    : "text-black"
                    }`}
                >
                  {msg.content}
                </ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="loader flex space-x-1 self-center my-2">
                <span className="dot animate-bounceFade [animation-delay:0ms]"></span>
                <span className="dot animate-bounceFade [animation-delay:200ms]"></span>
                <span className="dot animate-bounceFade [animation-delay:400ms]"></span>
              </div>
            )}
          </div>
        )}
        <div className="flex items-center my-2 space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask my AI assistant..."
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-1 bg-white placeholder-gray-400 text-black border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            className="px-4 py-1 bg-gradient-to-br from-customBlue to-customBlueDark hover:to-customBlueMid text-white rounded-lg transition-colors duration-300 disabled:from-[#a3b4d2] disabled:to-[#444b5a]"
            disabled={isLoading || input.trim() === ""}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}