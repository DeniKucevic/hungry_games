// Initializes the `restaurant` service on path `/restaurant`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Restaurant } from './restaurant.class';
import hooks from './restaurant.hooks';
import { startRestaurants } from "./restaurant.model";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'restaurant': Restaurant & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
    store: startRestaurants,
    startId: startRestaurants.length
  };

  // Initialize our service with any options it requires
  app.use('/restaurant', new Restaurant(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('restaurant');

  service.hooks(hooks);
}
