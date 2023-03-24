import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { HttpErrorResponse } from '@angular/common/http';
import { Marker } from 'src/app/models/marker';
import { calendrier } from 'src/app/models/calendrier';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-reseration-list',
  templateUrl: './reseration-list.component.html',
  styleUrls: ['./reseration-list.component.css']
})
export class ReserationListComponent implements OnInit {
  reservation : calendrier = new calendrier()
  public marker!: Marker;
  public reservations!: calendrier[];
  public id!: number;
  constructor(private router: Router,private markerService: MarkerService, private route: ActivatedRoute) { }

  ngOnInit() : void{
    this.getreservations()
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.markerService.getMarkerByid(this.id).subscribe(data => {
      this.marker= data;
    }, error => console.log(error));
  }
  savecalendar(){
    console.log(this.id)
    this.markerService.addReservation(this.id , this.reservation).subscribe( data =>{
        console.log(data);
        this.getreservations()
      },
      error => console.log(error));
  }
  onSubmit(){
    console.log(this.reservation);
    this.savecalendar();
  }
   getreservations() {
    this.id = this.route.snapshot.params['id'];

    this.markerService.getMarkerByid(this.id).subscribe(data => {
      this.marker= data;
    }, error => console.log(error));
        this.markerService.getAllreservationsBymarkerId(this.id).subscribe(
          (response : calendrier[]) => {
            this.reservations = response;
            console.log(response)
      }
        )
  }

deleteReservation(resid: number){
  console.log(resid)
  this.markerService.deleteReservation(resid).subscribe( data => {
    console.log(data);
    this.getreservations()
  })
}
}
