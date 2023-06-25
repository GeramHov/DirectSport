import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'sport-direct';

  standings : boolean
  
  constructor(){
    this.standings = false;
  }

  showStandings(event: any): void{
    this.standings = true;
    event.preventDefault()
  }
}
