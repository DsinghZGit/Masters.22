import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from 'environments/environment';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank-master',
  templateUrl: './bank-master.component.html',
  styleUrls: ['./bank-master.component.scss']
})

  export class BankMasterComponent {
  
  showForm: boolean = false;
  bank = {
    name: '',
    ifsC_CODE: '',
    branch: '',
    address: '',
    contacT_NUMBER: '',
    isactive: true
  };

  apiUrl = environment.apiUrl;
  dataSource: any[] = [];
  displayedColumns: string[] = ['name', 'ifsC_CODE', 'branch'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBank();
  }

  getBank() {
    this.http.get<any[]>(`${this.apiUrl}Bank`).subscribe(res => {
      this.dataSource = res;
    });
  }

  onCancel() {
    this.showForm = false;
    this.bank = {
      name: '',
      ifsC_CODE: '',
      branch: '',
      address: '',
      contacT_NUMBER: '',
      isactive: true
    };
  }

  AddBank() {
    
    this.http.post(`${this.apiUrl}Bank`, this.bank).subscribe(() => {
      console.log("added",this.bank);
      this.getBank();
      this.onCancel();
    });

  }
}