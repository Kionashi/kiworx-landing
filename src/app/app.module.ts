import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
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
  { path: 'manage', component: ManageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AttractComponent,
    QualifyComponent,
    ManageComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
