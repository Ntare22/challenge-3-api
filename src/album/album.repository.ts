import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Album } from './album.entity'
import { CreatePhotoDto } from "./dto/create.photo.dto";

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {
    async getPhotos(albumId: string): Promise<Album[]> {
        const query = this.createQueryBuilder('album');
        query.where({ albumId }).select(['album.title', 'album.thumbnailUrl']);

        try {
            const photos = await query.getMany();
            return photos;
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    async createPhoto(createPhotoDto: CreatePhotoDto): Promise<Album> {
        const { albumId, title, url, thumbnailUrl } = createPhotoDto;

        const photo = this.create({
            albumId,
            title,
            url,
            thumbnailUrl
        });

        await this.save(photo);
        return photo;
    }
}
