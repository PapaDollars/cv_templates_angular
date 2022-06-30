import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(public FireS : FirebaseService) { }

  opened = false;

  SidebarModule() {
    this.opened = !this.opened;
  }

  ngOnInit() {


  }
  @Output()  isLogout = new EventEmitter<void>()
  logout(){
    //  localStorage.removeItem("user");
    this.FireS.logout()
    this.isLogout.emit()
    }
}
