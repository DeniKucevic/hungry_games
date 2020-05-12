import { Service, MemoryServiceOptions } from "feathers-memory";
import { Application } from "../../declarations";
import { UserModel } from "./user.model";

export class User extends Service<UserModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
