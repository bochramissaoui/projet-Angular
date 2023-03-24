import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MarkerService } from './services/marker.service';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MarkerListComponent } from './admin/marker-list/marker-list.component';
import { MarkerAddComponent} from "./admin/marker-add/marker-add.component";
import { ReserationListComponent} from "./admin/reseration-list/reseration-list.component";
import { MarkerUpdateComponent } from './admin/marker-update/marker-update.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin
])


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AdminComponent ,
    MarkerListComponent,
    MarkerAddComponent,
    ReserationListComponent,
    MarkerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
