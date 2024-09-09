import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageGalleryModel } from '../../Models/ImageGalleryModel';
import { JsonsService } from '../../Services/jsons.service';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    CommonModule,
    NzRadioModule,
    FormsModule,
    NzCardModule,
    NzGridModule,
    NzModalModule,
    NzButtonModule
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  SchoolName: string | undefined;
  Type: string | undefined;
  ImageGalleryData: Array<ImageGalleryModel> = [];
  ImageGalleryFullViewerModal_IsVisible: boolean = false;
  SelectedImage: ImageGalleryModel | undefined;

  UIDisplayHeader: string = "";
  TypesOfImages: Array<string> = [];
  SelectedTypeOfImages: string = "";

  ImageGallery_TelegramLink: string = "";
  ImageGallery_PDFLink: string = "";

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _JsonsService: JsonsService
  ) {
    this._ActivatedRoute.queryParams.subscribe(params => {
      this.SchoolName = params['School'];
      this.Type = params['Type'];
      this.AfterQueryParamsUpdate();
    });
  }

  AfterQueryParamsUpdate() {
    if (this.SchoolName == "SeventhDayAdventistHigherSecondarySchoolAhmedabad") {
      if (this.Type && this.Type.toLowerCase().includes("pathways")) {
        let year = this.Type.toLowerCase().replace("pathways", "");
        this.UIDisplayHeader = "Pathways - " + year;
        this._JsonsService.GetSeventhDayAdventistHigherSecondarySchoolAhmedabadJsonData().subscribe((response) => {
          let yearPathwaysData = response.Pathways.find(x => x.Year == year);
          if (yearPathwaysData) {
            this.ImageGalleryData = yearPathwaysData.ImageGallery;
            this.ImageGallery_TelegramLink = yearPathwaysData.ImageGalleryTelegramLink;
            this.ImageGallery_PDFLink = yearPathwaysData.ImageGalleryPDFLink;
            this.TypesOfImages = ['Instagram', 'Original', 'Cropped'];
            this.SelectedTypeOfImages = "Cropped";
          }
        });
      }
    }
  }

  GetImageByType(image: any) {
    return image[this.SelectedTypeOfImages];
  }

  ImageGalleryFullViewerModal_HandleCancle() {
    this.ImageGalleryFullViewerModal_IsVisible = false;
  }

  ImageGalleryFullViewerModal_HandleOk() {
    this.ImageGalleryFullViewerModal_IsVisible = false;
  }

  Show_ImageGalleryFullViewerModal(image: ImageGalleryModel) {
    this.ImageGalleryFullViewerModal_IsVisible = true;
    this.SelectedImage = image;
  }

  Previous() {
    let currentIndex = this.ImageGalleryData.findIndex(x => x.ImageNumber == this.SelectedImage?.ImageNumber);
    if (currentIndex != 0) {
      this.SelectedImage = this.ImageGalleryData[currentIndex - 1];
    }
  }

  Next() {
    let currentIndex = this.ImageGalleryData.findIndex(x => x.ImageNumber == this.SelectedImage?.ImageNumber);

    if (currentIndex + 1 < this.ImageGalleryData.length) {
      this.SelectedImage = this.ImageGalleryData[currentIndex + 1];
    }
  }
}
