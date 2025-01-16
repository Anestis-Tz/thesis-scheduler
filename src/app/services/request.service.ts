import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { LanguageService } from './language.service';
import { environment } from '../../environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private languageService: LanguageService) { }

  /** Return headers with user token  */
  private getRequestOptions() {
    let token = localStorage.getItem("session-token");
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return { headers: headers };
    } else {
      return;
    }
  }

  // Main GET request
  mainGetRequest(params) {
    return new Promise((resolve, reject) => {
      let apiUrl = environment.apiUrl

      this.http.get<any>(apiUrl + params.url, this.getRequestOptions()).subscribe((data) => {
        this.checkResponse(resolve, params, data, null, reject);
      }, error => {
        this.checkResponse(resolve, params, error.error, error, reject);
      });
    });
  }

  // Main POST request
  mainPostRequest(params) {
    var reqHeader = new HttpHeaders();

    return new Promise((resolve, reject) => {
      let apiUrl = environment.apiUrl;

      this.http.post<any>(apiUrl + params.url, params.req, { headers: reqHeader }).subscribe((data) => {
        this.checkResponse(resolve, params, data, null, reject);
      }, error => {
        this.checkResponse(resolve, params, error.error, error, reject);
      });
    });
  }

  mainPutRequest(params) {
    var reqHeader = new HttpHeaders();

    return new Promise((resolve, reject) => {
      let apiUrl = environment.apiUrl;

      this.http.put<any>(apiUrl + params.url, params.req, { headers: reqHeader }).subscribe((data) => {
        this.checkResponse(resolve, params, data, null, reject);
      }, error => {
        this.checkResponse(resolve, params, error.error, error, reject);
      });
    });
  }

  mainDeleteRequest(params) {
    var reqHeader = new HttpHeaders();

    return new Promise((resolve, reject) => {
      let apiUrl = environment.apiUrl;

      this.http.delete<any>(apiUrl + params.url, { headers: reqHeader }).subscribe((data) => {
        this.checkResponse(resolve, params, data, null, reject);
      }, error => {
        this.checkResponse(resolve, params, error.error, error, reject);
      });

    });
  }

  checkResponse (resolve, params, data, error, reject) {
    this.checkError(params, data, error).then((resp: any) => {  
      if (resp === true)  {
        this.hideLoader();
        return throwError(data);
      } else if (resp) {
        resolve(resp);
      } else {
        resolve(data);
      }
    })
  }

  handleError(error) {
    this.hideLoader();
    return throwError(error);
  }

  checkError(params, resp, error) {
    return new Promise((resolve, reject) => {
      if (resp?.code) {
        alert("ERROR " + resp?.code);
      } else {
        resolve(false);
      }
    });
  }

  hideLoader() {
    // document.getElementById("loader") ? document.getElementById("loader").style.display = "none" : null;
  }

}
