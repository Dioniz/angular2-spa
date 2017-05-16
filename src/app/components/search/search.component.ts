import { Component, OnInit } from '@angular/core';
import {HeroresService, Heroe} from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private heroes:Heroe[] = [];
  private termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroresService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( this.termino );
      console.log(this.heroes);
    });
  }

}
