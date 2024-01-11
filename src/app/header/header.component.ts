import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, public dialog: MatDialog) { }

  links = [
    {label: 'Organization', path: '/organization-level'},
    {label: 'impact', path: '/impact'},
    {label: 'Sample Response', path: '/sample-response'},
    {label: 'Org Seats', path: '/org-seats'},
    {label: 'Enterprise', path: '/enterprise-level'},
  ];

  ngOnInit(): void {
  }
  gotoHome() {
    this.router.navigate(['']);
  }


}
