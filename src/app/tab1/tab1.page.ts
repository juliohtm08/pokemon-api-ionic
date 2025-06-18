import { Subject, takeUntil } from 'rxjs';
import { IPokemonDatas } from '../models/interfaces/pokemon.interface';
import { PokeAPIService } from './../modules/pokemon/service/poke-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: [],
  standalone: false,
})
export class Tab1Page implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  initialPokemonName = 'ditto';
  pokemonDatas!: IPokemonDatas;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.getPokemonDatas(this.initialPokemonName);
  }

  // busca o pokemon na API
  getPokemonDatas(pokemonName: string) {
    this.pokeAPIService
      .getPokemonDatas(pokemonName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.pokemonDatas = response);
          //console.log(this.pokemonDatas);
        },
        error: (err) => console.log(err),
      });
  }

  onSubmit(): void {
    this.getPokemonDatas(this.initialPokemonName);
    this.initialPokemonName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
