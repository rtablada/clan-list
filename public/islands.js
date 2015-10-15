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
    })
  });

});
define('islands/components/clan-pane/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 10,
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","collection-item");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" -\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","grey-text text-lighten-1");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
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
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
          return morphs;
        },
        statements: [
          ["inline","log",[["get","clan",["loc",[null,[4,10],[4,14]]]]],[],["loc",[null,[4,4],[4,16]]]],
          ["content","clan.value.name",["loc",[null,[6,6],[6,25]]]],
          ["content","clan.value.tag",["loc",[null,[7,45],[7,63]]]],
          ["content","clan.count",["loc",[null,[8,26],[8,40]]]]
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
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
        var el4 = dom.createTextNode("Clans");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),3,3);
        return morphs;
      },
      statements: [
        ["block","each",[["get","clans",["loc",[null,[3,10],[3,15]]]]],[],0,null,["loc",[null,[3,2],[10,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('islands/components/lf-outlet', ['exports', 'liquid-fire/ember-internals'], function (exports, ember_internals) {

	'use strict';

	exports['default'] = ember_internals.StaticOutlet;

});
define('islands/components/lf-overlay', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var COUNTER = '__lf-modal-open-counter';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'span',
    classNames: ['lf-overlay'],

    didInsertElement: function didInsertElement() {
      var body = Ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.addClass('lf-modal-open');
      body.data(COUNTER, counter + 1);
    },

    willDestroy: function willDestroy() {
      var body = Ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.data(COUNTER, counter - 1);
      if (counter < 2) {
        body.removeClass('lf-modal-open');
      }
    }
  });

});
define('islands/components/liquid-bind', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidBind = Ember['default'].Component.extend({
    tagName: '',
    positionalParams: ['value'] // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidBind;

});
define('islands/components/liquid-child', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['liquid-child'],

    didInsertElement: function didInsertElement() {
      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this.sendAction('liquidChildDidRender', this);
    }

  });

});
define('islands/components/liquid-container', ['exports', 'ember', 'liquid-fire/growable', 'islands/components/liquid-measured'], function (exports, Ember, Growable, liquid_measured) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(Growable['default'], {
    classNames: ['liquid-container'],

    lockSize: function lockSize(elt, want) {
      elt.outerWidth(want.width);
      elt.outerHeight(want.height);
    },

    unlockSize: function unlockSize() {
      var _this = this;

      var doUnlock = function doUnlock() {
        _this.updateAnimatingClass(false);
        var elt = _this.$();
        if (elt) {
          elt.css({ width: '', height: '' });
        }
      };
      if (this._scaling) {
        this._scaling.then(doUnlock);
      } else {
        doUnlock();
      }
    },

    // We're doing this manually instead of via classNameBindings
    // because it depends on upward-data-flow, which generates warnings
    // under Glimmer.
    updateAnimatingClass: function updateAnimatingClass(on) {
      if (this.isDestroyed || !this._wasInserted) {
        return;
      }
      if (arguments.length === 0) {
        on = this.get('liquidAnimating');
      } else {
        this.set('liquidAnimating', on);
      }
      if (on) {
        this.$().addClass('liquid-animating');
      } else {
        this.$().removeClass('liquid-animating');
      }
    },

    startMonitoringSize: Ember['default'].on('didInsertElement', function () {
      this._wasInserted = true;
      this.updateAnimatingClass();
    }),

    actions: {

      willTransition: function willTransition(versions) {
        if (!this._wasInserted) {
          return;
        }

        // Remember our own size before anything changes
        var elt = this.$();
        this._cachedSize = liquid_measured.measure(elt);

        // And make any children absolutely positioned with fixed sizes.
        for (var i = 0; i < versions.length; i++) {
          goAbsolute(versions[i]);
        }

        // Apply '.liquid-animating' to liquid-container allowing
        // any customizable CSS control while an animating is occuring
        this.updateAnimatingClass(true);
      },

      afterChildInsertion: function afterChildInsertion(versions) {
        var elt = this.$();
        var enableGrowth = this.get('enableGrowth') !== false;

        // Measure  children
        var sizes = [];
        for (var i = 0; i < versions.length; i++) {
          if (versions[i].view) {
            sizes[i] = liquid_measured.measure(versions[i].view.$());
          }
        }

        // Measure ourself again to see how big the new children make
        // us.
        var want = liquid_measured.measure(elt);
        var have = this._cachedSize || want;

        // Make ourself absolute
        if (enableGrowth) {
          this.lockSize(elt, have);
        } else {
          this.lockSize(elt, {
            height: Math.max(want.height, have.height),
            width: Math.max(want.width, have.width)
          });
        }

        // Make the children absolute and fixed size.
        for (i = 0; i < versions.length; i++) {
          goAbsolute(versions[i], sizes[i]);
        }

        // Kick off our growth animation
        if (enableGrowth) {
          this._scaling = this.animateGrowth(elt, have, want);
        }
      },

      afterTransition: function afterTransition(versions) {
        for (var i = 0; i < versions.length; i++) {
          goStatic(versions[i]);
        }
        this.unlockSize();
      }
    }
  });

  function goAbsolute(version, size) {
    if (!version.view) {
      return;
    }
    var elt = version.view.$();
    var pos = elt.position();
    if (!size) {
      size = liquid_measured.measure(elt);
    }
    elt.outerWidth(size.width);
    elt.outerHeight(size.height);
    elt.css({
      position: 'absolute',
      top: pos.top,
      left: pos.left
    });
  }

  function goStatic(version) {
    if (version.view && !version.view.isDestroyed) {
      version.view.$().css({ width: '', height: '', position: '' });
    }
  }

});
define('islands/components/liquid-if', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, Ember, ember_internals) {

  'use strict';

  var LiquidIf = Ember['default'].Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    helperName: 'liquid-if',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      var predicate = ember_internals.shouldDisplay(this.getAttr('predicate'));
      this.set('showFirstBlock', this.inverted ? !predicate : predicate);
    }
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports['default'] = LiquidIf;

});
define('islands/components/liquid-measured', ['exports', 'liquid-fire/components/liquid-measured'], function (exports, liquid_measured) {

	'use strict';



	exports['default'] = liquid_measured['default'];
	exports.measure = liquid_measured.measure;

});
define('islands/components/liquid-modal', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['liquid-modal'],
    currentContext: Ember['default'].computed('owner.modalContexts.lastObject', function () {
      var context = this.get('owner.modalContexts.lastObject');
      if (context) {
        context.view = this.innerView(context);
      }
      return context;
    }),

    owner: Ember['default'].inject.service('liquid-fire-modals'),

    innerView: function innerView(current) {
      var self = this,
          name = current.get('name'),
          container = this.get('container'),
          component = container.lookup('component-lookup:main').lookupFactory(name);
      Ember['default'].assert("Tried to render a modal using component '" + name + "', but couldn't find it.", !!component);

      var args = Ember['default'].copy(current.get('params'));

      args.registerMyself = Ember['default'].on('init', function () {
        self.set('innerViewInstance', this);
      });

      // set source so we can bind other params to it
      args._source = Ember['default'].computed(function () {
        return current.get("source");
      });

      var otherParams = current.get("options.otherParams");
      var from, to;
      for (from in otherParams) {
        to = otherParams[from];
        args[to] = Ember['default'].computed.alias("_source." + from);
      }

      var actions = current.get("options.actions") || {};

      // Override sendAction in the modal component so we can intercept and
      // dynamically dispatch to the controller as expected
      args.sendAction = function (name) {
        var actionName = actions[name];
        if (!actionName) {
          this._super.apply(this, Array.prototype.slice.call(arguments));
          return;
        }

        var controller = current.get("source");
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(actionName);
        controller.send.apply(controller, args);
      };

      return component.extend(args);
    },

    actions: {
      outsideClick: function outsideClick() {
        if (this.get('currentContext.options.dismissWithOutsideClick')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'outsideClick');
        }
      },
      escape: function escape() {
        if (this.get('currentContext.options.dismissWithEscape')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'escape');
        }
      },
      dismiss: function dismiss() {
        var source = this.get('currentContext.source'),
            proto = source.constructor.proto(),
            params = this.get('currentContext.options.withParams'),
            clearThem = {};

        for (var key in params) {
          if (proto[key] instanceof Ember['default'].ComputedProperty) {
            clearThem[key] = undefined;
          } else {
            clearThem[key] = proto[key];
          }
        }
        source.setProperties(clearThem);
      }
    }
  });

  function proxyToInnerInstance(self, message) {
    var vi = self.get('innerViewInstance');
    if (vi) {
      vi.send(message);
    }
  }

});
define('islands/components/liquid-outlet', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidOutlet = Ember['default'].Component.extend({
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      this.set('outletName', this.attrs.inputOutletName || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports['default'] = LiquidOutlet;

});
define('islands/components/liquid-spacer', ['exports', 'liquid-fire/components/liquid-spacer'], function (exports, liquid_spacer) {

	'use strict';



	exports['default'] = liquid_spacer['default'];

});
define('islands/components/liquid-unless', ['exports', 'islands/components/liquid-if'], function (exports, LiquidIf) {

  'use strict';

  exports['default'] = LiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });

});
define('islands/components/liquid-versions', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, Ember, ember_internals) {

  'use strict';

  var get = Ember['default'].get;
  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Component.extend({
    tagName: "",
    name: 'liquid-versions',

    transitionMap: Ember['default'].inject.service('liquid-fire-transitions'),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      if (!this.versions || this._lastVersion !== this.getAttr('value')) {
        this.appendVersion();
        this._lastVersion = this.getAttr('value');
      }
    },

    appendVersion: function appendVersion() {
      var versions = this.versions;
      var firstTime = false;
      var newValue = this.getAttr('value');
      var oldValue;

      if (!versions) {
        firstTime = true;
        versions = Ember['default'].A();
      } else {
        oldValue = versions[0];
      }

      // TODO: may need to extend the comparison to do the same kind of
      // key-based diffing that htmlbars is doing.
      if (!firstTime && (!oldValue && !newValue || oldValue === newValue)) {
        return;
      }

      this.notifyContainer('willTransition', versions);
      var newVersion = {
        value: newValue,
        shouldRender: newValue || get(this, 'renderWhenFalse')
      };
      versions.unshiftObject(newVersion);

      this.firstTime = firstTime;
      if (firstTime) {
        set(this, 'versions', versions);
      }

      if (!newVersion.shouldRender && !firstTime) {
        this._transition();
      }
    },

    _transition: function _transition() {
      var _this = this;

      var versions = get(this, 'versions');
      var transition;
      var firstTime = this.firstTime;
      this.firstTime = false;

      this.notifyContainer('afterChildInsertion', versions);

      transition = get(this, 'transitionMap').transitionFor({
        versions: versions,
        parentElement: Ember['default'].$(ember_internals.containingElement(this)),
        use: get(this, 'use'),
        // Using strings instead of booleans here is an
        // optimization. The constraint system can match them more
        // efficiently, since it treats boolean constraints as generic
        // "match anything truthy/falsy" predicates, whereas string
        // checks are a direct object property lookup.
        firstTime: firstTime ? 'yes' : 'no',
        helperName: get(this, 'name'),
        outletName: get(this, 'outletName')
      });

      if (this._runningTransition) {
        this._runningTransition.interrupt();
      }
      this._runningTransition = transition;

      transition.run().then(function (wasInterrupted) {
        // if we were interrupted, we don't handle the cleanup because
        // another transition has already taken over.
        if (!wasInterrupted) {
          _this.finalizeVersions(versions);
          _this.notifyContainer("afterTransition", versions);
        }
      }, function (err) {
        _this.finalizeVersions(versions);
        _this.notifyContainer("afterTransition", versions);
        throw err;
      });
    },

    finalizeVersions: function finalizeVersions(versions) {
      versions.replace(1, versions.length - 1);
    },

    notifyContainer: function notifyContainer(method, versions) {
      var target = get(this, 'notify');
      if (target) {
        target.send(method, versions);
      }
    },

    actions: {
      childDidRender: function childDidRender(child) {
        var version = get(child, 'version');
        set(version, 'view', child);
        this._transition();
      }
    }

  });

});
define('islands/components/liquid-with', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidWith = Ember['default'].Component.extend({
    name: 'liquid-with',
    positionalParams: ['value'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    iAmDeprecated: Ember['default'].on('init', function () {
      Ember['default'].deprecate("liquid-with is deprecated, use liquid-bind instead -- it accepts a block now.");
    })
  });

  LiquidWith.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidWith;

});
define('islands/components/lm-container', ['exports', 'ember', 'liquid-fire/tabbable'], function (exports, Ember) {

  'use strict';

  /*
     Parts of this file were adapted from ic-modal

     https://github.com/instructure/ic-modal
     Released under The MIT License (MIT)
     Copyright (c) 2014 Instructure, Inc.
  */

  var lastOpenedModal = null;
  Ember['default'].$(document).on('focusin', handleTabIntoBrowser);

  function handleTabIntoBrowser() {
    if (lastOpenedModal) {
      lastOpenedModal.focus();
    }
  }

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['lm-container'],
    attributeBindings: ['tabindex'],
    tabindex: 0,

    keyUp: function keyUp(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.sendAction();
      }
    },

    keyDown: function keyDown(event) {
      // Tab key
      if (event.keyCode === 9) {
        this.constrainTabNavigation(event);
      }
    },

    didInsertElement: function didInsertElement() {
      this.focus();
      lastOpenedModal = this;
    },

    willDestroy: function willDestroy() {
      lastOpenedModal = null;
    },

    focus: function focus() {
      if (this.get('element').contains(document.activeElement)) {
        // just let it be if we already contain the activeElement
        return;
      }
      var target = this.$('[autofocus]');
      if (!target.length) {
        target = this.$(':tabbable');
      }

      if (!target.length) {
        target = this.$();
      }

      target[0].focus();
    },

    constrainTabNavigation: function constrainTabNavigation(event) {
      var tabbable = this.$(':tabbable');
      var finalTabbable = tabbable[event.shiftKey ? 'first' : 'last']()[0];
      var leavingFinalTabbable = finalTabbable === document.activeElement ||
      // handle immediate shift+tab after opening with mouse
      this.get('element') === document.activeElement;
      if (!leavingFinalTabbable) {
        return;
      }
      event.preventDefault();
      tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
    },

    click: function click(event) {
      if (event.target === this.get('element')) {
        this.sendAction('clickAway');
      }
    }
  });

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
define('islands/initializers/liquid-fire', ['exports', 'liquid-fire/router-dsl-ext', 'liquid-fire/ember-internals'], function (exports, __dep0__, ember_internals) {

  'use strict';

  // This initializer exists only to make sure that the following
  // imports happen before the app boots.
  ember_internals.registerKeywords();

  exports['default'] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
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
define('islands/liquid-fire/tests/modules/liquid-fire/action.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/action.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/action.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/animate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/animate.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/animate.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/components/liquid-measured.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire/components');
  QUnit.test('modules/liquid-fire/components/liquid-measured.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/components/liquid-measured.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/components/liquid-spacer.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire/components');
  QUnit.test('modules/liquid-fire/components/liquid-spacer.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/components/liquid-spacer.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/constrainables.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/constrainables.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/constrainables.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/constraint.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/constraint.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/constraint.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/constraints.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/constraints.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/constraints.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/dsl.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/dsl.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/dsl.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/ember-internals.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/ember-internals.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/ember-internals.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/growable.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/growable.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/growable.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/index.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/index.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/internal-rules.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/internal-rules.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/internal-rules.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/modal.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/modal.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/modal.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/modals.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/modals.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/modals.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/mutation-observer.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/mutation-observer.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/mutation-observer.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/promise.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/promise.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/promise.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/router-dsl-ext.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/router-dsl-ext.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/router-dsl-ext.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/rule.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/rule.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/rule.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/running-transition.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/running-transition.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/running-transition.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/tabbable.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/tabbable.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/tabbable.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/transition-map.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/transition-map.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/transition-map.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/velocity-ext.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/velocity-ext.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/velocity-ext.js should pass jshint.');
  });

});
define('islands/liquid-fire/tests/modules/liquid-fire/version-warnings.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/liquid-fire');
  QUnit.test('modules/liquid-fire/version-warnings.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/liquid-fire/version-warnings.js should pass jshint.');
  });

});
define('islands/router', ['exports', 'ember', 'islands/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('islands/services/liquid-fire-modals', ['exports', 'liquid-fire/modals'], function (exports, Modals) {

	'use strict';

	exports['default'] = Modals['default'];

});
define('islands/services/liquid-fire-transitions', ['exports', 'liquid-fire/transition-map'], function (exports, TransitionMap) {

	'use strict';

	exports['default'] = TransitionMap['default'];

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
define('islands/templates/components/liquid-bind', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 7,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-bind.hbs"
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
              ["inline","yield",[["get","version",["loc",[null,[6,15],[6,22]]]]],[],["loc",[null,[6,6],[6,26]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-bind.hbs"
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
              ["content","version",["loc",[null,[8,6],[8,20]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 0
              }
            },
            "moduleName": "islands/templates/components/liquid-bind.hbs"
          },
          arity: 1,
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
            ["block","if",[["get","hasBlock",["loc",[null,[5,11],[5,19]]]]],[],0,1,["loc",[null,[5,4],[9,12]]]]
          ],
          locals: ["version"],
          templates: [child0, child1]
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
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-bind.hbs"
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
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[2,28],[2,39]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[2,44],[2,47]]]]],[],[]],"outletName",["subexpr","@mut",[["get","attrs.outletName",["loc",[null,[3,32],[3,48]]]]],[],[]],"name","liquid-bind","renderWhenFalse",true,"class",["subexpr","@mut",[["get","class",["loc",[null,[4,67],[4,72]]]]],[],[]]],0,null,["loc",[null,[2,2],[11,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.7",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 6
                  },
                  "end": {
                    "line": 27,
                    "column": 6
                  }
                },
                "moduleName": "islands/templates/components/liquid-bind.hbs"
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
                ["inline","yield",[["get","version",["loc",[null,[26,17],[26,24]]]]],[],["loc",[null,[26,8],[26,28]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.7",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 6
                  },
                  "end": {
                    "line": 29,
                    "column": 6
                  }
                },
                "moduleName": "islands/templates/components/liquid-bind.hbs"
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
                ["content","version",["loc",[null,[28,8],[28,22]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 4
                },
                "end": {
                  "line": 31,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-bind.hbs"
            },
            arity: 1,
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
              ["block","if",[["get","hasBlock",["loc",[null,[25,13],[25,21]]]]],[],0,1,["loc",[null,[25,6],[29,14]]]]
            ],
            locals: ["version"],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-bind.hbs"
          },
          arity: 1,
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
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[21,30],[21,41]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[21,49],[21,58]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[21,63],[21,66]]]]],[],[]],"outletName",["subexpr","@mut",[["get","attrs.outletName",["loc",[null,[22,34],[22,50]]]]],[],[]],"name","liquid-bind","renderWhenFalse",true],0,null,["loc",[null,[21,4],[31,26]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-bind.hbs"
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
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[14,9],[14,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[15,12],[15,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[16,19],[16,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[17,26],[17,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[18,17],[18,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[19,19],[19,31]]]]],[],[]]],0,null,["loc",[null,[13,2],[32,25]]]]
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
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "islands/templates/components/liquid-bind.hbs"
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
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[33,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('islands/templates/components/liquid-container', ['exports'], function (exports) {

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
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "islands/templates/components/liquid-container.hbs"
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
        ["inline","yield",[["get","this",["loc",[null,[1,8],[1,12]]]]],[],["loc",[null,[1,0],[1,14]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('islands/templates/components/liquid-if', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-if.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","yield",["loc",[null,[5,6],[5,15]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-if.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","yield",[],["to","inverse"],["loc",[null,[7,6],[7,28]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-if.hbs"
          },
          arity: 1,
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
            ["block","if",[["get","valueVersion",["loc",[null,[4,10],[4,22]]]]],[],0,1,["loc",[null,[4,4],[8,11]]]]
          ],
          locals: ["valueVersion"],
          templates: [child0, child1]
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
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-if.hbs"
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
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","showFirstBlock",["loc",[null,[2,27],[2,41]]]]],[],[]],"name",["subexpr","@mut",[["get","helperName",["loc",[null,[2,47],[2,57]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[3,27],[3,30]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[3,47],[3,67]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[3,74],[3,79]]]]],[],[]]],0,null,["loc",[null,[2,2],[9,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.7",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 23,
                    "column": 6
                  }
                },
                "moduleName": "islands/templates/components/liquid-if.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["content","yield",["loc",[null,[22,8],[22,17]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.7",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 23,
                    "column": 6
                  },
                  "end": {
                    "line": 25,
                    "column": 6
                  }
                },
                "moduleName": "islands/templates/components/liquid-if.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["inline","yield",[],["to","inverse"],["loc",[null,[24,8],[24,30]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 4
                },
                "end": {
                  "line": 26,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-if.hbs"
            },
            arity: 1,
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
              ["block","if",[["get","valueVersion",["loc",[null,[21,12],[21,24]]]]],[],0,1,["loc",[null,[21,6],[25,13]]]]
            ],
            locals: ["valueVersion"],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 27,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-if.hbs"
          },
          arity: 1,
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
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","showFirstBlock",["loc",[null,[19,29],[19,43]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[19,51],[19,60]]]]],[],[]],"name",["subexpr","@mut",[["get","helperName",["loc",[null,[19,66],[19,76]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[20,8],[20,11]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[20,28],[20,48]]]]],0,null,["loc",[null,[19,4],[26,24]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-if.hbs"
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
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[12,9],[12,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[13,12],[13,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[14,19],[14,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[15,26],[15,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[16,17],[16,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[17,19],[17,31]]]]],[],[]]],0,null,["loc",[null,[11,2],[27,23]]]]
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
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "islands/templates/components/liquid-if.hbs"
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
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[28,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('islands/templates/components/liquid-modal', ['exports'], function (exports) {

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
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-modal.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"role","dialog");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'aria-labelledby');
            morphs[2] = dom.createAttrMorph(element0, 'aria-label');
            morphs[3] = dom.createMorphAt(element0,1,1);
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["lf-dialog ",["get","cc.options.dialogClass",["loc",[null,[3,28],[3,50]]]]]]],
            ["attribute","aria-labelledby",["get","cc.options.ariaLabelledBy",["loc",[null,[3,86],[3,111]]]]],
            ["attribute","aria-label",["get","cc.options.ariaLabel",["loc",[null,[3,127],[3,147]]]]],
            ["inline","lf-vue",[["get","cc.view",["loc",[null,[4,15],[4,22]]]]],["dismiss","dismiss"],["loc",[null,[4,6],[4,42]]]]
          ],
          locals: [],
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
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-modal.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","lm-container",[],["action","escape","clickAway","outsideClick"],0,null,["loc",[null,[2,2],[6,19]]]],
          ["content","lf-overlay",["loc",[null,[7,2],[7,16]]]]
        ],
        locals: ["cc"],
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
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "islands/templates/components/liquid-modal.hbs"
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
        ["block","liquid-versions",[],["name","liquid-modal","value",["subexpr","@mut",[["get","currentContext",["loc",[null,[1,45],[1,59]]]]],[],[]],"renderWhenFalse",false],0,null,["loc",[null,[1,0],[8,20]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('islands/templates/components/liquid-outlet', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 6
                },
                "end": {
                  "line": 17,
                  "column": 6
                }
              },
              "moduleName": "islands/templates/components/liquid-outlet.hbs"
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
              ["inline","outlet",[["get","outletName",["loc",[null,[16,17],[16,27]]]]],[],["loc",[null,[16,8],[16,29]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-outlet.hbs"
          },
          arity: 1,
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
            ["block","set-outlet-state",[["get","outletName",["loc",[null,[15,26],[15,36]]]],["get","version.outletState",["loc",[null,[15,37],[15,56]]]]],[],0,null,["loc",[null,[15,6],[17,28]]]]
          ],
          locals: ["version"],
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
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-outlet.hbs"
        },
        arity: 1,
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
          ["block","liquid-bind",[["get","outletState",["loc",[null,[2,17],[2,28]]]]],["id",["subexpr","@mut",[["get","id",["loc",[null,[3,9],[3,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[4,12],[4,17]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[5,10],[5,13]]]]],[],[]],"name","liquid-outlet","outletName",["subexpr","@mut",[["get","outletName",["loc",[null,[7,17],[7,27]]]]],[],[]],"containerless",["subexpr","@mut",[["get","containerless",["loc",[null,[8,20],[8,33]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[9,19],[9,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[10,26],[10,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[11,17],[11,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[12,19],[12,31]]]]],[],[]]],0,null,["loc",[null,[2,2],[19,20]]]]
        ],
        locals: ["outletState"],
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
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "islands/templates/components/liquid-outlet.hbs"
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
        ["block","get-outlet-state",[["get","outletName",["loc",[null,[1,21],[1,31]]]]],[],0,null,["loc",[null,[1,0],[20,21]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('islands/templates/components/liquid-versions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 5,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-versions.hbs"
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
              ["inline","yield",[["get","version.value",["loc",[null,[4,14],[4,27]]]]],[],["loc",[null,[4,6],[4,31]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-versions.hbs"
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
            ["block","liquid-child",[],["version",["subexpr","@mut",[["get","version",["loc",[null,[3,28],[3,35]]]]],[],[]],"liquidChildDidRender","childDidRender","class",["subexpr","@mut",[["get","class",["loc",[null,[3,80],[3,85]]]]],[],[]]],0,null,["loc",[null,[3,4],[5,21]]]]
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
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-versions.hbs"
        },
        arity: 1,
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
          ["block","if",[["get","version.shouldRender",["loc",[null,[2,8],[2,28]]]]],[],0,null,["loc",[null,[2,2],[6,9]]]]
        ],
        locals: ["version"],
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
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "islands/templates/components/liquid-versions.hbs"
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
        ["block","each",[["get","versions",["loc",[null,[1,8],[1,16]]]]],["key","@identity"],0,null,["loc",[null,[1,0],[7,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('islands/templates/components/liquid-with', ['exports'], function (exports) {

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
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-with.hbs"
          },
          arity: 1,
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
            ["inline","yield",[["get","version",["loc",[null,[3,13],[3,20]]]]],[],["loc",[null,[3,4],[3,24]]]]
          ],
          locals: ["version"],
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
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-with.hbs"
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
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[2,28],[2,39]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[2,44],[2,47]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[2,53],[2,57]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[2,64],[2,69]]]]],[],[]]],0,null,["loc",[null,[2,2],[4,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.7",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 4
                },
                "end": {
                  "line": 16,
                  "column": 4
                }
              },
              "moduleName": "islands/templates/components/liquid-with.hbs"
            },
            arity: 1,
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
              ["inline","yield",[["get","version",["loc",[null,[15,15],[15,22]]]]],[],["loc",[null,[15,6],[15,26]]]]
            ],
            locals: ["version"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "islands/templates/components/liquid-with.hbs"
          },
          arity: 1,
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
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[14,30],[14,41]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[14,49],[14,58]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[14,63],[14,66]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[14,72],[14,76]]]]],[],[]]],0,null,["loc",[null,[14,4],[16,25]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "islands/templates/components/liquid-with.hbs"
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
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[7,9],[7,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[8,12],[8,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[9,19],[9,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[10,26],[10,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[11,17],[11,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[12,19],[12,31]]]]],[],[]]],0,null,["loc",[null,[6,2],[17,23]]]]
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "islands/templates/components/liquid-with.hbs"
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
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[18,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
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
define('islands/transitions/cross-fade', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = crossFade;
  // BEGIN-SNIPPET cross-fade-definition
  function crossFade() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    liquid_fire.stop(this.oldElement);
    return liquid_fire.Promise.all([liquid_fire.animate(this.oldElement, { opacity: 0 }, opts), liquid_fire.animate(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }

  // END-SNIPPET

});
define('islands/transitions/default', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = defaultTransition;
  function defaultTransition() {
    if (this.newElement) {
      this.newElement.css({ visibility: '' });
    }
    return liquid_fire.Promise.resolve();
  }

});
define('islands/transitions/explode', ['exports', 'ember', 'liquid-fire'], function (exports, Ember, liquid_fire) {

  'use strict';



  exports['default'] = explode;

  function explode() {
    var _this = this;

    var seenElements = {};
    var sawBackgroundPiece = false;

    for (var _len = arguments.length, pieces = Array(_len), _key = 0; _key < _len; _key++) {
      pieces[_key] = arguments[_key];
    }

    var promises = pieces.map(function (piece) {
      if (piece.matchBy) {
        return matchAndExplode(_this, piece, seenElements);
      } else if (piece.pick || piece.pickOld || piece.pickNew) {
        return explodePiece(_this, piece, seenElements);
      } else {
        sawBackgroundPiece = true;
        return runAnimation(_this, piece);
      }
    });
    if (!sawBackgroundPiece) {
      if (this.newElement) {
        this.newElement.css({ visibility: '' });
      }
      if (this.oldElement) {
        this.oldElement.css({ visibility: 'hidden' });
      }
    }
    return liquid_fire.Promise.all(promises);
  }

  function explodePiece(context, piece, seen) {
    var childContext = Ember['default'].copy(context);
    var selectors = [piece.pickOld || piece.pick, piece.pickNew || piece.pick];
    var cleanupOld, cleanupNew;

    if (selectors[0] || selectors[1]) {
      cleanupOld = _explodePart(context, 'oldElement', childContext, selectors[0], seen);
      cleanupNew = _explodePart(context, 'newElement', childContext, selectors[1], seen);
      if (!cleanupOld && !cleanupNew) {
        return liquid_fire.Promise.resolve();
      }
    }

    return runAnimation(childContext, piece)["finally"](function () {
      if (cleanupOld) {
        cleanupOld();
      }
      if (cleanupNew) {
        cleanupNew();
      }
    });
  }

  function _explodePart(context, field, childContext, selector, seen) {
    var child, childOffset, width, height, newChild;
    var elt = context[field];

    childContext[field] = null;
    if (elt && selector) {
      child = elt.find(selector).filter(function () {
        var guid = Ember['default'].guidFor(this);
        if (!seen[guid]) {
          seen[guid] = true;
          return true;
        }
      });
      if (child.length > 0) {
        childOffset = child.offset();
        width = child.outerWidth();
        height = child.outerHeight();
        newChild = child.clone();

        // Hide the original element
        child.css({ visibility: 'hidden' });

        // If the original element's parent was hidden, hide our clone
        // too.
        if (elt.css('visibility') === 'hidden') {
          newChild.css({ visibility: 'hidden' });
        }
        newChild.appendTo(elt.parent());
        newChild.outerWidth(width);
        newChild.outerHeight(height);
        var newParentOffset = newChild.offsetParent().offset();
        newChild.css({
          position: 'absolute',
          top: childOffset.top - newParentOffset.top,
          left: childOffset.left - newParentOffset.left,
          margin: 0
        });

        // Pass the clone to the next animation
        childContext[field] = newChild;
        return function cleanup() {
          newChild.remove();
          child.css({ visibility: '' });
        };
      }
    }
  }

  function animationFor(context, piece) {
    var name, args, func;
    if (!piece.use) {
      throw new Error("every argument to the 'explode' animation must include a followup animation to 'use'");
    }
    if (Ember['default'].isArray(piece.use)) {
      name = piece.use[0];
      args = piece.use.slice(1);
    } else {
      name = piece.use;
      args = [];
    }
    if (typeof name === 'function') {
      func = name;
    } else {
      func = context.lookup(name);
    }
    return function () {
      return liquid_fire.Promise.resolve(func.apply(this, args));
    };
  }

  function runAnimation(context, piece) {
    return new liquid_fire.Promise(function (resolve, reject) {
      animationFor(context, piece).apply(context).then(resolve, reject);
    });
  }

  function matchAndExplode(context, piece, seen) {
    if (!context.oldElement || !context.newElement) {
      return liquid_fire.Promise.resolve();
    }

    // reduce the matchBy scope
    if (piece.pick) {
      context.oldElement = context.oldElement.find(piece.pick);
      context.newElement = context.newElement.find(piece.pick);
    }

    if (piece.pickOld) {
      context.oldElement = context.oldElement.find(piece.pickOld);
    }

    if (piece.pickNew) {
      context.newElement = context.newElement.find(piece.pickNew);
    }

    // use the fastest selector available
    var selector;

    if (piece.matchBy === 'id') {
      selector = function (attrValue) {
        return "#" + attrValue;
      };
    } else if (piece.matchBy === 'class') {
      selector = function (attrValue) {
        return "." + attrValue;
      };
    } else {
      selector = function (attrValue) {
        var escapedAttrValue = attrValue.replace(/'/g, "\\'");
        return "[" + piece.matchBy + "='" + escapedAttrValue + "']";
      };
    }

    var hits = Ember['default'].A(context.oldElement.find("[" + piece.matchBy + "]").toArray());
    return liquid_fire.Promise.all(hits.map(function (elt) {
      var attrValue = Ember['default'].$(elt).attr(piece.matchBy);

      // if there is no match for a particular item just skip it
      if (attrValue === "" || context.newElement.find(selector(attrValue)).length === 0) {
        return liquid_fire.Promise.resolve();
      }

      return explodePiece(context, {
        pick: selector(attrValue),
        use: piece.use
      }, seen);
    }));
  }

});
define('islands/transitions/fade', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = fade;

  // BEGIN-SNIPPET fade-definition
  function fade() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var firstStep;
    var outOpts = opts;
    var fadingElement = findFadingElement(this);

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = liquid_fire.finish(fadingElement, 'fade-out');
    } else {
      if (liquid_fire.isAnimating(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: liquid_fire.timeSpent(this.oldElement, 'fade-in') };
      }
      liquid_fire.stop(this.oldElement);
      firstStep = liquid_fire.animate(this.oldElement, { opacity: 0 }, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return liquid_fire.animate(_this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts, 'fade-in');
    });
  }

  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if (liquid_fire.isAnimating(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if (liquid_fire.isAnimating(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
  // END-SNIPPET

});
define('islands/transitions/flex-grow', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = flexGrow;
  function flexGrow(opts) {
    liquid_fire.stop(this.oldElement);
    return liquid_fire.Promise.all([liquid_fire.animate(this.oldElement, { 'flex-grow': 0 }, opts), liquid_fire.animate(this.newElement, { 'flex-grow': [1, 0] }, opts)]);
  }

});
define('islands/transitions/fly-to', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = flyTo;
  function flyTo() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (!this.newElement) {
      return liquid_fire.Promise.resolve();
    } else if (!this.oldElement) {
      this.newElement.css({ visibility: '' });
      return liquid_fire.Promise.resolve();
    }

    var oldOffset = this.oldElement.offset();
    var newOffset = this.newElement.offset();

    if (opts.movingSide === 'new') {
      var motion = {
        translateX: [0, oldOffset.left - newOffset.left],
        translateY: [0, oldOffset.top - newOffset.top],
        outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
        outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
      };
      this.oldElement.css({ visibility: 'hidden' });
      return liquid_fire.animate(this.newElement, motion, opts);
    } else {
      var motion = {
        translateX: newOffset.left - oldOffset.left,
        translateY: newOffset.top - oldOffset.top,
        outerWidth: this.newElement.outerWidth(),
        outerHeight: this.newElement.outerHeight()
      };
      this.newElement.css({ visibility: 'hidden' });
      return liquid_fire.animate(this.oldElement, motion, opts).then(function () {
        _this.newElement.css({ visibility: '' });
      });
    }
  }

});
define('islands/transitions/move-over', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = moveOver;

  function moveOver(dimension, direction, opts) {
    var _this = this;

    var oldParams = {},
        newParams = {},
        firstStep,
        property,
        measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if (liquid_fire.isAnimating(this.oldElement, 'moving-in')) {
      firstStep = liquid_fire.finish(this.oldElement, 'moving-in');
    } else {
      liquid_fire.stop(this.oldElement);
      firstStep = liquid_fire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';
      newParams[property] = ["0px", -1 * bigger * direction + 'px'];

      return liquid_fire.Promise.all([liquid_fire.animate(_this.oldElement, oldParams, opts), liquid_fire.animate(_this.newElement, newParams, opts, 'moving-in')]);
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }

});
define('islands/transitions/scale', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = scale;
  function scale() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return liquid_fire.animate(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
      return liquid_fire.animate(_this.newElement, { scale: [1, 0.2] }, opts);
    });
  }

});
define('islands/transitions/scroll-then', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = function (nextTransitionName, options) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var _this = this;

    Ember['default'].assert("You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')", 'string' === typeof nextTransitionName);

    var el = document.getElementsByTagName('html');
    var nextTransition = this.lookup(nextTransitionName);
    if (!options) {
      options = {};
    }

    Ember['default'].assert("The second argument to scrollThen is passed to Velocity's scroll function and must be an object", 'object' === typeof options);

    // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
    options = Ember['default'].merge({ duration: 500, offset: 0 }, options);

    // additional args can be passed through after the scroll options object
    // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

    return window.$.Velocity(el, 'scroll', options).then(function () {
      nextTransition.apply(_this, rest);
    });
  }

});
define('islands/transitions/to-down', ['exports', 'islands/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'y', 1, opts);
  }

});
define('islands/transitions/to-left', ['exports', 'islands/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'x', -1, opts);
  }

});
define('islands/transitions/to-right', ['exports', 'islands/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'x', 1, opts);
  }

});
define('islands/transitions/to-up', ['exports', 'islands/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'y', -1, opts);
  }

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
  require("islands/app")["default"].create({"name":"islands","version":"0.0.0+29691c8b"});
}

/* jshint ignore:end */
//# sourceMappingURL=islands.map