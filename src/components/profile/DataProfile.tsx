import React, { useEffect, useState } from "react";
import apiUser from "../../api/apiUsers"; // Import the API module

interface ProfileData {
  fullName: string;
  email: string;
  referralcode: string;
  about: string;
}

const DataProfile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiUser.getProfile();
        console.log("Profile Data:", data); // Log the profile data

        setProfileData({
          fullName: data.email.split("@")[0],
          email: data.email,
          referralcode: data.refcoduser,
          about: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        });
      } catch (err) {
        console.error("Error fetching profile:", err); // Log the error
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-2xl shadow overflow-hidden customShadow sm:rounded-lg rounded-2xl max-md:h-[420px]">
      <div className="px-4 py-5 sm:px-6 bg-slate-700">
        <h3 className="text-lg leading-6 font-medium text-white">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm text-white">Details and information about user.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Full name</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{profileData?.fullName}</dd>
          </div>
          <div className="bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Email address</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{profileData?.email}</dd>
          </div>
          <div className="bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Referral Code</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{profileData?.referralcode}</dd>
          </div>
          <div className="bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">About</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 max-md:truncate">{profileData?.about}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DataProfile;
