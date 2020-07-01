function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/metronome/services/metronome.worker.ts":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/metronome/services/metronome.worker.ts ***!
    \***********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWorkerPluginDistLoaderJsName0SrcAppMetronomeServicesMetronomeWorkerTs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "0-es5.worker.js";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'metronome',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./metronome/metronome.module */
        "./src/app/metronome/metronome.module.ts")).then(function (m) {
          return m.MetronomeModule;
        });
      }
    }, {
      path: 'tuner',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./tuner/tuner.module */
        "./src/app/tuner/tuner.module.ts")).then(function (m) {
          return m.TunerModule;
        });
      }
    }, {
      path: 'drone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | drone-drone-module */
        "drone-drone-module").then(__webpack_require__.bind(null,
        /*! ./drone/drone.module */
        "./src/app/drone/drone.module.ts")).then(function (m) {
          return m.DroneModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r1 = ctx.$implicit;

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.link)("active", _r2.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'practice-app';
        this.activeLinkIndex = -1;
        this.navLinks = [{
          label: 'Metronome',
          link: '/metronome',
          index: 0
        }, {
          label: 'Drone',
          link: '/drone',
          index: 1
        }, {
          label: 'Tuner',
          link: '/tuner',
          index: 2
        }];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks.find(function (tab) {
              return tab.link === '.' + _this.router.url;
            }));
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 1,
      consts: [["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_a_1_Template, 3, 3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _metronome_metronome_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./metronome/metronome.module */
    "./src/app/metronome/metronome.module.ts");
    /* harmony import */


    var _tuner_tuner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tuner/tuner.module */
    "./src/app/tuner/tuner.module.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"); // Custom components
    // Custom modules


    var AppModule = function AppModule(iconRegistry) {
      _classCallCheck(this, AppModule);

      iconRegistry.setDefaultFontSetClass('material-icons-round');
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _metronome_metronome_module__WEBPACK_IMPORTED_MODULE_6__["MetronomeModule"], _tuner_tuner_module__WEBPACK_IMPORTED_MODULE_7__["TunerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _metronome_metronome_module__WEBPACK_IMPORTED_MODULE_6__["MetronomeModule"], _tuner_tuner_module__WEBPACK_IMPORTED_MODULE_7__["TunerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _metronome_metronome_module__WEBPACK_IMPORTED_MODULE_6__["MetronomeModule"], _tuner_tuner_module__WEBPACK_IMPORTED_MODULE_7__["TunerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
          exports: [],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/metronome/components/metronome.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/metronome/components/metronome.component.ts ***!
    \*************************************************************/

  /*! exports provided: MetronomeComponent */

  /***/
  function srcAppMetronomeComponentsMetronomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetronomeComponent", function () {
      return MetronomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_metronome_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/metronome-player */
    "./src/app/metronome/models/metronome-player.ts");
    /* harmony import */


    var _models_player_state_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/player-state-enum */
    "./src/app/metronome/models/player-state-enum.ts");
    /* harmony import */


    var _services_time_sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/time-sync.service */
    "./src/app/metronome/services/time-sync.service.ts");
    /* harmony import */


    var _services_metronome_audio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/metronome-audio.service */
    "./src/app/metronome/services/metronome-audio.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return {
        "makeBlink": a0
      };
    };

    var MetronomeComponent = /*#__PURE__*/function () {
      function MetronomeComponent(timeSyncService, metronomeAudio) {
        _classCallCheck(this, MetronomeComponent);

        this.timeSyncService = timeSyncService;
        this.metronomeAudio = metronomeAudio; // Variables

        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.playerState = new _models_metronome_player__WEBPACK_IMPORTED_MODULE_3__["MetronomePlayer"]();
        this.clientCount = 1;
      }

      _createClass(MetronomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.metronomeAudio.init();
          this.timeSyncService.subscribeNextBeat().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (nextBeat) {
            return _this2.nextBeatReceived(nextBeat);
          });
          this.timeSyncService.subscribeClientCount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (clientCount) {
            return _this2.clientCount = clientCount.count;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.metronomeAudio.isPlaying) {
            this.metronomeAudio.play();
            this.playerState.state = _models_player_state_enum__WEBPACK_IMPORTED_MODULE_4__["PlayerState"].Paused;
          }

          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "nextBeatReceived",
        value: function nextBeatReceived(data) {
          var _this3 = this;

          console.log(data);
          this.playerState.tempo = this.metronomeAudio.tempo = data.tempo;

          if (this.playerState.state == _models_player_state_enum__WEBPACK_IMPORTED_MODULE_4__["PlayerState"].Paused) {
            return;
          }

          var nextBeat = data.nextBeat;
          var timeDifference = nextBeat - Date.now();

          while (timeDifference < 1) {
            nextBeat += this.playerState.rate;
            timeDifference = nextBeat - Date.now();
          }

          setTimeout(function () {
            _this3.metronomeAudio.play();

            if (!_this3.metronomeAudio.isPlaying) {
              _this3.playBeat();
            }
          }, timeDifference);
        } // Media client handlers

      }, {
        key: "emitPlay",
        value: function emitPlay() {
          // Activate playing onclick, necessary for browsers
          if (this.playerState.firstPlay) {
            this.metronomeAudio.play();
            this.metronomeAudio.play();
            this.playerState.firstPlay = false;
          } // Request next beat from server


          if (!this.metronomeAudio.isPlaying) {
            this.timeSyncService.requestNextBeat();
            this.playerState.state = _models_player_state_enum__WEBPACK_IMPORTED_MODULE_4__["PlayerState"].Waiting;
          } else {
            this.playBeat(); // Toggle play button
          }
        }
      }, {
        key: "playBeat",
        value: function playBeat() {
          this.metronomeAudio.play();

          if (this.metronomeAudio.isPlaying) {
            this.playerState.state = _models_player_state_enum__WEBPACK_IMPORTED_MODULE_4__["PlayerState"].Playing;
          } else {
            this.playerState.state = _models_player_state_enum__WEBPACK_IMPORTED_MODULE_4__["PlayerState"].Paused;
          }
        }
      }, {
        key: "sync",
        value: function sync() {
          this.timeSyncService.syncDevices();
        }
      }, {
        key: "sendTempo",
        value: function sendTempo() {
          console.log("sendTempo");
          this.timeSyncService.requestNewTempo(this.playerState.tempo);
        }
      }, {
        key: "toggleResolution",
        value: function toggleResolution() {
          console.log("toggle resolution");
          this.metronomeAudio.toggleResolution();
        }
      }]);

      return MetronomeComponent;
    }();

    MetronomeComponent.ɵfac = function MetronomeComponent_Factory(t) {
      return new (t || MetronomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_sync_service__WEBPACK_IMPORTED_MODULE_5__["TimeSyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_metronome_audio_service__WEBPACK_IMPORTED_MODULE_6__["MetronomeAudioService"]));
    };

    MetronomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetronomeComponent,
      selectors: [["app-metronome"]],
      decls: 31,
      vars: 17,
      consts: [["id", "screen"], ["id", "sync"], ["id", "sync-button", "src", "/assets/images/sync.png", "type", "button", 3, "click"], ["id", "clients"], ["id", "online-icon"], ["id", "client-count"], ["id", "display-box"], ["id", "tempo-display"], ["id", "blinkers", 3, "click"], ["id", "blink-0", 1, "blink", 3, "ngClass"], ["id", "blink-1", 1, "blink", 3, "ngClass"], ["id", "blink-2", 1, "blink", 3, "ngClass"], ["id", "blink-3", 1, "blink", 3, "ngClass"], ["id", "tempo-box"], ["id", "tempo-scroll", "type", "range", "min", "35.0", "max", "270.0", "step", "1", 3, "value", "input"], ["id", "tempo-update-button", "type", "button", 3, "disabled", "click"], ["id", "media-buttons"], ["mat-icon-button", "", "id", "tempo-change-button", "aria-label", "Decrease tempo", 3, "click"], ["id", "tempo-icon", "inline", "true"], ["mat-fab", "", "id", "play-button", "aria-label", "Play metronome", 3, "click"], ["id", "play-icon", "inline", "true"], ["mat-icon-button", "", "id", "tempo-change-button", "aria-label", "Increase tempo", 3, "click"]],
      template: function MetronomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetronomeComponent_Template_img_click_2_listener() {
            return ctx.sync();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PLAYERS ONLINE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetronomeComponent_Template_div_click_11_listener() {
            return ctx.toggleResolution();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MetronomeComponent_Template_input_input_17_listener($event) {
            return ctx.playerState.tempo = $event.target.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetronomeComponent_Template_button_click_19_listener() {
            return ctx.sendTempo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Update BPM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetronomeComponent_Template_button_click_22_listener() {
            return ctx.playerState.tempo = ctx.playerState.tempo - 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetronomeComponent_Template_button_click_25_listener() {
            return ctx.emitPlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetronomeComponent_Template_button_click_28_listener() {
            return ctx.playerState.tempo = ctx.playerState.tempo - 1 + 2;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clientCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerState.tempo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.metronomeAudio.notePartition == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.metronomeAudio.notePartition == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.metronomeAudio.notePartition == 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.metronomeAudio.notePartition == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.playerState.tempo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.playerState.tempo == ctx.metronomeAudio.tempo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerState.state == 2 ? "play_arrow" : "pause");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6E6A6A;\n}\n\nimg[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nimg[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n  cursor: pointer;\n}\nimg[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n}\n\ninput[type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  margin: 10px 0;\n  width: 100%;\n}\ninput[type=range][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 2.5vh;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  background: #74C9FF;\n  border-radius: 2vh;\n  border: 0px solid #74C9FF;\n}\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  background: white;\n  border: 0.25rem solid #74C9FF;\n  margin-top: -0.45rem;\n  height: 2.3rem;\n  width: 2.3rem;\n  border-radius: 2.5vh;\n  cursor: pointer;\n}\ninput[type=range][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #74C9FF;\n}\ninput[type=range][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 12.8px;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  background: #74C9FF;\n  border-radius: 1vh;\n  border: 0px solid #74C9FF;\n}\ninput[type=range][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border: 0px solid #000000;\n  height: 20px;\n  width: 39px;\n  border-radius: 7px;\n  background: #65001c;\n  cursor: pointer;\n}\ninput[type=range][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 12.8px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-color: transparent;\n  border-width: 39px 0;\n  color: transparent;\n}\ninput[type=range][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #ac51b5;\n  border: 0px solid #000101;\n  border-radius: 50px;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n}\ninput[type=range][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #74C9FF;\n  border: 0px solid #000101;\n  border-radius: 50px;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n}\ninput[type=range][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border: 0px solid #000000;\n  height: 20px;\n  width: 39px;\n  border-radius: 7px;\n  background: #74C9FF;\n  cursor: pointer;\n}\ninput[type=range][_ngcontent-%COMP%]:focus::-ms-fill-lower, input[type=range][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #74C9FF;\n}\n\n\n\n#screen[_ngcontent-%COMP%] {\n  background: white;\n  height: 90%;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  resize: both;\n  flex-direction: column;\n}\n\n#sync[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 7%;\n}\n#sync-button[_ngcontent-%COMP%] {\n  float: right;\n  height: 3rem;\n  width: 3rem;\n}\n\n#clients[_ngcontent-%COMP%] {\n  height: 5%;\n  font-size: 2.3vh;\n  font-weight: bold;\n}\n#online-icon[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n  background-color: #66E1B7;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n\n#display-box[_ngcontent-%COMP%] {\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#tempo-display[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  line-height: normal;\n  \n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n  \n}\n#tempo-display[_ngcontent-%COMP%]:hover {\n  cursor: default;\n}\n\n#blinkers[_ngcontent-%COMP%] {\n  margin: 2rem;\n  display: flex;\n  justify-content: space-around;\n  width: 30vw;\n}\n#blinkers[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n}\n#blinkers[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n}\n.blink[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: #CBCBCB;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n@-webkit-keyframes blink-animation {\n  0% {\n    background-color: #FF9393;\n  }\n  100% {\n    background-color: #CBCBCB;\n  }\n}\n.makeBlink[_ngcontent-%COMP%] {\n  -webkit-animation-name: blink-animation;\n  -webkit-animation-duration: 900ms;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n}\n\n#tempo-box[_ngcontent-%COMP%] {\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  resize: both;\n  flex-direction: column;\n}\n\n#tempo-scroll[_ngcontent-%COMP%] {\n  width: 25vw !important;\n}\n\n#media-buttons[_ngcontent-%COMP%] {\n  height: 20%;\n  display: flex;\n  align-items: center;\n}\n#play-button[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  box-shadow: none;\n  background-color: #74C9FF;\n}\n#play-button[_ngcontent-%COMP%]   #play-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n#tempo-change-button[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  margin: 1rem;\n}\n#tempo-change-button[_ngcontent-%COMP%]   #tempo-icon[_ngcontent-%COMP%] {\n  color: #CBCBCB;\n  font-size: 4.5rem;\n}\n#tempo-update-button[_ngcontent-%COMP%]:disabled {\n  background-color: #CBCBCB;\n  pointer-events: none;\n}\n\n@media screen and (max-width: 600px) {\n  #sync[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 7vh;\n  }\n\n  #tempo-scroll[_ngcontent-%COMP%] {\n    width: 80vw !important;\n  }\n\n  #blinkers[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0cm9ub21lL2NvbXBvbmVudHMvbWV0cm9ub21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFVRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxjQVRnQjtBQUNwQjtBQVdFLDhCQUFBO0FBRUE7RUFDRSw2Q0FBQTtBQVRKO0FBV0k7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQVROO0FBWUk7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBVk47QUFjRSxZQUFBO0FBRUE7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBWko7QUFjSTtFQUNFLGFBQUE7QUFaTjtBQWVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBakRTO0VBa0RULGtCQUFBO0VBQ0EseUJBQUE7QUFiTjtBQWdCSTtFQUNFLHdCQUFBO0VBQ0EsaUJBekRNO0VBMEROLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQWROO0FBaUJJO0VBQ0UsbUJBbEVTO0FBbURmO0FBa0JJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBM0VTO0VBNEVULGtCQUFBO0VBQ0EseUJBQUE7QUFoQk47QUFtQkk7RUFDRSxvREFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWpCTjtBQW9CSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWxCTjtBQXFCSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FBbkJOO0FBc0JJO0VBQ0UsbUJBN0dTO0VBOEdULHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtBQXBCTjtBQXVCSTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBekhTO0VBMEhULGVBQUE7QUFyQk47QUF5Qk07RUFDRSxtQkEvSE87QUF3R2Y7QUE0QkUsb0JBQUE7QUFFQSxlQUFBO0FBRUEsa0JBQUE7QUFFQTtFQUNFLGlCQTVJUTtFQTZJUixXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQTVCSjtBQStCRSxnQkFBQTtBQUVBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUE3Qko7QUFnQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE3Qko7QUFnQ0UsbUJBQUE7QUFFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBOUJKO0FBaUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkE1S1k7RUE2S1osa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBOUJKO0FBaUNFLGdCQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEvQko7QUFrQ0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlGQUFBO0FBaENKO0FBa0NJO0VBQ0UsZUFBQTtBQWhDTjtBQXFDRSw0QkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFuQ0o7QUFxQ0k7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQW5DTjtBQXNDSTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFwQ047QUF3Q0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQXZPVztFQXdPWCxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBckNKO0FBd0NFO0VBQ0U7SUFDRSx5QkEvT1E7RUEwTVo7RUF3Q0U7SUFDRSx5QkFwUFM7RUE4TWI7QUFDRjtBQXlDRTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0FBdkNKO0FBMENFLGlCQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUF4Q0o7QUEyQ0UsaUJBQUE7QUFFQTtFQUNFLHNCQUFBO0FBekNKO0FBNENFLGtCQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBMUNKO0FBNkNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQS9SVztBQXFQZjtBQTJDSTtFQUNFLGVBQUE7QUF6Q047QUE2Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUExQ0o7QUEyQ0k7RUFDRSxjQXZTUztFQXdTVCxpQkFBQTtBQXpDTjtBQThDSTtFQUNFLHlCQTlTUztFQStTVCxvQkFBQTtBQTNDTjtBQStDRSxXQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBNUNKOztFQStDRTtJQUNFLHNCQUFBO0VBNUNKOztFQStDRTtJQUNFLFdBQUE7RUE1Q0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21ldHJvbm9tZS9jb21wb25lbnRzL21ldHJvbm9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCAqL1xuJG1haW4td2hpdGU6d2hpdGU7XG4gICAgJG1haW4tYmx1ZTojNzRDOUZGO1xuICAgICRhbHQtYmx1ZTojNUFCRUZFO1xuICAgICRtYWluLWdyZWVuOiM2NkUxQjc7XG4gICAgJG1haW4tZ3JleTojQ0JDQkNCO1xuICAgICRtYWluLXJlZDojRkY5MzkzO1xuICAgICRtYWluLXR4dC1jb2xvcjojNkU2QTZBO1xuXG4gIFxuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAkbWFpbi10eHQtY29sb3I7XG4gIH1cbiAgXG4gIC8qIGltYWdlcyAoc2VjcmV0bHkgYnV0dG9ucykgKi9cbiAgXG4gIGltZyB7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgXG4gICAgJjphY3RpdmUge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogYnV0dG9ucyAqL1xuXG4gIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIFxuICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyLjV2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGFuaW1hdGU6IDAuMnM7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xuICAgICAgYmFja2dyb3VuZDogJG1haW4tYmx1ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICRtYWluLWJsdWU7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAkbWFpbi13aGl0ZTtcbiAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgbWFyZ2luLXRvcDogLTAuNDVyZW07XG4gICAgICBoZWlnaHQ6IDIuM3JlbTtcbiAgICAgIHdpZHRoOiAyLjNyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAyLjV2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIFxuICAgICY6Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYWluLWJsdWU7XG4gICAgfVxuICBcbiAgICAmOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMi44cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhbmltYXRlOiAwLjJzO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcbiAgICAgIGJhY2tncm91bmQ6ICRtYWluLWJsdWU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxdmg7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgIH1cbiAgXG4gICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAzOXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgYmFja2dyb3VuZDogIzY1MDAxYztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIFxuICAgICY6Oi1tcy10cmFjayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTIuOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYW5pbWF0ZTogMC4ycztcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci13aWR0aDogMzlweCAwO1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgXG4gICAgJjo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2FjNTFiNTtcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDAxMDE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcbiAgICB9XG4gIFxuICAgICY6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRtYWluLWJsdWU7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMTAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XG4gICAgfVxuICBcbiAgICAmOjotbXMtdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMDAwMDA7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMzlweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIGJhY2tncm91bmQ6ICRtYWluLWJsdWU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBcbiAgICAmOmZvY3VzIHtcbiAgICAgICY6Oi1tcy1maWxsLWxvd2VyLCAmOjotbXMtZmlsbC11cHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluLWJsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBIYW5kbGVzIGZpcmVmb3ggKi9cbiAgXG4gIC8qIGhhbmRsZXMgSUUgKi9cbiAgXG4gIC8qIEFwcCBjb250YWluZXIgKi9cbiAgXG4gICNzY3JlZW4ge1xuICAgIGJhY2tncm91bmQ6ICRtYWluLXdoaXRlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByZXNpemU6IGJvdGg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLyogU3luYyBidXR0b24gKi9cbiAgXG4gICNzeW5jIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogNyU7XG4gIH1cbiAgXG4gICNzeW5jLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxuICBcbiAgLyogQWN0aXZlIGNsaWVudHMgKi9cbiAgXG4gICNjbGllbnRzIHtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMi4zdmg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gICNvbmxpbmUtaWNvbiB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbiAgXG4gIC8qIEJQTSBkaXNwbGF5ICovXG4gIFxuICAjZGlzcGxheS1ib3gge1xuICAgIGhlaWdodDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgI3RlbXBvLWRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogMTB2aDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBcbiAgICAvKiBub3NlbGVjdCBmb3IgdGV4dCAqL1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBTYWZhcmkgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG4gIFxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIEJsaW5rZXJzIGFuZCBhbmltYXRpb24gICovXG4gIFxuICAjYmxpbmtlcnMge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAzMHZ3O1xuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xuICAgIH1cbiAgXG4gICAgJjphY3RpdmUge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLmJsaW5rIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tcmVkO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ncmV5O1xuICAgIH1cbiAgfVxuICBcbiAgLm1ha2VCbGluayB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxpbmstYW5pbWF0aW9uO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLyogdGVtcG8gc2Nyb2xsICovXG4gIFxuICAjdGVtcG8tYm94IHtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmVzaXplOiBib3RoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC8qIHRlbXBvLXNjcm9sbCAqL1xuICBcbiAgI3RlbXBvLXNjcm9sbCB7XG4gICAgd2lkdGg6IDI1dncgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLyogTWVkaWEgYnV0dG9ucyAqL1xuICBcbiAgI21lZGlhLWJ1dHRvbnMge1xuICAgIGhlaWdodDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgI3BsYXktYnV0dG9uIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ibHVlO1xuICAgICNwbGF5LWljb24ge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgI3RlbXBvLWNoYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgI3RlbXBvLWljb24ge1xuICAgICAgY29sb3I6ICRtYWluLWdyZXk7XG4gICAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICB9XG4gIH1cblxuICAjdGVtcG8tdXBkYXRlLWJ1dHRvbiB7ICBcbiAgICAmOmRpc2FibGVkICB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ncmV5O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBNb2JpbGUgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAjc3luYyB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA3dmg7XG4gICAgfVxuICBcbiAgICAjdGVtcG8tc2Nyb2xsIHtcbiAgICAgIHdpZHRoOiA4MHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAjYmxpbmtlcnMge1xuICAgICAgd2lkdGg6IDkwdnc7XG4gICAgfVxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetronomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-metronome',
          templateUrl: './metronome.component.html',
          styleUrls: ['./metronome.component.scss']
        }]
      }], function () {
        return [{
          type: _services_time_sync_service__WEBPACK_IMPORTED_MODULE_5__["TimeSyncService"]
        }, {
          type: _services_metronome_audio_service__WEBPACK_IMPORTED_MODULE_6__["MetronomeAudioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/metronome/metronome-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/metronome/metronome-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: MetronomeRoutingModule */

  /***/
  function srcAppMetronomeMetronomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetronomeRoutingModule", function () {
      return MetronomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_metronome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/metronome.component */
    "./src/app/metronome/components/metronome.component.ts");

    var routes = [{
      path: '',
      component: _components_metronome_component__WEBPACK_IMPORTED_MODULE_2__["MetronomeComponent"]
    }];

    var MetronomeRoutingModule = function MetronomeRoutingModule() {
      _classCallCheck(this, MetronomeRoutingModule);
    };

    MetronomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MetronomeRoutingModule
    });
    MetronomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MetronomeRoutingModule_Factory(t) {
        return new (t || MetronomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MetronomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetronomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/metronome/metronome.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/metronome/metronome.module.ts ***!
    \***********************************************/

  /*! exports provided: MetronomeModule */

  /***/
  function srcAppMetronomeMetronomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetronomeModule", function () {
      return MetronomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var angular_audio_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-audio-context */
    "./node_modules/angular-audio-context/build/es2019/module.js");
    /* harmony import */


    var _metronome_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./metronome-routing.module */
    "./src/app/metronome/metronome-routing.module.ts");
    /* harmony import */


    var _components_metronome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/metronome.component */
    "./src/app/metronome/components/metronome.component.ts"); // External libraries
    // Custom components


    var socketConfig = {
      url: 'https://kallis-practice.herokuapp.com',
      options: {}
    };

    var MetronomeModule = function MetronomeModule() {
      _classCallCheck(this, MetronomeModule);
    };

    MetronomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MetronomeModule
    });
    MetronomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MetronomeModule_Factory(t) {
        return new (t || MetronomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _metronome_routing_module__WEBPACK_IMPORTED_MODULE_6__["MetronomeRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(socketConfig), angular_audio_context__WEBPACK_IMPORTED_MODULE_5__["AudioContextModule"].forRoot('balanced'), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MetronomeModule, {
        declarations: [_components_metronome_component__WEBPACK_IMPORTED_MODULE_7__["MetronomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _metronome_routing_module__WEBPACK_IMPORTED_MODULE_6__["MetronomeRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"], angular_audio_context__WEBPACK_IMPORTED_MODULE_5__["AudioContextModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetronomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_metronome_component__WEBPACK_IMPORTED_MODULE_7__["MetronomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _metronome_routing_module__WEBPACK_IMPORTED_MODULE_6__["MetronomeRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(socketConfig), angular_audio_context__WEBPACK_IMPORTED_MODULE_5__["AudioContextModule"].forRoot('balanced'), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/metronome/models/metronome-player.ts":
  /*!******************************************************!*\
    !*** ./src/app/metronome/models/metronome-player.ts ***!
    \******************************************************/

  /*! exports provided: MetronomePlayer */

  /***/
  function srcAppMetronomeModelsMetronomePlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetronomePlayer", function () {
      return MetronomePlayer;
    });
    /* harmony import */


    var _player_state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./player-state-enum */
    "./src/app/metronome/models/player-state-enum.ts");

    var MetronomePlayer = function MetronomePlayer() {
      _classCallCheck(this, MetronomePlayer);

      this.tempo = 120;
      this.rate = 60000 / this.tempo;
      this.firstPlay = true;
      this.state = _player_state_enum__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Paused;
    };
    /***/

  },

  /***/
  "./src/app/metronome/models/player-state-enum.ts":
  /*!*******************************************************!*\
    !*** ./src/app/metronome/models/player-state-enum.ts ***!
    \*******************************************************/

  /*! exports provided: PlayerState */

  /***/
  function srcAppMetronomeModelsPlayerStateEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerState", function () {
      return PlayerState;
    });

    var PlayerState;

    (function (PlayerState) {
      PlayerState[PlayerState["Waiting"] = 0] = "Waiting";
      PlayerState[PlayerState["Playing"] = 1] = "Playing";
      PlayerState[PlayerState["Paused"] = 2] = "Paused";
    })(PlayerState || (PlayerState = {}));
    /***/

  },

  /***/
  "./src/app/metronome/services/metronome-audio.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/metronome/services/metronome-audio.service.ts ***!
    \***************************************************************/

  /*! exports provided: MetronomeAudioService */

  /***/
  function srcAppMetronomeServicesMetronomeAudioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */


    (function (__webpack__worker__0) {
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MetronomeAudioService", function () {
        return MetronomeAudioService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angular_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-audio-context */
      "./node_modules/angular-audio-context/build/es2019/module.js");

      var MetronomeAudioService = /*#__PURE__*/function () {
        function MetronomeAudioService(audioContext) {
          _classCallCheck(this, MetronomeAudioService);

          this.audioContext = audioContext;
          this.unlocked = false;
          this.isPlaying = false;
          this.tempo = 120.0; // tempo (in beats per minute)

          this.lookahead = 25.0; // How frequently to call scheduling function

          this.soundFrequency = 880.0;
          this.scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec) with next interval (in case the timer is late)

          this.nextNoteTime = 0.0; // when the next note is due.

          this.noteResolution = 2; // 0 == 16th, 1 == 8th, 2 == quarter note

          this.noteLength = 0.05; // length of "beep" (in seconds)

          this.notesInQueue = []; // the notes that have been put into the web audio, and may or may not have played yet. {note, time}

          this.notePartition = -1;
        }

        _createClass(MetronomeAudioService, [{
          key: "updateTempo",
          value: function updateTempo(tempo) {
            this.tempo = 120.0;
          }
        }, {
          key: "nextNote",
          value: function nextNote() {
            // Advance current note and time by a 16th note...
            var secondsPerBeat = 60.0 / this.tempo; // Notice this picks up the CURRENT
            // tempo value to calculate beat length.

            this.nextNoteTime += 0.25 * secondsPerBeat; // Add beat length to last beat time

            this.current16thNote++; // Advance the beat number, wrap to zero

            if (this.current16thNote == 16) {
              this.current16thNote = 0;
            }
          }
        }, {
          key: "toggleResolution",
          value: function toggleResolution() {
            this.noteResolution = (this.noteResolution + 1) % 3;
          }
        }, {
          key: "incrementPartition",
          value: function incrementPartition() {
            if (this.current16thNote % 4 == 0) {
              this.notePartition = this.current16thNote / 4;
            }
          }
        }, {
          key: "scheduleNote",
          value: function scheduleNote(beatNumber, time) {
            // push the note on the queue, even if we're not playing.
            this.notesInQueue.push({
              note: beatNumber,
              time: time
            });
            if (this.noteResolution == 1 && beatNumber % 2) return; // we're not playing non-8th 16th notes

            if (this.noteResolution == 2 && beatNumber % 4) return; // we're not playing non-quarter 8th notes
            // create an oscillator

            var osc = this.audioContext.createOscillator();
            osc.connect(this.audioContext.destination); // if (beatNumber % 16 === 0)    // beat 0 == high pitch
            //     osc.frequency.value = 880.0;

            if (beatNumber % 4 === 0) // quarter notes = medium pitch
              osc.frequency.value = this.soundFrequency;else // other 16th notes = low pitch
              osc.frequency.value = this.soundFrequency / 2;
            osc.start(time);
            osc.stop(time + this.noteLength);
            this.incrementPartition();
          }
        }, {
          key: "scheduler",
          value: function scheduler() {
            // while there are notes that will need to play before the next interval,
            // schedule them and advance the pointer.
            while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime) {
              this.scheduleNote(this.current16thNote, this.nextNoteTime);
              this.nextNote();
            }
          }
        }, {
          key: "play",
          value: function play() {
            if (!this.unlocked) {
              // play silent buffer to unlock the audio
              var buffer = this.audioContext.createBuffer(1, 1, 22050);
              var node = this.audioContext.createBufferSource();
              node.buffer = buffer;
              node.start(0);
              this.unlocked = true;
            }

            this.isPlaying = !this.isPlaying;

            if (this.isPlaying) {
              // start playing
              this.current16thNote = 0;
              this.nextNoteTime = this.audioContext.currentTime;
              this.timerWorker.postMessage("start");
              return false;
            } else {
              this.timerWorker.postMessage("stop");
              return true;
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this4 = this;

            // NOTE: THIS RELIES ON THE MONKEYPATCH LIBRARY BEING LOADED FROM
            // Http://cwilso.github.io/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js
            // TO WORK ON CURRENT CHROME!!  But this means our code can be properly
            // spec-compliant, and work on Chrome, Safari and Firefox.
            // if we wanted to load audio files, etc., this is where we should do it.
            this.timerWorker = new Worker(__webpack__worker__0, undefined);

            this.timerWorker.onmessage = function (_ref) {
              var data = _ref.data;

              if (data == "tick") {
                _this4.scheduler();
              } else {
                console.log("message: " + data);
              }
            };

            this.timerWorker.postMessage({
              "interval": this.lookahead
            });
          }
        }]);

        return MetronomeAudioService;
      }();

      MetronomeAudioService.ɵfac = function MetronomeAudioService_Factory(t) {
        return new (t || MetronomeAudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_audio_context__WEBPACK_IMPORTED_MODULE_1__["AudioContext"]));
      };

      MetronomeAudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MetronomeAudioService,
        factory: MetronomeAudioService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetronomeAudioService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: angular_audio_context__WEBPACK_IMPORTED_MODULE_1__["AudioContext"]
          }];
        }, null);
      })();
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./node_modules/worker-plugin/dist/loader.js?name=0!./metronome.worker.ts */
    "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/metronome/services/metronome.worker.ts"));
    /***/
  },

  /***/
  "./src/app/metronome/services/time-sync.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/metronome/services/time-sync.service.ts ***!
    \*********************************************************/

  /*! exports provided: TimeSyncService */

  /***/
  function srcAppMetronomeServicesTimeSyncServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeSyncService", function () {
      return TimeSyncService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");

    var TimeSyncService = /*#__PURE__*/function () {
      function TimeSyncService(socket) {
        _classCallCheck(this, TimeSyncService);

        this.socket = socket;
      } // Important setup function to listen for next beat


      _createClass(TimeSyncService, [{
        key: "subscribeNextBeat",
        value: function subscribeNextBeat() {
          return this.socket.fromEvent('nextBeatSent');
        }
      }, {
        key: "subscribeClientCount",
        value: function subscribeClientCount() {
          return this.socket.fromEvent('clientCount');
        }
      }, {
        key: "requestNextBeat",
        value: function requestNextBeat() {
          this.socket.emit('requestNextBeat');
        }
      }, {
        key: "requestNewTempo",
        value: function requestNewTempo(newTempo) {
          this.socket.emit('requestNewTempo', {
            tempo: newTempo
          });
        }
      }, {
        key: "syncDevices",
        value: function syncDevices() {
          this.socket.emit('syncDevices');
        }
      }]);

      return TimeSyncService;
    }();

    TimeSyncService.ɵfac = function TimeSyncService_Factory(t) {
      return new (t || TimeSyncService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]));
    };

    TimeSyncService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TimeSyncService,
      factory: TimeSyncService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeSyncService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tuner/components/tuner.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tuner/components/tuner.component.ts ***!
    \*****************************************************/

  /*! exports provided: TunerComponent */

  /***/
  function srcAppTunerComponentsTunerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TunerComponent", function () {
      return TunerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! recordrtc */
    "./node_modules/recordrtc/RecordRTC.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TunerComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TunerComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.initiateRecording();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Recording ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TunerComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TunerComponent_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.stopRecording();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stop Recording ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TunerComponent_audio_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.sanitize(ctx_r2.blobUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var TunerComponent = /*#__PURE__*/function () {
      function TunerComponent(domSanitizer) {
        _classCallCheck(this, TunerComponent);

        this.domSanitizer = domSanitizer;
        this.title = 'micRecorder'; //Will use this flag for toggeling recording

        this.recording = false;
      }

      _createClass(TunerComponent, [{
        key: "sanitize",
        value: function sanitize(blobUrl) {
          return this.domSanitizer.bypassSecurityTrustUrl(blobUrl);
        }
        /**
        * Start recording.
        */

      }, {
        key: "initiateRecording",
        value: function initiateRecording() {
          this.recording = true;
          var mediaConstraints = {
            video: false,
            audio: true
          };
          navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
        }
        /**
        * Will be called automatically.
        */

      }, {
        key: "successCallback",
        value: function successCallback(stream) {
          var options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1,
            sampleRate: 16000
          }; //Start Actuall Recording

          var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_1__["StereoAudioRecorder"];
          this.record = new StereoAudioRecorder(stream, options);
          this.record.record();
        }
        /**
        * Stop recording.
        */

      }, {
        key: "stopRecording",
        value: function stopRecording() {
          this.recording = false;
          this.record.stop(this.processRecording.bind(this));
        }
        /**
        * processRecording Do what ever you want with blob
        * @param  {any} blob Blog
        */

      }, {
        key: "processRecording",
        value: function processRecording(blob) {
          this.blobUrl = URL.createObjectURL(blob);
          console.log("blob", blob);
          console.log("blobUrl", this.blobUrl);
        }
        /**
        * Process Error.
        */

      }, {
        key: "errorCallback",
        value: function errorCallback(error) {
          this.error = 'Can not play audio in your browser';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TunerComponent;
    }();

    TunerComponent.ɵfac = function TunerComponent_Factory(t) {
      return new (t || TunerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    TunerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TunerComponent,
      selectors: [["app-tuner"]],
      decls: 4,
      vars: 3,
      consts: [["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["controls", "", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["controls", ""], ["type", "audio/wav", 3, "src"]],
      template: function TunerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TunerComponent_button_1_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TunerComponent_button_2_Template, 2, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TunerComponent_audio_3_Template, 2, 1, "audio", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recording);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recording);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blobUrl);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1bmVyL2NvbXBvbmVudHMvdHVuZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TunerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tuner',
          templateUrl: './tuner.component.html',
          styleUrls: ['./tuner.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tuner/tuner-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tuner/tuner-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TunerRoutingModule */

  /***/
  function srcAppTunerTunerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TunerRoutingModule", function () {
      return TunerRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_tuner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/tuner.component */
    "./src/app/tuner/components/tuner.component.ts");

    var routes = [{
      path: '',
      component: _components_tuner_component__WEBPACK_IMPORTED_MODULE_2__["TunerComponent"]
    }];

    var TunerRoutingModule = function TunerRoutingModule() {
      _classCallCheck(this, TunerRoutingModule);
    };

    TunerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TunerRoutingModule
    });
    TunerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TunerRoutingModule_Factory(t) {
        return new (t || TunerRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TunerRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TunerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tuner/tuner.module.ts":
  /*!***************************************!*\
    !*** ./src/app/tuner/tuner.module.ts ***!
    \***************************************/

  /*! exports provided: TunerModule */

  /***/
  function srcAppTunerTunerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TunerModule", function () {
      return TunerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tuner_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tuner-routing.module */
    "./src/app/tuner/tuner-routing.module.ts");
    /* harmony import */


    var _components_tuner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/tuner.component */
    "./src/app/tuner/components/tuner.component.ts");

    var TunerModule = function TunerModule() {
      _classCallCheck(this, TunerModule);
    };

    TunerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TunerModule
    });
    TunerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TunerModule_Factory(t) {
        return new (t || TunerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tuner_routing_module__WEBPACK_IMPORTED_MODULE_2__["TunerRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TunerModule, {
        declarations: [_components_tuner_component__WEBPACK_IMPORTED_MODULE_3__["TunerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tuner_routing_module__WEBPACK_IMPORTED_MODULE_2__["TunerRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TunerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_tuner_component__WEBPACK_IMPORTED_MODULE_3__["TunerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tuner_routing_module__WEBPACK_IMPORTED_MODULE_2__["TunerRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kietho/Repos/playground/practice-app/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map