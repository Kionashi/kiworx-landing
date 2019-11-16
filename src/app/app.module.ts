import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { Routes, RouterModule} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AttractComponent } from './attract/attract.component';
import { QualifyComponent } from './qualify/qualify.component';
import { ManageComponent } from './manage/manage.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attract', component: AttractComponent },
  { path: 'qualify', component: QualifyComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AttractComponent,
    QualifyComponent,
    ManageComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
