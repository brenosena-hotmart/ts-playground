/**
 * 1 - Class Decorator
 * 2 - Property Decorator
 * 3 - Method Decorator
 * 4 - Accessor Decorator
 * 5 - Parameter Decorator
 */

//Class Decorator
function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setApiVersion('1.0.0')
class API {}
console.log(new API()); // "version": "1.0.0"

// Property Decorator
function logProperty(target: unknown, key: string) {
  const newKey = `_${key}`;

  Object.defineProperty(target, key, {
    get() {
      console.log(`Get: ${key} => ${this[newKey]}`);
      return this[newKey];
    },
    set(newVal) {
      console.log(`Set: ${key} => ${newVal}`);
      this[newKey] = newVal;
    },
    enumerable: true,
    configurable: true,
  });
}

class Task {
  @logProperty
  public id: number;

  @logProperty
  public title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

const task = new Task(1, 'Write more articles');
// Set: id => 1
// Set: title => Write more articles

console.log(task.id, task.title);

//Method decorators
function enumerable(newValue: boolean) {
  return (
    _target: unknown,
    _propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    propertyDescriptor.enumerable = newValue;
  };
}

class User {
  name: string = 'Breno';

  @enumerable(true)
  changePassword(_newPassword: string) {
    return _newPassword;
  }
}

const user = new User();

for (const key in user) {
  console.log(key);
}

//Accessor Decorator
class User2 {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @enumerable(false)
  get name() {
    return this._name;
  }
}

const user2 = new User2('Pablo');

for (let key in user2) {
  console.log(key);
}

//Parameter Decorator
function showInfo() {
  return (target: unknown, propertyKey: string, parameterIndex: number) => {
    console.log('target', target);
    console.log('property key', propertyKey);
    console.log('parameter index', parameterIndex);
  };
}

class User3 {
  changeName(@showInfo() name: string) {
    return undefined;
  }
}
