import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { BigcardComponent } from "../../components/bigcard/bigcard.component";

@Component({
  selector: 'app-inicio',
  imports: [CarouselComponent, CardsComponent, BigcardComponent],
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
 img = "imgs/foto 1.jpg" 
 descricao = "Este look é perfeito para quem busca sofisticação com um toque de estilo. A blusa verde-clara com detalhes vazados nos ombros traz leveza e originalidade, combinando perfeitamente com a saia midi verde-escura com fenda frontal, que valoriza a silhueta de forma discreta e elegante. O cinto fino realça a cintura e adiciona um toque refinado à composição. O visual é finalizado com sandálias brancas de salto e acessórios dourados e pérolas, que acrescentam charme e sofisticação. Ideal para ocasiões especiais ou ambientes formais com um toque fashion."
 titulo = "Vestido catatau"
 link = ""
}
