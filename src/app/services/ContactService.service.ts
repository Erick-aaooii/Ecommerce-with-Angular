import { Injectable } from '@angular/core';
import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private collectionRef = collection(db, 'contacts');

  constructor() { }
  async adicionarContato(contact: Contact) {
    return await addDoc(this.collectionRef, contact);
  }
}