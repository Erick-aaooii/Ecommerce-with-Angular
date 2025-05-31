import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Config } from '../../../../db/ConfigOPtions';

@Component({
  selector: 'contactsInformations',
  imports: [],
  templateUrl: './contactsInformations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsInformationsComponent { 
  config = Config
 }
