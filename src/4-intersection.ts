type Response = {
  message: string;
  code: number;
  status: 'idle' | 'loading' | 'error' | 'ready';
};

type Hero = {
  name: string;
  age: number;
  power: string;
};

type HeroResponse = {
  data: Hero[];
} & Response; //Intersection types
