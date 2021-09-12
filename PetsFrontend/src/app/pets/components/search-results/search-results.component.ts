import { Component, Input } from '@angular/core';

import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: []
})
export class SearchResultsComponent  {

  @Input() searchedPets: Pet[]= [];
  
}
