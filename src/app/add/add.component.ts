import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  numero1 :number=0;
  numero2 :number=0;
  resultado :number=0;
  constructor() { }

  ngOnInit() {
  }

  add(): void {
    this.resultado= this.numero1+this.numero2;
  }

}
