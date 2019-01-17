import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AppMaterialsModule } from "./app-materials/app-materials.module";
import { ListComponent } from "./departments/list.component";
import { DetailsComponent } from "./departments/details.component";
import { EditComponent } from "./departments/edit.component";
import { CreateComponent } from "./departments/create.component";
import { CreateComponent as empCreate } from "./employees/create.component";
import { ListComponent as empList } from "./employees/list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent,
    empCreate,
    empList,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
