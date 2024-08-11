import { Query, Resolver, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";
import { UsersService } from "../users.service";
import { User } from "src/schema/user.types";

@Resolver((of) => User)
export class UserResolver {
    constructor(private userService: UsersService) { }

    @Query((returns) => User, { nullable: true })
    getUserById(@Args('id', { type: () => Int }) id: number) {
        return this.userService.getUserById(id)
    }

    @Query((returns) => [User], { nullable: true })
    getUsers() {
        return this.userService.getUsers()
    }

    @Mutation(returns => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.userService.createUser(createUserData);
    }
}