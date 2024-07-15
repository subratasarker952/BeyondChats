import { useState } from "react";

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState('');
  
    const handleSend = () => {
      onSend(message);
      setMessage('');
    };
  
    return (
      <div className="p-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend} className="ml-4 py-2 px-4 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
    );
  };
  
  export default MessageInput;