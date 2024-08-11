# STEPS TO SETUP APPOLO GRAPHQL SERVER IN NEST JS

## 1ST STEP
- npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

## 2ND STEP
- import GraphQL Module in app.module.ts
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver 
  })],
})
export class AppModule { }

## 3RD STEP
- Define Types (In this project we made graphql folder and under that created models and under that created User.ts)

import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field((type)=> Int)
    id: number

    @Field()
    username: string

    @Field({nullable: true})
    displayName?: string
}

## 4TH STEP
- Define Resolvers (in graphql folder create resolvers folder and create UserResolver.ts)

import { Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/user";

@Resolver()
export class UserResolver {
    
    @Query(returns => User)
    getUser(){
        return {
            id: 1,
            username: 'anuj',
            displayName: 'Anuj The King'
        }
    }
}

## 5TH STEP
- Import UserResolver in app.module.ts under provider

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql'
  })],
  providers: [UserResolver]
})
export class AppModule { }

