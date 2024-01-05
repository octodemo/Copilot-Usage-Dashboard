import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  gotoHome(){
    this.router.navigate(['']);  
  }
  todo(){

  }

  // define the gotoLogin method
  gotoLogin(){
    // navigate to login page
    this.router.navigate(['login']);

  }

}
