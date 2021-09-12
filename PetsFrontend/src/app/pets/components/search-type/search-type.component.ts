import { Component, OnInit } from '@angular/core';

import { TypeService } from 'src/app/types/services/type.service';

import { Type } from 'src/app/types/interfaces/type.interface';
import { Pet } from '../../interfaces/pet.interface';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-search-type',
  templateUrl: './search-type.component.html',
  styleUrls: []
})
export class SearchTypeComponent implements OnInit {

  pets: Pet[]= [];
  types: Type[]= [];
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
  
  searchByType(id_type: number){
    if(this.id_type==0)return;
    this._petService.getByType(id_type).subscribe((data: Pet[])=>{
      this.pets= data;
    });
  }

}
