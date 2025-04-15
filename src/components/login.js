import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { setCredentials } from "../redux/slices/authSlice";
import logo from "../assets/356f9afdfc8c3aba9175eebc060fc117.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ellips2 from "../assets/Ellipse 77.png";
import ellips1 from "../assets/Ellipse 76.png";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setCredentials(userCredential.user));
      navigate("/appointment");
    } catch (error) {
      console.log("error:", error);
      alert("Wrong email or password. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);

      if (result.user) {
        console.log("User signed up with Google:", result.user);
        dispatch(setCredentials(result.user));

        navigate("/appointment");
      }
    } catch (error) {
      console.error("Google sign-up failed:", error.message);
      alert("Google sign-up failed. Please try again." + error.message);
    }
  };

  useEffect(() => {
    if (user) navigate("/appointment");
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - details */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="MedicalShala Logo"
            className="h-[72px] w-[250px]"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#0078D4]">Welcome Back!</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        {/*  */}
        <form onSubmit={submitHandler} className="max-w-md mx-auto w-full">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center w-full">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={true}
                onChange={(e) => setEmail(e.target.checked)}
                required
              />
              {/* Label for the checkbox */}
              <div className="space-between flex justify-between w-full">
                <span className=" text-gray-600">Remember Me</span>
                <button className="text-[#0078D4]">Forgot Password?</button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#0078D4] text-white rounded-xl font-medium hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#585858]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">
                Or Sign Up with
              </span>
            </div>
          </div>

          <div className="mt-6  flex flex-row gap-6 space-between justify-center">
            <button
              type="button"
              className="flex justify-center items-center px-14 py-2 border border-[#585858] rounded-xl hover:bg-gray-50"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="h-7 w-7" />
            </button>

            <button
              type="button"
              className="flex justify-center items-center px-14 py-2 border border-[#585858] rounded-xl hover:bg-gray-50"
              // onClick={() => handleSocialSignUp("Apple")}
            >
              <FaApple className="h-7 w-7" />
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an Account?
              <Link
                to="/Register"
                className="text-[#0078D4] pl-1 ml-1 font-medium"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* RightScreen - blue  */}
      <div className="w-full hidden md:flex md:w-1/2 bg-gradient-to-b from-[#1B3C62] to-[#377AC8] items-center justify-center p-12 relative overflow-hidden">
        <img
          src={ellips1}
          alt="elips1"
          className="w-96 h-80 absolute bottom-0 right-0"
        />
        <img
          src={ellips2}
          alt="elips2"
          className="w-52 h-40 absolute bottom-0 right-0"
        />
        <div className="relative z-10 text-white max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            Revolutionize Healthcare Management Effortlessly!{" "}
          </h1>
          <p className="text-xl">
            Effortlessly manage appointments, health records, and patient
            interactions with our all-in-one healthcare management platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
