import { ProductRepository } from "../../repositories/ProductRepository";
import { NewBidOnProductController } from "./NewBidOnProductController";
import { NewBidOnProductUseCase } from "./NewBidOnProductUseCase";
import { LogRepository } from "../../../logs/repositories/LogRepository";

const logRepository = LogRepository.getInstance();
const productsRepository = ProductRepository.getInstance();
const newBidOnProductUseCase = new NewBidOnProductUseCase(productsRepository, logRepository);
const newBidOnProductController = new NewBidOnProductController(newBidOnProductUseCase);

export { newBidOnProductController };
