## ng-changelog

Changelog generator based on the [Angular git commit message conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).
Similar to [conventional-changelog](https://github.com/ajoslin/conventional-changelog).

**WORK IN PROGRESS** - no tests yet, might contain errors

### usage

Checkout the Angular repo (`git checkout https://github.com/angular/angular`) in another folder and run the following command:

```bash
→ REPO=../angular/.git node examples/basic.js
```

That will output the changelog in markdown format.

### inner workings

..of the lib + example:

Invalid semver tags && commit messages that don't adhere to the git message convention are ignored when generating the changelog.
If a commit is reverted for the same version by another commit, then their info won't be included in the changelog output.
If a commit isn't a feature, bug fix, performace improvement, reverts another commit and doesn't have breaking changes then its info won't be included in the changelog output.

___more to add here___

### faq

Q: Why reinvent the wheel since `conventional-changelog` already does this?
A: I wanted to learn more about its internals since the documentation is a bit scarce and I also wanted a more flexible option in terms of output (so one could use their own template).

### license

[MIT](http://alessioalex.mit-license.org/)
