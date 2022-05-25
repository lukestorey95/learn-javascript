const Github = require("./github");

describe("Github", () => {
  const mockedAPI = {
    fetchRepositoryData: (repoName, callback) => {
      callback({
        name: "sinatra/sinatra",
        description: "Some fake description",
      });
    },
  };

  const github = new Github(mockedAPI);

  it("gets the repo data fetched by the API class", () => {
    github.fetch("sinatra/sinatra");

    expect(github.getRepoData()).toEqual({
      name: "sinatra/sinatra",
      description: "Some fake description",
    });
  });
});
