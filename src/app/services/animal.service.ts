import { Injectable } from '@angular/core';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalList: Animal[] = [
    new Animal('Cow', 2, 'Black and white'),
    new Animal('Horse', 4, 'Brown'),
    new Animal('Pig', 6, 'Pink'),
    new Animal('Rooster', 8, 'Brown and green'),
    new Animal('Chicken', 10, 'White')
  ];
  
  constructor() { }

  getAnimals() {
    return this.animalList;
  }
}
