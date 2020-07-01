(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drone-drone-module"],{

/***/ "./src/app/drone/components/drone.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/drone/components/drone.component.ts ***!
  \*****************************************************/
/*! exports provided: DroneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroneComponent", function() { return DroneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_drone_audio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drone-audio.service */ "./src/app/drone/services/drone-audio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "active": a0 }; };
function DroneComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DroneComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const note_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.playNote(note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, note_r1 == ctx_r0.activeNote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r1.name);
} }
class DroneComponent {
    constructor(droneAudioService) {
        this.droneAudioService = droneAudioService;
        this.notes = [
            {
                name: 'C',
                frequency: 261.63
            }, {
                name: 'C#',
                frequency: 277.18
            }, {
                name: 'D',
                frequency: 293.66
            }, {
                name: 'D#',
                frequency: 311.13
            }, {
                name: 'E',
                frequency: 329.63
            }, {
                name: 'F',
                frequency: 349.23
            }, {
                name: 'F#',
                frequency: 369.99
            }, {
                name: 'G',
                frequency: 392
            }, {
                name: 'G#',
                frequency: 415.3
            }, {
                name: 'A',
                frequency: 440
            }, {
                name: 'A#',
                frequency: 466.16
            }, {
                name: 'B',
                frequency: 493.88
            }
        ];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.droneAudioService.stopNote();
        this.activeNote = null;
    }
    playNote(note) {
        if (note == this.activeNote) {
            this.droneAudioService.stopNote();
            this.activeNote = null;
            return;
        }
        this.activeNote = note;
        this.droneAudioService.playNote(note.frequency);
    }
    changeOctave(multiplier) {
        this.droneAudioService.changeOctave(multiplier);
    }
}
DroneComponent.ɵfac = function DroneComponent_Factory(t) { return new (t || DroneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_drone_audio_service__WEBPACK_IMPORTED_MODULE_1__["DroneAudioService"])); };
DroneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DroneComponent, selectors: [["app-drone"]], decls: 8, vars: 1, consts: [[1, "main-container"], [1, "note-button-container"], ["class", "note-button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "octave-button-container"], [1, "octave-button", 3, "click"], [1, "note-button", 3, "ngClass", "click"]], template: function DroneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DroneComponent_button_2_Template, 2, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DroneComponent_Template_button_click_4_listener() { return ctx.changeOctave(0.5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Octave down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DroneComponent_Template_button_click_6_listener() { return ctx.changeOctave(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Octave up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flexbox;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: white;\n  font-weight: lighter;\n  border: white;\n}\n\nbutton.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.note-button-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n  height: 80%;\n}\n\n.note-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 33.33%;\n  width: calc(100% / 3);\n  line-height: 25%;\n  height: calc(100% / 4);\n  font-size: 5vw;\n}\n\n.octave-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n\n.octave-button[_ngcontent-%COMP%] {\n  width: 33.33%;\n  width: calc(100% / 2);\n  line-height: 25%;\n  height: calc(100%);\n  font-size: 3vw;\n}\n\n@media screen and (max-width: 600px) {\n  .octave-button[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n\n  .note-button[_ngcontent-%COMP%] {\n    font-size: 10vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJvbmUvY29tcG9uZW50cy9kcm9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSkE7RUFDSTtJQUNJLGNBQUE7RUFPTjs7RUFMRTtJQUNJLGVBQUE7RUFRTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZHJvbmUvY29tcG9uZW50cy9kcm9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo5MCU7XG4gICAgZGlzcGxheTogZmxleGJveDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGJvcmRlcjogd2hpdGU7XG59XG5idXR0b24uYWN0aXZle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOjgwJTtcbiAgICBoZWlnaHQ6ODAlO1xufVxuLm5vdGUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gICAgbGluZS1oZWlnaHQ6MjUlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC8gNCk7XG4gICAgZm9udC1zaXplOiA1dnc7XG59XG4ub2N0YXZlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjIwJTtcbn1cbi5vY3RhdmUtYnV0dG9uIHtcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgICBsaW5lLWhlaWdodDoyNSU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5vY3RhdmUtYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgfVxuICAgIC5ub3RlLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTB2dztcbiAgICB9XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DroneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drone',
                templateUrl: './drone.component.html',
                styleUrls: ['./drone.component.scss']
            }]
    }], function () { return [{ type: _services_drone_audio_service__WEBPACK_IMPORTED_MODULE_1__["DroneAudioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/drone/drone-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/drone/drone-routing.module.ts ***!
  \***********************************************/
/*! exports provided: DroneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroneRoutingModule", function() { return DroneRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_drone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/drone.component */ "./src/app/drone/components/drone.component.ts");





const routes = [{ path: '', component: _components_drone_component__WEBPACK_IMPORTED_MODULE_2__["DroneComponent"] }];
class DroneRoutingModule {
}
DroneRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DroneRoutingModule });
DroneRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DroneRoutingModule_Factory(t) { return new (t || DroneRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DroneRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DroneRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/drone/drone.module.ts":
/*!***************************************!*\
  !*** ./src/app/drone/drone.module.ts ***!
  \***************************************/
/*! exports provided: DroneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroneModule", function() { return DroneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _drone_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drone-routing.module */ "./src/app/drone/drone-routing.module.ts");
/* harmony import */ var _components_drone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/drone.component */ "./src/app/drone/components/drone.component.ts");





class DroneModule {
}
DroneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DroneModule });
DroneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DroneModule_Factory(t) { return new (t || DroneModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _drone_routing_module__WEBPACK_IMPORTED_MODULE_2__["DroneRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DroneModule, { declarations: [_components_drone_component__WEBPACK_IMPORTED_MODULE_3__["DroneComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _drone_routing_module__WEBPACK_IMPORTED_MODULE_2__["DroneRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DroneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_drone_component__WEBPACK_IMPORTED_MODULE_3__["DroneComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _drone_routing_module__WEBPACK_IMPORTED_MODULE_2__["DroneRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/drone/services/drone-audio.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/drone/services/drone-audio.service.ts ***!
  \*******************************************************/
/*! exports provided: DroneAudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroneAudioService", function() { return DroneAudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-audio-context */ "./node_modules/angular-audio-context/build/es2019/module.js");



class DroneAudioService {
    constructor(audioContext) {
        this.audioContext = audioContext;
        this.octave = 1;
        this.minOctave = 0.5;
        this.maxOctave = 4;
    }
    stopNote() {
        // temp vars
        if (this.lastOsc) {
            this.lastOsc.stop();
            this.lastOsc = null;
        }
    }
    playNote(freq = this.lastFreq) {
        this.lastFreq = freq;
        this.stopNote();
        let osc = this.audioContext.createOscillator();
        this.lastOsc = osc;
        osc.connect(this.audioContext.destination);
        osc.frequency.value = freq * this.octave;
        osc.start(this.audioContext.currentTime);
    }
    changeOctave(multiplier) {
        this.octave = Math.max(Math.min(this.octave * multiplier, this.maxOctave), this.minOctave);
        if (this.lastOsc) {
            this.playNote();
        }
    }
}
DroneAudioService.ɵfac = function DroneAudioService_Factory(t) { return new (t || DroneAudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_audio_context__WEBPACK_IMPORTED_MODULE_1__["AudioContext"])); };
DroneAudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DroneAudioService, factory: DroneAudioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DroneAudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angular_audio_context__WEBPACK_IMPORTED_MODULE_1__["AudioContext"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=drone-drone-module-es2015.js.map