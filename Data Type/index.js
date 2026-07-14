"use strict";
let id; //any
let userId;
let userName;
let isActive;
userId = 101;
userName = "Mehedi Hasan";
isActive = true;
let lastName = "Patwary";
let fullName = userName.concat(lastName);
console.log(`Your name : ${userId},username
    : ${userName}, account activated ${isActive}
      fullName: ${fullName}`);
console.log(fullName.split(" ")); //chechk with no gap in " "
console.log(fullName.toUpperCase());
console.log(fullName.toUpperCase());
function display() {
    console.log("Hi I am Mehedi");
}
display();
