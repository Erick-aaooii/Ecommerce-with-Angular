import { Injectable, signal } from '@angular/core';
import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private collectionRef = collection(db, 'contacts');

  // Signal que indica se o contato foi enviado com sucesso
  contactIsSent = signal(false);
  contactNoSent = signal(false);

  constructor() {}

  async adicionarContato(contact: Contact) {
    try {
      await addDoc(this.collectionRef, contact);

      this.contactIsSent.set(true);

      // Após 5 segundos, volta para false
      setTimeout(() => {
        this.contactIsSent.set(false);
      }, 5000);
    } catch (error) {

      this.contactNoSent.set(true);
      setTimeout(() => {
        this.contactNoSent.set(false)
      }, 5000);
    }
  }
}