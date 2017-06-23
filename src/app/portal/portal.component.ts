import { InformationService } from './services/information.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { GameService } from './services/game.service';
import { Time } from '../shared/models/time';
import { Game } from '../shared/models/games';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  names = [];
  form: FormGroup;

  timerId;
  timer = 0;

  showDialog: boolean;
  showTimer: boolean;

  filteredNames: any;
  time: Time[] = [];
  games: Game[] = [];
  error: any;
  gameResults: boolean;
  counter: number = 0;
  result: string = '';
  currentTime : number;
  selectedTime : Time;

  constructor(private fb: FormBuilder,
              private infoService: InformationService,
              private gameService: GameService) {
  }


  ngOnInit() {
    this.form = this.fb.group({
      colleague: ['', [Validators.required]],
      game: ['', [Validators.required]],
      time: ['', [Validators.required]],
      opponent1: ['', [Validators.required]],
      opponent2: ['', [Validators.required]]
    });

    this.getAllUsers();
    this.getGames();
  }

  nameValueChanges() {
    this.filteredNames = this.form.controls.colleague.valueChanges
        .startWith(null)
        .map(name => this.filterNames(name));
  }

  getAllUsers() {
    this.infoService
        .getAllUsers()
        .subscribe(res => {
          res.map(person => this.names.push(person.name));
          this.nameValueChanges();
        });
  }

  filterNames(val: string) {
    return val ? this.names.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
        : this.names;
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  openTimer() {
    this.showTimer = true;
    if (this.showTimer) {
      this.timerId = setInterval(() => {
        this.timer++;
      }, 1000);
    };
  }

  closeTimer() {
    this.timer = 0;
    this.counter = 0;
    this.result = '';
    clearInterval(this.timerId);
    this.showTimer = false;
  }

  submit() {
    if (++this.counter < 2) {
      this.openTimer();
      console.log(this.selectedTime.id,
          this.form.get('colleague').value,
          this.form.get('opponent1').value,
          this.form.get('opponent2').value)
      this.gameService.startMatch(
          this.selectedTime.id,
          this.form.get('colleague').value,
          this.form.get('opponent1').value,
          this.form.get('opponent2').value
      ).subscribe(
          response=> console.log(response),
          error=> console.log(error)
      )
    }
    else {
      this.showTimer = true;
    }
    console.log(this.form.value)
  }

  selectTime(gameTime){
    this.selectedTime = gameTime;
  }

  finishGame() {
    this.gameResults = true;
    this.currentTime = this.timer;
  }

  getTimes(id) {
    this.gameService.getTimes(id).subscribe(
        games => this.time = games,
        error => this.error = error
    );
  }

  getGames() {
    this.gameService.getGames().subscribe(
        games => this.games = games,
        error => this.error = error
    );
  }

}
