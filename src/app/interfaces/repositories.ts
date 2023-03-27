export interface IRepositories {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  owner: {
    login: string;
    html_url: string;
  };
}
