(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7UCR":function(n,e,o){"use strict";o.r(e),o.d(e,"UserModule",function(){return a});var t=o("ofXK"),s=o("tyNb"),r=o("fXoL");let c=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Fb({type:n,selectors:[["app-list"]],decls:2,vars:0,template:function(n,e){1&n&&(r.Qb(0,"p"),r.vc(1,"list works!"),r.Pb())},styles:[""]}),n})();var i=o("HDdC");const l=[{path:"login",component:(()=>{class n{constructor(){}ngOnInit(){new Promise(n=>{console.log("Promise call..."),setTimeout(()=>{n("Promise working!"),n("Promise working1!"),n("Promise working2!"),n("Promise working3!")},1e3)});const n=new i.a(n=>{let e=0;setInterval(()=>{e+=1,n.next(e)},1e3)});this.muSub=n.subscribe(n=>console.log(`Subscribe counter ${n}`))}ngOnDestroy(){var n;null===(n=this.muSub)||void 0===n||n.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Fb({type:n,selectors:[["app-login"]],decls:2,vars:0,template:function(n,e){1&n&&(r.Qb(0,"p"),r.vc(1,"login works!"),r.Pb())},styles:[""]}),n})()},{path:"list",component:c}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[s.b.forChild(l)],s.b]}),n})(),a=(()=>{class n{constructor(){console.log("User module is lazy loading")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[t.b,u]]}),n})()}}]);