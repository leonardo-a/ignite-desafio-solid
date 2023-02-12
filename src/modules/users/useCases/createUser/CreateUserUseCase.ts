import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const findUserByEmail = this.usersRepository.findByEmail(email);

    if (findUserByEmail) {
      throw new Error("Email já pertence a um usuário existente!");
    }

    if (!email && !name) {
      throw new Error("As propriedades 'email' e 'name' devem ser informadas!");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
