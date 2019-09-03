import { AuthService } from './../../services/Auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','../../app.component.css']// app component.css for some classes
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttpClient,public auth: AuthService) { }
  choosenOption:string="general";

  CheckChoosen(option:string){    
    this.choosenOption=option;
  }



  ngOnInit() {
  }

}
