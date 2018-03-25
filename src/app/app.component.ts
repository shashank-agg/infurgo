import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    domain = environment.webUrl;
    constructor(private router: Router) {
    }
}
