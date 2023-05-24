import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  @Input()
  img:string = ""

  @Input()
  name:string = ""

constructor(){

}

  ngOnInit(): void {

  }

}
