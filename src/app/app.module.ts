import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { SiteListPageComponent } from './site-list-page/site-list-page.component';
import { MatDesPageComponent } from './mat-des-page/mat-des-page.component';


const appRoutes: Routes = [
  { path: '', component: CvPageComponent },
  { path: 'site-list', component: SiteListPageComponent },
  { path: 'mat-des', component: MatDesPageComponent },
];

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
