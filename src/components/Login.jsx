import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {

const [state,setState] = useState('Sign Up');
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState("");
//console.log(name);
//console.log(email);


  return (
    <div className="container">
      <Navbar />

      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col gap-3 m-auto items-start p-8">
        <h3>{state === 'Sign Up' ? "Create Account" : "Login"}</h3>
        <p>Please {state === 'Sign Up' ? 'sign in' : 'log in'} to book appointment</p>
        {state === 'Sign Up' ?
        <div className="w-full">
        <label>Full Name</label>
        <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(event)=> setName(event.target.value)} value={name} required/><br/>
        </div> : ""  }
       
        <div className="w-full">
        <label>Email</label>
        <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(event) => setEmail(event.target.value)} value={email} required/><br/>
        </div>
        <div className="w-full">
        <label>Password</label>
        <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(event) => setPassword(event.target.value)} value={password} required/><br/>
        </div>
        <button className="bg-primary text-white w-full rounded">{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        </div>
        <div>
        {
          state === 'Sign Up'
          ? <p>Already have an account? <span className="text-primary underline cursor-pointer" onClick={()=> setState('Login')}>Login</span></p> 
          : <p>{`Don't have an account?`} <span className="text-primary  underline cursor-pointer" onClick={()=> setState('Sign Up')}>Sign Up</span></p>
        }
        </div>
      </form>
    </div>
    

      <Footer />
    </div>
  );
};

export default Login;
