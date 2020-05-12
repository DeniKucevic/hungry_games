import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';
import { MealModel } from "./meal.model";

export class Meal extends Service<MealModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
