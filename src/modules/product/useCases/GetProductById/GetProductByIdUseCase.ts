import { ProductRepository } from "../../repositories/ProductRepository";

export class GetProductByIdUseCase {
  constructor(private productRepository: ProductRepository) {}
  execute(id: string) {
    const product = this.productRepository.getProductById(id);

    return { product };
  }
}
