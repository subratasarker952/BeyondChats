import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
        );
        setMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [chatId, messages]);
  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-4 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages?.map((message) => (
          <div
            key={message.id}
            className="p-1 hover:bg-slate-300 bg-white rounded shadow"
          >
            <Link to={`/messages/:`}>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-red-300 flex justify-center items-center">
                  <p>{message?.sender?.name?.slice(0, 1)}</p>
                </div>
                <div className="w-56">
                  <h2 className="font-semibold">{message.sender.name}</h2>
                  <h2 className="font-semibold">
                    {message.message.length > 20
                      ? message.message.slice(0, 20) + "..."
                      : message.message}
                  </h2>
                </div>
                <div className="w-12">
                  <p className="text-gray-600">
                    {new Date(message.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  {message.unanswered ? (
                    <p className=" w-5 h-5 rounded-full text-white bg-slate-400 flex justify-center items-center">
                      {message.unanswered}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
