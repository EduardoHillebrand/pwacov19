import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
  urlToJson = {	
    "id":"seu-sexo",
    "pergunta":"Sexo: ",
    "tipo":"unico",
    "calc":true,
    "respostas":[
        {"option": "Masculino"   , "value": 1.0 },
        {"option": "Feminino"    , "value": 0.6071429 },
        {"option": "Não declarar", "value": 1.0 }
    ]
};

  constructor() { }

  ngOnInit() {
  }

}
