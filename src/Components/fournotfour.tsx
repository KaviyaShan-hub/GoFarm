import React from "react";
import fournotfourImg from "../assets/images-f2h/images/fournotfour.png";
import Header from "./Header";

const fournotfour = () => {
  return (
    <div>
      <Header />
      <div className="grid place-items-center h-full m-16 gap-6">
        <img src={fournotfourImg} alt="paymentfailure" />
        <div className="text-grayColor text-center">It seems you're trying to access a page that has been deleted, moved or never existed.</div>
        <div>
          <button className="bg-greenColor peer h-10 w-44 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default fournotfour;
