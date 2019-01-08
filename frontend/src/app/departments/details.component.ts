import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IDepartment } from "../models/department.model";
import { AppService } from "../app-service.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
