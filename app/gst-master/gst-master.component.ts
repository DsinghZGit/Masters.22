import { Component, OnInit } from '@angular/core';
import { User } from 'app/Model/interfaces';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface GstModel {
  gstrate: number;       
  description: string;  
  isactive: boolean;     
  gstid?: number;       
}

@Component({
  selector: 'app-gst-master',
  templateUrl: './gst-master.component.html',
  styleUrls: ['./gst-master.component.scss']
})
export class GstMasterComponent implements OnInit {
  showForm: boolean = false;
  gstData: GstModel = {

    gstrate: 0,

    description: '',

    isactive: true

  };


  dataSource: GstModel[] = [];
  displayedColumns: string[] = ['gstrate', 'description', 'isactive'];
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchGstList();
  }

  fetchGstList(): void {
    this.http.get<any[]>(`${this.apiUrl}Gst`).subscribe(data => {
      this.dataSource = data;
      console.log("dsfssdfsf",this.dataSource)
    });
  }

  AddGst(): void {
    const payload = {
      gstrate: this.gstData.gstrate,
      description: this.gstData.description,
      isactive: this.gstData.isactive
    };

    this.http.post(`${this.apiUrl}Gst`, payload).subscribe(() => {
      alert('GST saved successfully');
      this.fetchGstList();
      this.onCancel();
    });
  }

  onCancel(): void {
    this.showForm = false;
    this.gstData = {
      gstrate: 0,
      description: '',
      isactive: true
    };
  }
}
