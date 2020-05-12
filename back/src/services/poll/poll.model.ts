import { RestaurantModel } from "../restaurant/restaurant.model";
import { VoteModel } from "../vote/vote.model";

export interface PollModel {
  id: number;
  label: string;
  date: Date;
  expire: string;
  restaurants: Array<RestaurantModel> | Array<number>;
  votes: Array<VoteModel> | Array<number>;
  voters: number;
  voted: number;
  active: boolean;
}

export const startPolls: Array<PollModel> = [
  {
    id: 0,
    label: "Problem ponedeljka",
    date: new Date("2020-04-27"),
    expire: "idk",
    restaurants: [0, 1, 2],
    votes: [0, 1, 2],
    voters: 1,
    voted: 0,
    active: true,
  },
];
