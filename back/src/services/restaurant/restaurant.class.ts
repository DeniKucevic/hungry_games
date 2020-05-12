import { MemoryServiceOptions, Service } from 'feathers-memory';
import { Application } from '../../declarations';
import { RestaurantModel } from "./restaurant.model";

export class Restaurant extends Service<RestaurantModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
