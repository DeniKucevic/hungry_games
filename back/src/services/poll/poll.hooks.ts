import { HookContext } from "@feathersjs/feathers";
import { PollModel } from "./poll.model";

const enrichData = async (context: HookContext, poll : PollModel) => {
  for(let restaurantId in poll.restaurants){
    poll.restaurants[restaurantId] = await context.app.service('restaurant').get(poll.restaurants[restaurantId]);
  }
  for(let voteId in poll.votes){
    poll.votes[voteId] = await context.app.service('vote').get(poll.votes[voteId]);
  }
}

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [async (context: HookContext) => {
      let polls = context.result.data as Array<PollModel>;
      for(let pollId in polls) {
        await enrichData(context, polls[pollId]);
      }
      return context;
    }],
    get: [async (context: HookContext) => {
      await enrichData(context, context.result);
      return context;
    }],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
