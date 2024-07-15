import { useEffect, useState } from "react";
import ChatList from "./Components/Common/ChatList";
import Navbar from "./Components/Shared/Navbar";
import MessageInput from "./Components/Common/MessageInput";
import ChatWindow from "./Components/Common/ChatWindow";
import axios from "axios";
// import Sidebar from "./Components/Common/Sidebar";

function App() {
  // const [messages, setMessages] = useState([]);
  const [allData, setAllData] = useState({});
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats"
        );
        setAllData(response.data.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  // const handleSend = (message) => {
  //   setMessages([...messages, { text: message, isMine: true }]);
  // };

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
{
  /* 
       <div className="flex-1 flex flex-col">
          <ChatWindow messages={messages} />
          <MessageInput onSend={handleSend} />
        </div>
         */
}
