import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { User } from './users/user.model';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    models: [User],
    autoLoadModels: true,
    synchronize: true
  }), UsersModule,],
  controllers: [ UsersController],
  providers: [AppService, UsersService],
  exports: [SequelizeModule]
})
export class AppModule { }
