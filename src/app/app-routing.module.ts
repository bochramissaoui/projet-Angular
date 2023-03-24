import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MarkerListComponent } from './admin/marker-list/marker-list.component';
import { MapComponent } from './map/map.component';
import {MarkerAddComponent} from "./admin/marker-add/marker-add.component";
import {ReserationListComponent} from "./admin/reseration-list/reseration-list.component";
import {MarkerUpdateComponent} from "./admin/marker-update/marker-update.component";

const routes: Routes = [
{path : 'map' , component : MapComponent},
{path : 'admin' , component : MarkerListComponent},
  {path : 'admin/markerAdd' , component : MarkerAddComponent},
  {path : 'admin/reservation-list/:id' , component : ReserationListComponent},
  {path : 'admin/markerUpdate/:id' , component : MarkerUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
