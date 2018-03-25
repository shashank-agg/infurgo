import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  image: string;
  public radioData: any = '0';
  public questionId = '1';
  public model: SurveyRequestDto;
  public surveyId;
  public jsonResponse;
  public showChecked: boolean[] = [false, false, false, false];
  public message: string;
  public showError = false;
  constructor(private router: Router, private data: DataService) {
    this.model = new SurveyRequestDto();
  }

  //Moved this code to ngOnInit to fix "ExpressionChangedAfterItHasBeenCheckedError' error
  ngAfterViewInit() {
  }

  ngOnInit() {
    this.data.currentImage.subscribe(image => this.image = image)
    this.data.surveyIdObserver.subscribe(serverId => this.surveyId = serverId)
    //$.getScript('../../assets/js/functions.js');
    $.getScript('assets/js/functions.js');
    if (sessionStorage.getItem("ssn_selectedLayout") != undefined) {
        this.radioData = sessionStorage.getItem("ssn_selectedLayout");
        this.showChecked[parseInt(this.radioData, 10) - 1] = true;
    }
  }

  showTick(x) {
    //   return true;
    return this.showChecked[parseInt(x, 10) - 1];
  }

  selectRadio(id) {
    this.showError = false;
    this.radioData = id;
    for (let i = 0; i < this.showChecked.length; i++) {
      this.showChecked[i] = false;
    }
    this.showChecked[id - 1] = true;
  }

  getImage() {
    console.log(this.radioData);
    this.data.getSelectedImage(this.radioData);
    this.onNext();
  }

  onNext() {

  if (this.radioData == 0) {
      this.showError = true;
      this.message = "Please select kitchen type";
      return false;
    }
    if (sessionStorage.getItem("ssn_surveyId") != undefined) {
      this.model.surveyId = sessionStorage.getItem("ssn_surveyId");
    }
    this.model.questionid = this.questionId;
    this.model.optionid = this.radioData;
    console.log(this.model);
    this.data.saveLayout(this.model).subscribe(
      survey => {

        this.jsonResponse = JSON.parse(survey._body);

        this.surveyId = this.jsonResponse.surveyId;
        console.log("server responded with surveyId " + this.surveyId);
        this.data.getServerId(this.surveyId);
        if (this.surveyId == 0) {
          this.showError = true;
          this.message = "Somthing went wrong !!! Please try later";
          return false;
        }
        sessionStorage.setItem("ssn_surveyId", this.surveyId);
        sessionStorage.setItem("ssn_selectedLayout", this.radioData);
        this.router.navigate(['home/size']);
      }, err => {
        console.log(err);
        this.showError = true;
        this.message = "Error Occured !!! Please try later";
        return false;
      });
      console.log(this.router)
      this.router.navigate(['home/size']);
  }

}
