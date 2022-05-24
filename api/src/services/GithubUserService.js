import fetch from "node-fetch";
import { Profile } from "../entities/profile.entity";
import { Repo } from "../entities/repo.entity";

export class GitHubUserService {
  constructor() {
    this.instance = undefined;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new GitHubUserService();
    }

    return this.instance;
  }

  async getUserProfile(__username) {
    const githubResponse = await fetch(
      `https://api.github.com/users/${__username}`,
      { "User-Agent": "hassanzhd" }
    );

    const data = await githubResponse.json();

    if (!githubResponse.ok) {
      throw new Error(data.message);
    }

    return new Profile(data);
  }

  async getUserRepos(__username) {
    const githubResponse = await fetch(
      `https://api.github.com/users/${__username}/repos`,
      { "User-Agent": "hassanzhd" }
    );

    const data = await githubResponse.json();

    if (!githubResponse.ok) {
      throw new Error(data.message);
    }

    return data.map((repo) => new Repo(repo));
  }
}
