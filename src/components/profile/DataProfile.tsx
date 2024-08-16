const DataProfile = () => {
  return (
    <div className=" max-w-2xl shadow overflow-hidden customShadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 bg-slate-700">
        <h3 className="text-lg leading-6 font-medium text-white">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm text-white">Details and informations about user.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Full name</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">Mickael Poulaz</dd>
          </div>
          <div className="bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Email address</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">m.poul@example.com</dd>
          </div>
          <div className="bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Referral Code</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">M78FH67</dd>
          </div>
          <div className="bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">About</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DataProfile;
