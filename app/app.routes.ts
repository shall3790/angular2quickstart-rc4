import {
    provideRouter,
    RouterConfig
}                               from '@angular/router';
import { AboutComponent }       from './about.component';
import { AppComponent }         from './app.component';
import { ContactComponent }         from './contact.component';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
