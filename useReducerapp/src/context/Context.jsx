import { 
   createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

const INITAL_STATE = { isLogin:false, message:''};

export const Context = createContext(INITAL_STATE);

export const ContextProvider = ({children}) => {
  const [state, dispatch]  = useReducer(Reducer,INITAL_STATE);

  return(
<Context.Provider value={{
  state,
  dispatch,
}}>
  {children}
</Context.Provider>
  );
}

export default Context;