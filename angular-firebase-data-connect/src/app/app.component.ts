import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './services/auth.service';
import { auth } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        this.authService.appUser$.next(user);

        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) {
          return;
        }
        localStorage.removeItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
      } else {
        // User is signed out
        this.authService.appUser$.next(null);
      }
    });
  }
}
