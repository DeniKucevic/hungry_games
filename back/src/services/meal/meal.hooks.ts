import { HookContext } from "@feathersjs/feathers";

export default {
  before: {
    all: [],
    find: [],
    get: [
      (context: any) => {
        const { query = {} } = context.params;
        if (query.restaurantId) {
          query.restaurantId = parseInt(query.restaurantId, 10);
        }
        context.query = query;
        return context;
      },
    ],
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
