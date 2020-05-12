// Application hooks that run for every service
// Don't remove this comment. It's needed to format import lines nicely.
import { v4 as uuidv4 } from "uuid";
import { HookContext } from "@feathersjs/feathers";

const addUUID = (context: HookContext) => {
  if (context.data[context.service.id] != null) {
    return context;
  }
  context.data = {
    [context.service.id]: uuidv4(),
    ...context.data,
  };
  return context;
};

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
