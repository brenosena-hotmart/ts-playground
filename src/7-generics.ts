function setState<T>(data: T) {
  let state: T;

  state = data;

  return state;
}

const hero = setState<string>('Iron Man');
