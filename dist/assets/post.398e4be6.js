import{p as a}from"./pathTraversal.059c6adc.js";import{g as e,d as t,r as n,k as s,h as l,w as r,l as o,F as f,s as u,o as d,v as m}from"./vendor.cedc5fa0.js";import"./request.027d6cf7.js";import"./index.6f530c9a.js";const p=u("h1",null,"path traversal of post",-1),i={style:{display:"flex","justify-content":"flex-end"}},c=m(" 验证 ");var v=e({setup(e){const m=t({name:"./file/data.json"}),v=async()=>{await a(m)};return(a,e)=>{const t=n("n-input"),j=n("n-form-item"),y=n("n-button"),h=n("n-col"),_=n("n-row"),x=n("n-form");return d(),s(f,null,[p,l(x,{model:o(m),ref:(a,e)=>{e.formRef=a}},{default:r((()=>[l(j,{path:"name",label:"name"},{default:r((()=>[l(t,{value:o(m).name,"onUpdate:value":e[0]||(e[0]=a=>o(m).name=a)},null,8,["value"])])),_:1}),l(_,{gutter:[0,24]},{default:r((()=>[l(h,{span:24},{default:r((()=>[u("div",i,[l(y,{onClick:v,round:"",type:"primary"},{default:r((()=>[c])),_:1})])])),_:1})])),_:1})])),_:1},8,["model"])],64)}}});export{v as default};
