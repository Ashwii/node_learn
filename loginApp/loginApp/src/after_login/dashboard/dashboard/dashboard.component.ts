import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../shared/services/service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
logOutUrl: string = 'logout';
  constructor(public route: Router, public service: ServiceService) { }

  ngOnInit() {
  }
  logOut = () => {
    this.route.navigate(['/']);
    this.service.postData(this.logOutUrl, {id: 1})
    .subscribe((result) => {

    }, (error) => {});
  }
}
