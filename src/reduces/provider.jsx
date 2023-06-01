import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const context = createContext([]);
const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};

export {context, Provider}