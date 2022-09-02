/**
 * Set of data to describe the structure of an object
 */

interface Car {
  color: string;
  year: number;
  doors: number;
  type: 'electric' | 'hybrid' | 'combustion';
  brand: string;
}

const leaf: Car = {
  color: 'white',
  doors: 5,
  year: 2023,
  type: 'electric',
  brand: 'Nissan',
};

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
