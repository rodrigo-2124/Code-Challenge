import { Component, OnInit } from '@angular/core';

import { Pet } from '../../interfaces/pet.interface';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {

  pets: Pet[]= []; 

  constructor(
    public _petService: PetService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this._petService.getAll().subscribe((data: Pet[])=>{
      this.pets= data;
    });
  }

  deletePet(id: number){
    this._petService.delete(id).subscribe(res => {
      this.getAll();
    });
  }

 
}
