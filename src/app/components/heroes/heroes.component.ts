import { Component, OnInit } from '@angular/core';
import {HeroresService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = [];

  constructor( private _heroesService:HeroresService,
               private _router:Router) {
    //console.log("Constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx:number) {
    this._router.navigate( ["/heroe", idx] );
  }

}
