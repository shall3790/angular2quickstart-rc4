import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    templateUrl: './app/about.component.html'
})
export class AboutComponent implements OnInit {
    pageTitle: string;

    constructor() {
        this.pageTitle = 'About';
    }

    ngOnInit() {

    }
 }
