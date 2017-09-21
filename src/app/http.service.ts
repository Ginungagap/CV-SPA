import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('https://cv-project-6fa7f.firebaseio.com/user.json');
  }
}
