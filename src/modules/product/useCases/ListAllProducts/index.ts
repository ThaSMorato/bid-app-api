import { ProductRepository } from "../../repositories/ProductRepository";
import { ListAllProductsController } from "./ListAllProductsController";
import { ListAllProductsUseCase } from "./ListAllProductsUseCase";

const productsRepository = ProductRepository.getInstance();
const listAllProductsUseCase = new ListAllProductsUseCase(productsRepository);
const listAllProductsController = new ListAllProductsController(listAllProductsUseCase);

export { listAllProductsController };
