// Initializes the `order` service on path `/order`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Order } from './order.class';
import hooks from './order.hooks';
import { startOrders } from "./order.model";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'order': Order & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
    store: startOrders,
    startId: startOrders.length
  };

  // Initialize our service with any options it requires
  app.use('/order', new Order(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('order');

  service.hooks(hooks);
}
