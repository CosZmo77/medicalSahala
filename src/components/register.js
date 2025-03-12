import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import logo from "../assets/356f9afdfc8c3aba9175eebc060fc117.png";
import { setCredentials } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Register() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");


  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });

        dispatch(setCredentials({ uid: user.uid, email: user.email, firstName: fname, lastName: lname }));

        // navigate("/appointment");  // Redirect after successful registration
      }
    } catch (error) {
      console.log(error.message);
      alert("wrong inputs")
    }
  };

  useEffect(() => {
    if (user) navigate("/appointment");
  }, [user, navigate]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-3 md:gap-y-10 2xl:-mt-20'>
            <h1 className='flex gap-1 items-center'>
              <img src={logo} alt="Logo" className="w-40 h-42 rounded-full" />
            </h1>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
              Manage all your tasks in one place!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-3xl md:text-4xl 2xl:text-6xl font-black text-center text-blue-700'>
              <span>Revolutionise Healthcare</span>
              <span>Management Effortlessly!</span>
            </p>
            <span className='flex text-center leading-normal md:leading-relaxed py-1 px-3 text-xl md:text-xl border-gray-300 text-gray-600'>
              Effortlessly manage appointments, health records, and patient interactions with our all-in-one healthcare management platform.
            </span>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleRegister}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-8 pt-10 pb-10'
          >
            <div>
              <p className='text-blue-600 text-3xl font-bold text-center'>Sign Up</p>
            </div>

            <div className='flex flex-col gap-y-5'>
              <div>
                <label className='block text-gray-700 font-semibold'>First Name</label>
                <input
                  type='text'
                  className='w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='First name'
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold'>Last Name</label>
                <input
                  type='text'
                  className='w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Last name'
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold'>Email Address</label>
                <input
                  type='email'
                  className='w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold'>Password</label>
                <input
                  type='password'
                  className='w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300'
              >
                Sign Up
              </button>
            </div>

            <p className='text-sm text-gray-500 text-center mt-4'>
              Already registered?{' '}
              <Link to='/login' className='text-blue-600 hover:underline'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
