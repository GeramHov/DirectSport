import { Component, OnInit } from '@angular/core';
import { LeaguesService } from 'src/app/services/leagues.service';
import { StandingsService } from 'src/app/services/standings.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css'],
})
export class LeaguesComponent implements OnInit {
  public leagueData: any = {};

  id: number
  customLeague: boolean

  constructor(private leagueService: LeaguesService,
              private standingsService: StandingsService) {
   this.id = 0
   this.customLeague = false;
  }

  // API FETCH

  fetchLeagues() {
    this.leagueService.getLeagues().subscribe((response) => {
      this.leagueData = response;
      // console.log(this.leagueData);
    });
  }

  getLeagueId(id: number, event: any): void {
    event.preventDefault();
    const leagueId = id;
    console.log('Clicked league ID:', leagueId);

    this.standingsService.getStandingsByLeagueId(leagueId).subscribe((standings) => {
      // Process the standings data returned from the API call
      console.log('Standings:', standings);
    });
    this.customLeague = true;
  }

  ngOnInit(): void {
    this.fetchLeagues();
    // this.customLeague;
  }
}
