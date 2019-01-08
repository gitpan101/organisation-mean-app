import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { IDepartment } from "../models/department.model";
import { AppService } from "../app-service.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  deptList: IDepartment[];
  displayedColumns: String[] = ["deptName", "streamType", "hodName", "actions"];

  constructor(private _appService: AppService, private _router: Router) {}

  ngOnInit() {
    this.fetchDepartments();
  }

  fetchDepartments(): void {
    this._appService.getDepartments().subscribe(
      (depts: IDepartment[]) => {
        this.deptList = depts;
      },
      err => console.log(err)
    );
  }

  getDetails(id): void {
    this._router.navigate([`/department/details/${id}`]);
  }

  editDepartment(id): void {
    this._router.navigate([`/department/edit/${id}`]);
  }

  deleteDepartment(id): void {}
}
