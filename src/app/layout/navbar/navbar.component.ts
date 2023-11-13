import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listDemos: string[] = [];
  listPage: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listDemos = ['Modern', 'Standard', 'Minimal', 'Vintage', 'Classic', 'Classic', 'Trendy', 'Elegant', 'Refined', 'Fashion'];
    this.listPage = ['User', 'FAQ', 'Privacy Policy', 'Term & Condition', 'Contact Us', 'Checkout', 'Collection', 'Category', 'Order', '404']
  }

}
