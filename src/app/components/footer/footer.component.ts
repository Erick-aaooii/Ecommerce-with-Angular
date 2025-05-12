import { Component } from '@angular/core';
import { Config } from '../../db/ConfigOPtions';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  config = Config
}
