const got = require("got");

function handleReceivedResponse(response) {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

function fetchRespositoryInfo(url, callback) {
  githubUrl = `https://api.github.com/repos/${url}`;
  got(githubUrl).then(callback);
}

// fetchJson("https://jsonplaceholder.typicode.com/todos", handleReceivedResponse);

module.exports = fetchRespositoryInfo;
