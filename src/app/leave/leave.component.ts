import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leaveDetails: any;
  isShow: boolean = false;
  EmployeeId: string = localStorage.getItem('employeeId');

  applyOnLeave: FormGroup = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    leaveType: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
    employeeId: new FormControl(this.EmployeeId)
  });

 

  constructor(private router: Router, private api: ApiServiceService,private userService:UserServiceService) {
  }


  ngOnInit(): void {
    this.getLeaveDetails();
    console.log(this.EmployeeId, 'helo')
  }
  leaveForm() {
    console.log('helo')
    this.isShow = !this.isShow;
  }
  getLeaveDetails() {
    this.api.getLeaveDetails(this.EmployeeId).subscribe(data => {
      console.log(data, 'helo')
      this.leaveDetails = data
      if(this.userService.Role=="Employee"){
        this.leaveDetails=Array.of(this.leaveDetails)
      }
          });
  }

  applyLeave(params: any) {
    this.api.applyLeaveOn(params).subscribe(data => {
      console.log(data, 'data')
      this.isShow = false;
    });
  }
}
