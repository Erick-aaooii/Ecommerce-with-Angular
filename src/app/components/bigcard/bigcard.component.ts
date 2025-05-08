import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  imports: [],
  templateUrl: './bigcard.component.html'
})
export class BigcardComponent {
  @Input() img: String = '';
  @Input() descricao: string = '';
  @Input() titulo: string = '';
  @Input() link: string = '';
}
