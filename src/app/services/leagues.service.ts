import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, delay, retry, throwError } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  private apiKey = environment.apiKey;

  private url = 'https://v3.football.api-sports.io/leagues';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': this.apiKey,
  });

  constructor(private http: HttpClient) {}

  getLeagues() {
    return this.http.get(this.url, { headers: this.headers });
  }
}
