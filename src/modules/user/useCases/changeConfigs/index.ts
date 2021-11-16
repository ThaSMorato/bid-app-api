import { UsersRepository } from "../../repositories/UsersRepository";
import { ChangeConfigsController } from "./ChangeConfigsController";
import { ChangeConfigsUseCase } from "./ChangeConfigsUseCase";

const usersRepository = UsersRepository.getInstance();
const changeConfigsUseCase = new ChangeConfigsUseCase(usersRepository);
const changeConfigsController = new ChangeConfigsController(changeConfigsUseCase);

export { changeConfigsController };
