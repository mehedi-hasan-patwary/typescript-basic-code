export class class2 {
    //propertis,methods,constructor
    username; //class er property dekhe variable er age let ba onno kisu dwa lage na
    age;
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
    display() {
        console.log(`username ${this.username}, age :${this.age}`);
    }
}
// let st1 = new class2("Mehedi Hasan", 23);
// let st2 = new class2("hd id q", 231);
// st1.display();
// st2.display();
