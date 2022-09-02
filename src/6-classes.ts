class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const person = new Person('Breno');
console.log(person.name);
person.name = 'Pablo';
console.log(person.name);
