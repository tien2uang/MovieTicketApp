import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";
const INITIAL_STATE ={
    user:"",
    err:"",
    order:"",
    hasPay:false

}
export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({children })=>{
    const [state,dispatch]= useReducer(AppReducer,INITIAL_STATE);


    return (
        <AppContext.Provider
          value={{
            user: state.user,
            err: state.err,
            order:state.order,
            hasPay:state.hasPay,
            dispatch,
          }}
        >
          {children}
        </AppContext.Provider>
      );
}