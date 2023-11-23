import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import * as data from './data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // slider collection 
  slider: any;
  items: any;
  dots: any;
  active: any;
  // slider flash sales
  currentImage: any;
  listFlashSales: any[] = [];

  listCategory: { name: string, url: string, quantity: number }[] = [];
  listCarousel: string[] = [];
  listTopProduct: any;
  listCollection: string[] = [];
  listFeature: any[] = [];

  constructor(
    private elRef: ElementRef
  ) { }
  ngAfterViewInit(): void {
    this._initSliderCollection();
    this._initSliderFlashSales();
  }



  ngOnInit(): void {
    this.listCategory = data?.catergory;
    this.listCarousel = data?.carousel;
    this.listCollection = data?.collection?.url;
    this.currentImage = data?.product?.topProduct[0].image;
    this.listFeature = data?.feature;
    this._initListTopProduct();
  }
  private _initSliderCollection() {
    this.slider = this.elRef.nativeElement.querySelector('.slider .list');
    this.items = this.elRef.nativeElement.querySelectorAll('.slider .list .item');
    this.dots = this.elRef.nativeElement.querySelectorAll('.slider .dots li');
    this.active = 0;
  }

  private _initSliderFlashSales() {

  }
  private _initListTopProduct() {
    this.listTopProduct = data?.product?.topProduct;
    this.listTopProduct.map((itm: any) => {
      return itm.description = this._handleLongString(itm.description);
    })
  }

  private _handleLongString(txt: string): string {
    if (txt.length - 1 > 37) {
      return txt.slice(-txt.length, 37) + '...';
    }
    return txt;
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
