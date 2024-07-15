
const Message = ({ message }) => {
    const { created_by, creator, message: text, created_at } = message;
      const isMine = created_by === 1; // Replace with the actual user ID checking logic
  
    return (
      <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`p-3 rounded-lg ${isMine ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          <div className="text-sm">{text}</div>
          <div className="text-xs text-gray-600 mt-1">{new Date(created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
        </div>
      </div>
    );
  };
  
  export default Message;