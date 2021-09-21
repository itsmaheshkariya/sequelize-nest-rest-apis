import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }
    async create(user: User): Promise<User> {
        return this.userModel.create(user)
    }
    async update(id: string, newUser: User): Promise<User> {
        await this.userModel.update(newUser, {
            where: {
                id
            }
        })
        const user = this.findOne(id);
        return user;
    }
    async destroy(id: string): Promise<User> {
        const user = this.findOne(id);
        await this.userModel.destroy({
            where: { id }
        })
        return user
    }

}
