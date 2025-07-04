import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkUserToLocalStorage } from "../../LocalStorage/LocalStorage";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = { email, password };

  const handleLogin = (e) => {
    e.preventDefault();
    const check = checkUserToLocalStorage(user);
    if (check.success) {
      alert("Login Successfull");
      console.log("Logged-in-user:", check.user);
      navigate("/homepage");
    } else {
      alert(check.message);
    }
  };

  return (
    <div className="bg-gray-600 flex h-screen w-screen items-center justify-center">
      <div className="bg-white box border-2 p-20 rounded-md">
        <h1 className="text-center text-5xl mb-10 -mt-10">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center "
          action=""
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="input outline-none bg-transparent  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="input outline-none bg-transparent  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3"
            placeholder="Enter your Password"
          />
          <button
            className="login w-72 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-5"
            type="submit"
          >
            Log in
          </button>
        </form>
        <div className="block text-center mt-4">
        <p>
          Don't have an account?
        </p>
        <Link to="/register">
            <p className="text-blue-500">
              Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
