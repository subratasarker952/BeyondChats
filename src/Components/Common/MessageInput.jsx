import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Logic to send message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        className="flex-1 p-2 border rounded-l-lg focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-r-lg">
        Send
      </button>
    </div>
  );
};

export default MessageInput;