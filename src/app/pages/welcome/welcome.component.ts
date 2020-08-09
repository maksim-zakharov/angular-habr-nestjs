import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  items$: Observable<Item[]> = of([
    {name: 'Вася', age: 24, address: 'Москва'},
    {name: 'Петя', age: 23, address: 'Лондон'},
    {name: 'Миша', age: 21, address: 'Париж'},
    {name: 'Вова', age: 23, address: 'Сидней'}
  ]);

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items').pipe(share());
  }
}

interface Item {
  name: string;
  age: number;
  address: string;
}
