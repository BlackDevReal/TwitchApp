import{d as M,o as Q}from"./seventv.index.3.0.15.10003.js";import{u as z}from"./seventv.main.3.0.15.1000.js";import{d as H,C as ee,aB as te,w as ne,a4 as oe,A as j,l as n,f as i,s as E,B as P,k as S,j as w,Z as F,u as T,q as A,F as R,x as B,aI as se,L as ae,aD as ce,y as re,z as ie,aL as W,_ as ue,ay as le,a as q}from"./seventv.index.3.0.15.1000.js";import{d as pe}from"./seventv.useModule.3.0.15.1000.js";import{u as de,a as ke}from"./seventv.useRouter.3.0.15.1000.js";import{r as I,u as e,t as b,d as me}from"./seventv.preload-helper.3.0.15.1000.js";import{L as D,U as O}from"./seventv.StoreSubscribeButton.3.0.15.1000.js";import{U as fe}from"./seventv.UiFloating.3.0.15.1000.js";class ve extends Map{refresh(){super.clear();const l=document.cookie.split(";").map(c=>c.trim());for(const c of l){const[r,u]=c.split("=");super.set(r,decodeURIComponent(u))}}get(l){return this.refresh(),super.get(l)}}const $=new ve;function G(){return $.refresh(),$}const _e=/\[7TV:[0-9a-fA-F]+\]/g;async function J(t,l,c){var v;if(!t)return;const r=`[7TV:${l}]`,u=c.get("XSRF-TOKEN");if(!u)return;const _=new Headers;_.set("x-xsrf-token",u??""),_.set("Content-Type","application/json");const o=((v=t.bio)==null?void 0:v.replace(_e,"").trim())??"",h=l?t.bio?`${o} ${r}`:r:o;return fetch("https://kick.com/update_profile",{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US","content-type":"application/json","x-xsrf-token":u},referrer:"https://kick.com/dashboard/settings/profile",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({id:t.numID,email:t.email,bio:h,discord:t.discord,facebook:t.facebook,twitter:t.twitter,youtube:t.youtube,tiktok:t.tiktok,instagram:t.instagram}),method:"POST",mode:"cors"}).then(s=>{s.ok&&(t.bio=h)})}const X=t=>(re("data-v-00bdb466"),t=t(),ie(),t),he=X(()=>w("h3",null,"Oops...",-1)),ge={key:0},be={key:1},we={key:2,class:"seventv-connect-popup-buttons"},ye=X(()=>w("h3",null,"7TV - Sign In",-1)),Ce={key:0},Se={key:1},Te={key:2,class:"seventv-connect-popup-buttons"},Ae=H({__name:"AuthButton",props:{slug:{}},emits:["connect"],setup(t){const l=t,{t:c}=ee(),r=z(),{appUser:u,identityFetched:_,identity:o}=te(r),h=G(),{browser:v}=me(),s=document.createElement("seventv-container");s.id="seventv-kick-connect";const g=document.createElement("seventv-container");g.id="seventv-kick-connect-nav";const y=I(null),U=I(null),p=I("idle"),C=I(null),K=M(W.APP_TOKEN,"");async function L(){if(!o.value)return;C.value=null,p.value="connecting";const a=window.open("about:blank","_blank","width=500,height=400");if(!a)throw new Error("Failed to open window");a.blur(),a.document.body.innerText="Please wait...";const d=o.value;let k=new URLSearchParams({platform:"KICK",id:d.username});const x=m=>{C.value=m,a.close()};await(async()=>{const m=await fetch(`https://7tv.io/v3/auth/manual?${k.toString()}`).catch(Z=>{C.value=Z});if(!m||!m.ok)return x(Error("failed to get verification code"));const f=await m.text();if(!await J(d,f,h).catch(x).then(()=>!0))return;await ae(ce(1e3+500)).toBeTruthy(),k=new URLSearchParams({platform:"KICK",user_id:o.value.username,manual:"1",callback:encodeURIComponent(window.location.origin+window.location.pathname)}),a&&(a.location.href="https://7tv.app/auth/callback?"+k.toString()),K.value="";const V=setInterval(()=>{if(!a)return clearInterval(V);a.closed&&(K.value?p.value="done":p.value="idle",clearInterval(V))},100)})()}function Y(){window.open("https://7tv.app/emotes","_blank")}function N(){y.value=null}return ne(()=>{var d;const a=document.querySelector(".main-navbar");if(a&&((d=a.lastElementChild)==null||d.insertAdjacentElement("beforebegin",g)),l.slug){const k=document.querySelector(".channel-info, .stream-info");k&&k.insertAdjacentElement("afterend",s)}}),Q(U,N),oe(()=>{s.remove(),g.remove()}),(a,d)=>{var m;const k=j("tooltip"),x=j("t");return n(),i(R,null,[p.value!=="done"&&e(o)&&a.slug===e(o).username&&e(_)&&(!e(u)||!((m=e(u).connections)!=null&&m.some(f=>f.platform==="KICK")))?(n(),E(F,{key:0,to:e(s)},[P((n(),i("div",{class:"seventv-kick-connect",onClick:d[0]||(d[0]=f=>y.value=e(s))},[S(D,{class:"seventv-kick-connect-bouncy"}),w("p",null,b(e(c)("site.kick.connect_button_channel",{CHANNEL:"kick.com/"+a.slug})),1)])),[[k,"Connect "+a.slug+" on kick with 7TV!"]])],8,["to"])):T("",!0),e(o)&&p.value!=="done"?(n(),E(F,{key:1,to:e(g)},[P((n(),i("div",{class:"seventv-kick-connect-nav",onClick:d[1]||(d[1]=f=>y.value=e(g))},[S(D)])),[[k,e(c)("site.kick.connect_button_site")],[k,"bottom","position"]])],8,["to"])):T("",!0),y.value&&e(o)?(n(),E(fe,{key:2,anchor:y.value,middleware:[e(se)({padding:8})]},{default:A(()=>{var f;return[w("div",{ref_key:"popupRef",ref:U,class:"seventv-connect-popup"},[e(v).name==="Firefox"?(n(),i(R,{key:0},[he,w("p",null," Sorry, "+b(e(v).name)+" is not supported for sign-in currently. Please try a different browser. ",1)],64)):e(u)?(n(),i(R,{key:2},[ye,p.value==="connecting"?(n(),i("p",Ce,b(e(c)("site.kick.connect_popup_connecting")),1)):(n(),i("p",Se,b(e(c)("site.kick.connect_button_site_tooltip",{ACTOR:(f=e(o))==null?void 0:f.username})),1)),p.value!=="connecting"?(n(),i("div",Te,[S(O,{onClick:L},{default:A(()=>[B("Sign In")]),_:1})])):T("",!0)],64)):(n(),i(R,{key:1},[P(w("h3",null,null,512),[[x,"site.kick.connect_button_site"]]),e(o)&&!C.value?(n(),i("p",ge,b(e(c)("site.kick.connect_popup_"+p.value,{ACTOR:e(o).username})),1)):(n(),i("p",be,b(C.value),1)),p.value!=="connecting"?(n(),i("div",we,[p.value!=="done"?(n(),i(R,{key:0},[S(O,{onClick:L},{default:A(()=>[B("Continue")]),_:1}),S(O,{onClick:N},{default:A(()=>[B("Cancel")]),_:1})],64)):(n(),E(O,{key:1,onClick:Y},{default:A(()=>[B("Explore")]),_:1}))])):T("",!0)],64))],512)]}),_:1},8,["anchor","middleware"])):T("",!0)],64)}}});const Re=ue(Ae,[["__scopeId","data-v-00bdb466"]]),Ee=H({__name:"AuthModule",setup(t){const{markAsReady:l}=pe("auth",{name:"Auth",depends_on:[]}),c=de(),r=ke(c),u=G(),_=z(),o=I(""),h=le(o,1e3);q(()=>r.currentRoute,s=>{!s||s.name!=="channel"||(o.value=typeof s.params.channel=="string"?s.params.channel??"":"")},{immediate:!0});const v=M(W.APP_TOKEN,"");return r.currentRoute&&r.currentRoute.query.seventv_token&&q(()=>_.identity,s=>{!r.currentRoute||!r.currentRoute.query.seventv_token||(v.value=r.currentRoute.query.seventv_token.toString(),J(s,"",u).then(()=>{setTimeout(()=>{window.close()},250)}))},{immediate:!0}),l(),(s,g)=>(n(),E(Re,{slug:e(h)},null,8,["slug"]))}}),Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Ve as _};
