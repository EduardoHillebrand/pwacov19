import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css']
})
export class Question7Component implements OnInit {
  urlToJson = {
    "id":"utilizou-transporte",
    "pergunta":"Você utilizou transportes públicos nos últimos 15 dias?",
    "tipo":"unico",
    "calc":false,
    "respostas":[
        {"option": "Sim" , "value": 1 },
        {"option": "Não" , "value": 0 }
    ]
}

  constructor() { }

  ngOnInit() {
  }

}
