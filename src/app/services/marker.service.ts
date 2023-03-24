import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marker } from '../models/marker';
import { environment } from 'src/environments/environment';
import { calendrier } from '../models/calendrier';

@Injectable({ providedIn: 'root' })

export class MarkerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMarkers(): Observable<Marker[]> {
    return this.http.get<Marker[]>(`${this.apiServerUrl}/marker/all`);
  }

  public addMarker(marker: Marker): Observable<Marker> {
    return this.http.post<Marker>(`${this.apiServerUrl}/marker/add`, marker);
  }

  public updateMarker(marker: Marker , markerId: number): Observable<Marker> {
    return this.http.put<Marker>(`${this.apiServerUrl}/marker/update/${markerId}`, marker);
  }
  public getMarkerByid(markerId: number): Observable<Marker> {
    return this.http.get<Marker>(`${this.apiServerUrl}/marker/find/${markerId}`);
  }
  public deletemarker(markerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/marker/delete/${markerId}`);
  }

  public getAllreservationsBymarkerId(markerId: number): Observable<calendrier[]> {
    return this.http.get<calendrier[]>(`${this.apiServerUrl}/marker/${markerId}/reservations`);
  }
  public addReservation(markerId: number , calendrier : calendrier): Observable<calendrier> {
    return this.http.post<calendrier>(`${this.apiServerUrl}/marker/${markerId}/reservations`, calendrier);
  }
  public deleteReservation(reserId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/marker/delete/reservations/${reserId}`);
  }
}
