import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [dark, setDark] = useState(()=>
  localStorage.getItem("theme")==="dark"
);
const navigate = useNavigate();
const [name, setName]=useState("");
 useEffect(()=>{
  const storedName = JSON.parse(localStorage.getItem("loggedInUser"));
  setName(storedName.name)
 },[]);

 const logout = ()=>{
    localStorage.removeItem('loggedInUser','')
    alert("Logged out successfully")
    navigate('/login')
  }

  useEffect(()=>{
    const root=document.body;
    if(dark){
      root.classList.add("dark-mode-color")
      localStorage.setItem("theme","dark")
    }else{
      root.classList.remove("dark-mode-color")
      localStorage.setItem("theme","light")
    }
  },[dark]);

  const {
    handleClick,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div>
          <img
            onClick={() => {
              setDark((prev) => !prev);
            }}
            src={dark ? assets.sun : assets.moon}
            className="dark-mode"
            alt="darkmode"
          />
          <img 
          onClick ={logout}
          src={assets.logout} alt="logout" className="logout"/>
          <img src={assets.user_icon} alt="Profile" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, {name}</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest a beautiful place to see on a upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly explain the concept of speed</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Capital of Congo</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>President of Uganda</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img className="icon" src={assets.gallery_icon} alt="" />
              <img className="icon" src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => {
                    handleClick();
                  }}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
