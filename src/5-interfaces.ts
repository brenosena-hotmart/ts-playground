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

interface Product {
  id: string;
  type: 'digital' | 'physical';
}

interface DigitalProduct extends Product {
  type: 'digital';
  sizeInMegabytes: number;
}

interface PhysicalProduct extends Product {
  type: 'physical';
  weightInPounds: number;
}
