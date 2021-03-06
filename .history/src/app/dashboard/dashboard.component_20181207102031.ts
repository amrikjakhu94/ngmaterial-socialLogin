import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { JwtService } from '../core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: String = 'asd';
  user: Object;

  constructor( private apiService: ApiService,
              private jwtService: JwtService,
              private router: Router) { }

  destroyToken() {
    this.jwtService.destroyToken();
    this.router.navigate(['/']);
  }

  getMyProfile() {
    this.apiService.getMyProfile().subscribe(
      profile => {
        this.user = profile;
        console.log(this.user);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getMyProfile();
  }

}
