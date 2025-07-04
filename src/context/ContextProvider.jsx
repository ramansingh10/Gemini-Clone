import React, { createContext, useState } from "react";
import { fetchGeminiResponse } from "../config/geminiApi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultdata] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultdata((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat =()=>{
    setLoading(false)
    setShowResult(false)
  }

  const handleClick = async () => {
    setInput("");
    setResultdata("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);  
    setPreviousPrompt(prev=>[...prev,input])
    const response = await fetchGeminiResponse(input);
    let responseArray = response.split("**");
    let newResponse ="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 == 0) {
        newResponse += "<b>" + responseArray[i] + "<b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
  };

  const contextValue = {
    handleClick,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultdata,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
