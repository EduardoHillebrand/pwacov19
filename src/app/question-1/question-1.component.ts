import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-question1',
  templateUrl: './question-1.component.html',
  styleUrls: ['./question-1.component.css']
})
export class Question1 implements OnInit {
  result: any;
  urlToJson = {
    "pergunta": "Qual sua idade?",
    "tipo": "unico",
    "calc": true,
    "respostas": [
      { "option": "até 9", "value": 0 },
      { "option": "10-39", "value": 0.002 },
      { "option": "40-49", "value": 0.004 },
      { "option": "50-59", "value": 0.013 },
      { "option": "60-69", "value": 0.036 },
      { "option": "70-79", "value": 0.08 },
      { "option": "80+", "value": 0.148 }
    ]
  };

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }
  
  selectedItem(){
    console.log(this.result);
  }

}
