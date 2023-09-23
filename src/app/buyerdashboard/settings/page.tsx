const Settings = () => {
  return (
    <>
      <div className="pt-4">
        <div className="flex gap-4">
          <div className="">
            <p className="font-bold text-base text-light-black-6 mb-2">
              Edit Profile
            </p>
            <div className="bg-primary-1 rounded-lg px-4 py-4 w-[50%] h-[625px]">
              <div className="mb-2">
                <label htmlFor="first-name" className="block">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Full Name"
                  className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="bg-primary-1 rounded-lg px-4 py-4 w-[50%] h-[625px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
