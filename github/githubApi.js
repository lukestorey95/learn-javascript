class GithubApi {
  fetchRepositoryData(url, callback) {
    githubUrl = `https://api.github.com/repos/${url}`;
    got(githubUrl).then(callback);
  }
}
