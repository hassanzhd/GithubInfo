export class Repo {
  constructor(__repoData) {
    this.name = __repoData["name"];
    this.URL = __repoData["html_url"];
    this.description = __repoData["description"];
    this.creationDate = __repoData["created_at"];
    this.stars = __repoData["stargazers_count"];
  }
}
