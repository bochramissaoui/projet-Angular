import { Component, OnInit } from '@angular/core';

import { MarkerService } from 'src/app/services/marker.service';
import { Router } from '@angular/router';
import { Marker } from 'src/app/models/marker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marker-add',
  templateUrl: './marker-add.component.html',
  styleUrls: ['./marker-add.component.css']
})
export class MarkerAddComponent implements OnInit {
  marker: Marker = new Marker();
  constructor(private MarkerService: MarkerService,
    private router: Router) { }
  ngOnInit(): void {
  }
  saveMarker(){
    this.MarkerService.addMarker(this.marker).subscribe( data =>{
      console.log(data);
      this.goToMarkerList();
    },
    error => console.log(error));
  }

  goToMarkerList(){
    this.router.navigate(['/admin']);
  }

  onSubmit(form: NgForm){
    console.log(this.marker);
    this.saveMarker();
  }
}


