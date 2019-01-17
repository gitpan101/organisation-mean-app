import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { AppService } from "../app-service.service";
import { IEmployee } from "../models/employee.model";
import { IDepartment } from "../models/department.model";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  deptList: IDepartment[];

  constructor(
    private _appService: AppService,
    private _router: Router,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.createForm = this._fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      contactNum: "",
      salary: "",
      department: ["", Validators.required]
    });
  }

  ngOnInit() {
    this._appService
      .getDepartments()
      .subscribe(
        (depts: IDepartment[]) => (this.deptList = depts),
        err => console.log(err)
      );
  }

  createEmployee(empData: IEmployee): void {
    this._appService.createEmployee(empData).subscribe(
      employee => {
        if (!employee) {
          return this._snackBar.open("Unable to create Employee!", "OK", {
            duration: 3000
          });
        }

        this._snackBar.open("Employee created successfully.", "OK", {
          duration: 3000
        });

        this._router.navigate(["/employee/list"]);
      },
      err => {
        this._snackBar.open(
          "Please provide valid email and phone number with country code.",
          "OK",
          {
            duration: 5000
          }
        );
      }
    );
  }
}
