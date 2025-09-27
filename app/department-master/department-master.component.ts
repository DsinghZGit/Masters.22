import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/Model/interfaces';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.scss']
})
export class DepartmentMasterComponent {
  apiUrl = environment.apiUrl;
  departmentForm: FormGroup;
  showForm = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.departmentForm = this.fb.group({
      deptName: ['', Validators.required],
      deptCode: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit() {
    this.getUsers(); 
  }

  dataSource: User[] = [];
  displayedColumns: string[] = ['fname', 'lname', 'email'];

  getUsers() {
    this.http.get<User[]>(`${this.apiUrl}User`).subscribe(res => {
      this.dataSource = res;
    });
  }

  showAddForm() {
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
    this.departmentForm.reset({ isActive: true });
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      console.log('Submitted:', this.departmentForm.value);
      this.showForm = false;
      this.departmentForm.reset({ isActive: true });
    }
  }
}
