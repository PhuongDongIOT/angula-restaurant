import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.sass']
})
export class FoodComponent implements OnInit {
  
  public arrs = [1, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit(): void {
  }

}
