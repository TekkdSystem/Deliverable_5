import { Component, OnInit } from '@angular/core';
declare const SignUp:any;
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  onClick(){
    SignUp();
  }
  constructor() { }

  ngOnInit() {

    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
    
  }

}
