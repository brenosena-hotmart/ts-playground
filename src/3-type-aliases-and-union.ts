(() => {
  /**
   * Type alias: Data set for describing objects and primitive types
   */
  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  const todo: Todo = {
    title: 'Study typescript',
    description: 'Typescript is a javascript superset',
    completed: false,
  };

  type Todo2 = {
    title: string;
    description?: string; //Optional
    completed: boolean;
  };

  const todo2: Todo2 = {
    title: 'Study tests',
    completed: false,
  };

  // Union type
  type Status = 'idle' | 'loading' | 'error' | 'ready';

  const setStatus = (status: Status) => status;
  setStatus('loading');
})();
