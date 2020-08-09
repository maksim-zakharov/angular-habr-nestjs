import { Body, Controller, Get, Post } from '@nestjs/common';

class Item {
  name: string;
  age: number;
  address: string;
}

@Controller('items')
export class ItemsController {

  private items: Item[] = [
    {name: 'Вася', age: 24, address: 'Москва'},
    {name: 'Петя', age: 23, address: 'Лондон'},
    {name: 'Миша', age: 21, address: 'Париж'},
    {name: 'Вова', age: 23, address: 'Сидней'}
  ];

  @Get()
  getAll(): Item[] {
    return this.items;
  }

  @Post()
  create(@Body() newItem: Item): void {
    this.items.push(newItem);
  }
}
