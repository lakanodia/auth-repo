import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories/repositories.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { RepoListComponent } from './repo-list/repo-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RepositoriesComponent, RepoListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
  ],
  exports: [RepositoriesComponent],
})
export class GithubDashboardModule {}
