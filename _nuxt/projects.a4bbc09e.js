import{g as k,j as b,k as L,o as r,h as A,w as s,a as e,c as _,r as G,F as S,q as a,b as o,d as t,n,s as m,e as I,l as N,t as C,p as P,f as B,i as h,_ as V}from"./entry.5fee1163.js";import{_ as F}from"./Slide.vue.02d469cf.js";const i=d=>(P("data-v-35783fc2"),d=d(),B(),d),R=i(()=>e("h2",null,"Software Projects",-1)),W={class:"col-sm-4 d-flex justify-content-center align-self-start"},$={class:"d-flex flex-sm-column flex-wrap flex-sm-nowrap justify-content-sm-center h-100"},q={class:"mb-2"},z={class:"frame"},D=["src","alt"],E={class:"overlay"},O={class:"text"},T={class:"col-sm-8 align-self-start"},U={key:0},H=i(()=>e("h3",null,"Projects at Imperial College London",-1)),J=i(()=>e("div",{class:"d-flex align-items-center"},[e("img",{class:"sm-arrow",alt:"right arrow",src:h}),e("div",null,[e("em",null," Go to Imperial experience overview")])],-1)),K=i(()=>e("hr",null,null,-1)),M={key:1},Q=i(()=>e("h3",null,"Projects at General Assembly",-1)),X=i(()=>e("div",{class:"d-flex align-items-center"},[e("img",{class:"sm-arrow",alt:"right arrow",src:h}),e("div",null,[e("em",null," Go to General Assembly experience overview")])],-1)),Y=i(()=>e("hr",null,null,-1)),Z=k({__name:"projects",setup(d){const l=b(),g=[{name:"Redactyl",iconSrc:"/assets/images/redactyl.png",route:"redactyl"},{name:"Imperial College London",iconSrc:"/assets/images/icl.png",route:"icl"},{name:"General Assembly",iconSrc:"/assets/images/ga.png",route:"ga"}],f=L(()=>g.map(u=>({...u,isActive:l.path.includes(u.route)})));return(u,ee)=>{const c=I,v=N,x=F;return r(),A(x,{key:"projects"},{default:s(()=>[R,e("div",W,[e("div",$,[(r(!0),_(S,null,G(f.value,({route:w,iconSrc:y,name:p,isActive:j})=>(r(),_("div",q,[o(c,{to:`/projects/${w}`},{default:s(()=>[e("div",z,[e("img",{src:y,alt:p,class:n(["expIcon",{isActive:j}])},null,10,D),e("div",E,[e("div",O,C(p),1)])])]),_:2},1032,["to"])]))),256))])]),e("div",T,[a(l).path.includes("icl")?(r(),_("div",U,[H,e("h5",null,[o(c,{to:"/projects/icl-naomi",class:n(["text-white",{isActiveLink:a(l).path.includes("naomi")}])},{default:s(()=>[t("Naomi")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/icl-wodin",class:n(["text-white",{isActiveLink:a(l).path.includes("wodin")}])},{default:s(()=>[t("Wodin")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/icl-orderlyweb",class:n(["text-white",{isActiveLink:a(l).path.includes("orderlyweb")}])},{default:s(()=>[t("OrderlyWeb")]),_:1},8,["class"])]),e("div",null,[o(c,{to:"/experience/imperial-college-london",class:"text-white"},{default:s(()=>[J]),_:1})]),K])):m("",!0),a(l).path.includes("ga")?(r(),_("div",M,[Q,e("h5",null,[o(c,{to:"/projects/ga1-goblin-gold",class:n(["text-white",{isActiveLink:a(l).path.includes("goblin-gold")}])},{default:s(()=>[t("Goblin Gold")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/ga2-geography-genius",class:n(["text-white",{isActiveLink:a(l).path.includes("geography-genius")}])},{default:s(()=>[t("Geography Genius")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/ga3-beehive",class:n(["text-white",{isActiveLink:a(l).path.includes("beehive")}])},{default:s(()=>[t("Beehive")]),_:1},8,["class"]),t(" | "),o(c,{to:"/projects/ga4-pokemon-unlimited",class:n(["text-white",{isActiveLink:a(l).path.includes("pokemon-unlimited")}])},{default:s(()=>[t("Pokémon Unlimited")]),_:1},8,["class"])]),e("div",null,[o(c,{to:"/experience/general-assembly",class:"text-white"},{default:s(()=>[X]),_:1})]),Y])):m("",!0),o(v,{transition:{name:"blur",mode:"out-in"}})])]),_:1})}}});const oe=V(Z,[["__scopeId","data-v-35783fc2"]]);export{oe as default};