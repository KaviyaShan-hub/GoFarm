import React from "react";
import NoInternetImg from "../assets/images-f2h/images/No_Internet.png";
import Header from "./Header";

const NoInternet = () => {
  return (
    <div>
      <Header />
      <div className="grid place-items-center h-full m-16 gap-6">
        <img src={NoInternetImg} alt="paymentfailure" />
        <div className="text-grayColor text-center">Check your Internet Connection and Try Again.</div>
        <div>
          <button className="bg-greenColor peer h-10 w-44 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoInternet;
