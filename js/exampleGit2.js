var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
});

var master = gitgraph.branch("master");

gitgraph.commit().commit().commit();         // 3 commits upon HEAD
var develop = gitgraph.branch("develop");    // New branch from HEAD
var myfeature = develop.branch("myfeature"); // New branch from develop

// Well, if you need to go deeper…

var hotfix = gitgraph.branch({
  parentBranch: develop,
  name: "hotfix",
  column: 2             // which column index it should be displayed in
});

master.commit("This commit is mine"); // Add a commit on master branch

develop.commit({
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  sha1: "666",
  message: "Pimp dat commit",
  author: "Jacky <prince@dutunning.com>",
  tag: "a-super-tag",
  onClick: function(commit) {
    console.log("Oh, you clicked my commit?!", commit);
  }
});

