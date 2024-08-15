import React, { useState } from "react";
import apiUser from "../../api/apiUsers"; // Import the API functions

interface BackProps {
  setIsFlipped: (flipped: boolean) => void;
  setShowModal: (show: boolean) => void;
}

const Register: React.FC<BackProps> = ({ setIsFlipped, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const data = { name, email, password };
      const result = await apiUser.register(data);
      console.log("Registration successful:", result);
      setShowModal(false); // Close the modal or redirect as needed
    } catch (err) {
      // Set the error message from API call
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
        <p className="mt-2 text-gray-500">Sign up below to create a new account</p>
      </div>
      <div className="mt-5">
        <form onSubmit={handleRegister}>
          {/* <div className="relative mt-6">
            <input type="text" name="name" id="name" placeholder="Name" className="peer mt-2 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
            <label
              htmlFor="name"
              className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Name
            </label>
          </div> */}
          <div className="relative mt-6">
            <input
              type="email"
              name="email"
              id="signup-email"
              placeholder="Email Address"
              className="peer mt-2 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="signup-email"
              className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Email Address
            </label>
          </div>
          <div className="relative mt-6">
            <input
              type="password"
              name="password"
              id="signup-password"
              placeholder="Password"
              className="peer mt-2 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="signup-password"
              className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Password
            </label>
          </div>
          <div className="relative mt-6">
            <input
              type="password"
              name="confirmpassword"
              id="confirm-password"
              placeholder="Confirm Password"
              className="peer mt-2 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label
              htmlFor="confirm-password"
              className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Confirm Password
            </label>
          </div>
          {/* <div className="relative mt-6">
            <input type="text" name="code" id="code" placeholder="Referral Code" className="peer mt-2 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
            <label
              htmlFor="code"
              className="ml-3 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Refferal Code
            </label>
          </div> */}
          <div className="my-6">
            <button type="submit" className="w-full rounded-max-md rounded-xl bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
              Sign Up
            </button>
          </div>
          {error && <p className="text-center text-sm text-red-500">{error}</p>}
          <p className="text-center text-sm text-gray-500">
            Already have an account? &nbsp;
            <a onClick={() => setIsFlipped(false)} className="font-semibold text-blue-600 hover:underline focus:text-gray-800 focus:outline-none cursor-pointer">
              Sign In
            </a>
            .
          </p>
        </form>
      </div>
      <button className="absolute top-4 right-4 text-gray-500 hover:text-white" onClick={() => setShowModal(false)} aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </div>
  );
};
export default Register;
