import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css']
})
export class RezervuarasComponent implements OnInit {
  talpa : number = 0;
  greitis : number = 0;
  laikas : number = 0;
  rezultatas : number = 0;
  rezmasyvas : number[] = [8, 9, 15, 20, 30];

  skaiciuoti(){
    this.rezultatas = this.laikas*this.greitis/this.talpa*100;
    this.rezmasyvas.push(this.rezultatas);
  }

  getColor() {
    if (this.rezultatas > 60) return 'blue'
    else return 'purple'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
