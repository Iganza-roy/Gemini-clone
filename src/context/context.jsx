import { createContext, useState } from 'react';
import run from '../config/Gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setrecentPrompt] = useState('');
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);
    const resonse = await run(input);
    setResultData(resonse);
    setLoading(false);
    setInput('');
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
