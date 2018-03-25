import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-question1',
    templateUrl: './question1.component.html',
    styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

    public selectedTheme: string;
    public model: SurveyRequestDto;
    public surveyId;
    public jsonResponse;
    public selectedThemename: any;
    theme1: boolean;
    theme2: boolean;
    theme3: boolean;
    public questionId = '4';
    constructor(private router: Router, private data: DataService) {
        this.model = new SurveyRequestDto();
    }


    ngOnInit() {
        this.surveyId = sessionStorage.getItem("ssn_surveyId");
        if (sessionStorage.getItem("ssn_question1ans") != undefined) {
            this.selectedTheme = sessionStorage.getItem("ssn_question1ans") == undefined ? '0' : sessionStorage.getItem("ssn_question1ans");
            this.selectedThemename = sessionStorage.getItem("ssn_selectedThemename");
        }
    }
    setSelectedTheme(e: any, s: any) {
        this.selectedTheme = e.target.value;
        this.selectedThemename = s;
    }

    goNext(qid) {


        this.model.surveyId = this.surveyId;
        this.model.questionid = qid;
        this.model.optionid = this.selectedTheme == undefined ? '0' : this.selectedTheme;
        this.data.saveQuestion(this.model).subscribe(survey => {
            this.jsonResponse = JSON.parse(survey._body);
            this.surveyId = this.jsonResponse.surveyId;
            console.log("server responded with surveyId " + this.surveyId);
            this.data.getServerId(this.surveyId);
            sessionStorage.setItem("ssn_question1ans", this.model.optionid);
            sessionStorage.setItem("ssn_selectedThemename", this.selectedThemename);
            this.router.navigate(['home/question2']);
        }, err => {
            console.log(err);
            return false;
        });
        this.router.navigate(['home/question2']);
    }

}
