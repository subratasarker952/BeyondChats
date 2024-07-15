import { useEffect, useState } from "react";
import axios from "axios";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats"
        );
        setChats(response.data.data.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {chats.map((chat) => (
          <div key={chat.id} className="p-1 bg-white rounded shadow">
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full bg-red-300 flex justify-center items-center">
                <p>{chat?.creator?.name?.slice(0, 1)}</p>
              </div>
              <div className="flex-1">
                <h2 className="font-semibold">
                  {chat.creator.name || chat.creator.email}
                </h2>
                <h2 className="font-semibold">
                  Ther is a new massage
                </h2>
              </div>
              <div>
                <p className="text-gray-600">
                  {/* Last Updated: {new Date(chat.updated_at).toLocaleString()} */}
                  sun
                </p>
                <p className="text-gray-600 w-5 h-5 rounded-full text-white bg-slate-800 flex justify-center items-center"> {chat.msg_count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
