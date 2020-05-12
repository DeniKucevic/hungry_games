export interface VoteModel {
  id: number;
  restaurantId: number;
  votes: number;
}

export const startVotes: Array<VoteModel> = [
  {
    id: 0,
    restaurantId: 0,
    votes: 5
  },
  {
    id: 1,
    restaurantId: 1,
    votes: 15
  },
  {
    id: 2,
    restaurantId: 2,
    votes: 2
  }
];
