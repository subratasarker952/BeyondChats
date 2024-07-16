import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { FaArrowLeft } from "react-icons/fa";

const ChatWindow = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
        );
        setMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [id, messages]);
  return (
    <div className="bg-white w-full rounded-lg shadow-lg p-4 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <span className="absolute top-14">
          <Link to={"/"}>
            <FaArrowLeft />
          </Link>
        </span>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
