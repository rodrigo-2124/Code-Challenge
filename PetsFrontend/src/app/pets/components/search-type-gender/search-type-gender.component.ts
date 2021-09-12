import { Component, OnInit } from '@angular/core';

import { TypeService } from 'src/app/types/services/type.service';

import { Pet } from '../../interfaces/pet.interface';
import { Type } from '../../../types/interfaces/type.interface';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-search-type-gender',
  templateUrl: './search-type-gender.component.html',
  styleUrls: []
})
export class SearchTypeGenderComponent implements OnInit {

  pets: Pet[]= [];
  types: Type[]= [];

  gender: string= 'M';
  id_type: number= 1;

  constructor(
    public _typeService: TypeService,
    public _petService: PetService
  ) { }

  ngOnInit(): void {
    this.getAllTypes();
  }

  getAllTypes(){
    this._typeService.getAll().subscribe((data: Type[])=>{
      this.types= data;
    });
  }

  searchByTypeAndGender(id_type: number, gender: string){
    this._petService.getByTypeAndGender(id_type, gender).subscribe((data: Pet[])=>{
      this.pets= data;
    });
  }
}
