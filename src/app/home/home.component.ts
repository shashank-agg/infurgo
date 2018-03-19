import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
domain = environment.webUrl;
  constructor(
    private router: Router
  ) {
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
  }

  ngOnInit() {
  }

  getStarted() {
    this.router.navigate(['/layout']);
  }

}
