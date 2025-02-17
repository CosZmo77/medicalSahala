import React from "react";
import logo from "../assets/356f9afdfc8c3aba9175eebc060fc117.png";
import {

  MdOutlinePendingActions,
  MdTaskAlt,
} from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
import clsx from "clsx";
// import { logout } from "../redux/slices/authSlice";
const linkData = [

  {
    label: "Appointment",
    link: "appointment",
    icon: <FaTasks />,
  },
  {
    label: "Encounter",
    link: "encounter",
    icon: <MdTaskAlt />,
  },
  {
    label: "Inbox",
    link: "inbox",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Askai",
    link: "askai",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Prescription",
    link: "prescription",
    icon: <FaUsers />,
  },
  {
    label: "Doctors",
    link: "doctors",
    icon: <FaTrashAlt />,
  },
  {
    label: "Bed",
    link: "bed",
    icon: <FaTrashAlt />,
  },
  {
    label: "Payment",
    link: "payment",
    icon: <FaTrashAlt />,
  },
  {
    label: "History",
    link: "history",
    icon: <FaTrashAlt />,
  },
  {
    label: "Campaign",
    link: "cam",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  // const navigate = useNavigate(); // Hook to navigate



  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const sidebarLinks = linkData;

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-1 px-3 py-2 rounded-full items-center text-gray-800 text-sm hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-blue-700 text-neutral-100" : ""
        )}
      >
        {el.icon}
        <span className='hover:text-[#2564ed]'>{el.label}</span>
      </Link>
    );
  };

  // async function handleLogout() {
  //   // try {
  //   //   await auth.signOut();
  //   //   navigate("/login");
  //   //   console.log("User logged out successfully!");
  //   // } catch (error) {
  //   //   console.error("Error logging out:", error.message);
  //   // }
  //   dispatch(logout()); // Clears user from Redux and localStorage
  //   navigate("/login", { replace: true });
  // }


  return (
    <div className='w-full  h-full flex flex-col gap-3 p-5'>
      <h1 className='flex gap-1 items-center'>
        <img src={logo} alt="Logo" className="w-40 h-42 rounded-full" />

      </h1>

      <div className='flex-1 flex flex-col gap-y-3 py-4'>

        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />

        ))}
{/* 
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button> */}

      </div>




    </div>
  );
};

export default Sidebar;