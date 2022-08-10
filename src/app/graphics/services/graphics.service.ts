import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  getUsersBySocialNetwork() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getInfoUsersBySocialNetwork() {
    return this.getUsersBySocialNetwork().pipe(
      map(data => {
        const labels = Object.keys(data);
        const values: number[] = Object.values(data);
        return { labels, values };
      })
    );
  }
}
