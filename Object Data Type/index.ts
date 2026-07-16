let users:object[];
users=[];

let user1: {userName: string;userId:number};
user1={userName:"Mehedi",userId:101};
users.push(user1);

let user2:{userName:string;userId:number};
user2={userName:"dwd ec",userId:63};
users.push(user2);
console.log(users);


//how to print object
for(const key in users){
    console.log(users[key]["userName"]);
}