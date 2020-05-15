import { RestaurantModel } from "../restaurant/restaurant.model";
import { VoteModel } from "../vote/vote.model";

export interface PollModel {
  id: number;
  label: string;
  date: Date;
  restaurants: Array<RestaurantModel> | Array<number>;
  votes: Array<VoteModel> | Array<number>;
}

export const startPolls: Array<PollModel> = [
  {
    id: 0,
    label: "Problem ponedeljka",
    date: new Date("2020-04-27"),
    restaurants: [0, 1, 2],
    votes: [0, 1, 2],
  },
];
