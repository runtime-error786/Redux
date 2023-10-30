let ini = null;
let CNP = (state=ini,action)=>{
    if(action.type=="cityname")
    {
        return state=action.payload;
    }
    else{
        return state;
    }
}

export {CNP};