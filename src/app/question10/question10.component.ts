import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.css']
})
export class Question10Component implements OnInit {

  urlToJson={
    "id":"dias-transporte",
    "pergunta":"Quantos dias você utilizou transporte público?",
    "tipo":"unico",
    "calc":false,
    "respostas":[
        {"option": "0" , "value": 0 },
        {"option": "1 a 3" , "value": 2 },
        {"option": "4 a 7" , "value": 6 },
        {"option": "8 ou mais" , "value": 10 }
    ]
};
  constructor() { }

  ngOnInit() {
  }

}
