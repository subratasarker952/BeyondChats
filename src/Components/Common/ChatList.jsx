import { useEffect, useState } from 'react';
import axios from 'axios';

const ChatList = () => {
  const [allData, setAllData] = useState({});
  const [chats, setChats] = useState([]);
  // console.log(allData)

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats');
        setAllData(response.data.data); 
        setChats(response.data.data.data); 
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chats</h1>
      <div className="grid grid-cols-1 gap-4">
        {chats.map((chat) => (
          <div key={chat.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{chat.creator.name || chat.creator.email}</h2>
            <p className="text-gray-600">Messages: {chat.msg_count}</p>
            <p className="text-gray-600">Status: {chat.status}</p>
            <p className="text-gray-600">Last Updated: {new Date(chat.updated_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
