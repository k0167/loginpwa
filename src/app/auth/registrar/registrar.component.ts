import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  show: boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.show=true
  }
}
