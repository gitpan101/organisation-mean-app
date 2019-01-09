import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { MatTableDataSource } from "@angular/material";

import { IEmployee } from "../models/employee.model";
import { AppService } from "../app-service.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  deptId: String;
  department: String;
  empDataSource: MatTableDataSource<IEmployee>;
  displayedColumns: string[] = ["name", "email", "contactNum", "salary"];

  constructor(private _appService: AppService, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => (this.deptId = params.id));
  }

  ngOnInit() {
    this.fetchEmployeesByDept(this.deptId);
  }

  fetchEmployeesByDept(id: String): void {
    this._appService.getEmployeesByDept(id).subscribe(
      (employees: IEmployee[]) => {
        this.empDataSource = new MatTableDataSource<IEmployee>(employees);
        this.department = employees[0].department.deptName;
      },
      err => console.log(err)
    );
  }
}
