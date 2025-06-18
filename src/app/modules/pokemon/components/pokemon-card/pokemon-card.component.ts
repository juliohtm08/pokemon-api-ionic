import { Component, Input, OnInit } from '@angular/core';
import { IPokemonDatas } from 'src/app/models/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  standalone: false,
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonDatasInput!: IPokemonDatas;

  cardStyles = {
    transform: '',
    boxShadow:
      '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)',
  };

  imgStyles = {
    transform: '',
  };

  ngOnInit(): void {
    console.log('DADOS RECEBIDOS DO CARD: ', this.pokemonDatasInput);
  }

  onCardMouseEnter() {
    this.cardStyles = {
      transform: 'translateY(-5px)',
      boxShadow:
        '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    };
  }

  onCardMouseLeave() {
    this.cardStyles = {
      transform: '',
      boxShadow:
        '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)',
    };
  }

  onImgMouseEnter() {
    this.imgStyles = {
      transform: 'scale(1.05)',
    };
  }

  onImgMouseLeave() {
    this.imgStyles = {
      transform: '',
    };
  }
}
