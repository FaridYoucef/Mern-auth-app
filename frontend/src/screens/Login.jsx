import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen  ">
      <form className=" max-w-md  p-10 bg-slate-100 rounded-xl  flex flex-col shadow-lg">
        <h2 className=" text-2xl font-bold text-center pb-3">Sign In</h2>

        <label htmlFor="email" className="py-3">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          className="p-1 rounded-full py-2"
        />

        <label htmlFor="password" className="py-3">
          Passsword
        </label>
        <input
          type="password"
          placeholder="Enter your name"
          className="p-1 rounded-full py-2"
        />

        <button className="my-5 py-2 text-white bg-[#292929] hover:text-slate-300 rounded-full w-32 mx-auto">
          Sign in
        </button>
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-sm text-blue-500">
            sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
