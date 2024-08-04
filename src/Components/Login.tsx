import React, { useState } from "react";
import LoginImg from "../assets/LoginImg.png";
import envelop from "../assets/images-f2h/images/envelope.png";
import password from "../assets/images-f2h/images/password.png";
import "../Components/Checkbox.css";
import Register from "./Register";
import validator from "validator";
import Header from "./Header";


const Login: React.FC = () => {
  const [login, setLogin] = useState(true);
  const [reg, setReg] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordVal, setPasswordVal] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [keepMe, setKeepme] = useState(false);

  const handleLoginUI = () => {
    setLogin(true);
    setReg(false);
  };
  const handleRegisterUI = () => {
    setReg(true);
    setLogin(false);
  };

  const handleEmail = (e: any) => {
    setEmailVal(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPasswordVal(e.target.value);
  };

  const EmailValidate = () => {
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

  const handleLogin = () => {};

  const handleKeepme = () =>{
    setKeepme(true);
  }

  const canSubmitForm: boolean =
    emailVal !== "" &&
    passwordVal !== "" &&
    emailMessage === "" &&
    keepMe === true &&
    passwordMessage === "";

  return (
    <>
    <Header/>
    <div className="flex justify-center">
      <img src={LoginImg} alt="mobImg" />
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex justify-around">
          <div className="text-graytext cursor-pointer" onClick={handleLoginUI}>
            Login
          </div>
          <div
            className="text-graytext cursor-pointer"
            onClick={handleRegisterUI}
          >
            Register
          </div>
        </div>
        { login ? (
        <div className="flex">
        <div className="h-1 w-40 bg-greenColor"></div>
        <div className="h-1 w-40 bg-slate"></div>
        </div> ) : (
          <div className="flex">
          <div className="h-1 w-40 bg-slate"></div>
          <div className="h-1 w-40 bg-greenColor"></div>
          </div> 
        )
}
        {login && (
          <>
            <div className="w-80 h-12 text-graytext">
              Please enter your registered email and password to login to your
              account.
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
                    type="email"
                    placeholder="Email"
                    onKeyUp={EmailValidate}
                    onChange={handleEmail}
                    className="bg-transparent bg-white peer h-full w-full border-graytext rounded-[7px] !border !border-gray-300  pl-10 px-3 py-2.5 font-sans text-sm font-normal"
                  />
                </div>
                <div className="text-red-600 font-sm flex">{emailMessage}</div>
              </div>

              <div className="w-80">
                <div className="relative flex items-center h-10 w-full min-w-[200px] ">
                  <img
                    src={password}
                    alt="password"
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
                <div className="text-red-600 font-sm flex">
                  {passwordMessage}
                </div>
              </div>

              <div className="w-80">
                <div className="relative h-10 w-full min-w-[200px] ">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    disabled={!canSubmitForm}
                    className={
                      canSubmitForm
                        ? "bg-greenColor peer h-full w-full rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white"
                        : "bg-slate-300 peer h-full w-full rounded-[7px] !border  !border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-white"
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onClick={handleKeepme}
                  className="form-checkbox bg-white border-gray-300 rounded focus:ring-white"
                />
                <div className="text-graytext font-sans text-sm font-normal">
                  Keep me signed in
                </div>
              </div>
              <div>
                <div className="text-graytext font-sans text-sm font-normal">
                  Forgot Password?
                </div>
              </div>
            </div>
          </>
        )}
        {reg && <Register />}
      </div>
    </div>
    </>
  );
};

export default Login;