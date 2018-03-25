import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-userdetail',
    templateUrl: './userdetail.component.html',
    styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {


    public model: SurveyRequestDto;
    public surveyId;
    public jsonResponse;
    public messageFirstName: string;
    public showErrorFirstName = false;
    public messageEmail: string;
    public showErrorEmail = false;
    public messageMobile: string;
    public showErrorMobile = false;


    constructor(private router: Router, private data: DataService) {
        this.model = new SurveyRequestDto();
        this.surveyId = sessionStorage.getItem("ssn_surveyId");
        if (sessionStorage.getItem("ssn_clientfirstname") != undefined) {
            this.model.firstName = sessionStorage.getItem("ssn_clientfirstname") == undefined ? '' : sessionStorage.getItem("ssn_clientfirstname");
            this.model.lastName = sessionStorage.getItem("ssn_clientlastname") == undefined ? '' : sessionStorage.getItem("ssn_clientlastname");
            this.model.email = sessionStorage.getItem("ssn_clientemail") == undefined ? '' : sessionStorage.getItem("ssn_clientemail");
            this.model.mobile = sessionStorage.getItem("ssn_clientmobile") == undefined ? '' : sessionStorage.getItem("ssn_clientmobile");
        }

    }

    ngOnInit() {

    }

    removeError() {
        this.showErrorFirstName = false;
        this.showErrorEmail = false;
        this.showErrorMobile = false;
    }

    onNext() {
        this.model.surveyId = this.surveyId;

        if (this.model.firstName == '' || this.model.firstName == undefined) {
            this.showErrorFirstName = true;
            this.messageFirstName = "First name is required";
            return false;
        } else {
            this.showErrorFirstName = false;
        }
        if (this.model.email == '' || this.model.email == undefined) {
            this.showErrorEmail = true;
            this.messageEmail = "Email is required";
            return false;
        } else {
            this.showErrorEmail = false;
        }
        if (this.model.mobile == '' || this.model.mobile == undefined) {
            this.showErrorMobile = true;
            this.messageMobile = "Mobile is required";
            return false;
        } else {
            this.showErrorMobile = false;
        }

        this.model.lastName = this.model.lastName == undefined ? '' : this.model.lastName;


        this.data.saveClientData(this.model).subscribe(survey => {
            this.jsonResponse = JSON.parse(survey._body);
            this.surveyId = this.jsonResponse.surveyId;
            console.log("server responded with surveyId " + this.surveyId);
            this.data.getServerId(this.surveyId);
            sessionStorage.setItem("ssn_clientfirstname", this.model.firstName);
            sessionStorage.setItem("ssn_clientlastname", this.model.lastName);
            sessionStorage.setItem("ssn_clientemail", this.model.email);
            sessionStorage.setItem("ssn_clientmobile", this.model.mobile);
            this.router.navigate(['meetingdetail']);
        }, err => {
            console.log(err);
            this.showErrorFirstName = true;
            this.messageFirstName = "Error Occured !!! Please try later";
            return false;
        });
        this.router.navigate(['meetingdetail']);
    }

}
