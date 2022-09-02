type UseStateTypes<T> = [T, (S: T) => void];

function useState<T>(initialState: T): UseStateTypes<T> {
  let state: T = initialState;

  function setState(newState: T): void {
    state = newState;
  }

  return [state, setState];
}

function myComponent() {
  const [hero, setHero] = useState<string>('Iron Man');
  console.log(hero);

  setHero('Hulk');

  console.log(hero);
}

myComponent();
