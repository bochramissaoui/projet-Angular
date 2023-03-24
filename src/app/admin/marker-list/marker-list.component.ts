import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { HttpErrorResponse } from '@angular/common/http';
import { MarkerService } from 'src/app/services/marker.service';
import { Marker } from 'src/app/models/marker';
@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: ['./marker-list.component.css']
})
export class MarkerListComponent implements OnInit {
  public markers!: Marker[];
  public marker!: Marker;
  constructor(private route: Router,private markerService: MarkerService) { }
  ngOnInit() : void{
    this.getMarkers();
  }

   getMarkers() {
    this.markerService.getMarkers().subscribe( data => {
      this.markers = data;
      console.log(this.markers)
    });
  }
  deleteMarker(id: number){
    this.markerService.deletemarker(id).subscribe( data => {
      console.log(data);
      this.getMarkers();
    })
  }
  createMarker(){
    this.route.navigate(['/admin/markerAdd']);

  }
 update(id:number){
   this.route.navigate(['/admin/markerUpdate' , id]);
 }
  reservationList(id : number) {
    this.route.navigate(['/admin/reservation-list' , id]);

  }
}



