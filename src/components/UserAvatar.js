// import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { IoLogOutOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// import { getInitials } from "./inde.js";
// import { logout } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// const UserAvatar = () => {
//     const [open, setOpen] = useState(false);
//     //   const [openPassword, setOpenPassword] = useState(false);
//     const { user } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = () => {
//         console.log("logout");
//         dispatch(logout()); // Clears user from Redux and localStorage
//         navigate("/login", { replace: true });
//     };

//     return (
//         <>
//             <div>
//                 <Menu as='div' className='relative inline-block text-left'>
//                     <div>
//                         <MenuButton className='w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600'>
//                             <span className='text-white font-semibold'>
//                                 {getInitials(user?.email)}
//                             </span>
//                         </MenuButton>
//                     </div>

//                     <Transition
//                         as={Fragment}
//                         enter='transition ease-out duration-100'
//                         enterFrom='transform opacity-0 scale-95'
//                         enterTo='transform opacity-100 scale-100'
//                         leave='transition ease-in duration-75'
//                         leaveFrom='transform opacity-100 scale-100'
//                         leaveTo='transform opacity-0 scale-95'
//                     >
//                         <MenuItems className='absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none'>
//                             <div className='p-4'>
//                                 <MenuItem>
//                                     {({ active }) => (
//                                         <button
//                                             onClick={() => setOpen(true)}
//                                             className='text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base'
//                                         >
//                                             <FaUser className='mr-2' aria-hidden='true' />
//                                             Profile
//                                         </button>
//                                     )}
//                                 </MenuItem>

//                                 {/* <MenuItem>
//                                     {({ active }) => (
//                                         <button
//                                             onClick={() => setOpenPassword(true)}
//                                             className={`tetx-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base`}
//                                         >
//                                             <FaUserLock className='mr-2' aria-hidden='true' />
//                                             Change Password
//                                         </button>
//                                     )}
//                                 </MenuItem> */}

//                                 <MenuItem>
//                                     {({ active }) => (
//                                         <button
//                                             onClick={logoutHandler}
//                                             className={`text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
//                                         >
//                                             <IoLogOutOutline className='mr-2' aria-hidden='true' />
//                                             Logout
//                                         </button>
//                                     )}
//                                 </MenuItem>
//                             </div>
//                         </MenuItems>
//                     </Transition>
//                 </Menu>
//             </div>
//         </>
//     );
// };

// export default UserAvatar;

// The Above code has a Open Function error . made backup for just in case

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getInitials } from "./inde.js";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("logout");
    dispatch(logout()); // Clears user from Redux and localStorage
    navigate("/login", { replace: true });
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600">
              <span className="text-white font-semibold">
                {getInitials(user?.email)}
              </span>
            </MenuButton>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
              <div className="p-4">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => setOpen(true)}
                      className="text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base"
                    >
                      <FaUser className="mr-2" aria-hidden="true" />
                      Profile
                    </button>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={logoutHandler}
                      className={`text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
                    >
                      <IoLogOutOutline className="mr-2" aria-hidden="true" />
                      Logout
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      {/* Modal for Profile */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <p className="text-gray-700">User Email: {user?.email}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAvatar;
