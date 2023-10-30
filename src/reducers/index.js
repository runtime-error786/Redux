import {combineReducers} from "redux";
import { CNP } from "./CN";
import { L_N } from "./Ln";
import { F_N } from "./Fn";
import { Show1 } from "./Sh";

let Root = combineReducers({
    CNP:CNP,
    L_N:L_N,
    F_N:F_N,
    Show1:Show1
})

export {Root};