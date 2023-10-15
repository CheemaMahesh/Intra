import React ,{useState,useEffect}from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthDetails=()=>{
const [authUser,setAuthUser]=useState(null);

useEffect(()=>{

        const listen=onAuthStateChanged(auth,(user)=>{
                if(user){
                    setAuthUser(user);
                }else{
                    setAuthUser(null);
                }
        });
        return()=>{
            listen();
        }

},[]);

const userSignOut=()=>{
    signOut(auth).then(()=>{
        console.log("Signout successful");
    }).catch((err)=>{
        console.log("err");
    })
}

    return(
       <>
        {authUser?<>        <h3>{authUser.email}</h3>
<p onClick={userSignOut}>SignedIn</p></>:<>Signed Out</>}
       </>
    )
};

export default AuthDetails;
