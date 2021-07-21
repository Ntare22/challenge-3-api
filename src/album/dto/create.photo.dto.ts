import { IsNotEmpty } from "class-validator";

export class CreatePhotoDto {
    @IsNotEmpty()
    albumId: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    thumbnailUrl: string;
}