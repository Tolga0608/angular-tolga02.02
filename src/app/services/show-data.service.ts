import { Injectable } from '@angular/core';
import { Show } from '../model/show';

@Injectable()
export class ShowDataService {
  shows: Show[ ] = [ ];
  
  saveShow(show: Show) {

    this.shows.push(show);
    
    }
  constructor() { 
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Stranger Things'));
  }
}