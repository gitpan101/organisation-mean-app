import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./departments/list.component";
import { DetailsComponent } from "./departments/details.component";

const routes: Routes = [
  { path: "department/list", component: ListComponent },
  { path: "department/details/:id", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
