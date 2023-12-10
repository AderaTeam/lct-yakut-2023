import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { databaseProvider } from '../providers/database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({imports:[TypeOrmModule.forFeature([User])],
        controllers: [UserController],
        providers: [UserService, databaseProvider],
        exports: [UserService]
    })
export class UserModule {}
