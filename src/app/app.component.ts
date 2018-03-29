import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

declare var myExtObject: any;
declare var $: any;

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



    showHome() {
        this.router.navigate(['/home']);
        myExtObject.closeLayer();
        $('html, body').animate({
            scrollTop: $("#app-container").offset().top
        });
    }

    showLayout() {
        this.router.navigate(['/home/layout']).then(() => {
            // $.fn.fullpage.moveTo(3);
            $('html, body').animate({
                scrollTop: $(".design-layout").offset().top
            });
        });
        myExtObject.closeLayer();
    }

    showDesignerLogin() {
        this.router.navigate(['/designerlogin']);
        myExtObject.closeLayer();
    }

    showClientLogin() {
        this.router.navigate(['/clientlogin']);
        myExtObject.closeLayer();
    }

    showContactUs(dismissMenu = true) {
        this.router.navigate(['/home']).then(() => {
            $('html, body').animate({
                scrollTop: $(".contact-us").offset().top
            });
        });
        if (dismissMenu) {
            myExtObject.closeLayer();
        }
    }
}
