import{a as fe,u as Y,e as F}from"./seventv.index.3.0.15.10003.js";import{d as $,i as pe,a as H,w as P,l as f,s as S,q as ae,j as K,f as x,F as T,m as B,k as O,aI as he,av as ge,u as N,_ as V,a4 as U,Z as q,W as Q,n as G,G as ve,aj as oe,Q as _e,p as be,Y as Ee,ak as W,am as ye}from"./seventv.index.3.0.15.1000.js";import{d as Ce}from"./seventv.useModule.3.0.15.1000.js";import{u as xe,a as ke}from"./seventv.useRouter.3.0.15.1000.js";import{O as re}from"./seventv.ReactHooks.3.0.15.1000.js";import{a9 as we,r as L,b as D,t as J,u as w,M as Me,l as Le}from"./seventv.preload-helper.3.0.15.1000.js";import{u as X}from"./seventv.useChannelContext.3.0.15.1000.js";import{u as Te}from"./seventv.main.3.0.15.1000.js";import{u as le}from"./seventv.useChatEmotes.3.0.15.1000.js";import{u as Z}from"./seventv.useCosmetics.3.0.15.1000.js";import{E as ie}from"./seventv.Emote.3.0.15.1000.js";import{U as Ae}from"./seventv.UiFloating.3.0.15.1000.js";import{L as Se}from"./seventv.StoreSubscribeButton.3.0.15.1000.js";import{u as Oe,E as Ie}from"./seventv.EmoteMenu.3.0.15.1000.js";import{p as Be}from"./seventv.ChatMessage.3.0.15.1000.js";import{I as Ne,k as ce}from"./seventv.UserTag.3.0.15.1000.js";import{u as ue}from"./seventv.TextPaintDirective.3.0.15.1000.js";import{_ as $e}from"./seventv.ChatData.vue_vue_type_script_setup_true_lang.3.0.15.1000.js";const de=Symbol();function Re(y,a){return y.config.globalProperties.$pinia._s.get(a)}const De=["selected","onClick"],Pe={class:"seventv-autocomplete-item-name"},Ue={key:1,class:"seventv-autocomplete-item-name"},Ve=$({__name:"ChatAutocomplete",setup(y,{expose:a}){const n=pe(de);if(!n)throw new Error("Could not retrieve channel info");const{identity:c}=Te(),g=X(),l=le(g),d=Z((c==null?void 0:c.id)??""),m=we(n,"currentMessage"),r=L(null),b=L(null),i=L(null),e=D({active:!1,cursor:"",matches:[],select:0}),s=D({index:0,messages:[]});function C(){var t;if(!r.value||typeof r.value.textContent!="string")return;const o=r.value.textContent.lastIndexOf(":");if(o===-1||r.value.textContent.substring(o).indexOf(" ")!==-1?e.active=!1:e.active=!0,e.active){const h=((t=r.value.textContent)==null?void 0:t.substring(r.value.textContent.lastIndexOf(":")+1))??"";e.cursor=h,e.matches=[...Object.values(l.active),...Object.values(d.emotes)].filter(v=>v.name.toLowerCase().includes(h.toLowerCase())).sort((v,k)=>v.name.length-k.name.length).slice(0,25).map(v=>({token:v.unicode||v.name,priority:v.name.length,item:v})),e.select>e.matches.length-1&&(e.select=e.matches.length-1)}}function E(o){if(!r.value||typeof r.value.textContent!="string")return;const t=r.value.textContent.lastIndexOf(":");t!==-1&&(r.value.textContent=r.value.textContent.substring(0,t-1)),r.value.textContent+=r.value.textContent.charAt(o.length-1)===" "?o+" ":` ${o} `,n&&(n.currentMessage=r.value.textContent);const h=document.createRange(),v=window.getSelection();v&&(h.selectNodeContents(r.value),h.collapse(!1),v.removeAllRanges(),v.addRange(h),e.active=!1)}const u=D({matches:[],index:-1,cursorLocation:-1,previousText:""});function _(o,t,h=!1){const{anchorOffset:v,focusOffset:k}=t,A=Math.min(v,k),I=Math.max(v,k),R=o.textContent??"",me=R.substring(0,k).lastIndexOf(" ",k);(t.anchorOffset!=u.cursorLocation||R!==u.previousText)&&(u.matches=[],u.index=-1,u.cursorLocation=t.anchorOffset);const ee=R.substring(me+1,A);if(u.matches.length===0&&(u.matches=[...Object.values(l.active),...Object.values(d.emotes)].filter(se=>se.name.toLowerCase().startsWith(ee.toLowerCase())&&se.provider!=="EMOJI"),u.matches.length===0||u.matches[0].provider==="EMOJI"))return;u.index=(h?u.index-1:u.index+1)%u.matches.length,u.index<0&&(u.index=u.matches.length-1);const te=u.matches[u.index],ne=I===o.length,z=document.createTextNode(`${te.name}${ne?"":" "}`);u.previousText=z.textContent??"";const j=document.createRange();j.setStart(o,A-ee.length),j.setEnd(o,I),j.deleteContents(),j.insertNode(z),t.collapse(z,te.name.length+(ne?0:1)),u.cursorLocation=t.focusOffset}function M(o){o&&(s.messages[0]!==o&&s.messages.unshift(o),s.index=0)}H(m,C);const{shift:p}=fe();return Y(r,"keydown",o=>{var v,k;const t=document.getSelection();if(!t)return;const h=t.focusNode;switch(o.key){case"Tab":case"Enter":if(o.key==="Tab"&&h&&h.nodeName==="#text"&&(o.preventDefault(),_(h,t,p.value)),!e.active)break;o.stopPropagation(),E(e.matches[e.select].token),e.active=!1;break;case"ArrowUp":case"ArrowDown":{const A=o.key==="ArrowUp"?"up":"down";if(e.active){o.preventDefault(),A==="up"?e.select=Math.max(0,e.select-1):e.select=Math.min(e.matches.length-1,e.select+1);const I=(v=i.value)==null?void 0:v.children.item(e.select);I&&I.scrollIntoView({block:"nearest",inline:"nearest"})}else r.value&&(o.preventDefault(),A==="up"?s.index=(k=r.value.textContent)!=null&&k.length?Math.min(s.messages.length-1,s.index+1):0:s.index=Math.max(0,s.index-1),r.value.textContent=s.messages[s.index]);break}default:s.index=0;break}},{capture:!0}),P(()=>{r.value=document.getElementById("message-input")??null,b.value=document.getElementById("chatroom-footer")??null}),F(r.value,o=>{for(const t of o){if(!(t.target instanceof HTMLElement)||t.type!=="attributes"||t.attributeName!=="contenteditable")continue;t.target.getAttribute("contenteditable")==="true"||(t.target.setAttribute("contenteditable","true"),t.target.focus())}},{attributeFilter:["contenteditable"],attributes:!0}),a({insertAtEnd:E,handleMessageSend:M}),(o,t)=>e.active&&b.value?(f(),S(Ae,{key:0,anchor:b.value,middleware:[w(he)({crossAxis:!0,mainAxis:!0}),w(ge)({crossAxis:16})],placement:"top-start"},{default:ae(()=>[K("div",{ref_key:"colonList",ref:i,class:"seventv-autocomplete-list"},[(f(!0),x(T,null,B(e.matches,(h,v)=>(f(),x("div",{key:v,class:"seventv-autocomplete-item",selected:v===e.select,onClick:k=>E(h.token)},[h.item?(f(),x(T,{key:0},[O(ie,{emote:h.item,size:24},null,8,["emote"]),K("span",Pe,J(h.item.name),1)],64)):(f(),x("span",Ue,J(h.token),1))],8,De))),128))],512)]),_:1},8,["anchor","middleware"])):N("",!0)}});const je=V(Ve,[["__scopeId","data-v-2136510f"]]),He=$({__name:"ChatEmoteMenu",emits:["pick-emote"],setup(y,{emit:a}){const n=Oe(),c=document.getElementById("chatroom-footer"),g=document.createElement("seventv-container");function l(d){d.target instanceof HTMLElement&&(c!=null&&c.contains(d.target)||g.contains(d.target)||(n.open=!1))}return P(()=>{var r;const d=document.getElementById("chatroom");if(!d)return;const m=d.querySelector(".chat-message-row");m&&((r=m.lastElementChild)==null||r.insertAdjacentElement("beforebegin",g))}),U(()=>{g.remove()}),(d,m)=>(f(),x(T,null,[(f(),S(q,{to:w(g)},[K("button",{ref:"emoteMenuButton",class:"seventv-emote-menu-button",onClick:m[0]||(m[0]=r=>w(n).open=!w(n).open)},[O(Se,{provider:"7TV",class:"icon"})],512)],8,["to"])),w(n).open&&w(c)?(f(),S(Ie,{key:0,"anchor-el":w(c),width:"20.5rem",scale:"0.62rem",onEmoteClick:m[1]||(m[1]=r=>a("pick-emote",r)),onClose:l},null,8,["anchor-el"])):N("",!0)],64))}});const qe=V(He,[["__scopeId","data-v-21b9153f"]]),ze=/^https?:\/\//i,We=new Set(["w!","h!","v!","z!"]);function Fe(y){var b;const a=[],n=y.body.split(" "),c=i=>{var e;return((e=y.localEmoteMap)==null?void 0:e[i])??y.emoteMap[i]},g=y.showModifiers;let l=-1,d,m=null;const r=(i,e)=>({kind:"VOID",range:[i,e],content:void 0});for(const i of n){const e=l+(i.length+1),s=c(i),C=c(n[n.indexOf(i)+1]),E=c(n[n.indexOf(i)-1]);s?(((b=s.data)==null?void 0:b.flags)??0)&256&&d?(d.content.overlaid[s.name]=s,a.push(r(l+1,e-1))):a.push(d={kind:"EMOTE",range:[l+1,e-1],content:{emote:s,overlaid:{},...s.isTwitchCheer?{cheerAmount:s.isTwitchCheer.amount,cheerColor:s.isTwitchCheer.color}:{}}}):!g&&C&&We.has(i)||!g&&E&&i.startsWith("ffz")&&i.length>3?a.push(r(l,e-1)):(m=Ke(i))&&a.push({kind:"LINK",range:[l+1,e-1],content:{displayText:i,url:m.toString()}}),l=e,!s&&i&&(d=void 0)}return a.sort((i,e)=>i.range[0]-e.range[0]),a}function Ke(y){try{const a=new URL(`https://${y.replace(ze,"")}`),{isIcann:n,domain:c}=Be(a.hostname);if(c&&n)return a}catch{}return null}const Ge={key:0,class:"seventv-text-token"},Je={key:1},Ye={key:0,class:"seventv-badge-list"},Qe=$({__name:"ChatMessage",props:{bind:{},parity:{}},emits:["open-card","render"],setup(y,{emit:a}){const n=y,c=X(),g=le(c),l=Z(n.bind.authorID),d=document.createElement("seventv-container"),m=L([]),r=D(new WeakMap);Y(n.bind.usernameEl.parentElement,"click",()=>{a("open-card",n.bind)});function b(){n.parity&&n.bind.el.setAttribute("parity",n.parity),n.bind.usernameEl.insertAdjacentElement("beforebegin",d),l.paints.size&&ue(n.bind.usernameEl,Array.from(l.paints.values())[0].id),m.value.length=0;for(const i of n.bind.texts){const e=i.textContent??"",s=Fe({body:e,chatterMap:{},emoteMap:g.active,localEmoteMap:{...l.emotes}}),C=[];let E=0;for(const M of s){const p=M.range[0],o=M.range[1],t=e.substring(E,p);t&&C.push(t),C.push(M),E=o+1}const u=e.substring(E);u&&C.push(u);const _=document.createElement("seventv-container");_.classList.add("seventv-text-token"),i.after(_),i.style.display="none",m.value.push(_),r.set(_,C)}G(()=>a("render"))}return H(l,b),P(b),Q(b),U(()=>{for(const i of m.value)i.remove();for(const i of n.bind.texts)i.style.display="initial";d.remove()}),(i,e)=>(f(),x(T,null,[(f(!0),x(T,null,B(m.value,(s,C)=>(f(),S(q,{key:C,to:s},[(f(!0),x(T,null,B(r.get(s),(E,u)=>(f(),x(T,{key:u},[typeof E=="string"?(f(),x("span",Ge,J(E),1)):w(Ne)(E)?(f(),x("span",Je,[O(ie,{class:"seventv-emote-token",emote:E.content.emote,overlaid:E.content.overlaid,format:"WEBP"},null,8,["emote","overlaid"])])):N("",!0)],64))),128))],8,["to"]))),128)),(f(),S(q,{to:w(d)},[w(l).badges.size?(f(),x("span",Ye,[(f(!0),x(T,null,B(w(l).badges,([s,C])=>(f(),S(ce,{key:s,badge:C,type:"app",alt:C.data.tooltip},null,8,["badge","alt"]))),128))])):N("",!0)],8,["to"]))],64))}});const Xe=V(Qe,[["__scopeId","data-v-690e7fec"]]),Ze={key:0,class:"seventv-badge-list"},et=$({__name:"ChatUserCard",props:{el:{},bind:{}},setup(y){const a=y,n=Z(a.bind.authorID),c=document.createElement("seventv-container");return c.id="seventv-badge-container",c.style.width="100%",P(()=>{const g=a.el.querySelector(".information"),l=a.el.querySelector(".badges-container"),d=a.el.querySelector("a.username");l?l.appendChild(c):g&&g.insertAdjacentElement("afterend",c),d&&n.paints.size&&(d.style.width="fit-content",ue(d,Array.from(n.paints.values())[0].id))}),U(()=>{c.remove()}),(g,l)=>(f(),S(q,{to:w(c)},[w(n).badges.size?(f(),x("span",Ze,[(f(!0),x(T,null,B(w(n).badges,([d,m])=>(f(),S(ce,{key:d,badge:m,type:"app",alt:m.data.tooltip},null,8,["badge","alt"]))),128))])):N("",!0)],8,["to"]))}});const tt=V(et,[["__scopeId","data-v-3c97e7fe"]]),nt=$({__name:"ChatObserver",props:{listElement:{}},setup(y){const a=y,n=L([]),c=L([]),g=L([]),l=D(new WeakMap),d=L([]),m=ve("chat.message_batch_duration",100);function r(p,o){if(!p.hasAttribute("data-chat-entry"))return;const t=p.getAttribute("data-chat-entry"),h=p.querySelector(".chat-message-identity");if(!h)return;const v=h.querySelector(".chat-entry-username");if(!v)return;const k=v.getAttribute("data-chat-entry-user-id"),A=v.getAttribute("data-chat-entry-user");if(!k||!A)return;const I=p.querySelectorAll(".chat-entry-content"),R={id:t,authorID:k,authorName:A,texts:Array.from(I),usernameEl:v,el:p};o||p.classList.add("seventv-chat-message-buffered"),c.value.push(R),l.set(p,R)}async function b(p){const o=document.getElementById("chatroom");if(!o)return;let t=o.querySelector(".user-profile");t||(t=await new re((h,v)=>{for(const k of h)k.addedNodes.forEach(A=>{A instanceof HTMLDivElement&&A.classList.contains("user-profile")&&v(A)})},o,{childList:!0})),d.value.length=0,G(()=>{t&&d.value.push({el:t,bind:p})})}function i(){const p=a.listElement.querySelectorAll("[data-chat-entry]");for(const o of Array.from(p))r(o,!0)}const e=L(!1),s=L(a.listElement.getBoundingClientRect());let C=!1;function E(){a.listElement.nextElementSibling&&!C&&(C=!0,a.listElement.addEventListener("click",u)),!e.value&&G(()=>{a.listElement.scrollTo({top:a.listElement.scrollHeight})})}function u(){a.listElement.removeEventListener("click",u),e.value=!1,C=!1}Q(()=>{const p=a.listElement;p&&p.addEventListener("wheel",()=>{const o=Math.floor(p.scrollTop),t=Math.floor(p.scrollHeight-s.value.height);if(o>=t-1){e.value=!1;return}e.value=!0})}),U(()=>{a.listElement.removeEventListener("click",u)}),P(()=>{i(),s.value=a.listElement.getBoundingClientRect(),a.listElement.classList.toggle("seventv-chat-observer",!0)}),F(a.listElement,p=>{for(const o of p)o.addedNodes.forEach(t=>{t instanceof HTMLDivElement&&r(t)}),o.removedNodes.forEach(t=>{if(!(t instanceof HTMLDivElement))return;const h=l.get(t);h&&(g.value.push(h),l.delete(t))}),M()},{childList:!0});let _=null;function M(){_||(_=window.setTimeout(()=>{if(c.value.length){const p=c.value.splice(0,c.value.length);for(const o of p)o.el.classList.remove("seventv-chat-message-buffered");n.value.push(...p)}g.value.length>=25?_=window.setTimeout(()=>{for(const p of g.value)n.value.splice(n.value.indexOf(p),1);g.value.length=0,_=null},m.value/1.5):_=null,E()},m.value))}return F(a.listElement.parentElement,()=>{a.listElement.nextElementSibling||(e.value=!1)},{childList:!0}),U(()=>{a.listElement.classList.toggle("seventv-chat-observer",!1)}),(p,o)=>(f(),x(T,null,[(f(!0),x(T,null,B(n.value,(t,h)=>(f(),S(Xe,{key:t.id,parity:h%2===0?"even":"odd",bind:t,onOpenCard:b},null,8,["parity","bind"]))),128)),(f(!0),x(T,null,B(d.value,t=>(f(),S(tt,{key:t.el,el:t.el,bind:t.bind},null,8,["el","bind"]))),128))],64))}});const st=V(nt,[["__scopeId","data-v-80586f43"]]),ot=$({__name:"ChatController",props:{slug:{}},async setup(y,{expose:a}){let n,c;const g=y;a({onMessageSend:l});function l(u){var _;b("CHANNEL_ACTIVE_CHATTER",{channel:Me(r)}),(_=s.value)==null||_.handleMessageSend(u)}const d=([n,c]=oe(()=>fetch(`https://kick.com/api/v2/channels/${g.slug}`).catch(u=>{Le.error("failed to fetch channel data",u)})),n=await n,c(),n);if(!d)throw new Error("failed to fetch channel data");const{user_id:m}=([n,c]=oe(()=>d.json()),n=await n,c(),n);if(!m)throw new Error("failed to get channel ID");const r=X(m.toString(),!0),{sendMessage:b}=_e(),i=L(null),e=L(null),s=L(null);function C(u){s.value&&s.value.insertAtEnd(u)}let E=null;return P(async()=>{r.setCurrentChannel({id:m.toString(),username:g.slug,displayName:g.slug,active:!0})&&(i.value=null,e.value=null);const _=document.getElementById("chatroom-top");if(!(!_||!_.nextElementSibling))if(i.value=_.nextElementSibling,E&&E.disconnect(),_.nextElementSibling.firstElementChild)e.value=_.nextElementSibling.firstElementChild;else{E=new re((p,o)=>{for(const t of p)!t.target||!(t.target instanceof HTMLDivElement)||t.target.firstElementChild&&o(t.target.firstElementChild)},_.nextElementSibling,{childList:!0,subtree:!0});const M=await E;e.value=M}}),(u,_)=>(f(),x(T,null,[e.value?(f(),x(T,{key:0},[O(st,{"list-element":e.value},null,8,["list-element"]),O(je,{ref_key:"autocomplete",ref:s},null,512)],64)):N("",!0),O($e),O(qe,{onPickEmote:_[0]||(_[0]=M=>C(M.provider==="EMOJI"?M.unicode??M.name:M.name))})],64))}}),at=[W("chat.alternating_background","TOGGLE",{label:"settings.chat_alternating_background.label",hint:"settings.chat_alternating_background.hint",path:["Chat",""],defaultValue:!1,effect(y){document.documentElement.classList.toggle("seventv-alternating-chat-lines",y)}}),W("chat.message_batch_duration","SLIDER",{path:["Chat","Performance"],label:"Message Batching",hint:"The time to wait between rendering new messages",options:{min:25,max:1e3,step:25,unit:"ms",named_thresolds:[[0,50,"Instant"],[50,250,"Fast"],[250,500,"Balanced"],[500,999,"Slow"],[1e3,1e3,"PowerPoint Presentation"]]},defaultValue:100}),W("ui.emote_menu.collapsed_sets","NONE",{path:["",""],label:"",defaultValue:new Set})],rt=$({__name:"ChatModule",setup(y){const{markAsReady:a}=Ce("chat",{name:"Chat",depends_on:[]}),n=xe(),c=ke(n),g=L(null),l=D({active:!1,slug:"",currentMessage:""});be(de,l);let d=!1;const m=[];function r(){var i;if(d)return;const b=Re(n,"chatroomv2");if(b){for(d=!0;m.length;)(i=m.pop())==null||i();m.push(b.$subscribe(async(e,s)=>{!s.chatroom||typeof s.chatroom.id!="number"||(l.slug!==s.currentChannelSlug&&(l.active=!1,await new Promise(C=>setTimeout(C,250)),l.active=!0,d=!1),l.slug=s.currentChannelSlug,l.currentMessage=s.currentMessage)})),m.push(H(()=>l.currentMessage,e=>{b==null||b.$patch({currentMessage:e})})),ye(b,"sendCurrentMessage",function(...e){const s=e[0];return g.value&&g.value.onMessageSend(this.$state.currentMessage),s==null?void 0:s.apply(this,[])})}}return Q(()=>{r()}),H(()=>c.currentRoute,r,{immediate:!0}),Y(document,"click",()=>setTimeout(r,250)),a(),(b,i)=>l.active?(f(),S(Ee,{key:0},{default:ae(()=>[O(ot,{ref_key:"controller",ref:g,slug:l.slug},null,8,["slug"])]),_:1})):N("",!0)}}),wt=Object.freeze(Object.defineProperty({__proto__:null,config:at,default:rt},Symbol.toStringTag,{value:"Module"}));export{wt as _,Re as u};