import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;

  // Method to retrieve data from the API
  get(urlPath: string) {
    return this.http.get(urlPath);
  }

  // Method to send data to the API to create a new resource
  create(urlPath: string, data: any) {
    return this.http.post(urlPath, data);
  }

  // Method to send data to the API to update a resource
  update(urlPath: string, data: any) {
    return this.http.put(urlPath, data);
  }

  // Method to delete a resource from the API
  delete(urlPath: string) {
    return this.http.delete(urlPath);
  }
}
