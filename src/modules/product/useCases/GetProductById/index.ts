import { ProductRepository } from "../../repositories/ProductRepository";
import { GetProductByIdController } from "./GetProductByIdController";
import { GetProductByIdUseCase } from "./GetProductByIdUseCase";

const productsRepository = ProductRepository.getInstance();
const listAllProductsUseCase = new GetProductByIdUseCase(productsRepository);
const getProductByIdController = new GetProductByIdController(listAllProductsUseCase);

export { getProductByIdController };
