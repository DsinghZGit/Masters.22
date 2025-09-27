import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-gst',
  templateUrl: './add-gst.component.html',
  styleUrls: ['./add-gst.component.scss']
})
export class AddGstComponent implements OnInit {
gstForm : FormBuilder
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  // Handle form submission
  onSubmit() {

  }

}
