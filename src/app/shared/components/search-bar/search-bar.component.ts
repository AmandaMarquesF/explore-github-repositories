import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GitHubService } from 'src/app/services/github/github.service';
import { SearchStateService } from 'src/app/services/search/search-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  language: string = 'Java';
  repositories: any[] = [];
  selectedRepo: { owner: string; name: string } | null = null;
  isLoading: boolean = false;

  constructor(
    private gitHubService: GitHubService,
    private searchStateService: SearchStateService
  ) {}


  ngOnInit(): void {
   
    this.language = this.searchStateService.getSearchQuery();
    this.repositories = this.searchStateService.getSearchResults();
    if (this.language) {
      this.search();
    }
  }

  search(): void {
    if (this.language.trim()) {
      this.isLoading = true; // Inicia o carregamento
      this.gitHubService.getPopularRepositories(this.language).subscribe(
        (data) => {
          console.log("repositories", data);
          this.repositories = data.items;
          this.searchStateService.setSearchQuery(this.language);
          this.searchStateService.setSearchResults(this.repositories);
          this.isLoading = false; 
        },
        (error) => {
          console.error('Error fetching repositories:', error);
          this.isLoading = false; 
        }
      );
    }
  }
}