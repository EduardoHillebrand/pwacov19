import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  result: any;
  urlToJson = {
    "pergunta":"Qual sua idade?",
    "tipo":"unico",
    "calc":true,
    "respostas":[
        {"option" : "até 9"  , "value": 0		},
        {"option" : "10-19"  , "value": 0.002	},
        {"option" : "20-29"  , "value": 0.002	},
        {"option" : "30-39"  , "value": 0.002	},
        {"option" : "40-49"  , "value": 0.004	},
        {"option" : "50-59"  , "value": 0.013	},
        {"option" : "60-69"  , "value": 0.036	},
        {"option" : "70-79"  , "value": 0.08	},
        {"option" : "80+"    , "value": 0.148	}
    ]
  };
  

  constructor(public http: HttpClient) { }

  ngOnInit() {

    console.log(this.urlToJson); 
  }

}
