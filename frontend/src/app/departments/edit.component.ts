import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { AppService } from "../app-service.service";
import { IDepartment } from "../models/department.model";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  deptId: String;
  editForm: FormGroup;

  constructor(
    private _appService: AppService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.editForm = this._fb.group({
      deptName: ["", Validators.required],
      streamType: "",
      hodName: ""
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => (this.deptId = params.id));

    this._appService
      .getDepartmentById(this.deptId)
      .subscribe((department: IDepartment) => {
        this.editForm.setValue({
          deptName: department.deptName,
          streamType: department.streamType,
          hodName: department.hodName
        });
      });
  }

  updateDepartment(department: IDepartment): void {
    this._appService
      .updateDepartmentInfo(this.deptId, department)
      .subscribe(res => {
        if (!res) {
          this._snackBar.open("Unable to update!", "OK", {
            duration: 3000
          });
        }

        this._snackBar.open("Department info updated successfully.", "OK", {
          duration: 3000
        });

        this._router.navigate(["/department/list"]);
      });
  }
}
