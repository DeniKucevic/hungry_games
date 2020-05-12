// Initializes the `poll` service on path `/poll`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Poll } from './poll.class';
import hooks from './poll.hooks';
import { startPolls } from "./poll.model";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'poll': Poll & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
    store: startPolls,
    startId: startPolls.length
  };

  // Initialize our service with any options it requires
  app.use('/poll', new Poll(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('poll');

  service.hooks(hooks);
}
