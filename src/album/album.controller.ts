import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Album } from './album.entity';
import { AlbumService } from './album.service';
import { CreatePhotoDto } from './dto/create.photo.dto';

@Controller('album')
export class AlbumController {
    constructor(private albumService: AlbumService) {}

    @Get('/:id/photos')
    getPhotosById(
        @Param('id') id: string
    ): Promise<Album[]> {
        return this.albumService.getPhotosById(id);
    }

    @Post('/photo')
    createPhoto(
        @Body() createPhotoDto: CreatePhotoDto,
    ): Promise<Album> {
        return this.albumService.createPhoto(createPhotoDto)
    }
}
