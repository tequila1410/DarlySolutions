import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  /**
   * Authorized user
   * @type {any}
   */
  currentUser: any;

  /**
   * Call when user data change
   * @type {BehaviorSubject}
   */
  currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  /**
   * @ignore
   */
  constructor(public afAuth: AngularFireAuth) { }

  /**
   * Query to Google api to login user
   * @return {Promise}
   */
  doGoogleLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  /**
   * Set current user
   * @param {any} user
   */
  setUser(user: any): void {
    this.currentUser = user;
    this.currentUserSubject.next(user);
  }

  /**
   * Get current user
   * @returns {any}
   */
  getUser(): any {
    return this.currentUser;
  }

}
