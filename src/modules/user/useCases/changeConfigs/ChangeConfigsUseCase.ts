import { UsersRepository } from "../../repositories/UsersRepository";

export class ChangeConfigsUseCase {
  constructor(private usersRepository: UsersRepository) {}
  execute(id: string, maximum_bid_amount: number, bid_alert_at: number) {
    this.usersRepository.changeUserConfigs(id, maximum_bid_amount, bid_alert_at);
  }
}
