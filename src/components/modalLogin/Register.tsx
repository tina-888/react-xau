interface BackProps {
  setIsFlipped: (flipped: boolean) => void;
  setShowModal: (show: boolean) => void;
}
const Register: React.FC<BackProps> = ({ setIsFlipped, setShowModal }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
        <p className="mt-2 text-gray-500">Sign up below to create a new account</p>
      </div>
      <div className="mt-5">
        <form action="">
          <div className="relative mt-6">
            <input type="text" name="name" id="name" placeholder="Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
            <label
              htmlFor="name"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Name
            </label>
          </div>
          <div className="relative mt-6">
            <input type="email" name="email" id="signup-email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
            <label
              htmlFor="signup-email"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Email Address
            </label>
          </div>
          <div className="relative mt-6">
            <input type="password" name="password" id="signup-password" placeholder="Password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
            <label
              htmlFor="signup-password"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
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
              className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
            />
            <label
              htmlFor="confirm-password"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Confirm Password
            </label>
          </div>
          <div className="relative mt-6">
            <input type="text" name="code" id="code" placeholder="Referral Code" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
            <label
              htmlFor="code"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Refferal Code
            </label>
          </div>
          <div className="my-6">
            <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
              Sign Up
            </button>
          </div>
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <a onClick={() => setIsFlipped(false)} className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none cursor-pointer">
              Sign In
            </a>
            .
          </p>
        </form>
      </div>
      <button className="absolute top-4 right-4 text-gray-500 hover:text-white" onClick={() => setShowModal(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </div>
  );
};

export default Register;
