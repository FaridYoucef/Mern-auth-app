import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen  ">
      <form
        onSubmit={submitHandler}
        className=" max-w-md  p-10 bg-slate-100 rounded-xl  flex flex-col shadow-lg"
      >
        <h2 className=" text-2xl font-bold text-center pb-3">Sign Up</h2>

        <label htmlFor="text" className="py-3">
          User name
        </label>
        <input
          type="name"
          placeholder="Enter your name"
          className="p-1 rounded-full py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          placeholder="Enter your name"
          className="p-1 rounded-full py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="text" className="py-3">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Enter your name"
          className="p-1 rounded-full  py-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="my-4 py-2 text-white bg-[#292929] hover:text-slate-300 rounded-full w-32 mx-auto">
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link to={"/signin"} className="text-sm text-blue-500">
            sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
