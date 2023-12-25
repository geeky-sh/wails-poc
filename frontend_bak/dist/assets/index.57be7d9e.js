var Z=Object.defineProperty;var ee=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var C=(e,t,r)=>(ee(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function w(){}function R(e){return e()}function M(){return Object.create(null)}function E(e){e.forEach(R)}function T(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function ne(e,t,r){e.insertBefore(t,r||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function re(e){return document.createTextNode(e)}function x(){return re(" ")}function O(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function a(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function oe(e){return Array.from(e.childNodes)}function A(e,t){e.value=t==null?"":t}let F;function N(e){F=e}const $=[],q=[];let b=[];const J=[],ie=Promise.resolve();let B=!1;function le(){B||(B=!0,ie.then(Q))}function D(e){b.push(e)}const P=new Set;let y=0;function Q(){if(y!==0)return;const e=F;do{try{for(;y<$.length;){const t=$[y];y++,N(t),ue(t.$$)}}catch(t){throw $.length=0,y=0,t}for(N(null),$.length=0,y=0;q.length;)q.pop()();for(let t=0;t<b.length;t+=1){const r=b[t];P.has(r)||(P.add(r),r())}b.length=0}while($.length);for(;J.length;)J.pop()();B=!1,P.clear(),N(e)}function ue(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function se(e){const t=[],r=[];b.forEach(n=>e.indexOf(n)===-1?t.push(n):r.push(n)),r.forEach(n=>n()),b=t}const j=new Set;let fe;function U(e,t){e&&e.i&&(j.delete(e),e.i(t))}function ce(e,t,r,n){if(e&&e.o){if(j.has(e))return;j.add(e),fe.c.push(()=>{j.delete(e),n&&(r&&e.d(1),n())}),e.o(t)}else n&&n()}function ae(e){e&&e.c()}function V(e,t,r,n){const{fragment:o,after_update:u}=e.$$;o&&o.m(t,r),n||D(()=>{const i=e.$$.on_mount.map(R).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...i):E(i),e.$$.on_mount=[]}),u.forEach(D)}function W(e,t){const r=e.$$;r.fragment!==null&&(se(r.after_update),E(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&($.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,r,n,o,u,i,_=[-1]){const s=F;N(e);const l=e.$$={fragment:null,ctx:[],props:u,update:w,not_equal:o,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:M(),dirty:_,skip_bound:!1,root:t.target||s.$$.root};i&&i(l.root);let v=!1;if(l.ctx=r?r(e,t.props||{},(f,S,...p)=>{const m=p.length?p[0]:S;return l.ctx&&o(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),v&&de(e,f)),S}):[],l.update(),v=!0,E(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){const f=oe(t.target);l.fragment&&l.fragment.l(f),f.forEach(H)}else l.fragment&&l.fragment.c();t.intro&&U(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),Q()}N(s)}class Y{$destroy(){W(this,1),this.$destroy=w}$on(t,r){if(!T(r))return w;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var K;(e=>{class t{constructor(n={}){C(this,"roll_num");C(this,"name");typeof n=="string"&&(n=JSON.parse(n)),this.roll_num=n.roll_num,this.name=n.name}static createFrom(n={}){return new t(n)}}e.Session=t})(K||(K={}));function me(){return window.go.main.Session.DeleteSession()}function pe(){return window.go.main.Session.GetSession()}function he(e,t){return window.go.main.Session.SetSession(e,t)}function _e(e){let t,r,n,o,u,i,_,s,l,v,f,S,p,m,G,g,k,I;return{c(){t=d("div"),r=d("form"),n=d("div"),o=d("label"),o.textContent="Roll Number:",u=x(),i=d("input"),_=x(),s=d("div"),l=d("label"),l.textContent="Name:",v=x(),f=d("input"),S=x(),p=d("div"),m=d("input"),G=x(),g=d("input"),a(o,"for","rollNum"),a(i,"type","text"),a(i,"id","rollNum"),a(i,"name","rollNum"),a(n,"class","my-3"),a(l,"for","name"),a(f,"type","text"),a(f,"id","name"),a(f,"name","name"),a(s,"class","my-3"),a(m,"class","p-2 bg-blue-400"),a(m,"type","button"),m.value="Login",a(g,"class","p-2 bg-red-400"),a(g,"type","button"),g.value="Logout",a(t,"class","flex flex-row justify-center bg-slate-200 place-items-center")},m(h,L){ne(h,t,L),c(t,r),c(r,n),c(n,o),c(n,u),c(n,i),A(i,e[0].roll_num),c(r,_),c(r,s),c(s,l),c(s,v),c(s,f),A(f,e[0].name),c(r,S),c(r,p),c(p,m),c(p,G),c(p,g),k||(I=[O(i,"input",e[3]),O(f,"input",e[4]),O(m,"click",e[1]),O(g,"click",e[2])],k=!0)},p(h,[L]){L&1&&i.value!==h[0].roll_num&&A(i,h[0].roll_num),L&1&&f.value!==h[0].name&&A(f,h[0].name)},i:w,o:w,d(h){h&&H(t),k=!1,E(I)}}}function ge(e,t,r){let n={name:"",roll_num:""};pe().then(s=>{r(0,n.name=s.name,n),r(0,n.roll_num=s.roll_num,n)});function o(){he(n.name,n.roll_num).then(s=>alert("successful"),s=>alert("failed with error"))}function u(){me().then(s=>{r(0,n.name="",n),r(0,n.roll_num="",n)},s=>{alert("delete failed")})}function i(){n.roll_num=this.value,r(0,n)}function _(){n.name=this.value,r(0,n)}return[n,o,u,i,_]}class ye extends Y{constructor(t){super(),X(this,t,ge,_e,z,{})}}function $e(e){let t,r;return t=new ye({}),{c(){ae(t.$$.fragment)},m(n,o){V(t,n,o),r=!0},p:w,i(n){r||(U(t.$$.fragment,n),r=!0)},o(n){ce(t.$$.fragment,n),r=!1},d(n){W(t,n)}}}class be extends Y{constructor(t){super(),X(this,t,null,$e,z,{})}}new be({target:document.getElementById("app")});