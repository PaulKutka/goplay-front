import { Component, OnInit } from '@angular/core';
import { LeadersService } from '../services/leaders.service'
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

leaders = [];

  constructor(  
              private LeadersService: LeadersService,
          ) { }

  ngOnInit() {
    this.LeadersService.getLeaders().subscribe(
        leaders => this.leaders = leaders,
      );;
    console.log(this.leaders);
  }

}
