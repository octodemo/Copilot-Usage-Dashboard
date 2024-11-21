import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CopilotDataService {

  constructor(private http: HttpClient) { }

  getCopilotUsageData(): Observable<any> {
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

  getCopilotSeatsData(pageSize: number = 30): Observable<any> {
    const orgName = environment.orgName; 
    const apiUrl = `${environment.ghBaseUrl}/${orgName}/${environment.copilotSeatApiUrl}`;
    
    let data: any = { seats: [] };
    let firstPage = true;
    let pageNo = 1;
    let totalPages = 1;
  
    // Create an observable to handle the paginated data fetching
    return new Observable(observer => {
      const fetchPage = (pageNo: number) => {
        this.getPaginatedSeatsData(apiUrl, pageNo, pageSize).subscribe({
          next: (response: any) => {
            if (firstPage) {
              data = response;
              firstPage = false;
              totalPages = response.total_pages;
            } else {
              data.seats = data.seats.concat(response.seats);
            }
  
            if (pageNo < totalPages) {
              fetchPage(pageNo + 1);
            } else {
              observer.next(data);
              observer.complete();
            }
          },
          error: (error) => {
            console.error('Error fetching paginated data:', error);
            observer.error(error);
          }
        });
      };
  
      fetchPage(pageNo);
    });
  }

  private getPaginatedSeatsData(apiUrl: string, pageNo: number, pageSize: number): Observable<any> {
    const token = environment.token;
    const paginatedUrl = `${apiUrl}?page=${pageNo}&per_page=${pageSize}`;
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    });
  
    return this.http.get(paginatedUrl, { headers });
  }
}