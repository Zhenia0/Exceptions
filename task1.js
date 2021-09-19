function getDivision(a, b){
    if(b === 0){
        throw new Error("You can't divide on zero");
    }
    return a / b;
}
let msg;
try{
    msg = getDivision(1, 0);
}catch(e){
    msg = e.message;
}
console.log(msg);
