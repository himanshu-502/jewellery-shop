import React, { useState, useEffect } from "react";
import loginSignupImage from "../../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/account.png"
import useUserProfileStore from "../../store/UserProfileStore";
import useLoginStore from "../../store/LoginStore";
import Loader from "../../components/Loader";

const Login = () => {
  const { 
    email, 
    setEmail, 
    password, 
    setPassword, 
    loginUser, 
    error, 
    loading 
  } = useLoginStore();
  
  const { isSignedIn } = useUserProfileStore();
  
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);
  

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await loginUser();
    } catch (error) {
      console.error('Login error:', error);
    }

  };
  return (
    <div className="p-3 md:p-4 flex flex-row">
      <div ><img className="h-[70vh] w-full p-6" src={image}></img></div>
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={loginSignupImage} className="w-full " />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            disabled = {loading}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              disabled={loading}
              required
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button 
            type="submit" 
            className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4"
            disabled={loading}
          >
            { loading? (<Loader/>) : ("Login") }
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