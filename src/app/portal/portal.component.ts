import { InformationService } from './services/information.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

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

  names = [];
  form: FormGroup;

  timer = 0;

  showDialog: boolean;
  showTimer: boolean;

  filteredNames: any;
  time: Time[] = [];
  games: Game[] = [];
  error: any;

  constructor(
    private fb: FormBuilder,
    private infoService: InformationService,
    private gameService: GameService
  ) {
    this.getTimes();
    this.getGames();
  }


  ngOnInit() {
    this.form = this.fb.group({
      colleague: ['', [Validators.required]]
    });

    this.getAllUsers();
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
    const ticks = Observable.timer(0, 1000  );
    ticks.subscribe(t => {
      this.timer = t;
    });
  }

  closeTimer() {
    this.showTimer = false;
  }

  onSubmit() {
    this.openTimer();
  }

  getTimes() {
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

  getGames() {
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

}
