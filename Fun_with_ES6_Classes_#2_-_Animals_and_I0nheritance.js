class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, status);
      this.legs =0;
      this.species='shark';
      this.status=status;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs =4;
        this.species='cat';
        this.status=status;
      }
      introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
      }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status);
        this.legs =4;
        this.species='dog';
        this.status=status;
        this.master= master;
      }
      greetMaster(){
        return `Hello ${this.master}`;
      }
  }
  var billy = new Dog("Billy", 3, "Alive and well","Jim");
  console.log(billy.name);
  console.log(billy.age);
  console.log(billy.legs);
  console.log(billy.species);
  console.log(billy.status);
  console.log(billy.introduce());
  console.log(billy.greetMaster());