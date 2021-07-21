import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { AlbumRepository } from './album.repository';
import { CreatePhotoDto } from './dto/create.photo.dto';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(AlbumRepository)
        private albumRepository: AlbumRepository
    ) {}

    async getPhotosById(id: string): Promise<Album[]> {
        return this.albumRepository.getPhotos(id)
    }

    async createPhoto(createPhotoDto: CreatePhotoDto) {
        return this.albumRepository.createPhoto(createPhotoDto)
    }
}
