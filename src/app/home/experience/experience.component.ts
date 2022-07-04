import { Component, OnInit } from '@angular/core';
import { Item } from 'firebase/analytics';
import { PrimeIcons } from 'primeng/api';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public crud : FirebaseService) { }

  events1: any[] = [];

  ExperienceADD: boolean = false;
  experienceEDIT : boolean = false;

  ExperienceADDfunction() {
    this.ExperienceADD = true;
  }
  idexp !: string;
  post !: string;
  entrepris !: string;
  period !: string;
  detail !: string;
  pay !: string;
  cat !: string;
 experienceEDITfunction(event : any) {
    this.experienceEDIT = true;
    this.idexp = event.id;
    this.post = event.poste;
    this.entrepris = event.entreprise;
    this.period = event.periode;
    this.detail = event.detail;
    this.pay = event.country;
    this.cat = event.categorie;
  }
  experience !: any [];
  ngOnInit() {

    //TimeLine
    this.events1 = [
      { title: 'Developper React-native', date: '15/10/2020', enterprise: 'Google',details:'Developper of the site web', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0' },
      { title: 'Developper React', date: '15/10/2020', enterprise: 'Amazon',details:'Application of stock', icon: PrimeIcons.COG, color: '#673AB7' },
    ];
    this.crud.get_experience().subscribe(data  =>{
      this.experience =data;
      console.log(data) ;
    })
   

  }

  setexperience(poste : string , entreprise : string , periode : string , detail : string , country : string,categorie : string)
  {
    let Record = {
      'poste' : poste,
      'entreprise' : entreprise,
      'periode' : periode ,
      'detail' : detail,
      'country' : country,
      'categorie' : categorie,
      'mail' : ''
    }

    this.crud.create_experience(Record).then(res =>{
      console.log(res);
      console.log("experience ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }

  DeleteExperience(experience : Item)
  {
    this.crud.deleteexperience(experience);
  }

  updateExperience(poste : string , entreprise : string , periode : string , detail : string , country : string,cat : string)
  {
    let Record = {
      'id' : this.idexp,
      'poste' : poste,
      'entreprise' : entreprise,
      'periode' : periode ,
      'detail' : detail,
      'country' : country,
      'categorie' : cat
    }

    this.crud.updateExperience(Record);
  }
}
