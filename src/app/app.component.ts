import { Component } from '@angular/core';
import {HomeComponent} from '../app/home/home.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primeiro_Projeto';
  logo: string = "../assets/imgs/logo.png"
}
