import React from "react";
import thankYouImg from "../assets/images-f2h/images/Thank-you.png";
import Header from "./Header";

const ThankYou = () => {
  return (
    <div>
      <Header />
      <div className="ml-28 mt-5">
      <a href="https://www.w3schools.com">Home / </a>
      <a href="https://www.w3schools.com" className="text-greenColor">Thank You</a>
      </div>
      <div className="grid place-items-center h-full m-16 gap-6">
        <img src={thankYouImg} alt="paymentfailure" />
        <div className="text-grayColor text-center">
          Your order has been placed successfully!
        </div>
        <div className="flex gap-4">
          <button className="bg-red-500 peer h-10 w-44 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white">
            Back To Home
          </button>
          <button className="bg-greenColor peer h-10 w-44 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white">
            View Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
