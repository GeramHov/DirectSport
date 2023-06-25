import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './components/countries/countries.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { GamesComponent } from './components/games/games.component';
import { StandingsComponent } from './components/standings/standings.component';

@NgModule({
  declarations: [AppComponent, CountriesComponent, LeaguesComponent, GamesComponent, StandingsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
