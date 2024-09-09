import { ImageGalleryModel } from "./ImageGalleryModel"

export interface SeventhDayAdventistHigherSecondarySchoolAhmedabadModel {
    Pathways: Array<Pathways>
}

export interface Pathways {
    Year: string,
    CoverImage: string,
    ImageGallery: Array<ImageGalleryModel>,
    ImageGalleryTelegramLink: string,
    ImageGalleryPDFLink: string
}