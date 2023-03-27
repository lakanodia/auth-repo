import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRepositories } from '../interfaces/repositories';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  private apiUrl = ' https://api.github.com';

  getUserRepositories(username: string): Observable<IRepositories[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    });

    return this.http.get<IRepositories[]>(url, { headers }).pipe(
      map((data: IRepositories[]) => {
        return data.map((repo) => {
          return {
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            html_url: repo.html_url,
            description: repo.description,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            language: repo.language,
            forks_count: repo.forks_count,
            stargazers_count: repo.stargazers_count,
            watchers_count: repo.watchers_count,
            owner: {
              login: repo.owner.login,
              html_url: repo.owner.html_url,
            },
          } as IRepositories;
        });
      })
    );
  }
}
