import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cards-navegation',
  templateUrl: './cards-navegation.component.html',
  styleUrls: ['./cards-navegation.component.css']
})
export class CardsNavegationComponent implements OnInit{

  @Input()
  imagem:string = ""
  @Input()
  title:string = ""
  @Input()
  navegar:string = ""

 constructor () {

 }
  ngOnInit(): void {

  }

}
