import { useState } from "react";
import ChatList from "./Components/Common/ChatList";
import Navbar from "./Components/Shared/Navbar";
import MessageInput from "./Components/Common/MessageInput";
import ChatWindow from "./Components/Common/ChatWindow";
// import Sidebar from "./Components/Common/Sidebar";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, isMine: true }]);
  };
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <ChatList />
          {/* <Sidebar/> */}
        <div className="flex-1 flex flex-col">
          <ChatWindow messages={messages} />
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </>
  );
}

export default App;
