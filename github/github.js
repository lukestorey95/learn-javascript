class Github {
  constructor(api) {
    this.api = api;
    this.repoData = {};
  }

  fetch(repoName) {
    this.api.fetchRepositoryData(repoName, (response) => {
      this.repoData = response;
    });
  }

  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;
