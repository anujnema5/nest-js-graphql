import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { User } from './schema/user.types';
import { UserSettings } from './schema/user-settings.types';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql'
  }), 

  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'anujnema',
    database: 'nest-js-graphql',
    entities: [User, UserSettings],
    synchronize: true
  }),

  UsersModule,
  UserSettingsModule
],
  providers: [],
})
export class AppModule { }