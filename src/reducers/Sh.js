
let ini = "false";

let Show1 = (state=ini,action)=>{
    if(action.type=="dis")
    {
        return state=action.payload;
    }
    else{
        return state;
    }
}

export {Show1};