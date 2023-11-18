import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import * as data from './data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  slider: any;
  items: any;
  dots: any;
  active: any;
  constructor(
    private elRef: ElementRef
  ) { }
  ngAfterViewInit(): void {
    this.slider = this.elRef.nativeElement.querySelector('.slider .list');
    this.items = this.elRef.nativeElement.querySelectorAll('.slider .list .item');
    this.dots = this.elRef.nativeElement.querySelectorAll('.slider .dots li');
    this.active = 0;
  }

  listCategory: { name: string, url: string, quantity: number }[] = [];
  listCarousel: string[] = [];

  ngOnInit(): void {
    this.listCategory = data?.catergory;
    this.listCarousel = data?.carousel;
  }

  private _reloadSlider() {
    this.slider.style.left = -this.items[this.active].offsetLeft + 'px';
    let last_active_dot: any = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    this.dots[this.active].classList.add('active');
  }

  public onClick(key: number) {
    this.active = key;
    this._reloadSlider();
  }



}
