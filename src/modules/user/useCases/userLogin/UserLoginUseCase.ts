import { UsersRepository } from "../../repositories/UsersRepository";
import { sign } from "jsonwebtoken";

export class UserLoginUseCase {
  constructor(private usersRepository: UsersRepository) {}
  execute(login: string, password: string) {
    const user = this.usersRepository.validateUser(login, password);

    const token = sign(
      {
        user: {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
          role: user.role,
          maximum_bid_amount: user.maximum_bid_amount,
          bid_alert_at: user.bid_alert_at,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return { token, user };
  }
}
