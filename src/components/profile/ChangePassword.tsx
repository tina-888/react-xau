import React, { useState } from "react";
import apiUsers from "../../api/apiUsers";

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const clearConfirmPassword = () => {
    setConfirmPassword("");
  };

  const discardChanges = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
  };

  const handlePasswordChange = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await apiUsers.updatePassword(currentPassword, newPassword);

    if (response.success) {
      setSuccess(response.message);
      discardChanges(); // Clear the form
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="w-full">
        <div className="flex items-center space-x-2 mb-6">
          <h1 className="text-4xl font-bold">Change Password</h1>
        </div>
        <p className="text-sm text-white mb-6">Update password for enhanced account security.</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form id="changePasswordForm" className="space-y-6" onSubmit={handlePasswordChange}>
          <div>
            <label htmlFor="currentPassword" className="text-sm font-medium text-white block mb-2">
              Current Password *
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-80 h-10 pl-4 password-input text-black form-input block border border-gray-300 rounded-2xl rounded-max-md shadow-sm"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="text-sm font-medium text-white block mb-2">
              New Password *
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-80 h-10 pl-4 password-input text-black form-input block border border-gray-300 rounded-2xl rounded-max-md shadow-sm"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-white block mb-2">
              Confirm New Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-80 h-10 pl-4 password-input text-black form-input block border border-gray-300 rounded-2xl rounded-max-md shadow-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="button" onClick={clearConfirmPassword} className="text-xs text-blue-600 hover:underline mt-1">
              Clear
            </button>
          </div>
          {/* <div id="passwordCriteria" className="text-sm space-y-2">
            <p className="text-red-500">Weak password. Must contain:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>At least 1 uppercase</li>
              <li>At least 1 number</li>
              <li>At least 8 characters</li>
            </ul>
          </div> */}
          <div className="flex gap-5">
            <button type="button" onClick={discardChanges} className="px-4 py-2 h-10 text-sm font-medium text-white bg-red-500 rounded-2xl rounded-max-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300">
              Discard
            </button>
            <button type="submit" className="px-4 py-2 h-10 text-sm font-medium text-white bg-blue-600 rounded-2xl rounded-max-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
              Apply Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
