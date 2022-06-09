import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IExchange} from "../models";
import {urls} from "../../constants";


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient) {
  }



  getAllSymbols(): Observable<IExchange> {
    return this.httpClient.get<IExchange>(urls.symbols)
  }

  getCurrency(country1: string):Observable<IExchange>{
    let url = 'https://api.exchangerate.host/latest?base='+country1
    return this.httpClient.get<IExchange>(url)

  }
}
