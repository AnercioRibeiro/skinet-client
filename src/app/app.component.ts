import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skinet';
  products: any[] = [];

  constructor(private http: HttpClient){ }


    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.http.get('http://localhost:5125/api/product')
        .subscribe({
          next: (response: any) => this.products = response.data,
          error: error => console.log(error),
          complete: () =>{
            console.log('request completed');
            console.log('extra statement');
          }
        })
      
    }
 
}
