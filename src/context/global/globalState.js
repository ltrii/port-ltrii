import globalContext from "./globalContext";
import React, { useReducer } from "react";
import globalReducer from "./globalReducer";
import { OPEN_CONTACT } from "../types";

const GlobalState = props => {
  const initialState = {
    open: false
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const openContact = (current) => {
      dispatch({
          type: OPEN_CONTACT,
          payload: current
      })
  }


  return (
    <globalContext.Provider
      value={{
        state: state,
        openContact
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalState;