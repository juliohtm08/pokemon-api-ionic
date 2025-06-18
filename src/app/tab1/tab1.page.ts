import { IPokemonDatas } from '../models/interfaces/pokemon.interface';
import { PokeAPIService } from './../modules/pokemon/service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: [],
  standalone: false,
})
export class Tab1Page implements OnInit {
  initialPokemonName = 'ditto';
  pokemonDatas!: IPokemonDatas;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.getPokemonDatas(this.initialPokemonName);
  }

  getPokemonDatas(pokemonName: string) {
    this.pokeAPIService.getPokemonDatas(pokemonName).subscribe({
      next: (response) => {
        response && (this.pokemonDatas = response);
        console.log(this.pokemonDatas);
      },
      error: (err) => console.log(err),
    });
  }
}
