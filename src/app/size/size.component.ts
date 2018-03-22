import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { environment } from '../../environments/environment';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-size',
    templateUrl: './size.component.html',
    styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

    selectedImage: string;
    serveyId: string;
    public questionId = '2';
    public model: SurveyRequestDto;
    public surveyId;
    side1: any;
    side2: any;
    side3: any;
    side4: any;
    public jsonResponse;
    public message: string;
    public showError = false;
    constructor(private router: Router, private data: DataService) { }

    ngOnInit() {
        this.serveyId = sessionStorage.getItem("ssn_surveyId");
        this.selectedImage = sessionStorage.getItem("ssn_selectedLayout");
        if (sessionStorage.getItem("ssn_side1") != undefined) {
            console.log(sessionStorage.getItem("ssn_side1"));
            this.side1 = sessionStorage.getItem("ssn_side1")==undefined?0:sessionStorage.getItem("ssn_side1");
            this.side2 = sessionStorage.getItem("ssn_side2")==undefined?0:sessionStorage.getItem("ssn_side2");
            this.side3 = sessionStorage.getItem("ssn_side3")==undefined?0:sessionStorage.getItem("ssn_side3");
            this.side4 = sessionStorage.getItem("ssn_side4")==undefined?0:sessionStorage.getItem("ssn_side4");
        }

        this.model = new SurveyRequestDto();
       // $.getScript('../../assets/js/sizecontrol.js');
    }

    getStarted() {
        this.router.navigate(['/home/layout']);
    }
    showSizeComponent(compname: string) {
        // if (compname == 'side1' && (this.selectedImage == '1' || this.selectedImage == '2' || this.selectedImage == '3' || this.selectedImage == '3'))
        //     return true;
        // else if (compname == 'side2' && (this.selectedImage == '1' || this.selectedImage == '2' || this.selectedImage == '4'))
        //     return true;
        // else if (compname == 'side3' && (this.selectedImage == '1'))
        //     return true;
        // else false;

        return true;
        
    }
    plusqty(side:any){
        if(side=='side1'){
            this.side1 = parseInt((this.side1==undefined?0:this.side1),10) + 1;
        }else if(side=='side2'){
            this.side2 = parseInt((this.side2==undefined?0:this.side2),10) + 1;
        }else if(side=='side3'){
            this.side3 = parseInt((this.side3==undefined?0:this.side3),10) + 1;
        }else if(side=='side2'){
            this.side4 = parseInt((this.side4==undefined?0:this.side4),10) + 1;
        }

    }

    minusqty(side:any){
        if(side=='side1'){
            this.side1 = parseInt((this.side1==undefined?0:this.side1),10) - 1;
        }else if(side=='side2'){
            this.side2 = parseInt((this.side2==undefined?0:this.side2),10) - 1;
        }else if(side=='side3'){
            this.side3 = parseInt((this.side3==undefined?0:this.side3),10) - 1;
        }else if(side=='side2'){
            this.side4 = parseInt((this.side4==undefined?0:this.side4),10) - 1;
        }

    }

    onNext() {

      /*  this.model.questionid = this.questionId;
        this.model.side1 = this.side1 == undefined ? '0' : this.side1;
        this.model.side2 = this.side2 == undefined ? '0' : this.side2;
        this.model.side3 = this.side3 == undefined ? '0' : this.side3;
        this.model.side4 = this.side4 == undefined ? '0' : this.side4;
        this.model.surveyId = this.serveyId;

        console.log(this.model);
        this.data.saveSize(this.model).subscribe(
            survey => {

                this.jsonResponse = JSON.parse(survey._body);

                this.surveyId = this.jsonResponse.surveyId;
                console.log("server responded with surveyId " + this.surveyId);
                this.data.getServerId(this.surveyId);

                sessionStorage.setItem("ssn_side1", this.model.side1);
                sessionStorage.setItem("ssn_side2", this.model.side2);
                sessionStorage.setItem("ssn_side3", this.model.side3);
                sessionStorage.setItem("ssn_side4", this.model.side4);

                this.router.navigate(['/question1']);
            }, err => {
                console.log(err);
                this.showError = true;
                this.message = "Error Occured !!! Please try later";
                return false;
            });*/
            this.router.navigate(['/question1']);
    }
}
