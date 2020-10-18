import { Component, ɵCompiler_compileModuleAsync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private productos = [{
    "id": 1,
    "nombre": "celular",
    "precio": 1200,
    "cantidad": 12,
    "imagen": "https://cnet1.cbsistatic.com/img/1UXY2CVF5f3PMxZ5IeOiVI75fC8=/1092x614/2016/12/05/02e9f9c2-bf8f-4a35-8c58-d9a50d0f1e15/celulares-2015-2016.jpg"
  },
  {
    "id": 2,
    "nombre": "fundas",
    "precio": 120,
    "cantidad": 102,
    "imagen": "https://cnet1.cbsistatic.com/img/1UXY2CVF5f3PMxZ5IeOiVI75fC8=/1092x614/2016/12/05/02e9f9c2-bf8f-4a35-8c58-d9a50d0f1e15/celulares-2015-2016.jpg"
    },
  {
    "id": 3,
    "nombre": "Tablet",
    "precio": 3200,
    "cantidad": 2,
    "imagen": "https://cnet1.cbsistatic.com/img/1UXY2CVF5f3PMxZ5IeOiVI75fC8=/1092x614/2016/12/05/02e9f9c2-bf8f-4a35-8c58-d9a50d0f1e15/celulares-2015-2016.jpg" 
    },
  {
      "id": 4,
    "nombre": "TV",
    "precio": 33200,
    "cantidad": 0,
    "imagen": "https://cnet1.cbsistatic.com/img/1UXY2CVF5f3PMxZ5IeOiVI75fC8=/1092x614/2016/12/05/02e9f9c2-bf8f-4a35-8c58-d9a50d0f1e15/celulares-2015-2016.jpg" 
  }
]

  constructor() {}

}
