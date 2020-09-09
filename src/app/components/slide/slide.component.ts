import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slidesv = [
    {img: "/assets/images/vertical/julia-joppien-VcNd2JX-y0s-unsplash.jpg"},
    {img: "/assets/images/vertical/nong-vang-kdVGvy2dunA-unsplash.jpg"},
    {img: "/assets/images/vertical/30daysreplay-pr-marketing-9rZuPJmTMZs-unsplash.jpg"}
  ];

  slidesh = [
    {img: "/assets/images/horizontal/anthony-cantin-ig-lw0Dtz34-unsplash.jpg"},
    {img: "/assets/images/horizontal/diego-jimenez-A-NVHPka9Rk-unsplash.jpg"},
    {img: "/assets/images/horizontal/simon-berger-twukN12EN7c-unsplash.jpg"}
  ];
  
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
