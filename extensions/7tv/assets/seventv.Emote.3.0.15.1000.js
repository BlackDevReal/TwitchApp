import{a as Q,f as q,i as H}from"./seventv.Transform.3.0.15.1000.js";import{d as N,w as Z,a as O,l as s,f as i,j as a,k as M,u as r,y as J,z as X,_ as B,G as V,H as Y,s as A,x as P,F,m as G,aJ as K,q as ee,aI as te,aP as oe,Z as se}from"./seventv.index.3.0.15.1000.js";import{r as m,b as R,l as ae,t as h,u as E,c as D,n as j}from"./seventv.preload-helper.3.0.15.1000.js";import{g as S,a as ie,u as ne}from"./seventv.seventv.user.gql.3.0.15.1000.js";import{O as re}from"./seventv.OpenLinkIcon.3.0.15.1000.js";import{u as le}from"./seventv.index.3.0.15.10002.js";import{D as me}from"./seventv.useCosmetics.3.0.15.1000.js";import{a as de}from"./seventv.useChatEmotes.3.0.15.1000.js";import{_ as ce}from"./seventv.StoreSubscribeButton.3.0.15.1000.js";import{U as ue}from"./seventv.UiFloating.3.0.15.1000.js";function pe(){return"__APOLLO_CLIENT__"in window?__APOLLO_CLIENT__??null:null}const W=S`
	fragment badge on Badge {
		id
		setID
		version
		title
		image1x: imageURL(size: NORMAL)
		image2x: imageURL(size: DOUBLE)
		image4x: imageURL(size: QUADRUPLE)
		clickAction
		clickURL
	}
`,_e=S`
	fragment messageSender on User {
		id
		login
		chatColor
		displayName
		displayBadges(channelID: $channelID) {
			...badge
		}
		__typename
	}

	${W}
`,kt=S`
	fragment messageFields on Message {
		id
		deletedAt
		sentAt
		content {
			...messageContent
		}
		sender {
			...messageSender
		}
		__typename
	}

	fragment messageContent on MessageContent {
		text
		fragments {
			...messageParticle
		}
		__typename
	}
	fragment messageParticle on MessageFragment {
		text
		content {
			... on CheermoteToken {
				...cheermoteFragment
			}
			... on Emote {
				...emoteFragment
			}
			... on User {
				...mentionFragment
			}
			... on AutoMod {
				...automodFragment
			}
			__typename
		}
		__typename
	}
	fragment cheermoteFragment on CheermoteToken {
		bitsAmount
		prefix
		tier
		__typename
	}
	fragment emoteFragment on Emote {
		emoteID: id
		setID
		token
		__typename
	}
	fragment mentionFragment on User {
		id
		login
		displayName
		__typename
	}
	fragment automodFragment on AutoMod {
		topics {
			type
			weight
			__typename
		}
		__typename
	}

	${_e}
	${W}
`,he=S`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;S`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;const ve=S`
	fragment subProduct on SubscriptionProduct {
		id
		url
		price
		name
		tier
		interval {
			unit
		}
		state
		emotes {
			id
			setID
			token
		}
		offers {
			id
			tplr
			platform
			eligibility {
				benefitsStartAt
				isEligible
			}
			giftType
			listing {
				chargeModel {
					internal {
						previewPrice {
							id
							currency
							exponent
							price
							total
							discount {
								price
								total
							}
						}
						plan {
							interval {
								duration
								unit
							}
						}
					}
				}
			}
			promotion {
				id
				name
				promoDisplay {
					discountPercent
					discountType
				}
				priority
			}
			quantity {
				min
				max
			}
		}
		emoteModifiers {
			...subscriptionProductEmoteModifier
		}
		self {
			cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
				months
			}
			benefit {
				id
				tier
			}
		}
		owner {
			id
			displayName
			login
			subscriptionProducts {
				id
				tier
				url
				price
				emotes {
					id
					token
				}
				emoteModifiers {
					...subscriptionProductEmoteModifier
				}
			}
			stream {
				id
				type
			}
		}
	}

	fragment subscriptionProductEmoteModifier on EmoteModifier {
		code
		name
	}
`,wt=S`
	fragment modComment on ModLogsComment {
		id
		timestamp
		text
		author {
			...modCommentUser
		}
		channel {
			...modCommentUser
		}
		target {
			...modCommentUser
		}
	}

	fragment modCommentUser on User {
		id
		login
		displayName
		chatColor
	}
`,fe=ie`
	query EmoteCard($emoteID: ID!, $octaneEnabled: Boolean!, $artistEnabled: Boolean!) {
		emote(id: $emoteID) {
			id
			type
			subscriptionTier @include(if: $octaneEnabled)
			token
			setID
			artist @include(if: $artistEnabled) {
				id
				login
				displayName
				profileImageURL(width: 70)
			}
			owner {
				id
				login
				displayName
				profileImageURL(width: 70)
				channel {
					id
					localEmoteSets {
						id
						emotes {
							id
							token
						}
					}
				}
				stream {
					id
					type
				}
				self {
					follower {
						followedAt
					}
					subscriptionBenefit {
						id
						tier
					}
				}
				subscriptionProducts {
					id
					displayName
					tier
					name
					url
					emotes {
						id
						token
					}
					priceInfo {
						id
						currency
						price
					}
				}
			}
			subscriptionProduct @skip(if: $octaneEnabled) {
				...subProduct
			}
			subscriptionSummaries @include(if: $octaneEnabled) {
				...subSummary
			}
			bitsBadgeTierSummary {
				threshold
				self {
					isUnlocked
					numberOfBitsUntilUnlock
				}
			}
			type
		}
	}

	${ve}
	${he}
`,z=f=>(J("data-v-17e20377"),f=f(),X(),f),ge={class:"seventv-emote-card-container"},ye={class:"seventv-emote-card"},be={class:"seventv-emote-card-image"},ke=["srcset"],we={class:"seventv-emote-card-display"},$e={class:"seventv-emote-card-title"},Ee={key:0,class:"seventv-emote-card-title-link"},Se=["href"],Le={class:"seventv-emote-card-subtitle"},Te=["href"],Ce=["src"],Ue={key:1,class:"seventv-emote-card-data seventv-emote-card-artist"},Ie=z(()=>a("p",null,"Made by",-1)),Me=["href"],Ne=["src"],Pe={key:2,class:"seventv-emote-card-data seventv-emote-card-actor"},Re=z(()=>a("p",null,"Added by",-1)),Ae={class:"seventv-emote-card-user"},Fe=["src"],De={key:3,class:"seventv-emote-card-data"},Be=z(()=>a("p",null,"Added on",-1)),ze=N({__name:"EmoteCard",props:{emote:{},size:{}},setup(f){var T;const t=f,p=m(((T=t.emote.data)==null?void 0:T.host)??null),k=m(""),l=R(g()),c=R(g()),u=R(g()),L=m(""),w=m(""),v=m(null);function g(){return{id:"",username:"",displayName:"",avatarURL:"",url:""}}return Z(async()=>{var _,y,$;if(t.emote.provider==="PLATFORM"){const b=pe();if(!b)return;const n=await b.query({query:fe,variables:{emoteID:t.emote.id,artistEnabled:!0,octaneEnabled:!0}}).catch(U=>ae.error("failed to fetch emote card",U));if(!n)return;const{emote:e}=n.data;if(!e)return;const o=Q(e);p.value=o.host,e.owner&&(l.id=e.owner.id,l.username=e.owner.login,l.displayName=e.owner.displayName,l.avatarURL=e.owner.profileImageURL,l.url=`https://twitch.tv/${(_=e.owner)==null?void 0:_.login}`),e.artist&&(u.id=e.artist.id,u.username=e.artist.login,u.displayName=e.artist.displayName,u.avatarURL=e.artist.profileImageURL,u.url=`https://twitch.tv/${(y=e.artist)==null?void 0:y.login}`),L.value=(($=e.subscriptionTier)==null?void 0:$.split("_").join(" "))??e.type}else if(t.emote.provider==="7TV"){const{result:b}=le(ne,{id:t.emote.actor_id??""},()=>({enabled:!!t.emote.actor_id}));O(b,n=>{n!=null&&n.user&&(c.id=n==null?void 0:n.user.id,c.username=n==null?void 0:n.user.username,c.displayName=n==null?void 0:n.user.display_name,c.avatarURL=n==null?void 0:n.user.avatar_url)},{immediate:!0}),w.value=new Date(t.emote.timestamp??0).toLocaleDateString(),v.value=`//7tv.app/emotes/${t.emote.id}`}else t.emote.provider==="BTTV"?v.value=`//betterttv.com/emotes/${t.emote.id}`:t.emote.provider==="FFZ"&&(v.value=`//frankerfacez.com/emoticon/${t.emote.id}`)}),O(p,_=>{!_||!_.files.length||(k.value=q(t.size[0],t.size[1],_,t.emote.provider))},{immediate:!0}),(_,y)=>(s(),i("main",ge,[a("div",ye,[a("div",be,[a("img",{srcset:k.value,style:{}},null,8,ke)]),a("div",we,[a("div",null,[a("h3",$e,[a("span",null,h(_.emote.name),1),v.value?(s(),i("span",Ee,[a("a",{href:v.value,target:"_blank"},[M(re)],8,Se)])):r("",!0)]),a("p",Le,h(L.value),1),l.id?(s(),i("a",{key:0,class:"seventv-emote-card-user",href:l.url,target:"_blank"},[a("img",{src:l.avatarURL},null,8,Ce),a("span",null,h(l.displayName),1)],8,Te)):r("",!0),u.id?(s(),i("div",Ue,[Ie,u.id?(s(),i("a",{key:0,class:"seventv-emote-card-user",href:u.url,target:"_blank"},[a("img",{src:u.avatarURL},null,8,Ne),a("span",null,h(u.displayName),1)],8,Me)):r("",!0)])):r("",!0),c.id?(s(),i("div",Pe,[Re,a("p",Ae,[a("img",{src:c.avatarURL},null,8,Fe),a("span",null,h(c.displayName),1)])])):r("",!0),w.value?(s(),i("div",De,[Be,a("span",null,h(w.value),1)])):r("",!0)])])])]))}});const Oe=B(ze,[["__scopeId","data-v-17e20377"]]),je={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},qe=["xlink:href"],x=N({__name:"SingleEmoji",props:{id:{}},setup(f){return(t,p)=>(s(),i("svg",je,[a("use",{"xlink:href":"#"+t.id},null,8,qe)]))}}),He={key:0,ref:"tooltip",class:"seventv-tooltip-compact","tooltip-type":"emote"},Ve={key:1,ref:"tooltip",class:"seventv-tooltip","tooltip-type":"emote"},Ge=["src","srcset","alt"],We={class:"details"},xe={class:"emote-name"},Qe={key:2,class:"alias-label"},Ze={key:3,class:"creator-label"},Je={class:"scope-labels"},Xe={key:0,class:"label-global"},Ye={key:1,class:"label-subscriber"},Ke={key:2,class:"label-channel"},et={key:3,class:"label-sub-feature"},tt={key:4,class:"label-sub-feature"},ot={key:4},st={key:5,class:"divider"},at={key:6,class:"zero-width-label"},it=["srcset"],nt=N({__name:"EmoteTooltip",props:{emote:{},initSrc:{},overlaid:{},height:{},width:{}},setup(f){var b,n,e;const t=f,p=V("ui.compact_tooltips"),k=m("");t.emote&&t.emote.data&&t.emote.data.host.srcset&&Y(()=>{k.value=q(t.height,t.width,t.emote.data.host,t.emote.provider)},90);const l=m(t.overlaid??{}),c=m(Object.keys(l.value).length>0),u=`${t.width*3}px`,L=`${t.height*3}px`,w=t.emote.scope==="GLOBAL",v=t.emote.scope==="SUB",g=t.emote.scope==="CHANNEL",T=t.emote.scope==="PERSONAL",_=(t.emote.flags||0)!==0,y=m(null);if(t.emote.unicode){const{emojiByCode:o}=de();y.value=o.get(t.emote.unicode)??null}const $=m("inherit");return(e=(n=(b=t.emote.data)==null?void 0:b.owner)==null?void 0:n.style)!=null&&e.color&&($.value=me(t.emote.data.owner.style.color)),(o,U)=>{var d,I;return E(p)?(s(),i("div",He,[a("p",null,h(o.emote.name),1)],512)):(s(),i("div",Ve,[o.emote.provider!=="EMOJI"?(s(),i("img",{key:0,ref:"imgRef",class:"tooltip-emote",src:o.initSrc,srcset:k.value,alt:o.emote.name,sizes:"auto",style:D({width:u,height:L})},null,12,Ge)):(s(),A(x,{key:1,id:o.emote.id,class:"tooltip-emoji"},null,8,["id"])),a("div",We,[a("h3",xe,h(o.emote.name),1),M(ce,{class:"logo",provider:o.emote.provider},null,8,["provider"])]),o.emote.data&&o.emote.data.name!==o.emote.name?(s(),i("div",Qe,[P(" aka "),a("span",null,h((d=o.emote.data)==null?void 0:d.name),1)])):r("",!0),(I=o.emote.data)!=null&&I.owner?(s(),i("div",Ze,[P(" by "),a("span",{class:"creator-name",style:D({color:$.value})},h(o.emote.data.owner.display_name),5)])):r("",!0),a("div",Je,[w?(s(),i("div",Xe,"Global Emote")):r("",!0),v?(s(),i("div",Ye,"Subscriber Emote")):r("",!0),g?(s(),i("div",Ke,"Channel Emote")):r("",!0),T?(s(),i("div",et,"Personal Emote")):r("",!0),_?(s(),i("div",tt,"Zero-Width")):r("",!0)]),y.value?(s(),i("div",ot,[a("div",null,"Emoji - "+h(y.value.group),1)])):r("",!0),c.value?(s(),i("div",st)):r("",!0),c.value?(s(),i("div",at,[(s(!0),i(F,null,G(l.value,C=>(s(),i("div",{key:C.id,class:"zero-width-emote"},[C.data?(s(),i("img",{key:0,class:"overlaid-emote-icon",srcset:C.data.host.srcset??E(H)(C.data.host,C.provider)},null,8,it)):r("",!0),P(" — "),a("span",null,h(C.name),1)]))),128))])):r("",!0)],512))}}});const rt=B(nt,[["__scopeId","data-v-1d4829d1"]]),lt=["srcset","alt"],mt=["srcset","alt"],dt=N({__name:"Emote",props:{emote:{},clickable:{type:Boolean},format:{},overlaid:{},unload:{type:Boolean,default:!1},scale:{default:1}},emits:["emote-click"],setup(f,{emit:t}){const p=f,k=V("general.blur_unlisted_emotes"),l=m(),c=m(!1),u=m([0,0]),L=m(),w=m(""),v=m(0),g=m(0),T=e=>{if(!(e.target instanceof HTMLImageElement))return;const o=e.target;v.value=Math.round(o.naturalWidth/p.scale),g.value=Math.round(o.naturalHeight/p.scale),w.value=o.currentSrc,L.value=o};function _(e){var o;return(o=e.data)!=null&&o.host?p.scale!=1||!e.data.host.srcset?H(e.data.host,e.provider,void 0,2,p.scale):e.data.host.srcset:""}function y(e){p.clickable&&(c.value=!0,u.value=[e.clientX,e.clientY])}function $(){b(l.value)}const{show:b,hide:n}=K(rt,{emote:p.emote,initSrc:w,overlaid:p.overlaid,width:v,height:g});return(e,o)=>{var U;return s(),i("div",{ref_key:"boxRef",ref:l,class:"seventv-emote-box"},[!e.emote.unicode&&e.emote.data&&e.emote.data.host?(s(),i("img",{key:0,class:j(["seventv-chat-emote",{blur:E(k)&&((U=e.emote.data)==null?void 0:U.listed)===!1}]),srcset:e.unload?"":_(e.emote),alt:e.emote.name,loading:"lazy",decoding:"async",onLoad:T,onMouseenter:$,onMouseleave:o[0]||(o[0]=d=>E(n)()),onClick:o[1]||(o[1]=d=>[y(d),t("emote-click",d,e.emote)])},null,42,lt)):!e.unload&&e.emote.id?(s(),A(x,{key:1,id:e.emote.id,ref_key:"boxRef",ref:l,alt:e.emote.name,class:"seventv-chat-emote seventv-emoji",style:D({width:`${e.scale*2}rem`,height:`${e.scale*2}rem`}),onMouseenter:$,onMouseleave:o[2]||(o[2]=d=>E(n)())},null,8,["id","alt","style"])):r("",!0),(s(!0),i(F,null,G(e.overlaid,d=>{var I;return s(),i(F,{key:d.id},[d.data&&d.data.host?(s(),i("img",{key:0,class:j(["seventv-chat-emote zero-width-emote",{blur:E(k)&&((I=d.data)==null?void 0:I.listed)===!1}]),srcset:_(d),alt:" "+d.name},null,10,mt)):r("",!0)],64)}),128)),c.value?(s(),A(se,{key:2,to:"#seventv-message-container"},[M(ue,{class:"seventv-emote-card-float",anchor:l.value,placement:"right-end",middleware:[E(te)({mainAxis:!0,crossAxis:!0}),E(oe)()],once:!0,"emit-clickout":!0,onClickout:o[3]||(o[3]=d=>c.value=!1)},{default:ee(()=>[M(Oe,{emote:e.emote,size:[v.value,g.value]},null,8,["emote","size"])]),_:1},8,["anchor","middleware"])])):r("",!0)],512)}}});const $t=B(dt,[["__scopeId","data-v-86a651bd"]]);export{$t as E,x as _,W as a,wt as b,kt as c,ve as t,pe as u};
