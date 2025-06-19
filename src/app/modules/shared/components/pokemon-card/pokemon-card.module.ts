import { PokemonCardComponent } from './../../../pokemon/components/pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
