'use strict';

const semver = require('semver');
const gitShowRef = require('git-show-ref');

function getTags(repoPath, cb) {
  const ignorePattern = /build/;
  let tagList = {};

  gitShowRef(repoPath, { tags: true })
    .on('data', function(data) {
      if (ignorePattern.test(data.name)) return;

      const tagName = data.name.match(/^tags\/(.*)$/)[1];

      if (semver.valid(tagName)) {
        tagList[data.hash] = tagName;
      }
    })
    .on('error', cb)
    .on('end', () => cb(null, tagList));
}

module.exports = getTags;
