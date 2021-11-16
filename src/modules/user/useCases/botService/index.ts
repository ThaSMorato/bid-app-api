import { BotServiceUseCase } from "./botServiceUseCase";
import { LogRepository } from "../../../logs/repositories/LogRepository";
import { ProductRepository } from "../../../product/repositories/ProductRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

const logRepository = LogRepository.getInstance();
const productRepository = ProductRepository.getInstance();
const usersRepository = UsersRepository.getInstance();
const botServiceUseCase = new BotServiceUseCase(usersRepository, productRepository, logRepository);
export { botServiceUseCase };
