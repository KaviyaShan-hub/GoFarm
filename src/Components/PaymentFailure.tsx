import React from "react";
import paymentfailure from "../assets/images-f2h/images/Payment_failure.png";
import Header from "./Header";

const PaymentFailure = () => {
  return (
    <div>
      <Header />
      <div className="grid place-items-center h-full m-16">
        <img src={paymentfailure} alt="paymentfailure" />
        <div className="text-grayColor">Your transaction has been failed!</div>
        <div>
          <button className="bg-greenColor peer h-10 w-44 rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white">
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
