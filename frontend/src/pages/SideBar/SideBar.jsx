import React, { useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const {newChat,handleClick,previousPrompt, setRecentPrompt}= useContext(Context);
  const navigate = useNavigate();

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await handleClick(prompt)
  }
  const logout = ()=>{
    localStorage.removeItem('loggedInUser','')
    alert("Logged out successfully")
    navigate('/login')
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtended(prev=>!prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item,index)=>{
              return(
                 <div onClick={()=>{
                  loadPrompt(item)
                 }} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
            </div>
              )
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
        <div onClick={logout} className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Log Out</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
