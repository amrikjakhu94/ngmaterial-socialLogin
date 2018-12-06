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

  constructor( private apiService: ApiService,
              private jwtService: JwtService,
              private router: Router) { }

  destroyToken() {
    this.jwtService.destroyToken();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
