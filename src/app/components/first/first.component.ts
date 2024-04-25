import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    if(this.loginForm.valid){
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      if(this.loginService.authenticate(email, password)){
        console.log(this.loginForm.value);
        localStorage.setItem("user", JSON.stringify(this.loginForm.value));
        this.router.navigate(['/2']);
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email and password didn't match",
        });
        return;
      }
    }
  }
}
