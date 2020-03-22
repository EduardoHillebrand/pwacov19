import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.component.html',
  styleUrls: ['./question14.component.css']
})
export class Question14Component implements OnInit {

  result: any;
  urlToJson = {
    "id":"sua-profissao",
    "pergunta":"Sua profissão requer contato com muitas pessoas diariamente?",
    "tipo":"unico",
    "calc": false,
    "respostas":[
      {"option": "Não" , "value": 0 },
       {"option": "Sim" , "value": 1 }
    ]
  };
  constructor() { }

  ngOnInit() {

    console.log(this.urlToJson);
  }

  selectedItem(){
    console.log(this.result);
  }
}
