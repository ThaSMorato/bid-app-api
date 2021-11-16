import { ProductRepository } from "../../repositories/ProductRepository";
import { LogRepository } from "../../../logs/repositories/LogRepository";

export class NewBidOnProductUseCase {
  constructor(private productRepository: ProductRepository, private logRepository: LogRepository) {}
  execute(productId: string, amount: number, userId: string) {
    this.productRepository.newBidOnProduct(productId, amount);
    this.logRepository.create(userId, productId, amount);
  }
}
