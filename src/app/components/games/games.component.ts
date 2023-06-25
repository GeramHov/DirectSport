import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  currentDate: string;
  public apiKey = environment.apiKey;
  constructor() {
    this.currentDate = '';
  }

  ngOnInit(): void {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
    // console.log(this.currentDate);
    this.apiKey;
    console.log(this.apiKey);
  }
}
