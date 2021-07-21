import { EntityRepository, Repository } from "typeorm";
import { Album } from './album.entity'
import { CreatePhotoDto } from "./dto/create.photo.dto";

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {
    async getPhotos(id: string): Promise<Album[]> {
        const photos = this.find();
        return photos;
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
