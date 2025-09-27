import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DepartmentMasterComponent } from 'app/department-master/department-master.component';
import { BankMasterComponent } from 'app/bank-master/bank-master.component';
import { GstMasterComponent } from 'app/gst-master/gst-master.component';
import { ItemMasterComponent } from 'app/item-master/item-master.component';


import { AddUserComponent } from 'app/user-profile/add-user/add-user.component';
import { AddGstComponent } from 'app/gst-master/add-gst/add-gst.component';
import { GSTCalculatorComponent } from 'app/gst-calculator/gst-calculator.component';
import { LoginComponent } from 'app/login/login.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',      component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'add-user',   component: AddUserComponent },
    { path: 'item-master',  component: ItemMasterComponent },
    { path: 'gst-master',  component: GstMasterComponent },
    { path: 'add-gst',  component: AddGstComponent },
    { path: 'bank-master',  component: BankMasterComponent },
    { path: 'department-master',  component: DepartmentMasterComponent },
    { path: 'gst-calculator',  component: GSTCalculatorComponent },
   

]