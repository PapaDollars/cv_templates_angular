import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  providers: [MessageService]
})
export class FormationComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  events1: any[] = [];

  FormationADD: boolean = false;
  FormationEDIT : boolean =false;

  FormationADDfunction() {
    this.FormationADD = true;
  }
  formationEDITfunction() {
    this.FormationEDIT = true;
  }

  ngOnInit() {

    //TimeLine
    this.events1 = [
      { diploma: 'Diploma_1', date: '15/10/2020', school: 'College Moderne', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0' },
      { diploma: 'Diploma_2', date: '15/10/2020', school: 'Lycee Bilingue', icon: PrimeIcons.COG, color: '#673AB7' },
    ];



  }

}
