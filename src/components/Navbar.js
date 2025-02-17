import React from "react";
// import { MdOutlineSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import UserAvatar from "./UserAvatar";
// import NotificationPanel from "./NotificationPanel";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className='flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0'>
      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className='text-2xl text-gray-500 block md:hidden'
        >
          ☰
        </button>


        <div className='w-56 2xl:w-[300px] flex items-center py-1 px-2 text-2xl md:text-2xl 2xl:text-4xl font-semibold text-center text-black'>
          {/* <MdOutlineSearch className='text-gray-500 text-xl' />
          <input
            type='text'
            placeholder='Search....'
            className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
          /> */}

          {location.pathname
            .split("/")
            .filter(Boolean) // removes empty segments
            .map(segment =>
              segment.charAt(0).toUpperCase() + segment.slice(1) // Capitalize the first letter and concatenate with the rest of the string
            )
            .join(" ")}

        </div>
      </div>

      <div className='flex gap-2 items-center'>
        {/* <NotificationPanel /> */}

        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;