import{s as t}from"./request.027d6cf7.js";import{g as e,d as n,r as a,k as o,h as l,w as s,l as r,F as d,s as u,o as f,v as c}from"./vendor.cedc5fa0.js";import"./index.6f530c9a.js";const m=u("h1",null,"xxe_login",-1),i={style:{display:"flex","justify-content":"flex-end"}},p=c(" 验证 ");var x=e({setup(e){const c=n({content:""}),x=async()=>{var e;await(e=c,t({headers:{"Content-Type":"text/xml"},url:"/demo/xxe_login",method:"POST",data:e}))};return(t,e)=>{const n=a("n-input"),v=a("n-form-item"),y=a("n-button"),_=a("n-col"),h=a("n-row"),g=a("n-form");return f(),o(d,null,[m,l(g,{model:r(c),ref:(t,e)=>{e.formRef=t}},{default:s((()=>[l(v,{path:"content",label:"content"},{default:s((()=>[l(n,{value:r(c).content,"onUpdate:value":e[0]||(e[0]=t=>r(c).content=t)},null,8,["value"])])),_:1}),l(h,{gutter:[0,24]},{default:s((()=>[l(_,{span:24},{default:s((()=>[u("div",i,[l(y,{onClick:x,round:"",type:"primary"},{default:s((()=>[p])),_:1})])])),_:1})])),_:1})])),_:1},8,["model"])],64)}}});export{x as default};
