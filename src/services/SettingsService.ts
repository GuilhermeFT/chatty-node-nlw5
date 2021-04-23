import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = this.settingsRepository

    const userAlreadyExists = await settingsRepository.findOne({ username })

    if (userAlreadyExists) {
      throw new Error("User already exists");
      
    }
  
    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings)

    return settings
  }

}

export {SettingsService}