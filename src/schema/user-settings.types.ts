import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'settings'})
@ObjectType()
export class UserSettings {
    @PrimaryColumn()
    @Field(type => Int)
    userId: number

    @Column()
    @Field({ defaultValue: false }) 
    recieveNotifications: boolean

    @Column()
    @Field({ defaultValue: false })
    recieveEmails: boolean
}