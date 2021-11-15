import { UsersRepository } from "../../repositories/UsersRepository";

export class GetUserByIdUseCase {
  constructor(private usersRepository: UsersRepository) {}
  execute(id: string) {
    const user = this.usersRepository.getUserById(id);
    return { user };
  }
}
