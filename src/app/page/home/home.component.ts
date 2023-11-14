import { Component, OnInit } from '@angular/core';
import * as data from './data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCategory: { name: string, url: string, quantity: number }[] = [];

  ngOnInit(): void {
    this.listCategory = data?.catergory;
    console.log(this.listCategory);

  }

}
