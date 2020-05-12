export interface OrderItemModel {
  id: number;
  note?: string;
  quantity: number;
  mealId: number;
  orderId: number;
  user: string;
}

export const startOrderItems: Array<OrderItemModel> = [
  {
    id: 0,
    note: 'Bez origana',
    quantity: 1,
    mealId: 2,
    orderId: 0,
    user: 'Pera'
  },
  {
    id: 1,
    quantity: 2,
    mealId: 0,
    orderId: 0,
    user: 'Mika'
  },
  {
    id: 2,
    quantity: 1,
    mealId: 1,
    orderId: 0,
    user: 'Zika'
  }
];
