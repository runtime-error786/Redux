let Fn = (num)=>{
    return{
        type:"firstname",
        payload:num

    }
}


let Ln = (num)=>{
    return{
        type:"ln",
        payload:num
    }
}

let Cn = (num)=>{
    return{
        type:"cityname",
        payload:num

    }
}

let SH = (num)=>{
    return{
        type:"dis",
        payload:num
    }
}

export {Fn,Ln,Cn,SH};

