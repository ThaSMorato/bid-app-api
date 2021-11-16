import users from "../../../../data/users.json";
import { User } from "../model/UserModel";

export class UsersRepository {
  private users: User[];
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = users as User[];
  }

  public static getInstance() {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  validateUser(login: string, password: string) {
    //dummy authentication
    const user = this.users.find((u) => u.login === login && u.password === password);
    if (!user) throw new Error("Login or password mismatch");
    const {
      avatar_url,
      bid_alert_at,
      id,
      login: userLogin,
      maximum_bid_amount,
      name,
      role,
      products_on_autobid,
    } = user;
    return {
      avatar_url,
      bid_alert_at,
      id,
      login: userLogin,
      maximum_bid_amount,
      name,
      role,
      products_on_autobid,
    };
  }
  private findUsersById(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new Error("User not found");
    return user;
  }

  getUserById(id: string) {
    const user = this.findUsersById(id);

    const {
      avatar_url,
      bid_alert_at,
      id: user_id,
      login,
      maximum_bid_amount,
      name,
      role,
      products_on_autobid,
    } = user;
    return {
      avatar_url,
      bid_alert_at,
      id: user_id,
      login,
      maximum_bid_amount,
      name,
      role,
      products_on_autobid,
    };
  }

  getUserByProductOnAutobid(productId: string) {
    const users = this.users.filter((u) => u.products_on_autobid.includes(productId));

    return users;
  }

  handleAutobidding(id: string, productId: string) {
    const user = this.findUsersById(id);
    if (user.products_on_autobid.includes(productId)) {
      user.products_on_autobid = [
        ...user.products_on_autobid.filter((prodId) => prodId !== productId),
      ];
    } else {
      user.products_on_autobid.push(productId);
    }
  }

  changeUserConfigs(id: string, maximum_bid_amount: number, bid_alert_at: number) {
    const user = this.findUsersById(id);
    user.maximum_bid_amount = maximum_bid_amount;
    user.bid_alert_at = bid_alert_at;
  }
}
