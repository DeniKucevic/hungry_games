// Initializes the `ping` service on path `/ping`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ping } from './ping.class';
import hooks from './ping.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ping': Ping & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/ping', new Ping(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ping');

  service.hooks(hooks);
}
