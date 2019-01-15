import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MatTableDataSource } from "@angular/material";

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
    "department"
  ];

  constructor(private _appService: AppService, private _router: Router) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this._appService.getEmployees().subscribe(
      (employees: IEmployee[]) => {
        if (!employees) {
          return console.log("Unable to get employees!");
        }

        this.empList = new MatTableDataSource<IEmployee>(employees);
      },
      err => console.log(err)
    );
  }
}
