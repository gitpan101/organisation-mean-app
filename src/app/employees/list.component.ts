import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MatTableDataSource, MatSnackBar } from "@angular/material";

import { AppService } from "../app-service.service";
import { IEmployee } from "../models/employee.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  empList: MatTableDataSource<IEmployee>;
  displayedColumns: String[] = [
    "name",
    "email",
    "contactNum",
    "salary",
    "department",
    "actions"
  ];

  constructor(
    private _appService: AppService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this._appService.getEmployees().subscribe(
      (employees: IEmployee[]) => {
        if (!employees) {
          return this._snackBar.open("Unable to get Employee List!", "OK", {
            duration: 3000
          });
        }

        this.empList = new MatTableDataSource<IEmployee>(employees);
      },
      err => console.log(err)
    );
  }

  deleteEmployee(id: String): void {
    this._appService.deleteEmployee(id).subscribe(employee => {
      if (!employee) {
        return this._snackBar.open("Unable to delete Employee!", "OK", {
          duration: 3000
        });
      }

      this._snackBar.open("Employee deleted successfully.", "OK", {
        duration: 3000
      });

      this.fetchEmployees();
    });
  }
}
