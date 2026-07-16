//numeric enum
enum UserReq{
    Getdata,  //variable
    saveData,
    ReadData,
}
console.log(UserReq);
enum UserReq1{
    Getdata=2,  //variable
    saveData=4,
    ReadData,
}
console.log(UserReq1);
console.log(UserReq.saveData); //chaile alada alada bghabe aaccess kora jay



//string enum


enum UserReq2{
    Getdata="Read_data",  //variable
    saveData="g shx",
    ReadData="js cgh",
}
console.log(UserReq2.ReadData);
console.log(UserReq2);
//hetrtgenous enum
enum UserReq4{
    Getdata="hsd",  //variable
    saveData="ahu",
    ReadData=101,
}
console.log(UserReq4.ReadData);
console.log(UserReq4);