import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getPopularRepositories(language: string): Observable<any> {
    const query = `q=language:${language}&sort=stars&order=desc`;
    const url = `${this.baseUrl}/search/repositories?${query}`;
    return this.http.get<any>(url);
  }

  getPullRequests(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/pulls`;
    return this.http.get<any>(url);
  }
}
