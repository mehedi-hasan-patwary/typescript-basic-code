class class2 {
  //propertis,methods,constructor

  username: string;  //class er property dekhe variable er age let ba onno kisu dwa lage na
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;

  }

  display(): void {
    console.log(`username ${this.username}, age :${this.age}`);
  }
}
// let st1 = new class2("Mehedi Hasan", 23);

// let st2 = new class2("hd id q", 231);
// st1.display();
// st2.display();

class Student extends class2 {   //class 2 er property username age egulo Student class e chole esheche
  //her student is a child class
  //class2 super class
  private studentId: number;
  constructor(username: string, age: number, studentId: number) {

    super(username, age)
    this.studentId = studentId;
  }
  display(): void {
    console.log(`username ${this.username}, age :${this.age},id :${this.studentId}`);
  }

  setStudetId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }

}

let st1 = new Student("wed", 2, 23);


st1.display();
st1.username = "hde";

st1.setStudetId(2566);//  note student id private hwr porea etake access kora hoyeche
console.log(st1);

console.log(st1.getStudentId());