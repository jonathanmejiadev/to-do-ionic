(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{uMfO:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",(function(){return f}));var o=n("TEn/"),a=n("ofXK"),r=n("3Pt+"),i=n("qtYk"),l=n("tyNb"),c=n("mrSG"),s=n("fXoL"),b=n("LzXR"),d=n("N+2n");const u=[{path:"",component:(()=>{class t{constructor(t,e,n){this.wishesService=t,this.alertController=e,this.router=n}addTask(){return Object(c.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"New Task",inputs:[{name:"title",type:"text",placeholder:"Task Name"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Create",handler:t=>{if(0!==t.title.length){console.log(t.title);const e=this.wishesService.createTask(t.title);this.router.navigateByUrl("/tabs/tab1/add/"+e)}}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(b.a),s.Hb(o.a),s.Hb(l.g))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-tab1"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["color","dark"],["color","dark",3,"fullscreen"],[3,"completed"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add-outline"]],template:function(t,e){1&t&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar",1),s.Kb(2,"ion-title"),s.fc(3," Pending "),s.Jb(),s.Jb(),s.Jb(),s.Kb(4,"ion-content",2),s.Ib(5,"app-tasks",3),s.Kb(6,"ion-fab",4),s.Kb(7,"ion-fab-button",5),s.Sb("click",(function(){return e.addTask()})),s.Ib(8,"ion-icon",6),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.Zb("translucent",!0),s.xb(4),s.Zb("fullscreen",!0),s.xb(1),s.Zb("completed",!1))},directives:[o.k,o.A,o.z,o.h,d.a,o.i,o.j,o.l],encapsulation:2}),t})()},{path:"add/:taskId",loadChildren:()=>n.e(0).then(n.bind(null,"D453")).then(t=>t.AddPageModule)}];let p=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[l.i.forChild(u)],l.i]}),t})();var h=n("j1ZV");let f=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[o.B,a.b,r.a,i.a,p,h.a]]}),t})()}}]);