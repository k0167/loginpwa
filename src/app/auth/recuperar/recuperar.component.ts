import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  show: boolean=false
  state: string="success" 
  content: string="Cadastro realizado com sucesso"
  constructor() { }
  ngOnInit(): void {
  }
  onclick(){
    this.show=true
  }
}

