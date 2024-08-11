import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateUserSettingsInput } from "./create-user-settings-input"; 
import { UserSettingsService } from "../user-settings.service";
import { UserSettings } from "src/schema/user-settings.types";

@Resolver()
export class UserSettingsResolver {
    constructor(private usersSettingsService: UserSettingsService){}

    @Mutation(returns=> UserSettings)
    createUserSettings(@Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsInput){
        return this.usersSettingsService.createUserSettings(createUserSettingsData)
    }
}