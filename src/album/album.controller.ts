import { Controller, Get, Param } from '@nestjs/common';
import { Album } from './album.entity';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
    constructor(private albumService: AlbumService) {}

    @Get('/:id/photos')
    getPhotosById(
        @Param('id') id: string
    ): Promise<Album[]> {
        return this.albumService.getPhotosById(id);
    }
}
