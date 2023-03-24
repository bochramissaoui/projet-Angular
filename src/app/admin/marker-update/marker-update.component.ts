import { Component, OnInit } from '@angular/core';
import {Marker} from "../../models/marker";
import {MarkerService} from "../../services/marker.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-marker-update',
  templateUrl: './marker-update.component.html',
  styleUrls: ['./marker-update.component.css']
})
export class MarkerUpdateComponent implements OnInit {
  id!: number;
  marker: Marker = new Marker();
  constructor(private markerService: MarkerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.markerService.getMarkerByid(this.id).subscribe(data => {
      this.marker = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.markerService.updateMarker(this.marker, this.id).subscribe( data =>{
        this.goToMarkerList();
      }
      , error => console.log(error));
  }

  goToMarkerList(){
    this.router.navigate(['/admin']);
  }

}
