import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCoreService } from './api-core.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private apiCoreService: ApiCoreService
  ) { }

  getData(url): Observable<any[]> {
    return this.apiCoreService.get(url)
    .pipe(map(res => res))
  }

  showById(url,id): Observable<any[]> {
    return this.apiCoreService.get(`${url}/${id}`)
    .pipe(map(res => res));
  }

  deleteData(url,id): Observable<any[]> {
    return this.apiCoreService.delete(`${url}/${id}`)
    .pipe(map(res=>res));
  }

  createData(url,data): Observable<any[]> {
    return this.apiCoreService.post(url, data)
    .pipe(map(res=>res));
  }

  updateData(url,id,data:any): Observable<any[]> {
    return this.apiCoreService.put(`${url}/${id}`, data)
    .pipe(map(res=>res));
  }
  
}
