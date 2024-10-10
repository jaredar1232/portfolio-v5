import { useState, useEffect, useRef } from "react";
import MarkdownIt from "markdown-it";
import { prompt } from "../../public/AiPrompt";

const md = new MarkdownIt();

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
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Unknown error");
      }

      const assistantMessage = await response.json();
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error.message);
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
        <div className="error-message">
          An error occurred while fetching the AI response. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div onClick={onFocus} className="flex justify-center">
      <div
        className="bg-white bg-opacity-10 rounded-lg p-4 m-8 max-w-full sm:max-w-md w-11/12 md:w-2/3 lg:max-w-2xl opacity-0 animate-fadeIn"
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
                className={`py-1 px-2 my-1 rounded ${msg.role === "user"
                  ? "bg-customBlueDark text-white self-end max-w-xs md:max-w-sm text-left"
                  : "bg-customGray text-black self-start max-w-xs md:max-w-sm text-left"
                  }`}
                dangerouslySetInnerHTML={{ __html: md.render(msg.content) }}
              />
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
            className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            className="px-4 py-2 bg-gradient-to-br from-customBlue to-customBlueDark text-white rounded-lg transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}