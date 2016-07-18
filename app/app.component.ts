import {
    Component,
    OnInit
} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    // template: '<h1>My First Angular 2 App</h1>'
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
    pageTitle: string;

    constructor() {
        this.pageTitle = 'Hello Angular';
    }

    ngOnInit() {

    }
 }
