import { inject, Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { User } from '../models/bd.models';
import {getFirestore, setDoc, doc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth)

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, {displayName})
  }

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(),path), data);
  }



}
