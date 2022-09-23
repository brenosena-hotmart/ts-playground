type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Todo = {
  title: 'Study english',
  description: 'English is good!',
  completed: true,
};

type Todo2 = Pick<Todo, 'title' | 'description'>;

const todo2: Todo2 = {
  title: 'Study DevOps',
  description: 'DevOps is very good!',
};

type Todo3 = Omit<Todo, 'title'>;

const todo3: Todo3 = {
  description: 'Study UX',
  completed: true,
};

type Todo4 = Partial<Todo>;

const todo4: Todo4 = {
  title: 'Study back-end',
};

type Todo5 = Required<Todo4>;

const todo5: Todo5 = {
  title: 'Study React.js',
  description: 'React.js is good!',
  completed: true,
};

type Todo6 = Readonly<Todo>;

const todo6: Todo6 = {
  title: 'Study Vue.js',
  description: 'Vue.js is good!',
  completed: true,
};

//todo6.title = ''; Cannot assign to 'title' because it is a read-only property.

type IconSize = {
  width: number;
  height: number;
};

type IconSizeKey = 'sm' | 'md' | 'lg';

const iconSizes: Record<IconSizeKey, IconSize> = {
  sm: { width: 10, height: 20 },
  md: { width: 30, height: 40 },
  lg: { width: 40, height: 50 },
};

const getText = (text: string) => text;

const data: ReturnType<typeof getText> = 'text';

const theme = {
  black: '#000',
  white: '#fff',
} as const;
