import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  events1: any[] = [];

  ExperienceADD: boolean = false;
  experienceEDIT : boolean = false;

  ExperienceADDfunction() {
    this.ExperienceADD = true;
  }
 experienceEDITfunction() {
    this.experienceEDIT = true;
  }

  ngOnInit() {

    //TimeLine
    this.events1 = [
      { title: 'Developper React-native', date: '15/10/2020', enterprise: 'Google',details:'Developper of the site web', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0' },
      { title: 'Developper React', date: '15/10/2020', enterprise: 'Amazon',details:'Application of stock', icon: PrimeIcons.COG, color: '#673AB7' },
    ];

  }
}
