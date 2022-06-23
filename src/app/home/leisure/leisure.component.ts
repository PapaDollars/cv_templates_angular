import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {

  constructor() { }

  LeisureADD: boolean = false;
  LeisureEDIT: boolean = false;

  LeisureADDfunction() {
    this.LeisureADD = true;
  }
  LeisureEDITfunction(){
    this.LeisureEDIT = true;
  }

  ngOnInit() {
  }

}
