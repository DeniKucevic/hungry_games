// Initializes the `user` service on path `/user`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { User } from "./user.class";
import hooks from "./user.hooks";
import { startUsers } from "./user.model";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    'user' : User & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get("paginate"),
    store: startUsers,
    startId: startUsers.length,
  };

  // Initialize our service with any options it requires
  app.use("/user", new User(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("user");

  service.hooks(hooks);
}
