import{g as p,O as S}from"./seventv.ReactHooks.3.0.15.1000.js";import{d as C,Q as E,G as M,a as v,al as h,am as N,an as R,W as L,R as O,a4 as U,ak as V}from"./seventv.index.3.0.15.1000.js";import{d as I}from"./seventv.useModule.3.0.15.1000.js";import{r as q,b as y}from"./seventv.preload-helper.3.0.15.1000.js";const H=[V("avatars.animation","TOGGLE",{path:["Appearance","Vanity"],label:"Animated Avatars",hint:"Whether or not to allow user avatars to be animated",defaultValue:!0})],P=C({__name:"AvatarsModule",setup(W){const{markAsReady:g}=I("avatars",{name:"Animated Avatars",depends_on:[]}),{sendMessage:A,target:w}=E(),c=q(),d=y({seen:new Set,pending:new Set}),l=M("avatars.animation"),f=y({});let i;function _(e){d.seen.has(e)||(d.seen.add(e),d.pending.add(e),i||(i=window.setTimeout(()=>{i=void 0;const t=Array.from(d.pending);d.pending.clear(),A("REQUEST_USER_COSMETICS",{identifiers:t.map(n=>["username",n]),kinds:["AVATAR"]})},500)))}async function k(){const e=document.querySelector(".tw-avatar");return e?Promise.resolve(e):new S((t,n)=>{for(const a of t)if(a.addedNodes.length)for(let r=0;r<a.addedNodes.length;r++){const s=a.addedNodes[r];if(!(s instanceof HTMLElement))continue;const o=s.querySelector(".tw-avatar");if(o){n(o);return}}},document.getElementById("root"),{childList:!0,subtree:!0})}async function T(){const e=await k();if(!e)return;const t=p(e);!t||!t.return||t.return.type.displayName==="ScAvatar"&&(c.value=t.return.type)}function u(){const e=document.querySelectorAll(".tw-avatar"),t=new Set,n=new Map;for(let a=0;a<e.length;a++){const r=e.item(a),s=p(r);if(!s)continue;let o=s;for(;o;){if(n.has(o)||(n.set(o,o.key),o.key="seventv-rerender"),o.stateNode&&"forceUpdate"in o.stateNode){t.add(o.stateNode);break}o=o.return}}for(const a of t)for(let r=0;r<2;r++)a.forceUpdate();for(const[a,r]of n)a.key=r}function b(e){var r,s;const t=e.props;if(!t||!t.userLogin)return;_(t.userLogin);const n=f[t.userLogin];if(!n||!n.data||!((s=(r=n.data.host)==null?void 0:r.files)!=null&&s.length))return;const a=n.data.host.files.find(o=>o.width&&o.width>64);a&&(t.src=`${n.data.host.url}/${a.name}`)}v(c,(e,t)=>{e&&(t&&h(t,"render"),N(e,"render",function(n,...a){if(l.value){const{children:r}=a[0]??{};if(Array.isArray(r))for(const s of r)!s||!s.type||s.type.displayName!="ImageAvatar"||b(s)}return n==null?void 0:n.apply(n,a)}),u())});function m(e){var n;if(!e.data||!e.data.user||!((n=e.data.user.connections)!=null&&n.length))return;const t=e.data.user.connections.find(a=>a.platform==="TWITCH");t&&(f[t.username]=e)}return R(f,()=>{u()},{debounce:350}),v(l,u),w.addEventListener("cosmetic_created",e=>{e.detail.kind==="AVATAR"&&m(e.detail)}),L(()=>{T(),O.cosmetics.where("kind").equals("AVATAR").each(e=>{m(e)})}),U(()=>{c.value&&(h(c.value,"render"),u()),i&&(window.clearTimeout(i),i=void 0)}),g(),(e,t)=>null}}),D=Object.freeze(Object.defineProperty({__proto__:null,config:H,default:P},Symbol.toStringTag,{value:"Module"}));export{D as _};