import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: String;
  constructor(private http: HttpClient,
              private jwtService: JwtService) { }

  signInRequest(signIn: Object): Observable<any> {
    // console.log('opopooooooooo');
    return this.http.post('http://localhost:3000/signin', signIn);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/signin',signIn);
  }

  signUpRequest(signUp: Object): Observable<any> {
    console.log('Entered signUp request  in apiService');
    return this.http.post('http://localhost:3000/signup', signUp);
    // return this.http.post('https://stormy-ravine-20860.herokuapp.com/signup',signUp);
  }

  isAuthenticated() {
    this.token = this.jwtService.getToken();
    return this.token != null;
  }

}
