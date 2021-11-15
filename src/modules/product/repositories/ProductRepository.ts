import products from "../../../../data/products.json";
import { Product } from "../model/ProductModel";

export class ProductRepository {
  private products: Product[];
  private static INSTANCE: ProductRepository;

  private constructor() {
    this.products = products as Product[];
  }

  public static getInstance() {
    if (!ProductRepository.INSTANCE) {
      ProductRepository.INSTANCE = new ProductRepository();
    }

    return ProductRepository.INSTANCE;
  }

  getAll(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product {
    const product = this.products.find((p) => p.id === id);

    if (!product) throw new Error("Product not found");

    return product;
  }
}
