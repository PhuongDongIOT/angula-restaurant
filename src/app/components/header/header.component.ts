import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public Url: string = 'http://localhost:1337'
  public Company: string;
  public Logo: string;

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(){
    this.http.get('http://localhost:1337/header')
      .subscribe(
        (response: any) => {
          this.Company = response.Name;
          this.Logo = this.Url + response.Logo.url;
          console.log(response)
        }
      )
  }

}
