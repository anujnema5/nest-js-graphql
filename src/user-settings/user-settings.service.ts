import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserSettingsInput } from './graphql/create-user-settings-input';
import { UserSettings } from 'src/schema/user-settings.types';
import { User } from 'src/schema/user.types';

@Injectable()
export class UserSettingsService {
    constructor(
        @InjectRepository(UserSettings) private userSettingsRepository: Repository<UserSettings>,
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
        const findUser = await this.userRepository.findOneBy({
            id: createUserSettingsData.userId
        })

        if(!findUser) throw new NotFoundException('user not found')
        
        const newUserSettings = this.userSettingsRepository.create(createUserSettingsData)
        const savedSettings = await this.userSettingsRepository.save(newUserSettings);

        findUser.settings = savedSettings;
        await this.userRepository.save(findUser)

        return savedSettings;
    }
}
