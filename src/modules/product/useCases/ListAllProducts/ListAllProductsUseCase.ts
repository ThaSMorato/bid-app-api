import { ProductRepository } from "../../repositories/ProductRepository";

export class ListAllProductsUseCase {
  constructor(private productRepository: ProductRepository) {}
  execute() {
    const products = this.productRepository.getAll();

    return { products };
  }
}
