import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: []
})
export class SearchNameComponent implements OnInit {

  pets: Pet[]= []; 
  search: string= '';

  constructor(
    private _petService: PetService
  ) { }

  ngOnInit(): void {
    this.searchByName(this.search);
  }

  searchByName(search: string){
    if(this.search=='')return;
    this._petService.getByName(search).subscribe((data: Pet[])=>{
      this.pets= data;
    });
  }

}
