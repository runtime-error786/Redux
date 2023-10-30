import {React} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SH } from "./actions";
function POP()
{
    let fg = useDispatch();
    let first = useSelector((State)=>State.F_N);
    let last = useSelector((State)=>State.L_N);
    let CN = useSelector((State)=>State.CNP);
    let show1 = useSelector((State)=>State.Show1);

    return(
        <>
       {
        show1 == "true"?
        <div>
      my first name is {first}
      my last  name is {last}
      my city is {CN}
      my state is {show1}
      </div>:null
       }
       
        </>
    )
}

export {POP};