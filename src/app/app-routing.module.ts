import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateComponent } from "./departments/create.component";
import { ListComponent } from "./departments/list.component";
import { DetailsComponent } from "./departments/details.component";
import { EditComponent } from "./departments/edit.component";
import { ListComponent as empList } from "./employees/list.component";
import { CreateComponent as empCreate } from "./employees/create.component";

const routes: Routes = [
  { path: "department/create", component: CreateComponent },
  { path: "department/list", component: ListComponent },
  { path: "department/details/:id", component: DetailsComponent },
  { path: "department/edit/:id", component: EditComponent },
  { path: "employee/create", component: empCreate },
  { path: "employee/list", component: empList },
  { path: "", component: DashboardComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
