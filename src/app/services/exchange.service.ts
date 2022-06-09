import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IExchange} from "../models/IExchange";
import {urls} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient:HttpClient) { }

  getAllSymbols():Observable<IExchange>{
    return this.httpClient.get<IExchange>(urls.symbols)
  }
}

