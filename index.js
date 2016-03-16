'use strict';

const through2 = require('through2');
const getTags = require('./lib/get-tags');
const streamChangelog = require('./lib/stream-changelog');

function generateChangelogStream(repoPath, opts) {
  const outStream = through2.obj();

  getTags(repoPath, (err, tagList) => {
    if (err) {
      outStream.emit('error', err);
      return;
    }

    streamChangelog(outStream, repoPath, tagList, opts);
  });

  return outStream;
}

module.exports = generateChangelogStream;
