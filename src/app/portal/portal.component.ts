import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  showDialog: boolean;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(){
    this.showDialog = true;
  }

  closeDialog(){
    this.showDialog = false;
  }

}
