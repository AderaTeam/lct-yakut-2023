import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserResponseDto } from './dtos/userResponse.dto';
import { UserUpdateDto } from './dtos/userUpdate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    public async create(user: UserDto)
    {
        const newUser =  this.userRepository.create(user)
        await this.userRepository.save(newUser).then()
        return newUser
    }

    public async getOneById(id: number)
    {
        return await this.userRepository.findOne({where:{id: id}})
    }

    public async getOneByUsername(username: string)
    {
        return await this.userRepository.findOne({where:{username: username}})
    }

    public async getAll()
    {
        const users = await this.userRepository.find()
        const newUsers: UserResponseDto[] = [] 
        for (const user of users)
        {
            newUsers.push(new UserResponseDto(user))
        }
        return newUsers
    }

    public async updateOne(userid: number, userDto: UserUpdateDto)
    {
        return await this.userRepository.update(userid, userDto)
    }

    public async deleteOne(id: number)
    {
        return await this.userRepository.delete(id)
    }
}
