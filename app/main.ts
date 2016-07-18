import { bootstrap }            from '@angular/platform-browser-dynamic';

import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';
// Add these symbols to override the `LocationStrategy`
import { 
    LocationStrategy,
    HashLocationStrategy 
}                               from '@angular/common';
// bootstrap(AppComponent);
bootstrap(AppComponent, [
  appRouterProviders,
  { provide: LocationStrategy, useClass: HashLocationStrategy } // .../#/crisis-center/
])
.catch(err => console.error(err));
