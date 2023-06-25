import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  
  private season = '2021';
  private apiKey = environment.apiKey;
  private url = 'https://v3.football.api-sports.io/standings';

  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': this.apiKey,
  });

  constructor(private http: HttpClient) {}

  getStandingsByLeagueId(leagueId: number): Observable<any> {
    const params = new HttpParams().set('league', String(leagueId)).set('season', this.season);
    return this.http.get(this.url, { headers: this.headers, params });
  }
}
