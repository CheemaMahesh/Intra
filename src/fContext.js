import {useState, useEffect,createContext,useContext } from "react";

const fContexts=createContext();



function useValue(){
    const value=useContext(fContexts);
    return value
}


function FuncContext({children}){
    return(
        <fContexts.Provider>
            {children}
        </fContexts.Provider>
    )
}
export {useValue};
export default FuncContext;