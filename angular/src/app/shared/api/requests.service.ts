import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

import { Request } from '../models/request.model';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  API_URL = 'http://localhost:3000/api/requests/';
  requests: Request[];

  constructor(private httpClient: HttpClient) { }

  getRequests() {
    return this.httpClient.get(`${this.API_URL}`);
  }

  postRequest(request: Request) {
    return this.httpClient.post<Request>(`${this.API_URL}`, request);
  }

  putRequest(id: string, modifiedRequest: Request) {
    return this.httpClient.put<Request>(`${this.API_URL}` + id, modifiedRequest);
  }

  deleteRequest(id: string) {
    return this.httpClient.delete(`${this.API_URL}` + id);
  }

}
