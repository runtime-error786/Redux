import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fn } from "./actions";
import { Ln } from "./actions";
import { Cn } from "./actions";
import { SH } from "./actions";

function HJ()
{
    let first = useSelector((State)=>State.F_N);
    let last = useSelector((State)=>State.L_N);
    let CN = useSelector((State)=>State.CNP);
    let SX = useSelector((State)=>State.Show1)

    let disp = useDispatch();
    return(
        <>
            <h3>Using CSS to style an HTML Form</h3>

<div>

  <form >
  <div>{first} : {last} : {CN} : {SX}</div>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." value={first} onChange={(e)=>{
              disp(SH("false"));
        disp(Fn(e.target.value));
    }}/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={last} onChange={(e)=>{
        disp(Ln(e.target.value));
    }} />

    <label for="country">Country</label>
    <select id="country" onClick={(e)=>{
        disp(Cn(e.target.value));
      }} name="country">
      <option value="australia" >Australia</option>
      <option value="canada" >Canada</option>
      <option value="usa" >USA</option>
    </select>
  
    <button type="button" onClick={()=>{
        disp(SH("true"));
    }} value="Submit">submit</button>
  </form>
</div>

        </>
    )
}

export {HJ};