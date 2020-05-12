// Initializes the `orderItem` service on path `/order-item`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { OrderItem } from './order-item.class';
import hooks from './order-item.hooks';
import { startOrderItems } from "./order-item.model";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'order-item': OrderItem & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
    store: startOrderItems,
    startId: startOrderItems.length
  };

  // Initialize our service with any options it requires
  app.use('/order-item', new OrderItem(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('order-item');

  service.hooks(hooks);
}
