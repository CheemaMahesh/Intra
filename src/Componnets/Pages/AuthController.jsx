import React from "react";
import { useValue } from "../../fContext";
import AsController from "./ASController";
import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";
import AuthDetails from "../AuthDetails";



export default function AuthControler(){
    const {email}=useValue();
    return(
        <>
        {email?<div className="dummy">
        <Home/>
        <Cart/>
        <Orders/>
        <br/>
        <AuthDetails/>
        </div>:<div>
        <AsController/>
        </div>}
        </>
    )
}