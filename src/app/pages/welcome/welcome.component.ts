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
  items$: Observable<Item[]> = this.getItems(); // прикрутили вызов бэка

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:4200/api/items').pipe(share()); // Прописали полный путь к апихе чтобы SSR не ругался
  }
}

interface Item {
  name: string;
  age: number;
  address: string;
}
