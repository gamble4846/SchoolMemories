import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageDirective, NzImageGroupComponent, NzImageModule, NzImageService } from 'ng-zorro-antd/image';

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
    NzButtonModule,
    NzIconModule,
    NzImageModule
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  private nzImageService = inject(NzImageService);

  SchoolName: string | undefined;
  Type: string | undefined;
  ImageGalleryData: Array<ImageGalleryModel> = [];
  ImageGalleryFullViewerModal_IsVisible: boolean = false;
  SelectedImage: ImageGalleryModel | undefined;
  PreviewImages: Array<any> = [];

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

  ImageTypeChanged() {
    this.CancelAllRequests();
    this.UpdatePreviewImages();
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
            this.CancelAllRequests();
            this.UpdatePreviewImages();
          }
        });
      }
    }
  }

  UpdatePreviewImages() {
    this.PreviewImages = [...[]];

    this.ImageGalleryData.forEach(image => {
      this.PreviewImages.push({
        src: this.GetImageByType(image)
      });
    });
  }

  GetImageByType(image: any) {
    let linkToSend: string = image[this.SelectedTypeOfImages];
    image.ImageLoading = true;
    return linkToSend;
  }

  OnImageClick(index: number): void {
    console.log(this.PreviewImages, index);
    this.nzImageService.preview(this.PreviewImages).switchTo(index);
  }

  JsonString(data: any) {
    return JSON.stringify(data);
  }

  GetCurrentPlaceHolderImage() {
    switch (this.SelectedTypeOfImages) {
      case "Instagram":
        return "https://i.imgur.com/gzowtFy.gif";
      case "Original":
        return "https://i.imgur.com/tH3r3aB.gif";
      case "Cropped":
        return "https://i.imgur.com/tH3r3aB.gif";
    }
    return "https://i.imgur.com/gzowtFy.gif";
  }

  CancelAllRequests() {
    if (window.stop !== undefined) {
      window.stop();
    }
    else if (document.execCommand !== undefined) {
      document.execCommand("Stop", false);
    }
  }
}
