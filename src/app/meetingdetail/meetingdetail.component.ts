import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { environment } from '../../environments/environment';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { TimeslotDto } from '../dto/timeslot';
import { Router } from '@angular/router';



declare var jquery: any;
declare var $: any;
@Component({
    selector: 'app-meetingdetail',
    templateUrl: './meetingdetail.component.html',
    styleUrls: ['./meetingdetail.component.css']
})
export class MeetingdetailComponent implements OnInit {

    domain = environment.apiUrl;
    serveyId: string = '1';
    mDate: string;
    selectedTimeSlot: string = '';
    public model: SurveyRequestDto;
    public timeslots: TimeslotDto[];
    public jsonResponse;
    public messageDate: string;
    public showErrorDate = false;
    public messageTimeslot: string;
    public showErrorTimeslot = false;

    constructor(private router: Router, private data: DataService) { }

    ngOnInit() {

        //  $.getScript('../../assets/js/datepicker_func.js');
        $.getScript('assets/js/datepicker_func.js');
        this.data.surveyIdObserver.subscribe(serveyId => this.serveyId = serveyId)
        this.model = new SurveyRequestDto();
    }

    removeError() {
        this.showErrorDate = false;
        this.showErrorTimeslot = false;
    }

    getMeetingTimeSlot(val: string) {
        if (val != '') {

            this.model.meetingDate = val;
            this.model.surveyId = this.serveyId;
            console.log(this.model);
            this.data.getMeetingTime(this.model).subscribe(
                survey => {
                    this.jsonResponse = JSON.parse(survey._body);
                    console.log(this.jsonResponse);
                    this.timeslots = this.jsonResponse.availableTimeSlot;
                    console.log(this.timeslots);
                }, err => {
                    console.log(err);
                });
        }
    }

    saveMeeting() {


        /*this.model.meetingTimeSlot = this.selectedTimeSlot;


        if (this.model.meetingDate == '' || this.model.meetingDate == undefined) {

            this.showErrorDate = true;
            this.messageDate = "Meeting date is required";
            return false;
        } else {
            this.showErrorDate = false;
        }
        if (this.model.meetingTimeSlot == '' || this.model.meetingTimeSlot == undefined) {
            this.showErrorTimeslot = true;
            this.messageTimeslot = "Timeslot is required";
            return false;
        } else {
            this.showErrorTimeslot = false;
        }


        console.log(this.model);
        this.data.saveMeetingTimeSlot(this.model).subscribe(
            survey => {
                this.jsonResponse = JSON.parse(survey._body);
                // this.router.navigate(['thanku']);
                console.log(this.jsonResponse);
                this.serveyId = this.jsonResponse.surveyId;
                sessionStorage.removeItem("ssn_surveyId");
                sessionStorage.removeItem("ssn_selectedLayout");
                sessionStorage.removeItem("ssn_side1");
                sessionStorage.removeItem("ssn_side2");
                sessionStorage.removeItem("ssn_side3");
                sessionStorage.removeItem("ssn_side4");
                sessionStorage.removeItem("ssn_question1ans");
                sessionStorage.removeItem("ssn_question2ans");
                sessionStorage.removeItem("ssn_selectedThemename");
                sessionStorage.removeItem("ssn_selectedThemenameq2");
                sessionStorage.removeItem("ssn_clientfirstname");
                sessionStorage.removeItem("ssn_clientlastname");
                sessionStorage.removeItem("ssn_clientemail");
                sessionStorage.removeItem("ssn_clientmobile");
                window.location.href = this.domain + "payUMoney/" + this.serveyId;
            }, err => {
                console.log(err);
                this.showErrorDate = true;
                this.messageDate = "Error Occured !!! Please try later";
                return false;
            });
        console.log(this.serveyId);*/
        this.router.navigate(['thanku']);

    }

}
