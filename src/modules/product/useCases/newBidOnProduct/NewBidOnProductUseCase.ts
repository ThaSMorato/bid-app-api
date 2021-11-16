import { ProductRepository } from "../../repositories/ProductRepository";
import { LogRepository } from "../../../logs/repositories/LogRepository";
import { NewBiddingEventEmitter } from "../../../../service/NewBiddingEvent";

export class NewBidOnProductUseCase {
  constructor(private productRepository: ProductRepository, private logRepository: LogRepository) {}
  execute(productId: string, amount: number, userId: string) {
    this.productRepository.newBidOnProduct(productId, amount);
    this.logRepository.create(userId, productId, amount);
    const newBiddingEventEmitter = NewBiddingEventEmitter.getInstance();
    newBiddingEventEmitter.emmit({ amount: amount, productId: productId, userId: userId });
  }
}
