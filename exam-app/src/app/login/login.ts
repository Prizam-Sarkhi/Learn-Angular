import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone : false
})

export class Login implements OnInit {
  loginform!: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).{6,}$')
      ]]
    });
  }

  onSubmit(){
    console.log(this.loginform.value);
  }
}