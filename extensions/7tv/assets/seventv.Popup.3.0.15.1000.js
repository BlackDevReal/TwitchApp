import{d as l,a3 as g,l as r,f as a,k as c,q as u,x as m,F as P,j as s,y,z as x,_ as h}from"./seventv.index.3.0.15.1000.js";import{C as I}from"./seventv.ChevronIcon.3.0.15.1000.js";import{U as _}from"./seventv.StoreSubscribeButton.3.0.15.1000.js";import{b as R,t as q,M as S}from"./seventv.preload-helper.3.0.15.1000.js";import"./seventv.main.3.0.15.1000.js";const f=o=>(y("data-v-ded37257"),o=o(),x(),o),k={class:"seventv-popup-inner"},C={key:0,class:"active-permission-request"},w=f(()=>s("h1",null,[m(" Coming Soon "),s("p",null,"You'll be able to see all the various chats you're connected to from here!")],-1)),E={class:"onboarding-button"},T=f(()=>s("span",null,"Onboarding",-1)),U=l({__name:"PopupInner",setup(o){const e=R({permissionsRequested:!1,tab:null,host:"",hostPermissions:[]});chrome.tabs.query({active:!0},n=>{for(const t of n){if(!t.url)continue;const i=new URL(t.url);g.test(i.host)&&(e.tab=t,e.host=i.host,e.hostPermissions=[`*://*.${i.host}/*`],chrome.permissions.getAll(p=>{p.origins&&(e.permissionsRequested=!p.origins.some(b=>b===e.hostPermissions[0]))}))}});function d(){e.tab&&chrome.permissions.request({origins:S(e.hostPermissions)},n=>{!n||!e.tab||typeof e.tab.id>"u"||(chrome.tabs.reload(e.tab.id),window.close())})}function v(){chrome.tabs.create({url:chrome.runtime.getURL("index.html#/onboarding/start")})}return(n,t)=>(r(),a("main",k,[e.permissionsRequested?(r(),a("div",C,[c(_,{onClick:t[0]||(t[0]=i=>d())},{default:u(()=>[m("Enable 7TV for "+q(e.host),1)]),_:1})])):(r(),a(P,{key:1},[w,s("div",E,[c(_,{class:"ui-button-important",onClick:v},{default:u(()=>[T,c(I,{direction:"right"})]),_:1})])],64))]))}});const B=h(U,[["__scopeId","data-v-ded37257"]]),N={class:"seventv-popup"},O=l({__name:"Popup",setup(o){return(e,d)=>(r(),a("main",N,[s("div",null,[c(B)])]))}});const L=h(O,[["__scopeId","data-v-f8cd35dd"]]);export{L as default};