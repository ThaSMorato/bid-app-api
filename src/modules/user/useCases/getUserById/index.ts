import { UsersRepository } from "../../repositories/UsersRepository";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const usersRepository = UsersRepository.getInstance();
const getUserByIdUseCase = new GetUserByIdUseCase(usersRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export { getUserByIdController };
