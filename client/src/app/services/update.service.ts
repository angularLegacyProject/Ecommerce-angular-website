import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private http: HttpClient) {}
  update(id: any, data: any) {
    console.log(id);
    console.log(data);
    return this.http
      .patch<{ message: string; user: any }>(
        `http://localhost:5000/user/${id}`,
        data
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
