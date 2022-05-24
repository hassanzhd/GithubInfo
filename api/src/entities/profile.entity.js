export class Profile {
  constructor(__profileData) {
    this.userName = __profileData["login"];
    this.fullName = __profileData["name"];
    this.location = __profileData["location"];
    this.avatarImageURL = __profileData["avatar_url"];
    this.profileURL = __profileData["html_url"];
    this.followers = __profileData["followers"];
    this.following = __profileData["following"];
    this.joiningDate = __profileData["created_at"];
  }
}
