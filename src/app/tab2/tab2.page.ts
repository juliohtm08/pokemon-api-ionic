import { FavoritesService } from './../modules/pokemon/service/pokemon/favorites/favorites.service';
import { Component, OnInit } from '@angular/core';
import { IPokemonDatas } from '../models/interfaces/pokemon.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  pokemonDatas: IPokemonDatas[] = [];

  constructor(private favoritesService: FavoritesService) {}
  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe((list) => {
      this.pokemonDatas = list;

      this.pokemonDatas.forEach((pokemon) => {
        pokemon.stats.forEach((stat) => {
          console.log(`${pokemon.name} - ${stat.stat.name}: ${stat.base_stat}`);
        });
      });
    });
  }
}
