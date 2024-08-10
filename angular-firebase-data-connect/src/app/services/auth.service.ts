import { inject, Injectable } from '@angular/core';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { auth } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  appUser$ = new BehaviorSubject<User | null>(auth.currentUser);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  async login() {
    // Store the return URL in localstorage, to be used once the user logs in successfully
    const returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;

    localStorage.setItem('returnUrl', returnUrl);

    return await signInWithPopup(auth, new GoogleAuthProvider()).then(
      (credential) => this.appUser$.next(credential.user)
    );
  }

  async logout() {
    await signOut(auth).then(() => {
      this.router.navigate(['/']);
    });
  }
}
