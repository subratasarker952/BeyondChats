import { createBrowserRouter } from "react-router-dom";
import Profile from "../Pages/Profile";
import Calls from "../Pages/Calls";
import Contacts from "../Pages/Contacts";
import Features from "../Pages/Features";
import InviteFriends from "../Pages/InviteFriends";
import NewGroup from "../Pages/NewGroup";
import PeopleNearby from "../Pages/PeopleNearby";
import SendMessages from "../Pages/SendMessages";
import Settings from "../Pages/Settings";
import MainLayout from "../Layouts/MainLayout";
import Messages from "../Pages/Messages";
import ChatWindow from "../Components/Common/ChatWindow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Messages />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/messages/:id",
        element: <ChatWindow />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/calls",
        element: <Calls />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/feature",
        element: <Features />,
      },
      {
        path: "/inviteFriends",
        element: <InviteFriends />,
      },
      {
        path: "/newGroup",
        element: <NewGroup />,
      },
      {
        path: "/peopleNearby",
        element: <PeopleNearby />,
      },
      {
        path: "/sendMessages",
        element: <SendMessages />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <h2 className="text-red-500 text-center">Page not found</h2>,
      },
    ],
  },
  {
    path: "*",
    element: <h2 className="text-red-500 text-center">Page not found</h2>,
  },
]);
export default router;
