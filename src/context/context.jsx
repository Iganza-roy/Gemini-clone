import { createContext, useState } from 'react';
import run from '../config/Gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setrecentPropmt] = useState('');
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResponse, setShowResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState('');

  const onSent = async (prompt) => {
    await run(prompt);
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setrecentPropmt,
    previousPrompt,
    setPreviousPrompt,
    showResponse,
    setShowResponse,
    loading,
    setLoading,
    responseData,
    setResponseData,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
