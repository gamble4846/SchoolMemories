import{C as tt,D as b,E as et,F as nt,m as V,n as G,x as Y}from"./chunk-ARVT6BPA.js";import{Ab as x,Bb as k,Gb as s,Hb as D,Hc as j,Ib as N,Ic as R,Kb as Q,Lb as K,Mb as L,Nb as I,Pb as A,Qb as w,V as H,Xa as r,Xb as C,Ya as v,Yb as X,_ as P,_a as W,a as _,ha as u,hb as S,ia as B,j as U,ja as F,kb as l,kc as q,nc as m,o as y,ob as z,pb as T,qa as $,qb as f,sb as c,tb as Z,ub as J,vb as O,wb as E,xb as p,yb as d,zb as h}from"./chunk-B5RS2RF5.js";var lt=["nzType","avatar"];var ct=["*"];function dt(t,e){if(t&1&&(p(0,"div",1),h(1,"nz-skeleton-element",4),d()),t&2){let o=s(2);r(),z("nzSize",o.avatar.size||"default")("nzShape",o.avatar.shape||"circle")}}function pt(t,e){if(t&1&&h(0,"h3",5),t&2){let o=s(2);T("width",o.toCSSUnit(o.title.width))}}function zt(t,e){if(t&1&&h(0,"li"),t&2){let o=e.$index,a=s(3);T("width",a.toCSSUnit(a.widthList[o]))}}function mt(t,e){if(t&1&&(p(0,"ul",3),O(1,zt,1,2,"li",6,J),d()),t&2){let o=s(2);r(),E(o.rowsList)}}function ut(t,e){if(t&1&&(l(0,dt,2,2,"div",1),p(1,"div",0),l(2,pt,1,2,"h3",2)(3,mt,3,0,"ul",3),d()),t&2){let o=s();c(o.nzAvatar?0:-1),r(2),c(o.nzTitle?2:-1),r(),c(o.nzParagraph?3:-1)}}function ft(t,e){t&1&&N(0)}var ht=(()=>{let e=class e{constructor(){this.nzActive=!1,this.nzBlock=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=F({type:e,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(i,n){i&2&&f("ant-skeleton-active",n.nzActive)("ant-skeleton-block",n.nzBlock)},inputs:{nzActive:[2,"nzActive","nzActive",m],nzType:"nzType",nzBlock:[2,"nzBlock","nzBlock",m]},standalone:!0,features:[S]});let t=e;return t})();var Ct=(()=>{let e=class e{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(a){if(a.nzSize&&typeof this.nzSize=="number"){let i=`${this.nzSize}px`;this.styleMap={width:i,height:i,"line-height":i}}else this.styleMap={}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},standalone:!0,features:[$,C],attrs:lt,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(i,n){i&1&&h(0,"span",0),i&2&&(f("ant-skeleton-avatar-square",n.nzShape==="square")("ant-skeleton-avatar-circle",n.nzShape==="circle")("ant-skeleton-avatar-lg",n.nzSize==="large")("ant-skeleton-avatar-sm",n.nzSize==="small"),z("ngStyle",n.styleMap))},dependencies:[j],encapsulation:2,changeDetection:0});let t=e;return t})();var it=(()=>{let e=class e{constructor(a){this.cdr=a,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[]}toCSSUnit(a=""){return Y(a)}getTitleProps(){let a=!!this.nzAvatar,i=!!this.nzParagraph,n="";return!a&&i?n="38%":a&&i&&(n="50%"),_({width:n},this.getProps(this.nzTitle))}getAvatarProps(){let a=this.nzTitle&&!this.nzParagraph?"square":"circle";return _({shape:a,size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){let a=!!this.nzAvatar,i=!!this.nzTitle,n={};return(!a||!i)&&(n.width="61%"),!a&&i?n.rows=3:n.rows=2,_(_({},n),this.getProps(this.nzParagraph))}getProps(a){return a&&typeof a=="object"?a:{}}getWidthList(){let{width:a,rows:i}=this.paragraph,n=[];return a&&Array.isArray(a)?n=a:a&&!Array.isArray(a)&&(n=[],n[i-1]=a),n}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(a){(a.nzTitle||a.nzAvatar||a.nzParagraph)&&this.updateProps()}};e.\u0275fac=function(i){return new(i||e)(v(q))},e.\u0275cmp=u({type:e,selectors:[["nz-skeleton"]],hostAttrs:[1,"ant-skeleton"],hostVars:6,hostBindings:function(i,n){i&2&&f("ant-skeleton-with-avatar",!!n.nzAvatar)("ant-skeleton-active",n.nzActive)("ant-skeleton-round",!!n.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],standalone:!0,features:[$,C],ngContentSelectors:ct,decls:2,vars:1,consts:[[1,"ant-skeleton-content"],[1,"ant-skeleton-header"],[1,"ant-skeleton-title",3,"width"],[1,"ant-skeleton-paragraph"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[3,"width"]],template:function(i,n){i&1&&(D(),l(0,ut,4,3,"div",0)(1,ft,1,0)),i&2&&c(n.nzLoading?0:1)},dependencies:[ht,Ct],encapsulation:2,changeDetection:0});let t=e;return t})(),at=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=B({type:e}),e.\u0275inj=P({});let t=e;return t})();function gt(t,e){}function _t(t,e){if(t&1&&(p(0,"div",0),l(1,gt,0,0,"ng-template",2),d()),t&2){let o=s();r(),z("ngTemplateOutlet",o.nzAvatar)}}function yt(t,e){if(t&1&&(x(0),A(1),k()),t&2){let o=s(3);r(),w(o.nzTitle)}}function St(t,e){if(t&1&&(p(0,"div",3),l(1,yt,2,1,"ng-container",5),d()),t&2){let o=s(2);r(),z("nzStringTemplateOutlet",o.nzTitle)}}function Tt(t,e){if(t&1&&(x(0),A(1),k()),t&2){let o=s(3);r(),w(o.nzDescription)}}function xt(t,e){if(t&1&&(p(0,"div",4),l(1,Tt,2,1,"ng-container",5),d()),t&2){let o=s(2);r(),z("nzStringTemplateOutlet",o.nzDescription)}}function kt(t,e){if(t&1&&(p(0,"div",1),l(1,St,2,1,"div",3)(2,xt,2,1,"div",4),d()),t&2){let o=s();r(),c(o.nzTitle?1:-1),r(),c(o.nzDescription?2:-1)}}var rt=["*"];function Dt(t,e){t&1&&N(0)}var Nt=()=>({rows:4});function At(t,e){if(t&1&&(x(0),A(1),k()),t&2){let o=s(3);r(),w(o.nzTitle)}}function wt(t,e){if(t&1&&(p(0,"div",6),l(1,At,2,1,"ng-container",9),d()),t&2){let o=s(2);r(),z("nzStringTemplateOutlet",o.nzTitle)}}function bt(t,e){if(t&1&&(x(0),A(1),k()),t&2){let o=s(3);r(),w(o.nzExtra)}}function Mt(t,e){if(t&1&&(p(0,"div",7),l(1,bt,2,1,"ng-container",9),d()),t&2){let o=s(2);r(),z("nzStringTemplateOutlet",o.nzExtra)}}function Pt(t,e){}function Bt(t,e){if(t&1&&l(0,Pt,0,0,"ng-template",8),t&2){let o=s(2);z("ngTemplateOutlet",o.listOfNzCardTabComponent.template)}}function Ft(t,e){if(t&1&&(p(0,"div",0)(1,"div",5),l(2,wt,2,1,"div",6)(3,Mt,2,1,"div",7),d(),l(4,Bt,1,1,null,8),d()),t&2){let o=s();r(2),c(o.nzTitle?2:-1),r(),c(o.nzExtra?3:-1),r(),c(o.listOfNzCardTabComponent?4:-1)}}function Ot(t,e){}function Et(t,e){if(t&1&&(p(0,"div",1),l(1,Ot,0,0,"ng-template",8),d()),t&2){let o=s();r(),z("ngTemplateOutlet",o.nzCover)}}function Lt(t,e){t&1&&h(0,"nz-skeleton",3),t&2&&z("nzActive",!0)("nzTitle",!1)("nzParagraph",X(3,Nt))}function It(t,e){t&1&&N(0)}function qt(t,e){}function jt(t,e){if(t&1&&(p(0,"li")(1,"span"),l(2,qt,0,0,"ng-template",8),d()()),t&2){let o=e.$implicit,a=s(2);T("width",100/a.nzActions.length,"%"),r(2),z("ngTemplateOutlet",o)}}function Ht(t,e){if(t&1&&(p(0,"ul",4),O(1,jt,3,3,"li",10,Z),d()),t&2){let o=s();r(),E(o.nzActions)}}var $t=(()=>{let e=class e{constructor(){this.nzHoverable=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=F({type:e,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(i,n){i&2&&f("ant-card-hoverable",n.nzHoverable)},inputs:{nzHoverable:[2,"nzHoverable","nzHoverable",m]},exportAs:["nzCardGrid"],standalone:!0,features:[S]});let t=e;return t})(),Qt=(()=>{let e=class e{constructor(){this.nzTitle=null,this.nzDescription=null,this.nzAvatar=null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["nz-card-meta"]],hostAttrs:[1,"ant-card-meta"],inputs:{nzTitle:"nzTitle",nzDescription:"nzDescription",nzAvatar:"nzAvatar"},exportAs:["nzCardMeta"],standalone:!0,features:[C],decls:2,vars:2,consts:[[1,"ant-card-meta-avatar"],[1,"ant-card-meta-detail"],[3,"ngTemplateOutlet"],[1,"ant-card-meta-title"],[1,"ant-card-meta-description"],[4,"nzStringTemplateOutlet"]],template:function(i,n){i&1&&l(0,_t,2,1,"div",0)(1,kt,3,2,"div",1),i&2&&(c(n.nzAvatar?0:-1),r(),c(n.nzTitle||n.nzDescription?1:-1))},dependencies:[R,G,V],encapsulation:2,changeDetection:0});let t=e;return t})(),Rt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["nz-card-tab"]],viewQuery:function(i,n){if(i&1&&K(W,7),i&2){let g;L(g=I())&&(n.template=g.first)}},exportAs:["nzCardTab"],standalone:!0,features:[C],ngContentSelectors:rt,decls:1,vars:0,template:function(i,n){i&1&&(D(),l(0,Dt,1,0,"ng-template"))},encapsulation:2,changeDetection:0});let t=e;return t})(),ot="card",Vt=(()=>{let e=class e{constructor(a,i,n){this.nzConfigService=a,this.cdr=i,this.directionality=n,this._nzModuleName=ot,this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new U,this.nzConfigService.getConfigChangeEventForComponent(ot).pipe(H(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(H(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};e.\u0275fac=function(i){return new(i||e)(v(tt),v(q),v(et))},e.\u0275cmp=u({type:e,selectors:[["nz-card"]],contentQueries:function(i,n,g){if(i&1&&(Q(g,Rt,5),Q(g,$t,4)),i&2){let M;L(M=I())&&(n.listOfNzCardTabComponent=M.first),L(M=I())&&(n.listOfNzCardGridDirective=M)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(i,n){i&2&&f("ant-card-loading",n.nzLoading)("ant-card-bordered",n.nzBorderless===!1&&n.nzBordered)("ant-card-hoverable",n.nzHoverable)("ant-card-small",n.nzSize==="small")("ant-card-contain-grid",n.listOfNzCardGridDirective&&n.listOfNzCardGridDirective.length)("ant-card-type-inner",n.nzType==="inner")("ant-card-contain-tabs",!!n.listOfNzCardTabComponent)("ant-card-rtl",n.dir==="rtl")},inputs:{nzBordered:[2,"nzBordered","nzBordered",m],nzBorderless:[2,"nzBorderless","nzBorderless",m],nzLoading:[2,"nzLoading","nzLoading",m],nzHoverable:[2,"nzHoverable","nzHoverable",m],nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],standalone:!0,features:[S,C],ngContentSelectors:rt,decls:6,vars:5,consts:[[1,"ant-card-head"],[1,"ant-card-cover"],[1,"ant-card-body",3,"ngStyle"],[3,"nzActive","nzTitle","nzParagraph"],[1,"ant-card-actions"],[1,"ant-card-head-wrapper"],[1,"ant-card-head-title"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"],[3,"width"]],template:function(i,n){i&1&&(D(),l(0,Ft,5,3,"div",0)(1,Et,2,1,"div",1),p(2,"div",2),l(3,Lt,1,4,"nz-skeleton",3)(4,It,1,0),d(),l(5,Ht,3,0,"ul",4)),i&2&&(c(n.nzTitle||n.nzExtra||n.listOfNzCardTabComponent?0:-1),r(),c(n.nzCover?1:-1),r(),z("ngStyle",n.nzBodyStyle),r(),c(n.nzLoading?3:4),r(2),c(n.nzActions.length?5:-1))},dependencies:[G,V,R,j,at,it],encapsulation:2,changeDetection:0});let t=e;return y([b()],t.prototype,"nzBordered",void 0),y([b()],t.prototype,"nzBorderless",void 0),y([b()],t.prototype,"nzHoverable",void 0),y([b()],t.prototype,"nzSize",void 0),t})(),ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=B({type:e}),e.\u0275inj=P({imports:[Vt,Qt,nt]});let t=e;return t})();export{Qt as a,Vt as b,ke as c};