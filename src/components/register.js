import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "./firebase";
import logo from "../assets/356f9afdfc8c3aba9175eebc060fc117.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setCredentials } from "../redux/slices/authSlice"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ellips2 from "../assets/Ellipse 77.png";
import ellips1 from "../assets/Ellipse 76.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (!termsAccepted) {
      setError("Please accept the terms and conditions");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        console.log("User registered successfully:", userCredential.user);

        // Skip Firestore database operations

        // If needed, you can still dispatch to Redux store
        // dispatch(
        //   setCredentials({
        //     uid: userCredential.user.uid,
        //     email: userCredential.user.email,
        //   })
        // );

        navigate("/appointment");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      setError("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await signInWithPopup(auth, googleAuthProvider);

      if (result.user) {
        console.log("User signed up with Google:", result.user);

        // Skip Firestore database operations

        // If needed, you can still dispatch to Redux store
        // dispatch(
        //   setCredentials({
        //     uid: result.user.uid,
        //     email: result.user.email,
        //     displayName: result.user.displayName,
        //     photoURL: result.user.photoURL,
        //   })
        // );

        navigate("/appointment");
      }
    } catch (error) {
      console.error("Google sign-up failed:", error.message);
      setError("Google sign-up failed: " + error.message);
    } finally {
      setLoading(false);
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
          <h2 className="text-xl font-bold text-[#0078D4]">
            Join Our Healthcare Network
          </h2>
          <p className="text-gray-600">Register to Continue</p>
        </div>

        {/* Display error message if any */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="max-w-md mx-auto w-full">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Specialization"
              className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Hospital's / Clinic's Name"
              className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-xl border border-[#585858] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-[#0078D4]">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-[#0078D4] text-white rounded-xl font-medium hover:bg-blue-700 transition duration-300 disabled:bg-blue-300"
            >
              {loading ? "Registering..." : "Register Now"}
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

          <div className="mt-6 flex flex-row justify-center gap-4">
            <button
              type="button"
              disabled={loading}
              className="flex justify-center items-center px-14 py-2 border border-[#585858] rounded-xl hover:bg-gray-50 disabled:bg-gray-100"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="h-7 w-7" />
            </button>

            <button
              type="button"
              disabled={loading}
              className="flex justify-center items-center px-14 py-2 border border-[#585858] rounded-xl hover:bg-gray-50 disabled:bg-gray-100"
            >
              <FaApple className="h-7 w-7" />
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an Account?
              <Link to="/login" className="text-[#0078D4] ml-1 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* RightScreen - blue */}
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
        <div className="relative z-10 text-white max-w-md ">
          <h1 className="text-4xl font-bold mb-6">
            Streamline Your Practice with Ease!
          </h1>
          <p className="text-xl">
            Simplify your workflow, manage patient data, and enhance
            communication—all in one comprehensive platform tailored for
            doctors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
