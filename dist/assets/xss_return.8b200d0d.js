import{g as t,d as e,p as a,q as n,r as s,k as o,h as r,w as l,l as u,F as d,s as f,o as c,v as m}from"./vendor.cedc5fa0.js";import{s as p}from"./request.027d6cf7.js";import"./index.6f530c9a.js";const i=f("h1",null,"xss_return",-1),v={style:{display:"flex","justify-content":"flex-end"}},g=m(" 验证 ");var x=t({setup(t){const m=e({content:""}),x=a();n((()=>x.getters.getLanguage));const y=async()=>{var t;await(t=m,p({url:"/demo/xss",method:"GET",params:t}))};return(t,e)=>{const a=s("n-input"),n=s("n-form-item"),p=s("n-button"),x=s("n-col"),_=s("n-row"),h=s("n-form");return c(),o(d,null,[i,r(h,{model:u(m),ref:(t,e)=>{e.formRef=t}},{default:l((()=>[r(n,{path:"content",label:"content"},{default:l((()=>[r(a,{value:u(m).content,"onUpdate:value":e[0]||(e[0]=t=>u(m).content=t)},null,8,["value"])])),_:1}),r(_,{gutter:[0,24]},{default:l((()=>[r(x,{span:24},{default:l((()=>[f("div",v,[r(p,{onClick:y,round:"",type:"primary"},{default:l((()=>[g])),_:1})])])),_:1})])),_:1})])),_:1},8,["model"])],64)}}});export{x as default};
