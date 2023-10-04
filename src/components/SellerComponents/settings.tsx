import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="flex flex-col  items-end">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col w-full md:w-[48%]">
          <div className="font-[600]">Edit Profile</div>

          <div className="flex flex-col bg-primary-1 rounded-xl px-3 py-3">
            <div>Name:</div>
            <input
              type="text"
              className="w-full bg-white-2 rounded-md py-3 px-2 "
              placeholder="Name"
            />

            <div className="mt-3">Surname:</div>
            <input
              type="text"
              className="w-full bg-white-2 rounded-md py-3 px-2 "
              placeholder="Surname"
            />

            <div className="mt-3">Location:</div>
            <div className="bg-white-2 text-light-black-3 rounded-md py-2 px-3 flex  items-center justify-between cursor-pointer">
              Location
              <FaCaretDown />
            </div>
            <div className="mt-3">Currency:</div>
            <div className="bg-white-2 text-light-black-3 rounded-md py-2 px-3 flex  items-center justify-between cursor-pointer">
              Currency
              <FaCaretDown />
            </div>

            <div className="mt-3">Email:</div>
            <input
              type="text"
              className="w-full bg-white-2 rounded-md py-3 px-2 "
              placeholder="Email"
            />

            <div className="mt-3">Phone:</div>
            <input
              type="text"
              className="w-full bg-white-2 rounded-md py-3 px-2 "
              placeholder="Phone Number"
            />

            <div className="mt-3">Address:</div>
            <textarea
              className="w-full bg-white-2 border px-2 py-3 font-normal border-none resize-none focus:outline-none rounded-md mb-3"
              placeholder="Enter Address"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[48%] gap-5">
          <div className="flex flex-col">
            <div className="font-[600]">Change Password</div>
            <div className="flex flex-col bg-primary-1 rounded-xl px-3 py-3">
              <div>Current Password:</div>
              <input
                type="text"
                className="w-full bg-white-2 rounded-md py-3 px-2 "
                placeholder="************************"
              />

              <div className="mt-3">New Password:</div>
              <input
                type="text"
                className="w-full bg-white-2 rounded-md py-3 px-2 "
                placeholder="************************"
              />

              <div className="mt-3">Confirm Password:</div>
              <input
                type="text"
                className="w-full bg-white-2 rounded-md py-3 px-2 mb-3"
                placeholder="************************"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="font-[600]">Notifications</div>
            <div className="flex flex-col bg-primary-1 rounded-xl px-3 py-3 gap-5">
              <div className="flex flex-col py-5 px-4 shadow-lg bg-white rounded-lg">
                <div className="font-[600]">Order Confirmation</div>
                <div>Get notified when customers order any product</div>
              </div>


              <div className="flex flex-col py-5 px-4 shadow-lg bg-white rounded-lg">
                <div className="font-[600]">Order Status Changed</div>
                <div>Get notified when customers order any product</div>
              </div>



              <div className="flex flex-col py-5 px-4 shadow-lg bg-white rounded-lg">
                <div className="font-[600]">Order Delivered</div>
                <div>Get notified when customers order any product</div>
              </div>

              <div className="flex flex-col py-5 px-4 shadow-lg bg-white rounded-lg mb-3">
                <div className="font-[600]">Email Notifications</div>
                <div>Get notified when customers order any product</div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <button className="mt-5 bg-gradient-to-r from-primary-1 to-primary round px-3 py-3 typo flex items-center justify-center shadow-xl text-white ">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
