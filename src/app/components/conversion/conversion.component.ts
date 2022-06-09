import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  base = 'UAH';
  cont2 = 'USD'
  result:string = '1'
  arr = []
  form1:FormGroup
  form2:FormGroup
  constructor(private service:ExchangeService) { }
  ngOnInit(): void {
    this.form1 = new FormGroup({
      'count1':new FormControl('')
    })

    this.form2 = new FormGroup({
      'count2':new FormControl('')
    })

  }
  changeBase(value: string) {
      this.base = value

  }
  toCountry(value: string) {
    this.cont2 = value

  }
  convert() {
   this.service.getCurrency(this.base).subscribe(value => {
     console.log( this.form1.value.count1)
   })

  }
}
