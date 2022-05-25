import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { GitHubUserService } from "./services/GithubUserService";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/user", async (request, response) => {
  const { q: username } = request.query;

  try {
    const service = GitHubUserService.getInstance();
    const profileData = await service.getUserProfile(username);
    const repoData = await service.getUserRepos(username);
    response.render("user", { profileData, repoData });
  } catch (error) {
    response.render("error", { message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
