let users:object[];
users = [];

type User = {userName:string;userId:number};
let user1:User;
 user1={userName:"hehd",userId:233};
 users.push(user1);


 let user2:User;
 user2={userName:"sd sx",userId:23};
 users.push(user2);


console.log(users);

type RequestType="GET"|"POST";
let getreq:RequestType;
getreq="GET";


function gg(rq:RequestType){
console.log(rq);
}
gg("GET");