import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMdModule} from './mymd.module';


import { AppComponent } from './app.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { SiteListPageComponent } from './site-list-page/site-list-page.component';
import { MatDesPageComponent } from './mat-des-page/mat-des-page.component';
import {appRoutes} from './app-routes';


@NgModule({
  declarations: [
    AppComponent,
    CvPageComponent,
    SiteListPageComponent,
    MatDesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MyMdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
