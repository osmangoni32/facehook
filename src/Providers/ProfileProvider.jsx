import React, { useReducer } from "react";
import { profileContext } from "../context";
import { initialState, profileReducer } from "../reducers/profileReducer";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <profileContext.Provider value={{ state, dispatch }}>
      {children}
    </profileContext.Provider>
  );
}
