import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import firebase from 'firebase/compat/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth } from 'firebase/auth';
import { getApp } from 'firebase/app';

firebase.initializeApp(environment.firebaseConfig);
export const auth = getAuth(getApp());

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
  ],
};
