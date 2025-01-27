import React, { useState } from "react";
import apiUser from "../../api/apiUsers"; // Import the API functions
import { SuccessAlert } from "../Alerts/Alerts";

interface FrontProps {
  setIsFlipped: (flipped: boolean) => void;
  setShowModal: (show: boolean) => void;
  onLogin: () => void;
}

const Login: React.FC<FrontProps> = ({ setIsFlipped, setShowModal, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken] = useState<string>(""); // Initialize with an empty string
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Invalid email format");
      }

      const data = { email, password, accessToken };
      const result = await apiUser.login(data);
      console.log("Login successful:", result);

      // Show the success alert
      onLogin(); // Update isLoggedIn state in App.tsx
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }

      setTimeout(() => {}, 3000); // Adjust the delay as needed
    }
  };

  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleLogin}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-2 pl-3 left-3 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 text-black placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="peer mt-2 pl-3 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 text-black placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="password"
                className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div className="my-6">
              <button type="submit" className="w-full rounded-xl bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
                Sign In
              </button>
            </div>
            {error && <p className="text-center text-sm text-red-500">{error}</p>}

            <p className="text-center text-sm text-gray-500">
              Don't have an account yet? &nbsp;
              <a onClick={() => setIsFlipped(true)} className="font-semibold text-blue-700 hover:underline focus:text-gray-800 focus:outline-none cursor-pointer">
                Sign Up
              </a>
              .
            </p>
          </form>
        </div>
        <button className="absolute top-4 right-4 text-gray-500 hover:text-custom-gold-rod transition duration-300" onClick={() => setShowModal(false)} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
        {showSuccessPopup && <SuccessAlert message="Login successful" />}
      </div>
    </>
  );
};

export default Login;
