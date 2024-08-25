import React, { useEffect, useState } from "react";
import apiUser from "../../api/apiUsers"; // Import the API module

interface ProfileData {
  fullname: string;
  email: string;
  refcoduser: string;
  about: string;
}
interface UpdateProfile {
  email: string;
  fullname: string;
  refcoduser: string;
  about: string;
}

const DataProfile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [fullname, setFullname] = useState<string>(""); // State for full name
  const [about, setAbout] = useState<string>(""); // State for about
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data: ProfileData = await apiUser.getProfile();
        console.log("Profile Data:", data); // Log the profile data

        setProfileData({
          fullname: data.fullname,
          email: data.email,
          refcoduser: data.refcoduser,
          about: data.about,
        });
        setFullname(data.fullname); // Initialize fullname state
        setAbout(data.about); // Initialize about state
      } catch (err) {
        console.error("Error fetching profile:", err); // Log the error
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (profileData) {
      const updatedProfile: UpdateProfile = {
        ...profileData,
        fullname: fullname,
        about: about,
      };

      try {
        await apiUser.updateProfile(updatedProfile);
        setShowModal(false);
        window.location.reload();
      } catch (error) {
        console.error("Error updating profile:", error);
        setError("Failed to update profile");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="max-w-2xl shadow overflow-hidden customShadow sm:rounded-lg rounded-2xl max-md:h-[430px]">
        <div className=" py-5 px-6 max-md:px-6 bg-slate-700">
          <div className="flex items-center justify-between bg-slate-700 rounded-t-md">
            <span className="text-xl font-semibold text-white">Profile</span>
            <button onClick={() => setShowModal(true)} className="" aria-label="Open Profile Modal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </div>

          <p className="mt-1 max-w-2xl text-sm text-white">Details and information about user.</p>
        </div>
        <div className="border-t border-gray-200 ">
          <dl>
            <div className="bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 max-md:px-7">
              <dt className="text-sm font-medium text-white">Full name</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{profileData?.fullname}</dd>
            </div>
            <div className="bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 max-md:px-7">
              <dt className="text-sm font-medium text-white">Email address</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{profileData?.email}</dd>
            </div>
            <div className="bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 max-md:px-7">
              <dt className="text-sm font-medium text-white">Referral Code</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{profileData?.refcoduser}</dd>
            </div>
            <div className="bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 max-md:px-7">
              <dt className="text-sm font-medium text-white">About</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 max-md:text-ellipsis max-md:truncate">{profileData?.about}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-start justify-center pt-12 bg-black bg-opacity-50">
          <div className="relative mt-16 w-full max-w-md px-6 shadow-xl ring-1 bg-gray-700 customShadow ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="text-center">
              <h1 className="text-3xl mt-6 font-semibold text-white">Update Profile</h1>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="relative mt-16 pb-6">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Full Name"
                    className="peer mt-2 pl-4 left-3 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent text-black focus:border-gray-500 focus:outline-none"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="fullname"
                    className="ml-3 pointer-events-none absolute -top-2 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="text"
                    name="about"
                    id="about"
                    placeholder="About"
                    className="peer mt-2 pl-4 w-full border-b-2 border-gray-300 rounded-md px-0 py-1 placeholder:text-transparent text-black focus:border-gray-500 focus:outline-none"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="about"
                    className="ml-3 pointer-events-none absolute -top-2 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white"
                  >
                    About
                  </label>
                </div>
                <div className="my-6">
                  <button type="submit" className="w-full rounded-xl bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
                    Update
                  </button>
                </div>
                {error && <p className="text-center text-sm text-red-500">{error}</p>}
              </form>
            </div>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-white" onClick={() => setShowModal(false)} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DataProfile;
