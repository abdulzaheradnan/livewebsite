import { createContext,useReducer,useContext } from "react";



export const stateContext=createContext();

export const Stateprovider =({reducer,intialstate,children})=>{
    return<stateContext.Provider value={useReducer(reducer,intialstate)}>
        {children}
    </stateContext.Provider>
}

export const Usestatevalue =() => useContext(stateContext);


