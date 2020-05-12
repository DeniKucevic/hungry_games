import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';
import { OrderModel } from "./order.model";

export class Order extends Service<OrderModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
