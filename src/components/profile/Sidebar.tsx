const Sidebar = () => {
  return (
    <div>
      <aside className="mt-8">
        <div className="flex flex-col gap-2 p-2 text-white">
          <a href="/profile/me" className=" py-1 font-semibold lg:hover:text-custom-gold-rod rounded-md">
            Profile
          </a>

          <a href="/profile/wallet" className=" py-1 font-semibold opacity-90 lg:hover:text-custom-gold-rod rounded-md">
            My Wallet
          </a>
          <a href="/profile/history" className=" py-1 font-semibold opacity-90 lg:hover:text-custom-gold-rod rounded-md">
            History Transaction
          </a>
          <a href="/profile/changepassword" className=" py-1 font-semibold opacity-90 lg:hover:text-custom-gold-rod rounded-md">
            Change Password
          </a>

          {/* <button type="submit" className="w-24 text-red-500 text-sm font-semibold hover:text-purple-600 mb-1 border bg-white  py-2 hover:bg-violet-200 rounded-md">
            Log Out
          </button> */}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
