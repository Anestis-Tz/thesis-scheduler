import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { LanguageService } from './language.service';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  onInvalidToken = new Subject();
  onUnauthorized = new Subject();

  constructor(private http: HttpClient, private languageService: LanguageService, private dialog: MatDialog) { }

  mainGetRequest(params: any) {
    let reqheaders = new HttpHeaders();

    return new Promise(resolve => {
      this.http.get<any>(params.url, { headers: reqheaders }).subscribe(res => {
        // this.
      })
    })
  }

  // checkResponse(resolve, params, data, error) {

  // }

  // checkError(api, resp, error) {
    
  //   if (resp && resp.success == false) {

  //     switch (api) {
  //       case "/api/user/login":
  //     };

  //   }
  // }
}
