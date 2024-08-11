import { Module } from '@nestjs/common';
import { UserSettingsService } from './user-settings.service';
import { UserSettingsResolver } from './graphql/user-settings.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSettings } from 'src/schema/user-settings.types';
import { User } from 'src/schema/user.types';

@Module({
    imports: [TypeOrmModule.forFeature([UserSettings, User])],
    providers: [UserSettingsService, UserSettingsResolver],
    exports: [UserSettingsService]
})
export class UserSettingsModule {}
