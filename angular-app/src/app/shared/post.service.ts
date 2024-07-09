import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  sendGet(url: string): Observable<any> {
    return this.http.get<{ [key: string]: any }>(this.apiUrl + url, {
        responseType: 'json',
      });
  }

}
