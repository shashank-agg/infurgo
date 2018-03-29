import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import 'menuLayer.js'

declare var myExtObject: any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';
    domain = environment.webUrl;
constructor(private router: Router) {
}

  getStarted() {
    this.router.navigate(['home/layout']);
    // console.log("yolo", $);
    // $.fn.fullpage.moveTo(3);
    $('html, body').animate({
        scrollTop: $(".design-layout").offset().top
    });
  }
}
