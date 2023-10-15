import React from "react";
import { useValue } from "../../fContext";



export default function AuthControler(){
    const {userID}=useValue();
    return(
        <>
        {userID?<>dd</>:<>dg</>}
        </>
    )
}