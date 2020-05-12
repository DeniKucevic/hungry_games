export interface RestaurantModel {
  id: number;
  name: string;
  address?: string;
  desc?: string;
}

export const startRestaurants: Array<RestaurantModel> = [
  {
    id: 0,
    name: "Fenjer",
    address: "Vase Pelagića 3",
  },
  {
    id: 1,
    name: "Kod bake i deke",
    address: "Vase Pelagića 5",
  },
  {
    id: 2,
    name: "Burito",
  },
  {
    id: 3,
    name: "Burito Madre",
  },
  {
    id: 4,
    name: "Burito Madre",
  },
  {
    id: 5,
    name: "Burito Madre",
  },
  {
    id: 6,
    name: "Burito Madre",
  },
  {
    id: 7,
    name: "Burito Madre",
  },
  {
    id: 8,
    name: "Burito Madre",
  },
];
