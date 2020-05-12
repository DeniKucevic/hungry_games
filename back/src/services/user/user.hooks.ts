import { HookContext } from "@feathersjs/feathers";
import { UserModel } from "./user.model";

const enrichData = async (context: HookContext, user: UserModel) => {
  for (let restaurantId in user.restaurantId) {
    user.restaurantId[restaurantId] = await context.app
      .service("restaurant")
      .get(user.restaurantId[restaurantId]);
  }
  for (let mealId in user.meal) {
    user.meal[mealId] = await context.app
      .service("meal")
      .get(user.meal[mealId]);
  }
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
    find: [
      async (context: HookContext) => {
        let users = context.result.data as Array<UserModel>;
        for (let usersId in users) {
          await enrichData(context, users[usersId]);
        }
        return context;
      },
    ],
    get: [
      async (context: HookContext) => {
        await enrichData(context, context.result);
        return context;
      },
    ],
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
