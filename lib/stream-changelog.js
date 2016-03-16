'use strict';

const through2 = require('through2');
const gitCommits = require('git-commits');
const pump = require('pump-chain');
const parse = require('./parser');

function streamChangelog(outStream, repoPath, tagList, opts) {
  let currentTag = (opts && opts.currentVersion) || 'current';
  let fromTag = (opts && opts.fromVersion) ? opts.fromVersion : '';
  let tagCommits = {};
  let associatedCommit = {};

  let gitCommitOpts = fromTag ? { rev: fromTag + '..HEAD' } : {};
  const gitCommitStream = gitCommits(repoPath, gitCommitOpts);

  const changelogStream = through2.obj(function write(commit, enc, cb) {
    let commitData = parse(commit.title, commit.description);

    if (commitData) {
      commitData = Object.assign(commitData, commit);
    }

    if (tagList[commit.hash]) {
      const versionData = {
        tag: currentTag,
        commits: tagCommits
      };

      if (associatedCommit.hash) {
        versionData.associatedCommit = associatedCommit;
      }

      this.push(versionData);

      currentTag = tagList[commit.hash];
      tagCommits = {};
      associatedCommit = commit;
    }

    if (commitData) {
      const type = commitData.type.toLowerCase();
      delete commitData.type;

      if (!tagCommits[type]) {
        tagCommits[type] = [];
      }

      tagCommits[type].push(commitData);
    }

    cb();
  }, function end(cb) {
    const versionData = {
      tag: currentTag,
      commits: tagCommits
    };

    if (associatedCommit.hash) {
      versionData.associatedCommit = associatedCommit;
    }

    this.push(versionData);
    cb();
  });

  return pump(gitCommitStream, changelogStream, outStream);
}

module.exports = streamChangelog;
