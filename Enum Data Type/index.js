"use strict";
//numeric enum
var UserReq;
(function (UserReq) {
    UserReq[UserReq["Getdata"] = 0] = "Getdata";
    UserReq[UserReq["saveData"] = 1] = "saveData";
    UserReq[UserReq["ReadData"] = 2] = "ReadData";
})(UserReq || (UserReq = {}));
console.log(UserReq);
var UserReq1;
(function (UserReq1) {
    UserReq1[UserReq1["Getdata"] = 2] = "Getdata";
    UserReq1[UserReq1["saveData"] = 4] = "saveData";
    UserReq1[UserReq1["ReadData"] = 5] = "ReadData";
})(UserReq1 || (UserReq1 = {}));
console.log(UserReq1);
console.log(UserReq.saveData); //chaile alada alada bghabe aaccess kora jay
//string enum
var UserReq2;
(function (UserReq2) {
    UserReq2["Getdata"] = "Read_data";
    UserReq2["saveData"] = "g shx";
    UserReq2["ReadData"] = "js cgh";
})(UserReq2 || (UserReq2 = {}));
console.log(UserReq2.ReadData);
console.log(UserReq2);
//hetrtgenous enum
var UserReq4;
(function (UserReq4) {
    UserReq4["Getdata"] = "hsd";
    UserReq4["saveData"] = "ahu";
    UserReq4[UserReq4["ReadData"] = 101] = "ReadData";
})(UserReq4 || (UserReq4 = {}));
console.log(UserReq4.ReadData);
console.log(UserReq4);
