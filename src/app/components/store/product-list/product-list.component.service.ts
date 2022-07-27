import { Injectable  } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Funko } from "./model/funko";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FunkoService{
    apiUrl = "https://docs.google.com/spreadsheets/d/15aSFbnueiiMAdp2szKqvLtMvpIpjGddcPkhSGS44BqU/edit?usp=sharing";
    htttOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }

        constructor(private httpClient:HttpClient) {}

        getFunko(): Observable<Funko[]>{
            return this.httpClient.get<Funko[]>(this.apiUrl)
        }

}