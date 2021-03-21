import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShortUrlService {


  URL= "https://api-ssl.bitly.com/v4/shorten"


  constructor(private http: HttpClient) { }

  getUrlShort(nombreURL:string): Observable<any>{


    return this.http.post(this.URL, { long_url:nombreURL } )
  }
}
