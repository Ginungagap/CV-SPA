

import {MdButtonModule, MatCardModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MatCardModule],
  exports: [MdButtonModule, MatCardModule],
})
export class MyMdModule { }
