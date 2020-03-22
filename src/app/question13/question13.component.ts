import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question13',
  templateUrl: './question13.component.html',
  styleUrls: ['./question13.component.css']
})
export class Question13Component implements OnInit {

  result: any;
  urlToJson = {
    "id":"profissional-saude",
    "pergunta":" É profissional da área da saúde?",
    "tipo":"unico",
    "calc":false,
    "respostas": [
      {"option": "Não" , "value": 0 },
      {"option": "Sim" , "value": 1 }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

  selectedItem(){
    console.log(this.result);
  }

}
