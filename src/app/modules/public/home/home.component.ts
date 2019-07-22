import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CryptoJsService } from '../../core/services/crypto-js.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private cryptoJSService: CryptoJsService
  ) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.dataForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.dataForm.invalid) {
      return;
    }
    const data = {
      "email" : this.f.email.value,
      "password" :  this.cryptoJSService.encryptText(this.f.password.value)
    }
    this.auth.login(data)
    .subscribe(
      res => {
        this.auth.setToken(`${res['access_token']}`)
        this.router.navigate(['/admin'])
      }
    )
    
  }

}
