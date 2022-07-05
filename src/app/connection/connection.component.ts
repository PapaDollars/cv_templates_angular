import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { IUsers } from '../home/information/appJSON';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  isLogin: boolean | undefined;
  isSignin: boolean = true;

  constructor(private translateService: TranslateService ,public firebaseservice : FirebaseService,public cruds : FirebaseService, public crud : AngularFirestore) { }

  public selectLanguage(event:any){
    this.translateService.use(event.target.value);
  }

  pwd1 : any ="";
  mail : any;
  email : string = "";
  password : string = "";
  isSignedIn = false;
  public isConnection = true
  isRegister = true
  isLoginHome(){
    this.isSignin = true;
    this.isLogin = true;
  }
   info !: any[];
  ngOnInit() {
    if(localStorage.getItem("user")!= null)
    {
     this.isSignedIn = true
     this.isConnection = false
     this.isRegister = false
    }
    else
    this.isSignedIn = false
    this.cruds.get_user().subscribe(data  =>{
      // console.log(data[0].mail);
      this.info =data;
      console.log(data) ;
    })
  }



   onssignedup(email : string , pwd : string){
     this.firebaseservice.signup(email,pwd)
    if(this.firebaseservice.isloggedIn)
    this.isSignedIn = true;
    localStorage.setItem("emails",this.email);
  }

  async onssignedin(email : string , password : string){
    await this.firebaseservice.signin(email,password)
    if(this.firebaseservice.isloggedIn)
    this.isSignedIn = true;
  }

  handlelogout(){
    this.isSignedIn = false;
  }

   async sigmups(prenom : string, nom : string ,dateN : string , LieuN : string ,mail : string , pwd1 : string , pwd2 : string)
  {
     let daten : Date = <Date><unknown>dateN;
     if(pwd1 == pwd2)
     {
       let Record = {
        'email' :mail,
        'password': pwd1,
        'nom':nom,
        'prenom':prenom,
        'dateNaissance':daten,
        'site':LieuN,
        'photo':'',
        'biographie':''
       };
      //  let u1 : IUsers = new IUsers(mail,pwd1,nom,prenom,daten,LieuN,"","");
      await this.cruds.create_user(Record).then(res =>{
        console.log(res);
        alert("Utilisateur ajouter ");
      }).catch(error =>{
        console.log(error);
      });
      this.onssignedup(mail,pwd1);
      alert("success");
     }
     else
     {
      alert("mot de passe ne corresponds pas !");
     }
  }



}
