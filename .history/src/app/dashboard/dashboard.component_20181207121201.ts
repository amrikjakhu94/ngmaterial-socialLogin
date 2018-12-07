import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { JwtService } from '../core/services/jwt.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  username: String;
  image: String;
  imageUploadForm: FormGroup;
  imageDetails: any;

  constructor( private apiService: ApiService,
              private jwtService: JwtService,
              private router: Router,
              private fb: FormBuilder) {
    this.imageUploadForm = fb.group({
      name : ['', Validators.required],
      image : ['', Validators.required]
    });
  }

  onSubmit() {
    this.imageDetails = this.imageUploadForm.value;
    console.log(this.fileName, '2222222222222222222222');

    const fdd = new FormData();
    fdd.append('name', this.imageUploadForm.value.name);
    fdd.append('image', this.fileName, this.fileName.name);

    this.apiService.imageUploadRequest(fdd).subscribe(
      upload => {
        if (upload) {
          console.log(upload);
          this.signupSpinner = false;
          this.toasterService.showSuccess(upload.success, 'Success');
          // this.router.navigate(['/dashboard']);
          this.myprofile();
        }
      },
      error => {
        this.signupSpinner = false;
        this.toasterService.showError(error.error.error, 'Error');
      }
    );
  }

  destroyToken() {
    this.jwtService.destroyToken();
    this.router.navigate(['/']);
  }

  getMyProfile() {
    this.apiService.getMyProfile().subscribe(
      profile => {
        this.user = profile;
        this.username = this.user['name'];
        this.image = this.user['image'];
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
