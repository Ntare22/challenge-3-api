import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @Column()
    albumId: string;

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column()
    thumbnailUrl: string;
}