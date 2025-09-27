import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.scss']
})
export class ItemMasterComponent implements OnInit {
  apiUrl = environment.apiUrl;
  itemForm: FormGroup;
    dataSource: any[] = [];
  Categories: any[] = [];
  Units: any[] = [];
  displayedColumns: string[] = ['itemname', 'price', 'category', 'hsncode'];

  showForm: boolean = false;
  item = {
    itemname: '',
    categoryid: null, 
    unitid: null,
    price: '',
    hsncode: '',
    isactive: true
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    // Fetch Item Data
    this.http.get<any[]>(`${this.apiUrl}Item`).subscribe(res => {
      this.dataSource = res;
    });

    // Fetch Units Data
    this.http.get<any[]>(`${this.apiUrl}Unit`).subscribe(res => {
      this.Units = res;
      console.log("Units", this.Units);
    });

    // Fetch Categories Data
    this.http.get<any[]>(`${this.apiUrl}Category`).subscribe(res => {
      this.Categories = res;
      console.log("Categories", this.Categories);
    });
  }

  onAddClick() {
    this.showForm = true;
  }

  onSubmit() {
    if (!this.item.categoryid || !this.item.unitid) {
      alert("Please select both Category and Unit.");
      return;
    }

    this.http.post(`${this.apiUrl}Item`, this.item).subscribe(res => {
      console.log("Item added", res);
      this.showForm = false;
      this.ngOnInit(); // Refresh the list after adding
    });
  }

  onCancel() {
    this.showForm = false;
    this.item = {
      itemname: "",
      categoryid: null,
      unitid: null,
      price: "",
      hsncode: "",
      isactive: true
    };
  }
}
