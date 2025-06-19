import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemonDatas } from 'src/app/models/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritePokemon: IPokemonDatas[] = [];
  private favoritesSubject = new BehaviorSubject<IPokemonDatas[]>([]);

  favorites$ = this.favoritesSubject.asObservable();

  getFavorite(): IPokemonDatas[] {
    return this.favoritePokemon;
  }

  toggleFavorite(pokemon: IPokemonDatas): void {
    const index = this.favoritePokemon.findIndex((p) => p.id === pokemon.id);
    if (index >= 0) {
      this.favoritePokemon.splice(index, 1);
    } else {
      this.favoritePokemon.push(pokemon);
    }
    this.favoritesSubject.next([...this.favoritePokemon]);
  }

  isFavorite(id: number): boolean {
    return this.favoritePokemon.some((p) => p.id === id);
  }
}
