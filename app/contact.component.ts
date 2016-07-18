import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    templateUrl: './app/contact.component.html'
})
export class ContactComponent implements OnInit {
    pageTitle: string;

    constructor() {
        this.pageTitle = 'Contact';
    }

    ngOnInit() {

    }
 }
