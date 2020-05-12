// Initializes the `meal` service on path `/meal`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Meal } from './meal.class';
import hooks from './meal.hooks';
import { startMeals } from "./meal.model";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'meal': Meal & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
    store: startMeals,
    startId: startMeals.length
  };

  // Initialize our service with any options it requires
  app.use('/meal', new Meal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('meal');

  service.hooks(hooks);
}
