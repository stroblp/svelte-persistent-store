import{g as H,w as J,l as X,S as U,i as V,s as Y,e as _,a as m,t as R,b as s,c as T,d as C,f as j,n as z,h as o,r as Z,j as F,k as S}from"./vendor.8fa84ebf.js";const K=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function b(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerpolicy&&(t.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?t.credentials="include":l.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(l){if(l.ep)return;l.ep=!0;const t=b(l);fetch(l.href,t)}};K();const G=(i,r,b="INDEXEDDB",u="default-store",l="svelte-presistent-db")=>{const t=J(r);let f=X.createInstance({name:l,storeName:u,driver:X[b]});f.ready().then(function(){d()}).catch(function(c){t.set(void 0)});let p=!1;function d(){f.getItem(i).then(c=>{c===null&&(c=r),p=!0,t.set(c)})}return{subscribe:t.subscribe,update:c=>{t.update(c),p&&f.setItem(i,H(t))},set:c=>{t.set(c),p&&f.setItem(i,c)}}};function $(i){let r,b,u,l,t,f,p,d,c,L,w,k,D,y,a,A,I,B,E,N,O,q,x,Q,W,v,P,M;return{c(){r=_("p"),r.textContent="localstorage:",b=m(),u=_("button"),u.textContent="-",l=m(),t=_("span"),f=R(i[0]),p=m(),d=_("button"),d.textContent="+",c=m(),L=_("p"),L.textContent="websql:",w=m(),k=_("button"),k.textContent="-",D=m(),y=_("span"),a=R(i[1]),A=m(),I=_("button"),I.textContent="+",B=m(),E=_("p"),E.textContent="indexeddb:",N=m(),O=_("button"),O.textContent="-",q=m(),x=_("span"),Q=R(i[2]),W=m(),v=_("button"),v.textContent="+"},m(e,n){s(e,r,n),s(e,b,n),s(e,u,n),s(e,l,n),s(e,t,n),T(t,f),s(e,p,n),s(e,d,n),s(e,c,n),s(e,L,n),s(e,w,n),s(e,k,n),s(e,D,n),s(e,y,n),T(y,a),s(e,A,n),s(e,I,n),s(e,B,n),s(e,E,n),s(e,N,n),s(e,O,n),s(e,q,n),s(e,x,n),T(x,Q),s(e,W,n),s(e,v,n),P||(M=[C(u,"click",i[6]),C(d,"click",i[7]),C(k,"click",i[8]),C(I,"click",i[9]),C(O,"click",i[10]),C(v,"click",i[11])],P=!0)},p(e,[n]){n&1&&j(f,e[0]),n&2&&j(a,e[1]),n&4&&j(Q,e[2])},i:z,o:z,d(e){e&&o(r),e&&o(b),e&&o(u),e&&o(l),e&&o(t),e&&o(p),e&&o(d),e&&o(c),e&&o(L),e&&o(w),e&&o(k),e&&o(D),e&&o(y),e&&o(A),e&&o(I),e&&o(B),e&&o(E),e&&o(N),e&&o(O),e&&o(q),e&&o(x),e&&o(W),e&&o(v),P=!1,Z(M)}}}function h(i,r,b){let u,l,t,f=G("counter-value",0,"LOCALSTORAGE");F(i,f,a=>b(0,u=a));let p=G("counter-value",0,"WEBSQL");F(i,p,a=>b(1,l=a));let d=G("counter-value",0);return F(i,d,a=>b(2,t=a)),[u,l,t,f,p,d,()=>S(f,u-=1,u),()=>S(f,u+=1,u),()=>S(p,l-=1,l),()=>S(p,l+=1,l),()=>S(d,t-=1,t),()=>S(d,t+=1,t)]}class g extends U{constructor(r){super();V(this,r,h,$,Y,{})}}new g({target:document.body});