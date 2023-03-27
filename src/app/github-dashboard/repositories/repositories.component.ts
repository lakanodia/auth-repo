import { Component, OnInit } from '@angular/core';
import { IRepositories } from 'src/app/interfaces/repositories';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  username = 'lakanodia'; // Replace with the desired username
  repositories: IRepositories[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getUserRepositories(this.username)
      .subscribe((data: IRepositories[]) => {
        this.repositories = data;
      });
  }
}
