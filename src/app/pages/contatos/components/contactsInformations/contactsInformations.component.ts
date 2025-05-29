import { Component } from '@angular/core';
import { Config } from '../../../../db/ConfigOPtions';

@Component({
  selector: 'contactsInformations',
  imports: [],
  templateUrl: './contactsInformations.component.html'
})
export class ContactsInformationsComponent { 
  config = Config
 }
