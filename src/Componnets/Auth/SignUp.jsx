import { createUserWithEmailAndPassword } from "firebase/auth";
import React ,{useState}from "react";
import { auth } from "../../firebase";


const SignUp=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function signUp(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
            console.log(userCredentials);
        }).catch((err)=>{
            console.log("SignIn error ",err);
        });
        setEmail("");
        setPassword("");
    }

return(
    <div className="Sign-in-container">

        <form onSubmit={signUp}>
            <input type="email" placeholder="example@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
            <button>SignUp</button>
        </form>

    </div>
)
}
export default SignUp;