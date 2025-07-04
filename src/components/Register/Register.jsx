import React, { useState } from "react";
import './Register.css'
import { Link } from "react-router-dom";
import { saveUserToLocalStorage } from "../../LocalStorage/LocalStorage";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const newUser={name,email,password}
  //localStorage.clear()

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newUser);
    const success = saveUserToLocalStorage(newUser);
    if(success){
      alert('User registered successfully!');
      setName("");
      setEmail("");
      setPassword("");
    }else{
      console.log("Registration failed")
    }
  };

  

  return (
    <div className="bg-gray-600 flex h-screen w-screen items-center justify-center">
      <div className="form-box bg-white border-2 border-none rounded-md p-20">
        <h1 className="text-4xl text-center mb-8">Register</h1>
        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col justify-center"
        >
          <label htmlFor="name" className="label text-2xl text-left ml-4">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            type="text"
            name=""
            id="name"
            placeholder="Enter Name"
            className="input outline-none bg-transparent  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mb-3"
          />
          <label htmlFor="email" className="label text-2xl text-left ml-4">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            name=""
            id="email"
            placeholder="Enter Email"
            className="input outline-none bg-transparent  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mb-3"
          />
          <label htmlFor="password" className="label text-2xl text-left ml-4">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            id="password"
            placeholder="Enter Password"
            className="input outline-none bg-transparent  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mb-3"
          />
          <button
            type="submit"
            className="signup text-2xl w-full border-2 m-2 rounded-md bg-green-500"
          >
            Sign Up
          </button>
        </form>
        <div className="block text-center mt-4">
        <p>Already Have an Account?
        </p>
        <Link to="/login">
        <p className="text-blue-500 ml-2">Login</p> 
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
