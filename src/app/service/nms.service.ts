import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nms } from '../models/nms.model';

const baseUrl = 'http://localhost:8080/api/nms';

@Injectable({
  providedIn: 'root'
})
export class NmsService {
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Nms[]> {
  return this.http.get<Nms[]>(baseUrl);
  }
}
