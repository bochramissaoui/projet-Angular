import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import * as L from 'leaflet';
import { calendrier } from '../models/calendrier';
import { Marker } from '../models/marker';
import { MarkerService } from '../services/marker.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  domaines = [
    {
      id: '1',
      name: 'Hotels'
    },
    {
      id: '2',
      name: 'Coffee'
    },
   
  ]
  marker!: Marker
  calendrier!: calendrier
  public markers!: Marker[];
  reservations!: calendrier[]
  id!: number
  name!: string;
  ville!: string;
  lat!: number;
  lng!: number;
  M: any
  display!: number
  map: any;
  Events: any = []
  calendarOptions!: CalendarOptions
  calendarVisible = true
  reservation: calendrier = new calendrier()
  selectedOption!: string;
  icon: any;
  constructor(private route: ActivatedRoute, private markerService: MarkerService) { }
  ngOnInit() {
    this.markerService.getMarkers().subscribe(
      (response: Marker[]) => {
        this.markers = response;
        console.log(this.markers)
        this.getAllMarkers()
      }
    )
    this.loadMap();
  }

  private loadMap(): void {
    this.map = L.map('map').setView([34.098, 10.503], 6)
    var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    })
    let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
    var streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })
    var baseMaps = {
      "OpenStreetMap": osm,
      "Mapbox Streets": streets,
      "Dark mode": dark
    };


  }

  showmarkers(id: any, name: any, lat: any, lng: any, icon: any) {

    L.marker([lat, lng], { icon }).bindTooltip(name,{ direction: 'top' }).addTo(this.map).on('click', (e:any) => {
      document.getElementById('aa')?.click(),
        this.display = id
      this.id = id
      this.markerService.getAllreservationsBymarkerId(id).subscribe(
        (response: calendrier[]) => {
          this.reservations = response;
          console.log(id)
          for (let reservation of this.reservations) {
            for (var i = 0; i < (this.reservations.length / 2); i++) {
              this.Events = this.reservations
              console.log(this.Events[i])
              this.calendarOptions = {
                initialView: 'dayGridMonth',
                events: this.Events,
              };
            }
          }
          setTimeout(() => {
            this.calendarOptions.footerToolbar = false;
          }, 200)

        })
    })
  }

  getAllMarkers() {
    const icon = L.icon({
      iconUrl: 'assets/lili.png',
      iconSize: [45, 43],
    });
    for (let marker of this.markers) {
      this.showmarkers(marker.id, marker.name, marker.lat, marker.lng, icon)
    }
  }

  savecalendar() {
    this.markerService.getMarkerByid(this.id).subscribe(data => {
      this.marker = data;
    }, error => console.log(error));
    console.log(this.id)
    this.markerService.addReservation(this.id, this.reservation).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  onSubmit() {
    console.log(this.reservation);
    this.savecalendar();
  }

  rechercher() {
    this.getAllMarkers()
    console.log(this.selectedOption, this.markers)
    const icon = L.icon({
      iconUrl: 'assets/lala.png',
      iconSize: [37.5, 40],
    });

    for (let marker of this.markers) {
      if (marker.domaine == this.selectedOption) {
        this.showmarkers(marker.id, marker.name, marker.lat, marker.lng, icon)
      }
      if(this.selectedOption=='All'){
        this.getAllMarkers()
      }
    }
  }

}
