import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="container w-[360px] mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {chats?.map((chat) => (
          <div key={chat.id} className="p-1 bg-white rounded shadow">
            <Link to={`/messages/${chat.id}`}>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-red-300 flex justify-center items-center">
                  <p>{chat?.creator?.name?.slice(0, 1)}</p>
                </div>
                <div className="w-56">
                  <h2 className="font-semibold">
                    {chat.creator.name || "No Name"}
                  </h2>
                  <h2 className="font-semibold">
                    {chat.creator.email.length > 20
                      ? chat?.creator?.email?.slice(0, 20) + "..."
                      : "No Email"}
                  </h2>
                </div>
                <div className="w-12 flex flex-col items-end">
                  <p className="text-sm">
                    {new Date(chat.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  {chat.msg_count ? (
                    <p className=" w-5 h-5 rounded-full text-white bg-slate-400 flex justify-center items-center">
                      {chat.msg_count}
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

export default ChatList;
