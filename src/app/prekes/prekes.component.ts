import { Component, OnInit } from '@angular/core';
import { Preke } from './preke.model'

@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.css']
})
export class PrekesComponent implements OnInit {
  pavadinimas: string = '';
  kiekis: string = '';
  prekes: Preke[] = [];
  buttonDisabled = true;
  id: number = 0;
  // [new Preke("Mandarinai", "1 kg"), new Preke("Pienas", "1 litras")];

  constructor() { }

  ngOnInit(): void {
  }

  addPreke() {
    if(this.pavadinimas != '' && this.kiekis  != '')
    this.prekes.push( new Preke(++this.id, this.pavadinimas, this.kiekis));
    this.pavadinimas = '';
    this.kiekis = '';
  }

  trinti(i) {
    this.prekes.splice(i, 1);
  }

  disableButton(){
    if(this.pavadinimas == '' || this.kiekis  == ''){
      return true;
    }
    else {return false}
  }


}
