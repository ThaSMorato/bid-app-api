import { LogRepository } from "../../../logs/repositories/LogRepository";
import { ProductRepository } from "../../../product/repositories/ProductRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class BotServiceUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private productRepository: ProductRepository,
    private logRepository: LogRepository
  ) {}
  execute(productId: string, amount: number, userId: string) {
    const users = this.usersRepository.getUserByProductOnAutobid(productId);
    let amountOverTime = amount;
    let userIdOverTime = userId;
    users
      .sort((a, b) => {
        return (
          a.maximum_bid_amount / a.products_on_autobid.length -
          b.maximum_bid_amount / b.products_on_autobid.length
        );
      })
      .map((user) => {
        amountOverTime += 1;
        if (
          user.maximum_bid_amount / user.products_on_autobid.length > amountOverTime &&
          user.id !== userIdOverTime
        ) {
          userIdOverTime = user.id;
          this.productRepository.newBidOnProduct(productId, amountOverTime);
          this.logRepository.create(userId, productId, amountOverTime);
        }
      });
  }
}
