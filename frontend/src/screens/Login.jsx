import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useLoginMutation } from "../slices/userApiSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetching data to login

  const [login, isLoading] = useLoginMutation();
  // to get the user data from the userInfo in the reducer we use useSelector
  const { userInfo } = useSelector((state) => state.auth);

  //if userInfo, that means user is logged in
  // if logged in, navigate to user profile
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err.data.message || err.message);
    }
    // console.log({ userInfo });
  };

  return (
    <div className="flex justify-center items-center h-screen  ">
      <form
        onSubmit={handleSubmit}
        className=" max-w-md  p-10 bg-slate-100 rounded-xl  flex flex-col shadow-lg"
      >
        <h2 className=" text-2xl font-bold text-center pb-3">Sign In</h2>

        <label htmlFor="email" className="py-3">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          className="p-1 rounded-full py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="py-3">
          Passsword
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="p-1 rounded-full py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="my-5 py-2 text-white bg-[#292929] hover:text-slate-300 rounded-full w-32 mx-auto">
          Sign in
        </button>
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-sm text-blue-500">
            sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
