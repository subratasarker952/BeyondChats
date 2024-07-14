import { useEffect } from "react";
import { useState } from "react";

const ChatList = () => {
  const [chats, setChats] = useState(null);
  useEffect(() => {
    fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1')
    .then((response) => response.json())
    .then((json) => setChats(json));
  }, [chats]);
  console.log(chats)
  return (
    <div>
      {/* <h2>Chats fetched successfully!</h2>
      <p>Status: {chats?.status}</p>
      <p>Status Code: {chats?.status_code}</p>
      <p>Message: {chats?.message}</p> */}
      <div>
        {/* <h3>
          Chats (Page {chats?.data.current_page} of {chats?.data.last_page})
        </h3> */}
        <ul>
          {chats?.data.data.map((chat) => (
            <li key={chat.id}>
              {/* <h4>Chat ID: {chat.id}</h4>
              <p>Status: {chat.status}</p>
              <p>Message Count: {chat.msg_count}</p>
              <p>Created At: {chat.created_at}</p>
              <p>Updated At: {chat.updated_at}</p> */}
              <div>
                <p>Name: {chat.creator.name || "N/A"}</p>
                <p>Email: {chat.creator.email}</p>
                <p>Phone: {chat.creator.phone || "N/A"}</p>
                {/* <p>Device: {chat.creator.device}</p>
                <p>Browser: {chat.creator.browser}</p>
                <p>OS: {chat.creator.os}</p>
                <p>City: {chat.creator.city}</p>
                <p>Country: {chat.creator.country.name}</p> */}
              </div>
            </li>
          ))}
        </ul>
        <div>
          <a href={chats?.data.first_page_url}>First Page</a>
          {chats?.data.links.map((link) => (
            <a key={link.label} href={link.url} style={{ margin: "0 5px" }}>
              {link.label}
            </a>
          ))}
          <a href={chats?.data.last_page_url}>Last Page</a>
        </div>
      </div>
    </div>
  );
};
export default ChatList