import{m as e}from"./sqlInjection.b95d3d3a.js";import{g as a,d as l,r as n,k as t,h as s,w as u,l as o,F as d,s as f,o as p,v as r}from"./vendor.cedc5fa0.js";import"./request.0bf35abf.js";import"./index.8fd6f836.js";const m=f("h1",null,"sql Execute mysql.execute",-1),i={style:{display:"flex","justify-content":"flex-end"}},v=r(" 验证 ");var c=a({setup(a){const r=l({id:"",name:"song",phone1:"",sql:"song"}),c=async()=>{await e(r)};return(e,a)=>{const l=n("n-input"),h=n("n-form-item"),q=n("n-button"),b=n("n-col"),_=n("n-row"),y=n("n-form");return p(),t(d,null,[m,s(y,{model:o(r),ref:(e,a)=>{a.formRef=e}},{default:u((()=>[s(h,{path:"id",label:"id"},{default:u((()=>[s(l,{value:o(r).id,"onUpdate:value":a[0]||(a[0]=e=>o(r).id=e)},null,8,["value"])])),_:1}),s(h,{path:"name",label:"name"},{default:u((()=>[s(l,{value:o(r).name,"onUpdate:value":a[1]||(a[1]=e=>o(r).name=e)},null,8,["value"])])),_:1}),s(h,{path:"phone1",label:"phone1"},{default:u((()=>[s(l,{value:o(r).phone1,"onUpdate:value":a[2]||(a[2]=e=>o(r).phone1=e)},null,8,["value"])])),_:1}),s(h,{path:"sql",label:"sql"},{default:u((()=>[s(l,{value:o(r).sql,"onUpdate:value":a[3]||(a[3]=e=>o(r).sql=e)},null,8,["value"])])),_:1}),s(_,{gutter:[0,24]},{default:u((()=>[s(b,{span:24},{default:u((()=>[f("div",i,[s(q,{onClick:c,round:"",type:"primary"},{default:u((()=>[v])),_:1})])])),_:1})])),_:1})])),_:1},8,["model"])],64)}}});export{c as default};