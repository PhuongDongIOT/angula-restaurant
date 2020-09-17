import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public Company: string = 'Lorems';
  public Logo: string = '/assets/images/logo.svg';

  ngOnInit(): void {

  }

}
