import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { GameService } from '../authentication/services/game.service';
import { Time } from '../shared/models/time';
import { Game } from '../shared/models/games';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  form: FormGroup;
  filteredNames: any;
  time : Time[] = [];
  games : Game[] = [];
  error : any;

names = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  constructor(
    private fb: FormBuilder,
    private gameService: GameService
  ) {
    this.getTimes();
    this.getGames();
  }

  showDialog: boolean;

  ngOnInit() {
    this.form = this.fb.group({
      colleague: ['', [Validators.required]]
    });
    this.filteredNames = this.form.controls.colleague.valueChanges
        .startWith(null)
        .map(name => this.filterNames(name));
  }

  filterNames(val: string) {
    return val ? this.names.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.names;
  }

  openDialog(){
    this.showDialog = true;
  }

  getTimes(){
    this.gameService.getTimes().subscribe(
        games => {
          this.time = games;
          console.log(this.time);
        },
        error => {
          this.error = error
        }
    );
  }

  getGames(){
    this.gameService.getGames().subscribe(
        games => {
          this.games = games;
          console.log(this.games);
        },
        error => {
          this.error = error
        }
    );
  }

  closeDialog(){
    this.showDialog = false;
  }

}
