abstract class Animal {
  eat(food: string): void {
    console.log(`呼呼吃: ${food}`);
  }

  abstract run(distance: number): void
 }

class Dog extends Animal {
  run(distance: number): void {
    console.log(`run ${distance} miles`);
  }
}

const d = new Dog()
d.eat('meat')
d.run(100)

export {}