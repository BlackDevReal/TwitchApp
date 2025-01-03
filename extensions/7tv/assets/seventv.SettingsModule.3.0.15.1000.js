import{u as g}from"./seventv.index.3.0.15.10003.js";import{d as h}from"./seventv.useModule.3.0.15.1000.js";import{u as k,a as y}from"./seventv.useRouter.3.0.15.1000.js";import{u as S,a as b}from"./seventv.Settings.3.0.15.1000.js";import{G as C,_ as x}from"./seventv.StoreSubscribeButton.3.0.15.1000.js";import{O as B}from"./seventv.OpenLinkIcon.3.0.15.1000.js";import{d as v,w,a4 as E,l as s,f as m,m as M,F as d,s as i,j as p,k as O,J as T,u as l,Z as V,_ as j,a as L}from"./seventv.index.3.0.15.1000.js";import{c as $,t as A,u as _,r as G}from"./seventv.preload-helper.3.0.15.1000.js";import{S as H}from"./seventv.SettingsMenu.3.0.15.1000.js";const I=["onClick"],N=v({__name:"SettingsChatHook",props:{el:{}},emits:["open-settings"],setup(f,{emit:a}){const c=f,u=S(),n=[{label:"Get Chat Badges & Colors",color:"var(--seventv-subscriber-color)",icon:B,condition:()=>!!u.sub,action:()=>window.open("https://7tv.app/store","_blank")},{label:"7TV Settings",icon:C,action:()=>a("open-settings")}].map(e=>({...e,container:(()=>{const t=document.createElement("div");return t.classList.add("cursor-pointer","hover:bg-secondary-lightest","active:bg-secondary-lightest/60"),t.style.borderRadius="0.25rem",t})()}));function r(){const e=c.el.querySelector(".chat-actions-menu-list");if(!(!e||!e.children.length))for(const t of n)t.container&&(e.contains(t.container)||e.children[0].insertAdjacentElement("afterend",t.container))}return w(r),g(c.el,"click",r),E(()=>{for(const e of n)e.container&&e.container.remove()}),(e,t)=>(s(!0),m(d,null,M(_(n),o=>(s(),m(d,{key:o.label},[o.container?(s(),i(V,{key:0,to:o.container},[p("div",{class:"seventv-chat-settings-button",onClick:z=>o.action()},[p("div",{style:$({color:o.color})},[O(x,{provider:"7TV"}),p("span",null,A(o.label),1)],4),o.icon?(s(),i(T(o.icon),{key:0})):l("",!0)],8,I)],8,["to"])):l("",!0)],64))),128))}});const R=j(N,[["__scopeId","data-v-0a5b86a4"]]),q=v({__name:"SettingsModule",setup(f){h("settings",{name:"Settings",depends_on:[]});const a=b(),c=k(),u=y(c),n=G(null);function r(){n.value=document.querySelector(".chat-actions-popup")}return L(()=>u.currentRoute,r,{immediate:!0}),g(document,"click",()=>setTimeout(r,0),{capture:!0}),(e,t)=>(s(),m(d,null,[_(a).open?(s(),i(H,{key:0})):l("",!0),n.value?(s(),i(R,{key:1,el:n.value,onOpenSettings:t[0]||(t[0]=o=>_(a).open=!0)},null,8,["el"])):l("",!0)],64))}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{X as _};