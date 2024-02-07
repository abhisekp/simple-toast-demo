import { useEffect, useState } from "react";

const initialState = {
  message: "",
};

let memoryState = {
  ...initialState,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
        message: "",
      };
  }
};

const listeners = [];

const dispatch = (action: { payload: string; type: string }) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

export const sendMessage = (message: string) => {
  dispatch({
    type: "MESSAGE",
    payload: message,
  });
};

export const useStore = () => {
  const [message, setMessage] = useState(memoryState.message);

  useEffect(() => {
    listeners.push(setMessage);
  }, [message]);

  return { message };
};
