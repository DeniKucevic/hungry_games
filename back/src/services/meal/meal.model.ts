export interface MealModel {
  id: number;
  title: string;
  description?: string;
  available: boolean;
  price: number;
  restaurantId: number;
}

export const startMeals: Array<MealModel> = [
  {
    id: 0,
    title: 'Pizza margarita',
    description: '32 cm',
    available: true,
    price: 530,
    restaurantId: 0
  },
  {
    id: 1,
    title: 'Pizza margarita',
    description: '42 cm',
    available: true,
    price: 780,
    restaurantId: 0
  },
  {
    id: 2,
    title: 'Pizza na preklop',
    available: true,
    price: 400,
    restaurantId: 0
  },
  {
    id: 3,
    title: 'Doručak fenjer',
    available: false,
    price: 500,
    restaurantId: 0
  },
  {
    id: 4,
    title: 'Gocijev specijal',
    available: false,
    price: 600,
    restaurantId: 1
  },
  {
    id: 5,
    title: 'Njoke',
    description: '100g',
    available: true,
    price: 60,
    restaurantId: 1
  },
  {
    id: 6,
    title: 'Burito',
    available: true,
    price: 380,
    restaurantId: 2
  }
];
