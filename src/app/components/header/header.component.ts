import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currency:any
  constructor(private service:ExchangeService) { }

  ngOnInit(): void {
    this.service.getAllSymbols().subscribe(value => this.currency = value.rates)
  }

}
