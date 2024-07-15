import {
  FaPhone,
  FaQuestion,
  FaRegUserCircle,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { FaPeopleLine, FaUserGroup } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { TbBadgeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-red-300">
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div></div>
      </div>
      <div></div>
      <div>
        <p>
          <Link to={"/myProfile"}>
            <span className="text-red-500">
              <FaRegUserCircle />
            </span>
            My Profile
          </Link>
        </p>
        <Link to={"/newGroup"}>
          <span className="text-red-500">
            <FaUserGroup />
          </span>
          New Group
        </Link>
        <Link to={"/contacts"}>
          <span className="text-red-500">
            <FaUser />
          </span>
          Contacts
        </Link>
        <Link to={"/calls"}>
          <span className="text-red-500">
            <FaPhone />
          </span>
          Calls
        </Link>
        <Link to={"/peopleNearby"}>
          <span className="text-red-500">
            <FaPeopleLine />
          </span>
          People Nearby
        </Link>
        <Link to={"/savedMessages"}>
          <span className="text-red-500">
            <TbBadgeFilled />
          </span>
          Saved Messages
        </Link>
        <Link to={"/setting"}>
          <span className="text-red-500">
            <IoSettings />
          </span>
          Settings
        </Link>
        <Link to={"/inviteFriends"}>
          <span className="text-red-500">
            <FaUserPlus />
          </span>
          Invite Friends
        </Link>
        <Link to={"/telegramFeatures"}>
          <span className="text-red-500">
            <FaQuestion />
          </span>
          Telegram Features
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
