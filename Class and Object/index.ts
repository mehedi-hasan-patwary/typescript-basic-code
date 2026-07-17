class class1 {
  //propertis,methods,constructor

  username: string;  //class er property dekhe variable er age let ba onno kisu dwa lage na
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;

  }

  display(): void {
    console.log(`username ${this.username}, age :${this.age}`)
  }
}
let stu1 = new class1("Mehedi Hasan", 23);

let stu2 = new class1("hd id q", 231);
stu1.display();
stu2.display();