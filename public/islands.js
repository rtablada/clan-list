"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('islands/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'islands/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('islands/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'islands/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('islands/components/clan-pane/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    clans: Ember['default'].computed('data', function () {
      var data = this.get('data');
      var clans = [];

      for (var property in data) {
        clans.push(data[property]);
      }

      return clans;
    }),

    actions: {
      showClanDetails: function showClanDetails(clan) {
        var _this = this;

        Ember['default'].$.ajax({
          url: '/clans/' + clan.id
        }).then(function (result) {
          _this.set('clanDetail', result);
        });
      },

      hideDetail: function hideDetail() {
        this.set('clanDetail', null);
      }
    }
  });

});
define('islands/components/clan-pane/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "islands/components/clan-pane/template.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","collection-item");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","badge");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element1,1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
            return morphs;
          },
          statements: [
            ["content","player.name",["loc",[null,[6,6],[6,21]]]],
            ["content","player.score",["loc",[null,[7,26],[7,42]]]]
          ],
          locals: ["player"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "islands/components/clan-pane/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","collection with-header");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","collection-header");
          var el3 = dom.createElement("h4");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" - ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","collection-item");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3,"href","#");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4,"class","mdi-content-reply");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Back");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var element3 = dom.childAt(element2, [1, 0]);
          var element4 = dom.childAt(element2, [5, 0]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element3,0,0);
          morphs[1] = dom.createMorphAt(element3,2,2);
          morphs[2] = dom.createMorphAt(element2,3,3);
          morphs[3] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [
          ["content","clanDetail.name",["loc",[null,[3,36],[3,55]]]],
          ["content","clanDetail.tag",["loc",[null,[3,58],[3,76]]]],
          ["block","each",[["get","clanDetail.players",["loc",[null,[4,10],[4,28]]]]],[],0,null,["loc",[null,[4,2],[9,11]]]],
          ["element","action",["hideDetail"],[],["loc",[null,[11,42],[11,65]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 22,
                "column": 4
              }
            },
            "moduleName": "islands/components/clan-pane/template.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","collection-item clan-item");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" -\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","grey-text text-lighten-1");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","badge");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0,1,1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
            return morphs;
          },
          statements: [
            ["element","action",["showClanDetails",["get","clan.value",["loc",[null,[17,71],[17,81]]]]],[],["loc",[null,[17,44],[17,83]]]],
            ["content","clan.value.name",["loc",[null,[18,8],[18,27]]]],
            ["content","clan.value.tag",["loc",[null,[19,47],[19,65]]]],
            ["content","clan.count",["loc",[null,[20,28],[20,42]]]]
          ],
          locals: ["clan"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 24,
              "column": 0
            }
          },
          "moduleName": "islands/components/clan-pane/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","collection with-header");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","collection-header");
          var el3 = dom.createElement("h4");
          var el4 = dom.createTextNode("Clans");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),3,3);
          return morphs;
        },
        statements: [
          ["block","each",[["get","clans",["loc",[null,[16,12],[16,17]]]]],[],0,null,["loc",[null,[16,4],[22,13]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "islands/components/clan-pane/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","clanDetail",["loc",[null,[1,6],[1,16]]]]],[],0,1,["loc",[null,[1,0],[24,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('islands/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('islands/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('islands/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'islands/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('islands/initializers/boot-ember-islands', ['exports', 'ember', 'ember-islands/deactivate-routing', 'ember-islands/render-components'], function (exports, Ember, deactivateRouting, renderComponents) {

  'use strict';

  exports.initialize = initialize;

  var get = Ember['default'].get;
  var set = Ember['default'].set;

  function initialize(registry, application) {
    if (get(application, 'EMBER_ISLANDS.bypass')) {
      set(application.__deprecatedInstance__, 'EMBER_ISLANDS', { bypass: true });
    }
  }

  ;

  exports['default'] = {
    name: 'boot-ember-islands',
    initialize: initialize
  };

});
define('islands/initializers/export-application-global', ['exports', 'ember', 'islands/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('islands/instance-initializers/boot-ember-islands', ['exports', 'ember', 'ember-islands/deactivate-routing', 'ember-islands/render-components'], function (exports, Ember, deactivateRouting, renderComponents) {

  'use strict';

  exports.initialize = initialize;

  var get = Ember['default'].get;

  function initialize(instance) {
    if (get(instance, 'EMBER_ISLANDS.bypass')) {
      return;
    }

    deactivateRouting['default'](instance);
    renderComponents['default'](instance);
  }

  ;

  exports['default'] = {
    name: 'boot-ember-islands',
    after: 'registerComponentLookup',
    initialize: initialize
  };

});
define('islands/router', ['exports', 'ember', 'islands/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('islands/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "islands/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('islands/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('islands/tests/components/clan-pane/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/clan-pane');
  QUnit.test('components/clan-pane/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/clan-pane/component.js should pass jshint.'); 
  });

});
define('islands/tests/helpers/resolver', ['exports', 'ember/resolver', 'islands/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('islands/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('islands/tests/helpers/start-app', ['exports', 'ember', 'islands/app', 'islands/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('islands/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('islands/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('islands/tests/test-helper', ['islands/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('islands/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('islands/config/environment', ['ember'], function(Ember) {
  var prefix = 'islands';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("islands/tests/test-helper");
} else {
  require("islands/app")["default"].create({"name":"islands","version":"0.0.0+c68c8fef"});
}

/* jshint ignore:end */
//# sourceMappingURL=islands.map