export interface OrderModel {
  id: number;
  date: Date;
  restaurantId: number;
}

export const startOrders : Array<OrderModel> = [
  {
    id: 0,
    date: new Date("2020-04-27"),
    restaurantId: 0
  }
];
