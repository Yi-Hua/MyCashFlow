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

  sendPost(url: string, content: { [key: string]: any } | FormData): Observable<any> {
    return this.http.post<{ [key: string]: any }>(this.apiUrl + url, content)
  }

  sendPatch(url: string, content: { [key: string]: any } | FormData): Observable<any> {
    return this.http.patch<{ [key: string]: any }>(this.apiUrl + url, content);
  }

  sendPut(url: string, content: { [key: string]: any } | FormData): Observable<any> {
    return this.http.put<{ [key: string]: any }>(this.apiUrl + url, content)
  }

  sendDelete(url: string, id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `${url}${id}`);
  }
}
