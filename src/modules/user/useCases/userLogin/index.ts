import { UsersRepository } from "../../repositories/UsersRepository";
import { UserLoginController } from "./UserLoginController";
import { UserLoginUseCase } from "./UserLoginUseCase";

const usersRepository = UsersRepository.getInstance();
const userLoginUseCase = new UserLoginUseCase(usersRepository);
const userLoginController = new UserLoginController(userLoginUseCase);

export { userLoginController };
