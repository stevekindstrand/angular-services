import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animalList: Animal[] = [];

  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.animalList = this.service.getAnimals();
  }

}
