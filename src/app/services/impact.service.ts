import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CopilotDataService } from './copilot-data.service';

@Injectable({
  providedIn: 'root'
})
export class ImpactService {

  constructor(private http: HttpClient, private copilotDataService: CopilotDataService) { }

  getCopilotUsageData(): Observable<any> {
    return this.copilotDataService.getCopilotUsageData();
  }

  getCopilotSeatsData(): Observable<any> {
    return this.copilotDataService.getCopilotSeatsData(30);
  }
}