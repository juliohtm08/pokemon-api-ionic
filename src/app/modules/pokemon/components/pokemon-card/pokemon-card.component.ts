import { Component, Input, OnInit } from '@angular/core';
import { IPokemonDatas } from 'src/app/models/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonDatasInput!: IPokemonDatas;

  ngOnInit(): void {
    console.log('DADOS RECEBIDOS DO CARD: ', this.pokemonDatasInput);
  }
}
