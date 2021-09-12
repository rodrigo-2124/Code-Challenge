import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeService } from 'src/app/types/services/type.service';

import { Type } from '../../../types/interfaces/type.interface';
import { PetService } from '../../services/pet.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateComponent implements OnInit {

  name: string= '';
  gender: string= 'M';
  id_type: number= 1;

  types: Type[]= [];

  constructor(
    public _typeService: TypeService,
    public _petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTypes();
  }

  getAllTypes(){
    this._typeService.getAll().subscribe((data: Type[])=>{
      this.types= data;
    });
  }

  createPet():void {
    console.log(this.name, this.gender, this.id_type);
    if(this.name=='')return;
    else{
      let data : string[]= [this.name, this.gender, this.id_type.toString()];
      this._petService.create(data).subscribe(()=>{
        this.name= '';
        this.gender= 'M';
        this.id_type= 1;
        this.router.navigate(['/index']);
      });
    }
    
  }

}
