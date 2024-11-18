import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImpactService {

  private copilotUsageDataUrl = 'assets/copilot_usage_data.json'; // URL to JSON data
  private copilotSeatsDataUrl = 'assets/copilot_seats_data.json'; // URL to JSON data

  constructor(private http: HttpClient) { }

  getCopilotUsageData(): Observable<any>  {
    // sample dta loaded from local file
    // return this.http.get(this.copilotUsageDataUrl);
    // uncomment below line to invoke API
    // modify the environment file to add your token
    // modify the organization name to your organization
    return this.invokeCopilotUsageApi();
  }

  getCopilotSeatsData(): Observable<any>  {
    // sample dta loaded from local file
    // return this.http.get(this.copilotSeatsDataUrl);
    // uncomment below line to invoke API
    // modify the environment file to add your token
    // modify the organization name to your organization
    return this.invokeCopilotSeatApi();
  }

  invokeCopilotUsageApi(): Observable<any> {
    const orgName = environment.orgName; 
    const apiUrl = `${environment.ghBaseUrl}/${orgName}/${environment.copilotUsageApiUrl}`;
    const token = environment.token; 
    
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    });

    return this.http.get(apiUrl, { headers });
  }

  invokeCopilotSeatApi(): Observable<any> {
    const orgName = environment.orgName; 
    const apiUrl = `${environment.ghBaseUrl}/${orgName}/${environment.copilotSeatApiUrl}`;
    var data:any;
    var firstPage=true;
    var pageNo=1;
    var totalPages=1;

    // get the paginated Copilot Seat allocation data
    do{
      var response = this.getPaginatedSeatsData(apiUrl, pageNo);
      response.subscribe((data: any) => {
        if(firstPage){
          data=data;
          firstPage=false;
          totalPages=data.total_pages;
        }
        else{
          data.seats=data.seats.concat(data.seats);
        }
      });
      pageNo=pageNo+1;
    }while(pageNo < totalPages);

    return data;
  }

  getPaginatedSeatsData(apiUrl:any, pageNo:any): Observable<any> {
    const token = environment.token; 
    
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    });

    return this.http.get(apiUrl+"?page="+pageNo, { headers });

  }

}
