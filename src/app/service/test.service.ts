import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
        public http: HttpClient
    ) {}

  getLocation() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  };
  getLocation1() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  };
  getLocation2() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  };
  getdata() {
        return this.http.get("./assets/data.json")
  }
}
