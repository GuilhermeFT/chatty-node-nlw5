import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {

  private settingsRepository: Repository<User>

  constructor() {
    this.settingsRepository = getCustomRepository(UsersRepository)
  }

  async create(email: string) {
    const userRepository = this.settingsRepository
    // Verificar se o usuário existe

    const userExists = await userRepository.findOne({ email })

    // Se existir, retornar user
    if (userExists) {
      return userExists
    }
    
    // Se não existir, salvar no BD
    const user = userRepository.create({ email })
    
    await userRepository.save(user)
    
  return user;
  }

}

export { UsersService }