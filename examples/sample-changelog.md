<a name="2.0.0-beta.8"></a>
# 2.0.0-beta.8 (2016-03-16)


### Features

* **core:** Add `QueryList#forEach` (b634a25)
* **core:** Add `QueryList.forEach` to public api. (e7470d5)
* **di:** drop support for injecting types with generics in Dart (c9a3df9), closes #7262
* **forms/validators:** pattern validator (38cb526), closes #5561
* **pipes:** add ReplacePipe for string manipulation (6ef2121)
* **test:** add withProviders for per test providers (c1a0af5), closes #5128
* **transformers:** collect data needed for the template compiler (ebe531b), closes #7299

### Bug Fixes

* **angular1_router:** rename `$route` service to `$rootRouter` (a1c3be2)
* **angular1_router:** rename `router` component binding to `$router` (edad8e3)
* **angular1_router:** support templateUrl components (d4a4d81)
* **change_detection:** allow to destroy `OnPush` components inside of a host event. (ebd438f)
* **core:** support `ngFor` that has an `ngIf` as last node (1779caf), fixes #6304, closes #6878
* **differ:** clean up stale identity change refs (ab36ea0), closes #7193
* **DomRenderer:** correctly handle namespaced attributes (c6afea6)
* **Router:** Query strings are copied for HashLocationStrategy (b47f80e), closes #7298
* **transformers:** record reflection info about abstract classes (05c185a), closes #7347
* **transformers:** replace an error with a warning when cannot resolve a symbol (ee3c580)
* **transformers:** special case types some built-in types, so they can be resolved (331b9c1)
* **web_worker:** wait for bindings in kitchen sink spec (4a93f58)
* **web_workers:** make waitForElementText function more stable (f6a8d04)

### BREAKING CHANGES

* di: In Dart we used to support injecting types with generics. As this feature is hard to implement with the upcoming codegen we are dropping it.

Merge cl/115454020 in G3 with this change.
* angular1_router: The `$router` injectable service has been renamed to `$rootRouter`
* angular1_router: The recently added binding of the current router to the current component
has been renamed from `router` to `$router`.

So now the recommended set up for your bindings in your routed component
is:

```js
{
  ...
  bindings: {
    $router: &#39;&lt;&#39;
  }
}
```


<a name="2.0.0-beta.7"></a>
# 2.0.0-beta.7 (2016-02-18)


### Bug Fixes

* **angular_1_router:** Added DI string tokens (3478d5d), closes #4269, closes #7031
* **typing:** Remove re-export of the Promise built-in type. (265703b), fixes #6468


<a name="2.0.0-beta.6"></a>
# 2.0.0-beta.6 (2016-02-12)


### Features

* **angular1_router:** allow component to bind to router (0f22dce)
* **change_detection:** allow all legal programs in the dev mode (42231f5)
* **core:** improve NoAnnotationError message (197cf09), closes #4866, closes #5927
* **core:** improve stringify for dart to handle closures (e67ebb7)
* **core:** speed up view creation via code gen for view factories. (7ae23ad), closes #5993
* **core/application_ref:** Allow asyncronous app initializers. (df3074f), closes #5929, closes #6063
* **dart/transform:** DirectiveProcessor: do not process generated files (78bfdf7), closes #6517
* **dart/transform:** Generate all code into &lt;file&gt;.template.dart (8c36aa8)
* **dart/transform:** Promote missing Directive warning to error (47a3b4d), closes #6519, closes #6568
* **debug:** replace DebugElement with new Debug DOM (e1bf3d3)
* **ngFor:** add custom trackBy function support (cee2318), closes #6779
* **router:** support links with just auxiliary routes (2a2f9a9), closes #5930
* **svg:** Provide support for SVG foreignObject by adding xhtml namespace (eb688f2), closes #6192
* **test:** allow tests to specify the platform and application providers used (b0cebdb), closes #5351, closes #5585, closes #5975
* **testability:** Expose function frameworkStabilizers (69ae363), closes #5485
* **typings:** install es6-shim typings to a location users can reference. (f1f5b45)
* **upgrade:** support bindToController with binding definitions (99e6500), closes #4784
* **WebWorker:** Add Router Support for WebWorker Apps (8bea667), closes #3563

### Bug Fixes

* **angular1-router:** add missing wrapper methods (55122cd), closes #6763, closes #6861, closes #6861
* **angular1-router:** add support for using the component helper (d86be24), closes #13860, closes #6076, closes #5278
* **async:** handle synchronous initial value in async pipe (26e60d6), closes #5996
* **benchpress:** fix flake (9d28147), closes #6161
* **build:** Revert &#34;build(dart): Make Dart dev build required&#34; (8867afd)
* **build:** don&#39;t try to copy .d.ts files into the npm distro (16b5217), fixes #6921
* **build:** publish typings directory to our npm snapshot branch (19cfb4e)
* **bundle:** add angular2/platform/testing/browser to SystemJS testing bundle (ae7d2ab)
* **bundles:** testing bundle should include browser platform (4a41442), closes #6626
* **ChangeDetection:** chain expressions evaluate to the last expression (codegen) (933a911), fixes #4782, closes #5892
* **CHANGELOG:** typo (d116861), fixes #6075, closes #6078
* **circle:** pre-dependencies `npm install npm` (36a0e04), fixes #6777
* **code size:** revert previous devMode change to restore size targets (c47d85b)
* **compiler:** fix interpolation regexp (9b0e10e), closes #6056
* **compiler:** use event names for matching directives (231773e), closes #6870
* **core:** IE only supports parentNode (630d931), closes #5994
* **core:** add detail to dehydrated detector exception (e7ad03c), closes #6939
* **core:** always remove DOM listeners and stream subscriptions (0ae7775)
* **core:** mute mode printing in console in prod mode (74be3d3), closes #6873
* **Dart:** make some playground samples run with Dart Dev Compiler (3e65d14), closes #6441
* **dart/transform:** Ensure template codegen is completed sync (5f0baaa), closes #6603
* **dart/transform:** Handle edge cases in ReflectionRemover (3e9b532), closes #6749
* **ddc:** router, compiler, web worker fixes for DDC (db87bae), closes #6693
* **ddc:** type fixes necessary to bring DDC severe count to 0 (4282297)
* **ddc:** use dynamic types in reflection typedefs (c785a1e), closes #6437
* **di:** throw if a token uses more than 20 dependencies. (de77700), fixes #6690, closes #6869
* **directive:** throw if output the same event more than once (8c37b7e)
* **docs:** `rxjs/add/operators/map` -&gt; `rxjs/add/operator/map` (no &#39;s&#39;). (2a302aa)
* **docs:** fix an import in TOOLS_DART.md (3524946), closes #5923
* **DomRenderer:** correctly handle namespaced attributes (61cf499)
* **forms:** add RadioButtonValueAccessor to the list of default value accessors (8f47aa3)
* **forms:** add support for radio buttons (e725542), closes #6877
* **forms:** fix SelectControlValueAccessor not to call onChange twice (b44d36c), closes #5969
* **forms:** use strict runtimeType checks instead of instanceof (50548fb), closes #6981
* **Headers:** serializable toJSON (b55f176), fixes #6073, closes #6714
* **HtmlLexer:** fix for unicode chars (a24ee6a), fixes #6036, closes #6061
* **karma:** fix running karma via gulp (27daeaf)
* **ngFor:** update view locals if identity changes (0f10624), closes #6923
* **perf:** faster looseIdentical implementation (761c6d0), closes #6364
* **query:** don’t cross component boundaries (c6adbf6)
* **query:** update view queries that query directives in embedded views (1f7a41c), fixes #6747
* **release:** need to depend on latest rxjs and zone.js (fc88777)
* **router:** Added route data to normalized async route (df7885c), closes #6802
* **router:** correctly sort route matches with children by specificity (b2bc50d), fixes #5848, closes #6011
* **router:** don&#39;t prepend `/` unnecessarily to Location paths (c603643), closes #6729, closes #5502
* **router:** fix incorrect url param value coercion of 1 to true (995a9e0), closes #5346, closes #6286
* **router:** fix url path for star segment in path recognizer (6f1ef33), closes #6976
* **router:** fixed the location wrapper for angular1 (e73fee7), closes #6943
* **router:** preserve specificity for redirects (a038bb9), closes #5933
* **template_compiler:** Fix erroneous cycle detection (eda4c3e), fixes #6404, closes #6474
* **TemplateParser:** do not match on attrs that are bindings (9a70f1a)
* **testing:** remove test zone for now and rely on returned promises (c72ed99), closes #6359, closes #6601
* **transformer:** record HostBinding annotations applied to getters (a593ffa), closes #6283
* **typings:** Don&#39;t expose typing dependencies to users. (2a70f4e), fixes #5973, fixes #5807, fixes #6266, fixes #5242, fixes #6817, closes #6267
* **typings:** publish es6 typings rather than postinstall. (3d715a2), fixes #7000
* **upgrade:** fix infinite $rootScope.$digest() (7e0f02f), fixes #6385, closes #6386
* **Validators:** fix Validators.required marking number zero as invalid (c2ceb7f), closes #6617
* **web_workers:** support @AngularEntrypoint in web workers (ac85cbb), closes #6013
* **WebWorkers:** Add support for transitionend events. (c2a38c0), closes #6649
* **WebWorkers:** Fix flaky WebWorker test (da1fcfd), closes #6851
* **zone:** correct incorrect calls to zone (3211938)

### Code Refactoring

* **WebWorker:** Rename WORKER_RENDER_APP to WORKER_RENDER_APPLICATION (eda6a5d), closes #6184, closes #6378

### Performance Improvements

* **dart/transform:** Avoid unnecessary reads for files with no view (89f32f8), closes #6183
* **dart/transform:** Only process deferred libs when necessary (f56df65), closes #6745

### BREAKING CHANGES

* angular1-router: The component router now creates custom element HTML rather than custom attribute
HTML, in order to create a new component. So rather than

```html
&lt;div custom-component&gt;&lt;/div&gt;
```

it now creates

```html
&lt;custom-component&gt;&lt;/custom-component&gt;
```

If you defined you router components using the `directive()` helper and
specified the `restrict` properties such that element matching was not allowed,
e.g. `restrict: &#39;A&#39;` then these components will no longer be instantiated
by the component router and the outlet will be empty.


`restrict: &#39;EA&#39;`

Note that this does not affect directives that did not specify the `restrict`
property as the default for this property is already `EA`.
* code size: - This is very unlikely to be breaking, but I&#39;m still marking just in case. The only change to the user should be that dev mode is driven by Dart&#39;s checked mode, like it was in the past.
* core: - `Renderer.listen` now has to return a function that
  removes the event listener.
* Dart:  remove TemplateRef.elementRef setter
* ddc: - there&#39;s a chance of breakage as router&#39;s Instruction constructor
  signature changed.
* typings: Transitive typings are no longer included in the distribution.
You may need to install typings in your project using
http://github.com/typings/typings

Users now must rely on getting typings from:
- one of the peerDependencies, such as rxjs, which exposes
  typings via the moduleResolution=node mechanism.
  (see https://github.com/Microsoft/TypeScript/wiki/Typings-for-npm-packages)
  This happens automatically.
- Using --target ES5 now requires manual installation of
  es6-promise and es6-collections typings.
- Using some angular APIs may introduce a dependency on eg. nodejs
  or jasmine, and those typings need manual installation as well.
* WebWorker: WORKER_RENDER_APP is now deprecated. Use WORKER_RENDER_APPLICATION instead
WORKER_RENDER_APP_COMMON has been replaced by WORKER_RENDER_APPLICATION_COMMON
* core: - Platform pipes can only contain types and arrays of types,
  but no bindings any more.
- When using transformers, platform pipes need to be specified explicitly
  in the pubspec.yaml via the new config option
  `platform_pipes`.
- `Compiler.compileInHost` now returns a `HostViewFactoryRef`
- Component view is not yet created when component constructor is called.
  -&gt; use `onInit` lifecycle callback to access the view of a component
- `ViewRef#setLocal` has been moved to new type `EmbeddedViewRef`
- `internalView` is gone, use `EmbeddedViewRef.rootNodes` to access
  the root nodes of an embedded view
- `renderer.setElementProperty`, `..setElementStyle`, `..setElementAttribute` now
  take a native element instead of an ElementRef
- `Renderer` interface now operates on plain native nodes,
  instead of `RenderElementRef`s or `RenderViewRef`s
* debug: This is a breaking change for unit tests. The API for the DebugElement
has changed. Now, there is a DebugElement or DebugNode for every node
in the DOM, not only nodes with an ElementRef. `componentViewChildren` is
removed, and `childNodes` is a list of ElementNodes corresponding to every
child in the DOM. `query` no longer takes a scope parameter, since
the entire rendered DOM is included in the `childNodes`.

Before:

```
componentFixture.debugElement.componentViewChildren[0];
```

After
```
// Depending on the DOM structure of your component, the
// index may have changed or the first component child
// may be a sub-child.
componentFixture.debugElement.children[0];
```

Before:

```
debugElement.query(By.css(&#39;div&#39;), Scope.all());
```

After:

```
debugElement.query(By.css(&#39;div&#39;));
```

Before:

```
componentFixture.debugElement.elementRef;
```

After:

```
componentFixture.elementRef;
```
* test:  Tests are now required to use `setBaseTestProviders`to set up. Assuming your tests are run on a browser, setup would change
as follows.

Before:

```js
// Somewhere in test setup
import {BrowserDomAdapter} from &#39;angular2/src/platform/browser/browser_adapter&#39;;
BrowserDomAdapter.makeCurrent
```

After:

```js
// Somewhere in the test setup
import {setBaseTestProviders} from &#39;angular2/testing&#39;;
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from &#39;angular2/platform/testing/browser&#39;;

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
                     TEST_BROWSER_APPLICATION_PROVIDERS);
```


<a name="2.0.0-alpha.55"></a>
# 2.0.0-alpha.55 (2015-12-15)


### Features

* **core:** enable dev mode by default (3dca9d5)

### Bug Fixes

* **router:** export ROUTER_LINK_DSL_PROVIDER and hide MockPopStateEvent (fc75220)

### BREAKING CHANGES

* core: Before

Previously Angular would run in dev prod mode by default, and you could enable the dev mode by calling enableDevMode.

After

Now, Angular runs in the dev mode by default, and you can enable the prod mode by calling enableProdMode.


<a name="2.0.0-alpha.54"></a>
# 2.0.0-alpha.54 (2015-12-15)


### Bug Fixes

* **bundles:** don&#39;t include RxJS in System.register bundles (77b7cae)
* **bundles:** remove ngUpgrade from the angular2.js bundle (283962f), closes #5739, closes #5854
* **bundles:** remove polyfills from angular2.js bundle (2983558), closes #5881
* **bundles:** rename UMD bundles (61b9468), closes #5898
* **bundles:** rename the testing.js bundle (d55655f), closes #5899, closes #5776
* **changelog:** fix rxjs operator import paths (a79fe05), closes #5864
* **docs,benchmarks:** remove invalid &lt;/input&gt; closing tags (5b63b67)

### Code Refactoring

* **WebWorker:** Make WebWorker bootstrap synchronous (006a96d), closes #5857, closes #5862

### BREAKING CHANGES

* bundles: RxJS used to be bundled with Angular 2 code and this is not the case
any more. RxJS needs to be loaded explicitly.
* bundles: `ngUpgrade` related symbols are no longer part of the `angular2.js`
bundle. `ngUpgrade` has a dedicated `upgrade.js` bundle now.
* bundles: Previously `angular2.js`, `angular2.min.js` and `angular2.dev.js` bundles
would have zone.js and reflect-metadata pre-appended. New bundles don&#39;t
contain zone.js nor reflect-metadata - those external dependencies can
be easily loaded into a browser using `angular2-polyfills.js`
* bundles: UMD bundles were renamed:
* `angular2.umd.js` -&gt; `angular2-all.umd.js`
* `angular2-testing.umd.js` -&gt; `angular2-all-testing.umd.js`
* bundles: System.register testing bundle was renamed:
`testing.js` -&gt; `testing.dev.js`
* WebWorker: From the app thread, in both TypeScript and Dart, you bootstrap the app
using `application` instead of `asyncApplication`.
Before:
```TypeScript
platform([WORKER_APP_PLATFORM])
.asyncApplication(setupWebWorker, optionalProviders?)
.then((ref) =&gt; ref.bootstrap(RootComponent));
```
Now:
```TypeScript
platform([WORKER_APP_PLATFORM])
.application([WORKER_APP_APPLICATION])
.bootstrap(RootComponent);
```


<a name="2.0.0-alpha.53"></a>
# 2.0.0-alpha.53 (2015-12-13)


### Features

* **benchpress:** add receivedData + requestCount to PerflogMetric (fe1dd77), closes #5750
* **dom_renderer:** add setBindingDebugInfo method (79399e1), closes #5227
* **facade:** do not reexport Observable from angular2/core (43f42d9)
* **Headers:** implement `toJSON` (0cb32c2)
* **renderer:** use a comment instead of an element when stamping out template&gt;` elements (194dc7d), closes #4805

### Bug Fixes

* **angular2:** don&#39;t export compiler bits as public API (20c6eeb), closes #5815, closes #5797
* **angular2:** remove `angular2.ts` module (200dc00), closes #5815, closes #5844
* **animate:** ensure transition properties are removed once the animation is over (b8e69a2)
* **async:** improve Rx support in ObservableWrapper (4a17e69)
* **async:** support BehaviorSubjects in async pipe (398f024)
* **bundles:** don&#39;t use angular2/angular2 in config of System.register bundles (8c69497)
* **changelog:** fix ngFor on template (3190c59), closes #5785
* **compiler:** remove AppRootUrl (ed2c25e)
* **core:** workaround for typescript@1.7.3 breakage #5784 (30e25ac), fixes #5784
* **dom_renderer:** moveNodeAfterSiblings should not detach the reference node (edcb34d), fixes #5077, closes #5759
* **HtmlParser:** allow ng-content elements regardless the namespace (080469f), closes #5745
* **parse5:** support comment nodes with getText and setText (693d9dc), closes #5805
* **public_spec:** check exports of barrels instead of angular2/angular2 (979162d), closes #5841
* **styles:** Escape \r characters in compiled text (92ddc62), closes #5772, closes #5835
* **TemplateParser:** match element and attributes regardless the namespace (7c13372)
* **upgrade:** allow directives with empty template (2ca5e38)
* **web_workers:** remove unnecessary setup module and AppRootUrl (a885f37), closes #5820

### BREAKING CHANGES

* facade: Before import {Observable} from &#39;angular2/core&#39;

After import {Observable} from &#39;rxjs/Observable&#39;;
* angular2: The following symbols are not exported from angular2/angular2 any more:
`UrlResolver`, `AppRootUrl`, `getUrlScheme`, `DEFAULT_PACKAGE_URL_PROVIDER`.
Use imports from `angular2/compiler` instead.
* angular2: `angular2/angular2` was removed. Use the correct import from one of the barrels. E.g. `angular2/core`, `angular2/platform/browser`,  `angular2/common`, …

Note: This only applies to JavaScript, Dart is not changed.
* web_workers: :
The setupWebWorker function exported from
angular2/platform/worker_app  no longer returns a promise of providers,
but instead synchronously returns providers.

Related to #5815


<a name="2.0.0-alpha.52"></a>
# 2.0.0-alpha.52 (2015-12-10)


### Features

* **camelCase Angular:** legacy template transformer (9e44dd8)
* camelCase Angular (kebab-case removal) (da9b46a)

### BREAKING CHANGES

* Angular is now fully camel case.

Before:

    &lt;p *ng-if=&#34;cond&#34;&gt;
    &lt;my-cmp [my-prop]=&#34;exp&#34;&gt;
    &lt;my-cmp (my-event)=&#34;action()&#34;&gt;
    &lt;my-cmp [(my-prop)]=&#34;prop&#34;&gt;
    &lt;input #my-input&gt;
    &lt;template ng-for #my-item [ng-for-of]=items #my-index=&#34;index&#34;&gt;

After

    &lt;p *ngIf=&#34;cond&#34;&gt;
    &lt;my-cmp [myProp]=&#34;exp&#34;&gt;
    &lt;my-cmp (myEvent)=&#34;action()&#34;&gt;
    &lt;my-cmp [(myProp)]=&#34;prop&#34;&gt;
    &lt;input #myInput&gt;`,
    &lt;template ngFor=&#34;#my-item&#34; [ngForOf]=items #myIndex=&#34;index&#34;&gt;

The full details are found in [angular2/docs/migration/kebab-case.md](https://github.com/angular/angular/blob/master/modules/angular2/docs/migration/kebab-case.md)


<a name="2.0.0-alpha.51"></a>
# 2.0.0-alpha.51 (2015-12-10)


### Features

* **bundles:** add angular-testing UMD bundle (d6d759d), closes #5581, closes #5734
* **core:** provide support for relative assets for components (28860d3), closes #5634
* **core:** provide support for relative assets for components (db096a5), closes #5634, closes #5634

### Reverts

* feat(core): provide support for relative assets for components (5f0ce30)


<a name="2.0.0-alpha.50"></a>
# 2.0.0-alpha.50 (2015-12-09)


### Features

* **testing:** package angular2_testing to prepare it for publishing (cc8f1f9), closes #5682

### Bug Fixes

* **http:** use `any` for res.json() return (cbf7888), fixes #5636, closes #5646
* **testing:** remove Symbol dummy shim (c1ae49d), closes #5067, closes #5719


<a name="2.0.0-alpha.49"></a>
# 2.0.0-alpha.49 (2015-12-09)


### Features

* **HtmlLexer:** allow &#34;&lt;&#34; in text tokens (aecf681), fixes #5550
* **TemplateParser:** allow template elements regardless the namespace (1f35048)

### Bug Fixes

* **bootstrap:** fix the configuration of ExceptionHandler (0d9a1de)
* **build:** lock down version of package:code_transformers (85d89ba)
* **bundles:** clean-up and re-organize UMD bundles (fb4f1e8), fixes #5593, closes #5697
* **bundles:** remove SFX bundle (a4ba46c), closes #5665, closes #5712
* **bundles:** rename external-dependencies to angular-polyfills (b3c91b1), closes #5714, closes #5716
* **changelog:** add RxJS imports breaking change (ad48169), closes #5678
* **changelog:** correct import path (86c74cf), closes #5681
* **compiler:** support properties on SVG elements (daaa8ee), closes #5653
* **dynamic_component_loader:** leave the view tree in a consistent state when hydration fails (0df8bc4), closes #5718
* **form:** Form directives are exportedAs &#39;ngForm&#39; (was &#39;form&#39;) (8657ca4), fixes #5658, closes #5709
* **HtmlLexer:** handle CR in input stream per HTML spec (9850e68), fixes #5618, closes #5629
* **HtmlLexer:** tag name must follow &#34;&lt;&#34; without space (47f1d12)
* **HtmlParser:** Do not add parent element for template children (3a43861), fixes #5638
* **HtmlParser:** ignore LF immediately following pre, textarea &amp; listing (eb0ea93), fixes #5630, closes #5688
* **HtmlParser:** mark &lt;source&gt; elements as void (50490b5), fixes #5663, closes #5668
* **npm:** move es6-shim from devDependencies to dependencies (21542ed)
* **package:** relock RxJS to alpha.11 (4b1618c), fixes #5643, closes #5644
* **router:** set correct redirect/default URL from hashchange (aa85856), closes #5590, closes #5683

### Code Refactoring

* **Observable:** implement toPromise and fromPromise without side effects (c39f4c3), closes #5542, closes #5626

### BREAKING CHANGES

* bundles: Number and content of UMD bundles have changed:
- we only publish one bundle that contains: core, common, platform/browser, http, router, instrumentation and upgrade
- exported names have changed and now:
  - core is exported as `ng.core`
  - common is exported as `ng.common`
  - platform/browser is exported as `ng.platform.browser`
  - http is exported as `ng.http`
  - router is exported as `ng.router`
  - instrumentation is exported as `ng.instrumentation`
  - upgrade is exported as `ng.upgrade`
* bundles: The existing sfx bundle (angular2.sfx.dev.js) is replaced by UMD bundles:
angular2.umd.js and angular2.umd.dev.js. The new UMD bundles dont have
polyfills (zone.js, reflect-metadata) pre-appended. Those polyfills
can be easily loaded by including the angular-polyfills.js bundle.
* bundles: The `external-dependencies.js` bundle was removed.
Use `angular-polyfills.js` instead.
* form: Before:

    &lt;form #f=&#34;form&#34;&gt;

After:

    &lt;form #f=&#34;ngForm&#34;&gt;
* broccoli:  rxjs, reflect-metadata, zone.js and es6-shims now must be specified asexplicit dependencies of each angular app that uses npm for package management.

To migrate, please add the following into the &#34;dependencies&#34; section of your package.json:

```
&#34;dependencies&#34;: {
    ...

    &#34;es6-promise&#34;: &#34;^3.0.2&#34;,
    &#34;es6-shim&#34;: &#34;^0.33.3&#34;,
    &#34;reflect-metadata&#34;: &#34;0.1.2&#34;,
    &#34;rxjs&#34;: &#34;5.0.0-alpha.11&#34;,
    &#34;zone.js&#34;: &#34;0.5.8&#34;

    ...
}
```
* Observable: toPromise is no longer an instance method of the `Observable` returned
by Angular, and fromPromise is no longer available as a static method.

The easiest way to account for this change in applications is to import
the auto-patching modules from rxjs, which will automatically add these
operators back to the Observable prototype.

```
import &#39;rxjs/add/operator/toPromise&#39;;
import &#39;rxjs/add/observable/fromPromise&#39;;
```


<a name="2.0.0-alpha.48"></a>
# 2.0.0-alpha.48 (2015-12-05)


### Features

* **core:** remove typings from package.json to disallow &#39;import * as n from &#39;angular2&#39;&#39;&#39; (9a65ea7)
* **dart/transform:** Add quick_transformer (f77ca7b), closes #5484
* **dart/transform:** Introduce @AngularEntrypoint() (6b2ef25)
* **HtmlParser:** add most common named character references (d90a226), fixes #5546, closes #5579
* **HtmlParser:** better error message when a void tag has content (62c2ed7)
* **HtmlParser:** enforce no end tag for void elements (5660446)
* **HtmlParser:** enforce only void &amp; foreign elts can be self closed (d388c0a), closes #5591
* **mocks:** Mark mock objects @Injectable() (35e32bb), closes #5576
* **router:** implement router link DSL (4ea5b6e), closes #5557, closes #5562
* **sourcemaps:** use inline source maps and inline sources in node_tree (7e18d4c), closes #5617
* **test:** add angular2_testing dart library (93a1ec2), closes #3289
* **testing:** export useful properties from componentFixture (e9f873a)
* **typings:** import global-es6.d.ts in core (22e9590)

### Bug Fixes

* **build:** change npm publish script not to remove angular folder when building benchpress (47d0942)
* **build:** include benchpress into browser_tree (87ac36f)
* **core/forms:**  input[type=text] .valueChanges fires unexpectedly (680f7e0), closes #4768, closes #5284, closes #5401
* **dart/reflection:** Fix `NoReflectionCapabilities` interface (0a3a17f), closes #5559, closes #5578
* **HtmlParser:** close void elements on all node types (9c6b929), fixes #5528
* **HtmlParser:** do not add a tbody parent for tr inside thead &amp; tfoot (c58e7e0), fixes #5403
* **HtmlParser:** ng-content is not a void element (e67e195), fixes #5563, closes #5586
* **WebWorker:** Add @AngularEntrypoint to worker_app bundle (5e50859), closes #5588

### Code Refactoring

* **facade:** use rxjs package (5514dc1)
* **http:** rename enums to be singular (b925ff5), fixes #5574, closes #5584
* **test_injector:** Provide separate methods for creating test injector with and without runtime compiler. (0614797), closes #5583
* **WebWorker:** Use the new generic bootstrap. (1710272), closes #3277, closes #5473, closes #5519

### BREAKING CHANGES

* core: Before

import * as ng from &#39;angular2&#39;;

After

import * as core from &#39;angular2/core&#39;;
* HtmlParser: End tags used to be tolerated for void elements with no content.
They are no more allowed so that we more closely follow the HTML5 spec.
* HtmlParser: `&lt;whatever /&gt;` used to be expanded to `&lt;whatever&gt;&lt;/whatever&gt;`.
The parser now follows the HTML5 spec more closely.
Only void and foreign elements can be self closed.
* facade: RxJS imports now are via `rxjs` instead of `@reactivex/rxjs`
Individual operators can be imported `import &#39;rxjs/operators/map&#39;`
* http: Before

import {ReadyStates, RequestMethods, ResponseTypes} from &#39;angular2/http&#39;;

After

import {ReadyState, RequestMethod, ResponseType} from &#39;angular2/http&#39;;
* test_injector: `createTestInjector()` does not more include the runtime compiler. Use `createTestInjectorWithRuntimeCompiler()` instead.
* WebWorker: You can no longer bootstrap a WebWorker or Isolate using `bootstrap` or `bootstrapWebWorker`. Instead you have to do the following:

In TypeScript:
```TypeScript
// index.js
import {WORKER_RENDER_PLATFORM, WORKER_RENDER_APPLICATION, WORKER_SCRIPT} from &#34;angular2/platforms/worker_render&#34;;
import {platform} from &#34;angular2/platform&#34;;

platform([WORKER_RENDER_PLATFORM])
.application([WORKER_RENDER_APPLICATION, new Provider(WORKER_SCRIPT, {useValue: &#34;loader.js&#34;});
```
```JavaScript
// loader.js
importScripts(&#34;https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.33.3/es6-shim.js&#34;, &#34;https://jspm.io/system@0.16.js&#34;, &#34;angular2/web_worker/worker.js&#34;);
System.import(&#34;app&#34;);
```
```TypeScript
// app.ts
import {Component, View} from &#34;angular2/core&#34;;
import {WORKER_APP_PLATFORM, setupWebWorker} from &#34;angular2/platforms/worker_app&#34;;
import {platform} from &#34;angular2/platform&#34;;

@Component({
  selector: &#34;hello-world&#34;
})
@View({
  template: &#34;&lt;h1&gt;Hello {{name}}&lt;/h1&gt;
})
export class HelloWorld {
  name: string = &#34;Jane&#34;;
}

platform([WORKER_APP_PLATFORM])
.asyncApplication(setupWebWorker, optionalProviders?)
.then((ref) =&gt; ref.bootstrap(RootComponent));
```

In Dart:
```Dart
// index.dart
import &#34;angular2/platform.dart&#34;;
import &#34;angular2/platforms/worker_render.dart&#34;;

main() {
  platform([WORKER_RENDER_PLATFORM])
  .asyncApplication(initIsolate(&#34;my_worker.dart&#34;));
}
```
```Dart
// background_index.dart
import &#34;angular2/platform.dart&#34;;
import &#34;angular2/platforms/worker_app.dart&#34;;
import &#34;package:angular2/src/core/reflection/reflection.dart&#34;;
import &#34;package:angular2/src/core/reflection/reflection_capabilities.dart&#34;;

@Component(
  selector: &#34;hello-world&#34;
)
@View(
  template: &#34;&lt;h1&gt;Hello {{name}}&lt;/h1&gt;&#34;
)
class HelloWorld {
  String name = &#34;Jane&#34;;
}

main(List&lt;String&gt; args, SendPort replyTo) {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  platform([WORKER_APP_PLATFORM])
    .asyncApplication(setupIsolate(replyTo))
      .then((ref) =&gt; ref.bootstrap(RootComponent));
}

```

You should no longer import from the `angular2/web_worker/worker` and `angular2/web_worker/ui` paths. Instead you can now import directly from core, directives, etc..

The WebWorkerApplication class has been removed. If you want to use ServiceMessageBroker or ClientMessageBroker on the render thread, you must inject their factories via DI.
If you need to use the MessageBus on the render thread you must also obtain it through DI.


<a name="2.0.0-alpha.47"></a>
# 2.0.0-alpha.47 (2015-12-01)


### Features

* **bootstrap:** add platform and app initializers (3c43a8c), closes #5355
* **build:** add an option to disable type checks when running tests (4e585bc), closes #5299
* **bundles:** publish UMD bundles (fa725b4), closes #5223
* **change detection:** remove support for &#34;if&#34; (0a94021), closes #4616
* **change_detect:** Guard `checkNoChanges` behind `assertionsEnabled` (63e853d), closes #4560
* **ChangeDetector:** Add support for short-circuiting (7e92d2e)
* **Compiler:** case sensitive html parser (86aeb8b)
* **Compiler:** case sensitive html parser (36a423f), close #4417, closes #5264
* **Compiler:** case sensitive html parser (a8edc1e), close #4417, closes #5264
* **Compiler:** case sensitive html parser (adb8756)
* **core:** PlatformRef and ApplicationRef support registration of disposal functions. (8dd3082)
* **core:** add support for ambient directives (5948aba)
* **core:** add support for ambient directives to dart transformers (4909fed), closes #5129
* **core:** extract platforms out of core (0eab4fc), closes #5219, closes #5280
* **core:** extract platforms out of core (3f4628c), closes #5219
* **core:** make transformers handle @Input/@Output/@HostBinding/@HostListener (16bc238), closes #5080
* **core:** renam AMBIENT_DIRECTIVES and AMBIENT_PIPES into PLATFORM_DIRECTIVES and PLATFORM_PIPES (e27665c), closes #5201
* **dart:** Support forcing dev mode via enableDevMode in Dart. (a8d9dbf), closes #5193
* **dart/transform:** Add getters, setters, methods to NgDepsModel (d68955a)
* **dart/transform:** Avoid overwriting assets (ca5e31b)
* **dart/transform:** Bail early for files with no deferred libraries (f80321f)
* **dart/transform:** Do not declare outputs (27ead8c)
* **dart/transform:** Do not re-process generated files (8f91ff8)
* **dart/transform:** Match runtime semantics for template values (bdd031a)
* **dart/transform:** Parse `directives` dependencies from the Dart ast (2604402)
* **dart/transform:** Simplify dependency imports (9d0b61b)
* **facade:** add ObservableWrapper.fromPromise (53bd6e1)
* **facade:** add a way to convert observables into promises (2c201d3)
* **facade:** add a way to detect if an object is a Promise (fc50829)
* **facade:** add support for async validators returning observables (4439106), closes #5032
* **forms:** Export NumberValueAccessor (25ddd87)
* **forms:** Implement a way to manually set errors on a control (ed4826b), closes #4917
* **forms:** Use the DefaultValueAccessor for controls with an ng-default-control attribute. (f21e782), closes #5076
* **forms:** add support for Validator (547e011)
* **forms:** add support for adding async validators via template (31c12af)
* **forms:** add support for async validations (bb2b961)
* **forms:** implements a combinator for composing async validators (cf449dd)
* **forms:** remove controlsErrors (7343ef0), closes #5102
* **forms:** support adding validators to ControlGroup via template (7580628), closes #4954
* **forms:** update FormBuilder to support async validations (1c322f1), closes #5020
* **ngUpgrade:** simple example (9d0d33f)
* **parser:** allows users install custom AST transformers (a43ed79), closes #5382
* **Parser:** associate pipes right to left (4639f44), closes #4605, closes #4716
* **renderer:** use a comment instead of an element when stamping out `&lt;template&gt;` elements (bb9cfe6), closes #4805, closes #5227
* **router:** Make RootRouter disposable to allow cleanup of Location subscription. ROUTER_PROVIDERS now automatically disposes of the RootRouter when the application is disposed. (2e059dc), closes #4915
* **router:** Support unsubscription from Location by returning the subscription. (2674eac)
* **router:** add support for APP_BASE_HREF to HashLocationStrategy (1bec4f6), closes #4935, closes #5368, closes #5451
* **router:** add support for route links with no leading slash (07cdc2f), closes #4623
* **router:** allow linking to auxiliary routes (0b1ff2d), closes #4694
* **router:** provide RouteConfig object for AuxRoute (0ebe283), closes #4319
* **templates:** introduce quoted expressions to support 3rd-party expression languages (b6ec238)
* **testing:** use zones to avoid the need for injectAsync (0c9596a)
* **validators:** Add a pending state to AbstractControl (c9fba3f)
* **validators:** Allow errors at both the group/array level or their children (28d88c5)
* move NgZone to Stream/Observable-based callback API (491e1fd)
* upgrade clang-format to 1.0.32. (4a1b873)

### Bug Fixes

* **analyzer:** fix dart analyzer errors (56e7364), closes #4992
* **benchmarks:** fix tracing categories to work with Dartium (64bd963), closes #5209
* **benchmarks:** update react and polymer benchmarks and get tree update numbers for all of the benchmarks as well. (bc10dc3), closes #4709
* **benchpress:** increase sampling frequency (127d6b6), closes #4985
* **build:** EMFILE error on Windows when executing JS unit tests (1dc8a0a), fixes #4525, closes #4796
* **build:** do not reexport compiler from angular2/angular2 (30d35b5), closes #5422
* **build:** fix npm install not to depend on minimist (6d70cd7), closes #5282
* **build:** fix source maps (87d56ac), closes #5444
* **build:** increase memory limit (2cd0f07)
* **build:** reorder bundling step (5fecb3b), closes #5208
* **ChangeDetector:** support for NaN (1316c3e), closes #4853
* **compiler:** create literal property bindings for empty *… directives. (b2dc5c2), closes #4916
* **compiler:** dedup directives in template compiler (87ddc8f), closes #5311, closes #5464
* **compiler:** do not match directives to variable names (711dbf4)
* **compiler:** don’t lowercase attributes to support svg (6133f2c), closes #5166
* **compiler:** load style urls in runtime mode correctly (27dbd2d), closes #4952
* **compiler:** remove style when [style.foo]=&#39;exp&#39; evaluates to null (f1989e7), fixes #5110, closes #5114
* **compiler:** support events on a template element that are consumed via a direct expression (3118d5c), closes #4883
* **core:** Add an error state for ChangeDetectors that is set when bindings or lifecycle events throw exceptions and prevents further detection. (d1b54d6), fixes #4323, closes #4953
* **core:** Export dev mode API in Dart. (a3e6406), closes #5233
* **core:** Fix typo (485c85b), closes #4803
* **core:** Provide setDevMode() to enable/disable development mode in Javascript. (4bb9c46)
* **core:** Run component disposal before destroyRootHostView() to avoid crash if change detection is triggered. (b22eddf), closes #5226
* **core:** Unload components when individually disposed. (1ff1792)
* **core:** reexport PLATFORM_DIRECTIVES and PLATFORM_PIPES in dart (01ebff4)
* **core:** various dart-specific fixes for core and facades (4a43230)
* **dart:** fix the static_browser platform not to include compiler (ad6fb06), closes #5321
* **dart/transform:** Consider of line numbers in inliner_for_test (a31e2f5), fixes #5281, closes #5285
* **dart/transform:** Fix issue with deferred in .ng_deps (6be95ae)
* **dart/transform:** Gracefully handle empty .ng_meta.json files (a87c5d9)
* **dart/transform:** Omit bootstrap.dart in ng_deps (0db0252), closes #5315, closes #5348
* **debug_element:** don’t descend into merged embedded views on `componentChildren`. (60bedb4), closes #4920
* **default_value_accessor:** support custom input elements that fire custom change events. (56a9b02)
* **di:** allow dependencies as flat array (6514b8c)
* **EventEmitter:** resolve onError and onComplete asynchronously (019cb41), closes #4443
* **examples:** Don&#39;t generate Dart code for TS examples in nested directories. (b571baa)
* **facades:** reduce node count by 1 in assertionsEnabled (edfa35b)
* **forms:** Export the NG_VALUE_ACCESSOR binding token. (fee5dea)
* **forms:** handle control change in NgFormControl (d29a9a9)
* **forms:** scope value accessors, validators, and async validators to self (ba64b5e), closes #5440
* **forms:** update compose to handle null validators (9d58f46)
* **http:** Fix all requests defaulting to Get (e1d7bdc), closes #5309, closes #5397
* **http:** error on non-200 status codes (201f189), closes #5130
* **http:** refactor &#39;require&#39; statements to &#39;import&#39; declarations for Rx (bcd926a), closes #5287
* **http:** return Response headers (4332ccf), closes #5237
* **http:** return URL in Response (46fc153), closes #5165
* **http:** use Observable&lt;Response&gt; on Http methods (a9b1270), closes #5017
* **http:** use Response for JSONP errors (31687ef)
* **JsonPipe:** marks json pipe as not pure Marked json pipe as not pure so that it runs all the time, reflecting changes on the object. (fc016b5), closes #4821
* **lang:** avoid infinite loop when calling assert() (5c48236), fixes #4981, closes #4983
* **lint:** enforce that module-private members have @internal. (098201d), fixes #4645, closes #4989
* **material:** Disable md-grid-list tests until #5132 is fixed. (0b11051)
* **ng-content:** wildcard ng-content has to go last. (39626a9), closes #5016
* **ng_class:** support sets correctly (2957b0b), closes #4910
* **NgFor:** allow default templates with ng-for-template (2d0c8f1), closes #5161
* **parser:** do not crash on untokenizable quote prefixes (b90de66), closes #5486
* **Pipe:** pure is an optional argument (7ba426c)
* **Pipes:** mark date &amp; slice as non-pure (2f1f83a)
* **playground:** fix the inbox example (6240245)
* **publish:** syntax fix (9985968)
* **render:** create svg elements with the right namespace (ac52bfd), fix #4506, closes #4949
* **renderer:** apply host element encapsulation also if the parent component is not encapsulated. (344776f), closes #5240
* **renderer:** support `xlink:href` attribute in svg (540b8c2), closes #4956
* **router:** apply APP_BASE_HREF when using PathLocationStrategy (ac38812), closes #5028
* **router:** fix a typing issue (4215afc), closes #5518
* **router:** fix error message text (280cd33)
* **router:** properly serialize aux routes (23784a2)
* **router:** respect LocationStrategy when constructing hrefs in links (2a3e11d), closes #4333
* **router:** respond to hashchange events (53bddec), closes #5013
* **RouterLink:** do not prevent default behavior if target set on anchor element (a69e7fe), closes #4233, closes #5082
* **setup:** set tsconfig so that it works in editors (fb8b815)
* **shadow_css:** strip comments and fix logic for parsing rules. (d8775e0), closes #5037, closes #5011
* **style_url_resolver:** include `asset:` urls into precompiled stylesheets. (d8b3601), closes #4926
* **test:** &#34;integration tests svg should support svg elements&#34; fails in non-Chrome browsers (c4964e7), fixes #4987, closes #5000
* **test:** Android browser does not support calc() a CSS unit value (e37799a), closes #5001
* **transformers:** Fix @Input/@Output annotations with setters/getters (d9f362a), closes #5251, closes #5259
* **transformers:** use BarbackMode instead of assertionEnabled to enable debug info generation (7f3223b), closes #5245, closes #5466
* **typings:** don&#39;t expose RootTestComponent_ (05d29a9), fixes #4776, closes #4777
* **typings:** two errors not reported by our build: (7f6289c)
* **url_resolver:** always replace `package:` in Dart, even if it came from `baseUrl`. (fd9b675), closes #4775
* **web worker:** remove usages of deprecated zone API (d59c20c), closes #5425
* **WebWorker:** Don&#39;t send messages when the buffer is empty (8485ef9), closes #4138
* **WebWorker:** Fix bug causing multi browser demo to crash (eba7073), closes #4839
* **WebWorker:** Serialize scroll events (84d1f93), closes #4836, closes #4840
* remove deprecated zone API usage in testability (3593d85), closes #5084
* remove internal usages of deprecated overrideOnTurnDone (c814dfb), closes #5079

### Code Refactoring

* **async:** refactor EventEmitter (ca3986f), closes #7, closes #4149
* **core:** Move LifeCycle functionality into ApplicationRef. (72e65d6), closes #5008
* **core:** move directives, pipes, and forms into common (695923d), closes #5153
* **core:** move facades out of core (79472b7)
* **core:** move render/dom from core (2c8fcec)
* **EventEmitter:** rename .next() to .emit() (3fa287a), closes #4287, closes #5302
* **lifecycle:** prefix lifecycle methods with &#34;ng&#34; (604c8bb), closes #5036
* **pipes:** use angular lifecycle hooks instead of PipeOnDestroy (fcc7ce2)
* **router:** RouteData as a type (b87da8f), fixes #4392, closes #4428
* **router:** improve recognition and generation pipeline (6ddfff5), closes #4728, closes #4228, closes #4170, closes #4490, closes #4694, closes #5200, closes #5475
* **router:** improve recognition and generation pipeline (cf7292f), closes #4170, closes #4490, closes #4694, closes #5200, closes #5352
* **router:** rename &#34;as&#34; to &#34;name&#34; in RouteConfig (7d83959), closes #4622, closes #4896

### Performance Improvements

* **dart/transform:** Restrict visibility/mutability of codegen (45b33c5), closes #5009

### Chores

* **core:** move compiler out of core (6edd964)
* **test:** rename RootTestComponent to ComponentFixture (6864578), closes #4711

### BREAKING CHANGES

* core: All imports from &#39;angular2/core/compiler&#39; should be changed to &#39;angular2/compiler&#39;.
* test: Before:

```
testComponentBuilder.createAsync(MyComponent).then(root: RootTestComponent =&gt; {
}
```

After:

```
testComponentBuilder.createAsync(MyComponent).then(fixture: ComponentFixture =&gt; {
}
```
* async: - consumers of EventEmitter no longer need to call .toRx()
- EventEmitter is now generic and requires a type - e.g. `EventEmitter&lt;string&gt;`
- EventEmitter and Observable now use the `.subscribe(generatorOrNext, error, complete)` method instead of `.observer(generator)`
- ObservableWrapper uses `callNext/callError/callComplete` instead of `callNext/callThrow/callReturn`
* core: Before: constructor(@Inject(LifeCycle) lifecycle) { lifecycle.tick(); }
After: constructor(@Inject(ApplicationRef) appRef) { appRef.tick(); }
* core: All private exports from &#39;angular2/src/core/{directives,pipes,forms}&#39; should be replaced with &#39;angular2/src/common/{directives,pipes,formis}&#39;
* core: All private exports from &#39;angular2/src/core/facade/{lang,collection,exception_handler}&#39; should be replaced with &#39;angular2/src/facade/{lang,collection,exception_handler}&#39;.
* core: If you import browser adapter or dom renderer directly (not via angular2/core),
you will have to change the import path.
* EventEmitter: EventEmitter#next(value) is deprecated, use EventEmitter#emit(value)
instead.
* lifecycle: Previously, components that would implement lifecycle interfaces would include methods
like &#34;onChanges&#34; or &#34;afterViewInit.&#34; Given that components were at risk of using such
names without realizing that Angular would call the methods at different points of
the component lifecycle. This change adds an &#34;ng&#34; prefix to all lifecycle hook methods,
far reducing the risk of an accidental name collision.

To fix, just rename these methods:
 * onInit
 * onDestroy
 * doCheck
 * onChanges
 * afterContentInit
 * afterContentChecked
 * afterViewInit
 * afterViewChecked
 * _Router Hooks_
 * onActivate
 * onReuse
 * onDeactivate
 * canReuse
 * canDeactivate

To:
 * ngOnInit,
 * ngOnDestroy,
 * ngDoCheck,
 * ngOnChanges,
 * ngAfterContentInit,
 * ngAfterContentChecked,
 * ngAfterViewInit,
 * ngAfterViewChecked
 * _Router Hooks_
 * routerOnActivate
 * routerOnReuse
 * routerOnDeactivate
 * routerCanReuse
 * routerCanDeactivate

The names of lifecycle interfaces and enums have not changed, though interfaces
have been updated to reflect the new method names.
* pipes: Previously, pipes that wanted to be notified when they were destroyed
would implement the PipeOnDestroy interface and name the callback
`onDestroy`. This change removes the PipeOnDestroy interface and
instead uses Angular&#39;s lifecycle interface `OnDestroy`, with the
`ngOnDestroy` method.

Before:
```
import {Pipe, PipeOnDestroy} from &#39;angular2/angular2&#39;;
@Pipe({pure: false})
export class MyPipe implements PipeOnDestroy {
  onDestroy() {}
}
```

After:
import {Pipe, OnDestroy} from &#39;angular2/angular2&#39;;
@Pipe({pure: false})
export class MyPipe implements PipeOnDestroy {
  ngOnDestroy() {}
}
* router: The ROUTE_DATA token has been removed and replaced with a type RouteData,
allowing a type injection like we do with RouteParams.

Before:

    constructor(routeParams: RouteParams, @Inject(ROUTE_DATA) routeData) {
      let id = routeParams.get(&#39;id&#39;);
      let name = ROUTE_DATA.name;
    }

After:

    constructor(routeParams: RouteParams, routeData: RouteData) {
      let id = routeParams.get(&#39;id&#39;);
      let name = routeData.get(&#39;name&#39;);
    }
* router: Redirects now use the Link DSL syntax. Before:

```
@RouteConfig([
	{ path: &#39;/foo&#39;, redirectTo: &#39;/bar&#39; },
	{ path: &#39;/bar&#39;, component: BarCmp }
])
```

After:

```
@RouteConfig([
	{ path: &#39;/foo&#39;, redirectTo: [&#39;Bar&#39;] },
	{ path: &#39;/bar&#39;, component: BarCmp, name: &#39;Bar&#39; }
])
```
* router: This also introduces `useAsDefault` in the RouteConfig, which makes cases like lazy-loading
and encapsulating large routes with sub-routes easier.

Previously, you could use `redirectTo` like this to expand a URL like `/tab` to `/tab/posts`:

@RouteConfig([
	{ path: &#39;/tab&#39;, redirectTo: &#39;/tab/users&#39; }
	{ path: &#39;/tab&#39;, component: TabsCmp, name: &#39;Tab&#39; }
])
AppCmp { ... }

Now the recommended way to handle this is case is to use `useAsDefault` like so:

```
@RouteConfig([
	{ path: &#39;/tab&#39;, component: TabsCmp, name: &#39;Tab&#39; }
])
AppCmp { ... }

@RouteConfig([
	{ path: &#39;/posts&#39;, component: PostsCmp, useAsDefault: true, name: &#39;Posts&#39; },
	{ path: &#39;/users&#39;, component: UsersCmp, name: &#39;Users&#39; }
])
TabsCmp { ... }
```

In the above example, you can write just `[&#39;/Tab&#39;]` and the route `Users` is automatically selected as a child route.
* router: Redirects now use the Link DSL syntax. Before:

```
@RouteConfig([
  { path: &#39;/foo&#39;, redirectTo: &#39;/bar&#39; },
  { path: &#39;/bar&#39;, component: BarCmp }
])
```

After:

```
@RouteConfig([
  { path: &#39;/foo&#39;, redirectTo: [&#39;Bar&#39;] },
  { path: &#39;/bar&#39;, component: BarCmp, name: &#39;Bar&#39; }
])
```
* router: This also introduces `useAsDefault` in the RouteConfig, which makes cases like lazy-loading
and encapsulating large routes with sub-routes easier.

Previously, you could use `redirectTo` like this to expand a URL like `/tab` to `/tab/posts`:

@RouteConfig([
  { path: &#39;/tab&#39;, redirectTo: &#39;/tab/users&#39; }
  { path: &#39;/tab&#39;, component: TabsCmp, name: &#39;Tab&#39; }
])
AppCmp { ... }

Now the recommended way to handle this is case is to use `useAsDefault` like so:

```
@RouteConfig([
  { path: &#39;/tab&#39;, component: TabsCmp, name: &#39;Tab&#39; }
])
AppCmp { ... }

@RouteConfig([
  { path: &#39;/posts&#39;, component: PostsCmp, useAsDefault: true, name: &#39;Posts&#39; },
  { path: &#39;/users&#39;, component: UsersCmp, name: &#39;Users&#39; }
])
TabsCmp { ... }
```

In the above example, you can write just `[&#39;/Tab&#39;]` and the route `Users` is automatically selected as a child route.
* router: This is a rename to make routing concepts easier to understand.

Before:

```
@RouteConfig([
  { path: &#39;/&#39;, component: MyCmp, as: &#39;Home&#39; }
])
```

After:

```
@RouteConfig([
  { path: &#39;/&#39;, component: MyCmp, name: &#39;Home&#39; }
])
```
* compiler: :- you can no longer use a #foo or a var-foo to apply directive [foo], although
  it didn&#39;t work properly anyway.

This commit is fixing breakage caused by the switch to pre-compiler (exact SHA
unknown).
* http: previously http would only error on network errors to match the fetch
specification. Now status codes less than 200 and greater than 299 will
cause Http&#39;s Observable to error.
* change detection:  Remove if statement support from actions.
* core: A few private helpers (e.g., platformCommon or applicationCommon) were removed or replaced with other helpers. Look at PLATFORM_COMMON_PROVIDERS, APPLICATION_COMMON_PROVIDERS, BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS to see if they export the providers you need.
* core: A few private helpers (e.g., platformCommon or applicationCommon) were removed or replaced with other helpers. Look at PLATFORM_COMMON_PROVIDERS, APPLICATION_COMMON_PROVIDERS, BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS to see if they export the providers you need.
* core: AMBIENT_DIRECTIVES -&gt; PLATFORM_DIRECTIVES
AMBIENT_PIPES -&gt; PLATFORM_PIPES
* forms: Before:

ControlGroup.errors and ControlArray.errors returned a reduced value of their children controls&#39; errors.

After:

ControlGroup.errors and ControlArray.errors return the errors of the group and array.
And ControlGroup.controlsErrors and ControlArray.controlsErrors return the reduce value of their children controls&#39; errors.
* forms: Previously, the controlsErrors getter of ControlGroup and ControlArray returned the errors of their direct children. This was confusing because the result did not include the errors of nested children (ControlGroup -&gt; ControlGroup -&gt; Control). Making controlsErrors to include such errors would require inventing some custom serialization format, which applications would have to understand.

Since controlsErrors was just a convenience method, and it was causing confusing, we are removing it. If you want to get the errors of the whole form serialized into a single object, you can manually traverse the form and accumulate the errors. This way you have more control over how the errors are serialized.
* Parser: Before:

`1 + 1 | pipe:a | pipe:b` was parsed as `(1 + 1) | pipe:(a | pipe:b)`

After:

`1 + 1 | pipe:a | pipe:b` is parsed as `((1 + 1) | pipe:a) | pipe:b`
* validators:  errors format has changed from validators. Now errors froma control or an array&#39;s children are prefixed with &#39;controls&#39; while errors
from the object itself are left at the root level.
Example:
Given a Control group as follows:
var group = new ControlGroup({
  login: new Control(&#34;&#34;, required),
  password: new Control(&#34;&#34;, required),
  passwordConfirm: new Control(&#34;&#34;, required)
});

Before:
group.errors

{
  login: {required: true},
  password: {required: true},
  passwordConfirm: {required: true},
}

After:
group.errors

{
  controls: {
    login: {required: true},
    password: {required: true},
    passwordConfirm: {required: true},
  }
}
* :- deprecates these methods in NgZone: overrideOnTurnStart, overrideOnTurnDone, overrideOnEventDone, overrideOnErrorHandler
- introduces new API in NgZone that may shadow other API used by existing applications.
* core: Before

import {NgIf} from &#39;angular2/core&#39;;

After

import {NgIf} from &#39;angular2/common&#39;;
* tooling: Before

import * as p from &#39;angular2/profile&#39;;
import * as t from &#39;angular2/tools&#39;;

After

import * as p from &#39;angular2/instrumentation&#39;;
import * as t from &#39;angular2/platform/browser&#39;;
* Before

import {DomAdapter} from &#39;angular2/core&#39;;

After

import {DomAdapter} from &#39;angular2/platform/common_dom&#39;;
* Before

import {Renderer} from &#39;angular2/render&#39;;

After

import {Renderer} form &#39;angular2/core&#39;;


<a name="2.0.0-alpha.44"></a>
# 2.0.0-alpha.44 (2015-10-15)


### Features

* **forms:** add input[type=number] value accessor (65c737f), closes #4014, closes #4761
* **ngUpgrade:** add support for upgrade/downgrade of injectables (d896e43), closes #4766
* **ngUpgrade:** faster ng2-&gt;ng1 adapter by only compiling ng1 once (053b7a5)
* **query:** add filter and reduce to QueryList (bfbf18d), closes #4710

### Bug Fixes

* **compiler:** attribute case in IE9 (b89c5bc), closes #4743
* **compiler:** explicitly support event bindings also on `&lt;template&gt;` elements (cec8b58), closes #4712
* **dart/transform:** Handle empty .ng_deps.dart files (5a50597)
* **dart/transform:** Parse directives agnostic of annotation order (efddc90)
* **forms:** emit value changes after errors and status are set (b716d23), closes #4714
* **style_compiler:** don’t resolve absolute urls that start with a `/` during compilation (a941fb0), closes #4763
* **style_compiler:** don’t touch urls in stylesheets and keep stylesheets with absolute urls in templates (7dde18b), closes #4740
* **testing:** let DOM adapter dictate XHR implementation for tests (d7ab5d4)
* **transformers:** show nice error message when an invalid uri is found (6436f96), closes #4731

### Code Refactoring

* **ngUpgrade:** renames and docs (059e8fa)

### BREAKING CHANGES

* ngUpgrade: - Changes the terminology to Adapter and upgrade/downgrade
- Removes the Module from the public API to prevent confusion


<a name="2.0.0-alpha.42"></a>
# 2.0.0-alpha.42 (2015-10-13)


### Features

* **build:** add tasks to watch and recompile js and dart (50e922f)
* **forms:** add minlength and maxlength validators (e82a35d), closes #4705

### Bug Fixes

* **build:** Fix serve.js.dev to build bundles (3b03660), closes #4700
* **docs:** minor @link fixes. (3a801c1), closes #4696
* **publish:** emit type declarations with CJS build (57649d1), closes #4706, closes #4708
* **test:** command compiler attr merge test in IE (e15e242)


<a name="2.0.0-alpha.41"></a>
# 2.0.0-alpha.41 (2015-10-13)


### Features

* **core:** desugar [()] to [prop] and (prop-change) (7c6130c), closes #4658
* **di:** change the params of Provider and provide to start with &#34;use&#34; (1aeafd3), closes #4684
* **di:** rename Binding into Provider (1eb0162), closes #4416, closes #4654
* **facade:** add fromISODate method (440fd11)
* **ngFor:** support a custom template (6207b1a), closes #4637
* **ngUpgrade:** support for content project from ng1-&gt;ng2 (cd90e6e)
* **ngUpgrade:** transclude content from ng2-&gt;ng1 (19c1bd7), closes #4640
* **test:** Add an external version of the test library (a1fa2e4)

### Bug Fixes

* **compiler:** merge `class` and `style` attributes from the element with the host attributes (eacc8e3), closes #4583, closes #4680
* **compiler:** shadow CSS @import test in some browsers (0def28e), closes #4629
* **docs:** Updated docs for default router location strategy (075011f), closes #4517
* **router:** properly read and serialize query params (8bc40d3), closes #3957, closes #4225, closes #3784
* **test_lib:** don&#39;t mock out XHR via MockXHR by default in tests (6abed8d), fixes #4539, closes #4682
* **typings:** add more missing typings. (aab0c57), closes #4636
* **typings:** fix typings which were previously unchecked (c178ad4), closes #4625
* **typings:** missing types in ListWrapper typings (597f79e)

### Code Refactoring

* **router:** use ApplicationRef to provide the first bootstrapped component as ROUTER_PRIMARY_COMPONENT automatically. (90191ce), closes #4643

### BREAKING CHANGES

* core: Before

```
&lt;cmp [(prop)]=&#34;field&#34;&gt; was desugared to &lt;cmp [prop]=&#34;field&#34; (prop)=&#34;field=$event&#34;&gt;
```

After
```
&lt;cmp [(prop)]=&#34;field&#34;&gt; is desugared to &lt;cmp [prop]=&#34;field&#34; (prop-change)=&#34;field=$event&#34;&gt;
```
* router: Before: bootstrap(MyComponent, [routerBindings(myComponent)]);
After: bootstrap(MyComponent, [ROUTER_BINDINGS]);


<a name="2.0.0-alpha.40"></a>
# 2.0.0-alpha.40 (2015-10-09)


### Features

* **angular_1_router:** add ngRouteShim module (aed34e1), closes #4266
* **animate:** adds basic support for CSS animations on enter and leave (39ce9d3), closes #3876
* **animate:** cross-browser compatibility (bffa2cb), closes #4243
* **Binding:** improve errors (0319417), fix #4358, closes #4360
* **browser:** support Edge (3b49652), closes #3667
* **build:** added a temporary fix to make test.unit.dart work (85ec34d)
* **change detection:** export SimpleChange (0a88e7b), closes #4337
* **change_detection:** added support for observable components and directives (e8e430e)
* **change_detection:** allow triggering CD form ChangeDetectorRef (63e7859), closes #4144
* **change_detection:** do not reparse AST when using generated detectors (d2d0715)
* **code size:** make assertionsEnabled() statically computable by dart2js (241632a), closes #4198
* **compile:** add HtmlParser, TemplateParser, ComponentMetadataLoader (9f576b0), closes #3839
* **compiler:** add TemplateCompiler (457b689), closes #4220
* **compiler:** add change detector generation (12dd44f), closes #4057
* **compiler:** add full directive metadata and validation logic (f93cd9c), closes #3880
* **compiler:** add stylesheet compiler (2384082), closes #3891
* **compiler:** allow to create ChangeDetectors from parsed templates (2fea0c2), closes #3950
* **compiler:** support creating template commands (0246b2a), closes #4142
* **core:** Add a long-form syntax for Angular bootstrapping. (97d1844), closes #3852
* **core:** Support multiple ChangeDetectors in a single LifeCycle. (4f57990)
* **core:** add sugar to use ContentChildren and ViewChildren as prop decorators (2e9de0b), closes #4237
* **core:** add support for @ContentChild and @ViewChild (c2a60f1), closes #4251
* **core:** add support for @HostBinding and @HostListener (df8e15c), closes #3996
* **core:** add support for @Property and @Event decorators (896add7), closes #3992
* **core:** add support for ContentChildren and ViewChildren (5dbe292)
* **core:** add syntax sugar to make @View optional (bd31b01)
* **core:** added afterContentInit, afterViewInit, and afterViewChecked hooks (d49bc43), closes #3897
* **core:** remove the (^ syntax and make all DOM events bubbling (60ce884), closes #3864
* **core:** renames Property into Input and Event into Output (adbfd29)
* **core:** support properties and events in addition to inputs and outputs to make transition easier (c9901c5), closes #4482
* **CORE_DIRECTIVES:** add NgStyle to CORE_DIRECTIVES (5f15363), fixes #4096, closes #4161
* **dart/transform:** Declare transformer outputs (2acc1ad)
* **dart/transform:** Record property metadata (64e8f93), closes #1800, closes #3267, closes #4003
* **dart/transform:** Track timing of transform tasks (0757265)
* **di:** add support for multi bindings (7736964)
* **docs:** document change detection profiler (4ec4dca)
* **docs:** document code size management tools for Dart (6532171)
* **docs:** document unused reflection info tracking (46f751b)
* **docs:** export type info for var and const exports (9262727), closes #3700
* **exception_handler:** changed ExceptionHandler to use console.error instead of console.log (3bb27de), closes #3812
* **facade:** add maximum method for ListWrapper (b5c4d8b)
* **forms:** make NgControl -&gt; NgValueAccessor dependency unidirectional (00a4b2e), closes #4421
* **http:** Add support for strings as http method names (34518f0), closes #4331
* **http:** xhr error listener invokes throw on EventEmitter (f2d3bdb), closes #2667
* **ng_for:** Add Even and Odd variables to ng_for (a15b679), closes #4181
* **NgFor:** $last property support (be95411), closes #3991
* **perf:** change detection profiler (8dd6c46), closes #4000
* **pipes:** add slice pipe that supports start and end indexes (c2043ec)
* **pipes:** add support for pure pipes (a8bdb69), closes #3966
* **query:** implement query update mechanism based on views. (5ebeaf7), closes #3973
* **query:** make QueryList notify on changes via an observable (3aa2047), closes #4395
* **query:** remove the 3-query-per-element limit (4efc4a5), closes #4336
* **render:** add generic view factory based on the template commands (1cf4575), closes #4367
* **router:** add angular 1.x router (fde026a)
* **router:** add reuse support for angular 1.x router (ddb62fe), closes #3698
* **router:** allow async routes to be defined with &#34;loader&#34; (ee32b1b)
* **router:** enforce convention of CamelCase names in route aliases (5298eb0), closes #4083
* **router:** hash-cons ComponentInstructions (e1a7e03)
* **router:** implement Router.isRouteActive (de37729)
* **router:** introduce new navigate method (d9036c6), closes #4040, closes #4074
* **router:** router-link-active CSS class support (36eb9d3), closes #3209
* **StringWrapper:** add support for JS slice method to string (0808eea)
* **TestComponentBuilder:** add #overrideBindings and #overrideViewBindings (f91c087), closes #4052
* **tests:** add helper to eval a module (2a126f7)
* **transformers:** record setters for query fields (589ce31), closes #4344
* **transformers:** update transformers to handle components without @View (a2e7ae5)
* **upgrade:** Allow including ng2/1 components in ng1/2 (8427863), closes #3539
* **upgrade:** support binding of Ng1 form Ng2 (8e1d2fb), closes #4542
* **upgrade:** support binding of Ng2 form Ng1 (09371a3), closes #4458
* **url_resolver:** Allow a developer to customize their package prefix (9cc1cd2), closes #3794
* **WebWorker:** Expose MessageBroker API (358908e), closes #3942
* **WebWorkers:** Add WebSocket MessageBuses for debugging apps (4ba4427), closes #3858
* track unused reflection data (8336881)

### Bug Fixes

* **.d.ts:** show unknown fields as ‘any’ not ‘void’. (a0b2408), closes #3637
* **analyzer:** fix dart analyzer errors (14fa007)
* **annotation_matcher:** fix typo with Directive matchers (841aa1a)
* **api:** align dart/js APIs (af2cd4d)
* **api:** remove DomRenderer from public API (105db02), closes #4187
* **api:** remove RecordViewTuple / cleanup NgFor (61b6a47)
* **api:** remove UNDEFINED (6db9f90)
* **api:** remove animation from public API (f7d46e7)
* **benchpress:** fix benchpress overreporting in chrome45 (0653b82), closes #4011, closes #4101
* **benchpress:** make benchpress fit for chrome 45 (67b9414), closes #3411, closes #3982
* **benchpress:** update build step, read and config (6ae9686), closes #4419
* **browser:** make Firefox to work with es6-shim (e166f6f)
* **bug:** reflect Dart interfaces from superclass as well (577ee37), fixes #4221, closes #4222
* **build:** Use Angular&#39;s testability API to wait for end of e2e tests (33593cf), closes #3911
* **build:** add config for outputting the missing test_lib.d.ts file (f6108c5)
* **build:** delete unreferenced typings on npm install (42e1b07), fixes #1636, closes #3940
* **build:** do not run build/pubbuild.dart twice (e72305e), closes #3831
* **build:** error when running `npm test` locally (bf4b75e), closes #3806
* **build:** lazy-require es6-shim in the a1 router to prevent npm/gulp issues (e4f94f0)
* **build:** lock dart dev version (43cca2d)
* **build:** make e2e tests faster (c2279dd), closes #3822
* **build:** switch to cjs output for es5. (e9ad100), closes #3974
* **build:** temporarily test dart with dart2js instead of pub serve (eb7839e)
* **bundle:** don&#39;t include System.config in dev bundle (a94f051), fixes #3826, closes #3862
* **bundles:** add explicit format: cjs for empty files. (ef61b81)
* **change_detection:** _throwError should not mask the original exception (cec4b36)
* **change_detection:** fixed reflect properties as attributes (a9ce454), closes #3761
* **change_detection:** update the right change detector when using ON_PUSH mode (195c5c2)
* **code size:** do not rely on Uri in BrowserDomAdapter (9dc1d6a), closes #4182
* **compiler:** Implement Token#toString for Operator (3b9c086), closes #4049
* **compiler:** const is not supported in IE9 and IE10 (b44c13b), closes #4465
* **compiler:** detect and report error for views with empty templateUrl (215c4aa), fixes #3762, closes #3768
* **compiler:** minor cleanups and fixes (0ed6fc4)
* **compiler:** remove attributes when expression in [attr.foo]=&#39;exp&#39; evaluates to null (045cc82), fixes #4150, closes #4163
* **ComponentUrlMapper:** support relative template URLs in Dartium (7c7888d), closes #2771, closes #3743
* **core:** Document the new bootstrap APIs. Also rename rootBindings() to platformBindings() to be more clear about what it is. (06f8330), closes #4218
* **core:** Fix type error (6c3c606)
* **core:** export bootstrap from core exports for JS (4fd9cc2)
* **core:** keep styles for `ViewEncapsulation.Native` isolated per component (0299d4a), fixes #4513, closes #4524
* **core:** make .toRx() return Subject (4a36fd8), fixes #4521, closes #4540
* **core:** remove NgZone_ and use NgZone instead (bba0248)
* **core:** set `ViewEncapsulation.Emulated` as the default again (a9aef8e), fixes #4494
* **css:** when compiling CSS, leave absolute imports alone (04b3dee), closes #4592
* **dart:** bad export in core.dart (984e7b8)
* **dart/transform:** Fix transformer output declaration (1f2302e)
* **dart/transform:** Handle export cycles (e7d65ad), closes #4370
* **dart/transform:** Run DeferredRewriter in the correct phase (811d4c0)
* **dart/transform:** Sanitize generated library names (ba6e0e1)
* **dart/transform:** Write correct ng_deps without deferred imports (c94f239), closes #4587
* **dart/transformer:** Correctly handle const object annotations (decdbea), closes #4481
* **debug:** make debug tools take ComponentRef (70586b6), closes #4203
* **DirectiveResolver:** Synced with latest changes (86bda28), closes #3928
* **dist:** don&#39;t distribute the HTML dart api docs (be6d92c), fixes #4115, closes #4211
* **dts generation:** add support for type aliases (d782616), closes #3952
* **dts generation:** rewrite the d.ts file code generator to fix bugs and apply type remap correctly (ad3b9cf)
* **examples:** Modifies web worker examples to be compatible with systemjs 0.18.10. (675cb87), closes #3630
* **exception_handler:** fix error messages of wrapped exceptions (f6cc573), closes #4117
* **exceptions:** NoAnnotationError message is not displayed (eaa20f6), closes #4215, closes #4223
* **facade:** workaround for lack of Symbol.iterator in es6-shim (390aacd), closes #4219, fixes #4216
* **fake_async:** remove unused variable (ddde711)
* **forms:** Also update viewModel in NgFormControl (70f6a46)
* **forms:** Update NgModel&#39;s viewModel when model changes (e36966b), closes #3627
* **forms:** avoid issues with nulls checking on validation status and other form states. (7714d6a), closes #4338
* **gulp:** use the new karma.Server api (758efba), closes #4375
* **http:** add missing semicolon (150cc22)
* **http:** allow using JSONP_INJECTABLES and HTTP_INJECTABLES in same injector (5725f71), fixes #3365, closes #3390
* **http:** change http interfaces to types (3d6e3c2), closes #4024
* **http:** change type declarations to interfaces and export EventEmitter (10437ab)
* **http:** throw if url is not string or Request (3525d8a), closes #4245, closes #4257
* **http/http:** allow for commonjs as ngHttp (16eb8ce), closes #3633
* **injector:** support getRootInjectors on dehydrated injectors. (92da543), closes #3760
* **injectors:** reset the construction counter in dynamic strategy. (272ad61), closes #3635
* **karma:** corrected race condition with RX loading (8dc509f)
* **karma:** socket.io 1.x transport is now called &#39;polling&#39; instead of &#39;xhr-polling&#39; (39e9bb6)
* **karma-dart-evalcache:** make the code compatible with karma 0.13.x (a649992)
* **ListWrapper:** make list slice in dart return empty list if start and end are inverted like JS (bced3aa)
* **location:** improve the &#39;No base href set&#39; error message (15ab6f6)
* **NgClass:** ignore empty and blank class names (73351ac), fixes #4033, closes #4173
* **npm_publish:** update transitive typings provided in npm distribution (2ebc74d)
* **parser:** detect and report interpolation in expressions (b039ec3), fixes #3645, closes #3750
* **pipes:** add triple ticks around async_pipe code sample (7b3161a), closes #4110
* **query:** clean-up queryref during dehydration (01cdd31), closes #3944, closes #3948
* **reflector:** merge prop metadata from getters and setters (15164a8), closes #4006
* **render:** keep bindings of components in content and view in the right order (6fe8b85), fixes #4522, closes #4523
* **render:** recurse into components/embedded templates not until all elements in a view have been visited (6d4bd5d), fixes #4551, closes #4601
* **router:** allow router-link to link to redirects (72e0b8f), closes #3335, closes #3624
* **router:** do not reuse common children with different parents (77e8304)
* **router:** load route config from async instructions (5e49d7e), fixes #23791558, closes #4146
* **router:** re-export of Type (b8be4bf), closes #3632, closes #3704
* **router:** recognize child components with empty segments (3099449), closes #4178
* **router:** subscribe should return subscription (5c95b37), closes #3491, closes #3695
* **router:** throw when generating non-terminal link (8aec215), closes #3979, closes #4092
* **router:** use StringWrapper.startsWith (6e0ca7f)
* **RouteRegistry:** initialize RouteParams.params (3791c4a), closes #3755
* **services:** export title service (e2f5d87), closes #4271
* **sfx:** Include ngHttp in SFX bundle (283415b), closes #3933
* **shims:** Don&#39;t rely on prefixed requestAnimationFrame (9679fc9), fixed #10, closes #4394
* **shims:** add requestAnimationFrame shim for IE9 and Android (4f56a01), fixes #4209
* **shims:** function.name to return empty string when no name (3a7b50f)
* **test:** Android browser does not support element.click() (c83207f)
* **test:** AngularProfiler should check before using modern APIs (abc4ef3)
* **test:** PostMessageBusSink tests failing in slow browsers (55290b9)
* **test:** StyleCompiler tests failing in Android browsers (9c97690), closes #4351
* **test:** StyleCompiler tests failing in Android browsers (d646463)
* **test:** do not set ng.probe when ng is null or undefined (df7f59b)
* **test:** error in karma when systemjs imports fail (7820086), closes #3846
* **test:** make `evalModule` faster by caching spawned modules in the browser (67c79ba)
* **test_lib:** add missing types (34deda5)
* **test_lib:** reexport fake_async via angular/test (687e7b5)
* **tests:** fix tests (8b725c7)
* **tests:** fixes public api spec (d60c7a9)
* **tslint:** fix d.ts file paths for node_modules dependencies (2628631)
* **Typings:** Output public constructors in .d.ts files (1926335), closes #3926, closes #3963
* **Typings:** Remove public exports added in 1926335b85af6c1fe56f4e36d0b95dcc92bb5c42 (787d1f9), closes #4147
* **typings:** emit spread parameters (a34d4c6), closes #3875
* **typings:** include static members (894af28), fixes #3175, closes #3780
* **typings:** repair broken type-checking for StringMap (208f3d4), closes #4487
* **typings:** repair broken typechecks (6093e28), fixes #4507, closes #4508
* **typings:** update test.typings for abstract superclasses (5458036)
* **upgrade:** assert correct interleaving of evaluation. (a562230)
* **ViewLoader:** provide componentId in missing template / templateUrl errors (3871f89)
* **web-workers:** fix bindings (1100c9b)
* **WebWorker:** Add zone support to MessageBus (f3da37c), closes #4053
* **WebWorker:** Fix Todo Server demo and add test to ensure the demo can bootstrap. (696edde), closes #3970
* **WebWorker:** Return boolean from `dispatchRenderEvent` (457eb5d)
* **WebWorker:** WebWorkerRenderer removes views after they&#39;re destroyed (9619636), closes #3240, closes #3894
* **wtf:** fix NgZone.run instrumentation (5f0a0fd), closes #3788
* **XhrBackend:** setRequestHeader takes a string arg (6b00b60), closes #4597
* &lt;template&gt; tag for browsers that do not suppor them (ddcfd46), closes #3636
* add test_lib.d.ts to type definitions in generated package.json (4ebb1a9)
* wtf paramater passing on scope (9afcb00), closes #3726

### Code Refactoring

* **angular_1_router:** use directives for route targets (5205a9e)
* **ChandeDetection:** Rename ChangeDetectorRef.markForCheck (cebd670), closes #3403
* **change_detection:** introduce enum ChangeDetectionStrategy (69926dd), closes #2497
* **compiler:** cleanup and preparation for integration (cc0c304), closes #4314
* **compiler:** remove unused code (d21c7bd)
* **compiler:** use the new compiler everywhere (76247b7), closes #3605
* **compiler:** various cleanups (7470ad1), closes #4346
* **forms:** use multibindings instead of query to get a list of validators (79994b2)
* **http:** use Observables in Http backends (a88e6f3), closes #4043, closes #2974, closes #4376
* **Lifecycle hooks:** move the hooks to their own module (lifecycle_hooks) (3d38ec8)
* **LifecycleEvent:** remove LifecycleEvent (8302aff), fixes #3924
* **ngProbe:** rename to ng.probe (4415855), closes #3786
* **router:** do not export RootRouter (41b019f)
* **router:** rename HTML5LocationStrategy to PathLocationStrategy (3963e0a), closes #3776
* **view:** remove hostActions (ac3f510), closes #3396
* **ViewEncapsulation:** rename to PascalCase (c349bbb), closes #3889
* export core APIs from angular2/core (f14b212), closes #3977
* make bindings/directives names consistent (ccfadb9)

### Chores

* **bundles:** switch bundler tool input from es6 to es5. (de9dc55), closes #4141
* **LifecycleEvent:** change to PascalCase / rename (551d9a1), closes #3863, closes #3851
* move core modules into core directory (38a5a2a)

### BREAKING CHANGES

* bundles: TraceurRuntime is no longer need when consuming the angular 2 bundles.
Shims or native support for ES6 Map, Set and Symbol are still needed (can be
provided by es6-shim.js or core.js).
* LifecycleEvent: - LifecycleEvent.onInit =&gt; LifecycleEvent.OnInit
- LifecycleEvent.onDestroy =&gt; LifecycleEvent.OnDestroy
- LifecycleEvent.onChange =&gt; LifecycleEvent.OnChanges
- LifecycleEvent.onCheck =&gt; LifecycleEvent.DoCheck
- LifecycleEvent.onAllChangesDone =&gt; LifecycleEvent.AfterContentChecked
- OnCheck.onCheck() =&gt; DoCheck.doCheck()
- OnChange.onChange() =&gt; OnChanges.onChanges()
- OnAllChangesDone.onAllChangesDone() =&gt; AfterContentChecked.afterContentChecked
*     This change moves the http module into angular2/, so its import
    path is now angular2/http instead of http/http.

    Many other modules have also been moved around inside of angular2,
    but the public API paths have not changed as of this commit.
* core: - `Renderer.registerComponent` now takes an additional argument.
* core: Before
&lt;div (^click)=&#34;onEventHandler()&#34;&gt;
  &lt;button&gt;&lt;/button&gt;
&lt;/div&gt;

After
&lt;div (click)=&#34;onEventHandler()&#34;&gt;
  &lt;button&gt;&lt;/button&gt;
&lt;/div&gt;
* di: Previously a content binding of a component was visible to the directives in its view with the host constraint. This is not the case any more. To access that binding, remove the constraint.
* pipes: Before:

@Pipe({name: &#39;date&#39;}) class DatePipe {} defines an impure pipe.

After:

@Pipe({name: &#39;date&#39;}) class DatePipe {} defines a pure pipe.
@Pipe({name: &#39;date&#39;, pure: false}) class DatePipe {} defines an impure pipe.
* query: ViewQuery no longer supports the descendants flag. It queries the whole
component view by default.
* query: Before: query.onChange(() =&gt; ...);
After: query.changes.subscribe((iterable) =&gt; {});
* router: The old method has been renamed to `router.navigateByUrl`.
Either change your navigation calls to use the DSL (preferred) or
call `router.navigateByUrl` instead.
* angular_1_router: Previously, route configuration took a controller constructor function as the value of
`component` in a route definition:

```
$route.config([
  { route: &#39;/&#39;, component: MyController }
])
```

Based on the name of the controller, we used to use a componentMapper service to
determine what template to pair with each controller, how to bind the instance to
the $scope.

To make the 1.x router more semantically alligned with Angular 2, we now route to a directive.
Thus a route configuration takes a normalized directive name:

```
$route.config([
  { route: &#39;/&#39;, component: &#39;myDirective&#39; }
])
```
* angular_1_router: In order to avoid name collisions, lifecycle hooks are now prefixed with `$`. Before:

```
MyController.prototype.onActivate = ...
```

After:

```
MyController.prototype.$onActivate = ...
```

Same for `$canActivate` (which now lives on the directive factory function),
`$canDeactivate`, `$canReuse`, and `$onDeactivate` hooks.
* ChandeDetection: - ChangeDetectorRef.requestCheck() =&gt; ChangeDetectorRef.markForCheck()
* change_detection: - change detection strategy type changes from string to ChangeDetectionStrategy
- CHECK_ONCE =&gt; ChangeDetectionStrategy.CheckOnce
- CHECKED =&gt; ChangeDetectionStrategy.Checked
- CHECK_ALWAYS =&gt; ChangeDetectionStrategy.CheckAlways
- DETACHED =&gt; ChangeDetectionStrategy.Detached
- ON_PUSH =&gt; ChangeDetectionStrategy.OnPush
- DEFAULT =&gt; ChangeDetectionStrategy.Default
- ON_PUSH_OBSERVE =&gt; ChangeDetectionStrategy.OnPushObserve
* compiler: - don&#39;t support DI bindings in `@View#directives` and `@View@pipes` any more in preparation of integrating the new compiler. Use `@Directive#bindings` to reexport directives under a different token instead.

Part of #3605
* compiler: - Removes `ChangeDetection`, use a binding for `ChangeDetectorGenConfig` instead
  to configure change detection.
- `RenderElementRef.renderBoundElementIndex` was renamed to `RenderElementRef.boundElementIndex`.
- Removes `ViewLoader`, use `XHRImpl` instead.
* compiler: - we don&#39;t mark an element as bound any more if it only contains text bindings
  E.g. &lt;div&gt;{{hello}}&lt;/div&gt;
  This changes the indices when using `DebugElement.componentViewChildren` / `DebugElement.children`.
- `@Directive.compileChildren` was removed,
  `ng-non-bindable` is now builtin and not a directive any more
- angular no more adds the `ng-binding` class to elements with bindings
- directives are now ordered as they are listed in the View.directives regarding change detection.
  Previously they had an undefined order.
- the `Renderer` interface has new methods `createProtoView` and `registerComponentTemplate`. See `DomRenderer` for default implementations.
- reprojection with `ng-content` is now all or nothing per `ng-content` element
- angular2 transformer can&#39;t be used in tests that modify directive metadata.
  Use `angular2/src/transform/inliner_for_test` transformer instead.
* compiler: - `Compiler.compileInHost` and all methods of `DynamicComponentLoader` don’t take `Binding` any more, only `Type`s. This is in preparation for the new compiler which does not support this.

Part of #3605
* forms: Before:

@Directive({selector: &#39;[credit-card]&#39;, bindings: [new Binding(NgValidator, {toAlias: forwardRef(() =&gt; CreditCardValidator)})]})
class CreditCardValidator {
  get validator() { return CreditCardValidator.validate; }
  static validate(c): StringMap&lt;string, boolean&gt; {...}
}

After:

function creditCardValidator(c): StringMap&lt;string, boolean&gt; {...}
@Directive({selector: &#39;[credit-card]&#39;, bindings: [new Binding(NG_VALIDATORS, {toValue: creditCardValidator, multi: true})]})
class CreditCardValidator {}
* http:  Http now returns Rx Observables directly, so calling .toRx() is no longer necessary. Additionally, Http calls are now cold, so backend requests will not fire unless .subscribe() is called.
* Lifecycle hooks: Lifecycle hooks now live in the `angular2/lifecycle_hooks` module.
They previously lived in the `metadata` module.
* LifecycleEvent: The `lifecycle` configuration for directive has been dropped.

Before

    // Dart
    @Component({lifecycle: const [LifecycleEvent.OnChanges], ...})
    class MyComponent implements OnChanges {
      void onChanges() {...}
    }

    // Typescript
    @Component({lifecycle: [LifecycleEvent.OnChanges], ...})
    class MyComponent implements OnChanges {
      onChanges(): void {...}
    }

    // ES5
    var MyComponent = ng.
    Component({lifecycle: [LifecycleEvent.OnChanges], ...}).
    Class({
      onChanges: function() {...}
    });

After

    // Dart
    @Component({...})
    class MyComponent implements OnChanges {
      void onChanges() {...}
    }

    // Typescript
    @Component({...})
    class MyComponent implements OnChanges {
      onChanges(): void {...}
    }

    // ES5
    var MyComponent = ng
      .Component({...})
      .Class({
        onChanges: function() {
        }
      });
* ngProbe: - ngProbe =&gt; ng.probe
* router: It&#39;s unlikely that any apps were explicitly referencing `RootRouter`, but if they were they should
prefer to use the `routerBindings` helper or the `ROUTER_BINDINGS` const exported from `angular2/router`
* router: `HTML5LocationStrategy` -&gt; `PathLocationStrategy`
* view: Replacement. Either direct DOM access or Renderer in WebWorkers.
* ViewEncapsulation: - ViewEncapsulation.EMULATED =&gt; ViewEncapsulation.Emulated
- ViewEncapsulation.NATIVE =&gt; ViewEncapsulation.Native
- ViewEncapsulation.NONE =&gt; ViewEncapsulation.None
*     Many dependencies that were previously exported from specific
    APIs are now exported from angular2/core. Affected exports, which
    should now be included from angular2/core include:

    angular2/forms
    angular2/di
    angular2/directives
    angular2/change_detection
    angular2/bootstrap (except for dart users)
    angular2/render
    angular2/metadata
    angular2/debug
    angular2/pipes
* - `routerDirectives` =&gt; `ROUTER_DIRECTIVES`
- `routerInjectables` =&gt; `ROUTER_BINDINGS`
- `ELEMENT_PROBE_CONFIG` =&gt; `ELEMENT_PROBE_BINDINGS`


<a name="2.0.0-alpha.35"></a>
# 2.0.0-alpha.35 (2015-08-18)


### Features

* **change_detection:** added an example demonstrating how to use observable models (52da220), closes #3684
* **change_detection:** added an experimental support for observables (cbfc9cb)
* **change_detection:** request a change detection check when  an event happens (5e6317f), closes #3679
* **compiler:** allow binding to className using class alias (a7a1851), closes #2364
* **coreDirectives:** add NgClass to coreDirectives (6bd95c1), closes #3534
* **dart/transform:** Support `part` directives (aa480fe), closes #1817
* **di:** added resolveAndInstantiate and instantiateResolved to Injector (06da60f)
* **http:** serialize search parameters from request options (77d3668), closes #2417, closes #3020
* **npm:** add typescript block to package.json (b5fb05b), closes #3590, closes #3609
* **npm:** publish bundles and their typings in npm distribution (7b3cca2), closes #3555
* **pipe:** added the Pipe decorator and the pipe property to View (5b5d31f), closes #3572
* **pipes:** changed PipeTransform to make onDestroy optional (839edaa)
* **PropertyBindingParser:** support onbubble-event as an alternate syntax for (^event) (1f54e64), fixes #3448, closes #3616
* **query:** allow to query for `TemplateRef` (585ea5d), closes #3202
* **query:** view query is properly updated when dom changes. (2150a8f), closes #3033, closes #3439
* **query_list:** delegate `toString` to `_results` array (35a83b4), closes #3004
* **refactor:** replaced ObservablePipe and PromisePipe with AsyncPipe (106a28b)
* **router:** auxiliary routes (ac6227e), closes #2775
* **router:** user metadata in route configs (ed81cb9), closes #2777, closes #3541
* **test:** find testabilities across dart js applications (1d65b38), closes #3611
* **testability:** option to disable tree walking (8f5360c)
* **typings:** allow declaration of reference paths (1f692ae), closes #3540
* **typings:** allow defining custom namespace for bundle (dfa5103), closes #2948, closes #3544
* **WebWorker:** Add WebWorker Image Filter Demo (84463cf)

### Bug Fixes

* **benchmarks:** remove reference to String.prototype.contains() (b6ee208), closes #3570
* **browser_adapter.ts:** baseElement.getAttribute (235dec2), closes #3214
* **compiler:** strip &lt;script&gt; tag from templates (748c2d6), fixes #2766, closes #3486
* **CSSClass:** change selector to ng-class (ff1b110), closes #3498
* **dart:** @proxy is a value, not a factory (b4a0629), fixes #3494
* **docs:** export bootstrap in core.ts but not in core.dart (5f7d4fa)
* **docs:** ng-non-bindable (f2f4b90)
* **exception_handler:** log errors that are thrown by the compiler (07b9be7)
* **NgClass:** take initial classes into account during cleanup (ed25a29), closes #3557
* **presubmit:** uses proper branch instead of hard coded (96e34c1), closes #3552
* **query:** do not visit dehydrated injectors. (6c9e712)
* **router:** fix regression with generating links to async routes (26d2ea8), closes #3650
* **router:** throw when component in route config is not defined (903a0f0), close #3265, closes #3569
* **test_lib:** run unit tests in default Documnent (a37de36), closes #3501, fixes #3475
* **Testability:** fix type error in getAllAngularTestability (dart) (574bbea)
* **testability:** properly throw when no testability available (841206c)
* **testability:** throw if no testability available (08dbe87)
* **transformers:** be more specific in the imports to rewrite (86eb46a), closes #3473, closes #3523
* **typescript:** update to typescript with fixed system emit (ac31191), closes #3594
* **UrlResolver:** encode URLs before resolving (4f5e405), fixes #3543, closes #3545
* **WebWorkers:** Run XHR requests on the UI (2968517), closes #3652
* improper use package name in facade (64ebf27)

### Code Refactoring

* **di:** Visibility.(Private|Public|PublicAndPrivate) (5c328ad)
* **pipes:** use Injector instead of pipe factories for pipe instantiation (2dcf714)
* Remove IQueryList (3894595), closes #3577
* Remove isDart from public API (b783738)
* rename all const to UPPER_CASE (60af19f), closes #3573
* rename annotations to metadata (ea66739), closes #3660

### Chores

* Remove IRequestOptions / IResponseOptions (512340e)
* disable dart for HTTP package (284dc67)

### BREAKING CHANGES

* CSSClass: The selector for the CSSClass directive was changed
from [class] to [ng-class]. The directive itself was
renamed from CSSClass to NgClass
* pipe:     Instead of configuring pipes via a Pipes object, now you can configure them by providing the pipes property to the View decorator.

    @Pipe({
      name: &#39;double&#39;
    })
    class DoublePipe {
      transform(value, args) { return value * 2; }
    }

    @View({
      template: &#39;{{ 10 | double}}&#39;
      pipes: [DoublePipe]
    })
    class CustomComponent {}
* pipes: Before:
  Angular called onDestroy on all pipes.

After:
  Angular calls onDestroy only on pipes that have the onDestroy method.
* typings:     The router was previously exported as ng.router in the
    angular.sfx.dev.js bundle, but now it is exported as ngRouter.
* Reasons:

1) Interfaces should not start with letter ‘I’
2) Interfaces do not help with mistype properties, but literal types do.
   - https://github.com/Microsoft/TypeScript/pull/3823
   - https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#strict-object-literal-assignment-checking
* Stop supporting http module in Dart. This is because Dart has a
well developed http package which should be used by Dart
customers instead.
* di: Rename:
- `PRIVATE` =&gt; `Visibility.Private`
- `PUBLIC` =&gt; `Visibility.Public`
- `PUBLIC_AND_PRIVATE` =&gt; `Visibility.PublicAndPrivate`
* pipes:     - Pipe factories have been removed.
    - PIpe names to pipe implementations are 1-to-1  instead of 1-to-*

 Before:
     class DateFormatter {
         transform(date, args){}
     }

     class DateFormatterFactory {
       supporst(obj) { return true; }
       create(cdRef) { return new DateFormatter(); }
     }
     new Pipes({date: [new DateFormatterFactory()]})

After
    class DateFormatter {
      transform(date, args){}
    }
    new Pipes({date: DateFormatter})
* 
* - `IS_DARTIUM` no longer exported
* Rename:
- `appComponentTypeToken` =&gt; `APP_COMPONENT`
- `coreDirectives` =&gt; `CORE_DIRECTIVES`
- `formDirectives` =&gt; `FORM_DIRECTIVES`
- `formInjectables` =&gt; `FORM_BINDINGS`
- `httpInjectables` =&gt; `HTTP_BINDINGS`
- `jsonpInjectables` =&gt; `JSONP_BINDINGS`
- `PROTO_CHANGE_DETECTOR_KEY` =&gt; `PROTO_CHANGE_DETECTOR`
- `appComponentRefPromiseToken` =&gt; `APP_COMPONENT_REF_PROMISE`
- `appComponentTypeToken` =&gt; `APP_COMPONENT`
- `undefinedValue` =&gt; `UNDEFINED`
- `formDirectives` =&gt; `FORM_DIRECTIVES`
- `DOCUMENT_TOKEN` =&gt; `DOCUMENT`
- `APP_ID_TOKEN` =&gt; `APP_ID`
- `MAX_IN_MEMORY_ELEMENTS_PER_TEMPLATE_TOKEN` =&gt; `MAX_IN_MEMORY_ELEMENTS_PER_TEMPLATE`
- `appBaseHrefToken` =&gt; `APP_BASE_HREF`
*  (maybe)
Well as long as our customers use public API this should not be a
* , but we have changed import structure as well asinternal names, so it could be breaking.

import:
  angular2/annotations =&gt; angular2/metadata

Classes:
  *Annotations =&gt; *Metadata
  renderer.DirectiveMetadata =&gt; renderer.RendererDirectiveMetadata
  renderer.ElementBinder =&gt; renderer.RendererElementBinder
  impl.Directive =&gt; impl.DirectiveMetadata
  impl.Component =&gt; impl.ComponentMetadata
  impl.View =&gt; impl.ViewMetadata


<a name="2.0.0-alpha.34"></a>
# 2.0.0-alpha.34 (2015-08-05)


### Features

* **compiler:** introduce schema for elements (d894aa9), closes #3353
* **core:** made directives shadow native element properties (3437d56)
* **md-button:** enhance button focus appearance. (6d280ea)
* **pipes:** replaces iterable and key value diffing pipes with services (392de4a)
* **router:** add `back()` support to `MockLocationStrategy` (60f38ea)
* **testability:** Expose function getAllAngularTestabilities (7b94bbf)
* **transformers:** add more information to factory debug reflection (be79942)
* **WebWorkers:** Add WebWorker Todo Example. Add support for more DOM events. (c5cb700)
* **WebWorkers:** Add WebWorker Todo Example. Add support for more DOM events. (d44827a)
* enable the decorators compiler option. (0bb78b7)
* export a proper promise type. (861be30)
* implement web-tracing-framework support (77875a2), closes #2610
* upgrade ts2dart to 0.7.1. (a62a6ba)

### Bug Fixes

* **bootstrap:** fix expressions containing bootstrap (fixes #3309) (2909576)
* **browser_adapter:** fix clearNodes() in IE (70bc485), fixes #3295, closes #3355
* **collection:** MapIterator.next() is not supported (Safari) (12e4c73), fixes #3015, closes #3389
* **compiler:** Allow components to use any style of selector. Fixes #1602 (c20a5d6)
* **core:** export LifeCycle at top-level modules (4e76cac), closes #3395
* **dart/transform:** Remove malfunctioning zone error handler (68a581a), closes #3368
* **decorators:** stop directives inheriting parent class decorators. (f7d7789)
* **docs:** add ViewDefinition, DirectiveMetadata to public API (d4ded1a), closes #3346
* **parser:** detect empty expression in strings to interpolate (4422819), fixes #3412, closes #3451
* **query:** view query should not be updated when subviews are attached. (34acef5)
* **render:** allow to configure when templates are serialized to strings (dd06a87), closes #3418, closes #3433
* **router:** ensure navigation via back button works (7bf7ec6), closes #2201
* **style_url_resolver:** fix data: url resolution (73b7d99)
* **testing:** Fixed race condition in WebWorker and Routing tests (eee2146)
* **XHRConnection:** use xhr status code (96eefdf), closes #2841
* remove unused imports (39b0286)

### Performance Improvements

* **change_detection:** do not check intermediate results (c1ee943)
* **change_detection:** do not generate onAllChangesDone when not needed (adc2739)
* **change_detection:** removed the currentProto property (71ea199)

### BREAKING CHANGES

* core:     Previously, if an element had a property, Angular would update that property even if there was a directive placed on the same element with the same property. Now, the directive would have to explicitly update the native elmement by either using hostProperties or the renderer.
* pipes:     Directives that previously injected Pipes to get iterableDiff or keyvalueDiff, now should inject IterableDiffers and KeyValueDiffers.
* DI:     Replace @Ancestor() with @Host() @SkipSelf()
    Replace @Unbounded() wwith @SkipSelf()
    Replace @Ancestor({self:true}) with @Host()
    Replace @Unbounded({self:true}) with nothing
    Replace new AncestorMetadata() with [new HostMetadata(), new SkipSelfMetadata()]
    Replace new UnboundedMetadata() with new SkipSelfMetadata()
    Replace new Ancestor({self:true}) with new HostMetadata()
* di:     Replace viewInjector with viewBindings
    Replace hostInjector with bindings


<a name="2.0.0-alpha.33"></a>
# 2.0.0-alpha.33 (2015-07-29)


### Features

* **benchmark:** add static_tree benchmark (854b5b7), closes #3196
* **bootstrap:** remove the need for explicit reflection setup in bootstrap code (3531bb7)
* **build:** initial SauceLabs setup (eebd736), closes #2347
* **change_detection:** generate checkNoChanges only in dev mode (71bb4b3)
* **change_detection:** provide error context for change detection errors (c2bbda0)
* **core:** provide an error context when an exception happens in an error handler (8543c34)
* **dart/transform:** Populate `lifecycle` from lifecycle interfaces (8ad4ad5), closes #3181
* **di:** added context to runtime DI errors (5a86f85)
* **exception_handler:** change ExceptionHandler to output context (fdf226a)
* **exception_handler:** print originalException and originalStack for all exceptions (e744409)
* **http:** call complete on request complete (6fac901), closes #2635
* **http.ts:** export BrowserXHR (8a91d71), closes #2641
* **lang:** added &#34;context&#34; to BaseException (8ecb632)
* **router:** use querystring params for top-level routes (fdffcab), closes #3017
* **testability:** hook zone into whenstable api with async support (a8b75c3)
* **transformers:** directive aliases in Dart transformers (fix #1747) (fd46b49)
* **url_resolver:** support package: urls (fixes #2991) (408618b)

### Bug Fixes

* **.d.ts:** Correct new Type interface return type (78fdf9a), closes #2399, closes #3316
* **build:** don&#39;t trigger travis on g3sync branch (61b7703)
* **change_detection:** convert interpolated null values to empty strings (345fa52), fixes #3007, closes #3271
* **class:** allow class names with mixed case (a8b5725), fixes #3001, closes #3264
* **class:** correctly clean up on destroy (1438922), fixes #3249, closes #3256
* **compiler:** prevent race conditions (5ec67ee), fixes #3206, closes #3211
* **core:** fix type error in setElementProperty (448264b), closes #3279
* **dart/transform:** Handle mixed lifecycle specs (23cd385), closes #3276
* **element_injector:** do not throw when cannot find element when trying to report an error (03c8e74)
* **lowercase,uppercase:** make stateless pipes (4dc6d74), closes #3173, closes #3189
* **presubmit:** corrected user/email for git push (e40ff36)
* **projection:** allow more bound render elements than app elements. (46502e4), fixes #3236, closes #3247
* **projection:** allow to project to a non text node (b44b06c), fixes #3230, closes #3241
* **query:** the view should not be visible to @Query. (1d45029)
* **transformer:** Don&#39;t throw on annotations that don&#39;t match a descriptor. (f575ba6), closes #3280
* **transformer:** Fix generation of `annotations` argument when registering functions. (2faa898)
* **transformer:** Loggers now are per zone and each transform runs in its own zone (bd65b63)
* **typings:** test our .d.ts with --noImplicitAny (19d8b22)
* **url_resolver:** in Dart make package urls relative to AppRootUrl (469afda)
* addresses a couple ddc type errors (f1e4292)

### Code Refactoring

* **exception_handler:** unified all exception handling (70792c7)
* **shadow_dom:** remove `ShadowDomStrategy` in favor of `@View(encapsulation)` (16e3d7e)

### Reverts

* style(ngFor): add whitespace to `Directive` annotation (74b311a)

### BREAKING CHANGES

* exception_handler:     Previously it was possible to pass a custom error reporter to bootstrap, which was used only during the construction of Injector. This had limited utility, so this capability has been removed.
* shadow_dom: :- `ShadowDomStrategy` was removed. To specify the encapsulation of a component use `@View(encapsulation: ViewEncapsulation.NONE | ViewEncapsulation.EMULATED | ViewEncapsulation.NATIVE)`
- The default encapsulation strategy is now `ViewEncapsulation.EMULATED` if a component contains styles and `ViewEncapsulation.NONE` if it does not. Before this was always `NONE`.
- `ViewLoader` now returns the template as a string and the styles as a separate array
* class: View renderer used to take normalized CSS class names (ex. fooBar for foo-bar).
With this change a rendered implementation gets a calss name as specified in a
template, without any transformations / normalization. This change only affects
custom view renderers that should be updated accordingly.
* bootstrap: :
Dart applications and TypeScript applications meant to transpile to Dart must now
import `package:angular2/bootstrap.dart` instead of `package:angular2/angular2.dart`
in their bootstrap code. `package:angular2/angular2.dart` no longer export the
bootstrap function. The transformer rewrites imports of `bootstrap.dart` and calls
to `bootstrap` to `bootstrap_static.dart` and `bootstrapStatic` respectively.


<a name="2.0.0-alpha.32"></a>
# 2.0.0-alpha.32 (2015-07-21)


### Features

* **build:** require parameter types (de18da2), fixes #2833
* **change_detection:** added support for ObservableList from package:observe (d449ea5)
* **compiler:** Support $baseUrl in HTML attributes when loading a template. (e942709)
* **compiler:** attach components and project light dom during compilation. (b1df545), closes #2529
* **core:** add ability to reflect DOM properties as attributes (903ff90), fixes #2910
* **facade:** add getTypeNameForDebugging function (ccb4163)
* **forms:** Export NgSelectOption directive (f74d97e)
* **http:** add support for JSONP requests (81abc39), closes #2905, closes #2818
* **pipes:** changed .append to .extend (4c8ea12)
* **router:** add interfaces for route definitions in RouteConfig (4d28167), closes #2261
* **transformers:** expose DI transformer for use by packages (2bc1217), closes #2814
* **transformers:** implement initializing deferred libraries (5cc84ed)
* FunctionWithParamTokens.execute now returns the value of the function (3dd05ef), closes #3131
* upgrade ts2dart to 0.6.9. (3810e4b)

### Bug Fixes

* **api_docs:** slightly more accurate description of Dart overrideOnEventDone (a4915ad)
* **api_docs:** slightly more accurate description of TS overrideOnEventDone (fe3a559)
* **build:** clang-format (66ec4d1)
* **change_detect:** Handle &#39;$&#39; in change detector strings (f1e8176)
* **change_detect:** Sort `DirectiveMetadata` properties during processing (b2a0be8)
* **content_projection:** allow to project text nodes to a place without bindings (a472eac), fixes #3163, closes #3179
* **di:** do not rely on the fact that types are canonicalized (2147ce4)
* **di:** fixed dynamic component loading of components created in child injector (5749692)
* **di:** fixed types (2f08ed8)
* **di:** instatiate services lazily (7531b48)
* **element_injector:** inject the containing change detector ref to directives (7879761)
* **examples:** add a couple entrypoints, adjust pubspec, fix change detector bug in Dart (b03560b)
* **facade:** use base element to get base href (8296dce)
* **forms:** default the initial value of Control to null (5b597de)
* **forms:** do not reset the value of the input when it came from the view (b123159)
* **html_adapter:** Implement hasAttribute and getAttribute. (e988f59)
* **ng_for:** fixed ng_for to pass a change detector ref to the pipe registry (583c5ff)
* **publish:** add force flag for pub publish script (621604d), closes #3077
* **renderer:** handle empty fragments correctly (61c7357), closes #3100
* **router:** improve error for missing base href (011fab3), closes #3096
* **router:** improve error messages for routes with no config (8bdca5c), closes #2323
* **router:** throw when reserved characters used in route definition (c6409cb), closes #3021
* **transformers:** fix sort order for reflective imports (762a94f)
* **view_manager:** allow to create host views even if there is an embedded view at the same place. (116b64d)

### Code Refactoring

* **di:** removed @Parent (6f4a39c)
* **LifecycleEvent:** change from onInit to Lifecycle.onInit (b73ba68), closes #2928
* **views:** split `ViewManager/ViewContainerRef.createView` into 2 methods (f42382d), closes #3114

### Performance Improvements

* **dom:** Only send values for existing properties to js interior (153660f), closes #3149

### BREAKING CHANGES

* di:     The @Parent annotation has been removed. Use @Ancestor instead.
    @Parent was used to enforce a particular DOM structure (e.g., a pane component is a direct child of the tabs component).
    DI is not the right mechanism to do it. We should enforce it using schema instead.
* LifecycleEvent: 
* views: :
`ViewManager.createView` / `ViewContainerRef.create` have been split into 2 methods:

- `createHostView` which takes dynamically created bindings
- `createEmbeddedView` which takes the newly introduced `TemplateRef`

The new type `TemplateRef` is the combination of a `ProtoViewRef` and and `ElementRef`
from the same place. Use `TemplateRef` when working with embedded views in
`ng-if`, `ng-for`, ... instead of `ProtoViewRef`.

Also, `ProtoViewRef` is no more injectable, but `TemplateRef` is.

First part of #1989 to clean up manual content projection.
* compiler: :- shadow dom emulation no longer
  supports the `&lt;content&gt;` tag. Use the new `&lt;ng-content&gt;` instead
  (works with all shadow dom strategies).
- removed `DomRenderer.setViewRootNodes` and `AppViewManager.getComponentView`
  -&gt; use `DomRenderer.getNativeElementSync(elementRef)` and change shadow dom directly
- the `Renderer` interface has changed:
  * `createView` now also has to support sub views
  * the notion of a container has been removed. Instead, the renderer has
    to implement methods to attach views next to elements or other views.
  * a RenderView now contains multiple RenderFragments. Fragments
    are used to move DOM nodes around.

Internal changes / design changes:
- Introduce notion of view fragments on render side
- DomProtoViews and DomViews on render side are merged,
  AppProtoViews are not merged, AppViews are partially merged
  (they share arrays with the other merged AppViews but we keep
  individual AppView instances for now).
- DomProtoViews always have a `&lt;template&gt;` element as root
  * needed for storing subviews
  * we have less chunks of DOM to clone now
- remove fake ElementBinder / Bound element for root text bindings
  and model them explicitly. This removes a lot of special cases we had!
- AppView shares data with nested component views
- some methods in AppViewManager (create, hydrate, dehydrate) are iterative now
  * now possible as we have all child AppViews / ElementRefs already in an array!
* pipes:     Pipes.append has been renamed into Pipes.extend.
    Pipes.extend prepends pipe factories instead of appending them.


<a name="2.0.0-alpha.31"></a>
# 2.0.0-alpha.31 (2015-07-14)


### Features

* **build:** Allow building in windows without admin priviledges (f1f5784), closes #2873
* **forms:** changed all form directives to have basic control attributes (3f7ebde)
* **license:** include license files in dev and dev.sfx bundles (1eab4f5)
* **pipes:** add date pipe (b716046), closes #2877
* **pipes:** add number (decimal, percent, currency) pipes (3143d18)
* **pipes:** add static append method to Pipes (1eebcea), closes #2901
* **query:** initial implementation of view query. (7ee6963), closes #1935
* **router:** introduce matrix params (5677bf7), closes #2774, closes #2989
* **router:** lifecycle hooks (a9a552c), closes #2640
* **test:** add test bundle (71c65b4)
* **zone:** add &#34;on event done&#34; zone hook (0e28297)
* upgrade clang-format to v1.0.28. (45994a5)

### Bug Fixes

* **build:** clang-format (df877a7)
* **build:** reduce the deploy upload. (4264bd3)
* **build:** remove the travis deploy step, which is broken. (206c9bd)
* **compiler:** keep `DOM.hasProperty` in sync between browser and transformer. (b3a763a), fixes #2984, closes #2981
* **css_shim:** fixes multiple uses of polyfill-unscoped-rule. (749d043)
* **di:** do not use exceptions to detect if reflection is enabled (a621046)
* **di:** hostInjector and viewInjector support nested arrays (0ed5dd0)
* **di:** removed default visibility (04baa46)
* **example:** add missing todo (1427d73)
* **package.json:** move some deps into dev deps. (546a8f9), closes #2448
* **router:** ensure that page refresh with hash URLs works (c177d88), closes #2920
* **router:** export lifecycle hooks in bundle (97ef1c2)
* **router:** fix broken `HashLocationStrategy` string issue for dart (d6dadc6)
* **transform:** handle multiple interfaces in directive processor (ac50ffc), closes #2941
* **transformer:** Event getters now use property name not event name (cf103de)
* **transformer:** fix &#39;pub build&#39; in examples (6258929)
* **tsconfig:** target should be lower case (0792f1a), closes #2938

### Code Refactoring

* **pipes:** rename PipeRegistry to Pipes (9a70f84)

### BREAKING CHANGES

* pipes:     This change renames all instances of PipeRegistry to Pipes.
    As part of this change, the former &#34;defaultPipes&#34; export is
    now a Pipes instance, instead of a map. The map that was previously
    called &#34;defaultPipes&#34; no longer exists, but may be accessed via
    defaultPipes.config.
* di:     Directives will use the Unbounded visibility by default, whereas before the change they used Self


<a name="2.0.0-alpha.30"></a>
# 2.0.0-alpha.30 (2015-07-08)


### Features

* **NgStyle:** Export NgStyle in angular2/directives (edf5053), closes #2878
* **router:** support deep-linking to siblings (286a249), closes #2807
* **transformer:** Support @Injectable() on static functions (7986e7c)
* **typings:** mark void methods in angular2.d.ts (a56d33d)
* upgrade t2dart to 0.6.8. (d381c5f)

### Bug Fixes

* **.d.ts:** correct ComponentAnnotation inheritance (12a427e), closes #2356
* **angular2.d.ts:** show typing for Component, etc (b10d7a2)
* **change_detection:** do not coalesce records with different directive indices (d277442)
* **change_detection:** throw ChangeDetectionError in JIT mode (c2efa23)
* **compiler:** detect and strip data- prefix from bindings (cd65fc2), fixes #2687, closes #2719
* **di:** injecting null causes a cyclic dependency (d1393b0)
* **forms:** Remove cyclic dependency (e5405e4), closes #2856
* **Http:** add support for headers (883b506)
* **router:** allow generating links with numeric params (d828664)
* **router:** child routers should delegate navigation to the root router (1c94c32)
* **transformer:** Fix string interpolation for bindings. (311b477)
* **transformer:** Put paramater data in the same order as the reflected version. (2b45bd2)
* **transformer:** Support prefixed annotations in the transformer. (9e1158d), closes #2754
* handle errors w/o file information. (e69af1a)


<a name="2.0.0-alpha.29"></a>
# 2.0.0-alpha.29 (2015-07-01)


### Features

* **async:** added PromiseWrapper.wrap (b688dee)
* **benchpress:** initial support for firefox (0949a4b), closes #2419
* **build:** add tslint to the build. (bc585f2)
* **di:** changed InstantiationError to print the original stack (eb0fd79)
* **di:** removed app injector (f0e962c)
* **facade:** add ListWrapper.toJSON method (2335075)
* **http:** refactor library to work in dart (55bf0e5), fixes #2415
* **lang:** added originalException and originalStack to BaseException (56245c6)
* **NgStyle:** add new NgStyle directive (b50edfd), closes #2665
* **pipes:** add limitTo pipe (0b50258)
* **pipes:** support arguments in transform function (600d53c)
* **router:** support deep-linking to anywhere in the app (f66ce09), closes #2642
* **transformers:** provide a flag to disable inlining views (dcdd730), closes #2658
* upgrade clang-format and gulp-clang-format. (1f7296c)

### Bug Fixes

* **build:** Reduce rx typings to what we actually require. (8bab6dd)
* **build:** add missing return types now enforced by linter (4489199)
* **build:** fix paths in `test.typings` task (1c8a589)
* **bundle:** don’t bundle traceur/reflect into benchpress (da4de21)
* **bundle:** don’t bundle traceur/reflect into benchpress - amended change (d629ed7)
* **change detectors:** Fix deduping of protos in transformed dart mode. (73a939e)
* **compiler:** don&#39;t trigger duplicated directives (0598226), fixes #2756, closes #2568
* **docs:** link to clang-format (f1cf529)
* **docs:** to run js test &#39;gulp docs&#39; is needed (3e65037), closes #2762
* **dynamic_component_loader:** check whether the dynamically loaded component has already been destroyed (d6cef88), fixes #2748, closes #2767
* **Router:** mark Pipeline and RouteRegistry as Injectable (eea989b), fix #2755
* **transformer:** Add getters for `events`. (5a21dc5), closes #2725
* **transformer:** Don&#39;t hang on bad urls and log better errors (d037c08), closes #2605
* **transformer:** Fix annotation_matcher for NgForm directive. (9c76850)
* **typings:** Minor issues preventing angular2.d.ts from working in TS 1.4. (7a4a3c8)
* export top-level pipe factories as const (393f703)

### Code Refactoring

* **di:** unified di injector and core injector (22d3943)
* **Http:** remove HttpFactory (146dbf1), closes #2564

### Performance Improvements

* **Compiler:** do not resolve bindings for cached ProtoViews (7a7b3a6)

### Documentation

* **Http:** add docs about breaking changes with EventEmitter/Observable (34eaf65)

### BREAKING CHANGES

* di: THe appInjector property has been removed. Instead use viewInjector or hostInjector.
* Http:     The Http module previously would return RxJS Observables from method calls
    of the Http class. In order to support Dart, the module was refactored to
    return the EventEmitter abstraction instead, which does not contain the same
    combinators or subscription semantics as an RxJS Observable. However, the
    EventEmitter provides a toRx() method which will return an RxJS Subject,
    providing the same subscription and combinator conveniences as were
    available prior to this refactor.

    This is temporary, until issue #2794 is resolved, when Observables will
    again be returned directly from Http class methods.
* di: :
* InjectAsync and InjectLazy have been removed
* toAsyncFactory has been removed
* Http:  HttpFactory is no longer available.    This factory provided a function alternative to the `request` method of the
    Http class, but added no real value. The additional factory required an
    additional IHttp interface, an odd way to inject while preserving type information
    (`@Inject(HttpFactory) http:IHttp`), and required additional documentation in the
    http module.


<a name="2.0.0-alpha.28"></a>
# 2.0.0-alpha.28 (2015-06-24)


### Features

* **compiler:** detect dangling property bindings (d7b9345), closes #2598
* **CSSClass:** add support for string and array expresions (8c993dc), closes #2025
* **element_injector:** support multiple injectables with the same token (c899b0a)
* **host:** limits host properties to renames (92ffc46)
* **mock:** add mock module and bundle (2932377), closes #2325
* **query:** added support for querying by var bindings (b0e2ebd)
* **render:** don’t use the reflector for setting properties (0a51ccb), closes #2637
* **router:** add support for hash-based location (a67f231), closes #2555
* **router:** enforce usage of ... syntax for parent to child component routes (2d2ae9b)
* **transformers:** inline styleUrls to view directive (f2ef90b), closes #2566
* **typings:** add typing specs (24646e7)
* add constructors without type arguments. (35e882e)
* remove MapWrapper.clear(). (9413620)
* remove MapWrapper.contains(). (dfd3091)
* remove MapWrapper.create()/get()/set(). (be7ac9f)
* update clang-format to 1.0.21. (254e58c)
* upgrade ts2dart to 0.6.4. (58b38c9)

### Bug Fixes

* **annotations:** swap DirectiveArgs &amp; ComponentArgs (dcc4bc2)
* **benchmarks:** add waits for naive scrolling benchmark to ensure loading (d8929c1), closes #1706
* **benchpress:** do not throw on unkown frame timestamp event (ed3af5f), closes #2622
* **change detection:** preserve memoized results from pure functions (5beaf6d)
* **compiler:** make text interpolation more robust (9d4111d), fixes #2591
* **docs:** Fix docs for Directive.compileChildren (9700e80)
* **injectors:** sync injector tree with dom element tree. (d800d2f)
* **parse5:** do not try to insert empty text node (0a2f6dd)
* **render:** fix failing tests in dynamic_component_loader.ts (6149ce2)
* **router:** return promise with error handler (bc798b1)
* **ShadowDomStrategy:** always inline import rules (1c4d233), fixes #1694
* **transformer:** Throw unimplemented errors in HtmlAdapter. (f9d72bd), closes #2624, closes #2627
* **views:** remove dynamic component views, free host views, free embedded views (5dee8e2), closes #2472, closes #2339
* **XHRImpl:** file:/// and IE9 bugs (cd735c4)

### Code Refactoring

* **pipes:** removed pipes from properties (20a8f0d)
* **render:** cleanup access to native dom elements (c8bdacb), closes #2712, closes #2476
* **render:** use `RenderElementRef` in all renderer methods (ba9fecd), closes #2706

### BREAKING CHANGES

* pipes: This PR remove an ability to use pipes in the properties config. Instead, inject the pipe registry.
* render: :- rename `ElementRef.domElement` to `ElementRef.nativeElement`
- add `Renderer.getNativeElementSync` to make the app side
  less dependent on the dom renderer.
- don’t use `ElementRef.nativeElement` in directives but
  use the methods on `Renderer` directly.
- Removed `ElementRef.setAttribute`. Use `Renderer.setElementAttribute` instead.

Last part of #2476
* render: :- Almost all methods in `Renderer` now take a `RenderElementRef` instead
  of a `ViewRef` + `boundElementIndex`.
- These methods can be called with the `ElementRef` from the app side
  directly.

Related to #2476
* views: - `Compiler.compile` has been removed, the only way to compile
  components dynamically is via `Compiler.compileInHost`
- `DynamicComponentLoader.loadIntoExistingLocation` has changed:
  * renamed into `loadIntoLocation`
  * will always create the host element as well
  * requires an element with a variable inside of the host component view
    next to which it will load new component.
- `DynamicComponentLoader.loadNextToExistingLocation` was renamed into
  `DynamicComponentLoader.loadNextToLocation`
- `DynamicComponentLoader.loadIntoNewLocation` is removed
  * use `DynamicComponentLoader.loadNextToLocation` instead
    and then move the view nodes
    manually around via `DomRenderer.getRootNodes()`
- `AppViewManager.{create,destroy}Free{Host,Embedded}View` was removed
  * use `AppViewManager.createViewInContainer` and then move the view nodes
    manually around via `DomRenderer.getRootNodes()`
- `Renderer.detachFreeView` was removed. Use `DomRenderer.getRootNodes()`
  to get the root nodes of a view and detach them manually.
* compiler:  compiler will throw on binding to non-existing properties.
Till now it was possible to have a binding to a non-existing property,
ex.: `&lt;div [foo]=&#34;exp&#34;&gt;`. From now on this is compilation error - any
property binding needs to have at least one associated property:
eaither on an HTML element or on any directive associated with a
given element (directives&#39; properites need to be declared using the
`properties` field in the `@Directive` / `@Component` annotation).
* render: :- host actions don&#39;t take an expression as value any more but only a method name,
  and assumes to get an array via the EventEmitter with the method arguments.
- Renderer.setElementProperty does not take `style.`/... prefixes any more.
  Use the new methods `Renderer.setElementAttribute`, ... instead

Part of #2476


<a name="2.0.0-alpha.27"></a>
# 2.0.0-alpha.27 (2015-06-17)


### Features

* **AstTranformer:** add support for missing nodes (da60381)
* **BaseRequestOptions:** add merge method to make copies of options (93596df)
* **benchpress:** add mean frame time metric (6834c49), closes #2474
* **benchpress:** more smoothness metrics (35589a6)
* **broccoli:** add diffing MergeTrees plugin (4ee3fda), closes #1815, closes #2064
* **broccoli:** improve merge-trees plugin and add &#34;overwrite&#34; option (dc8dac7)
* **build:** add `test.unit.dartvm` for a faster roundtrip of dartvm tests (46eeee6)
* **change detect:** Throw on attempts to use dehydrated detector (b6e95bb)
* **dart/change_detect:** Add type to ChangeDetector context (5298055), closes #2070
* **dart/transform:** Add onInit and onCheck hooks in Dart (17c6d6a)
* **dart/transform:** Allow absolute urls in templates (a187c78)
* **dart/transform:** Record Type interfaces (dc6e7eb), closes #2204
* **dart/transform:** Use the best available Change Detectors (8e3bf39), closes #502
* **diffing-broccoli-plugin:** support multiple inputTrees (41ae8e7), closes #1815, closes #2064
* **Directive:** Have a single Directive.host which mimics HTML (f3b4937), fixes #2268
* **e2e:** added e2e tests for forms (552d1ed)
* **ElementInjector:** throw if multiple directives define the same host injectable (6a6b43d)
* **Events:** allow a different event vs field name (29c72ab), closes #2272, closes #2344
* **facade:** add isMap method (548f3dd)
* **FakeAsync:** check pending timers at the end of fakeAsync in Dart (53694eb)
* **forms:** added hasError and getError methods to all controls (1a4d237)
* **forms:** changed forms to capture submit events and fires synthetic ng-submit events (5fc23ca)
* **forms:** export validator directives as part of formDirectives (73bce40)
* **forms:** set exportAs to form for all form related directives (e7e82cb)
* **forms.ts:** formInjectables with FormBuilder (a6cb86b), closes #2367
* **Http:** add Http class (b68e561), fixes #2530
* **http:** add basic http service (2156810), fixes #2028
* **Parser:** implement Unparser (331a051), fixes #1949, closes #2395
* **Parser:** support if statements in actions (7d32879), fixes #2022
* **query:** adds support for descendants and more list apis. (355ab5b)
* **query:** notify on changes (5bfcca2)
* **router:** add routing to async components (cd95e07)
* **router:** allow configuring app base href via token (cab1d0e)
* **transform:** update for Directive.host (591f742)
* **transformers:** updated transformers (e5419fe)
* **View:** add support for styleUrls and styles (ac3e624), fixes #2382
* **view:** added support for exportAs, so any directive can be assigned to a variable (69b75b7)
* adjust formatting for clang-format v1.0.19. (a6e7123)
* allow Type.annotations = Component(...).View(...) (b2c6694), closes #2577
* support decorator chaining and class creation in ES5 (c3ae34f), closes #2534
* update ts2dart to 0.6.1. (9613772)
* upgrade to clang-format v1.0.19. (1c2abbc)

### Bug Fixes

* **analzyer:** removed unused imports (902759e)
* **benchmarks:** Do not apply the angular transformer to e2e tests (cee2682), fix #2454
* **bootstrap:** temporary disable jit change detection because of a bug in handling pure functions (9908def)
* **broccoli:** ensure that inputTrees are stable (928ec1c)
* **build:** Minify files for angular2.min.js bundle (76797df)
* **build:** ensure that asset files are copied over to example directories (60b97b2)
* **build:** only pass ts files to ts2dart transpilation. (b5431e4)
* **bundle:** makes interfaces.ts non-empty when transpiled. (83e99fc)
* **change detect:** Fix bug in JIT change detectors (e0fbd4b)
* **ci:** remove non-existent gulp task from test_e2e_dart (1cf807c), fixes #2509
* **Compiler:** fix text nodes after content tags (d599fd3), fixes #2095
* **dart/transform:** Don&#39;t set ReflectionCapabilities over an async gap (d1b35f9)
* **dartfmt:** don&#39;t break win32 command line limit (617d693), closes #2420, closes #1875
* **diffing-broccoli-plugin:** wrapped trees are always stable (7611f92)
* **DirectiveMetadata:** add support for events, changeDetection (b4e82b8)
* **docs:** Working generated angular2.d.ts (7141c15)
* **docs:** ensure no duplicates in alias names of docs (05d02fa)
* **docs:** order class members in order of declaration (ea27704), fixes #2569
* **docs:** update link paths in annotations (dd23bab), fix #2452, closes #2475
* **dynamic_component_loader:** Fix for ts2dart issue (bbfb4e1)
* **dynamic_component_loader:** implemented dispose for dynamically-loaded components (21dcfc8)
* **element_injector:** changed visibility rules to expose hostInjector of the component to its shadow dom (c51aef9)
* **forms:** fixed the handling of the select element (f1541e6)
* **forms:** fixed the selector of NgRequiredValidator (35197ac)
* **forms:** getError does not work without path (a858f6a)
* **forms:** updated form examples to contain select elements (c34cb01)
* **JsonPipe:** always transform to json (e77710a)
* **life_cycle:** throw when recursively reentering LifeCycle.tick (af35ab5)
* **locals:** improved an error message (4eb8c9b)
* **ng_zone:** updated zone not to run onTurnDown when invoking run synchronously from onTurnDone (15dab7c)
* **npm:** update scripts and readme for npm packages. (8923103), closes #2377
* **Parser:** Parse pipes in arguments (f974532), fixes #1680
* **router:** avoid two slash values between the baseHref and the path (cdc7b03)
* **router:** do not prepend the root URL with a starting slash (e372cc7)
* **router:** ensure that root URL redirect doesn&#39;t redirect non-root URLs (73d1525), closes #2221
* **router:** rethrow exceptions (5782f06), closes #2391
* **selector:** select by attribute independent of value and order (9bad70b), closes #2513
* **shadow_dom:** moves the imported nodes into the correct location. (92d5658)
* **ShadowDom:** fix emulation integration spec to test all 3 strategies (6e38515), fixes #2546
* **shrinkwrap:** restore fsevents dependency (833048f), fixes #2511
* **view:** local variables override local variables set by ng-for (d8e2795)
* Class factory now adds annotations (bc9e482)
* Improve error message on missing dependency (2ccc65d)
* add types for ts2dart&#39;s façade handling. (f3d7418)
* compare strings with StringWrapper.equals (633cf63), fixes #2458
* corrected var/# parsing in template (a418397), closes #2084
* declare var global. (1346660)
* improve type of TreeNode.children. (c3c2ad1)
* improve type safety by typing `refs`. (4ae7df2)
* include error message in the stack trace (8d081ea)
* increase the stack frame size for tests (ab8eb4f)
* makes NgModel work in strict mode (eb3586d)
* rename FORWARD_REF to forwardRef in the Angular code base. (c4ecbf0)

### Performance Improvements

* **render:** don&#39;t create property setters if not needed (4f27611)
* **render:** don’t create an intermediate element array in renderer (9cd510a)
* **render:** only create `LightDom` instances if the element has children (ca09701)
* **render:** precompute # bound text nodes and root nodes in `DomProtoView` (24e647e)
* **RouterLink:** use hostListeners for click (92f1af8), closes #2401

### BREAKING CHANGES

* Directive: Before

    @Directive({
      hostListeners: {&#39;event&#39;: &#39;statement&#39;},
      hostProperties: {&#39;expression&#39;: &#39;hostProp&#39;},
      hostAttributes: {&#39;attr&#39;: &#39;value&#39;},
      hostActions: {&#39;action&#39;: &#39;statement&#39;}
    })

After

    @Directive({
      host: {
        &#39;(event)&#39;: &#39;statement&#39;,
        &#39;[hostProp]&#39;: &#39;expression&#39;  // k &amp; v swapped
        &#39;attr&#39;: &#39;value&#39;,
        &#39;@action&#39;: &#39;statement&#39;
      }
    })
* query: By default Query only queries direct children.
* JsonPipe: no longer cache ref


<a name="2.0.0-alpha.26"></a>
# 2.0.0-alpha.26 (2015-06-04)


### Features

* **benchpress:** Add extension for ff metrics reporting (b390f44), closes #1976
* **binding:** throw on binding to a blank alias (ec2d8cc), fixes #2068
* **broccoli:** add incremental dartfmt plugin (e5d06e4), closes #2211
* **change_detection:** added onInit and onCheck hooks (c39c8eb)
* **change_detection.ts:** export PipeFactory (93f464a), closes #2245
* **core:** added missing interfaces for onDestroy and onAllChangesDone lifecycle events (2b6a653)
* **core:** added support for detecting lifecycle events based on interfaces (30b6542)
* **core/compiler:** AppViewPool use OpaqueToken (ef27919)
* **dart/transform:** Add support for the safe navigation operator (83f1856), closes #791
* **dart/transform:** Generate ChangeDetector classes (8a3b0b3)
* **dart/transform:** Improve constant evaluation (5d2af54)
* **dart/transform:** Remove unnecessary .ng_deps.dart files (c065fb1), closes #1929
* **di:** added optional self parameter to Parent, Ancestor, and Unbounded (34cfc9f)
* **Directive:** convert properties to an array (d7df853), fixes #2013
* **dom:** add `setData()` method. (6f3368e)
* **ElementInjector:** support an arbitrary number of bindings (b1c9bf1), fixes #1853
* **facade:** add read/write access to global variables (cdf791f)
* **fakeAsync:** flush the microtasks before returning (c7572ac), fixes #2269
* **form:** implemented an imperative way of updating the view by updating the value of a control (652ed0c)
* **forms:** added ng-model (559f54e)
* **forms:** added support for status classes (3baf815)
* **forms:** added touched and untouched to Control (ec3a782)
* **forms:** changed the selector of TemplatdrivenFormDirective to match &lt;form&gt; (6bef1c4)
* **forms:** implemented template-driven forms (a9d6fd9)
* **forms:** renamed control, control-group into ng-control and ng-control-group (f543834)
* **key_event:** alias esc to escape (10bc7e9), fixes #2010
* **OpaqueToken:** now a const constructor (c571b26)
* **reflector:** added a method to get type&#39;s interfaces (34d75e8)
* **RegExpWrapper:** implement a test method (551586c)
* **render:** re-export render and export `DirectiveResolver` (662da0d), closes #2026
* **render/dom_renderer:** DocumentToken use OpaqueToken (db7a1f1)
* **router:** add the router bundle to the bundle task. (05fa9bc)
* **router.js:** export router injectables (28ee061)
* **router.js:** export routerDirectives (1f20ef9)
* **test:** add element probe (f9908cd), closes #1992
* **test:** added not.toBeNull (74882c6)
* **test_lib:** add `containsRegex` (23d59df)
* **test_lib:** add method to compare stringified DOM element (c6335c1), closes #2106
* **tests:** add TestComponentBuilder (c32dbad), closes #1812
* **transformers:** added support for lifecycle events (f19970a)
* **view:** add `AppViewListener` interface (75578f4)
* **view:** introduce free embedded views (5030ffb)
* add support for the safe navigation (aka Elvis) operator (a9be2eb), fixes #791

### Bug Fixes

* **ast:** fix the size of a list in _evalListCache (0387221)
* **benchpress:** add index to root of module (383f0a1)
* **benchpress:** support nested intervals (c280fe8)
* **binding:** unbalanced curly brackets in documentation (a80921b)
* **browser_adapter:** HTMLStyleElement.innerText does not trigger creation of CSS rules (Firefox) (b2a24e0)
* **browser_adapter:** assigning null to document.title sets the title to &#34;null&#34; (IE11, Firefox) (92c2c33)
* **browser_adapter:** element.getBoundingClientRect fails when element not in DOM (IE11) (f35dbb9)
* **browser_adapter:** element.matches only available with prefix (IE11) (a393f84)
* **browser_adapter:** event creation fails (IE11, Firefox) (665ccaf)
* **build:** also run ts tests in node. (05774f6)
* **build:** make dart formatter errors more readable (31b6687)
* **build:** remove nonexistant dart format task from gulpfile (f74d772)
* **collection:** iterator on Map keys is not supported (Safari) (4b98ed1), closes #2096
* **collection:** new Map(iterable) is not supported (Safari) (d308e55)
* **collection:** new Set(iterable) is not supported (IE11, Safari) (57b88ec), closes #2063
* **core:** resurrect OnChange interface (d48fae3)
* **dart/transform:** Fix DirectiveMetadata read tests (000a8e2)
* **dartdocs:** Hide duplicate exports from guinness. (17e1d7f), closes #2072
* **deps:** Update clang-format to 1.0.14. (15f1eb2)
* **di:** allow `@Inject(…)` to work in dart2js and dynamic reflection (4a3fd5e), closes #2185
* **docs:** generate d.ts file only for angular2/angular2. (0a0b84a)
* **dom:** `querySelectorAll` should only query child nodes (307011a)
* **dom:** allow to correctly clone document fragments (2351896)
* **example:** unused event (f83f1ee)
* **examples:** update form example to use NgIf (1ad6558)
* **facade:** Fix bug in TS indexOf (cda3510)
* **facade:** Make PromiseWrapper#all semantics equivalent (22f5925)
* **fake_async:** fixed fakeAsync to throw instead of crashing on cjs (5c53cf6)
* **forms:** disabled form tests on cjs until fakeAsync is fixed (cd52d8a)
* **gulp:** prevent duplicate error messages (381d4cb), closes #2021
* **injectable:** add missing @Injectables annotations (0c7f05f), closes #2173
* **package.json:** add `reflect-metadata` to package.json (6080177), fixes #2170
* **render:** don’t store a document fragment as bound element (24bc4b6)
* **render:** only look for content tags in views that might have them. (ba7956f), fix #2298, closes #2297
* **router:** event.defaultPrevented is not reliable (IE11) (2287938)
* **selector:** support multiple `:not` clauses (62a9582), fixes #2243
* **ShadowCss:** keyframes tests failing in Safari (4c8e11a), closes #2283
* **test:** adds longer timers for NgZone and PromisePipe tests (IE11) (661a047), closes #2055
* **test:** clang formatting errors (05d66bb)
* **test:** function.name is not available (IE11) (5103f08)
* **test:** native shadow DOM is required (IE11, Firefox) (9802deb)
* **test:** solve CSS discrepancies across browsers (fb42d59), closes #2177
* **test:** use a not expandable CSS rule in ShadowCSS spec (Firefox) (588fbfd), closes #2061
* **tests:** disable mobile emulation so benchmarks run on current chrome (b071b66)
* **Tools:** Moves files out of dart2js/**/web. (4015037), fixes #2, fixes #2
* **types:** parametrize QueryList. (552985e)
* fix clang errors (01fb8e6)
* format a file that slipped in. (471a1b6)

### BREAKING CHANGES

* core/compiler: No longer a `const` string. Now a const OpaqueToken
* Directive: Before

    @Directive(properties: {
      &#39;sameName&#39;: &#39;sameName&#39;,
      &#39;directiveProp&#39;: &#39;elProp | pipe&#39;
    })

After

    @Directive(properties: [
      &#39;sameName&#39;,
      &#39;directiveProp: elProp | pipe&#39;
    ])
* OpaqueToken: now a `const` constructor
* render/dom_renderer: No longer a `const` string. Now a const OpaqueToken
* view: - `Renderer.detachFreeHostView` was renamed to
  `Renderer.detachFreeView`
- `DomRenderer.getHostElement()` was generalized into
  `DomRenderer.getRootNodes()`


<a name="2.0.0-alpha.25"></a>
# 2.0.0-alpha.25 (2015-05-22)


### Features

* **CD:** add support for === and !== (0ae89ac)
* **di:** changed toFactory to support dependency annotations (f210c41)
* **forms:** migrated forms to typescript (00c3693)
* **injector:** support forwardRef in toAlias (fed86fc)
* **PromisePipe:** remove ref onDestroy (4afd2b4)

### Bug Fixes

* **browser:** template elements should have content imported instead of the element itself. (c9ab8e4)
* **di:** changed host and view injector to respect visibility (705ee46)
* **element_injector:** fixed element injector to inject view dependencies into its components (b6b52e6)
* **element_injector:** fixed element injector to resolve dependencies of regular services (28c2b8f)
* **forms:** changed forms to create only one value accessor instead of always creating DefaultValueAccessor (30c3e5a)
* **gulp:** continue watching when tasks throw (ac28ac3), closes #1915
* **router:** router link should navigate to non-base Url. (c452832)
* **test_lib:** fixes nested beforeEach. (826af40)
* **XHRImpl:** fix errors, add a spec (91ccc9a), fixes #1715
* don&#39;t call onAllChangesDone on checkNoChanges (a664f5a)


<a name="2.0.0-alpha.24"></a>
# 2.0.0-alpha.24 (2015-05-19)


### Features

* **change_detection:** implemented change detection that can be configured with pregenerated change detectors (08f21db)
* **change_detection:** json pipe (9860382), closes #1957
* **change_detection:** uppercase and lowercase pipes (7a4a635)
* **compiler:** added support for [()] syntax (685a650)
* **compiler:** special-case class attribute in hostAttributes (3011cd8), closes #1774, closes #1841
* **di:** added hostInjector and viewInjector to the Directive annotation (b066b8d)
* **di:** removed publishAs (3a53f67)
* **element_injector:** allow @Optional for ProtoViewRef (bb2eda2)
* **errors:** preserve stack traces of user exceptions in Dart (b6f29b4)
* **facade:** toUpperCase and toLowerCase (557d54b)
* **fakeAsync:** allow simulating the passage of time (0f002a5)
* **forms:** improved error messages (11e4385), closes #1839
* **pipe:** reexported pipes to genereate docs (155b1e2)
* allow for forward references in injection (1eea2b2), closes #1891

### Bug Fixes

* **benchmark:** change If for NgIf (cdbb247)
* **benchmark:** fixes ng-if ng-for renaming for templates. (38926f7)
* **build:** npm shrinkwrap to pick up changed SHA1. (04a9eb8)
* **Compiler:** add an error when a directive is null or undefined (25cd6e4), fixes #1908
* **directives:** fix import path (c20060d)
* **errors:** require passing stack traces explicitly in ng2 own code (8ab7735)
* **examples:** prefix directives with Ng (0e82970)
* **facade:** MapWrapper.createFromPairs (af9dcad), closes #1640
* **ng1 benchmarks:** revert *ng-if to ng-if (909233f)
* **router:** generate links for router-link with baseHref (390cfb7)
* **router:** improve route matching priorities (5db8907)
* **router:** sort possible routes by cost (17392f6)
* **router:** use appRootComponentToken to get root route configs (791caf0), closes #1947
* **tree-differ:** treat symlinks to deleted paths as removals (aad5795), closes #1961

### Code Refactoring

* **core:** renamed injectables into appInjector (7b51146)
* **proto_view_factory:** expose data for generating change detectors (ecb0680), fixes #1712, fixes #1713
* **view_manager:** split `inPlace` views into root and free host views. (421d891), closes #1920

### Performance Improvements

* **compiler:** Avoid unnecessary List concats (05a1c6c), closes #1905
* **dart:** Improve Dart ListWrapper#concat (5114411)

### BREAKING CHANGES

* di: Removes the publishAs property from the Component annotation.
* core: Before:

@Component({injectables: [Type]} class MyCmp{}

After:

@Component({appInjector: [Type]} class MyCmp{}
* proto_view_factory: - renames `DirectiveMetadataReader` into `DirectiveResolver`
  and removes `src/core/compiler/directive_metadata`.
* view_manager: `AppViewManager.createInPlaceHostView` is replaced by
`AppViewManager.createRootHostView` (for bootstrap) and
`AppViewManager.createFreeHostView` (for imperative components).

The later creates new host elements that are not attached anywhere.
To attach them, use `DomRenderer.getHostElement(hostviewRef)`
to get the host element.


<a name="2.0.0-alpha.23"></a>
# 2.0.0-alpha.23 (2015-05-12)


### Features

* **change_detection.js:** export null pipes (4b62a72), closes #1624
* **compiler:** added support for host actions (f9c1de4)
* **compiler:** allow setting attributes on a host element (51839ca), closes #1402
* **dart/transform:** Inline `templateUrl` values (97d2456), closes #1035
* **dart/transform:** Reuse readDirectiveMetadata in plugin (abc8878)
* **dart/transform:** Use the render Compiler and the DirectiveParser (44f829d)
* **di:** components can self-publish via publishAs (1a0da11)
* **di:** expose parent injector (2185e7c)
* **di:** support type literals in DI (358a675)
* **directives:** export collection of core directives (a5638a9), closes #1524
* **dom:** add getBaseHref method (05219a5)
* **facade:** add equals method to StringMapWrapper (aff85b5)
* **gulpfuile:** added watch.js.dev (3256ff1)
* **lang:** support const expressions in TS/JS and Dart (4665726), closes #1796
* **material:** add early version of md-grid-list. (8ef183b), closes #1683
* **material:** early version of md-input (ad23921), closes #1753
* **PromisePipe:** add pipe for promises (7498758)
* **view:** allow to transplant a view into a ViewContainer at another place. (4f3433b), closes #1492
* **VmTurnZone:** Rework the implementation to minimize change detection runs (e8a6c95)

### Bug Fixes

* **change_detection:** updated dynamic change detector not to mutate when throwing (d717529), closes #1762
* **dart:** Remove unused imports. (4ce0d5e)
* **dart/transform:** Handle `hostAttributes` in DirectiveMetadata (200e190), closes #1742
* **forms:** export directives as const in Dart (5036086), fixes #1283
* **gulpfile:** fixed test.unit.dart to format dart code before running test (92d6aa1)
* **location:** dartium does not like pushState with null. (c2a42d5)
* **router:** add baseUrl to relative paths, but not absolute. (a574154), closes #1783
* **router:** reuse common parent components (ac80df0)
* **router:** router-link works without params (77d1fc1)
* **router:** strip base href from URLs when navigating (853d1de)
* **test:** fixed a test (032f8b7)
* **test_lib:** spy funcs should match null arguments (84dc6ae)
* **transformer:** remove classDefParser in favor of hardcoded strings to speed up build (01d5c29)
* **view:** fixed ProtoViewFactory to get all property bindings (7f97638)

### Code Refactoring

* **forms:** rename FormDirectives to formDirectives (229e770), closes #1804
* **VmTurnZone:** renamed to NgZone (e11c205)

### BREAKING CHANGES

* forms: A collection of all the form directives is exported
under `formDirectives`
while those were previously available
under `FormDirectives`.
* VmTurnZone: VmTurnZone has been renamed to NgZone.

- The public API has not chnanged,
- The &#34;outer&#34; zone is now named &#34;mount&#34; zone (private to NgZone).


<a name="2.0.0-alpha.22"></a>
# 2.0.0-alpha.22 (2015-05-07)


### Features

* **benchmark:** added an implementation of the tree benchmark in React (e434274)
* **benchmarks:** Add basic dart transformer benchmarks. (1864f60)
* **dart/analysis:** Build DirectiveMetadata for LibrarySpecificUnit (0b1bb17)
* **dart/transform:** Add DirectiveMetadataExtractor transform step (0520ca6)
* **dart/transform:** Add directiveMetadata{To,From}Map (648c514)
* **dart/transform:** Generate DirectiveMetadata for exports (c8ebd11)
* **dart/transform:** Turn on transform for examples/todo (726fecb), closes #1527
* **decorators:** adds decorator versions of DI annotations. (457c15c)
* **decorators:** adds decorators to be used by TS and Babel transpiled apps. (fb67e37)
* **decorators:** adds support for parameter decorators. (f863ea0)
* **dom:** add location and history as DOM-like APIs. (f356d03)
* **material:** add prototype dialog component w/ demo. (f88c4b7)
* **router:** add location service (ea546f5)
* **router:** adds the router to the self-executing bundle. (8e1d53b)
* **router:** export decorator version of RouteConfig (75da6e4)
* **router:** export routerInjectables (ef7014f)
* **router:** route redirects (9153331)
* **router:** sibling outlets (9d5c33f)

### Bug Fixes

* **brocolli:** escape special regexp characters when building regexps (a58c9f8), closes #1721, closes #1752
* **build:** build the broccoli tools with correct typescript version. (6bba289)
* **build:** revert typescript upgrade which broke the build. (b5032fd)
* **build:** use correct tsd command to get typings at requested versions (1205f54)
* **bundle:** update the bundle config to point to rx.js (cf32213)
* **change_detector:** ensure that locals are only used when implicit receiver (d4925b6), closes #1542
* **compiler:** changed the compiler to set up event listeners and host properties on host view elements (e3c1104), closes #1584
* **compiler:** clone templates before compiling them (9e8d31d), closes #1058
* **compiler:** only sets viewDefinition absUrl if the view has either a template or templateUrl (3d62546), fixes #1326, closes #1327
* **decorators:** fixed decorators (4977764)
* **decorators:** fixes decorator reflection. (be7504d)
* **decorators:** incorrect annotation to decorator adapter (b0c735f)
* **decorators:** updates missing benchmark and fixes typo. (87dcd5e)
* **decorators.es6:** export Directive decorator (93c331d), closes #1688
* **di:** improve error messages for invalid bindings (ee1b574), fixes #1515, closes #1573
* **docs:** fix broken docs test after addition of .ts extension to dgeni (62bf777)
* **exception_handler:** log errors via `console.error` (ead21c9)
* **formatter:** point to the newest clang-format (51c4779)
* **router:** fix for leading slash in dart (c9cec60)
* **router:** infer top-level routing from app component (46ad355), closes #1600
* **router:** navigate on popstate event (2713b78)
* **router:** throw if config does not contain required fields (259f872)
* **router:** use lists for RouteConfig annotations (4965226)
* **view:** changed view manager to hydrate change detector after creating directives (c157922)

### Code Refactoring

* **compiler:** rename decorator directives into directive (f75a50c)
* **core:** introduce `ViewRef` and `ProtoViewRef` (09f8d8f), closes #1592
* **core:** remove DynamicComponent (8faf636)

### BREAKING CHANGES

* compiler: Previously, `Directive` was the abstract base class of several directives.
Now, `Directive` is the former `Decorator`, and `Component` inherits from it.
* core: :- `NgElement` merged into `ElementRef`
- `Compiler.compile…` returns `ProtoViewRef`
- `ViewContainer` uses `ProtoViewRef`s and `ViewRef`s.
- `ViewRef`/`ProtoViewRef` in renderer were renamed to
  `RenderViewRef`/`RenderProtoViewRef`.

Related to #1477
* core: A dynamic component is just a component that has no @View annotation…


<a name="2.0.0-alpha.21"></a>
# 2.0.0-alpha.21 (2015-04-28)


### Features

* **dart/transform:** Dedup getters, setters, &amp; methods (15376a6)
* **facade:** add isType method (e617ca6)
* **parser:** support === and !== operators (afe0e45), closes #1496, closes #1500
* **router:** add initial implementation (1b2754d)
* **view:** reimplemented property setters using change detection (8ccafb0)
* alllow specifying directives as bindings (4bab25b), closes #1498

### Bug Fixes

* **angular2:** export QueryList in angular2/core (8a92a1f), closes #1502
* **benchmarks:** wait for end of benchmarks (97e6fb6)
* **benchpress:** only print the CV when it is meaningful (642e7e5), closes #908, closes #1444
* **dart/transform:** Use `var` instead of `bool` in generated files (99fdb9a), closes #1455
* **di:** capture original exception in InvalidBindingError (e23004d), fixes #1406, closes #1459
* **dom:** remove methods is allowed on text nodes as well (e70a2f2), fixes #1473, closes #1478
* **jsserve:** serve empty favicon to prevent errors in benchmarks (14a7b9f)
* **ListWrapper:** follow JS semantics (2e3e41b)
* **render:** return views when destroyed in ViewContainer (6fcd370), closes #1316
* **test_lib:** support multi matches with deep equality for function calls (f784063)
* **ViewManager:** dehydrate views recursively over ViewContainers (a801da6), closes #1560
* export ShadowDom strategies (6896305), fixes #1510, closes #1511

### Performance Improvements

* **benchmarks:** benchmark measuring cost of decorators (fixes #1479) (9fc9d53)
* **benchmarks:** benchmark that measure cost of dynamic components (427f0d0)


<a name="2.0.0-alpha.20"></a>
# 2.0.0-alpha.20 (2015-04-21)


### Features

* **build:** Move HTML copying into the broccoli task. (db97d73)
* **bundle:** add script to push bundles to code.angularjs.org (ffe1307)
* **bundle:** adds a self-executing dev bundle (SFX). (3177576)
* **change detection:** add removeShadowDomChild (6ecaa9a)
* **change_detection:** added async pipe (a97a226)
* **change_detection:** updated handling ON_PUSH detectors so they get notified when their bindings change (68faddb)
* **Compiler:** Make Compiler.buildRenderDirective() static. (a00cb1d)
* **dart/transform:** Add debug transform parameters (77b31ab)
* **dart/transform:** Add the DirectiveMetadataReader (cf7bef5)
* **dart/transform:** Detect annotations which extend Injectable or Template. (c65fd31)
* **events:** support preventdefault (883e1c1), fixes #1039, closes #1397
* **material:** first ng2 material design components (f149ae7)
* **parser:** changed parser to parse pipes in the middle of a binding (7bd682b)
* **view:** add imperative views (ada1e64)
* **view:** changed event emitters to be observables (233cb0f)
* **view:** implemented loading component next to existing location (681d063)

### Bug Fixes

* **benchpress:** explicitly require navigation to finish before continuing (8b28e99)
* **build:** Fail the build for certain TS errors. (2d09f84)
* **build:** remove import of gulp-traceur which pulls in a different version of traceur (e145434)
* **core:** typo ComponetRef -&gt; ComponentRef (0fc66da), closes #1426
* **dart/transform:** Ensure consistent ordering of generated imports (fef1dee)
* **facades:** fix splice semantics; add test (526c51d)
* **shadowdom:** remove unused nodes on redistribute (64ad74a), fixes #1416
* **tests:** create default spys for all methods on a class (cb2e646)
* **view:** chagned view factory to keep AstWithSource (56f3429)
* **view:** fixed hydrator to export the dom element instead of ng element (eac5c88)
* **view:** fixed hydrator to pass the right element index when attaching an event listener (4943c0f)
* **view:** remove dynamic components when the parent view is dehydrated (213dabd), fixes #1201
* **viewFactory:** allow empty view cache (02997f4)
* Fix issues found by Dart analyzer (957384c)


<a name="2.0.0-alpha.19"></a>
# 2.0.0-alpha.19 (2015-04-13)


### Features

* **benchmark:** make view cache a parameter to the tree benchmark (6ce085a)
* **bootstrap:** changed bootstrap to return ComponentRef (6f8fef4)
* **build:** Add rudimentary TS typings for broccoli. (4e2316c)
* **build:** Use broccoli for ts2dart transpilation. (a3decad)
* **build:** enforce formatting of some files. (daf0f47)
* **bundle:** work-around rx.all.js bundle issue. (bcbed28)
* **change_detection:** added changeDetection to Component (514ba54)
* **change_detection:** updated change detection to update directive directly, without the dispatcher (69c3bff)
* **CSSClass:** support binding to classList (aca4604), closes #876
* **dart:** Use ts2dart for transpilation in Karma Dart. (17e8857)
* **dart:** Use ts2dart for transpilation. (226cbc7)
* **dart/transform:** Add a `di` transformer (09948f4), closes #700
* **dart/transform:** Add stub implementations to Html5LibAdapter (cac74c7)
* **dart/transform:** Allow multiple transformer entry points (2cab7c7), closes #1246
* **dart/transform:** Fix handling of Dart keywords (f6e9d1f)
* **dart/transform:** Mark Compiler as Injectable (f375dbd)
* **dart/transform:** Parse `url` values in `Template`s (1a788e6)
* **dart/transform:** Use the Dart transformer for benchmarks (8212757)
* **di:** Mark objects @Injectable (788461b)
* **di:** provide two ways to create an injector, resolved and unresolved (4a961f4)
* **docs:** more docs on binding resolution (c5c1c9e)
* **dom:** add replaceChild to DOM adapter (123ee8e)
* **events:** add support for global events (b96e560), fixes #1098, closes #1255
* **gulp:** adds System.register bundle task. (c0b04ca)
* **keyEvents:** support for &lt;div (keyup.enter)=&#34;callback()&#34;&gt; (8fa1539), close #523, close #1136
* **perf:** add Angular2 implementation of largetable benchmark from AngularJS 1.x (a55efbd)
* **query:** adds initial implementation of the query api. (e9f7029), closes #792
* **render:** add initial implementation of render layer (6c60c3e)
* **Ruler:** introduce Ruler service (41262f4), closes #1089, closes #1253
* **testability:** add an initial scaffold for the testability api (e81e5fb)
* **tooling:** Add a .clang-format for automated JavaScript formatting. (60e4197)
* **view:** generalized loading of dynamic components (f45281a)
* add class directive to a list of directives (7e2c04e), closes #1292
* intiial commit for angular 2 dart analysis (28ba179)

### Bug Fixes

* **angular2:** export PrivateComponent{Loader,Location} in angular2/core (25c709c)
* **benchmark_util:** remove strict equality check from getStringParameter (7bf9525)
* **benchmarks:** Stop working around a Traceur bug. (22c1a0d)
* **build:** Actually code in the subset of JS that Traceur-Dart supports. (eb7b758)
* **build:** Don&#39;t include rtts in the dart build. (cc7c7b3)
* **build:** Only return directories from subDirs() (70cea03)
* **build:** Remove unused `done` function arguments. (8c3007e)
* **build:** Require gulp-ts2dart at least at 1.0.6. (09067eb), fixes #6
* **build:** add package.json again to the copy files for js (c63b316)
* **build:** don’t read out chrome perflogs during e2e tests (47542b0), closes #1137
* **bundles:** remove work-around rx.js module detection. (c349eb4), closes #1245
* **dart:** The Traceur dart transpiler doesn&#39;t support shorthand syntax. (54a4e4a)
* **dart:** don&#39;t instantiate abstract directive. (136f64f)
* **dart/transform:** Gracefully handle log calls before init (bba8499)
* **di:** allow injecting event emitter fns without specifying type annotation (ae30d7b), fixes #965, closes #1155
* **di:** allow injecting static attrs without type annotations (a3387b7), closes #1226
* **di:** refactor bindings to support Dart annotations (6c8398d)
* **forms:** fixed a directive selector (982bb8b)
* **IE11:** first fixes (90d9a1d), closes #1179
* **repo:** .gitignore the broccoli tmp dir (ad083ed)
* **shadow_dom:** redistribute light dom when a dynamic component is attached. (8499cf8), fixes #1077, closes #1315
* **test:** add a test for @PropertySetter on a class with a dash (d822793), closes #1113, fixes #1099
* **tests:** add missing ;s (59c1299)
* **traceur:** Fix a couple of unsupported or incorrect tests. (3285ffb)
* **ts2dart:** Adjust to new ts2dart API. (838aa2a)
* **view_factory:** fix caching of views (e34146f)

### Performance Improvements

* **benchmark:** measure Injector init from resolved bindings (c05bad3)
* **benchmarks:** measure cost of Injector init with a variety of bindings (0012caa)
* **build:** use patched broccoli-funnel version (cfc5dd8)
* **change detection:** Assign this.locals in change detector ctor (a6736ff)
* **view:** use pre-resolved bindings for child injector init (308823b)


<a name="2.0.0-alpha.18"></a>
# 2.0.0-alpha.18 (2015-03-28)


### Bug Fixes

* **build:** publish docs as well and correct bench press docs (8c5d9d3)


<a name="2.0.0-alpha.17"></a>
# 2.0.0-alpha.17 (2015-03-27)


### Features

* **bench press:** replace microIterations with microMetrics (33bfc4c)
* **change_detection:** added a directive lifecycle hook that is called after children are checked (723e8fd)
* **change_detection:** pass binding propagation config to pipe registry (8d85b83)
* **change_detector:** split light dom and shadow dom children (e92918b)
* **compiler:** Add support for setting attributes to Component host element (58dd75a), fixes #1008, fixes #1009, closes #1052
* **core:** @Attribute annotation (b1dc623), closes #1091, fixes #622
* **facade:** added support for observables (9b3b3d3)
* **forms:** added an observable of value changes to Control (19c1773)
* **forms:** added support for arrays of controls (ff84506)
* **forms:** made forms works with single controls (b02bd65)
* **PrivateComponentLoader:** Explicit error message when loading a non-component (101a4aa), fixes #1062
* **ts2dart:** include srcFolderInsertion in ts2dart step. (18ff2be)

### Bug Fixes

* **build:** try to eliminate build flakes by running dartstyle:format sequentially (dd235f3)
* **change_detection:** expose values when detecting changes in key-value pairs (5306b6d), fixes #1118, closes #1123
* **ElementBinderBuilder:** properly bind CSS classes with &#34;-&#34; in their names (edc3709), fixes #1057, closes #1059
* **PrivateComponentLoader:** add the loader to the app injector (65d7593), fixes #1063
* **tests:** fixed a broken test (ee36aaf)
* **ts:** ts doesn&#39;t like &#34;;;&#34; (878fce6)


<a name="2.0.0-alpha.15"></a>
# 2.0.0-alpha.15 (2015-03-24)


### Bug Fixes

* **view:** fixed view instantiation to use the component template&#39;s change detector when creating BindingPropagationConfig (f8e7a37)


<a name="2.0.0-alpha.14"></a>
# 2.0.0-alpha.14 (2015-03-24)


### Features

* **build:** check circular depencies in Node.js (a46af9c), closes #980
* **compiler:** added the DynamicComponent annotation (b69f304)
* **compiler:** support bindings for any attribute (02aa8e7), closes #1029
* **dart/transform:** Add simple ParseTemplates step (b3fa1fa)
* **dart/transform:** Add simple ParseTemplates step (08b56e1)
* **dart/transform:** Implement `Html5LibDomAdapter` methods. (5d502d4)
* **di:** Add the `@Injectable` annotation (b656f63)
* **di:** Add the `@Injectable` annotation to `Compiler` (57723e1)
* **di:** Modify hello_world to use @Injectable (153cee1), closes #986
* **element_injector:** added PrivateComponentLocation (7488456)
* **forms:** added pristine and dirty (8a10ede)
* **forms:** added support for textarea (f42e633)
* **forms:** added value accessor for input=text (47c1a0f)
* **selector:** support , for multiple targets (41b53e7), fixes #867, closes #1019
* **ShadowCss:** Support the new deep combinator syntax &gt;&gt;&gt; (ee523ef), fixes #990, closes #1028
* **test:** more tests in Node.js (46b03a5)
* added an ability to dynamically load components (2041860)

### Bug Fixes

* **bootstrap:** report error on bootstrapping non-Component directive (376bdf4), fixes #951, closes #961
* **ElementBinderBuilder:** properly bind to web component properties (0fb9f3b), fixes #776, closes #1024
* **examples:** Fix type registration in hello_world (014a28f), closes #991
* **PropertyBindingParser:** detect bindings using full attribute name (e0710c4), fixes #1001, closes #1004
* **PropertyBindingParser:** properly parse event bindings as actions (a35cc27), fixes #981, closes #987
* allow creation of var with camelCased names (59a1f83), closes #957

### Performance Improvements

* **DirectiveDependency:** iterate only once over Dependency properties (c6893ac), closes #918


<a name="2.0.0-alpha.13"></a>
# 2.0.0-alpha.13 (2015-03-14)


### Features

* **application:** move classes to the application level injector (53d5f36), fixes #649
* **bench press:** add microIterations option (043b8c6)
* **bench press:** allow multiple reporters, metrics and driver extensions. (1d4ffd9)
* **bench press:** detect major gcs (146d731)
* **bench press:** use chrome tracing protocol and initial iOS support (7aa031b)
* **benchmark:** add a simple benchmark for the di module (1f4caa8)
* **benchmarks:** add polymer js 0.8-preview benchmark (a963ae4), closes #943
* **benchmarks:** initial version of tree benchmark (01fa90c), closes #269
* **benchmarks:** tree benchmark baseline (e7de5f8)
* **benchpress:** add a file reporter (f9dcfa3)
* **benchpress:** add getStringParameter method to support text and radio inputs (a2b5820)
* **benchpress:** rewritten implementation (f6284f2)
* **benchpress:** show more metrics and make the run mode configurable (77aa3ed), closes #368
* **bootstrap:** use VmTurnZone and LifeCycle to bootstrap an application (2184150)
* **bootstraping:** application bootstrapping implementation. (1221857)
* **build:** add general copy/multicopy method (3f25f5a)
* **build:** add npm publish script (729e38a)
* **build:** add package.json and README.md for publishing to npm (dd532fe)
* **build:** auto format the generated dart code. (b1e76c5), fixes #480, closes #504
* **build:** copy css files (e3f4c60)
* **build:** enforce mobile layout during e2e tests (3b40052)
* **build:** transpile to es6 (69bba9b)
* **Change Detection:** Add support for keyed access (7cb93fd)
* **Change Detection:** Child watch groups (384f0ae)
* **Change Detection:** Implement collection changes (1bd304e)
* **Change Detection:** Implement map changes (0a766f4)
* **Change Detector:** Add support for collection content watch (bf71b94)
* **change_detection:** add benchmarks (9a9a13a)
* **change_detection:** add mode to ChangeDetector (23a0800)
* **change_detection:** add support for binary operations and literals (79a9430)
* **change_detection:** add support for pipes (695b4eb)
* **change_detection:** add support for pipes in the template (987a5fd)
* **change_detection:** change binding syntax to explicitly specify pipes (58ba700)
* **change_detection:** change proto change detectors to coalesce records (2793d47)
* **change_detection:** do not register a change from switching from null to null (709df12)
* **change_detection:** ensure that expression do not change after they have been checked (8acf9fb)
* **change_detection:** implement a change detector generator (850cf0f)
* **change_detection:** implement hydration/dehydration (21f24d1)
* **change_detection:** modify change detectors to recompute pure functions only when their args change (af41fa9)
* **change_detection:** reimplement change detection (9957c13)
* **change_detection:** update change detection benchmark (3067601)
* **change_detector:** add a way to inspect records and record ranges (1d03c2a)
* **change_detector:** add support for array literals (75fd984)
* **change_detector:** add support for formatters (dcd905a)
* **change_detector:** add support for map literals (34d76f1)
* **change_detector:** add support for method calls (4e38e3a)
* **change_detector:** add support for negate (f38b940)
* **change_detector:** add support for ternary (0e6d523)
* **change_detector:** cleanup (0341085)
* **change_detector:** notify directives on property changes (847cefc)
* **change_detector:** wrap exceptions into ChangeDetectionError (d642c6a)
* **ChangeDetection:** convert Record.mode to a bit field (69af7ea)
* **ChangeDetector:** Add support for chained properties (c90a711)
* **ChangeDetector:** change View to construct a WatchGroup hierarchy (f0d6464)
* **ChangeDetector:** implement enabling/disabling records (daf8f72)
* **ChangeDetector:** implement enabling/disabling watch group (862c641)
* **compiler:** DOM adapters + html5lib implementation; misc fixes (757eae8)
* **Compiler:** Multiple template per component (e6c8bde), fixes #596
* **compiler:** add BindingPropagationConfig to the list of pre-built objects (fc6e421)
* **compiler:** add benchmarks (b07ea6b), closes #197
* **compiler:** allow ignoring element children (4f2f083)
* **compiler:** allow recursive components (9c2d411)
* **compiler:** handle compileChildren from @Decorator (48e5012)
* **compiler:** initial version of the compiler. (7a70f8f)
* **compiler:** make directive bindings optional. Fixes #647 (785ec26)
* **compiler:** new semantics for `template` attributes and view variables. (c6846f1)
* **compiler:** parse5 DOM adapter (1d4ff9b), closes #841
* **compiler:** pass compilation unit to the parser (d5fcac4)
* **compiler:** support `on-` and `[]` (fc5b7ed)
* **compiler, ShadowDom:** adds TemplateLoader using XHR. (746f85a)
* **components:** initial implementation of emulated content tag (fbcc59d)
* **ComponentUrlMapper:** retrieve the base URL for components (26872f6)
* **CssProcessor:** add support for CssTransformers (03793d0), closes #860
* **dart/transform:** Add a `.ng_deps.dart` file parser. (92b22d2)
* **dart/transform:** Add a parser for `.ng_deps.dart` files and use. (4b12c19), resolve #886
* **dart/transform:** Generate setter stubs. (50a74b1), closes #780
* **DartWriter:** support string interpolation (c7feaba)
* **deps:** update Traceur 0.0.74 (b4ff802)
* **di:** add OpaqueToken to DI (6f889e3)
* **di:** add metadata to Key (ea0df35)
* **di:** add support for optional dependencies (ba0a1ec)
* **di:** introduce aliasing (0c4fbfc), closes #710, closes #747
* **directive:** add ng-non-bindable directive (bcd6e4c)
* **directive:** add ng-switch directive (683bb6e)
* **directive:** notify directive before they get destroyed (fb1b1da)
* **DirectiveParser:** throw errors when expected directives are not present (94e203b), closes #527, closes #570
* **Directives:** add the ability to declaratively bind events (bfa18ff)
* **directives/forms:** run tests in NodeJS (e896565), closes #921
* **DomAdapter:** add types (23786aa), closes #842
* **element_injector:** add distance to propertly implement @parent (3c692a1)
* **elementBinder:** introduce element binder. (8c566dc)
* **ElementInjector:** add NgElement (d7208b8)
* **ElementInjector:** add support for &#34;special&#34; objects (79d270c)
* **ElementInjector:** change ElementInjector so @parent and @ancestor do not include self. (ac8351b)
* **ElementInjector:** change ElementInjector to accept bindings or types (e3b7724)
* **ElementInjector:** implement @PropertySetter (b349c35)
* **ElementInjector:** implement ElementInjector (e3548b4)
* **ElementInjector:** throw when encounter a cyclic dependency (9bd65ab)
* **emuldated_shadow_dom:** implement intermediate content tags (ec8e9f5)
* **EventManager:** implement the EventManager (8844671)
* **events:** add the $event local variable to the handler context (03c21a8)
* **events:** adds support for bubbling native events (^event). (6ad2c18)
* **events:** adds support for injectable angular event emitters. (fd34a56)
* **examples:** Add TodoMVC sample application. (afda43d)
* **examples:** adds hello-world app. (d6193e9)
* **examples:** adds static dart hello world example. (c59cc86)
* **facade:** add bool type (971e31f)
* **facade:** add support for `Date` (6748486)
* **facade/collection:** add StringMap support (d0c870f)
* **facade/lang:** add math and regexp support (d4c099d)
* **facade/lang:** support int (3482fb1)
* **forms:** add form builder (08bd3a4)
* **forms:** add optional controls (f27e538)
* **forms:** add support for checkbox (4b24734)
* **forms:** add support for nested forms (733915d)
* **forms:** add support for validations (ded83e5)
* **forms:** initial implementation of forms (cdb1e82)
* **forms:** initial implementation of forms declared in html (640134d)
* **forms:** remove support for declaring forms in html (a73c643)
* **Injector:** Support binding to null (a82e208)
* **injector:** add support for default bindings (f524a89)
* **injector:** change injector to recover from errors (9b41137)
* **injector:** change injector to show the full path when error happens in a constructor (async) (62004e2)
* **injector:** handle async cyclic dependencies (e7666d0)
* **injector:** handle construction errors (4d6c748)
* **injector:** handle in-progress async construction (e02cdfe)
* **injector:** implement InjectLazy (a017627)
* **injector:** implement async dependencies (14af5a0)
* **injector:** initial implementaion of dynamic injector (b219963)
* **largeTable:** add AngularJS 1.x largetable benchmark (bc8e517)
* **lexer:** initial (wip) implementation. (c85ab3a)
* **LifeCycle:** change LifeCycle to be able register it with a zone (0b550f9)
* **ng-if:** an implementation of ng-if (d5a12d5), closes #317
* **ng-repeat:** initial implementaion of ng-repeat. (60456c8)
* **package:** introduce a catch-all package angular. (ec5cb3e)
* **packaging:** automatically copy LICENSE to dist folders (320c089)
* **Parser:** add support for arrays and maps (ac060ed)
* **Parser:** add support for assignments (8cc008b)
* **parser:** add support for formatters (00bc9e5)
* **Parser:** add support for method invocations (7b777b1)
* **parser:** add support for ternary operator (a7fe25d)
* **parser:** adds basic expressions to the parser. (965fa1a)
* **parser:** adds support for variable bindings (1863d50)
* **parser:** change Parser to return null when one of the operands is null (c41f59c)
* **Parser:** implement Parser (01e6c7b)
* **Parser:** improve error handling (977bc77)
* **parser:** make method calls aware of ContextWithVariableBindings (156f3d9)
* **parser:** split parse into parseBinding and parseAction (52b3838)
* **parser:** throw when expected an identifier (8a829d3)
* **perf:** add AngularDart v1 of table scrolling benchmark (7379140)
* **perf:** autoscale benchmarks depending on the browser. (5c064c1)
* **perf:** cloud reporter should retry in case of a timeout (5f5ed06)
* **perf:** cloud reporter, more generic table layout (ed7d1cf)
* **perf:** disable wake lock and cpu freq scaling on android (8b2a5d7)
* **perf:** measure error and stop automatically when the numbers are good enough. (35ac3f3)
* **perf:** port table scrolling benchmark to Angular 2 (fcbdf02)
* **publish:** update files to publish to npm (cde8ffd)
* **RecordRange:** Set context for implicit receivers only (ab961b3)
* **Reflection:** extract reflection capabilities into a separate module (6e8175a)
* **RegExp:** expose match indexes in Dart (06f7481)
* **rtts_assert:** avoid deep recursion in prettyPrint (e05079f)
* **selector:** add support for :not (8d2ee6b), fixes #609, closes #948
* **selector:** initial version of the selector (08d4a37)
* **ShadowCss:** Make the shim also accept a selector for the host (5111f9a)
* **ShadowCss:** port implementation from webcomponent.js (d67f029)
* **shadowdom:** turn on ShadowDom Emulated Mode by default. (f1593eb)
* **ShadowDomStrategy:** implemented EmulatedUnscopedShadowDomStrategy (8541cfd)
* **spec:** add spec argument to the protractor config, allows to filter tests to run (0a0c0d8), closes #695
* **StyleInliner:** StyleInliner inlines @import css rules (e0cf1c7)
* **StyleUrlResolver:** rewrite url in styles (edb797e)
* **template:** add bang syntax shortcut (3395624), closes #522
* **TemplateConfig:** support array of arrays in TemplateConfig directives (6d8ccaa), fixes #592, closes #600
* **test:** add e2e tests for benchmarks and examples (14e91e2)
* **test_lib:** change test_lib.dart to structurally compare objects (acd7035)
* **test_lib:** implement SpyObject (f06433f)
* **test_lib:** support a timeout for dart async tests (9b08ab3)
* **test_lib:** support not.toBePromise() for Dart (e8bec99)
* **tests:** add a test injector (33b5ba8), fixes #614
* **transiler/dart:** re-export imported vars (c68e780), closes #41
* **transpiler:** Transform for..of to Dart as for..in (f088e9e), fixes #53
* **transpiler:** Transform template strings to triple quoted Dart strings (93f6d26)
* **transpiler:** add support for arrow functions (d1b90e1), fixes #28
* **transpiler:** add support for getters (035dc5b)
* **transpiler:** add support for named params to new expressions (ee1e54c)
* **transpiler:** allow @CONST annotation on class (8e6326f), closes #148
* **transpiler:** class fields for Dart (d16d6a0)
* **transpiler:** constructor and typed field semantics (089a2f1), fixes #11, fixes #42, fixes #17, closes #45
* **transpiler:** handle named params (64fe73e)
* **transpiler:** implement @IMPLEMENTS (965f70b)
* **transpiler:** implement optional params (1214f42)
* **TreeBenchmark:** use angular2 If directive (8a3d905)
* **UrlResolver:** combine a base URL with an URL (ff406e6)
* **vars:** assignment of component or element instance to vars. (6dbfe0d)
* **view:** add onChange implementation to view. (b0c9d05)
* **view:** add support for components that use shadow dom emulation (da9d041)
* **view:** add support for instantiation of nested component views. (be4cb2d)
* **view:** adds event binding to view instantiation. (c5b0baf)
* **view:** hook watch group instantiation in the view. (91f50b6)
* **View:** implement ProtoView.instantiate (31831ee)
* **view_pool:** adds a view pool of dehydrated views per protoview. (7bf5ab8)
* **viewport:** add initial integration test for template directives (7bc282d)
* **viewPort:** adds initial implementation of ViewPort. (c6f14dd)
* **views:** adds (de)hydration of views and template vars. (1746130)
* **ViewSplitter:** Change template shorthand syntax from &#39;!&#39; to &#39;*&#39; (69e02ee), fixes #717, closes #727
* **zone:** add initial implementation of VmTurnZone (df36ffb)
* **zone:** add support for long stack traces (df21c3c)
* add keyValDiff to default pipes (85abfa9)
* allow using KeyValueChanges as a pipe (4a5d53c)
* change template micro-syntax to new syntax (9db13be), closes #482
* introduce ExceptionHandler service (a1f4060)
* introduce Title service (0d1dece), closes #612, closes #900
* support binding to aria-* attributes (1846ce8), closes #643
* support binding to class.classname (7ce4f66), closes #551
* support binding to style.stylename.suffix (ee3f709), closes #553
* support bindings for the &#39;role&#39; attribute (92afad6), closes #630
* travis-ci integration (85b5543)

### Bug Fixes

* **analyzer:** fix a warning about an unused variable (59d6d60)
* **application:** also bind the root component to the injector (9329c0e)
* **BaseException:** Support stack traces in BaseException (352b640)
* **bench press:** Don’t use unicode in console reporter to prevent problems (5cbb174)
* **bench press:** remove check for android (eba751e)
* **benchmark:** remove duplicate line. (bccc863)
* **benchmarks:** add the reflection module to benchmark config files (3d05f52)
* **benchmarks:** fix infinite scroll benchmark. (7dba3a3)
* **benchmarks:** fix scrolling benchmark; add more tests (6d45153)
* **benchmarks:** prepare publish to pub (8adac53)
* **benchmarks:** use explicit `main()` function and do not reexport (5793311)
* **benchmarks_external:** use angular dart transformer (9b7e2e3)
* **benchpress:** add filter for when cloud config is not present (39977bd)
* **benchpress:** benchpress fixes and a smoke test for Dart (d1f03e5)
* **benchpress:** support `tdur` in events (b0c6db1)
* **bootstrap:** change bootstrap not to create a separate injector for the provided bindings (2074cc1)
* **browser_adapter:** work around WebKit bug with importing template elements (749a758), closes #851, closes #853
* **build:** Escape dollar signs in dart-transpiled string literals (93c18f5), closes #509
* **build:** `gulp build.js.prod` should call `benchpress.js.prod` (bc6f0db)
* **build:** analyze examples and benchmarks again (1cd848d)
* **build:** copy files that are included in html files to the same folder (9c9769e)
* **build:** disable the analysis of third-party libs (d985045)
* **build:** don’t do `pub get` until all pub specs have been copied (41856ad), fixes #130, closes #227
* **build:** finally publish to `rtts_assert` on npm (74c0699)
* **build:** make perf tests work again (15afb80)
* **build:** open new window for every benchmark (eb6385e)
* **build:** report and fail on errors (81a5ae8)
* **build:** run dartanalyzer after transpiler and html to avoid races (de855a7)
* **build:** simplify the e2e/perf config via command line arguments (8b7df90)
* **build:** support transpile to commonjs (013e1fa)
* **build:** use `rtts-assert` instead of `ng-rtts-assert`. (bbd212c)
* **cd:** report all changes on first cd run (b734d56), closes #454
* **Change Detection:** fix merge error (ceb9ee9)
* **change_detection:** handle locals when invoking a method (0dfd287), closes #660
* **change_detection:** pass the correct previous value when using pipes (7f31036), closes #588
* **change_detection/lexer:** support production mode (aa9eeb8)
* **change_detector:** adding new ranges when disabling the current enabled record (7f941eb)
* **ChangeDetector:** fix issues with handling empty ranges (2b53a2f)
* **ChangeDispatcher:** update the onRecordChange signature (86fb564)
* **class fields:** handle untyped fields (f864aa1)
* **compiler:** add a missing ; (dd1898c)
* **compiler:** add missing support to string literals (cf169f1), fixes #531, closes #559
* **compiler:** allow identifiers with `-` in the template bindings as keys. (0758165)
* **compiler:** always wrap views into an own `&lt;template&gt;` element (6305343)
* **Compiler:** asynchronous error reporting (c3873be)
* **compiler:** elements with events only create binders but not protoElementInjectors. (6e923cb), closes #577
* **compiler:** fix a dart analyzer warning (53906e4)
* **compiler:** fix a typo in BIND_NAME_REGEXP (7027674)
* **compiler:** fix directive registration order (b4338b6), fix #328
* **compiler:** fix nextSibling iterator in compiler. (a6a6273)
* **compiler:** fixes a bug with top level template directives. (5c4238c)
* **compiler:** properly bind to properties that don&#39;t have matching attr name (7e6f536), fixes #619, closes #783
* **compiler:** use parentheses around expressions and escape quotes (b2ecdb5)
* **compiler:** workaround for circular dependencies in nodejs (f1f0601), closes #897
* **compiler, view:** centralize TemplateElement checks and fix inconsistencies (1b79c91), fixes #189, closes #194
* **CompileStep:** use namespace to resolve circular dep issue (e0feeaf)
* **core:** export ViewPort in the public exports (72b970e)
* **core:** workaround for circular dependencies in nodejs (85211f0), closes #716
* **Dart1.8:** Promise handling (fc2181e)
* **Dart1.8:** fix analyzer warnings (0703ee5)
* **dart_libs:** add _dart suffix only for reserved lib names. (ce29862), closes #871
* **DartWriter:** number (js) maps to num (dart) (cff47d4)
* **docgen:** hide additional exports that throw off docgen. (a768f2e), closes #707
* **docs:** fix typo in compiler integration_spec.js (f30e3e5), closes #834
* **docs:** make them run again and integrate into ci (e490861)
* **e2e:** adds events to hello world static. (af02f2b)
* **ElementBinderBuilder:** allow a directive to have mutliple bindings (09092b2), fix #320
* **event:** check hydration before firing event. (2381c36)
* **events:** extract eventHandler to new function scope. (7f701da)
* **example:** correct markup in the hello world example (95d86d1)
* **example:** make it work (2b7738c)
* **examples:** fix hello_world example (js) (3e57189)
* **examples:** hello-world app on Windows (ead2769)
* **examples:** make todo example run again (d42fa07)
* **examples.dart:** add LifeCycle to the reflector (75549a6)
* **examples.dart:** initialize the reflector (90daca0), fixes #309
* **facade:** `ListWrapper.sort()` should not return the list (f54f4e8)
* **facade/lang:** use strict equality for performance (cc115d5)
* **gulpfile:** fix the dartanalyzer task (0a4d617)
* **gulpfile:** fix the pubbuild task on Windows (368cc29), closes #349
* **Injector:** fix dependencies in static injectors (1376e49), closes #784
* **Interpolation:** switch to new AST API (4df1825)
* **js2dart:** make tests work again (7e3005e)
* **lang:** fix small typo. (62efb56)
* **life_cycle:** remove cyclic dependency (63f23ec), fixes #477, closes #530
* **ListWrapper:** fix JS ListWrapper.remove() (211cb12)
* **NgRepeat:** activate index (52d8845)
* **parser:** handle empty strings (a3d9f0f)
* **parser:** parse pipes in template bindings (6b26509)
* **perf:** cloud reporter, calculate insertId correctly so that we don’t loose rows! (2265370)
* **perf:** fix selector benchmark (48125a8)
* **perf:** increase default timeout for perf tests (0aa0c26)
* **perf:** use correct param name in compiler benchmark (f24b9f2)
* **ProtoView:** element injector should have either a parent or a host (457cbaa), fix #359
* **record-range:** fixes bug when disabling empty ranges. (5bdefee)
* **reflection:** fix a typo (f55011c)
* **reflection:** update pubspec.yaml to add a missing dependency on reflection (bfd3c2d)
* **scripts:** make chrome launcher executable (d02e192)
* **setup:** don’t transpile transpiler sources via karma, only the specs (63d8107)
* **setup:** use upstream traceur with explicit patches (f39c6dc)
* **shadow_dom_emulation:** handle the case when the array of element injectors has nulls (29f5ee0)
* **shadowdom:** allow conditional content tags. (f7963e1)
* **ShimShadowCss:** preserve attribute on style elements (9250cd6)
* **StyleInliner:** add support for url(url) format (4d8d17c)
* **StyleUrlResolver:** add support for media query in import rules (9f181f3)
* **super:** `super()` now means call the proto of the current function. (94958e0)
* **test:** add `v8` category to server spec (e1a1dd0)
* **test_lib:** allow equality tests for `Map` (7482b68)
* **test_lib:** remove getDistributedNodes emulation in NodeJS (c67194a)
* **test_lib:** support comparing Maps in nested structures (ec93556)
* **test_lib:** support deep compare of objects with private/static fields (e163eb2)
* **tests:** don’t fail on current chrome canary (62f08d3)
* **tests:** make Angular 2 compiler perf test use correct param name (9682437)
* **tests:** show stack traces for transpiler unitttests (713b670)
* **transpile:** fix usage of `int` and references to `assert` module (6f59f2f)
* **transpiler:** only call transform/visit when defined (94e5564)
* **transpiler:** support arrow functions with complex body in named arguments (4484583)
* **transpiler/dart:** re-exporting only some bindings (c515317)
* **treeBenchmark:** bootstrap only relevant portion to prevent angular from clobbering form (dfcce3a)
* **types:** Add StringMap type (cd90038)
* **view:** ViewPort light should come from the direct parent (fc1b791)
* **view:** fix DirectivePropertyGroupMemento to return a new group instead of null (33b47bd)
* **view:** move nodes into the live document when cloning. (b1fc3e8), closes #724
* **view_container:** fixes injection on dynamically added views. (2f015cc), closes #777
* **views:** adds dehydration calls to ng-repeat removed views. (8612af9), closes #416
* **zones:** update to v0.4.0 (4623e88), closes #487
* Enabled annotation support for Dart (6c8da62)
* Static DI init (009e11a)
* constrain stack_trace version, which breaks build (cf51057)
* correct library not to have lib and dart in name. (87dd88f)
* flip attr / property bind in directives annotations (56f4e84), fixes #648, closes #684
* properly bind to camelCased properties (b39d2c0), fixes #866, closes #941
* properly close the &lt;tree&gt; tag in benchmark (c25e9e7)
* remove one more use of for..of (91426a8)

### Performance Improvements

* **CD:** Special cased interpolation in AST, Parser, and CD (3b34ef4)
* **Change Detection:** Remove a useless test (2d2f449)
* **Change Detection:** Track the range &amp; group on changes only (2c4a2f5)
* **change detection:** minimized amount of code in protective try-catch (1320175)
* **Change Detection:** remove the usage of getters/setters (68da001)
* **change_detection:** add baseline to change detection benchmark (65242fb)
* **change_detection:** use object pools not to create unnecessary garbage (db0f0c4)
* **Compiler:** use Promises only when strictly required (74f92c6)
* **ElementInjector:** add a benchmark measuring the instantiation of element injectors without using reflection (c11ca94)
* **ProtoRecord:** remove the unused prev field (f8c070c)
* **ProtoRecordRange:** re-use a ProtoRecordCreator (0f3134a)
* **RecordRange:** optimize disable() (5c531f7)
* **view:** inline and refactor view instantiation and hydration (3ec3d5e), closes #291
* Change baseline benchmark to be more consistent with the Angular (bed4b52)
* Traverse dom using firstChild instead of childNodes (0866485)
* add button for profiling tree benchmark (6e9f485)
* force GC on profiles (f6ebaf7)
* improve baseline speed by 30% (56b7ba4)
* remove field declarations from branches in constructors (c0a99ee)
* run CPU profile on constant count so that time numbers can be compared between runs (e4a4ec8)
* use === instead of == for faster checks. (2e1feec)


