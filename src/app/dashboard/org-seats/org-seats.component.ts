import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { environment } from 'src/environments/environment';
import { OrganizationLevelService } from '../../services/organization-level.service';


@Component({
  selector: 'app-org-seats',
  templateUrl: './org-seats.component.html',
  styleUrls: ['./org-seats.component.scss']
})
export class OrgSeatsComponent implements OnInit {

  public chart: any;
  orgName: any = "";
  data: any = [];
  seatDetails: any ;

  // data source for table
  seatInformation: any;
  page:number = 1;

  constructor(private organizationLevelService: OrganizationLevelService) { }

  ngOnInit(): void {
    this.orgName = environment.orgName;
    // create chart
    this.createChart();
  }

  createChart(){

    var xLabel=['Active','Inactive'];
    var users=[0,0];

    // get data from service
    this.organizationLevelService.getCopilotSeatsData().subscribe((data: any) => {
      // console.log(data);
      this.data = data;
      sessionStorage.setItem('orgData', JSON.stringify(data));
      this.seatInformation = data.seats;
      // calculate active and inactive users
      this.data.seats.forEach((element: any) => {
        if (element.last_activity_at && element.last_activity_at.trim() !== '') {
          users[1]++;
        }
        else{
          users[0]++;
        }
      });

      this.seatDetails=[
        {category: 'Total Seat', value: this.data.total_seats, desc: 'Total number of seats purchased'},
        {category: 'Active Users', value: users[1], desc: 'Total number of active users'},
        {category: 'Inactive Users', value: users[0], desc: 'Total number of inactive users'}
      ];
      
    });
  }

}
