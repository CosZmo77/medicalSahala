import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet
} from "react-router-dom";

import { IoClose } from "react-icons/io5";
import { setOpenSidebar } from "./redux/slices/authSlice";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { Transition } from "@headlessui/react";
import Login from "./components/login";
import SignUp from "./components/register";
import { Toaster } from "sonner";
// import { useState } from "react";
// import { auth } from "./components/firebase";
import Appointment from "./components/Appointment";
import Encounter from "./components/Encounter";
import Inbox from "./components/Inbox";
import Askai from "./components/Askai";
import Prescription from "./components/Prescription";
import Doctors from "./components/Doctors";
import Bed from "./components/Bed";
import Payment from "./components/Payment";
import Campaign from "./components/Campaign";
import History from "./components/History";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentDetails from "./components/AppointmentDetails";
import APayment from "./components/APayment"
function Layout() {
  const { user } = useSelector((state) => state.auth);


  // const [user, setUser] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //     setLoading(false);
  //   });

  //   // Cleanup function to unsubscribe when the component unmounts
  //   return () => unsubscribe();
  // }, []);


  // // Show a loading screen until auth state is determined
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/7 h-screen bg-white overflow-y-auto sticky top-0 hidden md:block ">
        <Sidebar />
      </div>
      <MobileSidebar />
      <div className='flex-1 overflow-y-auto'>
        <Navbar />
        <div className='p-2 2x1:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}


const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter='transition-opacity duration-700'
        enterFrom='opacity-x-10'
        enterTo='opacity-x-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-x-100'
        leaveTo='opacity-x-0'
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className='bg-white top-0 w-3/4 h-full absolute left-0'>
              <div className='w-full flex justify-end px-5 mt-5'>
                <button
                  onClick={() => closeSidebar()}
                  className='flex justify-end items-end'
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className='-mt-10'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};



function App() {

  return (



    <main className="App w-full min-h-screen bg-[#f3f4f6]">

      <Router>
        <Routes >
          <Route element={<Layout />}>

            <Route path="/" element={<Navigate to="/appointment" />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/encounter" element={<Encounter />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/askai" element={<Askai />} />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/doctors/&/Clinics" element={<Doctors />} />
            <Route path="/bed/Allotment" element={<Bed />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/history" element={<History />} />
            <Route path="/campaign" element={<Campaign />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/Aform" element={<AppointmentForm />} />
          <Route path="/Apayment" element={<APayment />} />
          <Route path="/Adetails" element={<AppointmentDetails/>} />
        </Routes>

        <Toaster richColors />
      </Router>
    </main>

  );
}

export default App;
