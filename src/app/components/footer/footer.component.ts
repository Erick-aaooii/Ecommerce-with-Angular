import { Component } from '@angular/core';
import { Config } from '../../db/ConfigOPtions';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [ RouterLink ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  config = Config
}
