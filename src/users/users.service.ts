import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserInput } from "./graphql/create-user.input";
import { User } from "src/schema/user.types";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    getUsers() {
        return this.usersRepository.find({ relations: ['settings'] });
    }

    getUserById(id: number) {
        return this.usersRepository.findOne({
            where: {
                id: id
            },
            relations: ['settings']
        })
    }

    createUser(createUserData: CreateUserInput) {
        const newUser = this.usersRepository.create(createUserData);
        return this.usersRepository.save(newUser)
    }
}