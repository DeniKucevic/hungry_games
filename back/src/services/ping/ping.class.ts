import { MemoryServiceOptions, Service } from 'feathers-memory';
import { Application } from '../../declarations';
import { Id, NullableId, Params } from "@feathersjs/feathers";

export class Ping extends Service {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }

  async find(params: Params) {
    return [{name: "Pong"}]
  }
  async get(id: Id, params: Params) {
    return [{name: "Pong " + id}]
  }
  async create(data: any, params: Params) {}
  async update(id: NullableId, data: any, params: Params) {}
  async patch(id: NullableId, data: any, params: Params) {}
  async remove(id: NullableId, params: Params) {}
}
