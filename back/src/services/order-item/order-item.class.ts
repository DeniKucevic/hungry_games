import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';
import { OrderItemModel } from "./order-item.model";

export class OrderItem extends Service<OrderItemModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
