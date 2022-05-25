const got = require("got");

class GithubApi {
  fetchRepositoryData(repoName, callback) {
    const githubUrl = `https://api.github.com/repos/${repoName}`;

    got(githubUrl)
      .then((response) => JSON.parse(response.body))
      .then(callback);
  }
}

// module.exports = GithubApi;

// const GithubApi = require("./githubApi");

const api = new GithubApi();

api.fetchRepositoryData("sinatra/sinatra", (repositoryData) => {
  console.log(repositoryData);
});
