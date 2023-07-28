import{g as k,j as L,k as A,o as d,h as G,w as s,a as e,c as u,r as I,F as S,q as n,b as o,d as t,n as i,s as m,e as N,l as C,t as P,p as B,f as V,i as h,_ as R}from"./entry.f12f4a17.js";import{_ as U}from"./Slide.vue.efd76bbd.js";const a=_=>(B("data-v-827eb7c4"),_=_(),V(),_),F=a(()=>e("h2",null,"Software Projects",-1)),W={class:"col-sm-4 d-flex justify-content-center align-self-start"},$={class:"d-flex flex-sm-column flex-wrap flex-sm-nowrap justify-content-sm-center h-100"},q={class:"mb-2"},z={class:"frame"},D=["src","alt"],E={class:"overlay"},O={class:"text"},T={class:"col-sm-8 align-self-start"},H={key:0},J=a(()=>e("h3",null,"Projects at Imperial College London",-1)),K=a(()=>e("div",{class:"d-flex align-items-center"},[e("img",{class:"sm-arrow",alt:"right arrow",src:h}),e("div",null,[e("em",null," Go to Imperial experience overview")])],-1)),M=a(()=>e("hr",null,null,-1)),Q={key:1},X=a(()=>e("h3",null,"Projects at General Assembly",-1)),Y=a(()=>e("div",{class:"d-flex align-items-center"},[e("img",{class:"sm-arrow",alt:"right arrow",src:h}),e("div",null,[e("em",null," Go to General Assembly experience overview")])],-1)),Z=a(()=>e("hr",null,null,-1)),ee=k({__name:"projects",setup(_){const l=L(),g=[{name:"Redactyl",iconSrc:"/icons/redactyl.png",route:"redactyl"},{name:"Imperial College London",iconSrc:"/icons/icl.png",route:"icl"},{name:"General Assembly",iconSrc:"/icons/ga.png",route:"ga"}],v=A(()=>g.map(r=>({...r,isActive:l.path.includes(r.route)})));function f(r){return new URL(r,import.meta.url)}return(r,te)=>{const c=N,x=C,w=U;return d(),G(w,{key:"projects"},{default:s(()=>[F,e("div",W,[e("div",$,[(d(!0),u(S,null,I(v.value,({route:y,iconSrc:j,name:p,isActive:b})=>(d(),u("div",q,[o(c,{to:`/projects/${y}`},{default:s(()=>[e("div",z,[e("img",{src:f(j),alt:p,class:i(["expIcon",{isActive:b}])},null,10,D),e("div",E,[e("div",O,P(p),1)])])]),_:2},1032,["to"])]))),256))])]),e("div",T,[n(l).path.includes("icl")?(d(),u("div",H,[J,e("h5",null,[o(c,{to:"/projects/icl-naomi",class:i(["text-white",{isActiveLink:n(l).path.includes("naomi")}])},{default:s(()=>[t("Naomi")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/icl-wodin",class:i(["text-white",{isActiveLink:n(l).path.includes("wodin")}])},{default:s(()=>[t("Wodin")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/icl-orderlyweb",class:i(["text-white",{isActiveLink:n(l).path.includes("orderlyweb")}])},{default:s(()=>[t("OrderlyWeb")]),_:1},8,["class"])]),e("div",null,[o(c,{to:"/experience/imperial-college-london",class:"text-white"},{default:s(()=>[K]),_:1})]),M])):m("",!0),n(l).path.includes("ga")?(d(),u("div",Q,[X,e("h5",null,[o(c,{to:"/projects/ga1-goblin-gold",class:i(["text-white",{isActiveLink:n(l).path.includes("goblin-gold")}])},{default:s(()=>[t("Goblin Gold")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/ga2-geography-genius",class:i(["text-white",{isActiveLink:n(l).path.includes("geography-genius")}])},{default:s(()=>[t("Geography Genius")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/ga3-beehive",class:i(["text-white",{isActiveLink:n(l).path.includes("beehive")}])},{default:s(()=>[t("Beehive")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/ga4-pokemon-unlimited",class:i(["text-white",{isActiveLink:n(l).path.includes("pokemon-unlimited")}])},{default:s(()=>[t("Pokémon Unlimited")]),_:1},8,["class"])]),e("div",null,[o(c,{to:"/experience/general-assembly",class:"text-white"},{default:s(()=>[Y]),_:1})]),Z])):m("",!0),o(x,{transition:{name:"blur",mode:"out-in"}})])]),_:1})}}});const le=R(ee,[["__scopeId","data-v-827eb7c4"]]);export{le as default};
