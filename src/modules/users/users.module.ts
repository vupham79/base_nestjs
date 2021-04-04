import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerModule } from 'src/core/logger/logger.module';
import { UsersController } from './users.controller';
import { UsersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule, LoggerModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService],
})
export class UsersModule {}
