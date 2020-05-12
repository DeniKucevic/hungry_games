import { RestaurantModel } from "../restaurant/restaurant.model";
import { MealModel } from "../meal/meal.model";

export interface UserModel {
  id: number;
  name: string;
  userName: string;
  password: string;
  email: string;
  description?: string;
  restaurantId: Array<RestaurantModel> | Array<number>;
  meal: Array<MealModel> | Array<number>;
  avatar: string;
}

export const startUsers: Array<UserModel> = [
  {
    id: 0,
    name: "Nemanja",
    userName: "MEMI",
    password: "MEMI123",
    email: "nesto@nesto.com",
    description: "Napisite nesto o sebi",
    restaurantId: [0,1,2,3],
    meal: [0],
    avatar: "src=#",
  },
];
