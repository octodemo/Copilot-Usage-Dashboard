import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpactService {

  private dataUrl = 'copilot_usage_data.json'; // URL to JSON data

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}