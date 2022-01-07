import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GENERIC_CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = environment.apiHostURL + `/`;
  }

  getHttpParams(payload: any, isHttpGet = false, fields = undefined): HttpParams {
    let params = new HttpParams();
    for (var property in payload) {
      if (payload.hasOwnProperty(property) && (fields === undefined || fields.includes(property))) {
        if (isHttpGet) {
          if (payload[property] != null && String(payload[property]) !== '') {
            params = params.set(property, String(payload[property]));
          }
        } else {
          params = params.set(property, payload[property] == null ? '' : String(payload[property]));
        }
      }
    }
    return params;
  }
  getHttpHeaders(): any {
    let headers = {};
    let token = localStorage.getItem(GENERIC_CONSTANTS.LOGGEDIN_TOKEN);
    headers['Authorization'] = 'Bearer '+ token;
    headers['abcd'] = 'Bearer '+ token;
  
    return headers;
  }
  public getAll<T>({ url, payload }: { url: string; payload: any; }): Observable<T> {
    return this.http.get<T>(this.actionUrl + url, { params: this.getHttpParams(payload), headers: this.getHttpHeaders() });
  }

  public getAllPost<T>({ url, payload }: { url: string; payload: string; }) : Observable<T> {
    return this.http.post<T>(this.actionUrl + url, `"` + payload + `"`,{headers: this.getHttpHeaders()});
  }

  public getAllPostLookup<T>({ url, payload }: { url: string; payload: any; }) : Observable<T> {
    return this.http.post<T>(this.actionUrl + url, payload);
  }

  public getSingle<T>({ url, id }: { url: string; id: number; }): Observable<T> {
    return this.http.get<T>(this.actionUrl + url + '/' + id);
  }

  public add<T>({ url, payload }: { url: string; payload: any; }): Observable<T> {
    return this.http.post<T>(this.actionUrl+url, payload);
  }

  public update<T>({ url, id, itemToUpdate }: { url: string; id: string; itemToUpdate: any; } ): Observable<T> {
    return this.http.put<T>(this.actionUrl + url + '/' + id,JSON.stringify(itemToUpdate) );
  }

  public delete<T>({ url, id }: { url: string; id: string; }): Observable<T> {
    return this.http.delete<T>(this.actionUrl + url + '/' + id);
  }

  public downloadFile<T>({ url, payload }: { url: string; payload: any; }) : Observable<T>{
    const httpOptions = { responseType: 'blob' as 'json', params: this.getHttpParams(payload) };
    return this.http.get<T>(this.actionUrl + url, httpOptions);
  }

  public removeFile<T>({ url, payload }: { url: string; payload: any; }) : Observable<T>{
    return this.http.post<T>(this.actionUrl + url, payload);
  }

  public getRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + url, { headers: this.getHttpHeaders() });
  }

  public postRequest<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.actionUrl + url, body, { headers: this.getHttpHeaders() });
  }
  public postRequestNoHeaders<T>(url: string, body: any, options: any ): Observable<T> {
    return this.http.post<T>(this.actionUrl + url, body, {});
  }
  public putRequest<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(this.actionUrl + url, body, { headers: this.getHttpHeaders() });
  }
  public deleteRequest<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.actionUrl + url, { headers: this.getHttpHeaders() });
  }
}