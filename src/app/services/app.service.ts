import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http :HttpClient) { 
  }

  getCatFacts(){
    return this.http.get("https://catfact.ninja/fact");
  }
}
