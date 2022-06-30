import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  constructor(public cruds : FirebaseService) { }

  AccountADD: boolean = false;
  AccountEDIT: boolean = false;

  AccountADDfunction() {
    this.AccountADD = true;
  }
  idcompte !: any;
  titress !: any;
  lienss !: any;
  AccountEDITfunction(compte : any){
    this.AccountEDIT = true;
    this.idcompte = compte.id;
    this.titress = compte.titre;
    this.lienss = compte.lien;
  }
   compte !: any[];
  ngOnInit() {
    this.cruds.get_compte().subscribe(data =>{
      this.compte = data;
      console.log(data);
   })
  }

  setcompte(titre : string , lien : string)
  {
    let Record = {
      'titre' : titre,
      'lien' : lien,
      'mail' : ''
    }
    this.cruds.create_Compte(Record).then(res =>{
      console.log(res);
      alert("Compte ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }

  DeleteCompte(compte : any)
{
  this.cruds.deletecompte(compte.id);
}

updatecompte(titre : string , lien : string)
{
  let Record = {
    'id' : this.idcompte,
    'titre' : titre,
    'lien' : lien
  }

  this.cruds.updatecompte(Record)
}


}
