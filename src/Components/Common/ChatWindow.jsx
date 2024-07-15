
const ChatWindow = ({ messages }) => {
    return (
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <div className={`p-4 ${message.isMine ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ChatWindow;