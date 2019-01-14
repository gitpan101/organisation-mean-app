import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { AppService } from "../app-service.service";
import { IDepartment } from "../models/department.model";

@Component({
  selector: "dept-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private _appService: AppService,
    private _router: Router,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.createForm = this._fb.group({
      deptName: ["", Validators.required],
      streamType: "",
      hodName: ""
    });
  }

  createDepartment(formValue: IDepartment): void {
    this._appService.createDepartment(formValue).subscribe(
      response => {
        if (!response) {
          return this._snackBar.open("Unable to create department!", "OK", {
            duration: 3000
          });
        }

        this._snackBar.open("Department created successfully.", "OK", {
          duration: 3000
        });

        this._router.navigate(["/department/list"]);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}
}
