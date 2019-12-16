import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './auth/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(private router: Router, private data: DataService) {
 
    this.data.getProfile();
  }

  get token() {
    return localStorage.getItem('token');
  }
}
