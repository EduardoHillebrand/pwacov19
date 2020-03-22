import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  urlToJson = {   
    "id":"seu-estado",
    "pergunta":"Qual Estado você mora?",
    "tipo":"unico",
    "calc":false,
    "filho":"sua-cidade",
    "respostas":[
        {"filter": "1",  "option": "Acre", "value": 0.0176768 },
        {"filter": "2",  "option": "Alagoas", "value": 0.015151515 },
        {"filter": "3",  "option": "Amazonas", "value": 0.017676768 },
        {"filter": "4",  "option": "Amapá", "value": 0.002525253 },
        {"filter": "5",  "option": "Bahia", "value": 0.08333333 },
        {"filter": "6",  "option": "Ceará", "value": 0.171717172 },
        {"filter": "7",  "option": "Distrito Federal", "value": 0.21969697 },
        {"filter": "8",  "option": "Espírito Santo", "value": 0.04040404 },
        {"filter": "9",  "option": "Goiás", "value": 0.037878788 },
        {"filter": "10", "option": "Maranhão", "value": 0 },
        {"filter": "11", "option": "Minas Gerais", "value": 0.095959596 },
        {"filter": "12", "option": "Mato Grosso do Sul", "value": 0.03030303 },
        {"filter": "13", "option": "Mato Grosso", "value": 0.002525253 },
        {"filter": "14", "option": "Pará", "value": 0.005050505 },
        {"filter": "15", "option": "Paraíba", "value": 0.002525253 },
        {"filter": "16", "option": "Pernambuco", "value": 0.078282828 },
        {"filter": "17", "option": "Piauí", "value": 0.01010101 },
        {"filter": "18", "option": "Paraná", "value": 0.090909091 },
        {"filter": "19", "option": "Rio de Janeiro", "value": 0.275252525 },
        {"filter": "20", "option": "Rio Grande do Norte", "value": 0.002525253 },
        {"filter": "21", "option": "Rondônia", "value": 0.002525253 },
        {"filter": "22", "option": "Roraima", "value": 0 },
        {"filter": "23", "option": "Rio Grande do Sul", "value": 0.141414141 },
        {"filter": "24", "option": "Santa Catarina", "value": 0.070707071 },
        {"filter": "25", "option": "Sergipe", "value": 0.017676768 },
        {"filter": "26", "option": "São Paulo", "value": 1 },
        {"filter": "27", "option": "Tocantins", "value": 0.002525253 }
    ]
};

  constructor() { }

  ngOnInit() {
  }

}
