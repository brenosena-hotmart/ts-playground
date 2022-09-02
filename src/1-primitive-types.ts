(() => {
  //boolean
  let isOpen: boolean = false;
  isOpen = false;

  //string
  let text: string = 'My text';
  text = 'Another text';

  //number
  let myNumber: number = 1;
  myNumber = 2;
  myNumber = 0x11;
  myNumber = 12.3;

  //array
  let heroes: string[] = []; //Array<string>
  heroes = ['Iron Man', 'Hulk', 'Thor'];

  //tuple
  const myTuple: [string, number, string] = ['a', 2, 'b'];

  //enum
  enum Colors {
    Black = '#000',
    White = '#fff',
  }

  const theme: Colors = Colors.Black;

  //any
  let notUseThis: any;
  notUseThis = 'Any';
  notUseThis = 2;

  //unknown - https://javascript.plainenglish.io/no-more-confusion-about-typescripts-any-and-unknown-98c4b53f8924
  let useWithCaution: unknown;
  useWithCaution = 'My value';
  useWithCaution = 2;

  //void
  function myFunc(): void {
    return undefined; // type void returns undefined
  }

  myFunc();

  //null | undefined
  let nullOrUndefined: null | undefined = null;
  nullOrUndefined = undefined;

  //never
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function logError(): never {
    throw new Error(); //no returns
  }

  //object
  let states: object = {};

  states = {
    SP: 'São Paulo',
    MG: 'Minas Gerais',
  };
})();
