(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6C9x":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),a=u("LOpI"),i=u("gIcY"),r=u("icah"),s=u("WFzO"),d=u("d+NZ"),c=u("vPfJ"),b=u("OQnT"),p=u("NEdW"),m=u("udNS"),g="import { Component, OnInit } from '@angular/core';\nimport { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';\n\n@Component({\n  selector: 'app-encode',\n  templateUrl: './encode.component.html',\n  styleUrls: ['./encode.component.scss']\n})\nexport class EncodeComponent implements OnInit {\n  address: string;\n  point: any;\n  locationInfo: string;\n  private plugin: Promise<AmapGeocoderWrapper>;\n\n  constructor(private AmapGeocoder: AmapGeocoderService) {\n    // \u4f7f\u7528 AmapGeocoderService \u521b\u5efa promise wrapper\n    this.plugin = AmapGeocoder.of();\n  }\n\n  ngOnInit() {}\n\n  query() {\n    if (this.address) {\n      this.plugin.then(geocoder => geocoder.getLocation(this.address))\n        .then(data => {\n          console.log('get location of address:', this.address);\n          console.log('status:', data.status);\n          console.log('result:', data.result);\n\n          if (data.status === 'complete' && data.result.info === 'OK') {\n            this.point = data.result.geocodes[0].location;\n            this.locationInfo = data.result.geocodes[0].formattedAddress;\n          }\n        });\n    }\n  }\n}",f='<form (ngSubmit)="query()" class="form-inline">\n  <div class="form-group">\n    <input type="text" class="form-control" id="address" required [(ngModel)]="address" name="inputAddress" placeholder="\u8f93\u5165\u5730\u5740">\n  </div>\n  <button type="submit" class="btn btn-outline-primary">\u67e5\u8be2</button>\n</form>\n<hr>\n<ngx-amap class="demo-map" [resizeEnable]="true" [center]="point" [zoom]="16">\n  <amap-marker [position]="point">\n    <amap-info-window [offset]="{x: 0, y: -30}" [isOpen]="true">\n      {{locationInfo}}\n    </amap-info-window>\n  </amap-marker>\n</ngx-amap>',h=function(){function n(n){this.AmapGeocoder=n,this.demo_md_html=f,this.demo_md_ts=g,this.plugin=n.of()}return n.prototype.ngOnInit=function(){},n.prototype.query=function(){var n=this;this.address&&this.plugin.then(function(l){return l.getLocation(n.address)}).then(function(l){console.log("get location of address:",n.address),console.log("status:",l.status),console.log("result:",l.result),"complete"===l.status&&"OK"===l.result.info&&(n.point=l.result.geocodes[0].location,n.locationInfo=l.result.geocodes[0].formattedAddress)})},n}(),v=e.pb({encapsulation:0,styles:[[""]],data:{}});function A(n){return e.Lb(0,[e.Db(0,a.a,[]),(n()(),e.rb(1,0,null,null,60,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" \u6b63\u5730\u7406\u7f16\u7801 "])),(n()(),e.rb(4,0,null,null,57,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,15,"form",[["class","form-inline"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,o=n.component;return"submit"===l&&(t=!1!==e.Bb(n,7).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.Bb(n,7).onReset()&&t),"ngSubmit"===l&&(t=!1!==o.query()&&t),t},null,null)),e.qb(6,16384,null,0,i.o,[],null,null),e.qb(7,4210688,null,0,i.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Gb(2048,null,i.b,null,[i.j]),e.qb(9,16384,null,0,i.i,[[4,i.b]],null,null),(n()(),e.rb(10,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.rb(11,0,null,null,7,"input",[["class","form-control"],["id","address"],["name","inputAddress"],["placeholder","\u8f93\u5165\u5730\u5740"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;return"input"===l&&(t=!1!==e.Bb(n,12)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.Bb(n,12).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.Bb(n,12)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.Bb(n,12)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.address=u)&&t),t},null,null)),e.qb(12,16384,null,0,i.c,[e.F,e.k,[2,i.a]],null,null),e.qb(13,16384,null,0,i.m,[],{required:[0,"required"]},null),e.Gb(1024,null,i.e,function(n){return[n]},[i.m]),e.Gb(1024,null,i.f,function(n){return[n]},[i.c]),e.qb(16,671744,null,0,i.k,[[2,i.b],[6,i.e],[8,null],[6,i.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,i.g,null,[i.k]),e.qb(18,16384,null,0,i.h,[[4,i.g]],null,null),(n()(),e.rb(19,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","submit"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["\u67e5\u8be2"])),(n()(),e.rb(21,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.rb(22,0,null,null,22,"ngx-amap",[["class","demo-map"]],null,null,null,r.d,r.b)),e.Gb(4608,null,s.M,s.M,[s.A,s.N,s.F]),e.Gb(4608,null,s.O,s.O,[s.A,s.F,s.H,s.N]),e.Gb(4608,null,s.P,s.P,[s.A,s.F,s.H,s.J,s.N]),e.Gb(4608,null,s.Q,s.Q,[s.A,s.N,s.F]),e.Gb(4608,null,s.R,s.R,[s.A,s.F]),e.Gb(4608,null,s.S,s.S,[s.A,s.N,s.F]),e.Gb(4608,null,s.T,s.T,[s.A,s.F,s.H,s.I]),e.Gb(4608,null,s.U,s.U,[s.A,s.N,s.F]),e.Gb(4608,null,s.V,s.V,[s.A,s.N,s.F]),e.Gb(4608,null,s.W,s.W,[s.A,s.N,s.F]),e.Gb(4608,null,s.X,s.X,[s.A,s.F,s.N]),e.Gb(512,null,s.A,s.A,[s.C,s.F]),e.qb(35,770048,null,0,s.y,[e.k,s.A,s.F],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),e.Gb(512,null,s.G,s.G,[s.A,s.F,s.H,s.I,s.K]),e.Gb(512,null,s.L,s.L,[s.A,s.F,s.H,s.J]),(n()(),e.rb(38,0,null,0,6,"amap-marker",[],null,null,null,null,null)),e.qb(39,1720320,null,1,s.m,[s.F,s.G,s.H,s.I,s.K],{position:[0,"position"]},null),e.Hb(603979776,1,{infoWindowComponent:1}),(n()(),e.rb(41,0,null,null,3,"amap-info-window",[],null,null,null,r.c,r.a)),e.qb(42,770048,[[1,4]],0,s.k,[e.k,s.F,s.L,s.J],{offset:[0,"offset"],isOpen:[1,"isOpen"]},null),e.Eb(43,{x:0,y:1}),(n()(),e.Jb(44,0,[" "," "])),(n()(),e.rb(45,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),e.rb(46,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,d.b,d.a)),e.qb(47,180224,null,0,c.a,[b.a,e.F],null,null),(n()(),e.rb(48,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(49,212992,null,0,p.a,[c.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(50,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),e.qb(51,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(52,2),(n()(),e.rb(53,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(54,212992,null,0,p.a,[c.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(55,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),e.qb(56,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(57,2),(n()(),e.rb(58,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(59,212992,null,0,p.a,[c.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(60,0,null,null,1,"a",[["href","api-doc/injectables/AmapGeocoderService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var u=l.component;n(l,13,0,""),n(l,16,0,"inputAddress",u.address),n(l,35,0,16,u.point,!0),n(l,39,0,u.point);var t=n(l,43,0,0,-30);n(l,42,0,t,!0),n(l,49,0,"HTML");var o=e.Kb(l,51,0,n(l,52,0,e.Bb(l,0),u.demo_md_html,"html"));n(l,51,0,o),n(l,54,0,"Component");var a=e.Kb(l,56,0,n(l,57,0,e.Bb(l,0),u.demo_md_ts,"typescript"));n(l,56,0,a),n(l,59,0,"API")},function(n,l){var u=l.component;n(l,5,0,e.Bb(l,9).ngClassUntouched,e.Bb(l,9).ngClassTouched,e.Bb(l,9).ngClassPristine,e.Bb(l,9).ngClassDirty,e.Bb(l,9).ngClassValid,e.Bb(l,9).ngClassInvalid,e.Bb(l,9).ngClassPending),n(l,11,0,e.Bb(l,13).required?"":null,e.Bb(l,18).ngClassUntouched,e.Bb(l,18).ngClassTouched,e.Bb(l,18).ngClassPristine,e.Bb(l,18).ngClassDirty,e.Bb(l,18).ngClassValid,e.Bb(l,18).ngClassInvalid,e.Bb(l,18).ngClassPending),n(l,44,0,u.locationInfo),n(l,46,0,e.Bb(l,47).clazz),n(l,48,0,e.Bb(l,49).id,e.Bb(l,49).active,e.Bb(l,49).addClass),n(l,53,0,e.Bb(l,54).id,e.Bb(l,54).active,e.Bb(l,54).addClass),n(l,58,0,e.Bb(l,59).id,e.Bb(l,59).active,e.Bb(l,59).addClass)})}function G(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"app-encode",[],null,null,null,A,v)),e.qb(1,114688,null,0,h,[s.i],null,null)],function(n,l){n(l,1,0)},null)}var C=e.nb("app-encode",h,G,{},{},[]),F="import { Component, OnInit } from '@angular/core';\nimport { AmapGeocoderService, AmapGeocoderWrapper } from 'ngx-amap';\n\n@Component({\n  selector: 'app-decode',\n  templateUrl: './decode.component.html',\n  styleUrls: ['./decode.component.scss']\n})\nexport class DecodeComponent implements OnInit {\n  address: string;\n  point: any;\n  locationInfo: string;\n  private geoPromise: Promise<AmapGeocoderWrapper>;\n\n  constructor(private AmapGeocoder: AmapGeocoderService) {\n    // \u4f7f\u7528 AmapGeocoderService \u521b\u5efa promise wrapper\n    this.geoPromise = AmapGeocoder.of();\n  }\n\n  ngOnInit() {\n  }\n\n  onMapClick(e) {\n    this.point = e.lnglat;\n    this.locationInfo = `\u7ecf\u7eac\u5ea6\uff1a ${this.point.getLng()}, ${this.point.getLat()}`;\n\n    if (this.point) {\n      // \u4f7f\u7528AMap.Geocoder.getAddress\u65b9\u6cd5\u9006\u5411\u5730\u7406\u7f16\u7801:\n      this.geoPromise.then(geocoder => geocoder.getAddress(this.point))\n        .then(data => {\n          console.log('get address of position:', this.point);\n          console.log('status:', data.status);\n          console.log('result:', data.result);\n\n          if (data.status === 'complete' && data.result.info === 'OK') {\n            this.address = data.result.regeocode.formattedAddress;\n          }\n        });\n    }\n  }\n}",B='<div class="alert alert-info">\u70b9\u51fb\u5730\u56fe\u67e5\u8be2\u5730\u5740\uff1a{{address}}</div>\n<hr>\n<ngx-amap class="demo-map" [resizeEnable]="true" [zoom]="13" (mapClick)="onMapClick($event)">\n  <amap-marker [position]="point">\n    <amap-info-window [offset]="{x: 0, y: -30}" [isOpen]="true">\n      {{locationInfo}}\n    </amap-info-window>\n  </amap-marker>\n</ngx-amap>',k=function(){function n(n){this.AmapGeocoder=n,this.demo_md_html=B,this.demo_md_ts=F,this.geoPromise=n.of()}return n.prototype.ngOnInit=function(){},n.prototype.onMapClick=function(n){var l=this;this.point=n.lnglat,this.locationInfo="\u7ecf\u7eac\u5ea6\uff1a "+this.point.getLng()+", "+this.point.getLat(),this.point&&this.geoPromise.then(function(n){return n.getAddress(l.point)}).then(function(n){console.log("get address of position:",l.point),console.log("status:",n.status),console.log("result:",n.result),"complete"===n.status&&"OK"===n.result.info&&(l.address=n.result.regeocode.formattedAddress)})},n}(),q=e.pb({encapsulation:0,styles:[[""]],data:{}});function y(n){return e.Lb(0,[e.Db(0,a.a,[]),(n()(),e.rb(1,0,null,null,46,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" \u9006\u5730\u7406\u7f16\u7801 "])),(n()(),e.rb(4,0,null,null,43,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,1,"div",[["class","alert alert-info"]],null,null,null,null,null)),(n()(),e.Jb(6,null,["\u70b9\u51fb\u5730\u56fe\u67e5\u8be2\u5730\u5740\uff1a",""])),(n()(),e.rb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.rb(8,0,null,null,22,"ngx-amap",[["class","demo-map"]],null,[[null,"mapClick"]],function(n,l,u){var e=!0;return"mapClick"===l&&(e=!1!==n.component.onMapClick(u)&&e),e},r.d,r.b)),e.Gb(4608,null,s.M,s.M,[s.A,s.N,s.F]),e.Gb(4608,null,s.O,s.O,[s.A,s.F,s.H,s.N]),e.Gb(4608,null,s.P,s.P,[s.A,s.F,s.H,s.J,s.N]),e.Gb(4608,null,s.Q,s.Q,[s.A,s.N,s.F]),e.Gb(4608,null,s.R,s.R,[s.A,s.F]),e.Gb(4608,null,s.S,s.S,[s.A,s.N,s.F]),e.Gb(4608,null,s.T,s.T,[s.A,s.F,s.H,s.I]),e.Gb(4608,null,s.U,s.U,[s.A,s.N,s.F]),e.Gb(4608,null,s.V,s.V,[s.A,s.N,s.F]),e.Gb(4608,null,s.W,s.W,[s.A,s.N,s.F]),e.Gb(4608,null,s.X,s.X,[s.A,s.F,s.N]),e.Gb(512,null,s.A,s.A,[s.C,s.F]),e.qb(21,770048,null,0,s.y,[e.k,s.A,s.F],{zoom:[0,"zoom"],resizeEnable:[1,"resizeEnable"]},{mapClick:"mapClick"}),e.Gb(512,null,s.G,s.G,[s.A,s.F,s.H,s.I,s.K]),e.Gb(512,null,s.L,s.L,[s.A,s.F,s.H,s.J]),(n()(),e.rb(24,0,null,0,6,"amap-marker",[],null,null,null,null,null)),e.qb(25,1720320,null,1,s.m,[s.F,s.G,s.H,s.I,s.K],{position:[0,"position"]},null),e.Hb(603979776,1,{infoWindowComponent:1}),(n()(),e.rb(27,0,null,null,3,"amap-info-window",[],null,null,null,r.c,r.a)),e.qb(28,770048,[[1,4]],0,s.k,[e.k,s.F,s.L,s.J],{offset:[0,"offset"],isOpen:[1,"isOpen"]},null),e.Eb(29,{x:0,y:1}),(n()(),e.Jb(30,0,[" "," "])),(n()(),e.rb(31,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),e.rb(32,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,d.b,d.a)),e.qb(33,180224,null,0,c.a,[b.a,e.F],null,null),(n()(),e.rb(34,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(35,212992,null,0,p.a,[c.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(36,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),e.qb(37,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(38,2),(n()(),e.rb(39,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(40,212992,null,0,p.a,[c.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(41,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),e.qb(42,4767744,null,0,a.b,[e.k,a.d],{data:[0,"data"]},null),e.Fb(43,2),(n()(),e.rb(44,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.qb(45,212992,null,0,p.a,[c.a,e.k,e.F],{heading:[0,"heading"]},null),(n()(),e.rb(46,0,null,null,1,"a",[["href","api-doc/injectables/AmapGeocoderService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var u=l.component;n(l,21,0,13,!0),n(l,25,0,u.point);var t=n(l,29,0,0,-30);n(l,28,0,t,!0),n(l,35,0,"HTML");var o=e.Kb(l,37,0,n(l,38,0,e.Bb(l,0),u.demo_md_html,"html"));n(l,37,0,o),n(l,40,0,"Component");var a=e.Kb(l,42,0,n(l,43,0,e.Bb(l,0),u.demo_md_ts,"typescript"));n(l,42,0,a),n(l,45,0,"API")},function(n,l){var u=l.component;n(l,6,0,u.address),n(l,30,0,u.locationInfo),n(l,32,0,e.Bb(l,33).clazz),n(l,34,0,e.Bb(l,35).id,e.Bb(l,35).active,e.Bb(l,35).addClass),n(l,39,0,e.Bb(l,40).id,e.Bb(l,40).active,e.Bb(l,40).addClass),n(l,44,0,e.Bb(l,45).id,e.Bb(l,45).active,e.Bb(l,45).addClass)})}function z(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"app-decode",[],null,null,null,y,q)),e.qb(1,114688,null,0,k,[s.i],null,null)],function(n,l){n(l,1,0)},null)}var I=e.nb("app-decode",k,z,{},{},[]),w=u("Ip0R"),O=u("ZYCi"),S={title:"\u6b63\u5730\u7406\u7f16\u7801"},N={title:"\u9006\u5730\u7406\u7f16\u7801"},L=function(){return function(){}}(),P=u("z+jS"),_=u("7PmN");u.d(l,"AmapGeocoderServiceDemoModuleNgFactory",function(){return M});var M=e.ob(t,[],function(n){return e.yb([e.zb(512,e.j,e.db,[[8,[o.a,C,I]],[3,e.j],e.x]),e.zb(4608,w.n,w.m,[e.u,[2,w.u]]),e.zb(4608,i.p,i.p,[]),e.zb(1073742336,w.c,w.c,[]),e.zb(1073742336,i.n,i.n,[]),e.zb(1073742336,i.d,i.d,[]),e.zb(1073742336,O.o,O.o,[[2,O.u],[2,O.l]]),e.zb(1073742336,L,L,[]),e.zb(1073742336,s.z,s.z,[]),e.zb(1073742336,P.a,P.a,[]),e.zb(1073742336,a.c,a.c,[]),e.zb(1073742336,_.a,_.a,[]),e.zb(1073742336,t,t,[]),e.zb(1024,O.j,function(){return[[{path:"",redirectTo:"/AmapGeocoderService/encode",pathMatch:"full"},{path:"encode",component:h,data:S},{path:"decode",component:k,data:N}]]},[])])})}}]);