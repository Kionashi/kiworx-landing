import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate:TranslateService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en')
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
  onActivate(event) {
    // Immediate scroll to top
    window.scrollTo(0,0);

    // Slow scroll to top
    
    // let scrollToTop = window.setInterval(() => {
    //   let pos = window.pageYOffset;
    //   if (pos > 0) {
    //       window.scrollTo(0, pos - 50); // how far to scroll on each step
    //   } else {
    //       window.clearInterval(scrollToTop);
    //   }
    // }, 16);
  }
}
