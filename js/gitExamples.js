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

var gitCommitMain = gitCommitExample.branch("main");
gitCommitMain.commit({commitDotText: 'C1'}).commit({commitDotText: 'C2'}).commit({commitDotText: 'C3'});

/*
 * Simple branch example
 */

var gitBranchExample = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'horizontal',
  elementId: 'gitBranchExample',
  author: 'Block Norris <conga@example.org>'
});

var gitBranchMain = gitBranchExample.branch("main");
gitBranchMain.commit({commitDotText: 'C1'});

var gitBranchIco = gitBranchMain.branch('much-ico');
gitBranchIco.commit({commitDotText: 'C2'});
gitBranchMain.commit({commitDotText: 'C3'});
gitBranchIco.commit({commitDotText: 'C4'});

var gitBranchFixes = gitBranchMain.branch('so-fixes');
gitBranchMain.commit({
  commitDotText: 'C5',
  tag: 'main',
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

var gitHeadMain = gitHeadExample.branch("main");
gitHeadMain.commit({commitDotText: 'C1'});

var gitHeadIco = gitHeadMain.branch('much-ico');
gitHeadIco.commit({commitDotText: 'C2'});
gitHeadMain.commit({commitDotText: 'C3'});
gitHeadIco.commit({commitDotText: 'C4'});

var gitHeadFixes = gitHeadMain.branch('so-fixes');
gitHeadMain.commit({commitDotText: 'C5'});
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

var gitDetachedHeadMain = gitDetachedHeadExample.branch("main");
gitDetachedHeadMain.commit({commitDotText: 'C1'});

var gitDetachedHeadIco = gitDetachedHeadMain.branch('much-ico');
gitDetachedHeadIco.commit({
  commitDotText: 'C2',
  tagColor: '#FFFFFF',
  tag: 'HEAD'
});
gitDetachedHeadMain.commit({commitDotText: 'C3'});
gitDetachedHeadIco.commit({commitDotText: 'C4'});

var gitDetachedHeadFixes = gitDetachedHeadMain.branch('so-fixes');
gitDetachedHeadMain.commit({commitDotText: 'C5'});
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

var gitTagMain = gitTagExample.branch("main");
gitTagMain.commit({commitDotText: 'C1'});

var gitTagIco = gitTagMain.branch('much-ico');
gitTagIco.commit({commitDotText: 'C2'});
gitTagMain.commit({
  commitDotText: 'C3',
  tag: 'v1.0'
});
gitTagIco.commit({commitDotText: 'C4'});

var gitTagFixes = gitTagMain.branch('so-fixes');
gitTagMain.commit({commitDotText: 'C5'});
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

var gitSoloMain1 = gitSoloExample1.branch("main");
gitSoloMain1
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
    tag: 'main',
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

var gitSoloMain2 = gitSoloExample2.branch("main");
gitSoloMain2
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

var gitSoloMain3 = gitSoloExample3.branch("main");
gitSoloMain3
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

var gitSoloMain4 = gitSoloExample4.branch("main");
gitSoloMain4
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

var gitSoloBranch4 = gitSoloMain4.branch('pineapple');
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

var gitSoloMain5 = gitSoloExample5.branch("main");
gitSoloMain5
  .commit({
    message: 'Add moar code',
    sha1: '03b29cf'
  }).commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitSoloBranch5 = gitSoloMain5.branch('pineapple');
gitSoloBranch5.commit({
  message: 'Add pineapple',
  sha1: '231525e'
});

gitSoloMain5.commit({
  message: 'Fix tests!',
  sha1: '733138e',
  tag: 'main',
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

var gitSoloMain6 = gitSoloExample6.branch("main");
gitSoloMain6
  .commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitSoloBranch6 = gitSoloMain6.branch('pineapple');
gitSoloBranch6.commit({
  message: 'Add pineapple',
  sha1: '231525e'
});

gitSoloMain6.commit({
  message: 'Fix tests!',
  sha1: '733138e'
});

gitSoloBranch6.merge(gitSoloMain6, {
  message: 'Merge branch \'pineapple\'',
  sha1: '972a3fa',
  tag: 'main',
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

var gitTeamMain1 = gitTeamExample1.branch("main");
gitTeamMain1.commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  });

var gitTeamBranch1 = gitTeamMain1.branch('pineapple');
gitTeamBranch1.commit({
  message: 'Add pineapple',
  sha1: '231525e',
  tag: 'pineapple',
  displayTagBox: false
});

gitTeamMain1
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

var gitTeamMain2 = gitTeamExample2.branch("main");
gitTeamMain2.commit({
    message: 'Nick made me add tests!',
    sha1: 'fa54742'
  }).commit({
    message: 'Fix tests!',
    sha1: '733138e'
  }).commit({
    message: 'Add memes',
    sha1: '84a0d6a'
  });

var gitTeamBranch2 = gitTeamMain2.branch('pineapple');
gitTeamBranch2.commit({
  message: 'Add pineapple',
  sha1: 'a96c566',
  tag: 'pineapple',
  displayTagBox: false
});
