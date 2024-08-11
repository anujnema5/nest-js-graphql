import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { UserSettings } from "./user-settings.types";

@Entity({ name: 'users' })
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column()
    @Field()
    username: string

    @Column()
    @Field({ nullable: true })
    displayName?: string

    @OneToOne(() => UserSettings)
    @JoinColumn()
    @Field({ nullable: true })
    settings?: UserSettings
}