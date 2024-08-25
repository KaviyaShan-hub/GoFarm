import React from "react";

interface ProfileContentProps {
  name: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ name }) => {
  const handleProceed = async () => {
    console.log("click");
  };
  return (
    <div className="ml-10">
      <div className="mt-5">
        Home / My Account / <span className="text-greenColor">{name}</span>
      </div>
      &nbsp;
      <div className="text-xl">Hello, XYZ</div>&nbsp;
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="xyz"
            required
          />
          <div className="flex mt-5 space-x-4">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 9389739487"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xyz@gmail.com"
              required
            />
          </div>
          &nbsp;
        </div>
        <button
          type="submit"
          onClick={handleProceed}
          className={
            "bg-greenColor peer h-full w-1/5 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white"
          }
        >
          Update
        </button>
      </div>
      <div className="block p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between">
          <div className="space-y-4">
            <h4>Default Delivery Address</h4>
            <h3>My Home</h3>
            <h6>P.O. Box 5090, Al-farwaniyah, 81006, Al-farwaniyah, Kuwait.</h6>
            &nbsp;
          </div>
          <div className="text-red-500">Add New Address</div>
        </div>
        <button
          type="submit"
          onClick={handleProceed}
          className={
            "bg-greenColor peer h-full w-1/5 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white"
          }
        >
          Change Default Address
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;
