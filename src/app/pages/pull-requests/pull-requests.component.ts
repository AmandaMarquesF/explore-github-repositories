import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.scss'],
})
export class PullRequestsComponent implements OnInit {
  pullRequests: any[] = [];
  owner: string = '';
  repo: string = '';
  page: number = 1;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private gitHubService: GitHubService
  ) {}

  ngOnInit(): void {
    this.owner = this.route.snapshot.paramMap.get('owner')!;
    this.repo = this.route.snapshot.paramMap.get('repo')!;
    this.getPullRequests();
  }

  getPullRequests(): void {
    this.gitHubService.getPullRequests(this.owner, this.repo).subscribe(
      (data) => {
        this.pullRequests = data;
        this.isLoading = false; 
      },
      (error) => {
        console.error('Error fetching pull requests:', error);
        this.isLoading = false; 
      }
    );
  }

  getAriaLabel(pr: any): string {
    return `Pull Request titled "${pr.title}" created by ${
      pr.user.login
    } on ${new Date(pr.created_at).toLocaleDateString()}`;
  }
}
