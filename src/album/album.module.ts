import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumRepository } from './album.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlbumRepository])
  ],
  providers: [AlbumService],
  controllers: [AlbumController]
})
export class AlbumModule {}
