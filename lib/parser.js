'use strict';

const headerPattern = /^(\w+)(?:\(([\w .,-\/\$\*]+)\))?: (.*)$/;
const referenceActions = [
  'close',
  'closes',
  'closed',
  'fix',
  'fixes',
  'fixed',
  'resolve',
  'resolves',
  'resolved'
];
const actionsPattern = new RegExp('(' + referenceActions.join('|') + ')(?:\\s+)', 'i');
const referencesPattern = /(?:(?: *)(#|gh)?(\d+)[, ]?)/ig;
const revertPattern = /This reverts commit (\w+)\./;
const notesPattern = /^(BREAKING CHANGE)(?::)*[\\s]*(.*)/i;

function parse(header, rest) {
  const matched = header.match(headerPattern);
  const commit = {
    body: '',
    footer: '',
    notes: [],
    references: []
  };

  if (matched === null) {
    return null;
  }

  commit.type = matched[1];

  if (matched.length === 4) {
    commit.scope = matched[2];
  }

  commit.subject = matched.pop();

  const lines = rest.split('\n');
  const reverts = [];

  lines.forEach((line) => {
    line.replace(revertPattern, (m, commit) => reverts.push(commit));
  });

  let isBody = true;
  let isNote = false;
  let currentNote = {
    title: '',
    text: ''
  };

  const tryToPushNote = () => {
    if (currentNote.title && currentNote.text) {
      currentNote.text = currentNote.text.replace(/(\n)*$/, '').replace(/^(\n)*/, '');
      commit.notes.push({ title: currentNote.title, text: currentNote.text });

      currentNote.title = '';
      currentNote.text = '';
    }
  };

  if (lines.length) {
    let line = lines.shift();

    while (typeof line !== 'undefined') {
      const notesMatch = line.match(notesPattern);

      if (notesMatch) {
        isBody = false;
        isNote = true;

        tryToPushNote();
        commit.footer += '\n' + line;

        currentNote.title = notesMatch[1];
        currentNote.text = notesMatch[2];
      } else {
        const res = line.match(actionsPattern);
        const action = res ? res[0].trim().toLowerCase() : '';

        if (action) {
          const references = [];

          line.replace(referencesPattern, (m, prefix, issue) => {
            references.push({ action, prefix, issue });
          });

          commit.references = commit.references.concat(references);

          if (references.length) {
            isBody = false;
          }
        }

        if (commit.body !== '' && line === '') {
          isBody = false;
        }

        if (isBody) {
          commit.body += line + '\n';
        } else {
          commit.footer += line + '\n';
        }

        if (isNote) {
          if (!(action && commit.references && commit.references.length)) {
            currentNote.text += line + '\n';
          }
        }
      }

      line = lines.shift();
    }

    tryToPushNote();
  }

  commit.reverts = reverts;

  return commit;
}

module.exports = parse;
