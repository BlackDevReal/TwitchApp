import{d as u}from"./seventv.preload-helper.3.0.15.1000.js";import{C as g}from"./seventv.ChatMessage.3.0.15.1000.js";const f={PLATFORM:[1,2,3],"7TV":[1,2,3,4],FFZ:[1,2,4],BTTV:[1,2,4],EMOJI:[]},c={};function h(e,t="7TV",r,s,n=1){if(n===1&&c[e.url])return c[e.url];const{preferredFormat:o}=u();let i=e.files;t==="7TV"&&(i=i.filter(l=>l.format===(r??o)));let a="";for(let l=0;l<i.length;l++){const p=i[l];let m=f[t][l];if(!m||s&&m>n&&m>s)break;m/=n,a&&(a+=", "),a+=`https:${e.url}/${p.name} ${m}x`}return n===1&&(c[e.url]=a),a}function F(e,t,r,s="7TV"){const{preferredFormat:n}=u();return(s=="7TV"?r.files.filter(o=>o.format===n):r.files).slice(0,f[s][f[s].length-1]).reduce((o,i,a)=>o+`https:${r.url}/${i.name} ${t*f[s][a]}w ${e*f[s][a]}h, `,"")}function G(e){var n;const{width:t,height:r}=((n=e.data)==null?void 0:n.host.files.at(-1))??{};if(!t||!r)return 1;const s=t/r;return s<=1?1:s<=1.5625?2:s<=2.125?3:4}function N(e,t){const r={id:e.id??"",name:e.token??"",flags:0,tags:[],state:[],lifecycle:3,listed:!0,owner:t?{id:t.id,username:t.displayName,display_name:t.displayName,avatar_url:t.profileImageURL}:null,host:{url:"//static-cdn.jtvnw.net/emoticons/v2/"+e.id+"/default/dark",files:[{name:"1.0",format:"PNG"},{name:"2.0",format:"PNG"},{name:"3.0",format:"PNG"},{name:"4.0",format:"PNG"}]}};return r.host.srcset=h(r.host,"PLATFORM"),r}function I(e){var t;return{id:e.emoteID??"",name:`${e.alt} ${e.cheerAmount}`,flags:0,tags:[],state:[],lifecycle:3,listed:!0,owner:null,host:{url:((t=e.images)==null?void 0:t.dark["1x"].split("/").slice(0,-1).join("/").replace("https:",""))??"",files:[{name:"1.gif",format:"GIF"},{name:"2.gif",format:"GIF"},{name:"3.gif",format:"GIF"},{name:"4.gif",format:"GIF"}]}}}function P(e){const t=e.image1x.slice(6).split("/"),r=t.slice(0,t.length-1).join("/");return{id:e.setID+":"+e.version,kind:"BADGE",provider:"PLATFORM",data:{name:e.title,host:{url:r,files:[{name:"1",format:"PNG"},{name:"2",format:"PNG"},{name:"3",format:"PNG"}]},tooltip:e.title}}}function w(e){var r;const t=new g(e.id);return t.body=((r=e.content)==null?void 0:r.text)??"",t.author=e.sender?d(e.sender):null,t.badges=e.sender&&Array.isArray(e.sender.displayBadges)?e.sender.displayBadges.reduce((s,n)=>(s[n.setID]=n.version,s),{}):{},t.timestamp=new Date(e.sentAt).getTime(),t}function d(e){return{id:e.id,username:e.login,displayName:e.displayName,color:e.chatColor}}function A(e){const t=e.split(".");let r=t.slice(0,3).map(n=>parseInt(n,10)).reduce((n,o,i)=>n+o*Math.pow(100,2-i),0).toString(10);return t.length>3&&(r+="."+parseInt(t[3])),parseFloat(r)}export{N as a,w as b,I as c,G as d,P as e,F as f,h as i,A as s};
