// Initializes the `vote` service on path `/vote`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Vote } from './vote.class';
import hooks from './vote.hooks';
import { startVotes } from "./vote.model";

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'vote': Vote & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate'),
    store: startVotes,
    startId: startVotes.length
  };

  // Initialize our service with any options it requires
  app.use('/vote', new Vote(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vote');

  service.hooks(hooks);
}
