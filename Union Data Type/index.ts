//more than one type for variable or function parameter


let userId : string|number|boolean;
userId="101";
userId=101;
userId=true;
function display(userId:string|number){
    console.log(userId)
}
display("awed qa");
display(101);