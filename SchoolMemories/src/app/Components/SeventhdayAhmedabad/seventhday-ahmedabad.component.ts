import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { JsonsService } from '../../Services/jsons.service';
import { SeventhDayAdventistHigherSecondarySchoolAhmedabadModel } from '../../Models/SeventhDayAdventistHigherSecondarySchoolAhmedabadModels';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seventhday-ahmedabad',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule
  ],
  templateUrl: './seventhday-ahmedabad.component.html',
  styleUrl: './seventhday-ahmedabad.component.css'
})
export class SeventhdayAhmedabadComponent {
  SeventhDayAdventistHigherSecondarySchoolAhmedabadData: SeventhDayAdventistHigherSecondarySchoolAhmedabadModel | undefined;

  constructor(
    private _JsonsService: JsonsService,
    private _Router: Router
  ) { }

  ngOnInit() {
    this.UpdateSeventhDayAdventistHigherSecondarySchoolAhmedabadData();
  }

  UpdateSeventhDayAdventistHigherSecondarySchoolAhmedabadData() {
    this._JsonsService.GetSeventhDayAdventistHigherSecondarySchoolAhmedabadJsonData().subscribe((response: SeventhDayAdventistHigherSecondarySchoolAhmedabadModel) => {
      this.SeventhDayAdventistHigherSecondarySchoolAhmedabadData = response;
    })
  }

  OpenImageGallery(SchoolName: string, Type: string) {
    this._Router.navigate(["ImageGallery"], { queryParams: { School: SchoolName, Type: Type } })
  }
}
