var safeCongaTemplateConfig = {
  colors: ['#FFFFFF', '#E0B0FF', '#98FB98', '#87CEFA'], // branches colors, 1 per column
  branch: {
    lineWidth: 14,
    spacingX: 100,
    labelRotation: 0
  },
  commit: {
    spacingY: -120,
    dot: {
      size: 18
    },
    message: {
      displayAuthor: false,
      displayBranch: false,
      displayHash: true,
      font: "normal 24pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false
  }
};
var safeCongaTemplate = new GitGraph.Template(safeCongaTemplateConfig);

/*
 * Simple commits example
 */

var gitCommitExample = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'horizontal',
  elementId: 'gitCommitExample',
  author: 'Block Norris <conga@example.org>'
});

var gitCommitMaster = gitCommitExample.branch("master");
gitCommitMaster.commit({commitDotText: 'C1'}).commit({commitDotText: 'C2'}).commit({commitDotText: 'C3'});

/*
 * Simple branch example
 */

var gitBranchExample = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'horizontal',
  elementId: 'gitBranchExample',
  author: 'Block Norris <conga@example.org>'
});

var gitBranchMaster = gitBranchExample.branch("master");
gitBranchMaster.commit({commitDotText: 'C1'});

var gitBranchIco = gitBranchMaster.branch('much-ico');
gitBranchIco.commit({commitDotText: 'C2'});
gitBranchMaster.commit({commitDotText: 'C3'});
gitBranchIco.commit({commitDotText: 'C4'});

var gitBranchFixes = gitBranchMaster.branch('so-fixes');
gitBranchMaster.commit({
  commitDotText: 'C5',
  tag: 'master',
  displayTagBox: false
});
gitBranchFixes.commit({
  commitDotText: 'C6',
  tag: 'so-fixes',
  displayTagBox: false
});

var gitBranchWow = gitBranchIco.branch('wow');
gitBranchWow.commit({commitDotText: 'C7'});

gitBranchIco.commit({
  commitDotText: 'C8',
  tag: 'much-ico',
  displayTagBox: false
});
gitBranchWow.commit({
  commitDotText: 'C9',
  tag: 'wow',
  displayTagBox: false
});

/*
 * Simple HEAD example
 */

var gitHeadExample = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'horizontal',
  elementId: 'gitHeadExample',
  author: 'Block Norris <conga@example.org>'
});

var gitHeadMaster = gitHeadExample.branch("master");
gitHeadMaster.commit({commitDotText: 'C1'});

var gitHeadIco = gitHeadMaster.branch('much-ico');
gitHeadIco.commit({commitDotText: 'C2'});
gitHeadMaster.commit({commitDotText: 'C3'});
gitHeadIco.commit({commitDotText: 'C4'});

var gitHeadFixes = gitHeadMaster.branch('so-fixes');
gitHeadMaster.commit({commitDotText: 'C5'});
gitHeadFixes.commit({commitDotText: 'C6'});

var gitHeadWow = gitHeadIco.branch('wow');
gitHeadWow.commit({commitDotText: 'C7'});

gitHeadIco.commit({
  commitDotText: 'C8',
  tag: 'HEAD',
  tagColor: '#FFFFFF',
  displayTagBox: false
});
gitHeadWow.commit({commitDotText: 'C9'});


/*
 * Simple detached HEAD example
 */

var gitDetachedHeadExample = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'horizontal',
  elementId: 'gitDetatchedHeadExample',
  author: 'Block Norris <conga@example.org>'
});

var gitDetachedHeadMaster = gitDetachedHeadExample.branch("master");
gitDetachedHeadMaster.commit({commitDotText: 'C1'});

var gitDetachedHeadIco = gitDetachedHeadMaster.branch('much-ico');
gitDetachedHeadIco.commit({
  commitDotText: 'C2',
  tagColor: '#FFFFFF',
  tag: 'HEAD'
});
gitDetachedHeadMaster.commit({commitDotText: 'C3'});
gitDetachedHeadIco.commit({commitDotText: 'C4'});

var gitDetachedHeadFixes = gitDetachedHeadMaster.branch('so-fixes');
gitDetachedHeadMaster.commit({commitDotText: 'C5'});
gitDetachedHeadFixes.commit({commitDotText: 'C6'});

var gitDetachedHeadWow = gitDetachedHeadIco.branch('wow');
gitDetachedHeadWow.commit({commitDotText: 'C7'});

gitDetachedHeadIco.commit({commitDotText: 'C8'});
gitDetachedHeadWow.commit({commitDotText: 'C9'});

/*
 * Simple tag example
 */

var gitTagExample = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'horizontal',
  elementId: 'gitTagExample',
  author: 'Block Norris <conga@example.org>'
});

var gitTagMaster = gitTagExample.branch("master");
gitTagMaster.commit({commitDotText: 'C1'});

var gitTagIco = gitTagMaster.branch('much-ico');
gitTagIco.commit({commitDotText: 'C2'});
gitTagMaster.commit({
  commitDotText: 'C3',
  tag: 'v1.0'
});
gitTagIco.commit({commitDotText: 'C4'});

var gitTagFixes = gitTagMaster.branch('so-fixes');
gitTagMaster.commit({commitDotText: 'C5'});
gitTagFixes.commit({commitDotText: 'C6'});

var gitTagWow = gitTagIco.branch('wow');
gitTagWow.commit({commitDotText: 'C7'});

gitTagIco.commit({commitDotText: 'C8'});
gitTagWow.commit({commitDotText: 'C9'});

/*
 * Solo example - step 1
 */

var gitSoloExample1 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitSoloExample1',
  author: 'Block Norris <conga@example.org>'
});

var gitSoloMaster1 = gitSoloExample1.branch("master");
gitSoloMaster1
  .commit({
    message: 'Initial commit',
    sha1: 'ac0d89c'
  })
  .commit({
    message: 'Add code',
    sha1: '0e2bac0'
  }).commit({
    message: 'Add moar code',
    sha1: '03b29cf'
  }).commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742',
    tag: 'master',
    displayTagBox: false
  });

/*
 * Solo example - step 2
 */

var gitSoloExample2 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitSoloExample2',
  author: 'Block Norris <conga@example.org>'
});

var gitSoloMaster2 = gitSoloExample2.branch("master");
gitSoloMaster2
  .commit({
    message: 'Initial commit',
    sha1: 'ac0d89c'
  })
  .commit({
    message: 'Add code',
    sha1: '0e2bac0'
  }).commit({
    message: 'Add moar code',
    sha1: '03b29cf'
  }).commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742',
    tag: 'pineapple',
    tagColor: '#E0B0FF',
    displayTagBox: false
  });

/*
 * Solo example - step 3
 */

var gitSoloExample3 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitSoloExample3',
  author: 'Block Norris <conga@example.org>'
});

var gitSoloMaster3 = gitSoloExample3.branch("master");
gitSoloMaster3
  .commit({
    message: 'Initial commit',
    sha1: 'ac0d89c'
  })
  .commit({
    message: 'Add code',
    sha1: '0e2bac0'
  }).commit({
    message: 'Add moar code',
    sha1: '03b29cf'
  }).commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742',
    tag: 'pineapple',
    tagColor: '#E0B0FF',
    displayTagBox: false
  });

/*
 * Solo example - step 4
 */

var gitSoloExample4 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitSoloExample4',
  author: 'Block Norris <conga@example.org>'
});

var gitSoloMaster4 = gitSoloExample4.branch("master");
gitSoloMaster4
  .commit({
    message: 'Add code',
    sha1: '0e2bac0'
  }).commit({
    message: 'Add moar code',
    sha1: '03b29cf'
  }).commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitSoloBranch4 = gitSoloMaster4.branch('pineapple');
gitSoloBranch4.commit({
  message: 'Add pineapple',
  sha1: '231525e',
  tag: 'pineapple',
  displayTagBox: false
});

/*
 * Solo example - step 5
 */

var gitSoloExample5 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitSoloExample5',
  author: 'Block Norris <conga@example.org>'
});

var gitSoloMaster5 = gitSoloExample5.branch("master");
gitSoloMaster5
  .commit({
    message: 'Add moar code',
    sha1: '03b29cf'
  }).commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitSoloBranch5 = gitSoloMaster5.branch('pineapple');
gitSoloBranch5.commit({
  message: 'Add pineapple',
  sha1: '231525e'
});

gitSoloMaster5.commit({
  message: 'Fix tests!',
  sha1: '733138e',
  tag: 'master',
  displayTagBox: false
});

/*
 * Solo example - step 6
 */

var gitSoloExample6 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitSoloExample6',
  author: 'Block Norris <conga@example.org>'
});

var gitSoloMaster6 = gitSoloExample6.branch("master");
gitSoloMaster6
  .commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitSoloBranch6 = gitSoloMaster6.branch('pineapple');
gitSoloBranch6.commit({
  message: 'Add pineapple',
  sha1: '231525e'
});

gitSoloMaster6.commit({
  message: 'Fix tests!',
  sha1: '733138e'
});

gitSoloBranch6.merge(gitSoloMaster6, {
  message: 'Merge branch \'pineapple\'',
  sha1: '972a3fa',
  tag: 'master',
  displayTagBox: false
});

/*
 * Team example - step 1
 */

var gitTeamExample1 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitTeamExample1',
  author: 'Block Norris <conga@example.org>'
});

var gitTeamMaster1 = gitTeamExample1.branch("master");
gitTeamMaster1.commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitTeamBranch1 = gitTeamMaster1.branch('pineapple');
gitTeamBranch1.commit({
  message: 'Add pineapple',
  sha1: '231525e',
  tag: 'pineapple',
  displayTagBox: false
});

gitTeamMaster1
  .commit({
    message: 'Fix tests!',
    sha1: '733138e'
  }).commit({
    message: 'Add memes',
    sha1: '84a0d6a'
  });

/*
 * Team example - step 2
 */

var gitTeamExample2 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitTeamExample2',
  author: 'Block Norris <conga@example.org>'
});

var gitTeamMaster2 = gitTeamExample2.branch("master");
gitTeamMaster2.commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  }).commit({
    message: 'Fix tests!',
    sha1: '733138e'
  }).commit({
    message: 'Add memes',
    sha1: '84a0d6a'
  });

var gitTeamBranch2 = gitTeamMaster2.branch('pineapple');
gitTeamBranch2.commit({
  message: 'Add pineapple',
  sha1: 'a96c566',
  tag: 'pineapple',
  displayTagBox: false
});
