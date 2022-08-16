import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeeDetails', component: EmployeeDetailsComponent },
  { path: 'addemployee', component: AddEmployeeDetailsComponent },
  { path: 'attachment', component: AttachmentComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'leave', component: LeaveComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
