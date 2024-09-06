import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SearchBarComponent, 
    RepositoryListComponent, 
    LoaderComponent],
  imports: [
    CommonModule,
    FormsModule, 
    NgxPaginationModule],
  exports: [
    SearchBarComponent,
    RepositoryListComponent,
    NgxPaginationModule,
    LoaderComponent,
  ],
})
export class SharedModule {}
