import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken() {
    return environment.githubAccessToken;
  }
}
