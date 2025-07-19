import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName]= useState("")
  const navigate = useNavigate();
  const user = { email, password };

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
    const check = await axios.post(
      "http://localhost:5000/user/login",
      user,
      {
        withCredentials: true,
      }
    );
    if (check.status==200) {
      const name= check.data.user.firstName;
      setFirstName(name);
      localStorage.setItem("firstName", name)
      alert("Login Successfull");
      navigate("/main");
    } 
  }catch(error){
    alert("Login Failed")
    console.error("Login error:", error.response?.data || error.message);
  }
  };

  return (
    <div className="bg-gray-600 flex h-screen w-screen items-center justify-center">
      <div className="bg-white box border-2 p-20 rounded-md dark:bg-gray-900">
        <h1 className="text-center text-5xl mb-10 -mt-10 dark:text-white">
          Login
        </h1>

        <form onSubmit={handleLogin} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
              value={email}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={password}
            />
          </div>
          
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>

        <div className="block text-center mt-4">
          <p className=" dark:text-white">Don't have an account?</p>
          <Link to="/register">
            <p className="link text-blue-500">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
