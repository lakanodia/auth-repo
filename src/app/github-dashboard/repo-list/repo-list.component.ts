import { Component, OnInit } from '@angular/core';
import { IRepositories } from 'src/app/interfaces/repositories';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent implements OnInit {
  username = 'likanodia';
  repositories: IRepositories[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getUserRepositories(this.username)
      .subscribe((data: IRepositories[]) => {
        this.repositories = data;
      });
  }

  displayedColumns: string[] = ['position', 'name', 'created_at', 'updated_at'];
}
