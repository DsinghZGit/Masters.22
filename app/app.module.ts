
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';
import { GstMasterComponent } from './gst-master/gst-master.component';
import { BankMasterComponent } from './bank-master/bank-master.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { AddUserComponent } from './user-profile/add-user/add-user.component';
import { AddGstComponent } from './gst-master/add-gst/add-gst.component';
import { GSTCalculatorComponent } from './gst-calculator/gst-calculator.component';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule, 
    MatRadioModule
    
  
    // GSTCalculatorComponent,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ItemMasterComponent,
    DepartmentMasterComponent,
    GstMasterComponent,
    BankMasterComponent,
    AddUserComponent,
    AddGstComponent,
    GstMasterComponent,
    GSTCalculatorComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
