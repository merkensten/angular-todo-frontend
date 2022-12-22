import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;

  private createUrl(urlPath: string) {
    return this.baseUrl + '/' + urlPath;
  }

  // Method to retrieve data from the API
  getTodos(urlPath: string) {
    return this.http.get(this.createUrl(urlPath));
  }

  // Method to send data to the API to create a new resource
  createTodo(urlPath: string, data: any) {
    return this.http.post(urlPath, data);
  }

  // Method to send data to the API to update a resource
  updateTodo(urlPath: string, data: any) {
    return this.http.put(urlPath, data);
  }

  // Method to delete a resource from the API
  deleteTodo(urlPath: string) {
    return this.http.delete(urlPath);
  }
}
