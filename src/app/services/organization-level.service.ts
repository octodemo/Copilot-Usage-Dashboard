import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationLevelService {

  private dataUrl = 'assets/copilot_usage_data.json'; // URL to JSON data

  constructor(private http: HttpClient) { }

  getData(): Observable<any>  {
    // sample dta loaded from local file
    return this.http.get(this.dataUrl);
    // uncomment below line to invoke API
    // modify the environment file to add your token
    // modify the organization name to your organization
    // return this.invokeAPI();
  }

  invokeAPI(): Observable<any> {
    const orgName = environment.orgName; 
    const apiUrl = `${environment.apiUrl}/${orgName}`+ '/copilot/usage';
    const token = environment.token; 
    
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    });

    return this.http.get(apiUrl, { headers });
  }

}