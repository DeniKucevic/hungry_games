import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';
import { PollModel } from "./poll.model";

export class Poll extends Service<PollModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
