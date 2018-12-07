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
  fileName: any;

  constructor( private apiService: ApiService,
              private jwtService: JwtService,
              private router: Router,
              private fb: FormBuilder) {
    this.imageUploadForm = fb.group({
      name : ['', Validators.required],
      image : ['', Validators.required]
    });
  }

  filechange(event: any) {
    // console.log(event,'111111');
    this.fileName = <File>event.target.files[0];
    // console.log(this.fileName,'aaaaaa');
    // this.fileNameData = this.fileName.name;
    // console.log(this.fileNameData,'oo');
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
          // this.router.navigate(['/dashboard']);
          this.getMyProfile();
        }
      },
      error => {
        console.log(error);
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
