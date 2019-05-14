(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+6eh":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),u=t("pMnS"),a=t("LOpI"),r=t("icah"),i=t("WFzO"),c=t("d+NZ"),s=t("vPfJ"),d=t("OQnT"),b=t("NEdW"),p=t("udNS"),m="import { Component, OnInit } from '@angular/core';\nimport { AMapClass, Bounds, Map } from 'ngx-amap/types/class';\n\ndeclare const AMap: AMapClass;\n\n@Component({\n  selector: 'app-methods',\n  templateUrl: './methods.component.html',\n  styleUrls: ['./methods.component.scss']\n})\nexport class MethodsComponent implements OnInit {\n  bounds: Bounds;\n\n  marker1 = [116.403322, 39.920255];\n  marker2 = [116.382122, 39.901176];\n\n  editor = false;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onMapReady() {\n    let southWest = new AMap.LngLat(116.376533, 39.907878);\n    let northEast = new AMap.LngLat(116.414124, 39.940799);\n    this.bounds = new AMap.Bounds(southWest, northEast);\n  }\n\n  getMethods(rectangle) {\n    if (rectangle) {\n      rectangle.getBounds().then(v => console.log('getBounds():', v));\n      rectangle.getOptions().then(v => console.log('getOptions():', v));\n      rectangle.getExtData().then(v => console.log('getExtData():', v));\n    }\n  }\n\n  checkContains(rectangle) {\n    if (rectangle) {\n      rectangle.contains(this.marker1).then(v => console.log('contains marker1: ', v));\n      rectangle.contains(this.marker2).then(v => console.log('contains marker2: ', v));\n    }\n  }\n}",h='<button type="button" class="btn btn-outline-primary" (click)="getMethods(myRectangle)">\u8c03\u7528Getter\u65b9\u6cd5</button>\n<button type="button" class="btn btn-outline-primary" (click)="checkContains(myRectangle)">\u5224\u65adcontains\u65b9\u6cd5</button>\n<button type="button" class="btn btn-outline-primary" (click)="editor = !editor">\u6253\u5f00/\u5173\u95ed\u7f16\u8f91\u529f\u80fd</button>\n<hr>\n<ngx-amap #myMap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13" (ready)="onMapReady()">\n  <amap-rectangle #myRectangle="rectangle"\n    [editor]="editor"\n    [bounds]="bounds"\n    [strokeColor]="\'#F33\'"\n    [strokeOpacity]="1"\n    [strokeWeight]="3"\n    [fillColor]="\'#ee2200\'"\n    [fillOpacity]="0.35"\n    strokeStyle="dashed"\n    [draggable]="true"\n    (ready)="myMap.setFitView()">\n  </amap-rectangle>\n  <amap-marker [position]="marker1" title="marker1" [label]="{offset: {x: 20, y: 20}, content: \'marker1\'}"></amap-marker>\n  <amap-marker [position]="marker2" title="marker2" [label]="{offset: {x: 20, y: 20}, content: \'marker2\'}"></amap-marker>\n</ngx-amap>',g=function(){function n(){this.code_ts=m,this.code_html=h,this.marker1=[116.403322,39.920255],this.marker2=[116.382122,39.901176],this.editor=!1}return n.prototype.ngOnInit=function(){},n.prototype.onMapReady=function(){var n=new AMap.LngLat(116.376533,39.907878),l=new AMap.LngLat(116.414124,39.940799);this.bounds=new AMap.Bounds(n,l)},n.prototype.getMethods=function(n){n&&(n.getBounds().then(function(n){return console.log("getBounds():",n)}),n.getOptions().then(function(n){return console.log("getOptions():",n)}),n.getExtData().then(function(n){return console.log("getExtData():",n)}))},n.prototype.checkContains=function(n){n&&(n.contains(this.marker1).then(function(n){return console.log("contains marker1: ",n)}),n.contains(this.marker2).then(function(n){return console.log("contains marker2: ",n)}))},n}(),v=e.pb({encapsulation:0,styles:[[""]],data:{}});function k(n){return e.Lb(0,[e.Db(0,a.a,[]),(n()(),e.rb(1,0,null,null,56,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" \u8c03\u7528\u65b9\u6cd5\u793a\u4f8b (\u8bf7\u67e5\u770bconsole\u8f93\u51fa) "])),(n()(),e.rb(4,0,null,null,53,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.getMethods(e.Bb(n,30))&&o),o},null,null)),(n()(),e.Jb(-1,null,["\u8c03\u7528Getter\u65b9\u6cd5"])),(n()(),e.rb(7,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.checkContains(e.Bb(n,30))&&o),o},null,null)),(n()(),e.Jb(-1,null,["\u5224\u65adcontains\u65b9\u6cd5"])),(n()(),e.rb(9,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=0!=(o.editor=!o.editor)&&e),e},null,null)),(n()(),e.Jb(-1,null,["\u6253\u5f00/\u5173\u95ed\u7f16\u8f91\u529f\u80fd"])),(n()(),e.rb(11,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.rb(12,0,null,null,28,"ngx-amap",[["class","demo-map"]],null,[[null,"ready"]],function(n,l,t){var e=!0;return"ready"===l&&(e=!1!==n.component.onMapReady()&&e),e},r.d,r.b)),e.Gb(4608,null,i.L,i.L,[i.A,i.F,i.H,i.J]),e.Gb(4608,null,i.M,i.M,[i.A,i.N,i.F]),e.Gb(4608,null,i.O,i.O,[i.A,i.F,i.H,i.N]),e.Gb(4608,null,i.P,i.P,[i.A,i.F,i.H,i.J,i.N]),e.Gb(4608,null,i.Q,i.Q,[i.A,i.N,i.F]),e.Gb(4608,null,i.R,i.R,[i.A,i.F]),e.Gb(4608,null,i.S,i.S,[i.A,i.N,i.F]),e.Gb(4608,null,i.T,i.T,[i.A,i.F,i.H,i.I]),e.Gb(4608,null,i.U,i.U,[i.A,i.N,i.F]),e.Gb(4608,null,i.V,i.V,[i.A,i.N,i.F]),e.Gb(4608,null,i.X,i.X,[i.A,i.F,i.N]),e.Gb(512,null,i.A,i.A,[i.C,i.F]),e.qb(25,770048,[["myMap",4]],0,i.y,[e.k,i.A,i.F],{zoom:[0,"zoom"],center:[1,"center"]},{ready:"ready"}),e.Cb(26,2),e.Gb(512,null,i.W,i.W,[i.A,i.N,i.F]),e.Gb(512,null,i.G,i.G,[i.A,i.F,i.H,i.I,i.K]),(n()(),e.rb(29,0,null,0,1,"amap-rectangle",[["strokeStyle","dashed"]],null,[[null,"ready"]],function(n,l,t){var o=!0;return"ready"===l&&(o=!1!==e.Bb(n,25).setFitView()&&o),o},null,null)),e.qb(30,671744,[["myRectangle",4]],0,i.r,[i.F,i.W],{bounds:[0,"bounds"],strokeColor:[1,"strokeColor"],strokeOpacity:[2,"strokeOpacity"],strokeWeight:[3,"strokeWeight"],fillColor:[4,"fillColor"],fillOpacity:[5,"fillOpacity"],strokeStyle:[6,"strokeStyle"],draggable:[7,"draggable"],editor:[8,"editor"]},{ready:"ready"}),(n()(),e.rb(31,0,null,0,4,"amap-marker",[["title","marker1"]],null,null,null,null,null)),e.qb(32,1720320,null,1,i.m,[i.F,i.G,i.H,i.I,i.K],{position:[0,"position"],title:[1,"title"],label:[2,"label"]},null),e.Hb(603979776,1,{infoWindowComponent:1}),e.Eb(34,{x:0,y:1}),e.Eb(35,{offset:0,content:1}),(n()(),e.rb(36,0,null,0,4,"amap-marker",[["title","marker2"]],null,null,null,null,null)),e.qb(37,1720320,null,1,i.m,[i.F,i.G,i.H,i.I,i.K],{position:[0,"position"],title:[1,"title"],label:[2,"label"]},null),e.Hb(603979776,2,{infoWindowComponent:1}),e.Eb(39,{x:0,y:1}),e.Eb(40,{offset:0,content:1}),(n()(),e.rb(41,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),e.rb(42,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,c.b,c.a)),e.qb(43,180224,null,0,s.a,[d.a,e.F],null,null),(n()(),e.rb(44,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(45,212992,null,0,b.a,[s.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(46,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),e.qb(47,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(48,2),(n()(),e.rb(49,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(50,212992,null,0,b.a,[s.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(51,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),e.qb(52,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(53,2),(n()(),e.rb(54,0,null,0,3,"tab",[["heading","\u652f\u6301\u7684\u65b9\u6cd5"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(55,212992,null,0,b.a,[s.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(56,0,null,null,1,"a",[["href","api-doc/directives/AmapRectangleDirective.html"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var t=l.component,o=n(l,26,0,116.397428,39.90923);n(l,25,0,13,o),n(l,30,0,t.bounds,"#F33",1,3,"#ee2200",.35,"dashed",!0,t.editor);var u=t.marker1,a=n(l,35,0,n(l,34,0,20,20),"marker1");n(l,32,0,u,"marker1",a);var r=t.marker2,i=n(l,40,0,n(l,39,0,20,20),"marker2");n(l,37,0,r,"marker2",i),n(l,45,0,"HTML");var c=e.Kb(l,47,0,n(l,48,0,e.Bb(l,0),t.code_html,"html"));n(l,47,0,c),n(l,50,0,"Component");var s=e.Kb(l,52,0,n(l,53,0,e.Bb(l,0),t.code_ts,"typescript"));n(l,52,0,s),n(l,55,0,"\u652f\u6301\u7684\u65b9\u6cd5")},function(n,l){n(l,42,0,e.Bb(l,43).clazz),n(l,44,0,e.Bb(l,45).id,e.Bb(l,45).active,e.Bb(l,45).addClass),n(l,49,0,e.Bb(l,50).id,e.Bb(l,50).active,e.Bb(l,50).addClass),n(l,54,0,e.Bb(l,55).id,e.Bb(l,55).active,e.Bb(l,55).addClass)})}function y(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"app-methods",[],null,null,null,k,v)),e.qb(1,114688,null,0,g,[],null,null)],function(n,l){n(l,1,0)},null)}var f=e.nb("app-methods",g,y,{},{},[]),E="import { Component, OnInit } from '@angular/core';\nimport { AMapClass, Bounds, Map } from 'ngx-amap/types/class';\n\ndeclare const AMap: AMapClass;\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements OnInit {\n  hide = false;\n  options = {};\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onMapReady() {\n    let southWest = new AMap.LngLat(116.376533, 39.907878);\n    let northEast = new AMap.LngLat(116.414124, 39.940799);\n    let bounds = new AMap.Bounds(southWest, northEast);\n    this.options = {\n      bounds: bounds,\n      strokeColor: 'red',\n      strokeWeight: 10,\n      strokeOpacity: 0.5,\n      strokeDasharray: [30, 10],\n      strokeStyle: 'dashed',\n      fillColor: 'blue',\n      fillOpacity: 0.5,\n      zIndex: 10,\n      bubble: true,\n      cursor: 'pointer',\n      draggable: true\n    };\n  }\n\n  onEvent(event: any, type: string) {\n    console.log('rectangle event:', type, event);\n  }\n\n  onEditorEvent(event: any, type: string) {\n    console.log('rectangle editor event:', type, event);\n  }\n}",C='<button type="button" class="btn btn-outline-primary" (click)="hide = !hide">\u89e6\u53d1\u663e\u793a\u9690\u85cf\u4e8b\u4ef6</button>\n<hr>\n<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13" (ready)="onMapReady()">\n  <amap-rectangle [options]="options" [hidden]="hide" [editor]="true"\n    (rectangleClick)="onEvent($event, \'rectangleClick\')"\n    (ready)="onEvent($event, \'ready\')"\n    (dblClick)="onEvent($event, \'dblClick\')"\n    (rightClick)="onEvent($event, \'rightClick\')"\n    (rectangleHide)="onEvent($event, \'rectangleHide\')"\n    (rectangleShow)="onEvent($event, \'rectangleShow\')"\n    (mouseDown)="onEvent($event, \'mouseDown\')"\n    (mouseUp)="onEvent($event, \'mouseUp\')"\n    (mouseOver)="onEvent($event, \'mouseOver\')"\n    (mouseOut)="onEvent($event, \'mouseOut\')"\n    (change)="onEvent($event, \'change\')"\n    (touchStart)="onEvent($event, \'touchStart\')"\n    (touchMove)="onEvent($event, \'touchMove\')"\n    (touchEnd)="onEvent($event, \'touchEnd\')"\n    (editorAdjust)="onEditorEvent($event, \'editorAdjust\')"\n    (editorEnd)="onEditorEvent($event, \'editorEnd\')"\n  ></amap-rectangle>\n</ngx-amap>',A=function(){function n(){this.code_ts=E,this.code_html=C,this.hide=!1,this.options={}}return n.prototype.ngOnInit=function(){},n.prototype.onMapReady=function(){var n=new AMap.LngLat(116.376533,39.907878),l=new AMap.LngLat(116.414124,39.940799),t=new AMap.Bounds(n,l);this.options={bounds:t,strokeColor:"red",strokeWeight:10,strokeOpacity:.5,strokeDasharray:[30,10],strokeStyle:"dashed",fillColor:"blue",fillOpacity:.5,zIndex:10,bubble:!0}},n.prototype.onEvent=function(n,l){console.log("rectangle event:",l,n)},n.prototype.onEditorEvent=function(n,l){console.log("rectangle editor event:",l,n)},n}(),M=e.pb({encapsulation:0,styles:[[""]],data:{}});function F(n){return e.Lb(0,[e.Db(0,a.a,[]),(n()(),e.rb(1,0,null,null,38,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" \u8986\u76d6\u7269\uff1a\u77e9\u5f62\u4e8b\u4ef6 (\u8bf7\u67e5\u770bconsole\u8f93\u51fa) "])),(n()(),e.rb(4,0,null,null,35,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=0!=(o.hide=!o.hide)&&e),e},null,null)),(n()(),e.Jb(-1,null,["\u89e6\u53d1\u663e\u793a\u9690\u85cf\u4e8b\u4ef6"])),(n()(),e.rb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.rb(8,0,null,null,18,"ngx-amap",[["class","demo-map"]],null,[[null,"ready"]],function(n,l,t){var e=!0;return"ready"===l&&(e=!1!==n.component.onMapReady()&&e),e},r.d,r.b)),e.Gb(4608,null,i.G,i.G,[i.A,i.F,i.H,i.I,i.K]),e.Gb(4608,null,i.L,i.L,[i.A,i.F,i.H,i.J]),e.Gb(4608,null,i.M,i.M,[i.A,i.N,i.F]),e.Gb(4608,null,i.O,i.O,[i.A,i.F,i.H,i.N]),e.Gb(4608,null,i.P,i.P,[i.A,i.F,i.H,i.J,i.N]),e.Gb(4608,null,i.Q,i.Q,[i.A,i.N,i.F]),e.Gb(4608,null,i.R,i.R,[i.A,i.F]),e.Gb(4608,null,i.S,i.S,[i.A,i.N,i.F]),e.Gb(4608,null,i.T,i.T,[i.A,i.F,i.H,i.I]),e.Gb(4608,null,i.U,i.U,[i.A,i.N,i.F]),e.Gb(4608,null,i.V,i.V,[i.A,i.N,i.F]),e.Gb(4608,null,i.X,i.X,[i.A,i.F,i.N]),e.Gb(512,null,i.A,i.A,[i.C,i.F]),e.qb(22,770048,null,0,i.y,[e.k,i.A,i.F],{zoom:[0,"zoom"],center:[1,"center"]},{ready:"ready"}),e.Cb(23,2),e.Gb(512,null,i.W,i.W,[i.A,i.N,i.F]),(n()(),e.rb(25,0,null,0,1,"amap-rectangle",[],null,[[null,"rectangleClick"],[null,"ready"],[null,"dblClick"],[null,"rightClick"],[null,"rectangleHide"],[null,"rectangleShow"],[null,"mouseDown"],[null,"mouseUp"],[null,"mouseOver"],[null,"mouseOut"],[null,"change"],[null,"touchStart"],[null,"touchMove"],[null,"touchEnd"],[null,"editorAdjust"],[null,"editorEnd"]],function(n,l,t){var e=!0,o=n.component;return"rectangleClick"===l&&(e=!1!==o.onEvent(t,"rectangleClick")&&e),"ready"===l&&(e=!1!==o.onEvent(t,"ready")&&e),"dblClick"===l&&(e=!1!==o.onEvent(t,"dblClick")&&e),"rightClick"===l&&(e=!1!==o.onEvent(t,"rightClick")&&e),"rectangleHide"===l&&(e=!1!==o.onEvent(t,"rectangleHide")&&e),"rectangleShow"===l&&(e=!1!==o.onEvent(t,"rectangleShow")&&e),"mouseDown"===l&&(e=!1!==o.onEvent(t,"mouseDown")&&e),"mouseUp"===l&&(e=!1!==o.onEvent(t,"mouseUp")&&e),"mouseOver"===l&&(e=!1!==o.onEvent(t,"mouseOver")&&e),"mouseOut"===l&&(e=!1!==o.onEvent(t,"mouseOut")&&e),"change"===l&&(e=!1!==o.onEvent(t,"change")&&e),"touchStart"===l&&(e=!1!==o.onEvent(t,"touchStart")&&e),"touchMove"===l&&(e=!1!==o.onEvent(t,"touchMove")&&e),"touchEnd"===l&&(e=!1!==o.onEvent(t,"touchEnd")&&e),"editorAdjust"===l&&(e=!1!==o.onEditorEvent(t,"editorAdjust")&&e),"editorEnd"===l&&(e=!1!==o.onEditorEvent(t,"editorEnd")&&e),e},null,null)),e.qb(26,671744,null,0,i.r,[i.F,i.W],{options:[0,"options"],hidden:[1,"hidden"],editor:[2,"editor"]},{rectangleClick:"rectangleClick",ready:"ready",dblClick:"dblClick",rightClick:"rightClick",rectangleHide:"rectangleHide",rectangleShow:"rectangleShow",mouseDown:"mouseDown",mouseUp:"mouseUp",mouseOver:"mouseOver",mouseOut:"mouseOut",change:"change",touchStart:"touchStart",touchMove:"touchMove",touchEnd:"touchEnd",editorAdjust:"editorAdjust",editorEnd:"editorEnd"}),(n()(),e.rb(27,0,null,null,12,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),e.rb(28,0,null,null,11,"tabset",[],[[2,"tab-container",null]],null,null,c.b,c.a)),e.qb(29,180224,null,0,s.a,[d.a,e.F],null,null),(n()(),e.rb(30,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(31,212992,null,0,b.a,[s.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(32,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),e.qb(33,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(34,2),(n()(),e.rb(35,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(36,212992,null,0,b.a,[s.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(37,0,null,null,2,"markdown",[],null,null,null,p.b,p.a)),e.qb(38,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(39,2)],function(n,l){var t=l.component,o=n(l,23,0,116.397428,39.90923);n(l,22,0,13,o),n(l,26,0,t.options,t.hide,!0),n(l,31,0,"HTML");var u=e.Kb(l,33,0,n(l,34,0,e.Bb(l,0),t.code_html,"html"));n(l,33,0,u),n(l,36,0,"Component");var a=e.Kb(l,38,0,n(l,39,0,e.Bb(l,0),t.code_ts,"typescript"));n(l,38,0,a)},function(n,l){n(l,28,0,e.Bb(l,29).clazz),n(l,30,0,e.Bb(l,31).id,e.Bb(l,31).active,e.Bb(l,31).addClass),n(l,35,0,e.Bb(l,36).id,e.Bb(l,36).active,e.Bb(l,36).addClass)})}function O(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"app-events",[],null,null,null,F,M)),e.qb(1,114688,null,0,A,[],null,null)],function(n,l){n(l,1,0)},null)}var w=e.nb("app-events",A,O,{},{},[]),G=t("Ip0R"),B=t("ZYCi"),L={title:"\u8c03\u7528\u65b9\u6cd5"},z={title:"\u4e8b\u4ef6"},S=function(){return function(){}}(),H=t("z+jS"),N=t("7PmN");t.d(l,"AmapRectangleDemoModuleNgFactory",function(){return x});var x=e.ob(o,[],function(n){return e.yb([e.zb(512,e.j,e.db,[[8,[u.a,f,w]],[3,e.j],e.x]),e.zb(4608,G.n,G.m,[e.u,[2,G.u]]),e.zb(1073742336,G.c,G.c,[]),e.zb(1073742336,B.o,B.o,[[2,B.u],[2,B.l]]),e.zb(1073742336,S,S,[]),e.zb(1073742336,i.z,i.z,[]),e.zb(1073742336,H.a,H.a,[]),e.zb(1073742336,a.c,a.c,[]),e.zb(1073742336,N.a,N.a,[]),e.zb(1073742336,o,o,[]),e.zb(1024,B.j,function(){return[[{path:"",redirectTo:"/amap-rectangle/methods",pathMatch:"full"},{path:"methods",component:g,data:L},{path:"events",component:A,data:z}]]},[])])})}}]);