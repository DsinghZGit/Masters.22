// import { GSTCalculatorComponent } from 'app/gst-calculator/gst-calculator.component';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'environments/environment';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gst-calculator',
  templateUrl: './gst-calculator.component.html',
  styleUrls: ['./gst-calculator.component.scss']
})
export class GSTCalculatorComponent {
   gstForm!: FormGroup;
  gstList: any[] = []; // Ideally define an interface
  gstResult: {
    taxAmount: number;
    totalAmount: number;
    igst: number;
    cgst: number;
     beforeTaxAmount?: number;
  } | null = null;

  apiUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.gstForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(0.01)]],
      selectedGstId: [null, Validators.required],
      gstMode: ['exclusive', Validators.required]  // ✅ Added here
    });

    this.http.get<any[]>(`${this.apiUrl}Gst`).subscribe(data => {

      this.gstList = data;
    });
  }

  calculateGST(): void {
  if (this.gstForm.invalid) return;

  const amount = this.gstForm.value.amount;
  const gstId = this.gstForm.value.selectedGstId;
  const gstMode = this.gstForm.value.gstMode;

  console.log('Selected GST Mode:', gstMode);  // 👈 Debug line

  const selectedGst = this.gstList.find(g => g.gstid == gstId);
  if (!selectedGst) return;

  const rate = selectedGst.gstrate;
  let taxAmount = 0;
  let totalAmount = 0;
  let beforeTaxAmount: number | undefined = undefined;
  if (gstMode === 'exclusive') {
    taxAmount = (amount * rate) / 100;
    totalAmount = amount + taxAmount;

  } else if (gstMode === 'inclusive') {
    taxAmount = amount - (amount / (1 + rate / 100));
    totalAmount = amount - taxAmount;
    beforeTaxAmount = amount - taxAmount;
  }

  const igst = taxAmount / 2;
  const cgst = taxAmount / 2;

  this.gstResult = {
    taxAmount: parseFloat(taxAmount.toFixed(2)),
    totalAmount: parseFloat(totalAmount.toFixed(2)),
    igst: parseFloat(igst.toFixed(2)),
    cgst: parseFloat(cgst.toFixed(2)),
    beforeTaxAmount: beforeTaxAmount !== undefined ? parseFloat(beforeTaxAmount.toFixed(2)) : undefined
  };
}

  }
