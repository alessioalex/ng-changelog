'use strict';

const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const dateFormat = require('dateformat');
const changelogStream = require('../');
const tmpl = fs.readFileSync(__dirname + '/template.html', 'utf8');

const repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));

const typeMap = {
  feat: 'Features',
  fix: 'Bug Fixes',
  refactor: 'Code Refactoring',
  perf: 'Performance Improvements',
  revert: 'Reverts',
  docs: 'Documentation',
  style: 'Styles',
  refactor: 'Code Refactoring',
  test: 'Tests',
  chore: 'Chores'
};

function formatCommitText(scope, subject) {
  let text = '* ';

  if (scope) {
    text += '**' + scope + ':** ';
  }

  text += subject;

  return text;
}

function formatReferencesText(references) {
  if (!references.length) { return ''; }

  return ', ' + references.map((r) => r.action + ' #' + r.issue).join(', ');
}

function shortenHash(hash) {
  return hash.slice(0, 7);
}

changelogStream(repoPath, {
  currentVersion: '2.0.0-beta.8',
  // fromVersion: '2.0.0-beta.7'
}).on('data', (d) => {
  // latest version is still untagged, thus doesn't have a commit associated with it
  const versionDate = !d.associatedCommit ? new Date() : new Date(d.associatedCommit.committer.timestamp * 1000);

  let tag = {
    name: d.tag,
    commits: {},
    date: dateFormat(versionDate, 'yyyy-mm-dd', true)
  };

  let reverted = [];
  let revertMap = new Map();

  Object.keys(d.commits).forEach((type) => {
    // building up the reverted commits info
    d.commits[type].forEach((commit) => {
      // ignore other types unless they have breaking changes (notes)
      if (['feat', 'fix', 'perf', 'revert'].indexOf(type) === -1 && !commit.notes.length) {
        commit.discard = true;
      }

      reverted = reverted.concat(commit.reverts || []);
      // mapping what commit has been reverted => by whom
      commit.reverts.forEach((r) => revertMap.set(r, commit.hash));
    });

    // Angular changelog style sorting
    tag.commits[type] = d.commits[type].sort((a, b) => {
      let scope1 = (a.scope && a.scope.toLowerCase()) || ('zzzz' + a.subject);
      let scope2 = (b.scope && b.scope.toLowerCase()) || ('zzzz' + b.subject);

      if (scope1 > scope2) {
        return 1;
      }

      if (scope1 < scope2) {
        return -1;
      }

      if (scope1 === scope2) {
        if (a.subject > b.subject) {
          return 1;
        }

        if (a.subject < b.subject) {
          return -1;
        }

        return 0;
      }
    });
  });

  const commitTypesToShow = Object.keys(typeMap).filter((t) => {
    return d.commits[t] && d.commits[t].length;
  });

  const hideCommitType = (type) => {
    const spliceFrom = commitTypesToShow.indexOf(type);

    if (spliceFrom !== -1) {
      commitTypesToShow.splice(spliceFrom, 1);
    }
  };

  const reverts = [];
  let breaking = [];

  Object.keys(d.commits).forEach((type) => {
    if (type === 'revert') { return; }

    let shouldShowType = false;

    d.commits[type].forEach((commit) => {
      // check if current commit has been reverted
      // if so find out by which commit and store it for later usage
      reverted.forEach((x) => {
        // if x is a short hash for commit.hash
        if (!commit.hash.indexOf(x)) {
          commit.isReverted = true;
          reverts.push(revertMap.get(x));
        }
      });

      // commit will be displayed
      if (!commit.isReverted && !commit.discard) {
        shouldShowType = true;
        breaking = breaking.concat(commit.notes.map(n => {
          return { scope: commit.scope, text: n.text }
        }));
      }
    });

    if (!shouldShowType) { hideCommitType(type); }
  });

  if (d.commits.revert) {
    let shouldShowType = false;

    d.commits.revert.forEach((commit) => {
      if (reverts.indexOf(commit.hash) !== -1) {
        // has reverted something in the current version
        // used in the template to not display this commit
        commit.hasReverted = true;
      } else if (!commit.discard) {
        shouldShowType = true;
        breaking = breaking.concat(commit.notes.map(n => {
          return { scope: commit.scope, text: n.text }
        }));
      }
    });

    if (!shouldShowType) { hideCommitType('revert'); }
  }

  if (!commitTypesToShow.length) { return; }

  const output = ejs.render(tmpl, {
    data: {
      typeMap: typeMap,
      commitTypes: commitTypesToShow,
      tag: tag,
      breaking: breaking
    },
    helpers: {
      formatCommitText: formatCommitText,
      formatReferencesText: formatReferencesText,
      shortenHash: shortenHash
    }
  });

  process.stdout.write(output);
});
