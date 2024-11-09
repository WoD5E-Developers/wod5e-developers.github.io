(()=>{"use strict";var e,t={479:(e,t,n)=>{var o=n(751),r=n(351),s=n(641),a=n(33);const i=(0,s.Lk)("h1",null,"Introduction",-1),l=(0,s.Lk)("h1",null,"License Information",-1),u=[(0,s.Lk)("h2",null,"System License",-1),(0,s.eW)(" World of Darkness 5e System for Foundry VTT Copyright (C) 2024, World of Darkness 5e Developers "),(0,s.Lk)("br",null,null,-1),(0,s.Lk)("br",null,null,-1),(0,s.eW)(" This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. "),(0,s.Lk)("h2",null,"Dark Pack Agreement",-1),(0,s.eW)(" Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved. For more information please visit "),(0,s.Lk)("a",{href:"https://worldofdarkness.com",target:"_blank"},"worldofdarkness.com",-1),(0,s.eW)(". ")],c={name:"OverviewComponent",data:()=>({})};var d=n(262);const h=(0,d.A)(c,[["render",function(e,t,n,o,r,c){return(0,s.uX)(),(0,s.CE)("div",{class:(0,a.C4)(e.$style.content)},[(0,s.Lk)("section",null,[i,(0,s.Lk)("div",{class:(0,a.C4)(e.$style.blurb)}," Welcome to the documentation site for the unofficial World of Darkness 5e FoundryVTT system. Here's where you'll find almost every answer to questions you might have about how the system works, integrations it has with other Foundry modules, some useful tips for setting everything up, and other articles to help you run and play your World of Darkness 5th edition games just the way you want to. ",2)]),(0,s.Lk)("section",null,[l,(0,s.Lk)("div",{class:(0,a.C4)(e.$style.blurb)},u,2)])],2)}],["__cssModules",{$style:{content:"content--oOHD4C",butterfly:"butterfly--JGORDp"}}]]),f=[(0,s.eW)(" This page wasn't found. Sorry about that! "),(0,s.Lk)("br",null,null,-1),(0,s.Lk)("br",null,null,-1),(0,s.eW)(" Maybe you're looking for something that doesn't exist anymore? ")],p={name:"NotFoundComponent",data:()=>({})},m=(0,d.A)(p,[["render",function(e,t,n,o,r,i){return(0,s.uX)(),(0,s.CE)("div",{class:(0,a.C4)(e.$style.blurb)},f,2)}],["__cssModules",{$style:{blurb:"blurb--MFHe_W"}}]]),v="WOD5E for FoundryVTT",b=[{name:`${v}`,path:"/",component:h},{path:"/wod5e-docs/",beforeEnter(e,t,n){window.location.href="/"}},{name:`${v} / 404`,path:"/:catchAll(.*)*",component:m}],y=(0,r.aE)({history:(0,r.LA)(),routes:b});y.beforeEach(((e,t,n)=>{e.href.match(/\/#/)&&y.push(e.href.replace(/\#\//,"")),document.title=e.name?e.name:v,document.head.querySelector("[property='og:title'][content]").content=e.name?e.name:v,n()}));const k=y,g=(n.p,{id:"app"}),w=["src"],C=n.p+"icon.webp",L={name:"NavbarComponent",data:()=>({isMenuVisible:!1,navbarimg:C,links:[{text:"Overview",href:"/"}]}),methods:{toggleMenu(){this.isMenuVisible=!this.isMenuVisible}}},_={name:"TemplateComponent",components:{Navbar:(0,d.A)(L,[["render",function(e,t,n,o,r,i){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",{class:(0,a.C4)(e.$style.navbar)},[(0,s.bF)(l,{to:e.links[0].href,class:(0,a.C4)(e.$style["image-link"])},{default:(0,s.k6)((()=>[(0,s.Lk)("img",{src:e.navbarimg},null,8,w)])),_:1},8,["to","class"]),(0,s.Lk)("ul",{class:(0,a.C4)(e.$style["nav-links"])},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.links,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.text},[(0,s.bF)(l,{to:e.href},{default:(0,s.k6)((()=>[(0,s.eW)((0,a.v_)(e.text),1)])),_:2},1032,["to"])])))),128))],2),(0,s.Lk)("div",{class:(0,a.C4)(e.$style["menu-icon"]),onClick:t[0]||(t[0]=(...t)=>e.toggleMenu&&e.toggleMenu(...t))},"☰",2),(0,s.Lk)("div",{class:(0,a.C4)([e.$style["waffle-menu"],{[e.$style.show]:e.isMenuVisible}]),id:"waffleMenu"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.links,(e=>((0,s.uX)(),(0,s.Wv)(l,{key:e.text,to:e.href},{default:(0,s.k6)((()=>[(0,s.eW)((0,a.v_)(e.text),1)])),_:2},1032,["to"])))),128))],2)],2)}],["__cssModules",{$style:{navbar:"navbar--adkzY0","image-link":"image-link--OSWsIK","nav-links":"nav-links--uXPJiE","waffle-menu":"waffle-menu--r1mGEc","menu-icon":"menu-icon--ExuY_D",show:"show--SRx6Qw"}}]])}},$=(0,d.A)(_,[["render",function(e,t,n,o,r,i){const l=(0,s.g2)("Navbar"),u=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",g,[(0,s.bF)(l),(0,s.Lk)("div",{class:(0,a.C4)(e.$style["page-body"])},[(0,s.bF)(u)],2)])}],["__cssModules",{$style:{"page-body":"page-body--Lo9JZO"}}]]);var E=n(107),O=n(273),W=n(188),F=n(897),M=n(875);E.Yv.add(W.X7I,F.C91,M.Cvc);const x=(0,o.Ef)($);x.component("font-awesome-icon",O.gc),x.use(k),x.mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,r,s)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,r,s]=e[c],i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,r,s]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[a,i,l]=n,u=0;if(a.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(n);u<a.length;u++)s=a[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self.webpackChunkwod5e_developers_github_io=self.webpackChunkwod5e_developers_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[841],(()=>o(479)));r=o.O(r)})();