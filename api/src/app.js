import express from "express";
import { GitHubUserService } from "./services/GithubUserService";

const PORT = 5000;
const app = express();

app.get("/user/:username", async (request, response) => {
  const { username } = request.params;

  try {
    const service = GitHubUserService.getInstance();
    const profileData = await service.getUserProfile(username);
    const repoData = await service.getUserRepos(username);
    response.json({ profileData, repoData });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
