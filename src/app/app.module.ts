import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { SiteListPageComponent } from './site-list-page/site-list-page.component';


const appRoutes: Routes = [
  { path: '', component: CvPageComponent },
  { path: 'site-list', component: SiteListPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CvPageComponent,
    SiteListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
