import { useState } from "react";
import envelop from "../assets/images-f2h/images/envelope.png";
import React from "react";
import validator from "validator";

const Register: React.FC = () => {
  const [fristName, setFristName] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [mobileVal, setMobileVal] = useState("");
  const [mobileMessage] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordVal, setConfirmPasswordVal] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [successPw, setSuccessPw] = useState(false);
  const [TC, setTC] = useState(false);
  const [PP, setPP] = useState(false);

  const handleFirstName = (e: any) => {
    setFristName(e.target.value);
  };

  const handleEmail = (e: any) => {
    console.log("email");
    setEmailVal(e.target.value);
  };

  const handleMobile = (e: any) => {
    setMobileVal(e.target.value);
  };

  const handleConfirmPassword = (e: any) => {
    setConfirmPasswordVal(e.target.value);
  };

  const MobileNumberValidate = () => {
    console.log("MB vali");
  };
  const handlePassword = (e: any) => {
    setPasswordVal(e.target.value);
  };

  const EmailValidate = () => {
    console.log("validation here");
    if (emailVal !== "" && !validator.isEmail(emailVal)) {
      setEmailMessage("Invalid email address");
      setEmailError(true);
      return false;
    } else {
      setEmailMessage("");
      setEmailError(false);
      return true;
    }
  };

  const PasswordValidate = () => {
    const criteriaMet = [
      passwordVal?.match(/[a-z]/),
      passwordVal?.match(/[A-Z]/),
      passwordVal?.match(/[0-9]/),
      passwordVal?.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/),
    ].filter(Boolean).length;
    if (passwordVal.length <= 7 || criteriaMet < 3) {
      setPasswordMessage("Invalid password");
      setPasswordError(true);
      return false;
    } else {
      setPasswordMessage("");
      setPasswordError(false);
      return true;
    }
  };

  const ConfirmPasswordValidate = () => {
    if (passwordVal === confirmPasswordVal) {
      setConfirmPasswordMessage("");
      setSuccessPw(true);
    } else {
      setConfirmPasswordMessage("please match password field");
    }
  };

  const handleProceed = async () => {
    console.log("click");
    const registrationData = {
      fristName,
      email: emailVal,
      mobile: mobileVal,
      password: passwordVal,
      confirmPassword: confirmPasswordVal,
    };

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful:", data);
      } else {
        console.log("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleTC = () => {
    setTC(true);
  };

  const handlePP = () => {
    setPP(true);
  };

  const canSubmitForm: boolean =
    fristName !== "" &&
    emailVal !== "" &&
    passwordVal !== "" &&
    mobileVal !== "" &&
    confirmPasswordVal !== "" &&
    emailMessage === "" &&
    passwordMessage === "" &&
    mobileMessage === "" &&
    successPw === true &&
    TC === true &&
    PP === true &&
    confirmPasswordMessage === "";

  return (
    <div>
      <div className="flex flex-col gap-5 justify-center">
        <div className="w-72 h-12 text-graytext">
          Create your Farm2Home account using your email id.
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="w-80">
            <div className="relative flex items-center h-10 w-full min-w-[200px] ">
              <img
                src={envelop}
                alt="envelop"
                className="w-5 h-4 absolute ml-3 mt-1"
              />
              <input
                type="text"
                placeholder="FirstName"
                onChange={handleFirstName}
                className="bg-transparent bg-white peer h-full w-full border-graytext rounded-[7px] !border !border-gray-300  pl-10 px-3 py-2.5 font-sans text-sm font-normal"
              />
            </div>
          </div>
          <div className="w-80">
            <div className="relative flex items-center h-10 w-full min-w-[200px] ">
              <img
                src={envelop}
                alt="envelop"
                className="w-5 h-4 absolute ml-3 mt-1"
              />
              <input
                type="email"
                placeholder="Your Email ID"
                onKeyUp={EmailValidate}
                onChange={handleEmail}
                className="bg-transparent bg-white peer h-full w-full border-graytext rounded-[7px] !border !border-gray-300  pl-10 px-3 py-2.5 font-sans text-sm font-normal"
              />
            </div>
            <div className="text-red-600 font-xs flex">{emailMessage}</div>
          </div>

          <div className="w-80">
            <div className="relative flex items-center h-10 w-full min-w-[200px] ">
              <img
                src={envelop}
                alt="envelop"
                className="w-5 h-4 absolute ml-3 mt-1"
              />
              <input
                type="number"
                placeholder="phone number"
                onKeyUp={MobileNumberValidate}
                onChange={handleMobile}
                className="bg-transparent bg-white peer h-full w-full border-graytext rounded-[7px] !border !border-gray-300  pl-10 px-3 py-2.5 font-sans text-sm font-normal"
              />
            </div>
          </div>
          <div className="w-80">
            <div className="relative flex items-center h-10 w-full min-w-[200px] ">
              <img
                src={envelop}
                alt="envelop"
                className="w-5 h-4 absolute ml-3 mt-1"
              />
              <input
                type="password"
                placeholder="Password"
                onKeyUp={PasswordValidate}
                onChange={handlePassword}
                className="bg-transparent bg-white peer h-full w-full border-graytext rounded-[7px] !border !border-gray-300  pl-10 px-3 py-2.5 font-sans text-sm font-normal"
              />
            </div>
            <div className="text-red-600 font-xs flex">{passwordMessage}</div>
          </div>
          <div className="w-80">
            <div className="relative flex items-center h-10 w-full min-w-[200px] ">
              <img
                src={envelop}
                alt="envelop"
                className="w-5 h-4 absolute ml-3 mt-1"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleConfirmPassword}
                onKeyUp={ConfirmPasswordValidate}
                className="bg-transparent bg-white peer h-full w-full border-graytext rounded-[7px] !border !border-gray-300  pl-10 px-3 py-2.5 font-sans text-sm font-normal"
              />
            </div>

            <div className="text-red-600 font-xs flex">
              {confirmPasswordMessage}
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative h-10 w-full min-w-[200px] ">
            <button
              type="submit"
              disabled={!canSubmitForm}
              onClick={handleProceed}
              className={
                canSubmitForm
                  ? "bg-greenColor peer h-full w-full rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white"
                  : "bg-slate-300 peer h-full w-full rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white"
              }
            >
              Proceed
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              onClick={handleTC}
              className="form-checkbox bg-white border-gray-300 rounded focus:ring-white"
            />
            <div className="text-graytext font-sans text-sm font-normal">
              Terms and Conditions
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              onClick={handlePP}
              className="form-checkbox bg-white border-gray-300 rounded focus:ring-white"
            />
            <div className="text-graytext font-sans text-sm font-normal">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
