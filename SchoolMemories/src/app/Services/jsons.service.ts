import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeventhDayAdventistHigherSecondarySchoolAhmedabadModel } from '../Models/SeventhDayAdventistHigherSecondarySchoolAhmedabadModels';

@Injectable({
  providedIn: 'root'
})
export class JsonsService {

  constructor(private _HttpClient: HttpClient) { }

  GetSeventhDayAdventistHigherSecondarySchoolAhmedabadJsonData() {
    return this._HttpClient.get<SeventhDayAdventistHigherSecondarySchoolAhmedabadModel>("/Jsons/SeventhDayAdventistHigherSecondarySchoolAhmedabad.json");
  }
}
