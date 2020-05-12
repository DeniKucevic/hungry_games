import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';
import { VoteModel } from "./vote.model";

export class Vote extends Service<VoteModel> {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
