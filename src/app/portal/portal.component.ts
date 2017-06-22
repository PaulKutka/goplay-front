import { InformationService } from './services/information.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  names = [];
  form: FormGroup;
  showDialog: boolean;
  filteredNames: any;

  constructor(
    private fb: FormBuilder,
    private infoService: InformationService
  ) {}


  ngOnInit() {
    this.form = this.fb.group({
      colleague: ['', [Validators.required]]
    });

    this.getAllUsers();

    this.filteredNames = this.form.controls.colleague.valueChanges
        .startWith(null)
        .map(name => this.filterNames(name));
  }

  getAllUsers() {
    this.infoService
      .getAllUsers()
      .subscribe(res => this.names = res);
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

}
