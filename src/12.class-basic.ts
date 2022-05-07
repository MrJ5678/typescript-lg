class Person {
  public name: string
  private age: number
  protected readonly gender: boolean

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi(msg: string): void {
    // this.gender = false
    console.log(`${this.name} ${this.age}`);
  }
}

class Student extends Person {
  private constructor(name: string, age: number) {
    super(name, age)
    console.log(this.gender);
  }

  static create(name: string, age: number) {
    return new Student(name, age)
  }
}

const person = new Person('jld', 30)
console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

const student = Student.create("jld", 39)
console.log(student);

export {}