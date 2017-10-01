import {Routes} from "@angular/router";
import {CvPageComponent} from "./cv-page/cv-page.component";
import {SiteListPageComponent} from "./site-list-page/site-list-page.component";
import {MatDesPageComponent} from "./mat-des-page/mat-des-page.component";

export const appRoutes: Routes = [
  { path: '', component: CvPageComponent },
  { path: 'site-list', component: SiteListPageComponent },
  { path: 'mat-des', component: MatDesPageComponent },
];
