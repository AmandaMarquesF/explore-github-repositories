import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  @Input() repositories: any[] = [];
  page: number = 1;

  constructor(private router: Router) {}

  goToPullRequests(owner: string, repo: string): void {
    this.router.navigate([`/repos/${owner}/${repo}/pulls`]);
  }

  getAriaLabel(repo: any): string {
    return `Repository: ${repo.name}, Stars: ${repo.stargazers_count}`;
  }
  
}
