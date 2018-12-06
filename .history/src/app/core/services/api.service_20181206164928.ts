import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: String;
  constructor(private http: HttpClient) { }

  signInRequest(signIn: Object): Observable<any> {
    // console.log('opopooooooooo');
    return this.http.post('http://localhost:3000/signin', signIn);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/signin',signIn);
  }

  isAuthenticated() {
    this.token = this.jwtService.getToken();
    return this.token != null;
  }

}
