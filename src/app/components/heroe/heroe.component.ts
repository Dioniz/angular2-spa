import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroresService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  private heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroresService) {

      this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe( params['id'] );
        console.log(this.heroe);

      });
  }

}
