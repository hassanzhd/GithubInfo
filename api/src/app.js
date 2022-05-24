import express from "express";
import fetch from "node-fetch";
import { GitHubUserService } from "./services/GithubUserService";

const PORT = 5000;
const app = express();

app.get("/:username", async (request, response) => {
  const { username } = request.params;

  try {
    const service = GitHubUserService.getInstance();
    const data = await service.getUserProfile(username);
    response.json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
