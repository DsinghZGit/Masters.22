import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      
      if (username === 'admin' && password === 'admin123') {
        this.router.navigate(['/dashboard']); 
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
