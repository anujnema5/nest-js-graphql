import { Module } from "@nestjs/common";
import { UserResolver } from "./graphql/users.resolver";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/schema/user.types";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserResolver, UsersService]
})
export class UsersModule {}