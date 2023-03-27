import { Component, OnInit } from '@angular/core';
import { IRepositories } from 'src/app/interfaces/repositories';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {

  }
}
