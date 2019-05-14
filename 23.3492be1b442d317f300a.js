(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6Ip/":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),o=u("LOpI"),r=u("icah"),i=u("WFzO"),c=u("d+NZ"),b=u("vPfJ"),s=u("OQnT"),p=u("NEdW"),m=u("udNS"),d=u("t9fZ"),h="import { Component, AfterViewInit, ViewChild } from '@angular/core';\nimport { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';\nimport 'rxjs/add/operator/take';\nimport { Map } from 'ngx-amap/types/class';\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements AfterViewInit {\n  private plugin: Promise<AmapMouseToolWrapper>;\n\n  @ViewChild(NgxAmapComponent)\n  private mapComponent: NgxAmapComponent;\n\n  constructor(\n    private mouseToolService: AmapMouseToolService\n  ) {\n  }\n\n  ngAfterViewInit() {\n    this.plugin = this.mapComponent.ready\n      .take(1)\n      .toPromise()\n      .then((map: Map) => this.mouseToolService.of(map));\n  }\n\n  draw(type: string) {\n    this.plugin\n      .then(wrapper => {\n        return wrapper[type]();\n      })\n      .then(res => {\n        console.log(res);\n      });\n  }\n\n  clear() {\n    this.plugin\n      .then(wrapper => {\n        return wrapper.close(true);\n      });\n  }\n}",v='<div class="card card-accent-info">\n  <div class="card-header">\n    \u9f20\u6807\u5de5\u5177\n  </div>\n  <div class="card-body">\n    <button class="btn btn-outline-primary" (click)="draw(\'marker\')">\u70b9\u6807\u8bb0</button>\n    <button class="btn btn-outline-primary" (click)="draw(\'circle\')">\u5706</button>\n    <button class="btn btn-outline-primary" (click)="draw(\'rectangle\')">\u77e9\u5f62</button>\n    <button class="btn btn-outline-primary" (click)="draw(\'polygon\')">\u591a\u8fb9\u5f62</button>\n    <button class="btn btn-outline-primary" (click)="clear()">\u6e05\u9664</button>\n    <hr>\n    <ngx-amap\n      class="demo-map"\n      [resizeEnable]="true"\n      [zoom]="13"\n    >\n    </ngx-amap>\n  </div>\n</div>\n',f=function(){function n(n){this.mouseToolService=n,this.demo_md_html=v,this.demo_md_ts=h}return n.prototype.ngAfterViewInit=function(){var n=this;this.plugin=this.mapComponent.ready.pipe(Object(d.a)(1)).toPromise().then(function(l){return n.mouseToolService.of(l)})},n.prototype.draw=function(n){this.plugin.then(function(l){return l[n]()}).then(function(n){console.log(n)})},n.prototype.clear=function(){this.plugin.then(function(n){return n.close(!0)})},n}(),g=t.pb({encapsulation:0,styles:[[""]],data:{}});function y(n){return t.Lb(0,[t.Db(0,o.a,[]),t.Hb(402653184,1,{mapComponent:0}),(n()(),t.rb(2,0,null,null,47,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t.rb(3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" \u9f20\u6807\u5de5\u5177 "])),(n()(),t.rb(5,0,null,null,44,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.rb(6,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("marker")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u70b9\u6807\u8bb0"])),(n()(),t.rb(8,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("circle")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u5706"])),(n()(),t.rb(10,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("rectangle")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u77e9\u5f62"])),(n()(),t.rb(12,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("polygon")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u591a\u8fb9\u5f62"])),(n()(),t.rb(14,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.clear()&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u6e05\u9664"])),(n()(),t.rb(16,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.rb(17,0,null,null,15,"ngx-amap",[["class","demo-map"]],null,null,null,r.d,r.b)),t.Gb(4608,null,i.G,i.G,[i.A,i.F,i.H,i.I,i.K]),t.Gb(4608,null,i.L,i.L,[i.A,i.F,i.H,i.J]),t.Gb(4608,null,i.M,i.M,[i.A,i.N,i.F]),t.Gb(4608,null,i.O,i.O,[i.A,i.F,i.H,i.N]),t.Gb(4608,null,i.P,i.P,[i.A,i.F,i.H,i.J,i.N]),t.Gb(4608,null,i.Q,i.Q,[i.A,i.N,i.F]),t.Gb(4608,null,i.R,i.R,[i.A,i.F]),t.Gb(4608,null,i.S,i.S,[i.A,i.N,i.F]),t.Gb(4608,null,i.T,i.T,[i.A,i.F,i.H,i.I]),t.Gb(4608,null,i.U,i.U,[i.A,i.N,i.F]),t.Gb(4608,null,i.V,i.V,[i.A,i.N,i.F]),t.Gb(4608,null,i.W,i.W,[i.A,i.N,i.F]),t.Gb(4608,null,i.X,i.X,[i.A,i.F,i.N]),t.Gb(512,null,i.A,i.A,[i.C,i.F]),t.qb(32,770048,[[1,4]],0,i.y,[t.k,i.A,i.F],{zoom:[0,"zoom"],resizeEnable:[1,"resizeEnable"]},null),(n()(),t.rb(33,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t.rb(34,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,c.b,c.a)),t.qb(35,180224,null,0,b.a,[s.a,t.F],null,null),(n()(),t.rb(36,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t.qb(37,212992,null,0,p.a,[b.a,t.k,t.F],{heading:[0,"heading"]},null),(n()(),t.rb(38,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t.qb(39,4767744,null,0,o.b,[t.k,o.d],{data:[0,"data"]},null),t.Fb(40,2),(n()(),t.rb(41,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t.qb(42,212992,null,0,p.a,[b.a,t.k,t.F],{heading:[0,"heading"]},null),(n()(),t.rb(43,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t.qb(44,4767744,null,0,o.b,[t.k,o.d],{data:[0,"data"]},null),t.Fb(45,2),(n()(),t.rb(46,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t.qb(47,212992,null,0,p.a,[b.a,t.k,t.F],{heading:[0,"heading"]},null),(n()(),t.rb(48,0,null,null,1,"a",[["href","api-doc/injectables/AmapMouseToolService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var u=l.component;n(l,32,0,13,!0),n(l,37,0,"HTML");var e=t.Kb(l,39,0,n(l,40,0,t.Bb(l,0),u.demo_md_html,"html"));n(l,39,0,e),n(l,42,0,"Component");var a=t.Kb(l,44,0,n(l,45,0,t.Bb(l,0),u.demo_md_ts,"typescript"));n(l,44,0,a),n(l,47,0,"API")},function(n,l){n(l,34,0,t.Bb(l,35).clazz),n(l,36,0,t.Bb(l,37).id,t.Bb(l,37).active,t.Bb(l,37).addClass),n(l,41,0,t.Bb(l,42).id,t.Bb(l,42).active,t.Bb(l,42).addClass),n(l,46,0,t.Bb(l,47).id,t.Bb(l,47).active,t.Bb(l,47).addClass)})}function w(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"app-simple",[],null,null,null,y,g)),t.qb(1,4243456,null,0,f,[i.n],null,null)],null,null)}var A=t.nb("app-simple",f,w,{},{},[]),k="import { Component, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';\nimport { Map } from 'ngx-amap/types/class';\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements AfterViewInit, OnDestroy {\n  private _subscription: Subscription;\n\n  private plugin: Promise<AmapMouseToolWrapper>;\n\n  @ViewChild(NgxAmapComponent)\n  private mapComponent: NgxAmapComponent;\n\n  constructor(\n    private mouseToolService: AmapMouseToolService\n  ) {\n  }\n\n  ngAfterViewInit() {\n    this.plugin = this.mapComponent.ready\n      .take(1)\n      .toPromise()\n      .then((map: Map) => this.mouseToolService.of(map));\n\n    // \u7ed1\u5b9a\u4e8b\u4ef6\u4fa6\u542c\uff1a\n    this.plugin.then(mouseTool => {\n      this._subscription = mouseTool.on('draw')\n        .subscribe(event => console.log('MouseTool event: \"draw\"', event));\n    });\n  }\n\n  async draw(type: string) {\n    const wrapper = await this.plugin;\n    await wrapper[type]();\n  }\n\n  ngOnDestroy() {\n    // \u79fb\u9664\u4fa6\u542c\u5668\uff1a\n    if (this._subscription) {\n      this._subscription.unsubscribe();\n    }\n  }\n}",F='<div class="card card-accent-info">\n  <div class="card-header">\n    \u4e8b\u4ef6\n  </div>\n  <div class="card-body">\n    <button class="btn btn-outline-primary" (click)="draw(\'marker\')">\u70b9\u6807\u8bb0</button>\n    <button class="btn btn-outline-primary" (click)="draw(\'circle\')">\u5706</button>\n    <button class="btn btn-outline-primary" (click)="draw(\'rectangle\')">\u77e9\u5f62</button>\n    <button class="btn btn-outline-primary" (click)="draw(\'polygon\')">\u591a\u8fb9\u5f62</button>\n    <div class="alert alert-info mt-3">\u8bf7\u67e5\u770bconsole\u8f93\u51fa</div>\n    <hr>\n    <ngx-amap\n      class="demo-map"\n      [resizeEnable]="true"\n      [zoom]="13"\n    >\n    </ngx-amap>\n  </div>\n</div>\n',C=function(){function n(n){this.mouseToolService=n,this.demo_md_html=F,this.demo_md_ts=k}return n.prototype.ngAfterViewInit=function(){var n=this;this.plugin=this.mapComponent.ready.pipe(Object(d.a)(1)).toPromise().then(function(l){return n.mouseToolService.of(l)}),this.plugin.then(function(l){n._subscription=l.on("draw").subscribe(function(n){return console.log('MouseTool event: "draw"',n)})})},n.prototype.draw=function(n){return l=this,void 0,t=function(){return function(n,l){var u,t,e,a,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&a[0]?t.return:a[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,a[1])).done)return e;switch(t=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,t=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3])){o.label=a[1];break}if(6===a[0]&&o.label<e[1]){o.label=e[1],e=a;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(a);break}e[2]&&o.ops.pop(),o.trys.pop();continue}a=l.call(n,o)}catch(r){a=[6,r],t=0}finally{u=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,function(l){switch(l.label){case 0:return[4,this.plugin];case 1:return[4,l.sent()[n]()];case 2:return l.sent(),[2]}})},new((u=void 0)||(u=Promise))(function(n,e){function a(n){try{r(t.next(n))}catch(l){e(l)}}function o(n){try{r(t.throw(n))}catch(l){e(l)}}function r(l){l.done?n(l.value):new u(function(n){n(l.value)}).then(a,o)}r((t=t.apply(l,[])).next())});var l,u,t},n.prototype.ngOnDestroy=function(){this._subscription&&this._subscription.unsubscribe()},n}(),T=t.pb({encapsulation:0,styles:[[""]],data:{}});function G(n){return t.Lb(0,[t.Db(0,o.a,[]),t.Hb(402653184,1,{mapComponent:0}),(n()(),t.rb(2,0,null,null,47,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t.rb(3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" \u4e8b\u4ef6 "])),(n()(),t.rb(5,0,null,null,44,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.rb(6,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("marker")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u70b9\u6807\u8bb0"])),(n()(),t.rb(8,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("circle")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u5706"])),(n()(),t.rb(10,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("rectangle")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u77e9\u5f62"])),(n()(),t.rb(12,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.draw("polygon")&&t),t},null,null)),(n()(),t.Jb(-1,null,["\u591a\u8fb9\u5f62"])),(n()(),t.rb(14,0,null,null,1,"div",[["class","alert alert-info mt-3"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["\u8bf7\u67e5\u770bconsole\u8f93\u51fa"])),(n()(),t.rb(16,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.rb(17,0,null,null,15,"ngx-amap",[["class","demo-map"]],null,null,null,r.d,r.b)),t.Gb(4608,null,i.G,i.G,[i.A,i.F,i.H,i.I,i.K]),t.Gb(4608,null,i.L,i.L,[i.A,i.F,i.H,i.J]),t.Gb(4608,null,i.M,i.M,[i.A,i.N,i.F]),t.Gb(4608,null,i.O,i.O,[i.A,i.F,i.H,i.N]),t.Gb(4608,null,i.P,i.P,[i.A,i.F,i.H,i.J,i.N]),t.Gb(4608,null,i.Q,i.Q,[i.A,i.N,i.F]),t.Gb(4608,null,i.R,i.R,[i.A,i.F]),t.Gb(4608,null,i.S,i.S,[i.A,i.N,i.F]),t.Gb(4608,null,i.T,i.T,[i.A,i.F,i.H,i.I]),t.Gb(4608,null,i.U,i.U,[i.A,i.N,i.F]),t.Gb(4608,null,i.V,i.V,[i.A,i.N,i.F]),t.Gb(4608,null,i.W,i.W,[i.A,i.N,i.F]),t.Gb(4608,null,i.X,i.X,[i.A,i.F,i.N]),t.Gb(512,null,i.A,i.A,[i.C,i.F]),t.qb(32,770048,[[1,4]],0,i.y,[t.k,i.A,i.F],{zoom:[0,"zoom"],resizeEnable:[1,"resizeEnable"]},null),(n()(),t.rb(33,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t.rb(34,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,c.b,c.a)),t.qb(35,180224,null,0,b.a,[s.a,t.F],null,null),(n()(),t.rb(36,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t.qb(37,212992,null,0,p.a,[b.a,t.k,t.F],{heading:[0,"heading"]},null),(n()(),t.rb(38,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t.qb(39,4767744,null,0,o.b,[t.k,o.d],{data:[0,"data"]},null),t.Fb(40,2),(n()(),t.rb(41,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t.qb(42,212992,null,0,p.a,[b.a,t.k,t.F],{heading:[0,"heading"]},null),(n()(),t.rb(43,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t.qb(44,4767744,null,0,o.b,[t.k,o.d],{data:[0,"data"]},null),t.Fb(45,2),(n()(),t.rb(46,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t.qb(47,212992,null,0,p.a,[b.a,t.k,t.F],{heading:[0,"heading"]},null),(n()(),t.rb(48,0,null,null,1,"a",[["href","api-doc/injectables/AmapMouseToolService.html"],["target","_blank"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var u=l.component;n(l,32,0,13,!0),n(l,37,0,"HTML");var e=t.Kb(l,39,0,n(l,40,0,t.Bb(l,0),u.demo_md_html,"html"));n(l,39,0,e),n(l,42,0,"Component");var a=t.Kb(l,44,0,n(l,45,0,t.Bb(l,0),u.demo_md_ts,"typescript"));n(l,44,0,a),n(l,47,0,"API")},function(n,l){n(l,34,0,t.Bb(l,35).clazz),n(l,36,0,t.Bb(l,37).id,t.Bb(l,37).active,t.Bb(l,37).addClass),n(l,41,0,t.Bb(l,42).id,t.Bb(l,42).active,t.Bb(l,42).addClass),n(l,46,0,t.Bb(l,47).id,t.Bb(l,47).active,t.Bb(l,47).addClass)})}function z(n){return t.Lb(0,[(n()(),t.rb(0,0,null,null,1,"app-events",[],null,null,null,G,T)),t.qb(1,4374528,null,0,C,[i.n],null,null)],null,null)}var M=t.nb("app-events",C,z,{},{},[]),N=u("Ip0R"),S=u("z+jS"),x=u("7PmN"),_=u("ZYCi"),B={title:"\u7b80\u5355\u793a\u4f8b"},J={title:"\u4e8b\u4ef6"},I=function(){return function(){}}();u.d(l,"AmapMouseToolServiceDemoModuleNgFactory",function(){return P});var P=t.ob(e,[],function(n){return t.yb([t.zb(512,t.j,t.db,[[8,[a.a,A,M]],[3,t.j],t.x]),t.zb(4608,N.n,N.m,[t.u,[2,N.u]]),t.zb(1073742336,N.c,N.c,[]),t.zb(1073742336,i.z,i.z,[]),t.zb(1073742336,S.a,S.a,[]),t.zb(1073742336,o.c,o.c,[]),t.zb(1073742336,x.a,x.a,[]),t.zb(1073742336,_.o,_.o,[[2,_.u],[2,_.l]]),t.zb(1073742336,I,I,[]),t.zb(1073742336,e,e,[]),t.zb(1024,_.j,function(){return[[{path:"",redirectTo:"/AmapMouseToolService/simple",pathMatch:"full"},{path:"simple",component:f,data:B},{path:"events",component:C,data:J}]]},[])])})}}]);