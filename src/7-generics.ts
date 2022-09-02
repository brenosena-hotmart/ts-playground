type UseStateType<S> = {
  getState: () => S;
  setState: (payload: S) => void;
};

function useState<S>(initialState: S): UseStateType<S> {
  let state: S = initialState;

  function getState(): S {
    return state;
  }

  function setState(newState: S): void {
    state = newState;
  }

  return { getState, setState };
}

function myComponent() {
  const { getState, setState } = useState<string>('Iron Man');

  console.log(getState());

  setState('Hulk');

  console.log(getState());
}

myComponent();
