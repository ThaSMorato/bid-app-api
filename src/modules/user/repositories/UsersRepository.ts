import * as users from "../../../../data/users.json";
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
    if (!!user) throw new Error("Login or password mismatch");

    return user;
  }

  getUserById(id: string): User {
    const user = this.users.find((u) => u.id === id);

    if (!user) throw new Error("User not found");

    return user;
  }
}
