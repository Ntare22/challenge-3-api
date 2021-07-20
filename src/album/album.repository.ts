import { EntityRepository, Repository } from "typeorm";
import { Album } from './album.entity'

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {
    async getPhotos(id: string): Promise<Album[]> {
        const photos = this.find();
        return photos;
    }
}
