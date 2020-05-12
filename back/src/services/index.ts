import { Application } from "../declarations";
import ping from "./ping/ping.service";
import meal from "./meal/meal.service";
import restaurant from "./restaurant/restaurant.service";
import poll from "./poll/poll.service";
import vote from "./vote/vote.service";
import orderItem from "./order-item/order-item.service";
import order from "./order/order.service";
import user from "./user/user.service";
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(ping);
  app.configure(meal);
  app.configure(restaurant);
  app.configure(poll);
  app.configure(vote);
  app.configure(orderItem);
  app.configure(order);
  app.configure(user);
}
