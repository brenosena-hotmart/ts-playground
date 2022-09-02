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
