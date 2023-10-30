let inot= null;
let L_N = (state=inot,action)=>{
    if(action.type=="ln")
    {
        return state=action.payload;
    }
    else{
        return state;
    }
}

export {L_N};