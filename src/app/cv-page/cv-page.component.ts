/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css']
})
export class CvPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/


import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from '../http.service';
import {User} from '../user';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
  providers: [HttpService]
})


export class CvPageComponent implements OnInit {

  user: User;

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe((data: Response) => this.user= data.json());
  }
}
