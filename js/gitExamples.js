var safeCongaTemplateConfig = {
  colors: ["#FFFFFF", "#E0B0FF", "#98FB98", "#87CEFA"], // branches colors, 1 per column
  branch: {
    lineWidth: 10,
    spacingX: 50,
    labelRotation: 0
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 14
    },
    message: {
      displayAuthor: false,
      displayBranch: true,
      displayHash: true,
      font: "normal 14pt Arial"
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
gitBranchMaster.commit({commitDotText: 'C5'}).tag('master');
gitBranchFixes.commit({commitDotText: 'C6'}).tag('so-fixes');

var gitBranchWow = gitBranchIco.branch('wow');
gitBranchWow.commit({commitDotText: 'C7'});

gitBranchIco.commit({commitDotText: 'C8'}).tag('much-ico');
gitBranchWow.commit({commitDotText: 'C9'}).tag('wow');

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

gitHeadIco.commit({commitDotText: 'C8'}).tag('HEAD');
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
gitDetachedHeadIco.commit({commitDotText: 'C2'}).tag('HEAD');
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
gitTagMaster.commit({commitDotText: 'C3'}).tag('v1.0');
gitTagIco.commit({commitDotText: 'C4'});

var gitTagFixes = gitTagMaster.branch('so-fixes');
gitTagMaster.commit({commitDotText: 'C5'});
gitTagFixes.commit({commitDotText: 'C6'});

var gitTagWow = gitTagIco.branch('wow');
gitTagWow.commit({commitDotText: 'C7'});

gitTagIco.commit({commitDotText: 'C8'});
gitTagWow.commit({commitDotText: 'C9'});

/*
 * Full example - step 1
 */

var gitFullExample1 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitFullExample1',
  author: 'Block Norris <conga@example.org>'
});

var gitFullMaster1 = gitFullExample1.branch("master");
gitFullMaster1.commit('Initial commit').commit('Add code').commit('Add moar code').commit('Nick made me add tests!');

/*
 * Full example - step 2
 */

var gitFullExample2 = new GitGraph({
  template: safeCongaTemplate,
  orientation: 'verticle',
  elementId: 'gitFullExample2',
  author: 'Block Norris <conga@example.org>'
});

var gitFullMaster2 = gitFullExample2.branch("master");
gitFullMaster2.commit('Initial commit').commit('Add code').commit('Add moar code').commit('Nick made me add tests!');

var gitFullFeature2 = gitFullMaster2.branch('new-thing');
gitFullFeature2.commit({
  messageDisplay: false
}).tag('new-thing');
gitFullFeature2.checkout();

