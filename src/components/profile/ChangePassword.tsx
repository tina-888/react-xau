import React from "react";

const ChangePassword: React.FC = () => {
  const clearConfirmPassword = () => {
    const confirmPasswordInput = document.getElementById("confirmPassword") as HTMLInputElement;
    if (confirmPasswordInput) {
      confirmPasswordInput.value = "";
    }
  };

  const discardChanges = () => {
    const form = document.getElementById("changePasswordForm") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <div className=" flex items-center justify-center mt-8">
      <div className="w-full">
        <div className="flex items-center space-x-2 mb-6">
          <h1 className="text-xl font-semibold">Change Password</h1>
        </div>
        <p className="text-sm text-white mb-6">Update password for enhanced account security.</p>
        <form id="changePasswordForm" className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className=" text-sm font-medium text-white block mb-2">
              Current Password *
            </label>
            <input type="password" id="currentPassword" className="w-36 password-input form-input block border border-gray-300 rounded-max-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="newPassword" className="text-sm font-medium text-white block mb-2">
              New Password *
            </label>
            <input type="password" id="newPassword" className="w-36 password-input form-input block  border border-gray-300 rounded-max-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-white block mb-2">
              Confirm New Password *
            </label>
            <input type="password" id="confirmPassword" className="w-36 password-input form-input block border border-gray-300 rounded-max-md shadow-sm" required />
            <button type="button" onClick={clearConfirmPassword} className="text-xs text-blue-600 hover:underline mt-1">
              Clear
            </button>
          </div>
          <div id="passwordCriteria" className="text-sm space-y-2">
            <p className="text-red-500">Weak password. Must contain:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>At least 1 uppercase</li>
              <li>At least 1 number</li>
              <li>At least 8 characters</li>
            </ul>
          </div>
          <div className="flex gap-5">
            <button type="button" onClick={discardChanges} className="px-4 py-2 text-sm font-medium text-white bg-gray-200 rounded-max-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300">
              Discard
            </button>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-max-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
              Apply Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
