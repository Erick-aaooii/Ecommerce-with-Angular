import { Injectable, signal } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
} from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth();
  private db = getFirestore();

  loginError = signal(false);
  loginErrorMessage = signal('');
  userIsLogged = signal(false);
  stayLogged = signal(false);

  constructor() {}

  login(email: string, password: string): Observable<UserCredential | null> {
    this.loginError.set(false);
    this.loginErrorMessage.set('');

    return new Observable((observer) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          this.loginError.set(false);
          this.loginErrorMessage.set('');
          observer.next(userCredential);
          observer.complete();
          this.userIsLogged.set(true);
          setTimeout(() => this.userIsLogged.set(false), 5000);
        })
        .catch((err) => {
          let msg = 'Erro desconhecido.';
          switch (err.code) {
            case 'auth/invalid-email':
              msg = 'O e-mail informado é inválido.';
              break;
            case 'auth/invalid-credential':
              msg = 'Usuário não encontrado.';
              break;
            case 'auth/wrong-password':
              msg = 'Senha incorreta.';
              break;
            case 'auth/too-many-requests':
              msg = 'Muitas tentativas. Tente novamente mais tarde.';
              break;
            case 'auth/network-request-failed':
              msg = 'Sem conexão com a internet.';
              break;
          }

          this.loginError.set(true);
          this.loginErrorMessage.set(msg);
          observer.error(err);
          observer.complete();
          setTimeout(() => this.loginError.set(false), 5000);
        });
    });
  }

  registerAndSaveUser(userData: User, password: string): Observable<UserCredential> {
    return new Observable((observer) => {
      createUserWithEmailAndPassword(this.auth, userData.email, password)
        .then(async (userCredential) => {
          const uid = userCredential.user.uid;
          const userRef = doc(this.db, 'users', uid);

          const userToSave = {
            uid,
            name: userData.name,
            email: userData.email,
            cpf: userData.cpf,
            telephone: userData.telephone,
            orders: [],
          };

          await setDoc(userRef, userToSave);

          observer.next(userCredential);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
          observer.complete();
        });
    });
  }

  logout(): Observable<void> {
    this.stayLogged.set(false);
    return from(this.auth.signOut());
  }

  get IsAuthenticade(): boolean {
    return this.auth.currentUser !== null;
  }
}
