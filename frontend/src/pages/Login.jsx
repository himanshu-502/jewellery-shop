import React, { useState } from "react";
import loginSignupImage from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/account.png"
import { userDetails } from "../data/DataSet";
import { useUserProfile } from "../context/UserProfileContext";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { setUserProfile } = useUserProfile();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const userData = userDetails.find(
      (user) => user.email === email && user.password === password
    );
    if (userData) {
      setUserProfile(userData);
      alert("Login Successfull")
      navigate("/");



    } else {
      alert("Invalid Email or Password!!");
    }
  };
  return (
    <div className="p-3 md:p-4 flex flex-row">
      <div ><img className="h-[70vh] w-full p-6" src={image}></img></div>
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={loginSignupImage} className="w-full " />


        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>



          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>



          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Do not have account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login