import { useState } from "react";
export const useVisualMode = (input) => {
  const [mode, setMode] = useState(input);
  const [history, setHistory] = useState([input]);

  function transition(newMode, replace = false) {
    if (!replace) {
      setHistory([...history, newMode]);
    } else {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
    }
  }

  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  }

  return { mode: history[history.length - 1], transition, back };
};