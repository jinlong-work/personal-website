(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xh(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const ft={},Gr=[],xi=()=>{},Xm=()=>!1,nc=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),qh=i=>i.startsWith("onUpdate:"),$t=Object.assign,jh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},gv=Object.prototype.hasOwnProperty,st=(i,e)=>gv.call(i,e),He=Array.isArray,Wr=i=>ba(i)==="[object Map]",qm=i=>ba(i)==="[object Set]",sd=i=>ba(i)==="[object Date]",Ge=i=>typeof i=="function",It=i=>typeof i=="string",Si=i=>typeof i=="symbol",at=i=>i!==null&&typeof i=="object",jm=i=>(at(i)||Ge(i))&&Ge(i.then)&&Ge(i.catch),Ym=Object.prototype.toString,ba=i=>Ym.call(i),vv=i=>ba(i).slice(8,-1),Km=i=>ba(i)==="[object Object]",Yh=i=>It(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,jo=Xh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ic=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},xv=/-\w/g,Qn=ic(i=>i.replace(xv,e=>e.slice(1).toUpperCase())),yv=/\B([A-Z])/g,hr=ic(i=>i.replace(yv,"-$1").toLowerCase()),$m=ic(i=>i.charAt(0).toUpperCase()+i.slice(1)),Cc=ic(i=>i?`on${$m(i)}`:""),pi=(i,e)=>!Object.is(i,e),Pc=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Zm=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Sv=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let rd;const sc=()=>rd||(rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kh(i){if(He(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=It(n)?bv(n):Kh(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(It(i)||at(i))return i}const Mv=/;(?![^(]*\))/g,Ev=/:([^]+)/,Tv=/\/\*[^]*?\*\//g;function bv(i){const e={};return i.replace(Tv,"").split(Mv).forEach(t=>{if(t){const n=t.split(Ev);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Es(i){let e="";if(It(i))e=i;else if(He(i))for(let t=0;t<i.length;t++){const n=Es(i[t]);n&&(e+=n+" ")}else if(at(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=Xh(Av);function Jm(i){return!!i||i===""}function Rv(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=$h(i[n],e[n]);return t}function $h(i,e){if(i===e)return!0;let t=sd(i),n=sd(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=Si(i),n=Si(e),t||n)return i===e;if(t=He(i),n=He(e),t||n)return t&&n?Rv(i,e):!1;if(t=at(i),n=at(e),t||n){if(!t||!n)return!1;const s=Object.keys(i).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$h(i[o],e[o]))return!1}}return String(i)===String(e)}const Qm=i=>!!(i&&i.__v_isRef===!0),_n=i=>It(i)?i:i==null?"":He(i)||at(i)&&(i.toString===Ym||!Ge(i.toString))?Qm(i)?_n(i.value):JSON.stringify(i,e_,2):String(i),e_=(i,e)=>Qm(e)?e_(i,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[Lc(n,r)+" =>"]=s,t),{})}:qm(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Lc(t))}:Si(e)?Lc(e):at(e)&&!He(e)&&!Km(e)?String(e):e,Lc=(i,e="")=>{var t;return Si(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class t_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function n_(i){return new t_(i)}function i_(){return Qt}function Cv(i,e=!1){Qt&&Qt.cleanups.push(i)}let pt;const Dc=new WeakSet;class s_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dc.has(this)&&(Dc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||o_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,od(this),a_(this);const e=pt,t=ei;pt=this,ei=!0;try{return this.fn()}finally{l_(this),pt=e,ei=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qh(e);this.deps=this.depsTail=void 0,od(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Iu(this)&&this.run()}get dirty(){return Iu(this)}}let r_=0,Yo,Ko;function o_(i,e=!1){if(i.flags|=8,e){i.next=Ko,Ko=i;return}i.next=Yo,Yo=i}function Zh(){r_++}function Jh(){if(--r_>0)return;if(Ko){let e=Ko;for(Ko=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Yo;){let e=Yo;for(Yo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function a_(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function l_(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),Qh(n),Pv(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function Iu(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(c_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function c_(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===aa)||(i.globalVersion=aa,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Iu(i))))return;i.flags|=2;const e=i.dep,t=pt,n=ei;pt=i,ei=!0;try{a_(i);const s=i.fn(i._value);(e.version===0||pi(s,i._value))&&(i.flags|=128,i._value=s,e.version++)}catch(s){throw e.version++,s}finally{pt=t,ei=n,l_(i),i.flags&=-3}}function Qh(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Qh(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pv(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ei=!0;const u_=[];function $i(){u_.push(ei),ei=!1}function Zi(){const i=u_.pop();ei=i===void 0?!0:i}function od(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=pt;pt=void 0;try{e()}finally{pt=t}}}let aa=0;class Lv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ef{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pt||!ei||pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pt)t=this.activeLink=new Lv(pt,this),pt.deps?(t.prevDep=pt.depsTail,pt.depsTail.nextDep=t,pt.depsTail=t):pt.deps=pt.depsTail=t,h_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=pt.depsTail,t.nextDep=void 0,pt.depsTail.nextDep=t,pt.depsTail=t,pt.deps===t&&(pt.deps=n)}return t}trigger(e){this.version++,aa++,this.notify(e)}notify(e){Zh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jh()}}}function h_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)h_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Nu=new WeakMap,nr=Symbol(""),Uu=Symbol(""),la=Symbol("");function en(i,e,t){if(ei&&pt){let n=Nu.get(i);n||Nu.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new ef),s.map=n,s.key=t),s.track()}}function Wi(i,e,t,n,s,r){const o=Nu.get(i);if(!o){aa++;return}const a=l=>{l&&l.trigger()};if(Zh(),e==="clear")o.forEach(a);else{const l=He(i),c=l&&Yh(t);if(l&&t==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===la||!Si(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(la)),e){case"add":l?c&&a(o.get("length")):(a(o.get(nr)),Wr(i)&&a(o.get(Uu)));break;case"delete":l||(a(o.get(nr)),Wr(i)&&a(o.get(Uu)));break;case"set":Wr(i)&&a(o.get(nr));break}}Jh()}function _r(i){const e=it(i);return e===i?e:(en(e,"iterate",la),Xn(i)?e:e.map(ii))}function rc(i){return en(i=it(i),"iterate",la),i}function hi(i,e){return Ji(i)?no(ir(i)?ii(e):e):ii(e)}const Dv={__proto__:null,[Symbol.iterator](){return Ic(this,Symbol.iterator,i=>hi(this,i))},concat(...i){return _r(this).concat(...i.map(e=>He(e)?_r(e):e))},entries(){return Ic(this,"entries",i=>(i[1]=hi(this,i[1]),i))},every(i,e){return Pi(this,"every",i,e,void 0,arguments)},filter(i,e){return Pi(this,"filter",i,e,t=>t.map(n=>hi(this,n)),arguments)},find(i,e){return Pi(this,"find",i,e,t=>hi(this,t),arguments)},findIndex(i,e){return Pi(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Pi(this,"findLast",i,e,t=>hi(this,t),arguments)},findLastIndex(i,e){return Pi(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Pi(this,"forEach",i,e,void 0,arguments)},includes(...i){return Nc(this,"includes",i)},indexOf(...i){return Nc(this,"indexOf",i)},join(i){return _r(this).join(i)},lastIndexOf(...i){return Nc(this,"lastIndexOf",i)},map(i,e){return Pi(this,"map",i,e,void 0,arguments)},pop(){return wo(this,"pop")},push(...i){return wo(this,"push",i)},reduce(i,...e){return ad(this,"reduce",i,e)},reduceRight(i,...e){return ad(this,"reduceRight",i,e)},shift(){return wo(this,"shift")},some(i,e){return Pi(this,"some",i,e,void 0,arguments)},splice(...i){return wo(this,"splice",i)},toReversed(){return _r(this).toReversed()},toSorted(i){return _r(this).toSorted(i)},toSpliced(...i){return _r(this).toSpliced(...i)},unshift(...i){return wo(this,"unshift",i)},values(){return Ic(this,"values",i=>hi(this,i))}};function Ic(i,e,t){const n=rc(i),s=n[e]();return n!==i&&!Xn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Iv=Array.prototype;function Pi(i,e,t,n,s,r){const o=rc(i),a=o!==i&&!Xn(i),l=o[e];if(l!==Iv[e]){const h=l.apply(i,r);return a?ii(h):h}let c=t;o!==i&&(a?c=function(h,f){return t.call(this,hi(i,h),f,i)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function ad(i,e,t,n){const s=rc(i),r=s!==i&&!Xn(i);let o=t,a=!1;s!==i&&(r?(a=n.length===0,o=function(c,u,h){return a&&(a=!1,c=hi(i,c)),t.call(this,c,hi(i,u),h,i)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,i)}));const l=s[e](o,...n);return a?hi(i,l):l}function Nc(i,e,t){const n=it(i);en(n,"iterate",la);const s=n[e](...t);return(s===-1||s===!1)&&sf(t[0])?(t[0]=it(t[0]),n[e](...t)):s}function wo(i,e,t=[]){$i(),Zh();const n=it(i)[e].apply(i,t);return Jh(),Zi(),n}const Nv=Xh("__proto__,__v_isRef,__isVue"),f_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Si));function Uv(i){Si(i)||(i=String(i));const e=it(this);return en(e,"has",i),e.hasOwnProperty(i)}class d_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?Xv:g_:r?__:m_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=He(e);if(!s){let l;if(o&&(l=Dv[t]))return l;if(t==="hasOwnProperty")return Uv}const a=Reflect.get(e,t,nn(e)?e:n);if((Si(t)?f_.has(t):Nv(t))||(s||en(e,"get",t),r))return a;if(nn(a)){const l=o&&Yh(t)?a:a.value;return s&&at(l)?Pl(l):l}return at(a)?s?Pl(a):oc(a):a}}class p_ extends d_{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];const o=He(e)&&Yh(t);if(!this._isShallow){const c=Ji(r);if(!Xn(n)&&!Ji(n)&&(r=it(r),n=it(n)),!o&&nn(r)&&!nn(n))return c||(r.value=n),!0}const a=o?Number(t)<e.length:st(e,t),l=Reflect.set(e,t,n,nn(e)?e:s);return e===it(s)&&(a?pi(n,r)&&Wi(e,"set",t,n):Wi(e,"add",t,n)),l}deleteProperty(e,t){const n=st(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Wi(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!Si(t)||!f_.has(t))&&en(e,"has",t),n}ownKeys(e){return en(e,"iterate",He(e)?"length":nr),Reflect.ownKeys(e)}}class Ov extends d_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fv=new p_,Bv=new Ov,kv=new p_(!0);const Ou=i=>i,Na=i=>Reflect.getPrototypeOf(i);function zv(i,e,t){return function(...n){const s=this.__v_raw,r=it(s),o=Wr(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Ou:e?no:ii;return!e&&en(r,"iterate",l?Uu:nr),$t(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Ua(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Hv(i,e){const t={get(s){const r=this.__v_raw,o=it(r),a=it(s);i||(pi(s,a)&&en(o,"get",s),en(o,"get",a));const{has:l}=Na(o),c=e?Ou:i?no:ii;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&en(it(s),"iterate",nr),s.size},has(s){const r=this.__v_raw,o=it(r),a=it(s);return i||(pi(s,a)&&en(o,"has",s),en(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?Ou:i?no:ii;return!i&&en(l,"iterate",nr),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return $t(t,i?{add:Ua("add"),set:Ua("set"),delete:Ua("delete"),clear:Ua("clear")}:{add(s){const r=it(this),o=Na(r),a=it(s),l=!e&&!Xn(s)&&!Ji(s)?a:s;return o.has.call(r,l)||pi(s,l)&&o.has.call(r,s)||pi(a,l)&&o.has.call(r,a)||(r.add(l),Wi(r,"add",l,l)),this},set(s,r){!e&&!Xn(r)&&!Ji(r)&&(r=it(r));const o=it(this),{has:a,get:l}=Na(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?pi(r,u)&&Wi(o,"set",s,r):Wi(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=Na(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Wi(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&Wi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=zv(s,i,e)}),t}function tf(i,e){const t=Hv(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(st(t,s)&&s in n?t:n,s,r)}const Vv={get:tf(!1,!1)},Gv={get:tf(!1,!0)},Wv={get:tf(!0,!1)};const m_=new WeakMap,__=new WeakMap,g_=new WeakMap,Xv=new WeakMap;function qv(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jv(i){return i.__v_skip||!Object.isExtensible(i)?0:qv(vv(i))}function oc(i){return Ji(i)?i:nf(i,!1,Fv,Vv,m_)}function v_(i){return nf(i,!1,kv,Gv,__)}function Pl(i){return nf(i,!0,Bv,Wv,g_)}function nf(i,e,t,n,s){if(!at(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=jv(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:t);return s.set(i,a),a}function ir(i){return Ji(i)?ir(i.__v_raw):!!(i&&i.__v_isReactive)}function Ji(i){return!!(i&&i.__v_isReadonly)}function Xn(i){return!!(i&&i.__v_isShallow)}function sf(i){return i?!!i.__v_raw:!1}function it(i){const e=i&&i.__v_raw;return e?it(e):i}function x_(i){return!st(i,"__v_skip")&&Object.isExtensible(i)&&Zm(i,"__v_skip",!0),i}const ii=i=>at(i)?oc(i):i,no=i=>at(i)?Pl(i):i;function nn(i){return i?i.__v_isRef===!0:!1}function dn(i){return S_(i,!1)}function y_(i){return S_(i,!0)}function S_(i,e){return nn(i)?i:new Yv(i,e)}class Yv{constructor(e,t){this.dep=new ef,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:ii(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Xn(e)||Ji(e);e=n?e:it(e),pi(e,t)&&(this._rawValue=e,this._value=n?e:ii(e),this.dep.trigger())}}function ti(i){return nn(i)?i.value:i}const Kv={get:(i,e,t)=>e==="__v_raw"?i:ti(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return nn(s)&&!nn(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function M_(i){return ir(i)?i:new Proxy(i,Kv)}class $v{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ef(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=aa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return o_(this,!0),!0}get value(){const e=this.dep.track();return c_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zv(i,e,t=!1){let n,s;return Ge(i)?n=i:(n=i.get,s=i.set),new $v(n,s,t)}const Oa={},Ll=new WeakMap;let js;function Jv(i,e=!1,t=js){if(t){let n=Ll.get(t);n||Ll.set(t,n=[]),n.push(i)}}function Qv(i,e,t=ft){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:Xn(M)||s===!1||s===0?Xi(M,1):Xi(M);let u,h,f,d,g=!1,_=!1;if(nn(i)?(h=()=>i.value,g=Xn(i)):ir(i)?(h=()=>c(i),g=!0):He(i)?(_=!0,g=i.some(M=>ir(M)||Xn(M)),h=()=>i.map(M=>{if(nn(M))return M.value;if(ir(M))return c(M);if(Ge(M))return l?l(M,2):M()})):Ge(i)?e?h=l?()=>l(i,2):i:h=()=>{if(f){$i();try{f()}finally{Zi()}}const M=js;js=u;try{return l?l(i,3,[d]):i(d)}finally{js=M}}:h=xi,e&&s){const M=h,R=s===!0?1/0:s;h=()=>Xi(M(),R)}const p=i_(),m=()=>{u.stop(),p&&p.active&&jh(p.effects,u)};if(r&&e){const M=e;e=(...R)=>{M(...R),m()}}let S=_?new Array(i.length).fill(Oa):Oa;const y=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const R=u.run();if(s||g||(_?R.some((C,w)=>pi(C,S[w])):pi(R,S))){f&&f();const C=js;js=u;try{const w=[R,S===Oa?void 0:_&&S[0]===Oa?[]:S,d];S=R,l?l(e,3,w):e(...w)}finally{js=C}}}else u.run()};return a&&a(y),u=new s_(h),u.scheduler=o?()=>o(y,!1):y,d=M=>Jv(M,!1,u),f=u.onStop=()=>{const M=Ll.get(u);if(M){if(l)l(M,4);else for(const R of M)R();Ll.delete(u)}},e?n?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Xi(i,e=1/0,t){if(e<=0||!at(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,nn(i))Xi(i.value,e,t);else if(He(i))for(let n=0;n<i.length;n++)Xi(i[n],e,t);else if(qm(i)||Wr(i))i.forEach(n=>{Xi(n,e,t)});else if(Km(i)){for(const n in i)Xi(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Xi(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Aa(i,e,t,n){try{return n?i(...n):i()}catch(s){ac(s,e,t)}}function Mi(i,e,t,n){if(Ge(i)){const s=Aa(i,e,t,n);return s&&jm(s)&&s.catch(r=>{ac(r,e,t)}),s}if(He(i)){const s=[];for(let r=0;r<i.length;r++)s.push(Mi(i[r],e,t,n));return s}}function ac(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(r){$i(),Aa(r,null,10,[i,l,c]),Zi();return}}ex(i,t,s,n,o)}function ex(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const cn=[];let ci=-1;const Xr=[];let ps=null,Or=0;const E_=Promise.resolve();let Dl=null;function lc(i){const e=Dl||E_;return i?e.then(this?i.bind(this):i):e}function tx(i){let e=ci+1,t=cn.length;for(;e<t;){const n=e+t>>>1,s=cn[n],r=ca(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function rf(i){if(!(i.flags&1)){const e=ca(i),t=cn[cn.length-1];!t||!(i.flags&2)&&e>=ca(t)?cn.push(i):cn.splice(tx(e),0,i),i.flags|=1,T_()}}function T_(){Dl||(Dl=E_.then(A_))}function nx(i){He(i)?Xr.push(...i):ps&&i.id===-1?ps.splice(Or+1,0,i):i.flags&1||(Xr.push(i),i.flags|=1),T_()}function ld(i,e,t=ci+1){for(;t<cn.length;t++){const n=cn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;cn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function b_(i){if(Xr.length){const e=[...new Set(Xr)].sort((t,n)=>ca(t)-ca(n));if(Xr.length=0,ps){ps.push(...e);return}for(ps=e,Or=0;Or<ps.length;Or++){const t=ps[Or];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ps=null,Or=0}}const ca=i=>i.id==null?i.flags&2?-1:1/0:i.id;function A_(i){try{for(ci=0;ci<cn.length;ci++){const e=cn[ci];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Aa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ci<cn.length;ci++){const e=cn[ci];e&&(e.flags&=-2)}ci=-1,cn.length=0,b_(),Dl=null,(cn.length||Xr.length)&&A_()}}let Hn=null,w_=null;function Il(i){const e=Hn;return Hn=i,w_=i&&i.type.__scopeId||null,e}function ix(i,e=Hn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Ol(-1);const r=Il(e);let o;try{o=i(...s)}finally{Il(r),n._d&&Ol(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function cd(i,e){if(Hn===null)return i;const t=pc(Hn),n=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&(Ge(r)&&(r={mounted:r,updated:r}),r.deep&&Xi(o),n.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function Os(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&($i(),Mi(l,t,8,[i.el,a,i,e]),Zi())}}function _l(i,e){if(un){let t=un.provides;const n=un.parent&&un.parent.provides;n===t&&(t=un.provides=Object.create(n)),t[i]=e}}function Yi(i,e,t=!1){const n=ng();if(n||qr){let s=qr?qr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ge(e)?e.call(n&&n.proxy):e}}const sx=Symbol.for("v-scx"),rx=()=>Yi(sx);function sr(i,e,t){return R_(i,e,t)}function R_(i,e,t=ft){const{immediate:n,deep:s,flush:r,once:o}=t,a=$t({},t),l=e&&n||!e&&r!=="post";let c;if(ha){if(r==="sync"){const d=rx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=xi,d.resume=xi,d.pause=xi,d}}const u=un;a.call=(d,g,_)=>Mi(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{mn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():rf(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Qv(i,e,a);return ha&&(c?c.push(f):l&&f()),f}function ox(i,e,t){const n=this.proxy,s=It(i)?i.includes(".")?C_(n,i):()=>n[i]:i.bind(n,n);let r;Ge(e)?r=e:(r=e.handler,t=e);const o=wa(this),a=R_(s,r.bind(n),t);return o(),a}function C_(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const ax=Symbol("_vte"),lx=i=>i.__isTeleport,cx=Symbol("_leaveCb");function of(i,e){i.shapeFlag&6&&i.component?(i.transition=e,of(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function P_(i,e){return Ge(i)?$t({name:i.name},e,{setup:i}):i}function L_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function ud(i,e){let t;return!!((t=Object.getOwnPropertyDescriptor(i,e))&&!t.configurable)}const Nl=new WeakMap;function $o(i,e,t,n,s=!1){if(He(i)){i.forEach((_,p)=>$o(_,e&&(He(e)?e[p]:e),t,n,s));return}if(Zo(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&$o(i,e,t,n.component.subTree);return}const r=n.shapeFlag&4?pc(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,h=a.setupState,f=it(h),d=h===ft?Xm:_=>ud(u,_)?!1:st(f,_),g=(_,p)=>!(p&&ud(u,p));if(c!=null&&c!==l){if(hd(e),It(c))u[c]=null,d(c)&&(h[c]=null);else if(nn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ge(l))Aa(l,a,12,[o,u]);else{const _=It(l),p=nn(l);if(_||p){const m=()=>{if(i.f){const S=_?d(l)?h[l]:u[l]:g()||!i.k?l.value:u[i.k];if(s)He(S)&&jh(S,r);else if(He(S))S.includes(r)||S.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const y=[r];g(l,i.k)&&(l.value=y),i.k&&(u[i.k]=y)}}else _?(u[l]=o,d(l)&&(h[l]=o)):p&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const S=()=>{m(),Nl.delete(i)};S.id=-1,Nl.set(i,S),mn(S,t)}else hd(i),m()}}}function hd(i){const e=Nl.get(i);e&&(e.flags|=8,Nl.delete(i))}sc().requestIdleCallback;sc().cancelIdleCallback;const Zo=i=>!!i.type.__asyncLoader,D_=i=>i.type.__isKeepAlive;function ux(i,e){I_(i,"a",e)}function hx(i,e){I_(i,"da",e)}function I_(i,e,t=un){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(cc(e,n,t),t){let s=t.parent;for(;s&&s.parent;)D_(s.parent.vnode)&&fx(n,e,t,s),s=s.parent}}function fx(i,e,t,n){const s=cc(e,i,n,!0);N_(()=>{jh(n[e],s)},t)}function cc(i,e,t=un,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{$i();const a=wa(t),l=Mi(e,t,i,o);return a(),Zi(),l});return n?s.unshift(r):s.push(r),r}}const is=i=>(e,t=un)=>{(!ha||i==="sp")&&cc(i,(...n)=>e(...n),t)},dx=is("bm"),uc=is("m"),px=is("bu"),mx=is("u"),_x=is("bum"),N_=is("um"),gx=is("sp"),vx=is("rtg"),xx=is("rtc");function yx(i,e=un){cc("ec",i,e)}const Sx=Symbol.for("v-ndc");function Br(i,e,t,n){let s;const r=t,o=He(i);if(o||It(i)){const a=o&&ir(i);let l=!1,c=!1;a&&(l=!Xn(i),c=Ji(i),i=rc(i)),s=new Array(i.length);for(let u=0,h=i.length;u<h;u++)s[u]=e(l?c?no(ii(i[u])):ii(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=e(a+1,a,void 0,r)}else if(at(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(i[u],u,l,r)}}else s=[];return s}const Fu=i=>i?ig(i)?pc(i):Fu(i.parent):null,Jo=$t(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Fu(i.parent),$root:i=>Fu(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>O_(i),$forceUpdate:i=>i.f||(i.f=()=>{rf(i.update)}),$nextTick:i=>i.n||(i.n=lc.bind(i.proxy)),$watch:i=>ox.bind(i)}),Uc=(i,e)=>i!==ft&&!i.__isScriptSetup&&st(i,e),Mx={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Uc(n,e))return o[e]=1,n[e];if(s!==ft&&st(s,e))return o[e]=2,s[e];if(st(r,e))return o[e]=3,r[e];if(t!==ft&&st(t,e))return o[e]=4,t[e];Bu&&(o[e]=0)}}const c=Jo[e];let u,h;if(c)return e==="$attrs"&&en(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ft&&st(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,st(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Uc(s,e)?(s[e]=t,!0):n!==ft&&st(n,e)?(n[e]=t,!0):st(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||i!==ft&&a[0]!=="$"&&st(i,a)||Uc(e,a)||st(r,a)||st(n,a)||st(Jo,a)||st(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:st(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function fd(i){return He(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Bu=!0;function Ex(i){const e=O_(i),t=i.proxy,n=i.ctx;Bu=!1,e.beforeCreate&&dd(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:y,unmounted:M,render:R,renderTracked:C,renderTriggered:w,errorCaptured:D,serverPrefetch:T,expose:E,inheritAttrs:L,components:W,directives:H,filters:te}=e;if(c&&Tx(c,n,null),o)for(const j in o){const V=o[j];Ge(V)&&(n[j]=V.bind(t))}if(s){const j=s.call(t,t);at(j)&&(i.data=oc(j))}if(Bu=!0,r)for(const j in r){const V=r[j],ge=Ge(V)?V.bind(t,t):Ge(V.get)?V.get.bind(t,t):xi,xe=!Ge(V)&&Ge(V.set)?V.set.bind(t):xi,Me=$n({get:ge,set:xe});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Re=>Me.value=Re})}if(a)for(const j in a)U_(a[j],n,t,j);if(l){const j=Ge(l)?l.call(t):l;Reflect.ownKeys(j).forEach(V=>{_l(V,j[V])})}u&&dd(u,i,"c");function q(j,V){He(V)?V.forEach(ge=>j(ge.bind(t))):V&&j(V.bind(t))}if(q(dx,h),q(uc,f),q(px,d),q(mx,g),q(ux,_),q(hx,p),q(yx,D),q(xx,C),q(vx,w),q(_x,S),q(N_,M),q(gx,T),He(E))if(E.length){const j=i.exposed||(i.exposed={});E.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:ge=>t[V]=ge,enumerable:!0})})}else i.exposed||(i.exposed={});R&&i.render===xi&&(i.render=R),L!=null&&(i.inheritAttrs=L),W&&(i.components=W),H&&(i.directives=H),T&&L_(i)}function Tx(i,e,t=xi){He(i)&&(i=ku(i));for(const n in i){const s=i[n];let r;at(s)?"default"in s?r=Yi(s.from||n,s.default,!0):r=Yi(s.from||n):r=Yi(s),nn(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function dd(i,e,t){Mi(He(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function U_(i,e,t,n){let s=n.includes(".")?C_(t,n):()=>t[n];if(It(i)){const r=e[i];Ge(r)&&sr(s,r)}else if(Ge(i))sr(s,i.bind(t));else if(at(i))if(He(i))i.forEach(r=>U_(r,e,t,n));else{const r=Ge(i.handler)?i.handler.bind(t):e[i.handler];Ge(r)&&sr(s,r,i)}}function O_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Ul(l,c,o,!0)),Ul(l,e,o)),at(e)&&r.set(e,l),l}function Ul(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Ul(i,r,t,!0),s&&s.forEach(o=>Ul(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=bx[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const bx={data:pd,props:md,emits:md,methods:Vo,computed:Vo,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:Vo,directives:Vo,watch:wx,provide:pd,inject:Ax};function pd(i,e){return e?i?function(){return $t(Ge(i)?i.call(this,this):i,Ge(e)?e.call(this,this):e)}:e:i}function Ax(i,e){return Vo(ku(i),ku(e))}function ku(i){if(He(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function on(i,e){return i?[...new Set([].concat(i,e))]:e}function Vo(i,e){return i?$t(Object.create(null),i,e):e}function md(i,e){return i?He(i)&&He(e)?[...new Set([...i,...e])]:$t(Object.create(null),fd(i),fd(e??{})):e}function wx(i,e){if(!i)return e;if(!e)return i;const t=$t(Object.create(null),i);for(const n in e)t[n]=on(i[n],e[n]);return t}function F_(){return{app:null,config:{isNativeTag:Xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rx=0;function Cx(i,e){return function(n,s=null){Ge(n)||(n=$t({},n)),s!=null&&!at(s)&&(s=null);const r=F_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Rx++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:oy,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(c,...h)):Ge(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||St(n,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,pc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mi(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=qr;qr=c;try{return u()}finally{qr=h}}};return c}}let qr=null;const Px=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Qn(e)}Modifiers`]||i[`${hr(e)}Modifiers`];function Lx(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&Px(n,e.slice(7));o&&(o.trim&&(s=t.map(u=>It(u)?u.trim():u)),o.number&&(s=t.map(Sv)));let a,l=n[a=Cc(e)]||n[a=Cc(Qn(e))];!l&&r&&(l=n[a=Cc(hr(e))]),l&&Mi(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Mi(c,i,6,s)}}const Dx=new WeakMap;function B_(i,e,t=!1){const n=t?Dx:e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ge(i)){const l=c=>{const u=B_(c,e,!0);u&&(a=!0,$t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(at(i)&&n.set(i,null),null):(He(r)?r.forEach(l=>o[l]=null):$t(o,r),at(i)&&n.set(i,o),o)}function hc(i,e){return!i||!nc(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(i,e[0].toLowerCase()+e.slice(1))||st(i,hr(e))||st(i,e))}function _d(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=i,p=Il(i);let m,S;try{if(t.shapeFlag&4){const M=s||n,R=M;m=fi(c.call(R,M,u,h,d,f,g)),S=a}else{const M=e;m=fi(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),S=e.props?a:Ix(a)}}catch(M){Qo.length=0,ac(M,i,1),m=St(Rs)}let y=m;if(S&&_!==!1){const M=Object.keys(S),{shapeFlag:R}=y;M.length&&R&7&&(r&&M.some(qh)&&(S=Nx(S,r)),y=io(y,S,!1,!0))}return t.dirs&&(y=io(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&of(y,t.transition),m=y,Il(p),m}const Ix=i=>{let e;for(const t in i)(t==="class"||t==="style"||nc(t))&&((e||(e={}))[t]=i[t]);return e},Nx=(i,e)=>{const t={};for(const n in i)(!qh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Ux(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?gd(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(k_(o,n,f)&&!hc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?gd(n,o,c):!0:!!o;return!1}function gd(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(k_(e,i,r)&&!hc(t,r))return!0}return!1}function k_(i,e,t){const n=i[t],s=e[t];return t==="style"&&at(n)&&at(s)?!$h(n,s):n!==s}function Ox({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const z_={},H_=()=>Object.create(z_),V_=i=>Object.getPrototypeOf(i)===z_;function Fx(i,e,t,n=!1){const s={},r=H_();i.propsDefaults=Object.create(null),G_(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:v_(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Bx(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=it(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(hc(i.emitsOptions,f))continue;const d=e[f];if(l)if(st(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Qn(f);s[g]=zu(l,a,g,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{G_(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!st(e,h)&&((u=hr(h))===h||!st(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=zu(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!st(e,h))&&(delete r[h],c=!0)}c&&Wi(i.attrs,"set","")}function G_(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(jo(l))continue;const c=e[l];let u;s&&st(s,u=Qn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:hc(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=it(t),c=a||ft;for(let u=0;u<r.length;u++){const h=r[u];t[h]=zu(s,l,h,c[h],i,!st(c,h))}}return o}function zu(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=st(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const u=wa(s);n=c[t]=l.call(null,e),u()}}else n=l;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===hr(t))&&(n=!0))}return n}const kx=new WeakMap;function W_(i,e,t=!1){const n=t?kx:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ge(i)){const u=h=>{l=!0;const[f,d]=W_(h,e,!0);$t(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return at(i)&&n.set(i,Gr),Gr;if(He(r))for(let u=0;u<r.length;u++){const h=Qn(r[u]);vd(h)&&(o[h]=ft)}else if(r)for(const u in r){const h=Qn(u);if(vd(h)){const f=r[u],d=o[h]=He(f)||Ge(f)?{type:f}:$t({},f),g=d.type;let _=!1,p=!0;if(He(g))for(let m=0;m<g.length;++m){const S=g[m],y=Ge(S)&&S.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(p=!1)}else _=Ge(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||st(d,"default"))&&a.push(h)}}const c=[o,a];return at(i)&&n.set(i,c),c}function vd(i){return i[0]!=="$"&&!jo(i)}const af=i=>i==="_"||i==="_ctx"||i==="$stable",lf=i=>He(i)?i.map(fi):[fi(i)],zx=(i,e,t)=>{if(e._n)return e;const n=ix((...s)=>lf(e(...s)),t);return n._c=!1,n},X_=(i,e,t)=>{const n=i._ctx;for(const s in i){if(af(s))continue;const r=i[s];if(Ge(r))e[s]=zx(s,r,n);else if(r!=null){const o=lf(r);e[s]=()=>o}}},q_=(i,e)=>{const t=lf(e);i.slots.default=()=>t},j_=(i,e,t)=>{for(const n in e)(t||!af(n))&&(i[n]=e[n])},Hx=(i,e,t)=>{const n=i.slots=H_();if(i.vnode.shapeFlag&32){const s=e._;s?(j_(n,e,t),t&&Zm(n,"_",s,!0)):X_(e,n)}else e&&q_(i,e)},Vx=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=ft;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:j_(s,e,t):(r=!e.$stable,X_(e,s)),o=e}else e&&(q_(i,e),o={default:1});if(r)for(const a in s)!af(a)&&o[a]==null&&delete s[a]},mn=jx;function Gx(i){return Wx(i)}function Wx(i,e){const t=sc();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=xi,insertStaticContent:g}=i,_=(v,P,I,$=null,G=null,J=null,ie=void 0,ne=null,b=!!P.dynamicChildren)=>{if(v===P)return;v&&!Ro(v,P)&&($=B(v),Re(v,G,J,!0),v=null),P.patchFlag===-2&&(b=!1,P.dynamicChildren=null);const{type:x,ref:N,shapeFlag:k}=P;switch(x){case fc:p(v,P,I,$);break;case Rs:m(v,P,I,$);break;case gl:v==null&&S(P,I,$,ie);break;case Ht:W(v,P,I,$,G,J,ie,ne,b);break;default:k&1?R(v,P,I,$,G,J,ie,ne,b):k&6?H(v,P,I,$,G,J,ie,ne,b):(k&64||k&128)&&x.process(v,P,I,$,G,J,ie,ne,b,de)}N!=null&&G?$o(N,v&&v.ref,J,P||v,!P):N==null&&v&&v.ref!=null&&$o(v.ref,null,J,v,!0)},p=(v,P,I,$)=>{if(v==null)n(P.el=a(P.children),I,$);else{const G=P.el=v.el;P.children!==v.children&&c(G,P.children)}},m=(v,P,I,$)=>{v==null?n(P.el=l(P.children||""),I,$):P.el=v.el},S=(v,P,I,$)=>{[v.el,v.anchor]=g(v.children,P,I,$,v.el,v.anchor)},y=({el:v,anchor:P},I,$)=>{let G;for(;v&&v!==P;)G=f(v),n(v,I,$),v=G;n(P,I,$)},M=({el:v,anchor:P})=>{let I;for(;v&&v!==P;)I=f(v),s(v),v=I;s(P)},R=(v,P,I,$,G,J,ie,ne,b)=>{if(P.type==="svg"?ie="svg":P.type==="math"&&(ie="mathml"),v==null)C(P,I,$,G,J,ie,ne,b);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),T(v,P,G,J,ie,ne,b)}finally{x&&x._endPatch()}}},C=(v,P,I,$,G,J,ie,ne)=>{let b,x;const{props:N,shapeFlag:k,transition:X,dirs:Y}=v;if(b=v.el=o(v.type,J,N&&N.is,N),k&8?u(b,v.children):k&16&&D(v.children,b,null,$,G,Oc(v,J),ie,ne),Y&&Os(v,null,$,"created"),w(b,v,v.scopeId,ie,$),N){for(const ce in N)ce!=="value"&&!jo(ce)&&r(b,ce,null,N[ce],J,$);"value"in N&&r(b,"value",null,N.value,J),(x=N.onVnodeBeforeMount)&&ai(x,$,v)}Y&&Os(v,null,$,"beforeMount");const pe=Xx(G,X);pe&&X.beforeEnter(b),n(b,P,I),((x=N&&N.onVnodeMounted)||pe||Y)&&mn(()=>{x&&ai(x,$,v),pe&&X.enter(b),Y&&Os(v,null,$,"mounted")},G)},w=(v,P,I,$,G)=>{if(I&&d(v,I),$)for(let J=0;J<$.length;J++)d(v,$[J]);if(G){let J=G.subTree;if(P===J||Z_(J.type)&&(J.ssContent===P||J.ssFallback===P)){const ie=G.vnode;w(v,ie,ie.scopeId,ie.slotScopeIds,G.parent)}}},D=(v,P,I,$,G,J,ie,ne,b=0)=>{for(let x=b;x<v.length;x++){const N=v[x]=ne?Vi(v[x]):fi(v[x]);_(null,N,P,I,$,G,J,ie,ne)}},T=(v,P,I,$,G,J,ie)=>{const ne=P.el=v.el;let{patchFlag:b,dynamicChildren:x,dirs:N}=P;b|=v.patchFlag&16;const k=v.props||ft,X=P.props||ft;let Y;if(I&&Fs(I,!1),(Y=X.onVnodeBeforeUpdate)&&ai(Y,I,P,v),N&&Os(P,v,I,"beforeUpdate"),I&&Fs(I,!0),(k.innerHTML&&X.innerHTML==null||k.textContent&&X.textContent==null)&&u(ne,""),x?E(v.dynamicChildren,x,ne,I,$,Oc(P,G),J):ie||V(v,P,ne,null,I,$,Oc(P,G),J,!1),b>0){if(b&16)L(ne,k,X,I,G);else if(b&2&&k.class!==X.class&&r(ne,"class",null,X.class,G),b&4&&r(ne,"style",k.style,X.style,G),b&8){const pe=P.dynamicProps;for(let ce=0;ce<pe.length;ce++){const he=pe[ce],De=k[he],ue=X[he];(ue!==De||he==="value")&&r(ne,he,De,ue,G,I)}}b&1&&v.children!==P.children&&u(ne,P.children)}else!ie&&x==null&&L(ne,k,X,I,G);((Y=X.onVnodeUpdated)||N)&&mn(()=>{Y&&ai(Y,I,P,v),N&&Os(P,v,I,"updated")},$)},E=(v,P,I,$,G,J,ie)=>{for(let ne=0;ne<P.length;ne++){const b=v[ne],x=P[ne],N=b.el&&(b.type===Ht||!Ro(b,x)||b.shapeFlag&198)?h(b.el):I;_(b,x,N,null,$,G,J,ie,!0)}},L=(v,P,I,$,G)=>{if(P!==I){if(P!==ft)for(const J in P)!jo(J)&&!(J in I)&&r(v,J,P[J],null,G,$);for(const J in I){if(jo(J))continue;const ie=I[J],ne=P[J];ie!==ne&&J!=="value"&&r(v,J,ne,ie,G,$)}"value"in I&&r(v,"value",P.value,I.value,G)}},W=(v,P,I,$,G,J,ie,ne,b)=>{const x=P.el=v?v.el:a(""),N=P.anchor=v?v.anchor:a("");let{patchFlag:k,dynamicChildren:X,slotScopeIds:Y}=P;Y&&(ne=ne?ne.concat(Y):Y),v==null?(n(x,I,$),n(N,I,$),D(P.children||[],I,N,G,J,ie,ne,b)):k>0&&k&64&&X&&v.dynamicChildren&&v.dynamicChildren.length===X.length?(E(v.dynamicChildren,X,I,G,J,ie,ne),(P.key!=null||G&&P===G.subTree)&&Y_(v,P,!0)):V(v,P,I,N,G,J,ie,ne,b)},H=(v,P,I,$,G,J,ie,ne,b)=>{P.slotScopeIds=ne,v==null?P.shapeFlag&512?G.ctx.activate(P,I,$,ie,b):te(P,I,$,G,J,ie,b):Q(v,P,b)},te=(v,P,I,$,G,J,ie)=>{const ne=v.component=ey(v,$,G);if(D_(v)&&(ne.ctx.renderer=de),ty(ne,!1,ie),ne.asyncDep){if(G&&G.registerDep(ne,q,ie),!v.el){const b=ne.subTree=St(Rs);m(null,b,P,I),v.placeholder=b.el}}else q(ne,v,P,I,G,J,ie)},Q=(v,P,I)=>{const $=P.component=v.component;if(Ux(v,P,I))if($.asyncDep&&!$.asyncResolved){j($,P,I);return}else $.next=P,$.update();else P.el=v.el,$.vnode=P},q=(v,P,I,$,G,J,ie)=>{const ne=()=>{if(v.isMounted){let{next:k,bu:X,u:Y,parent:pe,vnode:ce}=v;{const ze=K_(v);if(ze){k&&(k.el=ce.el,j(v,k,ie)),ze.asyncDep.then(()=>{mn(()=>{v.isUnmounted||x()},G)});return}}let he=k,De;Fs(v,!1),k?(k.el=ce.el,j(v,k,ie)):k=ce,X&&Pc(X),(De=k.props&&k.props.onVnodeBeforeUpdate)&&ai(De,pe,k,ce),Fs(v,!0);const ue=_d(v),ye=v.subTree;v.subTree=ue,_(ye,ue,h(ye.el),B(ye),v,G,J),k.el=ue.el,he===null&&Ox(v,ue.el),Y&&mn(Y,G),(De=k.props&&k.props.onVnodeUpdated)&&mn(()=>ai(De,pe,k,ce),G)}else{let k;const{el:X,props:Y}=P,{bm:pe,m:ce,parent:he,root:De,type:ue}=v,ye=Zo(P);Fs(v,!1),pe&&Pc(pe),!ye&&(k=Y&&Y.onVnodeBeforeMount)&&ai(k,he,P),Fs(v,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(ue,v.parent?v.parent.type:void 0);const ze=v.subTree=_d(v);_(null,ze,I,$,v,G,J),P.el=ze.el}if(ce&&mn(ce,G),!ye&&(k=Y&&Y.onVnodeMounted)){const ze=P;mn(()=>ai(k,he,ze),G)}(P.shapeFlag&256||he&&Zo(he.vnode)&&he.vnode.shapeFlag&256)&&v.a&&mn(v.a,G),v.isMounted=!0,P=I=$=null}};v.scope.on();const b=v.effect=new s_(ne);v.scope.off();const x=v.update=b.run.bind(b),N=v.job=b.runIfDirty.bind(b);N.i=v,N.id=v.uid,b.scheduler=()=>rf(N),Fs(v,!0),x()},j=(v,P,I)=>{P.component=v;const $=v.vnode.props;v.vnode=P,v.next=null,Bx(v,P.props,$,I),Vx(v,P.children,I),$i(),ld(v),Zi()},V=(v,P,I,$,G,J,ie,ne,b=!1)=>{const x=v&&v.children,N=v?v.shapeFlag:0,k=P.children,{patchFlag:X,shapeFlag:Y}=P;if(X>0){if(X&128){xe(x,k,I,$,G,J,ie,ne,b);return}else if(X&256){ge(x,k,I,$,G,J,ie,ne,b);return}}Y&8?(N&16&&Ee(x,G,J),k!==x&&u(I,k)):N&16?Y&16?xe(x,k,I,$,G,J,ie,ne,b):Ee(x,G,J,!0):(N&8&&u(I,""),Y&16&&D(k,I,$,G,J,ie,ne,b))},ge=(v,P,I,$,G,J,ie,ne,b)=>{v=v||Gr,P=P||Gr;const x=v.length,N=P.length,k=Math.min(x,N);let X;for(X=0;X<k;X++){const Y=P[X]=b?Vi(P[X]):fi(P[X]);_(v[X],Y,I,null,G,J,ie,ne,b)}x>N?Ee(v,G,J,!0,!1,k):D(P,I,$,G,J,ie,ne,b,k)},xe=(v,P,I,$,G,J,ie,ne,b)=>{let x=0;const N=P.length;let k=v.length-1,X=N-1;for(;x<=k&&x<=X;){const Y=v[x],pe=P[x]=b?Vi(P[x]):fi(P[x]);if(Ro(Y,pe))_(Y,pe,I,null,G,J,ie,ne,b);else break;x++}for(;x<=k&&x<=X;){const Y=v[k],pe=P[X]=b?Vi(P[X]):fi(P[X]);if(Ro(Y,pe))_(Y,pe,I,null,G,J,ie,ne,b);else break;k--,X--}if(x>k){if(x<=X){const Y=X+1,pe=Y<N?P[Y].el:$;for(;x<=X;)_(null,P[x]=b?Vi(P[x]):fi(P[x]),I,pe,G,J,ie,ne,b),x++}}else if(x>X)for(;x<=k;)Re(v[x],G,J,!0),x++;else{const Y=x,pe=x,ce=new Map;for(x=pe;x<=X;x++){const Pe=P[x]=b?Vi(P[x]):fi(P[x]);Pe.key!=null&&ce.set(Pe.key,x)}let he,De=0;const ue=X-pe+1;let ye=!1,ze=0;const Ne=new Array(ue);for(x=0;x<ue;x++)Ne[x]=0;for(x=Y;x<=k;x++){const Pe=v[x];if(De>=ue){Re(Pe,G,J,!0);continue}let Ue;if(Pe.key!=null)Ue=ce.get(Pe.key);else for(he=pe;he<=X;he++)if(Ne[he-pe]===0&&Ro(Pe,P[he])){Ue=he;break}Ue===void 0?Re(Pe,G,J,!0):(Ne[Ue-pe]=x+1,Ue>=ze?ze=Ue:ye=!0,_(Pe,P[Ue],I,null,G,J,ie,ne,b),De++)}const be=ye?qx(Ne):Gr;for(he=be.length-1,x=ue-1;x>=0;x--){const Pe=pe+x,Ue=P[Pe],dt=P[Pe+1],U=Pe+1<N?dt.el||$_(dt):$;Ne[x]===0?_(null,Ue,I,U,G,J,ie,ne,b):ye&&(he<0||x!==be[he]?Me(Ue,I,U,2):he--)}}},Me=(v,P,I,$,G=null)=>{const{el:J,type:ie,transition:ne,children:b,shapeFlag:x}=v;if(x&6){Me(v.component.subTree,P,I,$);return}if(x&128){v.suspense.move(P,I,$);return}if(x&64){ie.move(v,P,I,de);return}if(ie===Ht){n(J,P,I);for(let k=0;k<b.length;k++)Me(b[k],P,I,$);n(v.anchor,P,I);return}if(ie===gl){y(v,P,I);return}if($!==2&&x&1&&ne)if($===0)ne.beforeEnter(J),n(J,P,I),mn(()=>ne.enter(J),G);else{const{leave:k,delayLeave:X,afterLeave:Y}=ne,pe=()=>{v.ctx.isUnmounted?s(J):n(J,P,I)},ce=()=>{J._isLeaving&&J[cx](!0),k(J,()=>{pe(),Y&&Y()})};X?X(J,pe,ce):ce()}else n(J,P,I)},Re=(v,P,I,$=!1,G=!1)=>{const{type:J,props:ie,ref:ne,children:b,dynamicChildren:x,shapeFlag:N,patchFlag:k,dirs:X,cacheIndex:Y}=v;if(k===-2&&(G=!1),ne!=null&&($i(),$o(ne,null,I,v,!0),Zi()),Y!=null&&(P.renderCache[Y]=void 0),N&256){P.ctx.deactivate(v);return}const pe=N&1&&X,ce=!Zo(v);let he;if(ce&&(he=ie&&ie.onVnodeBeforeUnmount)&&ai(he,P,v),N&6)le(v.component,I,$);else{if(N&128){v.suspense.unmount(I,$);return}pe&&Os(v,null,P,"beforeUnmount"),N&64?v.type.remove(v,P,I,de,$):x&&!x.hasOnce&&(J!==Ht||k>0&&k&64)?Ee(x,P,I,!1,!0):(J===Ht&&k&384||!G&&N&16)&&Ee(b,P,I),$&&je(v)}(ce&&(he=ie&&ie.onVnodeUnmounted)||pe)&&mn(()=>{he&&ai(he,P,v),pe&&Os(v,null,P,"unmounted")},I)},je=v=>{const{type:P,el:I,anchor:$,transition:G}=v;if(P===Ht){ee(I,$);return}if(P===gl){M(v);return}const J=()=>{s(I),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(v.shapeFlag&1&&G&&!G.persisted){const{leave:ie,delayLeave:ne}=G,b=()=>ie(I,J);ne?ne(v.el,J,b):b()}else J()},ee=(v,P)=>{let I;for(;v!==P;)I=f(v),s(v),v=I;s(P)},le=(v,P,I)=>{const{bum:$,scope:G,job:J,subTree:ie,um:ne,m:b,a:x}=v;xd(b),xd(x),$&&Pc($),G.stop(),J&&(J.flags|=8,Re(ie,v,P,I)),ne&&mn(ne,P),mn(()=>{v.isUnmounted=!0},P)},Ee=(v,P,I,$=!1,G=!1,J=0)=>{for(let ie=J;ie<v.length;ie++)Re(v[ie],P,I,$,G)},B=v=>{if(v.shapeFlag&6)return B(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const P=f(v.anchor||v.el),I=P&&P[ax];return I?f(I):P};let re=!1;const se=(v,P,I)=>{let $;v==null?P._vnode&&(Re(P._vnode,null,null,!0),$=P._vnode.component):_(P._vnode||null,v,P,null,null,null,I),P._vnode=v,re||(re=!0,ld($),b_(),re=!1)},de={p:_,um:Re,m:Me,r:je,mt:te,mc:D,pc:V,pbc:E,n:B,o:i};return{render:se,hydrate:void 0,createApp:Cx(se)}}function Oc({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Fs({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Xx(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Y_(i,e,t=!1){const n=i.children,s=e.children;if(He(n)&&He(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Vi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Y_(o,a)),a.type===fc&&(a.patchFlag===-1&&(a=s[r]=Vi(a)),a.el=o.el),a.type===Rs&&!a.el&&(a.el=o.el)}}function qx(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function K_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:K_(e)}function xd(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}function $_(i){if(i.placeholder)return i.placeholder;const e=i.component;return e?$_(e.subTree):null}const Z_=i=>i.__isSuspense;function jx(i,e){e&&e.pendingBranch?He(i)?e.effects.push(...i):e.effects.push(i):nx(i)}const Ht=Symbol.for("v-fgt"),fc=Symbol.for("v-txt"),Rs=Symbol.for("v-cmt"),gl=Symbol.for("v-stc"),Qo=[];let Ln=null;function mt(i=!1){Qo.push(Ln=i?null:[])}function Yx(){Qo.pop(),Ln=Qo[Qo.length-1]||null}let ua=1;function Ol(i,e=!1){ua+=i,i<0&&Ln&&e&&(Ln.hasOnce=!0)}function J_(i){return i.dynamicChildren=ua>0?Ln||Gr:null,Yx(),ua>0&&Ln&&Ln.push(i),i}function gt(i,e,t,n,s,r){return J_(fe(i,e,t,n,s,r,!0))}function Q_(i,e,t,n,s){return J_(St(i,e,t,n,s,!0))}function Fl(i){return i?i.__v_isVNode===!0:!1}function Ro(i,e){return i.type===e.type&&i.key===e.key}const eg=({key:i})=>i??null,vl=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?It(i)||nn(i)||Ge(i)?{i:Hn,r:i,k:e,f:!!t}:i:null);function fe(i,e=null,t=null,n=0,s=null,r=i===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&eg(e),ref:e&&vl(e),scopeId:w_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Hn};return a?(cf(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=It(t)?8:16),ua>0&&!o&&Ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ln.push(l),l}const St=Kx;function Kx(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Sx)&&(i=Rs),Fl(i)){const a=io(i,e,!0);return t&&cf(a,t),ua>0&&!r&&Ln&&(a.shapeFlag&6?Ln[Ln.indexOf(i)]=a:Ln.push(a)),a.patchFlag=-2,a}if(ry(i)&&(i=i.__vccOpts),e){e=$x(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=Es(a)),at(l)&&(sf(l)&&!He(l)&&(l=$t({},l)),e.style=Kh(l))}const o=It(i)?1:Z_(i)?128:lx(i)?64:at(i)?4:Ge(i)?2:0;return fe(i,e,t,n,s,o,r,!0)}function $x(i){return i?sf(i)||V_(i)?$t({},i):i:null}function io(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?Zx(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&eg(c),ref:e&&e.ref?t&&r?He(r)?r.concat(vl(e)):[r,vl(e)]:vl(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ht?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&io(i.ssContent),ssFallback:i.ssFallback&&io(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&of(u,l.clone(u)),u}function dc(i=" ",e=0){return St(fc,null,i,e)}function tg(i,e){const t=St(gl,null,i);return t.staticCount=e,t}function Fa(i="",e=!1){return e?(mt(),Q_(Rs,null,i)):St(Rs,null,i)}function fi(i){return i==null||typeof i=="boolean"?St(Rs):He(i)?St(Ht,null,i.slice()):Fl(i)?Vi(i):St(fc,null,String(i))}function Vi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:io(i)}function cf(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),cf(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!V_(e)?e._ctx=Hn:s===3&&Hn&&(Hn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Hn},t=32):(e=String(e),n&64?(t=16,e=[dc(e)]):t=8);i.children=e,i.shapeFlag|=t}function Zx(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Es([e.class,n.class]));else if(s==="style")e.style=Kh([e.style,n.style]);else if(nc(s)){const r=e[s],o=n[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function ai(i,e,t,n=null){Mi(i,e,7,[t,n])}const Jx=F_();let Qx=0;function ey(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Jx,r={uid:Qx++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new t_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:W_(n,s),emitsOptions:B_(n,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:n.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Lx.bind(null,r),i.ce&&i.ce(r),r}let un=null;const ng=()=>un||Hn;let Bl,Hu;{const i=sc(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Bl=e("__VUE_INSTANCE_SETTERS__",t=>un=t),Hu=e("__VUE_SSR_SETTERS__",t=>ha=t)}const wa=i=>{const e=un;return Bl(i),i.scope.on(),()=>{i.scope.off(),Bl(e)}},yd=()=>{un&&un.scope.off(),Bl(null)};function ig(i){return i.vnode.shapeFlag&4}let ha=!1;function ty(i,e=!1,t=!1){e&&Hu(e);const{props:n,children:s}=i.vnode,r=ig(i);Fx(i,n,r,e),Hx(i,s,t||e);const o=r?ny(i,e):void 0;return e&&Hu(!1),o}function ny(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Mx);const{setup:n}=t;if(n){$i();const s=i.setupContext=n.length>1?sy(i):null,r=wa(i),o=Aa(n,i,0,[i.props,s]),a=jm(o);if(Zi(),r(),(a||i.sp)&&!Zo(i)&&L_(i),a){if(o.then(yd,yd),e)return o.then(l=>{Sd(i,l)}).catch(l=>{ac(l,i,0)});i.asyncDep=o}else Sd(i,o)}else sg(i)}function Sd(i,e,t){Ge(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:at(e)&&(i.setupState=M_(e)),sg(i)}function sg(i,e,t){const n=i.type;i.render||(i.render=n.render||xi);{const s=wa(i);$i();try{Ex(i)}finally{Zi(),s()}}}const iy={get(i,e){return en(i,"get",""),i[e]}};function sy(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,iy),slots:i.slots,emit:i.emit,expose:e}}function pc(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(M_(x_(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Jo)return Jo[t](i)},has(e,t){return t in e||t in Jo}})):i.proxy}function ry(i){return Ge(i)&&"__vccOpts"in i}const $n=(i,e)=>Zv(i,e,ha);function rg(i,e,t){try{Ol(-1);const n=arguments.length;return n===2?at(e)&&!He(e)?Fl(e)?St(i,null,[e]):St(i,e):St(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Fl(t)&&(t=[t]),St(i,e,t))}finally{Ol(1)}}const oy="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vu;const Md=typeof window<"u"&&window.trustedTypes;if(Md)try{Vu=Md.createPolicy("vue",{createHTML:i=>i})}catch{}const og=Vu?i=>Vu.createHTML(i):i=>i,ay="http://www.w3.org/2000/svg",ly="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,Ed=ki&&ki.createElement("template"),cy={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?ki.createElementNS(ay,i):e==="mathml"?ki.createElementNS(ly,i):t?ki.createElement(i,{is:t}):ki.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ki.createTextNode(i),createComment:i=>ki.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ki.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ed.innerHTML=og(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Ed.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},uy=Symbol("_vtc");function hy(i,e,t){const n=i[uy];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const kl=Symbol("_vod"),ag=Symbol("_vsh"),Td={name:"show",beforeMount(i,{value:e},{transition:t}){i[kl]=i.style.display==="none"?"":i.style.display,t&&e?t.beforeEnter(i):Co(i,e)},mounted(i,{value:e},{transition:t}){t&&e&&t.enter(i)},updated(i,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(i),Co(i,!0),n.enter(i)):n.leave(i,()=>{Co(i,!1)}):Co(i,e))},beforeUnmount(i,{value:e}){Co(i,e)}};function Co(i,e){i.style.display=e?i[kl]:"none",i[ag]=!e}const fy=Symbol(""),dy=/(?:^|;)\s*display\s*:/;function py(i,e,t){const n=i.style,s=It(t);let r=!1;if(t&&!s){if(e)if(It(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&xl(n,a,"")}else for(const o in e)t[o]==null&&xl(n,o,"");for(const o in t)o==="display"&&(r=!0),xl(n,o,t[o])}else if(s){if(e!==t){const o=n[fy];o&&(t+=";"+o),n.cssText=t,r=dy.test(t)}}else e&&i.removeAttribute("style");kl in i&&(i[kl]=r?n.display:"",i[ag]&&(n.display="none"))}const bd=/\s*!important$/;function xl(i,e,t){if(He(t))t.forEach(n=>xl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=my(i,e);bd.test(t)?i.setProperty(hr(n),t.replace(bd,""),"important"):i[n]=t}}const Ad=["Webkit","Moz","ms"],Fc={};function my(i,e){const t=Fc[e];if(t)return t;let n=Qn(e);if(n!=="filter"&&n in i)return Fc[e]=n;n=$m(n);for(let s=0;s<Ad.length;s++){const r=Ad[s]+n;if(r in i)return Fc[e]=r}return e}const wd="http://www.w3.org/1999/xlink";function Rd(i,e,t,n,s,r=wv(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(wd,e.slice(6,e.length)):i.setAttributeNS(wd,e,t):t==null||r&&!Jm(t)?i.removeAttribute(e):i.setAttribute(e,r?"":Si(t)?String(t):t)}function Cd(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?og(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Jm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function _y(i,e,t,n){i.addEventListener(e,t,n)}function gy(i,e,t,n){i.removeEventListener(e,t,n)}const Pd=Symbol("_vei");function vy(i,e,t,n,s=null){const r=i[Pd]||(i[Pd]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=xy(e);if(n){const c=r[e]=My(n,s);_y(i,a,c,l)}else o&&(gy(i,a,o,l),r[e]=void 0)}}const Ld=/(?:Once|Passive|Capture)$/;function xy(i){let e;if(Ld.test(i)){e={};let n;for(;n=i.match(Ld);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):hr(i.slice(2)),e]}let Bc=0;const yy=Promise.resolve(),Sy=()=>Bc||(yy.then(()=>Bc=0),Bc=Date.now());function My(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Mi(Ey(n,t.value),e,5,[n])};return t.value=i,t.attached=Sy(),t}function Ey(i,e){if(He(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Dd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Ty=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?hy(i,n,o):e==="style"?py(i,t,n):nc(e)?qh(e)||vy(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):by(i,e,n,o))?(Cd(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rd(i,e,n,o,r,e!=="value")):i._isVueCE&&(Ay(i,e)||i._def.__asyncLoader&&(/[A-Z]/.test(e)||!It(n)))?Cd(i,Qn(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Rd(i,e,n,o))};function by(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Dd(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&i.tagName==="IFRAME"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dd(e)&&It(t)?!1:e in i}function Ay(i,e){const t=i._def.props;if(!t)return!1;const n=Qn(e);return Array.isArray(t)?t.some(s=>Qn(s)===n):Object.keys(t).some(s=>Qn(s)===n)}const wy=$t({patchProp:Ty},cy);let Id;function Ry(){return Id||(Id=Gx(wy))}const Cy=(...i)=>{const e=Ry().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=Ly(n);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Py(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Py(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Ly(i){return It(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Dy=Symbol();var Nd;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(Nd||(Nd={}));function Iy(){const i=n_(!0),e=i.run(()=>dn({}));let t=[],n=[];const s=x_({install(r){s._a=r,r.provide(Dy,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return this._a?t.push(r):n.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Fr=typeof document<"u";function lg(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Ny(i){return i.__esModule||i[Symbol.toStringTag]==="Module"||i.default&&lg(i.default)}const nt=Object.assign;function kc(i,e){const t={};for(const n in e){const s=e[n];t[n]=si(s)?s.map(i):i(s)}return t}const ea=()=>{},si=Array.isArray;function Ud(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}const cg=/#/g,Uy=/&/g,Oy=/\//g,Fy=/=/g,By=/\?/g,ug=/\+/g,ky=/%5B/g,zy=/%5D/g,hg=/%5E/g,Hy=/%60/g,fg=/%7B/g,Vy=/%7C/g,dg=/%7D/g,Gy=/%20/g;function uf(i){return i==null?"":encodeURI(""+i).replace(Vy,"|").replace(ky,"[").replace(zy,"]")}function Wy(i){return uf(i).replace(fg,"{").replace(dg,"}").replace(hg,"^")}function Gu(i){return uf(i).replace(ug,"%2B").replace(Gy,"+").replace(cg,"%23").replace(Uy,"%26").replace(Hy,"`").replace(fg,"{").replace(dg,"}").replace(hg,"^")}function Xy(i){return Gu(i).replace(Fy,"%3D")}function qy(i){return uf(i).replace(cg,"%23").replace(By,"%3F")}function jy(i){return qy(i).replace(Oy,"%2F")}function fa(i){if(i==null)return null;try{return decodeURIComponent(""+i)}catch{}return""+i}const Yy=/\/$/,Ky=i=>i.replace(Yy,"");function zc(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(n=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=i(r.slice(1))),a>=0&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Qy(n??e,t),{fullPath:n+r+o,path:n,query:s,hash:fa(o)}}function $y(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Od(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Zy(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&so(e.matched[n],t.matched[s])&&pg(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function so(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function pg(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(var t in i)if(!Jy(i[t],e[t]))return!1;return!0}function Jy(i,e){return si(i)?Fd(i,e):si(e)?Fd(e,i):(i==null?void 0:i.valueOf())===(e==null?void 0:e.valueOf())}function Fd(i,e){return si(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Qy(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const os={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Wu=function(i){return i.pop="pop",i.push="push",i}({}),Hc=function(i){return i.back="back",i.forward="forward",i.unknown="",i}({});function eS(i){if(!i)if(Fr){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Ky(i)}const tS=/^[^#]+#/;function nS(i,e){return i.replace(tS,"#")+e}function iS(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const mc=()=>({left:window.scrollX,top:window.scrollY});function sS(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=iS(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bd(i,e){return(history.state?history.state.position-e:-1)+i}const Xu=new Map;function rS(i,e){Xu.set(i,e)}function oS(i){const e=Xu.get(i);return Xu.delete(i),e}function aS(i){return typeof i=="string"||i&&typeof i=="object"}function mg(i){return typeof i=="string"||typeof i=="symbol"}let At=function(i){return i[i.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",i[i.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",i[i.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",i[i.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",i[i.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",i}({});const _g=Symbol("");At.MATCHER_NOT_FOUND+"",At.NAVIGATION_GUARD_REDIRECT+"",At.NAVIGATION_ABORTED+"",At.NAVIGATION_CANCELLED+"",At.NAVIGATION_DUPLICATED+"";function ro(i,e){return nt(new Error,{type:i,[_g]:!0},e)}function Li(i,e){return i instanceof Error&&_g in i&&(e==null||!!(i.type&e))}const lS=["params","query","hash"];function cS(i){if(typeof i=="string")return i;if(i.path!=null)return i.path;const e={};for(const t of lS)t in i&&(e[t]=i[t]);return JSON.stringify(e,null,2)}function uS(i){const e={};if(i===""||i==="?")return e;const t=(i[0]==="?"?i.slice(1):i).split("&");for(let n=0;n<t.length;++n){const s=t[n].replace(ug," "),r=s.indexOf("="),o=fa(r<0?s:s.slice(0,r)),a=r<0?null:fa(s.slice(r+1));if(o in e){let l=e[o];si(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function kd(i){let e="";for(let t in i){const n=i[t];if(t=Xy(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(si(n)?n.map(s=>s&&Gu(s)):[n&&Gu(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function hS(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=si(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const fS=Symbol(""),zd=Symbol(""),hf=Symbol(""),gg=Symbol(""),qu=Symbol("");function Po(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function ms(i,e,t,n,s,r=o=>o()){const o=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ro(At.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):aS(f)?l(ro(At.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&n.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>i.call(n&&n.instances[s],e,t,c));let h=Promise.resolve(u);i.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Vc(i,e,t,n,s=r=>r()){const r=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(lg(l)){const c=(l.__vccOpts||l)[e];c&&r.push(ms(c,t,n,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Ny(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&ms(f,t,n,o,a,s)()}))}}return r}function dS(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>so(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>so(c,l))||s.push(l))}return[t,n,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pS=()=>location.protocol+"//"+location.host;function vg(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let o=s.includes(i.slice(r))?i.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Od(a,"")}return Od(t,i)+n+s}function mS(i,e,t,n){let s=[],r=[],o=null;const a=({state:f})=>{const d=vg(i,location),g=t.value,_=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}p=_?f.position-_.position:0}else n(d);s.forEach(m=>{m(t.value,g,{delta:p,type:Wu.pop,direction:p?p>0?Hc.forward:Hc.back:Hc.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(nt({},f.state,{scroll:mc()}),"")}}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function Hd(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?mc():null}}function _S(i){const{history:e,location:t}=window,n={value:vg(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:pS()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){r(l,nt({},e.state,Hd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),n.value=l}function a(l,c){const u=nt({},s.value,e.state,{forward:l,scroll:mc()});r(u.current,u,!0),r(l,nt({},Hd(n.value,l,null),{position:u.position+1},c),!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function gS(i){i=eS(i);const e=_S(i),t=mS(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=nt({location:"",base:i,go:n,createHref:nS.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vS(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),gS(i)}let Js=function(i){return i[i.Static=0]="Static",i[i.Param=1]="Param",i[i.Group=2]="Group",i}({});var Ut=function(i){return i[i.Static=0]="Static",i[i.Param=1]="Param",i[i.ParamRegExp=2]="ParamRegExp",i[i.ParamRegExpEnd=3]="ParamRegExpEnd",i[i.EscapeNext=4]="EscapeNext",i}(Ut||{});const xS={type:Js.Static,value:""},yS=/[a-zA-Z0-9_]/;function SS(i){if(!i)return[[]];if(i==="/")return[[xS]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Ut.Static,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===Ut.Static?r.push({type:Js.Static,value:c}):t===Ut.Param||t===Ut.ParamRegExp||t===Ut.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Js.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==Ut.ParamRegExp){n=t,t=Ut.EscapeNext;continue}switch(t){case Ut.Static:l==="/"?(c&&h(),o()):l===":"?(h(),t=Ut.Param):f();break;case Ut.EscapeNext:f(),t=n;break;case Ut.Param:l==="("?t=Ut.ParamRegExp:yS.test(l)?f():(h(),t=Ut.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ut.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Ut.ParamRegExpEnd:u+=l;break;case Ut.ParamRegExpEnd:h(),t=Ut.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Ut.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}const Vd="[^/]+?",MS={sensitive:!1,strict:!1,start:!0,end:!0};var ln=function(i){return i[i._multiplier=10]="_multiplier",i[i.Root=90]="Root",i[i.Segment=40]="Segment",i[i.SubSegment=30]="SubSegment",i[i.Static=40]="Static",i[i.Dynamic=20]="Dynamic",i[i.BonusCustomRegExp=10]="BonusCustomRegExp",i[i.BonusWildcard=-50]="BonusWildcard",i[i.BonusRepeatable=-20]="BonusRepeatable",i[i.BonusOptional=-8]="BonusOptional",i[i.BonusStrict=.7000000000000001]="BonusStrict",i[i.BonusCaseSensitive=.25]="BonusCaseSensitive",i}(ln||{});const ES=/[.+*?^${}()[\]/\\]/g;function TS(i,e){const t=nt({},MS,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[ln.Root];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=ln.Segment+(t.sensitive?ln.BonusCaseSensitive:0);if(f.type===Js.Static)h||(s+="/"),s+=f.value.replace(ES,"\\$&"),d+=ln.Static;else if(f.type===Js.Param){const{value:g,repeatable:_,optional:p,regexp:m}=f;r.push({name:g,repeatable:_,optional:p});const S=m||Vd;if(S!==Vd){d+=ln.BonusCustomRegExp;try{`${S}`}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+M.message)}}let y=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(y=p&&c.length<2?`(?:/${y})`:"/"+y),p&&(y+="?"),s+=y,d+=ln.Dynamic,p&&(d+=ln.BonusOptional),_&&(d+=ln.BonusRepeatable),S===".*"&&(d+=ln.BonusWildcard)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=ln.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===Js.Static)u+=d.value;else if(d.type===Js.Param){const{value:g,repeatable:_,optional:p}=d,m=g in c?c[g]:"";if(si(m)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=si(m)?m.join("/"):m;if(!S)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function bS(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===ln.Static+ln.Segment?-1:1:i.length>e.length?e.length===1&&e[0]===ln.Static+ln.Segment?1:-1:0}function xg(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=bS(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Gd(n))return 1;if(Gd(s))return-1}return s.length-n.length}function Gd(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const AS={strict:!1,end:!0,sensitive:!1};function wS(i,e,t){const n=TS(SS(i.path),t),s=nt(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RS(i,e){const t=[],n=new Map;e=Ud(AS,e);function s(h){return n.get(h)}function r(h,f,d){const g=!d,_=Xd(h);_.aliasOf=d&&d.record;const p=Ud(e,h),m=[_];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const R of M)m.push(Xd(nt({},_,{components:d?d.record.components:_.components,path:R,aliasOf:d?d.record:_})))}let S,y;for(const M of m){const{path:R}=M;if(f&&R[0]!=="/"){const C=f.record.path,w=C[C.length-1]==="/"?"":"/";M.path=f.record.path+(R&&w+R)}if(S=wS(M,f,p),d?d.alias.push(S):(y=y||S,y!==S&&y.alias.push(S),g&&h.name&&!qd(S)&&o(h.name)),yg(S)&&l(S),_.children){const C=_.children;for(let w=0;w<C.length;w++)r(C[w],S,d&&d.children[w])}d=d||S}return y?()=>{o(y)}:ea}function o(h){if(mg(h)){const f=n.get(h);f&&(n.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&n.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=LS(h,t);t.splice(f,0,h),h.record.name&&!qd(h)&&n.set(h.record.name,h)}function c(h,f){let d,g={},_,p;if("name"in h&&h.name){if(d=n.get(h.name),!d)throw ro(At.MATCHER_NOT_FOUND,{location:h});p=d.record.name,g=nt(Wd(f.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),h.params&&Wd(h.params,d.keys.map(y=>y.name))),_=d.stringify(g)}else if(h.path!=null)_=h.path,d=t.find(y=>y.re.test(_)),d&&(g=d.parse(_),p=d.record.name);else{if(d=f.name?n.get(f.name):t.find(y=>y.re.test(f.path)),!d)throw ro(At.MATCHER_NOT_FOUND,{location:h,currentLocation:f});p=d.record.name,g=nt({},f.params,h.params),_=d.stringify(g)}const m=[];let S=d;for(;S;)m.unshift(S.record),S=S.parent;return{name:p,path:_,params:g,matched:m,meta:PS(m)}}i.forEach(h=>r(h));function u(){t.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Wd(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Xd(i){const e={path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:i.aliasOf,beforeEnter:i.beforeEnter,props:CS(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function CS(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function qd(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function PS(i){return i.reduce((e,t)=>nt(e,t.meta),{})}function LS(i,e){let t=0,n=e.length;for(;t!==n;){const r=t+n>>1;xg(i,e[r])<0?n=r:t=r+1}const s=DS(i);return s&&(n=e.lastIndexOf(s,n-1)),n}function DS(i){let e=i;for(;e=e.parent;)if(yg(e)&&xg(i,e)===0)return e}function yg({record:i}){return!!(i.name||i.components&&Object.keys(i.components).length||i.redirect)}function jd(i){const e=Yi(hf),t=Yi(gg),n=$n(()=>{const l=ti(i.to);return e.resolve(l)}),s=$n(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(so.bind(null,u));if(f>-1)return f;const d=Yd(l[c-2]);return c>1&&Yd(u)===d&&h[h.length-1].path!==d?h.findIndex(so.bind(null,l[c-2])):f}),r=$n(()=>s.value>-1&&FS(t.params,n.value.params)),o=$n(()=>s.value>-1&&s.value===t.matched.length-1&&pg(t.params,n.value.params));function a(l={}){if(OS(l)){const c=e[ti(i.replace)?"replace":"push"](ti(i.to)).catch(ea);return i.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:$n(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}function IS(i){return i.length===1?i[0]:i}const NS=P_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jd,setup(i,{slots:e}){const t=oc(jd(i)),{options:n}=Yi(hf),s=$n(()=>({[Kd(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Kd(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&IS(e.default(t));return i.custom?r:rg("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),US=NS;function OS(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function FS(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!si(s)||s.length!==n.length||n.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Yd(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Kd=(i,e,t)=>i??e??t,BS=P_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Yi(qu),s=$n(()=>i.route||n.value),r=Yi(zd,0),o=$n(()=>{let c=ti(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=$n(()=>s.value.matched[o.value]);_l(zd,$n(()=>o.value+1)),_l(fS,a),_l(qu,s);const l=dn();return sr(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!so(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return $d(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=rg(f,nt({},g,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return $d(t.default,{Component:p,route:c})||p}}});function $d(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Sg=BS;function kS(i){const e=RS(i.routes,i),t=i.parseQuery||uS,n=i.stringifyQuery||kd,s=i.history,r=Po(),o=Po(),a=Po(),l=y_(os);let c=os;Fr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kc.bind(null,B=>""+B),h=kc.bind(null,jy),f=kc.bind(null,fa);function d(B,re){let se,de;return mg(B)?(se=e.getRecordMatcher(B),de=re):de=B,e.addRoute(de,se)}function g(B){const re=e.getRecordMatcher(B);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(B=>B.record)}function p(B){return!!e.getRecordMatcher(B)}function m(B,re){if(re=nt({},re||l.value),typeof B=="string"){const I=zc(t,B,re.path),$=e.resolve({path:I.path},re),G=s.createHref(I.fullPath);return nt(I,$,{params:f($.params),hash:fa(I.hash),redirectedFrom:void 0,href:G})}let se;if(B.path!=null)se=nt({},B,{path:zc(t,B.path,re.path).path});else{const I=nt({},B.params);for(const $ in I)I[$]==null&&delete I[$];se=nt({},B,{params:h(I)}),re.params=h(re.params)}const de=e.resolve(se,re),Ce=B.hash||"";de.params=u(f(de.params));const v=$y(n,nt({},B,{hash:Wy(Ce),path:de.path})),P=s.createHref(v);return nt({fullPath:v,hash:Ce,query:n===kd?hS(B.query):B.query||{}},de,{redirectedFrom:void 0,href:P})}function S(B){return typeof B=="string"?zc(t,B,l.value.path):nt({},B)}function y(B,re){if(c!==B)return ro(At.NAVIGATION_CANCELLED,{from:re,to:B})}function M(B){return w(B)}function R(B){return M(nt(S(B),{replace:!0}))}function C(B,re){const se=B.matched[B.matched.length-1];if(se&&se.redirect){const{redirect:de}=se;let Ce=typeof de=="function"?de(B,re):de;return typeof Ce=="string"&&(Ce=Ce.includes("?")||Ce.includes("#")?Ce=S(Ce):{path:Ce},Ce.params={}),nt({query:B.query,hash:B.hash,params:Ce.path!=null?{}:B.params},Ce)}}function w(B,re){const se=c=m(B),de=l.value,Ce=B.state,v=B.force,P=B.replace===!0,I=C(se,de);if(I)return w(nt(S(I),{state:typeof I=="object"?nt({},Ce,I.state):Ce,force:v,replace:P}),re||se);const $=se;$.redirectedFrom=re;let G;return!v&&Zy(n,de,se)&&(G=ro(At.NAVIGATION_DUPLICATED,{to:$,from:de}),Me(de,de,!0,!1)),(G?Promise.resolve(G):E($,de)).catch(J=>Li(J)?Li(J,At.NAVIGATION_GUARD_REDIRECT)?J:xe(J):V(J,$,de)).then(J=>{if(J){if(Li(J,At.NAVIGATION_GUARD_REDIRECT))return w(nt({replace:P},S(J.to),{state:typeof J.to=="object"?nt({},Ce,J.to.state):Ce,force:v}),re||$)}else J=W($,de,!0,P,Ce);return L($,de,J),J})}function D(B,re){const se=y(B,re);return se?Promise.reject(se):Promise.resolve()}function T(B){const re=ee.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(B):B()}function E(B,re){let se;const[de,Ce,v]=dS(B,re);se=Vc(de.reverse(),"beforeRouteLeave",B,re);for(const I of de)I.leaveGuards.forEach($=>{se.push(ms($,B,re))});const P=D.bind(null,B,re);return se.push(P),Ee(se).then(()=>{se=[];for(const I of r.list())se.push(ms(I,B,re));return se.push(P),Ee(se)}).then(()=>{se=Vc(Ce,"beforeRouteUpdate",B,re);for(const I of Ce)I.updateGuards.forEach($=>{se.push(ms($,B,re))});return se.push(P),Ee(se)}).then(()=>{se=[];for(const I of v)if(I.beforeEnter)if(si(I.beforeEnter))for(const $ of I.beforeEnter)se.push(ms($,B,re));else se.push(ms(I.beforeEnter,B,re));return se.push(P),Ee(se)}).then(()=>(B.matched.forEach(I=>I.enterCallbacks={}),se=Vc(v,"beforeRouteEnter",B,re,T),se.push(P),Ee(se))).then(()=>{se=[];for(const I of o.list())se.push(ms(I,B,re));return se.push(P),Ee(se)}).catch(I=>Li(I,At.NAVIGATION_CANCELLED)?I:Promise.reject(I))}function L(B,re,se){a.list().forEach(de=>T(()=>de(B,re,se)))}function W(B,re,se,de,Ce){const v=y(B,re);if(v)return v;const P=re===os,I=Fr?history.state:{};se&&(de||P?s.replace(B.fullPath,nt({scroll:P&&I&&I.scroll},Ce)):s.push(B.fullPath,Ce)),l.value=B,Me(B,re,se,P),xe()}let H;function te(){H||(H=s.listen((B,re,se)=>{if(!le.listening)return;const de=m(B),Ce=C(de,le.currentRoute.value);if(Ce){w(nt(Ce,{replace:!0,force:!0}),de).catch(ea);return}c=de;const v=l.value;Fr&&rS(Bd(v.fullPath,se.delta),mc()),E(de,v).catch(P=>Li(P,At.NAVIGATION_ABORTED|At.NAVIGATION_CANCELLED)?P:Li(P,At.NAVIGATION_GUARD_REDIRECT)?(w(nt(S(P.to),{force:!0}),de).then(I=>{Li(I,At.NAVIGATION_ABORTED|At.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===Wu.pop&&s.go(-1,!1)}).catch(ea),Promise.reject()):(se.delta&&s.go(-se.delta,!1),V(P,de,v))).then(P=>{P=P||W(de,v,!1),P&&(se.delta&&!Li(P,At.NAVIGATION_CANCELLED)?s.go(-se.delta,!1):se.type===Wu.pop&&Li(P,At.NAVIGATION_ABORTED|At.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),L(de,v,P)}).catch(ea)}))}let Q=Po(),q=Po(),j;function V(B,re,se){xe(B);const de=q.list();return de.length?de.forEach(Ce=>Ce(B,re,se)):console.error(B),Promise.reject(B)}function ge(){return j&&l.value!==os?Promise.resolve():new Promise((B,re)=>{Q.add([B,re])})}function xe(B){return j||(j=!B,te(),Q.list().forEach(([re,se])=>B?se(B):re()),Q.reset()),B}function Me(B,re,se,de){const{scrollBehavior:Ce}=i;if(!Fr||!Ce)return Promise.resolve();const v=!se&&oS(Bd(B.fullPath,0))||(de||!se)&&history.state&&history.state.scroll||null;return lc().then(()=>Ce(B,re,v)).then(P=>P&&sS(P)).catch(P=>V(P,B,re))}const Re=B=>s.go(B);let je;const ee=new Set,le={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:_,resolve:m,options:i,push:M,replace:R,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:ge,install(B){B.component("RouterLink",US),B.component("RouterView",Sg),B.config.globalProperties.$router=le,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>ti(l)}),Fr&&!je&&l.value===os&&(je=!0,M(s.location).catch(de=>{}));const re={};for(const de in os)Object.defineProperty(re,de,{get:()=>l.value[de],enumerable:!0});B.provide(hf,le),B.provide(gg,v_(re)),B.provide(qu,l);const se=B.unmount;ee.add(B),B.unmount=function(){ee.delete(B),ee.size<1&&(c=os,H&&H(),H=null,l.value=os,je=!1,j=!1),se()}}};function Ee(B){return B.reduce((re,se)=>re.then(()=>T(se)),Promise.resolve())}return le}const zS={__name:"App",setup(i){return(e,t)=>(mt(),Q_(ti(Sg)))}};function HS(i){return i_()?(Cv(i),!0):!1}function VS(i){let e=!1,t;const n=n_(!0);return(...s)=>(e||(t=n.run(()=>i(...s)),e=!0),t)}function ff(i){return typeof i=="function"?i():ti(i)}const GS=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const WS=Object.prototype.toString,XS=i=>WS.call(i)==="[object Object]",qS=()=>{};function jS(i,e){function t(...n){return new Promise((s,r)=>{Promise.resolve(i(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(s).catch(r)})}return t}const Mg=i=>i();function YS(i=Mg){const e=dn(!0);function t(){e.value=!1}function n(){e.value=!0}return{isActive:Pl(e),pause:t,resume:n,eventFilter:(...r)=>{e.value&&i(...r)}}}function KS(i){return ng()}function $S(i,e,t={}){const{eventFilter:n=Mg,...s}=t;return sr(i,jS(n,e),s)}function ZS(i,e,t={}){const{eventFilter:n,...s}=t,{eventFilter:r,pause:o,resume:a,isActive:l}=YS(n);return{stop:$S(i,e,{...s,eventFilter:r}),pause:o,resume:a,isActive:l}}function JS(i,e=!0,t){KS()?uc(i,t):e?i():lc(i)}const ju=GS?window:void 0;function QS(i){var e;const t=ff(i);return(e=t==null?void 0:t.$el)!=null?e:t}function Zd(...i){let e,t,n,s;if(typeof i[0]=="string"||Array.isArray(i[0])?([t,n,s]=i,e=ju):[e,t,n,s]=i,!e)return qS;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,h,f,d)=>(u.addEventListener(h,f,d),()=>u.removeEventListener(h,f,d)),l=sr(()=>[QS(e),ff(s)],([u,h])=>{if(o(),!u)return;const f=XS(h)?{...h}:h;r.push(...t.flatMap(d=>n.map(g=>a(u,d,g,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return HS(c),c}const Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ka="__vueuse_ssr_handlers__",eM=tM();function tM(){return ka in Ba||(Ba[ka]=Ba[ka]||{}),Ba[ka]}function nM(i,e){return eM[i]||e}function iM(i){return i==null?"any":i instanceof Set?"set":i instanceof Map?"map":i instanceof Date?"date":typeof i=="boolean"?"boolean":typeof i=="string"?"string":typeof i=="object"?"object":Number.isNaN(i)?"any":"number"}const sM={boolean:{read:i=>i==="true",write:i=>String(i)},object:{read:i=>JSON.parse(i),write:i=>JSON.stringify(i)},number:{read:i=>Number.parseFloat(i),write:i=>String(i)},any:{read:i=>i,write:i=>String(i)},string:{read:i=>i,write:i=>String(i)},map:{read:i=>new Map(JSON.parse(i)),write:i=>JSON.stringify(Array.from(i.entries()))},set:{read:i=>new Set(JSON.parse(i)),write:i=>JSON.stringify(Array.from(i))},date:{read:i=>new Date(i),write:i=>i.toISOString()}},Jd="vueuse-storage";function rM(i,e,t,n={}){var s;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=ju,eventFilter:f,onError:d=E=>{console.error(E)},initOnMounted:g}=n,_=(u?y_:dn)(e);if(!t)try{t=nM("getDefaultStorage",()=>{var E;return(E=ju)==null?void 0:E.localStorage})()}catch(E){d(E)}if(!t)return _;const p=ff(e),m=iM(p),S=(s=n.serializer)!=null?s:sM[m],{pause:y,resume:M}=ZS(_,()=>C(_.value),{flush:r,deep:o,eventFilter:f});h&&a&&JS(()=>{t instanceof Storage?Zd(h,"storage",D):Zd(h,Jd,T),g&&D()}),g||D();function R(E,L){if(h){const W={key:i,oldValue:E,newValue:L,storageArea:t};h.dispatchEvent(t instanceof Storage?new StorageEvent("storage",W):new CustomEvent(Jd,{detail:W}))}}function C(E){try{const L=t.getItem(i);if(E==null)R(L,null),t.removeItem(i);else{const W=S.write(E);L!==W&&(t.setItem(i,W),R(L,W))}}catch(L){d(L)}}function w(E){const L=E?E.newValue:t.getItem(i);if(L==null)return l&&p!=null&&t.setItem(i,S.write(p)),p;if(!E&&c){const W=S.read(L);return typeof c=="function"?c(W,p):m==="object"&&!Array.isArray(W)?{...p,...W}:W}else return typeof L!="string"?L:S.read(L)}function D(E){if(!(E&&E.storageArea!==t)){if(E&&E.key==null){_.value=p;return}if(!(E&&E.key!==i)){y();try{(E==null?void 0:E.newValue)!==S.write(_.value)&&(_.value=w(E))}catch(L){d(L)}finally{E?lc(M):M()}}}}function T(E){D(E.detail)}return _}const Eg=VS(()=>{const i=rM("theme","dark",localStorage);document.body.setAttribute("data-theme",i.value);function e(){i.value=i.value==="light"?"dark":"light",document.body.setAttribute("data-theme",i.value)}return{theme:i,toggleTheme:e}}),Is=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},oM={class:"nav container"},aM={class:"nav__list grid"},lM=["href","onClick"],cM={class:"nav__btns"},uM={__name:"AppNav",setup(i){const{theme:e,toggleTheme:t}=Eg(),n=dn(!1),s=dn([{name:"主页",href:"#home",icon:"fa-solid fa-house"},{name:"关于",href:"#about",icon:"fa-regular fa-address-card"},{name:"技能",href:"#skills",icon:"fa-solid fa-kitchen-set"},{name:"联系方式",href:"#contact",icon:"fa-solid fa-tty"}]),r=(o,a)=>{var u;o.preventDefault();const l=a.substring(1),c=document.getElementById(l);if(c){const h=((u=document.querySelector(".header"))==null?void 0:u.offsetHeight)||0,f=c.offsetTop-h;window.scrollTo({top:f,behavior:"smooth"}),n.value=!1}};return(o,a)=>(mt(),gt("nav",oM,[a[4]||(a[4]=fe("a",{href:"#",class:"nav__logo"},"个人网站",-1)),fe("div",{class:Es(["nav__menu",n.value?"nav__menu--show":""])},[fe("ul",aM,[(mt(!0),gt(Ht,null,Br(s.value,l=>(mt(),gt("li",{class:"nav__item",key:l.name},[fe("a",{href:l.href,class:"nav__link",onClick:c=>r(c,l.href)},[fe("i",{class:Es(["nav__icon",[l.icon]])},null,2),fe("p",null,_n(l.name),1)],8,lM)]))),128))]),fe("i",{class:"fa-solid fa-xmark nav__close nav__icon",onClick:a[0]||(a[0]=l=>n.value=!1)})],2),fe("div",cM,[fe("i",{class:Es(["fa-regular",ti(e)==="dark"?"fa-sun":"fa-moon","nav__theme"]),id:"theme-button",onClick:a[1]||(a[1]=(...l)=>ti(t)&&ti(t)(...l))},null,2),fe("div",{class:"nav__toggle",onClick:a[2]||(a[2]=l=>n.value=!0)},[...a[3]||(a[3]=[fe("i",{class:"fa-solid fa-bars"},null,-1)])])])]))}},hM=Is(uM,[["__scopeId","data-v-f98cc3cc"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const df="168",jr={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fM=0,Qd=1,dM=2,Tg=1,bg=2,Bi=3,Qi=0,xn=1,mi=2,Ts=0,Yr=1,ep=2,tp=3,np=4,pM=5,$s=100,mM=101,_M=102,gM=103,vM=104,xM=200,yM=201,SM=202,MM=203,Yu=204,Ku=205,EM=206,TM=207,bM=208,AM=209,wM=210,RM=211,CM=212,PM=213,LM=214,DM=0,IM=1,NM=2,zl=3,UM=4,OM=5,FM=6,BM=7,Ag=0,kM=1,zM=2,bs=0,HM=1,VM=2,GM=3,WM=4,XM=5,qM=6,jM=7,ip="attached",YM="detached",wg=300,oo=301,ao=302,$u=303,Zu=304,_c=306,lo=1e3,vs=1001,Hl=1002,jt=1003,Rg=1004,Go=1005,hn=1006,yl=1007,qi=1008,es=1009,Cg=1010,Pg=1011,da=1012,pf=1013,cr=1014,Jn=1015,Ra=1016,mf=1017,_f=1018,co=1020,Lg=35902,Dg=1021,Ig=1022,Vn=1023,Ng=1024,Ug=1025,Kr=1026,uo=1027,gf=1028,vf=1029,Og=1030,xf=1031,yf=1033,Sl=33776,Ml=33777,El=33778,Tl=33779,Ju=35840,Qu=35841,eh=35842,th=35843,nh=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,lh=37811,ch=37812,uh=37813,hh=37814,fh=37815,dh=37816,ph=37817,mh=37818,_h=37819,gh=37820,vh=37821,bl=36492,xh=36494,yh=36495,Fg=36283,Sh=36284,Mh=36285,Eh=36286,pa=2300,ma=2301,Gc=2302,sp=2400,rp=2401,op=2402,KM=2500,$M=0,Bg=1,Th=2,ZM=3200,JM=3201,kg=0,QM=1,gs="",Ot="srgb",Vt="srgb-linear",Sf="display-p3",gc="display-p3-linear",Vl="linear",_t="srgb",Gl="rec709",Wl="p3",gr=7680,ap=519,eE=512,tE=513,nE=514,zg=515,iE=516,sE=517,rE=518,oE=519,bh=35044,lp="300 es",ji=2e3,Xl=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cp=1234567;const ta=Math.PI/180,ho=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Mf(i,e){return(i%e+e)%e}function aE(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lE(i,e,t){return i!==e?(t-i)/(e-i):0}function na(i,e,t){return(1-t)*i+t*e}function cE(i,e,t,n){return na(i,e,1-Math.exp(-t*n))}function uE(i,e=1){return e-Math.abs(Mf(i,e*2)-e)}function hE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pE(i,e){return i+Math.random()*(e-i)}function mE(i){return i*(.5-Math.random())}function _E(i){i!==void 0&&(cp=i);let e=cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gE(i){return i*ta}function vE(i){return i*ho}function xE(i){return(i&i-1)===0&&i!==0}function yE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function SE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ME(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hg={DEG2RAD:ta,RAD2DEG:ho,generateUUID:ni,clamp:qt,euclideanModulo:Mf,mapLinear:aE,inverseLerp:lE,lerp:na,damp:cE,pingpong:uE,smoothstep:hE,smootherstep:fE,randInt:dE,randFloat:pE,randFloatSpread:mE,seededRandom:_E,degToRad:gE,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:yE,floorPowerOfTwo:SE,setQuaternionFromProperEuler:ME,normalize:rt,denormalize:Zn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],S=s[1],y=s[4],M=s[7],R=s[2],C=s[5],w=s[8];return r[0]=o*_+a*S+l*R,r[3]=o*p+a*y+l*C,r[6]=o*m+a*M+l*w,r[1]=c*_+u*S+h*R,r[4]=c*p+u*y+h*C,r[7]=c*m+u*M+h*w,r[2]=f*_+d*S+g*R,r[5]=f*p+d*y+g*C,r[8]=f*m+d*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new Xe;function Vg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function EE(){const i=_a("canvas");return i.style.display="block",i}const up={};function $r(i){i in up||(up[i]=!0,console.warn(i))}function TE(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const hp=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fp=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[Vt]:{transfer:Vl,primaries:Gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ot]:{transfer:_t,primaries:Gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[gc]:{transfer:Vl,primaries:Wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(fp),fromReference:i=>i.applyMatrix3(hp)},[Sf]:{transfer:_t,primaries:Wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(fp),fromReference:i=>i.applyMatrix3(hp).convertLinearToSRGB()}},bE=new Set([Vt,gc]),Ze={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Lo[e].toReference,s=Lo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Lo[i].primaries},getTransfer:function(i){return i===gs?Vl:Lo[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Lo[e].luminanceCoefficients)}};function Zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vr;class AE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=_a("canvas")),vr.width=e.width,vr.height=e.height;const n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zr(t[n]/255)*255):t[n]=Zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class Gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qc(s[o].image)):r.push(qc(s[o]))}else r=qc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?AE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;class Ft extends fr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=vs,s=vs,r=hn,o=qi,a=Vn,l=es,c=Ft.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=ni(),this.name="",this.source=new Gg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=wg;Ft.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(d+1)/2,R=(m+1)/2,C=(u+f)/4,w=(h+_)/4,D=(g+p)/4;return y>M&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=w/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=D/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends CE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wg extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PE extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,m*S);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}const M=a*S;if(l=l*p+f*M,c=c*p+d*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new O,dp=new Ei;class ss{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),Ha.subVectors(this.max,Do),xr.subVectors(e.a,Do),yr.subVectors(e.b,Do),Sr.subVectors(e.c,Do),as.subVectors(yr,xr),ls.subVectors(Sr,yr),Bs.subVectors(xr,Sr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Bs.z,Bs.y,as.z,0,-as.x,ls.z,0,-ls.x,Bs.z,0,-Bs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Bs.y,Bs.x,0];return!Yc(t,xr,yr,Sr,Ha)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,xr,yr,Sr,Ha))?!1:(Va.crossVectors(as,ls),t=[Va.x,Va.y,Va.z],Yc(t,xr,yr,Sr,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,za=new ss,xr=new O,yr=new O,Sr=new O,as=new O,ls=new O,Bs=new O,Do=new O,Ha=new O,Va=new O,ks=new O;function Yc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ks.fromArray(i,r);const a=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),u=n.dot(ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const LE=new ss,Io=new O,Kc=new O;class Ai{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):LE.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Io,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Kc)),this.expandByPoint(Io.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new O,$c=new O,Ga=new O,cs=new O,Zc=new O,Wa=new O,Jc=new O;class Ca{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$c.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),cs.copy(this.origin).sub($c);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=cs.dot(this.direction),l=-cs.dot(Ga),c=cs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($c).addScaledVector(Ga,f),d}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){Zc.subVectors(t,e),Wa.subVectors(n,e),Jc.crossVectors(Zc,Wa);let o=this.direction.dot(Jc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(cs,Wa));if(l<0)return null;const c=a*this.direction.dot(Zc.cross(cs));if(c<0||l+c>o)return null;const u=-a*cs.dot(Jc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DE,e,IE)}lookAt(e,t,n){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),us.crossVectors(n,wn),us.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),us.crossVectors(n,wn)),us.normalize(),Xa.crossVectors(wn,us),s[0]=us.x,s[4]=Xa.x,s[8]=wn.x,s[1]=us.y,s[5]=Xa.y,s[9]=wn.y,s[2]=us.z,s[6]=Xa.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],y=n[7],M=n[11],R=n[15],C=s[0],w=s[4],D=s[8],T=s[12],E=s[1],L=s[5],W=s[9],H=s[13],te=s[2],Q=s[6],q=s[10],j=s[14],V=s[3],ge=s[7],xe=s[11],Me=s[15];return r[0]=o*C+a*E+l*te+c*V,r[4]=o*w+a*L+l*Q+c*ge,r[8]=o*D+a*W+l*q+c*xe,r[12]=o*T+a*H+l*j+c*Me,r[1]=u*C+h*E+f*te+d*V,r[5]=u*w+h*L+f*Q+d*ge,r[9]=u*D+h*W+f*q+d*xe,r[13]=u*T+h*H+f*j+d*Me,r[2]=g*C+_*E+p*te+m*V,r[6]=g*w+_*L+p*Q+m*ge,r[10]=g*D+_*W+p*q+m*xe,r[14]=g*T+_*H+p*j+m*Me,r[3]=S*C+y*E+M*te+R*V,r[7]=S*w+y*L+M*Q+R*ge,r[11]=S*D+y*W+M*q+R*xe,r[15]=S*T+y*H+M*j+R*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,y=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,R=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,C=t*S+n*y+s*M+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=S*w,e[1]=(_*f*r-h*p*r-_*s*d+n*p*d+h*s*m-n*f*m)*w,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*w,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*w,e[4]=y*w,e[5]=(u*p*r-g*f*r+g*s*d-t*p*d-u*s*m+t*f*m)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*w,e[8]=M*w,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*m-t*h*m)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=R*w,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*p+t*h*p)*w,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,p=o*h,m=a*h,S=l*c,y=l*u,M=l*h,R=n.x,C=n.y,w=n.z;return s[0]=(1-(_+m))*R,s[1]=(d+M)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(d-M)*C,s[5]=(1-(f+m))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(g+y)*w,s[9]=(p-S)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Mr.set(s[0],s[1],s[2]).length();const o=Mr.set(s[4],s[5],s[6]).length(),a=Mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);const c=1/r,u=1/o,h=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ji){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===ji)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ji){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u;let g,_;if(a===ji)g=(o+r)*h,_=-2*h;else if(a===Xl)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mr=new O,Yn=new qe,DE=new O(0,0,0),IE=new O(1,1,1),us=new O,Xa=new O,wn=new O,pp=new qe,mp=new Ei;class Ti{constructor(e=0,t=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NE=0;const _p=new O,Er=new Ei,Ni=new qe,qa=new O,No=new O,UE=new O,OE=new Ei,gp=new O(1,0,0),vp=new O(0,1,0),xp=new O(0,0,1),yp={type:"added"},FE={type:"removed"},Tr={type:"childadded",child:null},Qc={type:"childremoved",child:null};class Et extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new O,t=new Ti,n=new Ei,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Xe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(gp,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(xp,e)}translateOnAxis(e,t){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gp,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(No,qa,this.up):Ni.lookAt(qa,No,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(Ni),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yp),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FE),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yp),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new O(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new O,Ui=new O,eu=new O,Oi=new O,br=new O,Ar=new O,Sp=new O,tu=new O,nu=new O,iu=new O;class _i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Ui.subVectors(n,t),eu.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ui),l=Kn.dot(eu),c=Ui.dot(Ui),u=Ui.dot(eu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Ui.subVectors(e,t),Kn.cross(Ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Kn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;br.subVectors(s,n),Ar.subVectors(r,n),tu.subVectors(e,n);const l=br.dot(tu),c=Ar.dot(tu);if(l<=0&&c<=0)return t.copy(n);nu.subVectors(e,s);const u=br.dot(nu),h=Ar.dot(nu);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(br,o);iu.subVectors(e,r);const d=br.dot(iu),g=Ar.dot(iu);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ar,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Sp.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Sp,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(br,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},ja={h:0,s:0,l:0};function su(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Mf(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=su(o,r,e+1/3),this.g=su(o,r,e),this.b=su(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=qg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ze.fromWorkingColorSpace(Jt.copy(this),e),Math.round(qt(Jt.r*255,0,255))*65536+Math.round(qt(Jt.g*255,0,255))*256+Math.round(qt(Jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ot){Ze.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,s=Jt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(ja);const n=na(hs.h,ja.h,t),s=na(hs.s,ja.s,t),r=na(hs.l,ja.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ve;Ve.NAMES=qg;let BE=0;class yi extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Yr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=Ku,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ku&&(n.blendDst=this.blendDst),this.blendEquation!==$s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ap&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qs extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new O,Ya=new Oe;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $r("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}}class jg extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yg extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ki extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kE=0;const Bn=new qe,ru=new Et,wr=new O,Rn=new ss,Uo=new ss,zt=new O;class ri extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vg(e)?Yg:jg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Rn.min,Uo.min),Rn.expandByPoint(zt),zt.addVectors(Rn.max,Uo.max),Rn.expandByPoint(zt)):(Rn.expandByPoint(Uo.min),Rn.expandByPoint(Uo.max))}Rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(wr.fromBufferAttribute(e,c),zt.add(wr)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new O,l[D]=new O;const c=new O,u=new O,h=new O,f=new Oe,d=new Oe,g=new Oe,_=new O,p=new O;function m(D,T,E){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(_),a[T].add(_),a[E].add(_),l[D].add(p),l[T].add(p),l[E].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,T=S.length;D<T;++D){const E=S[D],L=E.start,W=E.count;for(let H=L,te=L+W;H<te;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new O,M=new O,R=new O,C=new O;function w(D){R.fromBufferAttribute(s,D),C.copy(R);const T=a[D];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(C,T);const L=M.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,T=S.length;D<T;++D){const E=S[D],L=E.start,W=E.count;for(let H=L,te=L+W;H<te;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mp=new qe,zs=new Ca,Ka=new Ai,Ep=new O,Rr=new O,Cr=new O,Pr=new O,ou=new O,$a=new O,Za=new Oe,Ja=new Oe,Qa=new Oe,Tp=new O,bp=new O,Ap=new O,el=new O,tl=new O;class vn extends Et{constructor(e=new ri,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ou.fromBufferAttribute(h,e),o?$a.addScaledVector(ou,u):$a.addScaledVector(ou.sub(t),u))}t.add($a)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Ka.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Ka,Ep)===null||zs.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(Mp.copy(r).invert(),zs.copy(e.ray).applyMatrix4(Mp),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,R=y;M<R;M+=3){const C=a.getX(M),w=a.getX(M+1),D=a.getX(M+2);s=nl(this,m,e,n,c,u,h,C,w,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);s=nl(this,o,e,n,c,u,h,S,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,R=y;M<R;M+=3){const C=M,w=M+1,D=M+2;s=nl(this,m,e,n,c,u,h,C,w,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,M=p+2;s=nl(this,o,e,n,c,u,h,S,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function zE(i,e,t,n,s,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Qi,a),l===null)return null;tl.copy(a),tl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:i}}function nl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Pr);const u=zE(i,e,t,n,Rr,Cr,Pr,el);if(u){s&&(Za.fromBufferAttribute(s,a),Ja.fromBufferAttribute(s,l),Qa.fromBufferAttribute(s,c),u.uv=_i.getInterpolation(el,Rr,Cr,Pr,Za,Ja,Qa,new Oe)),r&&(Za.fromBufferAttribute(r,a),Ja.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,c),u.uv1=_i.getInterpolation(el,Rr,Cr,Pr,Za,Ja,Qa,new Oe)),o&&(Tp.fromBufferAttribute(o,a),bp.fromBufferAttribute(o,l),Ap.fromBufferAttribute(o,c),u.normal=_i.getInterpolation(el,Rr,Cr,Pr,Tp,bp,Ap,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};_i.getNormal(Rr,Cr,Pr,h.normal),u.face=h}return u}class Eo extends ri{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(h,2));function g(_,p,m,S,y,M,R,C,w,D,T){const E=M/w,L=R/D,W=M/2,H=R/2,te=C/2,Q=w+1,q=D+1;let j=0,V=0;const ge=new O;for(let xe=0;xe<q;xe++){const Me=xe*L-H;for(let Re=0;Re<Q;Re++){const je=Re*E-W;ge[_]=je*S,ge[p]=Me*y,ge[m]=te,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[p]=0,ge[m]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(Re/w),h.push(1-xe/D),j+=1}}for(let xe=0;xe<D;xe++)for(let Me=0;Me<w;Me++){const Re=f+Me+Q*xe,je=f+Me+Q*(xe+1),ee=f+(Me+1)+Q*(xe+1),le=f+(Me+1)+Q*xe;l.push(Re,je,le),l.push(je,ee,le),V+=6}a.addGroup(d,V,T),d+=V,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=fo(i[t]);for(const s in n)e[s]=n[s]}return e}function HE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const VE={clone:fo,merge:an};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=WE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=HE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $g extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new O,wp=new Oe,Rp=new Oe;class gn extends $g{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,wp,Rp),t.subVectors(Rp,wp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Dr=1;class XE extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Lr,Dr,e,t);s.layers=this.layers,this.add(s);const r=new gn(Lr,Dr,e,t);r.layers=this.layers,this.add(r);const o=new gn(Lr,Dr,e,t);o.layers=this.layers,this.add(o);const a=new gn(Lr,Dr,e,t);a.layers=this.layers,this.add(a);const l=new gn(Lr,Dr,e,t);l.layers=this.layers,this.add(l);const c=new gn(Lr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zg extends Ft{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oo,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qE extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Eo(5,5,5),r=new Cs({name:"CubemapFromEquirect",uniforms:fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Ts});r.uniforms.tEquirect.value=t;const o=new vn(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=hn),new XE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const au=new O,jE=new O,YE=new Xe;class _s{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=au.subVectors(n,t).cross(jE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(au),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||YE.getNormalMatrix(e),s=this.coplanarPoint(au).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new Ai,il=new O;class Ef{constructor(e=new _s,t=new _s,n=new _s,s=new _s,r=new _s,o=new _s){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],S=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,p-d,M-m).normalize(),n[1].setComponents(l+r,f+c,p+d,M+m).normalize(),n[2].setComponents(l+o,f+u,p+g,M+S).normalize(),n[3].setComponents(l-o,f-u,p-g,M-S).normalize(),n[4].setComponents(l-a,f-h,p-_,M-y).normalize(),t===ji)n[5].setComponents(l+a,f+h,p+_,M+y).normalize();else if(t===Xl)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(il.x=s.normal.x>0?e.max.x:e.min.x,il.y=s.normal.y>0?e.max.y:e.min.y,il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jg(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function KE(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&f.length===0&&i.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class vc extends ri{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let y=0;y<c;y++){const M=y*h-r;g.push(M,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,M=S+c*(m+1),R=S+1+c*(m+1),C=S+1+c*m;d.push(y,M,C),d.push(M,R,C)}this.setIndex(d),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(_,3)),this.setAttribute("uv",new Ki(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ST=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AT="gl_FragColor = linearToOutputTexel( gl_FragColor );",wT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:$E,alphahash_pars_fragment:ZE,alphamap_fragment:JE,alphamap_pars_fragment:QE,alphatest_fragment:eT,alphatest_pars_fragment:tT,aomap_fragment:nT,aomap_pars_fragment:iT,batching_pars_vertex:sT,batching_vertex:rT,begin_vertex:oT,beginnormal_vertex:aT,bsdfs:lT,iridescence_fragment:cT,bumpmap_pars_fragment:uT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:dT,clipping_planes_vertex:pT,color_fragment:mT,color_pars_fragment:_T,color_pars_vertex:gT,color_vertex:vT,common:xT,cube_uv_reflection_fragment:yT,defaultnormal_vertex:ST,displacementmap_pars_vertex:MT,displacementmap_vertex:ET,emissivemap_fragment:TT,emissivemap_pars_fragment:bT,colorspace_fragment:AT,colorspace_pars_fragment:wT,envmap_fragment:RT,envmap_common_pars_fragment:CT,envmap_pars_fragment:PT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:VT,envmap_vertex:DT,fog_vertex:IT,fog_pars_vertex:NT,fog_fragment:UT,fog_pars_fragment:OT,gradientmap_pars_fragment:FT,lightmap_pars_fragment:BT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:zT,lights_pars_begin:HT,lights_toon_fragment:GT,lights_toon_pars_fragment:WT,lights_phong_fragment:XT,lights_phong_pars_fragment:qT,lights_physical_fragment:jT,lights_physical_pars_fragment:YT,lights_fragment_begin:KT,lights_fragment_maps:$T,lights_fragment_end:ZT,logdepthbuf_fragment:JT,logdepthbuf_pars_fragment:QT,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:tb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:sb,map_particle_pars_fragment:rb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:ab,morphinstance_vertex:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:hb,morphtarget_vertex:fb,normal_fragment_begin:db,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:_b,normal_vertex:gb,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:Sb,iridescence_pars_fragment:Mb,opaque_fragment:Eb,packing:Tb,premultiplied_alpha_fragment:bb,project_vertex:Ab,dithering_fragment:wb,dithering_pars_fragment:Rb,roughnessmap_fragment:Cb,roughnessmap_pars_fragment:Pb,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Db,shadowmap_vertex:Ib,shadowmask_pars_fragment:Nb,skinbase_vertex:Ub,skinning_pars_vertex:Ob,skinning_vertex:Fb,skinnormal_vertex:Bb,specularmap_fragment:kb,specularmap_pars_fragment:zb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Vb,transmission_fragment:Gb,transmission_pars_fragment:Wb,uv_pars_fragment:Xb,uv_pars_vertex:qb,uv_vertex:jb,worldpos_vertex:Yb,background_vert:Kb,background_frag:$b,backgroundCube_vert:Zb,backgroundCube_frag:Jb,cube_vert:Qb,cube_frag:eA,depth_vert:tA,depth_frag:nA,distanceRGBA_vert:iA,distanceRGBA_frag:sA,equirect_vert:rA,equirect_frag:oA,linedashed_vert:aA,linedashed_frag:lA,meshbasic_vert:cA,meshbasic_frag:uA,meshlambert_vert:hA,meshlambert_frag:fA,meshmatcap_vert:dA,meshmatcap_frag:pA,meshnormal_vert:mA,meshnormal_frag:_A,meshphong_vert:gA,meshphong_frag:vA,meshphysical_vert:xA,meshphysical_frag:yA,meshtoon_vert:SA,meshtoon_frag:MA,points_vert:EA,points_frag:TA,shadow_vert:bA,shadow_frag:AA,sprite_vert:wA,sprite_frag:RA},Se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},di={basic:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:an([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:an([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:an([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:an([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:an([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:an([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:an([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:an([Se.lights,Se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};di.physical={uniforms:an([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const sl={r:0,b:0,g:0},Vs=new Ti,CA=new qe;function PA(i,e,t,n,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1;const M=g(S);M===null?m(a,l):M&&M.isColor&&(m(M,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===_c)?(u===void 0&&(u=new vn(new Eo(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:fo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(y.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CA.makeRotationFromEuler(Vs)),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==_t,(h!==M||f!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vn(new vc(2,2),new Cs({name:"BackgroundMaterial",uniforms:fo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(sl,Kg(i)),n.buffers.color.setClear(sl.r,sl.g,sl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:p}}function LA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(E,L,W,H,te){let Q=!1;const q=h(H,W,L);r!==q&&(r=q,c(r.object)),Q=d(E,H,W,te),Q&&g(E,H,W,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(E,L,W,H),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,L,W){const H=W.wireframe===!0;let te=n[E.id];te===void 0&&(te={},n[E.id]=te);let Q=te[L.id];Q===void 0&&(Q={},te[L.id]=Q);let q=Q[H];return q===void 0&&(q=f(l()),Q[H]=q),q}function f(E){const L=[],W=[],H=[];for(let te=0;te<t;te++)L[te]=0,W[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,L,W,H){const te=r.attributes,Q=L.attributes;let q=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){const xe=te[V];let Me=Q[V];if(Me===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(E,L,W,H){const te={},Q=L.attributes;let q=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){let xe=Q[V];xe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));const Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),te[V]=Me,q++}r.attributes=te,r.attributesNum=q,r.index=H}function _(){const E=r.newAttributes;for(let L=0,W=E.length;L<W;L++)E[L]=0}function p(E){m(E,0)}function m(E,L){const W=r.newAttributes,H=r.enabledAttributes,te=r.attributeDivisors;W[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),te[E]!==L&&(i.vertexAttribDivisor(E,L),te[E]=L)}function S(){const E=r.newAttributes,L=r.enabledAttributes;for(let W=0,H=L.length;W<H;W++)L[W]!==E[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function y(E,L,W,H,te,Q,q){q===!0?i.vertexAttribIPointer(E,L,W,te,Q):i.vertexAttribPointer(E,L,W,H,te,Q)}function M(E,L,W,H){_();const te=H.attributes,Q=W.getAttributes(),q=L.defaultAttributeValues;for(const j in Q){const V=Q[j];if(V.location>=0){let ge=te[j];if(ge===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const xe=ge.normalized,Me=ge.itemSize,Re=e.get(ge);if(Re===void 0)continue;const je=Re.buffer,ee=Re.type,le=Re.bytesPerElement,Ee=ee===i.INT||ee===i.UNSIGNED_INT||ge.gpuType===pf;if(ge.isInterleavedBufferAttribute){const B=ge.data,re=B.stride,se=ge.offset;if(B.isInstancedInterleavedBuffer){for(let de=0;de<V.locationSize;de++)m(V.location+de,B.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let de=0;de<V.locationSize;de++)p(V.location+de);i.bindBuffer(i.ARRAY_BUFFER,je);for(let de=0;de<V.locationSize;de++)y(V.location+de,Me/V.locationSize,ee,xe,re*le,(se+Me/V.locationSize*de)*le,Ee)}else{if(ge.isInstancedBufferAttribute){for(let B=0;B<V.locationSize;B++)m(V.location+B,ge.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let B=0;B<V.locationSize;B++)p(V.location+B);i.bindBuffer(i.ARRAY_BUFFER,je);for(let B=0;B<V.locationSize;B++)y(V.location+B,Me/V.locationSize,ee,xe,Me*le,Me/V.locationSize*B*le,Ee)}}else if(q!==void 0){const xe=q[j];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(V.location,xe);break;case 3:i.vertexAttrib3fv(V.location,xe);break;case 4:i.vertexAttrib4fv(V.location,xe);break;default:i.vertexAttrib1fv(V.location,xe)}}}}S()}function R(){D();for(const E in n){const L=n[E];for(const W in L){const H=L[W];for(const te in H)u(H[te].object),delete H[te];delete L[W]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const W in L){const H=L[W];for(const te in H)u(H[te].object),delete H[te];delete L[W]}delete n[E.id]}function w(E){for(const L in n){const W=n[L];if(W[E.id]===void 0)continue;const H=W[E.id];for(const te in H)u(H[te].object),delete H[te];delete W[E.id]}}function D(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function DA(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IA(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==es&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jn&&!w)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:M,maxSamples:R}}function NA(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new _s,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,y=S*4;let M=m.clippingState||null;l.value=M,M=u(g,f,y,d);for(let R=0;R!==y;++R)M[R]=t[R];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=d;y!==_;++y,M+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function UA(i){let e=new WeakMap;function t(o,a){return a===$u?o.mapping=oo:a===Zu&&(o.mapping=ao),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$u||a===Zu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qE(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xc extends $g{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,Cp=[.125,.215,.35,.446,.526,.582],Zs=20,lu=new xc,Pp=new Ve;let cu=null,uu=0,hu=0,fu=!1;const Ys=(1+Math.sqrt(5))/2,Ir=1/Ys,Lp=[new O(-Ys,Ir,0),new O(Ys,Ir,0),new O(-Ir,0,Ys),new O(Ir,0,Ys),new O(0,Ys,-Ir),new O(0,Ys,Ir),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,uu,hu),this._renderer.xr.enabled=fu,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ra,format:Vn,colorSpace:Vt,depthBuffer:!1},s=Ip(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(r)),this._blurMaterial=FA(r,e,t)}return s}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,lu)}_sceneToCubeUV(e,t,n,s){const a=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pp),u.toneMapping=bs,u.autoClear=!1;const d=new Qs({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new vn(new Eo,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Pp),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;rl(s,S*y,m>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===oo||e.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,lu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lp[(s-r-1)%Lp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Zs;p>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zs}`);const m=[];let S=0;for(let w=0;w<Zs;++w){const D=w/_,T=Math.exp(-D*D/2);m.push(T),w===0?S+=T:w<p&&(S+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const M=this._sizeLods[s],R=3*M*(s>y-zr?s-y+zr:0),C=4*(this._cubeSize-M);rl(t,R,C,3*M,2*M),l.setRenderTarget(t),l.render(h,lu)}}function OA(i){const e=[],t=[],n=[];let s=i;const r=i-zr+1+Cp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-zr?l=Cp[o-i+zr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),y=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,D=C>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];S.set(T,_*g*C),y.set(f,p*g*C);const E=[C,C,C,C,C,C];M.set(E,m*g*C)}const R=new ri;R.setAttribute("position",new Yt(S,_)),R.setAttribute("uv",new Yt(y,p)),R.setAttribute("faceIndex",new Yt(M,m)),e.push(R),s>zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ip(i,e,t){const n=new ur(i,e,t);return n.texture.mapping=_c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function FA(i,e,t){const n=new Float32Array(Zs),s=new O(0,1,0);return new Cs({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Np(){return new Cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Up(){return new Cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$u||l===Zu,u=l===oo||l===ao;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Dp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Dp(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zA(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,M=S.length;y<M;y+=3){const R=S[y+0],C=S[y+1],w=S[y+2];f.push(R,C,C,w,w,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const R=y+0,C=y+1,w=y+2;f.push(R,C,C,w,w,R)}}else return;const p=new(Vg(f)?Yg:jg)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function HA(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S];for(let S=0;S<_.length;S++)t.update(m,n,_[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function VA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function GA(i,e,t){const n=new WeakMap,s=new ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var d=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let R=a.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*C*4*h),D=new Wg(w,R,C,h);D.type=Jn,D.needsUpdate=!0;const T=M*4;for(let L=0;L<h;L++){const W=m[L],H=S[L],te=y[L],Q=R*C*4*L;for(let q=0;q<W.count;q++){const j=q*T;g===!0&&(s.fromBufferAttribute(W,q),w[Q+j+0]=s.x,w[Q+j+1]=s.y,w[Q+j+2]=s.z,w[Q+j+3]=0),_===!0&&(s.fromBufferAttribute(H,q),w[Q+j+4]=s.x,w[Q+j+5]=s.y,w[Q+j+6]=s.z,w[Q+j+7]=0),p===!0&&(s.fromBufferAttribute(te,q),w[Q+j+8]=s.x,w[Q+j+9]=s.y,w[Q+j+10]=s.z,w[Q+j+11]=te.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new Oe(R,C)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function WA(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Qg extends Ft{constructor(e,t,n,s,r,o,a,l,c,u=Kr){if(u!==Kr&&u!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Kr&&(n=cr),n===void 0&&u===uo&&(n=co),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const e0=new Ft,Op=new Qg(1,1),t0=new Wg,n0=new PE,i0=new Zg,Fp=[],Bp=[],kp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function To(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fp[s];if(r===void 0&&(r=new Float32Array(s),Fp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function XA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function jA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function YA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function KA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),kt(t,n)}}function $A(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),kt(t,n)}}function ZA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),kt(t,n)}}function JA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function QA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function nw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function ow(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Op.compareFunction=zg,r=Op):r=e0,t.setTexture2D(e||r,s)}function aw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||n0,s)}function lw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||i0,s)}function cw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||t0,s)}function uw(i){switch(i){case 5126:return XA;case 35664:return qA;case 35665:return jA;case 35666:return YA;case 35674:return KA;case 35675:return $A;case 35676:return ZA;case 5124:case 35670:return JA;case 35667:case 35671:return QA;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return sw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}function hw(i,e){i.uniform1fv(this.addr,e)}function fw(i,e){const t=To(e,this.size,2);i.uniform2fv(this.addr,t)}function dw(i,e){const t=To(e,this.size,3);i.uniform3fv(this.addr,t)}function pw(i,e){const t=To(e,this.size,4);i.uniform4fv(this.addr,t)}function mw(i,e){const t=To(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _w(i,e){const t=To(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gw(i,e){const t=To(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vw(i,e){i.uniform1iv(this.addr,e)}function xw(i,e){i.uniform2iv(this.addr,e)}function yw(i,e){i.uniform3iv(this.addr,e)}function Sw(i,e){i.uniform4iv(this.addr,e)}function Mw(i,e){i.uniform1uiv(this.addr,e)}function Ew(i,e){i.uniform2uiv(this.addr,e)}function Tw(i,e){i.uniform3uiv(this.addr,e)}function bw(i,e){i.uniform4uiv(this.addr,e)}function Aw(i,e,t){const n=this.cache,s=e.length,r=yc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||e0,r[o])}function ww(i,e,t){const n=this.cache,s=e.length,r=yc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||n0,r[o])}function Rw(i,e,t){const n=this.cache,s=e.length,r=yc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||i0,r[o])}function Cw(i,e,t){const n=this.cache,s=e.length,r=yc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||t0,r[o])}function Pw(i){switch(i){case 5126:return hw;case 35664:return fw;case 35665:return dw;case 35666:return pw;case 35674:return mw;case 35675:return _w;case 35676:return gw;case 5124:case 35670:return vw;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return Tw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Cw}}class Lw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uw(t.type)}}class Dw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pw(t.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Vp(i,e){i.seq.push(e),i.map[e.id]=e}function Nw(i,e,t){const n=i.name,s=n.length;for(du.lastIndex=0;;){const r=du.exec(n),o=du.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vp(t,c===void 0?new Lw(a,i,e):new Dw(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Iw(a),Vp(t,h)),t=h}}}class Al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Nw(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Gp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Uw=37297;let Ow=0;function Fw(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Bw(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Wl&&t===Gl?n="LinearDisplayP3ToLinearSRGB":e===Gl&&t===Wl&&(n="LinearSRGBToLinearDisplayP3"),i){case Vt:case gc:return[n,"LinearTransferOETF"];case Ot:case Sf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fw(i.getShaderSource(e),o)}else return s}function kw(i,e){const t=Bw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zw(i,e){let t;switch(e){case HM:t="Linear";break;case VM:t="Reinhard";break;case GM:t="Cineon";break;case WM:t="ACESFilmic";break;case qM:t="AgX";break;case jM:t="Neutral";break;case XM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ol=new O;function Hw(){Ze.getLuminanceCoefficients(ol);const i=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Gw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ww(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wo(i){return i!==""}function Xp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(Xw,jw)}const qw=new Map;function jw(i,e){let t=We[e];if(t===void 0){const n=qw.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ah(t)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(Yw,Kw)}function Kw(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $w(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function Qw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ag:e="ENVMAP_BLENDING_MULTIPLY";break;case kM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function eR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tR(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$w(t),c=Zw(t),u=Jw(t),h=Qw(t),f=eR(t),d=Vw(t),g=Gw(r),_=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`)):(p=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),m=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?We.tonemapping_pars_fragment:"",t.toneMapping!==bs?zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,kw("linearToOutputTexel",t.outputColorSpace),Hw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Ah(o),o=Xp(o,t),o=qp(o,t),a=Ah(a),a=Xp(a,t),a=qp(a,t),o=jp(o),a=jp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,M=S+m+a,R=Gp(s,s.VERTEX_SHADER,y),C=Gp(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(R).trim(),te=s.getShaderInfoLog(C).trim();let Q=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,C);else{const j=Wp(s,R,"vertex"),V=Wp(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+j+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||te==="")&&(q=!1);q&&(L.diagnostics={runnable:Q,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:te,prefix:m}})}s.deleteShader(R),s.deleteShader(C),D=new Al(s,_),T=Ww(s,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Uw)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ow++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sR(e),t.set(e,n)),n}}class sR{constructor(e){this.id=nR++,this.code=e,this.usedTimes=0}}function rR(i,e,t,n,s,r,o){const a=new Xg,l=new iR,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,E,L,W,H){const te=W.fog,Q=H.geometry,q=T.isMeshStandardMaterial?W.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),V=j&&j.mapping===_c?j.image.height:null,ge=g[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const xe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Me=xe!==void 0?xe.length:0;let Re=0;Q.morphAttributes.position!==void 0&&(Re=1),Q.morphAttributes.normal!==void 0&&(Re=2),Q.morphAttributes.color!==void 0&&(Re=3);let je,ee,le,Ee;if(ge){const Je=di[ge];je=Je.vertexShader,ee=Je.fragmentShader}else je=T.vertexShader,ee=T.fragmentShader,l.update(T),le=l.getVertexShaderID(T),Ee=l.getFragmentShaderID(T);const B=i.getRenderTarget(),re=H.isInstancedMesh===!0,se=H.isBatchedMesh===!0,de=!!T.map,Ce=!!T.matcap,v=!!j,P=!!T.aoMap,I=!!T.lightMap,$=!!T.bumpMap,G=!!T.normalMap,J=!!T.displacementMap,ie=!!T.emissiveMap,ne=!!T.metalnessMap,b=!!T.roughnessMap,x=T.anisotropy>0,N=T.clearcoat>0,k=T.dispersion>0,X=T.iridescence>0,Y=T.sheen>0,pe=T.transmission>0,ce=x&&!!T.anisotropyMap,he=N&&!!T.clearcoatMap,De=N&&!!T.clearcoatNormalMap,ue=N&&!!T.clearcoatRoughnessMap,ye=X&&!!T.iridescenceMap,ze=X&&!!T.iridescenceThicknessMap,Ne=Y&&!!T.sheenColorMap,be=Y&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Ue=!!T.specularColorMap,dt=!!T.specularIntensityMap,U=pe&&!!T.transmissionMap,me=pe&&!!T.thicknessMap,oe=!!T.gradientMap,ae=!!T.alphaMap,ve=T.alphaTest>0,Fe=!!T.alphaHash,$e=!!T.extensions;let Ct=bs;T.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Wt={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:je,fragmentShader:ee,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:se,batchingColor:se&&H._colorsTexture!==null,instancing:re,instancingColor:re&&H.instanceColor!==null,instancingMorph:re&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Vt,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:Ce,envMap:v,envMapMode:v&&j.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:I,bumpMap:$,normalMap:G,displacementMap:f&&J,emissiveMap:ie,normalMapObjectSpace:G&&T.normalMapType===QM,normalMapTangentSpace:G&&T.normalMapType===kg,metalnessMap:ne,roughnessMap:b,anisotropy:x,anisotropyMap:ce,clearcoat:N,clearcoatMap:he,clearcoatNormalMap:De,clearcoatRoughnessMap:ue,dispersion:k,iridescence:X,iridescenceMap:ye,iridescenceThicknessMap:ze,sheen:Y,sheenColorMap:Ne,sheenRoughnessMap:be,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:dt,transmission:pe,transmissionMap:U,thicknessMap:me,gradientMap:oe,opaque:T.transparent===!1&&T.blending===Yr&&T.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Fe,combine:T.combine,mapUv:de&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:I&&_(T.lightMap.channel),bumpMapUv:$&&_(T.bumpMap.channel),normalMapUv:G&&_(T.normalMap.channel),displacementMapUv:J&&_(T.displacementMap.channel),emissiveMapUv:ie&&_(T.emissiveMap.channel),metalnessMapUv:ne&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:ce&&_(T.anisotropyMap.channel),clearcoatMapUv:he&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(T.sheenRoughnessMap.channel),specularMapUv:Pe&&_(T.specularMap.channel),specularColorMapUv:Ue&&_(T.specularColorMap.channel),specularIntensityMapUv:dt&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:me&&_(T.thicknessMap.channel),alphaMapUv:ae&&_(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(G||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(de||ae),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===_t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===mi,flipSided:T.side===xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function m(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(S(E,T),y(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function S(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function y(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),T.push(a.mask)}function M(T){const E=g[T.type];let L;if(E){const W=di[E];L=VE.clone(W.uniforms)}else L=T.uniforms;return L}function R(T,E){let L;for(let W=0,H=u.length;W<H;W++){const te=u[W];if(te.cacheKey===E){L=te,++L.usedTimes;break}}return L===void 0&&(L=new tR(i,E,T,r),u.push(L)),L}function C(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:D}}function oR(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function aR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $p(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||aR),n.length>1&&n.sort(f||Kp),s.length>1&&s.sort(f||Kp)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function lR(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $p,i.set(n,[o])):s>=r.length?(o=new $p,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ve};break;case"SpotLight":t={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function uR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hR=0;function fR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dR(i){const e=new cR,t=uR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new qe,o=new qe;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,S=0,y=0,M=0,R=0,C=0,w=0;c.sort(fR);for(let T=0,E=c.length;T<E;T++){const L=c[T],W=L.color,H=L.intensity,te=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=W.r*H,h+=W.g*H,f+=W.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],H);w++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,V=t.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=L.shadow.matrix,S++}n.directional[d]=q,d++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(W).multiplyScalar(H),q.distance=te,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;const j=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,j.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=j.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Q,M++}_++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(W).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=q,p++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const j=L.shadow,V=t.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[m]=q,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==M||D.numSpotMaps!==R||D.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=M,D.numSpotMaps=R,D.numLightProbes=w,n.version=hR++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Zp(i){const e=new dR(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pR(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Zp(i),e.set(s,[a])):r>=o.length?(a=new Zp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class mR extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _R extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xR(i,e,t){let n=new Ef;const s=new Oe,r=new Oe,o=new ct,a=new mR({depthPacking:JM}),l=new _R,c={},u=t.maxTextureSize,h={[Qi]:xn,[xn]:Qi,[mi]:mi},f=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:gR,fragmentShader:vR}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tg;let m=this.type;this.render=function(C,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Ts),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=m!==Bi&&this.type===Bi,te=m===Bi&&this.type!==Bi;for(let Q=0,q=C.length;Q<q;Q++){const j=C[Q],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ge=V.getFrameExtents();if(s.multiply(ge),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,V.mapSize.y=r.y)),V.map===null||H===!0||te===!0){const Me=this.type!==Bi?{minFilter:jt,magFilter:jt}:{};V.map!==null&&V.map.dispose(),V.map=new ur(s.x,s.y,Me),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const xe=V.getViewportCount();for(let Me=0;Me<xe;Me++){const Re=V.getViewport(Me);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),W.viewport(o),V.updateMatrices(j,Me),n=V.getFrustum(),M(w,D,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===Bi&&S(V,D),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,E,L)};function S(C,w){const D=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ur(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,D,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,D,d,_,null)}function y(C,w,D,T){let E=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)E=L;else if(E=D.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=E.uuid,H=w.uuid;let te=c[W];te===void 0&&(te={},c[W]=te);let Q=te[H];Q===void 0&&(Q=E.clone(),te[H]=Q,w.addEventListener("dispose",R)),E=Q}if(E.visible=w.visible,E.wireframe=w.wireframe,T===Bi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=i.properties.get(E);W.light=D}return E}function M(C,w,D,T,E){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Bi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=e.update(C),te=C.material;if(Array.isArray(te)){const Q=H.groups;for(let q=0,j=Q.length;q<j;q++){const V=Q[q],ge=te[V.materialIndex];if(ge&&ge.visible){const xe=y(C,ge,T,E);C.onBeforeShadow(i,C,w,D,H,xe,V),i.renderBufferDirect(D,null,H,xe,C,V),C.onAfterShadow(i,C,w,D,H,xe,V)}}}else if(te.visible){const Q=y(C,te,T,E);C.onBeforeShadow(i,C,w,D,H,Q,null),i.renderBufferDirect(D,null,H,Q,C,null),C.onAfterShadow(i,C,w,D,H,Q,null)}}const W=C.children;for(let H=0,te=W.length;H<te;H++)M(W[H],w,D,T,E)}function R(C){C.target.removeEventListener("dispose",R);for(const D in c){const T=c[D],E=C.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function yR(i){function e(){let U=!1;const me=new ct;let oe=null;const ae=new ct(0,0,0,0);return{setMask:function(ve){oe!==ve&&!U&&(i.colorMask(ve,ve,ve,ve),oe=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Fe,$e,Ct,Wt){Wt===!0&&(ve*=Ct,Fe*=Ct,$e*=Ct),me.set(ve,Fe,$e,Ct),ae.equals(me)===!1&&(i.clearColor(ve,Fe,$e,Ct),ae.copy(me))},reset:function(){U=!1,oe=null,ae.set(-1,0,0,0)}}}function t(){let U=!1,me=null,oe=null,ae=null;return{setTest:function(ve){ve?Ee(i.DEPTH_TEST):B(i.DEPTH_TEST)},setMask:function(ve){me!==ve&&!U&&(i.depthMask(ve),me=ve)},setFunc:function(ve){if(oe!==ve){switch(ve){case DM:i.depthFunc(i.NEVER);break;case IM:i.depthFunc(i.ALWAYS);break;case NM:i.depthFunc(i.LESS);break;case zl:i.depthFunc(i.LEQUAL);break;case UM:i.depthFunc(i.EQUAL);break;case OM:i.depthFunc(i.GEQUAL);break;case FM:i.depthFunc(i.GREATER);break;case BM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=ve}},setLocked:function(ve){U=ve},setClear:function(ve){ae!==ve&&(i.clearDepth(ve),ae=ve)},reset:function(){U=!1,me=null,oe=null,ae=null}}}function n(){let U=!1,me=null,oe=null,ae=null,ve=null,Fe=null,$e=null,Ct=null,Wt=null;return{setTest:function(Je){U||(Je?Ee(i.STENCIL_TEST):B(i.STENCIL_TEST))},setMask:function(Je){me!==Je&&!U&&(i.stencilMask(Je),me=Je)},setFunc:function(Je,Ci,oi){(oe!==Je||ae!==Ci||ve!==oi)&&(i.stencilFunc(Je,Ci,oi),oe=Je,ae=Ci,ve=oi)},setOp:function(Je,Ci,oi){(Fe!==Je||$e!==Ci||Ct!==oi)&&(i.stencilOp(Je,Ci,oi),Fe=Je,$e=Ci,Ct=oi)},setLocked:function(Je){U=Je},setClear:function(Je){Wt!==Je&&(i.clearStencil(Je),Wt=Je)},reset:function(){U=!1,me=null,oe=null,ae=null,ve=null,Fe=null,$e=null,Ct=null,Wt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,S=null,y=null,M=null,R=null,C=new Ve(0,0,0),w=0,D=!1,T=null,E=null,L=null,W=null,H=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),Q=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Q=q>=2);let V=null,ge={};const xe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Re=new ct().fromArray(xe),je=new ct().fromArray(Me);function ee(U,me,oe,ae){const ve=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(U,Fe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<oe;$e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Fe}const le={};le[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ee(i.DEPTH_TEST),r.setFunc(zl),$(!1),G(Qd),Ee(i.CULL_FACE),P(Ts);function Ee(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function B(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function re(U,me){return u[U]!==me?(i.bindFramebuffer(U,me),u[U]=me,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function se(U,me){let oe=f,ae=!1;if(U){oe=h.get(me),oe===void 0&&(oe=[],h.set(me,oe));const ve=U.textures;if(oe.length!==ve.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,$e=ve.length;Fe<$e;Fe++)oe[Fe]=i.COLOR_ATTACHMENT0+Fe;oe.length=ve.length,ae=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ae=!0);ae&&i.drawBuffers(oe)}function de(U){return d!==U?(i.useProgram(U),d=U,!0):!1}const Ce={[$s]:i.FUNC_ADD,[mM]:i.FUNC_SUBTRACT,[_M]:i.FUNC_REVERSE_SUBTRACT};Ce[gM]=i.MIN,Ce[vM]=i.MAX;const v={[xM]:i.ZERO,[yM]:i.ONE,[SM]:i.SRC_COLOR,[Yu]:i.SRC_ALPHA,[wM]:i.SRC_ALPHA_SATURATE,[bM]:i.DST_COLOR,[EM]:i.DST_ALPHA,[MM]:i.ONE_MINUS_SRC_COLOR,[Ku]:i.ONE_MINUS_SRC_ALPHA,[AM]:i.ONE_MINUS_DST_COLOR,[TM]:i.ONE_MINUS_DST_ALPHA,[RM]:i.CONSTANT_COLOR,[CM]:i.ONE_MINUS_CONSTANT_COLOR,[PM]:i.CONSTANT_ALPHA,[LM]:i.ONE_MINUS_CONSTANT_ALPHA};function P(U,me,oe,ae,ve,Fe,$e,Ct,Wt,Je){if(U===Ts){g===!0&&(B(i.BLEND),g=!1);return}if(g===!1&&(Ee(i.BLEND),g=!0),U!==pM){if(U!==_||Je!==D){if((p!==$s||y!==$s)&&(i.blendEquation(i.FUNC_ADD),p=$s,y=$s),Je)switch(U){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ep:i.blendFunc(i.ONE,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case np:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ep:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case np:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,S=null,M=null,R=null,C.set(0,0,0),w=0,_=U,D=Je}return}ve=ve||me,Fe=Fe||oe,$e=$e||ae,(me!==p||ve!==y)&&(i.blendEquationSeparate(Ce[me],Ce[ve]),p=me,y=ve),(oe!==m||ae!==S||Fe!==M||$e!==R)&&(i.blendFuncSeparate(v[oe],v[ae],v[Fe],v[$e]),m=oe,S=ae,M=Fe,R=$e),(Ct.equals(C)===!1||Wt!==w)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Wt),C.copy(Ct),w=Wt),_=U,D=!1}function I(U,me){U.side===mi?B(i.CULL_FACE):Ee(i.CULL_FACE);let oe=U.side===xn;me&&(oe=!oe),$(oe),U.blending===Yr&&U.transparent===!1?P(Ts):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ae=U.stencilWrite;o.setTest(ae),ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):B(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){T!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),T=U)}function G(U){U!==fM?(Ee(i.CULL_FACE),U!==E&&(U===Qd?i.cullFace(i.BACK):U===dM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B(i.CULL_FACE),E=U}function J(U){U!==L&&(Q&&i.lineWidth(U),L=U)}function ie(U,me,oe){U?(Ee(i.POLYGON_OFFSET_FILL),(W!==me||H!==oe)&&(i.polygonOffset(me,oe),W=me,H=oe)):B(i.POLYGON_OFFSET_FILL)}function ne(U){U?Ee(i.SCISSOR_TEST):B(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+te-1),V!==U&&(i.activeTexture(U),V=U)}function x(U,me,oe){oe===void 0&&(V===null?oe=i.TEXTURE0+te-1:oe=V);let ae=ge[oe];ae===void 0&&(ae={type:void 0,texture:void 0},ge[oe]=ae),(ae.type!==U||ae.texture!==me)&&(V!==oe&&(i.activeTexture(oe),V=oe),i.bindTexture(U,me||le[U]),ae.type=U,ae.texture=me)}function N(){const U=ge[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){Re.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Re.copy(U))}function be(U){je.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function Pe(U,me){let oe=l.get(me);oe===void 0&&(oe=new WeakMap,l.set(me,oe));let ae=oe.get(U);ae===void 0&&(ae=i.getUniformBlockIndex(me,U.name),oe.set(U,ae))}function Ue(U,me){const ae=l.get(me).get(U);a.get(me)!==ae&&(i.uniformBlockBinding(me,ae,U.__bindingPointIndex),a.set(me,ae))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,ge={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,S=null,y=null,M=null,R=null,C=new Ve(0,0,0),w=0,D=!1,T=null,E=null,L=null,W=null,H=null,Re.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ee,disable:B,bindFramebuffer:re,drawBuffers:se,useProgram:de,setBlending:P,setMaterial:I,setFlipSided:$,setCullFace:G,setLineWidth:J,setPolygonOffset:ie,setScissorTest:ne,activeTexture:b,bindTexture:x,unbindTexture:N,compressedTexImage2D:k,compressedTexImage3D:X,texImage2D:ye,texImage3D:ze,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:ue,texSubImage2D:Y,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:Ne,viewport:be,reset:dt}}function Jp(i,e,t,n){const s=SR(n);switch(t){case Dg:return i*e;case Ng:return i*e;case Ug:return i*e*2;case gf:return i*e/s.components*s.byteLength;case vf:return i*e/s.components*s.byteLength;case Og:return i*e*2/s.components*s.byteLength;case xf:return i*e*2/s.components*s.byteLength;case Ig:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case yf:return i*e*4/s.components*s.byteLength;case Sl:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qu:case th:return Math.max(i,16)*Math.max(e,8)/4;case Ju:case eh:return Math.max(i,8)*Math.max(e,8)/2;case nh:case ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case xh:case yh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fg:case Sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mh:case Eh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SR(i){switch(i){case es:case Cg:return{byteLength:1,components:1};case da:case Pg:case Ra:return{byteLength:2,components:1};case mf:case _f:return{byteLength:2,components:4};case cr:case pf:case Jn:return{byteLength:4,components:1};case Lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function MR(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):_a("canvas")}function _(b,x,N){let k=1;const X=ne(b);if((X.width>N||X.height>N)&&(k=N/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(k*X.width),pe=Math.floor(k*X.height);h===void 0&&(h=g(Y,pe));const ce=x?g(Y,pe):h;return ce.width=Y,ce.height=pe,ce.getContext("2d").drawImage(b,0,0,Y,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+pe+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==jt&&b.minFilter!==hn}function m(b){i.generateMipmap(b)}function S(b,x,N,k,X=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const pe=X?Vl:Ze.getTransfer(k);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=pe===_t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(b,x){let N;return b?x===null||x===cr||x===co?N=i.DEPTH24_STENCIL8:x===Jn?N=i.DEPTH32F_STENCIL8:x===da&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===cr||x===co?N=i.DEPTH_COMPONENT24:x===Jn?N=i.DEPTH_COMPONENT32F:x===da&&(N=i.DEPTH_COMPONENT16),N}function M(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==jt&&b.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&u.delete(x)}function C(b){const x=b.target;x.removeEventListener("dispose",C),T(x)}function w(b){const x=n.get(b);if(x.__webglInit===void 0)return;const N=b.source,k=f.get(N);if(k){const X=k[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&D(b),Object.keys(k).length===0&&f.delete(N)}n.remove(b)}function D(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const N=b.source,k=f.get(N);delete k[x.__cacheKey],o.memory.textures--}function T(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let X=0;X<x.__webglFramebuffer[k].length;X++)i.deleteFramebuffer(x.__webglFramebuffer[k][X]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=b.textures;for(let k=0,X=N.length;k<X;k++){const Y=n.get(N[k]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(N[k])}n.remove(b)}let E=0;function L(){E=0}function W(){const b=E;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),E+=1,b}function H(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function te(b,x){const N=n.get(b);if(b.isVideoTexture&&J(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const k=b.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(N,b,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function Q(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){je(N,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function q(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){je(N,b,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function j(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){ee(N,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const V={[lo]:i.REPEAT,[vs]:i.CLAMP_TO_EDGE,[Hl]:i.MIRRORED_REPEAT},ge={[jt]:i.NEAREST,[Rg]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},xe={[eE]:i.NEVER,[oE]:i.ALWAYS,[tE]:i.LESS,[zg]:i.LEQUAL,[nE]:i.EQUAL,[rE]:i.GEQUAL,[iE]:i.GREATER,[sE]:i.NOTEQUAL};function Me(b,x){if(x.type===Jn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===yl||x.magFilter===Go||x.magFilter===qi||x.minFilter===hn||x.minFilter===yl||x.minFilter===Go||x.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,V[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===jt||x.minFilter!==Go&&x.minFilter!==qi||x.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Re(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const k=x.source;let X=f.get(k);X===void 0&&(X={},f.set(k,X));const Y=H(x);if(Y!==b.__cacheKey){X[Y]===void 0&&(X[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),X[Y].usedTimes++;const pe=X[b.__cacheKey];pe!==void 0&&(X[b.__cacheKey].usedTimes--,pe.usedTimes===0&&D(x)),b.__cacheKey=Y,b.__webglTexture=X[Y].texture}return N}function je(b,x,N){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);const X=Re(b,x),Y=x.source;t.bindTexture(k,b.__webglTexture,i.TEXTURE0+N);const pe=n.get(Y);if(Y.version!==pe.__version||X===!0){t.activeTexture(i.TEXTURE0+N);const ce=Ze.getPrimaries(Ze.workingColorSpace),he=x.colorSpace===gs?null:Ze.getPrimaries(x.colorSpace),De=x.colorSpace===gs||ce===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ue=_(x.image,!1,s.maxTextureSize);ue=ie(x,ue);const ye=r.convert(x.format,x.colorSpace),ze=r.convert(x.type);let Ne=S(x.internalFormat,ye,ze,x.colorSpace,x.isVideoTexture);Me(k,x);let be;const Pe=x.mipmaps,Ue=x.isVideoTexture!==!0,dt=pe.__version===void 0||X===!0,U=Y.dataReady,me=M(x,ue);if(x.isDepthTexture)Ne=y(x.format===uo,x.type),dt&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ye,ze,null));else if(x.isDataTexture)if(Pe.length>0){Ue&&dt&&t.texStorage2D(i.TEXTURE_2D,me,Ne,Pe[0].width,Pe[0].height);for(let oe=0,ae=Pe.length;oe<ae;oe++)be=Pe[oe],Ue?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ye,ze,be.data):t.texImage2D(i.TEXTURE_2D,oe,Ne,be.width,be.height,0,ye,ze,be.data);x.generateMipmaps=!1}else Ue?(dt&&t.texStorage2D(i.TEXTURE_2D,me,Ne,ue.width,ue.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,ye,ze,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ye,ze,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ne,Pe[0].width,Pe[0].height,ue.depth);for(let oe=0,ae=Pe.length;oe<ae;oe++)if(be=Pe[oe],x.format!==Vn)if(ye!==null)if(Ue){if(U)if(x.layerUpdates.size>0){const ve=Jp(be.width,be.height,x.format,x.type);for(const Fe of x.layerUpdates){const $e=be.data.subarray(Fe*ve/be.data.BYTES_PER_ELEMENT,(Fe+1)*ve/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Fe,be.width,be.height,1,ye,$e,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,ue.depth,ye,be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ne,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,ue.depth,ye,ze,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ne,be.width,be.height,ue.depth,0,ye,ze,be.data)}else{Ue&&dt&&t.texStorage2D(i.TEXTURE_2D,me,Ne,Pe[0].width,Pe[0].height);for(let oe=0,ae=Pe.length;oe<ae;oe++)be=Pe[oe],x.format!==Vn?ye!==null?Ue?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ne,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ye,ze,be.data):t.texImage2D(i.TEXTURE_2D,oe,Ne,be.width,be.height,0,ye,ze,be.data)}else if(x.isDataArrayTexture)if(Ue){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ne,ue.width,ue.height,ue.depth),U)if(x.layerUpdates.size>0){const oe=Jp(ue.width,ue.height,x.format,x.type);for(const ae of x.layerUpdates){const ve=ue.data.subarray(ae*oe/ue.data.BYTES_PER_ELEMENT,(ae+1)*oe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ue.width,ue.height,1,ye,ze,ve)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,ze,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,ye,ze,ue.data);else if(x.isData3DTexture)Ue?(dt&&t.texStorage3D(i.TEXTURE_3D,me,Ne,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,ze,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,ye,ze,ue.data);else if(x.isFramebufferTexture){if(dt)if(Ue)t.texStorage2D(i.TEXTURE_2D,me,Ne,ue.width,ue.height);else{let oe=ue.width,ae=ue.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ne,oe,ae,0,ye,ze,null),oe>>=1,ae>>=1}}else if(Pe.length>0){if(Ue&&dt){const oe=ne(Pe[0]);t.texStorage2D(i.TEXTURE_2D,me,Ne,oe.width,oe.height)}for(let oe=0,ae=Pe.length;oe<ae;oe++)be=Pe[oe],Ue?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ye,ze,be):t.texImage2D(i.TEXTURE_2D,oe,Ne,ye,ze,be);x.generateMipmaps=!1}else if(Ue){if(dt){const oe=ne(ue);t.texStorage2D(i.TEXTURE_2D,me,Ne,oe.width,oe.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ze,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ne,ye,ze,ue);p(x)&&m(k),pe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ee(b,x,N){if(x.image.length!==6)return;const k=Re(b,x),X=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);const Y=n.get(X);if(X.version!==Y.__version||k===!0){t.activeTexture(i.TEXTURE0+N);const pe=Ze.getPrimaries(Ze.workingColorSpace),ce=x.colorSpace===gs?null:Ze.getPrimaries(x.colorSpace),he=x.colorSpace===gs||pe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const De=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!De&&!ue?ye[ae]=_(x.image[ae],!0,s.maxCubemapSize):ye[ae]=ue?x.image[ae].image:x.image[ae],ye[ae]=ie(x,ye[ae]);const ze=ye[0],Ne=r.convert(x.format,x.colorSpace),be=r.convert(x.type),Pe=S(x.internalFormat,Ne,be,x.colorSpace),Ue=x.isVideoTexture!==!0,dt=Y.__version===void 0||k===!0,U=X.dataReady;let me=M(x,ze);Me(i.TEXTURE_CUBE_MAP,x);let oe;if(De){Ue&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Pe,ze.width,ze.height);for(let ae=0;ae<6;ae++){oe=ye[ae].mipmaps;for(let ve=0;ve<oe.length;ve++){const Fe=oe[ve];x.format!==Vn?Ne!==null?Ue?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Fe.width,Fe.height,Ne,be,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Pe,Fe.width,Fe.height,0,Ne,be,Fe.data)}}}else{if(oe=x.mipmaps,Ue&&dt){oe.length>0&&me++;const ae=ne(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Pe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ue){Ue?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,Ne,be,ye[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Pe,ye[ae].width,ye[ae].height,0,Ne,be,ye[ae].data);for(let ve=0;ve<oe.length;ve++){const $e=oe[ve].image[ae].image;Ue?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,$e.width,$e.height,Ne,be,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Pe,$e.width,$e.height,0,Ne,be,$e.data)}}else{Ue?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,be,ye[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Pe,Ne,be,ye[ae]);for(let ve=0;ve<oe.length;ve++){const Fe=oe[ve];Ue?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Ne,be,Fe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Pe,Ne,be,Fe.image[ae])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),Y.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function le(b,x,N,k,X,Y){const pe=r.convert(N.format,N.colorSpace),ce=r.convert(N.type),he=S(N.internalFormat,pe,ce,N.colorSpace);if(!n.get(x).__hasExternalTextures){const ue=Math.max(1,x.width>>Y),ye=Math.max(1,x.height>>Y);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,Y,he,ue,ye,x.depth,0,pe,ce,null):t.texImage2D(X,Y,he,ue,ye,0,pe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),G(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,X,n.get(N).__webglTexture,0,$(x)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,X,n.get(N).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const k=x.depthTexture,X=k&&k.isDepthTexture?k.type:null,Y=y(x.stencilBuffer,X),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=$(x);G(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Y,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,b)}else{const k=x.textures;for(let X=0;X<k.length;X++){const Y=k[X],pe=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),he=S(Y.internalFormat,pe,ce,Y.colorSpace),De=$(x);N&&G(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,he,x.width,x.height):G(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);const k=n.get(x.depthTexture).__webglTexture,X=$(x);if(x.depthTexture.format===Kr)G(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(x.depthTexture.format===uo)G(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function re(b){const x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const k=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=k}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");B(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[k],b,!1);else{const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,b,!1);else{const k=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(b,x,N){const k=n.get(b);x!==void 0&&le(k.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&re(b)}function de(b){const x=b.texture,N=n.get(b),k=n.get(x);b.addEventListener("dispose",C);const X=b.textures,Y=b.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,o.memory.textures++),Y){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let he=0;he<x.mipmaps.length;he++)N.__webglFramebuffer[ce][he]=i.createFramebuffer()}else N.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)N.__webglFramebuffer[ce]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ce=0,he=X.length;ce<he;ce++){const De=n.get(X[ce]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&G(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<X.length;ce++){const he=X[ce];N.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const De=r.convert(he.format,he.colorSpace),ue=r.convert(he.type),ye=S(he.internalFormat,De,ue,he.colorSpace,b.isXRRenderTarget===!0),ze=$(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ye,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Me(i.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)le(N.__webglFramebuffer[ce][he],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else le(N.__webglFramebuffer[ce],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ce=0,he=X.length;ce<he;ce++){const De=X[ce],ue=n.get(De);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Me(i.TEXTURE_2D,De),le(N.__webglFramebuffer,b,De,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),p(De)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,k.__webglTexture),Me(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)le(N.__webglFramebuffer[he],b,x,i.COLOR_ATTACHMENT0,ce,he);else le(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ce,0);p(x)&&m(ce),t.unbindTexture()}b.depthBuffer&&re(b)}function Ce(b){const x=b.textures;for(let N=0,k=x.length;N<k;N++){const X=x[N];if(p(X)){const Y=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(X).__webglTexture;t.bindTexture(Y,pe),m(Y),t.unbindTexture()}}}const v=[],P=[];function I(b){if(b.samples>0){if(G(b)===!1){const x=b.textures,N=b.width,k=b.height;let X=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(b),ce=x.length>1;if(ce)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let he=0;he<x.length;he++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const De=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,X,i.NEAREST),l===!0&&(v.length=0,P.length=0,v.push(i.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.resolveDepthBuffer===!1&&(v.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,v))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const De=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $(b){return Math.min(s.maxSamples,b.samples)}function G(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function J(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ie(b,x){const N=b.colorSpace,k=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Vt&&N!==gs&&(Ze.getTransfer(N)===_t?(k!==Vn||X!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.setTexture2D=te,this.setTexture2DArray=Q,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=se,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=le,this.useMultisampledRTT=G}function ER(i,e){function t(n,s=gs){let r;const o=Ze.getTransfer(s);if(n===es)return i.UNSIGNED_BYTE;if(n===mf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_f)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cg)return i.BYTE;if(n===Pg)return i.SHORT;if(n===da)return i.UNSIGNED_SHORT;if(n===pf)return i.INT;if(n===cr)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Ra)return i.HALF_FLOAT;if(n===Dg)return i.ALPHA;if(n===Ig)return i.RGB;if(n===Vn)return i.RGBA;if(n===Ng)return i.LUMINANCE;if(n===Ug)return i.LUMINANCE_ALPHA;if(n===Kr)return i.DEPTH_COMPONENT;if(n===uo)return i.DEPTH_STENCIL;if(n===gf)return i.RED;if(n===vf)return i.RED_INTEGER;if(n===Og)return i.RG;if(n===xf)return i.RG_INTEGER;if(n===yf)return i.RGBA_INTEGER;if(n===Sl||n===Ml||n===El||n===Tl)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ju||n===Qu||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ju)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===sh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nh||n===ih)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rh||n===oh||n===ah||n===lh||n===ch||n===uh||n===hh||n===fh||n===dh||n===ph||n===mh||n===_h||n===gh||n===vh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ah)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ch)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ph)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_h)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===xh||n===yh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fg||n===Sh||n===Mh||n===Eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class TR extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class er extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bR={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bR)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new er;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ft,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cs({vertexShader:AR,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new vc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CR extends fr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new RR,p=t.getContextAttributes();let m=null,S=null;const y=[],M=[],R=new Oe;let C=null;const w=new gn;w.layers.enable(1),w.viewport=new ct;const D=new gn;D.layers.enable(2),D.viewport=new ct;const T=[w,D],E=new TR;E.layers.enable(1),E.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=y[ee];return le===void 0&&(le=new pu,y[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=y[ee];return le===void 0&&(le=new pu,y[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=y[ee];return le===void 0&&(le=new pu,y[ee]=le),le.getHandSpace()};function H(ee){const le=M.indexOf(ee.inputSource);if(le===-1)return;const Ee=y[le];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<y.length;ee++){const le=M[ee];le!==null&&(M[ee]=null,y[ee].disconnect(le))}L=null,W=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,s=null,S=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",te),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ur(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:es,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Ee=null,B=null;p.depth&&(B=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?uo:Kr,Ee=p.stencil?co:cr);const re={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ur(f.textureWidth,f.textureHeight,{format:Vn,type:es,depthTexture:new Qg(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(ee){for(let le=0;le<ee.removed.length;le++){const Ee=ee.removed[le],B=M.indexOf(Ee);B>=0&&(M[B]=null,y[B].disconnect(Ee))}for(let le=0;le<ee.added.length;le++){const Ee=ee.added[le];let B=M.indexOf(Ee);if(B===-1){for(let se=0;se<y.length;se++)if(se>=M.length){M.push(Ee),B=se;break}else if(M[se]===null){M[se]=Ee,B=se;break}if(B===-1)break}const re=y[B];re&&re.connect(Ee)}}const q=new O,j=new O;function V(ee,le,Ee){q.setFromMatrixPosition(le.matrixWorld),j.setFromMatrixPosition(Ee.matrixWorld);const B=q.distanceTo(j),re=le.projectionMatrix.elements,se=Ee.projectionMatrix.elements,de=re[14]/(re[10]-1),Ce=re[14]/(re[10]+1),v=(re[9]+1)/re[5],P=(re[9]-1)/re[5],I=(re[8]-1)/re[0],$=(se[8]+1)/se[0],G=de*I,J=de*$,ie=B/(-I+$),ne=ie*-I;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(ie),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),re[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const b=de+ie,x=Ce+ie,N=G-ne,k=J+(B-ne),X=v*Ce/x*b,Y=P*Ce/x*b;ee.projectionMatrix.makePerspective(N,k,X,Y,b,x),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let le=ee.near,Ee=ee.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),E.near=D.near=w.near=le,E.far=D.far=w.far=Ee,(L!==E.near||W!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,W=E.far);const B=ee.parent,re=E.cameras;ge(E,B);for(let se=0;se<re.length;se++)ge(re[se],B);re.length===2?V(E,w,D):E.projectionMatrix.copy(w.projectionMatrix),xe(ee,E,B)};function xe(ee,le,Ee){Ee===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ho*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Me=null;function Re(ee,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let B=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,B=!0);for(let se=0;se<Ee.length;se++){const de=Ee[se];let Ce=null;if(d!==null)Ce=d.getViewport(de);else{const P=h.getViewSubImage(f,de);Ce=P.viewport,se===0&&(e.setRenderTargetTextures(S,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(S))}let v=T[se];v===void 0&&(v=new gn,v.layers.enable(se),v.viewport=new ct,T[se]=v),v.matrix.fromArray(de.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.projectionMatrix.fromArray(de.projectionMatrix),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),se===0&&(E.matrix.copy(v.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),B===!0&&E.cameras.push(v)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){const se=h.getDepthInformation(Ee[0]);se&&se.isValid&&se.texture&&_.init(e,se,s.renderState)}}for(let Ee=0;Ee<y.length;Ee++){const B=M[Ee],re=y[Ee];B!==null&&re!==void 0&&re.update(B,le,c||o)}Me&&Me(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const je=new Jg;je.setAnimationLoop(Re),this.setAnimationLoop=function(ee){Me=ee},this.dispose=function(){}}}const Gs=new Ti,PR=new qe;function LR(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,M=S.envMapRotation;y&&(p.envMap.value=y,Gs.copy(M),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),p.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(Gs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DR(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",p));const R=y.program;n.updateUBOMapping(S,R);const C=e.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function u(S){const y=h();S.__bindingPointIndex=y;const M=i.createBuffer(),R=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],M=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,w=M.length;C<w;C++){const D=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,E=D.length;T<E;T++){const L=D[T];if(d(L,C,T,R)===!0){const W=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let Q=0;Q<H.length;Q++){const q=H[Q],j=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,W+te,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,te),te+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,M,R){const C=S.value,w=y+"_"+M;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const D=R[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return R[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){const y=S.uniforms;let M=0;const R=16;for(let w=0,D=y.length;w<D;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,L=T.length;E<L;E++){const W=T[E],H=Array.isArray(W.value)?W.value:[W.value];for(let te=0,Q=H.length;te<Q;te++){const q=H[te],j=_(q),V=M%R,ge=V%j.boundary,xe=V+ge;M+=ge,xe!==0&&R-xe<j.storage&&(M+=R-xe),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=j.storage}}}const C=M%R;return C>0&&(M+=R-C),S.__size=M,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class IR{constructor(e={}){const{canvas:t=EE(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=bs,this.toneMappingExposure=1;const y=this;let M=!1,R=0,C=0,w=null,D=-1,T=null;const E=new ct,L=new ct;let W=null;const H=new Ve(0);let te=0,Q=t.width,q=t.height,j=1,V=null,ge=null;const xe=new ct(0,0,Q,q),Me=new ct(0,0,Q,q);let Re=!1;const je=new Ef;let ee=!1,le=!1;const Ee=new qe,B=new O,re=new ct,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ce(){return w===null?j:1}let v=n;function P(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${df}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ve,!1),v===null){const F="webgl2";if(v=P(F,A),v===null)throw P(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let I,$,G,J,ie,ne,b,x,N,k,X,Y,pe,ce,he,De,ue,ye,ze,Ne,be,Pe,Ue,dt;function U(){I=new kA(v),I.init(),Pe=new ER(v,I),$=new IA(v,I,e,Pe),G=new yR(v),J=new VA(v),ie=new oR,ne=new MR(v,I,G,ie,$,Pe,J),b=new UA(y),x=new BA(y),N=new KE(v),Ue=new LA(v,N),k=new zA(v,N,J,Ue),X=new WA(v,k,N,J),ze=new GA(v,$,ne),De=new NA(ie),Y=new rR(y,b,x,I,$,Ue,De),pe=new LR(y,ie),ce=new lR,he=new pR(I),ye=new PA(y,b,x,G,X,f,l),ue=new xR(y,X,$),dt=new DR(v,J,$,G),Ne=new DA(v,I,J),be=new HA(v,I,J),J.programs=Y.programs,y.capabilities=$,y.extensions=I,y.properties=ie,y.renderLists=ce,y.shadowMap=ue,y.state=G,y.info=J}U();const me=new CR(y,v);this.xr=me,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=I.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=I.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(Q,q,!1))},this.getSize=function(A){return A.set(Q,q)},this.setSize=function(A,F,K=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,q=F,t.width=Math.floor(A*j),t.height=Math.floor(F*j),K===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Q*j,q*j).floor()},this.setDrawingBufferSize=function(A,F,K){Q=A,q=F,j=K,t.width=Math.floor(A*K),t.height=Math.floor(F*K),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,F,K,Z){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,F,K,Z),G.viewport(E.copy(xe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Me)},this.setScissor=function(A,F,K,Z){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,F,K,Z),G.scissor(L.copy(Me).multiplyScalar(j).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(A){G.setScissorTest(Re=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(A=!0,F=!0,K=!0){let Z=0;if(A){let z=!1;if(w!==null){const _e=w.texture.format;z=_e===yf||_e===xf||_e===vf}if(z){const _e=w.texture.type,Te=_e===es||_e===cr||_e===da||_e===co||_e===mf||_e===_f,Ae=ye.getClearColor(),we=ye.getClearAlpha(),Be=Ae.r,ke=Ae.g,Le=Ae.b;Te?(d[0]=Be,d[1]=ke,d[2]=Le,d[3]=we,v.clearBufferuiv(v.COLOR,0,d)):(g[0]=Be,g[1]=ke,g[2]=Le,g[3]=we,v.clearBufferiv(v.COLOR,0,g))}else Z|=v.COLOR_BUFFER_BIT}F&&(Z|=v.DEPTH_BUFFER_BIT),K&&(Z|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ce.dispose(),he.dispose(),ie.dispose(),b.dispose(),x.dispose(),X.dispose(),Ue.dispose(),dt.dispose(),Y.dispose(),me.dispose(),me.removeEventListener("sessionstart",oi),me.removeEventListener("sessionend",Zf),Us.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=J.autoReset,F=ue.enabled,K=ue.autoUpdate,Z=ue.needsUpdate,z=ue.type;U(),J.autoReset=A,ue.enabled=F,ue.autoUpdate=K,ue.needsUpdate=Z,ue.type=z}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fe(A){const F=A.target;F.removeEventListener("dispose",Fe),$e(F)}function $e(A){Ct(A),ie.remove(A)}function Ct(A){const F=ie.get(A).programs;F!==void 0&&(F.forEach(function(K){Y.releaseProgram(K)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,K,Z,z,_e){F===null&&(F=se);const Te=z.isMesh&&z.matrixWorld.determinant()<0,Ae=dv(A,F,K,Z,z);G.setMaterial(Z,Te);let we=K.index,Be=1;if(Z.wireframe===!0){if(we=k.getWireframeAttribute(K),we===void 0)return;Be=2}const ke=K.drawRange,Le=K.attributes.position;let Qe=ke.start*Be,Tt=(ke.start+ke.count)*Be;_e!==null&&(Qe=Math.max(Qe,_e.start*Be),Tt=Math.min(Tt,(_e.start+_e.count)*Be)),we!==null?(Qe=Math.max(Qe,0),Tt=Math.min(Tt,we.count)):Le!=null&&(Qe=Math.max(Qe,0),Tt=Math.min(Tt,Le.count));const bt=Tt-Qe;if(bt<0||bt===1/0)return;Ue.setup(z,Z,Ae,K,we);let bn,et=Ne;if(we!==null&&(bn=N.get(we),et=be,et.setIndex(bn)),z.isMesh)Z.wireframe===!0?(G.setLineWidth(Z.wireframeLinewidth*Ce()),et.setMode(v.LINES)):et.setMode(v.TRIANGLES);else if(z.isLine){let Ie=Z.linewidth;Ie===void 0&&(Ie=1),G.setLineWidth(Ie*Ce()),z.isLineSegments?et.setMode(v.LINES):z.isLineLoop?et.setMode(v.LINE_LOOP):et.setMode(v.LINE_STRIP)}else z.isPoints?et.setMode(v.POINTS):z.isSprite&&et.setMode(v.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)et.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ie=z._multiDrawStarts,Xt=z._multiDrawCounts,tt=z._multiDrawCount,qn=we?N.get(we).bytesPerElement:1,mr=ie.get(Z).currentProgram.getUniforms();for(let An=0;An<tt;An++)mr.setValue(v,"_gl_DrawID",An),et.render(Ie[An]/qn,Xt[An])}else if(z.isInstancedMesh)et.renderInstances(Qe,bt,z.count);else if(K.isInstancedBufferGeometry){const Ie=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Xt=Math.min(K.instanceCount,Ie);et.renderInstances(Qe,bt,Xt)}else et.render(Qe,bt)};function Wt(A,F,K){A.transparent===!0&&A.side===mi&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,Ia(A,F,K),A.side=Qi,A.needsUpdate=!0,Ia(A,F,K),A.side=mi):Ia(A,F,K)}this.compile=function(A,F,K=null){K===null&&(K=A),p=he.get(K),p.init(F),S.push(p),K.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==K&&A.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Z=new Set;return A.traverse(function(z){const _e=z.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Ae=_e[Te];Wt(Ae,K,z),Z.add(Ae)}else Wt(_e,K,z),Z.add(_e)}),S.pop(),p=null,Z},this.compileAsync=function(A,F,K=null){const Z=this.compile(A,F,K);return new Promise(z=>{function _e(){if(Z.forEach(function(Te){ie.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){z(A);return}setTimeout(_e,10)}I.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Je=null;function Ci(A){Je&&Je(A)}function oi(){Us.stop()}function Zf(){Us.start()}const Us=new Jg;Us.setAnimationLoop(Ci),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(A){Je=A,me.setAnimationLoop(A),A===null?Us.stop():Us.start()},me.addEventListener("sessionstart",oi),me.addEventListener("sessionend",Zf),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,F,w),p=he.get(A,S.length),p.init(F),S.push(p),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(Ee),le=this.localClippingEnabled,ee=De.init(this.clippingPlanes,le),_=ce.get(A,m.length),_.init(),m.push(_),me.enabled===!0&&me.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&bc(_e,F,-1/0,y.sortObjects)}bc(A,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(V,ge),de=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,de&&ye.addToRenderList(_,A),this.info.render.frame++,ee===!0&&De.beginShadows();const K=p.state.shadowsArray;ue.render(K,A,F),ee===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,z=_.transmissive;if(p.setupLights(),F.isArrayCamera){const _e=F.cameras;if(z.length>0)for(let Te=0,Ae=_e.length;Te<Ae;Te++){const we=_e[Te];Qf(Z,z,A,we)}de&&ye.render(A);for(let Te=0,Ae=_e.length;Te<Ae;Te++){const we=_e[Te];Jf(_,A,we,we.viewport)}}else z.length>0&&Qf(Z,z,A,F),de&&ye.render(A),Jf(_,A,F);w!==null&&(ne.updateMultisampleRenderTarget(w),ne.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(y,A,F),Ue.resetDefaultState(),D=-1,T=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&De.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function bc(A,F,K,Z){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||je.intersectsSprite(A)){Z&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);const Te=X.update(A),Ae=A.material;Ae.visible&&_.push(A,Te,Ae,K,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||je.intersectsObject(A))){const Te=X.update(A),Ae=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),re.copy(Te.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ae)){const we=Te.groups;for(let Be=0,ke=we.length;Be<ke;Be++){const Le=we[Be],Qe=Ae[Le.materialIndex];Qe&&Qe.visible&&_.push(A,Te,Qe,K,re.z,Le)}}else Ae.visible&&_.push(A,Te,Ae,K,re.z,null)}}const _e=A.children;for(let Te=0,Ae=_e.length;Te<Ae;Te++)bc(_e[Te],F,K,Z)}function Jf(A,F,K,Z){const z=A.opaque,_e=A.transmissive,Te=A.transparent;p.setupLightsView(K),ee===!0&&De.setGlobalState(y.clippingPlanes,K),Z&&G.viewport(E.copy(Z)),z.length>0&&Da(z,F,K),_e.length>0&&Da(_e,F,K),Te.length>0&&Da(Te,F,K),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Qf(A,F,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new ur(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Ra:es,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Z.id],Te=Z.viewport||E;_e.setSize(Te.z,Te.w);const Ae=y.getRenderTarget();y.setRenderTarget(_e),y.getClearColor(H),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),de&&ye.render(K);const we=y.toneMapping;y.toneMapping=bs;const Be=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ee===!0&&De.setGlobalState(y.clippingPlanes,Z),Da(A,K,Z),ne.updateMultisampleRenderTarget(_e),ne.updateRenderTargetMipmap(_e),I.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Le=0,Qe=F.length;Le<Qe;Le++){const Tt=F[Le],bt=Tt.object,bn=Tt.geometry,et=Tt.material,Ie=Tt.group;if(et.side===mi&&bt.layers.test(Z.layers)){const Xt=et.side;et.side=xn,et.needsUpdate=!0,ed(bt,K,Z,bn,et,Ie),et.side=Xt,et.needsUpdate=!0,ke=!0}}ke===!0&&(ne.updateMultisampleRenderTarget(_e),ne.updateRenderTargetMipmap(_e))}y.setRenderTarget(Ae),y.setClearColor(H,te),Be!==void 0&&(Z.viewport=Be),y.toneMapping=we}function Da(A,F,K){const Z=F.isScene===!0?F.overrideMaterial:null;for(let z=0,_e=A.length;z<_e;z++){const Te=A[z],Ae=Te.object,we=Te.geometry,Be=Z===null?Te.material:Z,ke=Te.group;Ae.layers.test(K.layers)&&ed(Ae,F,K,we,Be,ke)}}function ed(A,F,K,Z,z,_e){A.onBeforeRender(y,F,K,Z,z,_e),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(y,F,K,Z,A,_e),z.transparent===!0&&z.side===mi&&z.forceSinglePass===!1?(z.side=xn,z.needsUpdate=!0,y.renderBufferDirect(K,F,Z,z,A,_e),z.side=Qi,z.needsUpdate=!0,y.renderBufferDirect(K,F,Z,z,A,_e),z.side=mi):y.renderBufferDirect(K,F,Z,z,A,_e),A.onAfterRender(y,F,K,Z,z,_e)}function Ia(A,F,K){F.isScene!==!0&&(F=se);const Z=ie.get(A),z=p.state.lights,_e=p.state.shadowsArray,Te=z.state.version,Ae=Y.getParameters(A,z.state,_e,F,K),we=Y.getProgramCacheKey(Ae);let Be=Z.programs;Z.environment=A.isMeshStandardMaterial?F.environment:null,Z.fog=F.fog,Z.envMap=(A.isMeshStandardMaterial?x:b).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Fe),Be=new Map,Z.programs=Be);let ke=Be.get(we);if(ke!==void 0){if(Z.currentProgram===ke&&Z.lightsStateVersion===Te)return nd(A,Ae),ke}else Ae.uniforms=Y.getUniforms(A),A.onBeforeCompile(Ae,y),ke=Y.acquireProgram(Ae,we),Be.set(we,ke),Z.uniforms=Ae.uniforms;const Le=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=De.uniform),nd(A,Ae),Z.needsLights=mv(A),Z.lightsStateVersion=Te,Z.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=ke,Z.uniformsList=null,ke}function td(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Al.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function nd(A,F){const K=ie.get(A);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function dv(A,F,K,Z,z){F.isScene!==!0&&(F=se),ne.resetTextureUnits();const _e=F.fog,Te=Z.isMeshStandardMaterial?F.environment:null,Ae=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Vt,we=(Z.isMeshStandardMaterial?x:b).get(Z.envMap||Te),Be=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ke=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Le=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,Tt=!!K.morphAttributes.color;let bt=bs;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(bt=y.toneMapping);const bn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=bn!==void 0?bn.length:0,Ie=ie.get(Z),Xt=p.state.lights;if(ee===!0&&(le===!0||A!==T)){const Fn=A===T&&Z.id===D;De.setState(Z,A,Fn)}let tt=!1;Z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Xt.state.version||Ie.outputColorSpace!==Ae||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==we||Z.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==De.numPlanes||Ie.numIntersection!==De.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==ke||Ie.morphTargets!==Le||Ie.morphNormals!==Qe||Ie.morphColors!==Tt||Ie.toneMapping!==bt||Ie.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ie.__version=Z.version);let qn=Ie.currentProgram;tt===!0&&(qn=Ia(Z,F,z));let mr=!1,An=!1,Ac=!1;const Pt=qn.getUniforms(),rs=Ie.uniforms;if(G.useProgram(qn.program)&&(mr=!0,An=!0,Ac=!0),Z.id!==D&&(D=Z.id,An=!0),mr||T!==A){Pt.setValue(v,"projectionMatrix",A.projectionMatrix),Pt.setValue(v,"viewMatrix",A.matrixWorldInverse);const Fn=Pt.map.cameraPosition;Fn!==void 0&&Fn.setValue(v,B.setFromMatrixPosition(A.matrixWorld)),$.logarithmicDepthBuffer&&Pt.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,An=!0,Ac=!0)}if(z.isSkinnedMesh){Pt.setOptional(v,z,"bindMatrix"),Pt.setOptional(v,z,"bindMatrixInverse");const Fn=z.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Pt.setValue(v,"boneTexture",Fn.boneTexture,ne))}z.isBatchedMesh&&(Pt.setOptional(v,z,"batchingTexture"),Pt.setValue(v,"batchingTexture",z._matricesTexture,ne),Pt.setOptional(v,z,"batchingIdTexture"),Pt.setValue(v,"batchingIdTexture",z._indirectTexture,ne),Pt.setOptional(v,z,"batchingColorTexture"),z._colorsTexture!==null&&Pt.setValue(v,"batchingColorTexture",z._colorsTexture,ne));const wc=K.morphAttributes;if((wc.position!==void 0||wc.normal!==void 0||wc.color!==void 0)&&ze.update(z,K,qn),(An||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,Pt.setValue(v,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(rs.envMap.value=we,rs.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&F.environment!==null&&(rs.envMapIntensity.value=F.environmentIntensity),An&&(Pt.setValue(v,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&pv(rs,Ac),_e&&Z.fog===!0&&pe.refreshFogUniforms(rs,_e),pe.refreshMaterialUniforms(rs,Z,j,q,p.state.transmissionRenderTarget[A.id]),Al.upload(v,td(Ie),rs,ne)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Al.upload(v,td(Ie),rs,ne),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(v,"center",z.center),Pt.setValue(v,"modelViewMatrix",z.modelViewMatrix),Pt.setValue(v,"normalMatrix",z.normalMatrix),Pt.setValue(v,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Fn=Z.uniformsGroups;for(let Rc=0,_v=Fn.length;Rc<_v;Rc++){const id=Fn[Rc];dt.update(id,qn),dt.bind(id,qn)}}return qn}function pv(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function mv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,F,K){ie.get(A.texture).__webglTexture=F,ie.get(A.depthTexture).__webglTexture=K;const Z=ie.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const K=ie.get(A);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,K=0){w=A,R=F,C=K;let Z=!0,z=null,_e=!1,Te=!1;if(A){const we=ie.get(A);if(we.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(v.FRAMEBUFFER,null),Z=!1;else if(we.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(we.__hasExternalTextures)ne.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(we.__boundDepthTexture!==Le){if(Le!==null&&ie.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ke=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?z=ke[F][K]:z=ke[F],_e=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?z=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[K]:z=ke,E.copy(A.viewport),L.copy(A.scissor),W=A.scissorTest}else E.copy(xe).multiplyScalar(j).floor(),L.copy(Me).multiplyScalar(j).floor(),W=Re;if(G.bindFramebuffer(v.FRAMEBUFFER,z)&&Z&&G.drawBuffers(A,z),G.viewport(E),G.scissor(L),G.setScissorTest(W),_e){const we=ie.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,K)}else if(Te){const we=ie.get(A.texture),Be=F||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,we.__webglTexture,K||0,Be)}D=-1},this.readRenderTargetPixels=function(A,F,K,Z,z,_e,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){G.bindFramebuffer(v.FRAMEBUFFER,Ae);try{const we=A.texture,Be=we.format,ke=we.type;if(!$.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-Z&&K>=0&&K<=A.height-z&&v.readPixels(F,K,Z,z,Pe.convert(Be),Pe.convert(ke),_e)}finally{const we=w!==null?ie.get(w).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,F,K,Z,z,_e,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){G.bindFramebuffer(v.FRAMEBUFFER,Ae);try{const we=A.texture,Be=we.format,ke=we.type;if(!$.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-Z&&K>=0&&K<=A.height-z){const Le=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.bufferData(v.PIXEL_PACK_BUFFER,_e.byteLength,v.STREAM_READ),v.readPixels(F,K,Z,z,Pe.convert(Be),Pe.convert(ke),0),v.flush();const Qe=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);await TE(v,Qe,4);try{v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,_e)}finally{v.deleteBuffer(Le),v.deleteSync(Qe)}return _e}}finally{const we=w!==null?ie.get(w).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(A,F=null,K=0){A.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-K),z=Math.floor(A.image.width*Z),_e=Math.floor(A.image.height*Z),Te=F!==null?F.x:0,Ae=F!==null?F.y:0;ne.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,K,0,0,Te,Ae,z,_e),G.unbindTexture()},this.copyTextureToTexture=function(A,F,K=null,Z=null,z=0){A.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],F=arguments[2],z=arguments[3]||0,K=null);let _e,Te,Ae,we,Be,ke;K!==null?(_e=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ae=K.min.x,we=K.min.y):(_e=A.image.width,Te=A.image.height,Ae=0,we=0),Z!==null?(Be=Z.x,ke=Z.y):(Be=0,ke=0);const Le=Pe.convert(F.format),Qe=Pe.convert(F.type);ne.setTexture2D(F,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Tt=v.getParameter(v.UNPACK_ROW_LENGTH),bt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(v.UNPACK_SKIP_PIXELS),et=v.getParameter(v.UNPACK_SKIP_ROWS),Ie=v.getParameter(v.UNPACK_SKIP_IMAGES),Xt=A.isCompressedTexture?A.mipmaps[z]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,Xt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Xt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(v.UNPACK_SKIP_ROWS,we),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,z,Be,ke,_e,Te,Le,Qe,Xt.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,z,Be,ke,Xt.width,Xt.height,Le,Xt.data):v.texSubImage2D(v.TEXTURE_2D,z,Be,ke,_e,Te,Le,Qe,Xt),v.pixelStorei(v.UNPACK_ROW_LENGTH,Tt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,bt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(v.UNPACK_SKIP_ROWS,et),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ie),z===0&&F.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(A,F,K=null,Z=null,z=0){A.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],F=arguments[3],z=arguments[4]||0);let _e,Te,Ae,we,Be,ke,Le,Qe,Tt;const bt=A.isCompressedTexture?A.mipmaps[z]:A.image;K!==null?(_e=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ae=K.max.z-K.min.z,we=K.min.x,Be=K.min.y,ke=K.min.z):(_e=bt.width,Te=bt.height,Ae=bt.depth,we=0,Be=0,ke=0),Z!==null?(Le=Z.x,Qe=Z.y,Tt=Z.z):(Le=0,Qe=0,Tt=0);const bn=Pe.convert(F.format),et=Pe.convert(F.type);let Ie;if(F.isData3DTexture)ne.setTexture3D(F,0),Ie=v.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)ne.setTexture2DArray(F,0),Ie=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Xt=v.getParameter(v.UNPACK_ROW_LENGTH),tt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),qn=v.getParameter(v.UNPACK_SKIP_PIXELS),mr=v.getParameter(v.UNPACK_SKIP_ROWS),An=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,bt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,bt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,we),v.pixelStorei(v.UNPACK_SKIP_ROWS,Be),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ke),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Ie,z,Le,Qe,Tt,_e,Te,Ae,bn,et,bt.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(Ie,z,Le,Qe,Tt,_e,Te,Ae,bn,bt.data):v.texSubImage3D(Ie,z,Le,Qe,Tt,_e,Te,Ae,bn,et,bt),v.pixelStorei(v.UNPACK_ROW_LENGTH,Xt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,tt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,qn),v.pixelStorei(v.UNPACK_SKIP_ROWS,mr),v.pixelStorei(v.UNPACK_SKIP_IMAGES,An),z===0&&F.generateMipmaps&&v.generateMipmap(Ie),G.unbindTexture()},this.initRenderTarget=function(A){ie.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),G.unbindTexture()},this.resetState=function(){R=0,C=0,w=null,G.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sf?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===gc?"display-p3":"srgb"}}class NR extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class UR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $r("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new O;class bf{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qp=new O,em=new ct,tm=new ct,OR=new O,nm=new qe,al=new O,mu=new Ai,im=new qe,_u=new Ca;class FR extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ip,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ss),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mu.copy(this.boundingSphere),mu.applyMatrix4(s),e.ray.intersectsSphere(mu)!==!1&&(im.copy(s).invert(),_u.copy(e.ray).applyMatrix4(im),!(this.boundingBox!==null&&_u.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_u)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ip?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===YM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;em.fromBufferAttribute(s.attributes.skinIndex,e),tm.fromBufferAttribute(s.attributes.skinWeight,e),Qp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=tm.getComponent(r);if(o!==0){const a=em.getComponent(r);nm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(OR.copy(Qp).applyMatrix4(nm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class s0 extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class r0 extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,u=jt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sm=new qe,BR=new qe;class Af{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:BR;sm.multiplyMatrices(a,t[r]),sm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Af(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new r0(t,e,e,Vn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new s0),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class wh extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Nr=new qe,rm=new qe,ll=[],om=new ss,kR=new qe,Oo=new vn,Fo=new Ai;class zR extends vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),om.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(om)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Fo.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(n),e.ray.intersectsSphere(Fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Nr),rm.multiplyMatrices(n,Nr),Oo.matrixWorld=rm,Oo.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){const l=ll[o];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new r0(new Float32Array(s*this.count),s,this.count,gf,Jn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class o0 extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new O,jl=new O,am=new qe,Bo=new Ca,cl=new Ai,gu=new O,lm=new O;class wf extends Et{constructor(e=new ri,t=new o0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ql.fromBufferAttribute(t,s-1),jl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ql.distanceTo(jl);e.setAttribute("lineDistance",new Ki(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;am.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(am);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),S=u.getX(_+1),y=ul(this,e,Bo,l,m,S);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=ul(this,e,Bo,l,_,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=ul(this,e,Bo,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=ul(this,e,Bo,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ul(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(ql.fromBufferAttribute(o,s),jl.fromBufferAttribute(o,r),t.distanceSqToSegment(ql,jl,gu,lm)>n)return;gu.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(gu);if(!(l<e.near||l>e.far))return{distance:l,point:lm.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const cm=new O,um=new O;class HR extends wf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cm.fromBufferAttribute(t,s),um.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cm.distanceTo(um);e.setAttribute("lineDistance",new Ki(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VR extends wf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class a0 extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hm=new qe,Rh=new Ca,hl=new Ai,fl=new O;class GR extends Et{constructor(e=new ri,t=new a0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;hm.copy(s).invert(),Rh.copy(e.ray).applyMatrix4(hm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);fl.fromBufferAttribute(h,p),fm(fl,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)fl.fromBufferAttribute(h,g),fm(fl,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fm(i,e,t,n,s,r,o){const a=Rh.distanceSqToPoint(i);if(a<t){const l=new O;Rh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class WR extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:hn,this.magFilter=r!==void 0?r:hn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ga extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kg,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends ga{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function dl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function XR(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qR(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function dm(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function l0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Pa{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jR extends Pa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sp,endingEnd:sp}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rp:r=e,a=2*t-n;break;case op:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rp:o=e,l=2*n-t;break;case op:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*_+.5*g,M=d*p-d*_;for(let R=0;R!==a;++R)r[R]=m*o[u+R]+S*o[c+R]+y*o[l+R]+M*o[h+R];return r}}class YR extends Pa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class KR extends Pa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dl(t,this.TimeBufferType),this.values=dl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dl(e.times,Array),values:dl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new KR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new YR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&XR(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=ma;class bo extends Ri{constructor(e,t,n){super(e,t,n)}}bo.prototype.ValueTypeName="bool";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=pa;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class c0 extends Ri{}c0.prototype.ValueTypeName="color";class po extends Ri{}po.prototype.ValueTypeName="number";class $R extends Pa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ei.slerpFlat(r,0,o,c-a,o,c,l);return r}}class mo extends Ri{InterpolantFactoryMethodLinear(e){return new $R(this.times,this.values,this.getValueSize(),e)}}mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Ri{constructor(e,t,n){super(e,t,n)}}Ao.prototype.ValueTypeName="string";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=pa;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Ri{}_o.prototype.ValueTypeName="vector";class ZR{constructor(e="",t=-1,n=[],s=KM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(QR(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ri.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=qR(l);l=dm(l,1,u),c=dm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new po(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];l0(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new po(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(_o,d+".position",f,"pos",s),n(mo,d+".quaternion",f,"rot",s),n(_o,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JR(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return po;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return c0;case"quaternion":return mo;case"bool":case"boolean":return bo;case"string":return Ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function QR(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JR(i.type);if(i.times===void 0){const t=[],n=[];l0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const xs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class e1{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const t1=new e1;class dr{constructor(e){this.manager=e!==void 0?e:t1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class n1 extends Error{constructor(e,t){super(e),this.response=t}}class Yl extends dr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:y,value:M})=>{if(y)m.close();else{_+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,w=u.length;C<w;C++){const D=u[C];D.onProgress&&D.onProgress(R)}m.enqueue(M),S()}},y=>{m.error(y)})}}});return new Response(p)}else throw new n1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{xs.add(e,c);const u=Fi[e];delete Fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class i1 extends dr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_a("img");function l(){u(),xs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class s1 extends dr{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,o=new i1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Sc extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vu=new qe,pm=new O,mm=new O;class Rf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r1 extends Rf{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ho*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class o1 extends Sc{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new r1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _m=new qe,ko=new O,xu=new O;class a1 extends Rf{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(ko),xu.copy(n.position),xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xu),n.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),_m.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_m)}}class u0 extends Sc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class l1 extends Rf{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h0 extends Sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new l1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class c1 extends Sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ia{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class u1 extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),xs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});xs.add(e,l),r.manager.itemStart(e)}}const Cf="\\[\\]\\.:\\/",h1=new RegExp("["+Cf+"]","g"),Pf="[^"+Cf+"]",f1="[^"+Cf.replace("\\.","")+"]",d1=/((?:WC+[\/:])*)/.source.replace("WC",Pf),p1=/(WCOD+)?/.source.replace("WCOD",f1),m1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),_1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),g1=new RegExp("^"+d1+p1+m1+_1+"$"),v1=["material","materials","bones","map"];class x1{constructor(e,t,n){const s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h1,"")}static parseTrackName(e){const t=g1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);v1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=x1;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class y1 extends fr{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);function vm(i,e){if(e===$M)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Th||e===Bg){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Th)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class S1 extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new A1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new z1(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ia.extractUrlBase(e);o=ia.resolveURL(c,this.path)}else o=ia.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Yl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===f0){try{o[Ye.KHR_BINARY_GLTF]=new H1(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new eC(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new T1;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new V1(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new G1;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new W1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function M1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class E1{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Vt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new h0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new u0(u),c.distance=h;break;case"spot":c=new o1(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class T1{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Qs}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(s)}}class b1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class A1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}}class w1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class R1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class C1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class P1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class L1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}}class D1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class I1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}}class N1{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class U1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class O1{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class F1{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class B1{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class k1{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class z1{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new qe,p=new O,m=new Ei,S=new O(1,1,1),y=new zR(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,_.compose(p,m,S));for(const M in l)if(M==="_COLOR_0"){const R=l[M];y.instanceColor=new wh(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Et.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const f0="glTF",zo=12,xm={JSON:1313821514,BIN:5130562};class H1{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==f0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zo,r=new DataView(e,zo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xm.JSON){const c=new Uint8Array(e,zo+o,a);this.content=n.decode(c)}else if(l===xm.BIN){const c=zo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class V1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Ch[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ch[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Jr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},a,c,Vt,f)})})}}class G1{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class W1{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class d0 extends Pa{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,S=1-p,y=m-f+h;for(let M=0;M!==a;M++){const R=o[_+M+a],C=o[_+M+l]*u,w=o[g+M+a],D=o[g+M]*u;r[M]=S*R+y*C+p*w+m*D}return r}}const X1=new Ei;class q1 extends d0{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return X1.fromArray(r).normalize().toArray(r),r}}const zn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ym={9728:jt,9729:hn,9984:Rg,9985:yl,9986:Go,9987:qi},Sm={33071:vs,33648:Hl,10497:lo},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j1={CUBICSPLINE:void 0,LINEAR:ma,STEP:pa},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Y1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ga({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),i.DefaultMaterial}function Ws(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function K1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function $1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Z1(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mu(t.attributes):e=i.indices+":"+Mu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mu(i.targets[n]);return e}function Mu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ph(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function J1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Q1=new qe;class eC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new M1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new s1(this.options.manager):this.textureLoader=new u1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ws(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ia.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=yu[s.type],a=Jr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Yt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=yu[s.type],c=Jr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(S);y||(_=new c(a,m*d,s.count*d/u),y=new UR(_,d/u),t.cache.add(S,y)),p=new bf(y,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),p=new Yt(_,l,g);if(s.sparse!==void 0){const m=yu.SCALAR,S=Jr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,R=new S(o[1],y,s.sparse.count*m),C=new c(o[2],M,s.sparse.count*l);a!==null&&(p=new Yt(p.array.slice(),p.itemSize,p.normalized));for(let w=0,D=R.length;w<D;w++){const T=R[w];if(p.setX(T,C[w*l]),l>=2&&p.setY(T,C[w*l+1]),l>=3&&p.setZ(T,C[w*l+2]),l>=4&&p.setW(T,C[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=ym[f.magFilter]||hn,u.minFilter=ym[f.minFilter]||qi,u.wrapS=Sm[f.wrapS]||lo,u.wrapT=Sm[f.wrapT]||lo,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Ft(_);p.needsUpdate=!0,f(p)}),t.load(ia.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),zi(h,o),h.userData.mimeType=o.mimeType||J1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new a0,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new o0,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ga}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Vt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mi);const u=r.alphaMode||Su.OPAQUE;if(u===Su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Su.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Qs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qs){const h=r.emissiveFactor;a.emissive=new Ve().setRGB(h[0],h[1],h[2],Vt)}return r.emissiveTexture!==void 0&&o!==Qs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),zi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ws(s,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Z1(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Mm(new ri,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Y1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const S=c[d];if(p.mode===zn.TRIANGLES||p.mode===zn.TRIANGLE_STRIP||p.mode===zn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new FR(_,S):new vn(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===zn.TRIANGLE_STRIP?m.geometry=vm(m.geometry,Bg):p.mode===zn.TRIANGLE_FAN&&(m.geometry=vm(m.geometry,Th));else if(p.mode===zn.LINES)m=new HR(_,S);else if(p.mode===zn.LINE_STRIP)m=new wf(_,S);else if(p.mode===zn.LINE_LOOP)m=new VR(_,S);else if(p.mode===zn.POINTS)m=new GR(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&$1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),zi(m,r),p.extensions&&Ws(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ws(s,h[0],r),h[0];const f=new er;r.extensions&&Ws(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(Hg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new xc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Af(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let S=0,y=f.length;S<y;S++){const M=f[S],R=d[S],C=g[S],w=_[S],D=p[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const T=n._createAnimationTracks(M,R,C,w,D);if(T)for(let E=0;E<T.length;E++)m.push(T[E])}return new ZR(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Q1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new s0:c.length>1?u=new er:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),zi(u,r),r.extensions&&Ws(n,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new er;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&Ws(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof yi||f instanceof Ft)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ds[r.path]===ds.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ds[r.path]){case ds.weights:c=po;break;case ds.rotation:c=mo;break;case ds.position:case ds.scale:c=_o;break;default:switch(n.itemSize){case 1:c=po;break;case 2:case 3:default:c=_o;break}break}const u=s.interpolation!==void 0?j1[s.interpolation]:ma,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ds[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ph(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof mo?q1:d0;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tC(i,e,t){const n=e.attributes,s=new ss;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=Ph(Jr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Ph(Jr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Mm(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Ch[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),zi(i,e),tC(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?K1(i,e.targets,t):i})}const Eu=new WeakMap;class nC extends dr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new Yl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ot,n).catch(n)}decodeDracoFile(e,t,n,s,r=Vt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Eu.has(e)){const l=Eu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Eu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new ri;e.index&&t.setIndex(new Yt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new Yt(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ot)return;const n=new Ve;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Yl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=iC.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function iC(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let S,y;if(c.useUniqueIDs)y=u[p],S=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[p]]),y===-1)continue;S=a.GetAttribute(f,y)}const M=s(o,a,f,p,m,S);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function s(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,p=r(o,u),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,p,_,m);const S=new u(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:S,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Em={type:"change"},Lf={type:"start"},p0={type:"end"},pl=new Ca,Tm=new _s,sC=Math.cos(70*Hg.DEG2RAD),Nt=new O,pn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tu=1e-6;class rC extends y1{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ei,this._lastTargetPosition=new O,this._quat=new Ei().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gm,this._sphericalDelta=new gm,this._scale=1,this._panOffset=new O,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new O,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aC.bind(this),this._onPointerDown=oC.bind(this),this._onPointerUp=lC.bind(this),this._onContextMenu=mC.bind(this),this._onMouseWheel=hC.bind(this),this._onKeyDown=fC.bind(this),this._onTouchStart=dC.bind(this),this._onTouchMove=pC.bind(this),this._onMouseDown=cC.bind(this),this._onMouseMove=uC.bind(this),this._interceptControlDown=_C.bind(this),this._interceptControlUp=gC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Em),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<sC?this.object.lookAt(this.target):(Tm.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(Tm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tu||this._lastTargetPosition.distanceToSquared(this.target)>Tu?(this.dispatchEvent(Em),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function oC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function aC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function lC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(p0),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case jr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case jr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Lf)}function uC(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hC(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(Lf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(p0))}function fC(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function dC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Lf)}function pC(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function mC(i){this.enabled!==!1&&i.preventDefault()}function _C(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function m0(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},go={duration:.5,overwrite:!1,delay:0},Df,Kt,vt,Gn=1e8,ht=1/Gn,Lh=Math.PI*2,vC=Lh/4,xC=0,_0=Math.sqrt,yC=Math.cos,SC=Math.sin,Gt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},If=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},Nf=function(){return typeof window<"u"},ml=function(e){return wt(e)||Gt(e)},g0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,MC=/random\([^)]+\)/g,EC=/,\s*/g,bm=/(?:-?\.?\d|\.)+/gi,v0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,x0=/[+-]=-?[.\d]+/,TC=/[^,'"\[\]\s]+/gi,bC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,ui,Dh,Uf,Un={},Kl={},y0,S0=function(e){return(Kl=vo(e,Un))&&Tn},Of=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},va=function(e,t){return!t&&console.warn(e)},M0=function(e,t){return e&&(Un[e]=t)&&Kl&&(Kl[e]=t)||Un},xa=function(){return 0},AC={suppressEvents:!0,isStart:!0,kill:!1},wl={suppressEvents:!0,kill:!1},wC={suppressEvents:!0},Ff={},As=[],Ih={},E0,Cn={},Au={},Am=30,Rl=[],Bf="",kf=function(e){var t=e[0],n,s;if(bi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Rl.length;s--&&!Rl[s].targetTest(t););n=Rl[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new j0(e[s],n)))||e.splice(s,1);return e},rr=function(e){return e._gsap||kf(Wn(e))[0]._gsap},T0=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():If(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},Qr=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},RC=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},$l=function(){var e=As.length,t=As.slice(0),n,s;for(Ih={},As.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},zf=function(e){return!!(e._initted||e._startAt||e.add)},b0=function(e,t,n,s){As.length&&!Kt&&$l(),e.render(t,n,!!(Kt&&t<0&&zf(e))),As.length&&!Kt&&$l()},A0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(TC).length<2?t:Gt(e)?e.trim():e},w0=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CC=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},vo=function(e,t){for(var n in t)e[n]=t[n];return e},wm=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Zl=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},sa=function(e){var t=e.parent||yt,n=e.keyframes?CC(sn(e.keyframes)):On;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},PC=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},R0=function(e,t,n,s,r){var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Mc=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},Ps=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},LC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nh=function(e,t,n,s){return e._startAt&&(Kt?e._startAt.revert(wl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},DC=function i(e){return!e||e._ts&&i(e.parent)},Rm=function(e){return e._repeat?xo(e._tTime,e=e.duration()+e._rDelay)*e:0},xo=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},Jl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ec=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},Tc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ec(e),n._dirty||or(n,e)),e},C0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jl(e.rawTime(),t),(!t._dur||La(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},gi=function(e,t,n,s){return t.parent&&Ps(t),t._start=xt((ts(n)?n:n||e!==yt?kn(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),R0(e,t,"_first","_last",e._sort?"_start":0),Uh(t)||(e._recent=t),s||C0(e,t),e._ts<0&&Tc(e,e._tTime),e},P0=function(e,t){return(Un.ScrollTrigger||Of("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},L0=function(e,t,n,s,r){if(Vf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&E0!==Pn.frame)return As.push(e),e._lazy=[r,s],1},IC=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},NC=function(e,t,n,s){var r=e.ratio,o=t<0||!t&&(!e._start&&IC(e)&&!(!e._initted&&Uh(e))||(e._ts<0||e._dp._ts<0)&&!Uh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=La(0,e._tDur,t),u=xo(l,a),e._yoyo&&u&1&&(o=1-o),u!==xo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Kt||s||e._zTime===ht||!t&&e._zTime){if(!e._initted&&L0(e,t,s,n,l))return;for(h=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Nh(e,t,n,!0),e._onUpdate&&!n&&Dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ps(e,1),!n&&!Kt&&(Dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},UC=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},yo=function(e,t,n,s){var r=e._repeat,o=xt(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:xt(o*(r+1)+e._rDelay*r):o,a>0&&!s&&Tc(e,e._tTime=e._tDur*a),e.parent&&Ec(e),n||or(e.parent,e),e},Cm=function(e){return e instanceof fn?or(e):yo(e,e._dur)},OC={_start:0,endTime:xa,totalDuration:xa},kn=function i(e,t,n){var s=e.labels,r=e._recent||OC,o=e.duration()>=Gn?r.endTime(!1):e._dur,a,l,c;return Gt(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ra=function(e,t,n){var s=ts(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Dt(t[0],o,t[r+1])},Ns=function(e,t){return e||e===0?t(e):t},La=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!Gt(e)||!(t=bC.exec(e))?"":t[1]},FC=function(e,t,n){return Ns(n,function(s){return La(e,t,s)})},Oh=[].slice,D0=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==ui},BC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return Gt(s)&&!t||D0(s,1)?(r=n).push.apply(r,Wn(s)):n.push(s)})||n},Wn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Gt(e)&&!n&&(Dh||!So())?Oh.call((t||Uf).querySelectorAll(e),0):sn(e)?BC(e,n):D0(e)?Oh.call(e,0):e?[e]:[]},Fh=function(e){return e=Wn(e)[0]||va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?va("Invalid scope")||Uf.createElement("div"):e)}},I0=function(e){return e.sort(function(){return .5-Math.random()})},N0=function(e){if(wt(e))return e;var t=bi(e)?e:{each:e},n=ar(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=t.axis,u=s,h=s;return Gt(s)?u=h={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(u=s[0],h=s[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,S,y,M,R,C,w,D,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!T){for(w=-Gn;w<(w=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=o[_]=[],m=l?Math.min(T,_)*u-.5:s%T,S=T===Gn?0:l?_*h/T-.5:s/T|0,w=0,D=Gn,C=0;C<_;C++)y=C%T-m,M=S-(C/T|0),p[C]=R=c?Math.abs(c==="y"?M:y):_0(y*y+M*M),R>w&&(w=R),R<D&&(D=R);s==="random"&&I0(p),p.max=w-D,p.min=D,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(s==="edges"?-1:1),p.b=_<0?r-_:r,p.u=tn(t.amount||t.each)||0,n=n&&_<0?W0(n):n}return _=(p[f]-p.min)/p.max||0,xt(p.b+(n?n(_):_)*p.v)+p.u}},Bh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=xt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(ts(n)?0:tn(n))}},U0=function(e,t){var n=sn(e),s,r;return!n&&bi(e)&&(s=n=e.radius||Gn,e.values?(e=Wn(e.values),(r=!ts(e[0]))&&(s*=s)):e=Bh(e.increment)),Ns(t,n?wt(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Gn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!s||c<=s?e[u]:o,r||u===o||ts(o)?u:u+tn(o)}:Bh(e))},O0=function(e,t,n,s){return Ns(sn(e)?!t:n===!0?!!(n=0):!s,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},kC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,o){return o(r)},s)}},zC=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},HC=function(e,t,n){return B0(e,t,0,1,n)},F0=function(e,t,n){return Ns(n,function(s){return e[~~t(s)]})},VC=function i(e,t,n){var s=t-e;return sn(e)?F0(e,i(0,e.length),t):Ns(n,function(r){return(s+(r-e)%s)%s+e})},GC=function i(e,t,n){var s=t-e,r=s*2;return sn(e)?F0(e,i(0,e.length-1),t):Ns(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},ya=function(e){return e.replace(MC,function(t){var n=t.indexOf("[")+1,s=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(EC);return O0(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},B0=function(e,t,n,s,r){var o=t-e,a=s-n;return Ns(r,function(l){return n+((l-e)/o*a||0)})},WC=function i(e,t,n,s){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Gt(e),a={},l,c,u,h,f;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else s||(e=vo(sn(e)?[]:{},e));if(!u){for(l in t)Hf.call(a,e,l,"get",t[l]);r=function(g){return Xf(g,a)||(o?e.p:e)}}}return Ns(n,r)},Pm=function(e,t,n){var s=e.labels,r=Gn,o,a,l;for(o in s)a=s[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Dn=function(e,t,n){var s=e.vars,r=s[t],o=vt,a=e._ctx,l,c,u;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&As.length&&$l(),a&&(vt=a),u=l?r.apply(c,l):r.call(c),vt=o,u},Xo=function(e){return Ps(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Dn(e,"onInterrupt"),e},Vr,k0=[],z0=function(e){if(e)if(e=!e.name&&e.default||e,Nf()||e.headless){var t=e.name,n=wt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:xa,render:Xf,add:Hf,kill:oP,modifier:rP,rawVars:0},o={targetTest:0,get:0,getSetter:Wf,aliases:{},register:0};if(So(),e!==s){if(Cn[t])return;On(s,On(Zl(e,r),o)),vo(s.prototype,vo(r,Zl(e,o))),Cn[s.prop=t]=s,e.targetTest&&(Rl.push(s),Ff[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}M0(t,s),e.register&&e.register(Tn,s,Mn)}else k0.push(e)},ut=255,qo={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},H0=function(e,t,n){var s=e?ts(e)?[e>>16,e>>8&ut,e&ut]:0:qo.black,r,o,a,l,c,u,h,f,d,g;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qo[e])s=qo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ut,s&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(s=g=e.match(bm),!t)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,s.length>3&&(s[3]*=1),s[0]=wu(l+1/3,r,o),s[1]=wu(l,r,o),s[2]=wu(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(v0),n&&s.length<4&&(s[3]=1),s}else s=e.match(bm)||qo.transparent;s=s.map(Number)}return t&&!g&&(r=s[0]/ut,o=s[1]/ut,a=s[2]/ut,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},V0=function(e){var t=[],n=[],s=-1;return e.split(ws).forEach(function(r){var o=r.match(Hr)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},Lm=function(e,t,n){var s="",r=(e+s).match(ws),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=H0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=V0(e),l=n.c,l.join(s)!==u.c.join(s)))for(c=e.replace(ws,"1").split(Hr),h=c.length-1;a<h;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(ws),h=c.length-1;a<h;a++)s+=c[a]+r[a];return s+c[h]},ws=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),XC=/hsl[a]?\(/,G0=function(e){var t=e.join(" "),n;if(ws.lastIndex=0,ws.test(t))return n=XC.test(t),e[1]=Lm(e[1],n),e[0]=Lm(e[0],n,V0(e[1])),!0},Sa,Pn=function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(p){var m=i()-s,S=p===!0,y,M,R,C;if((m>e||m<0)&&(n+=m-t),s+=m,R=s-n,y=R-o,(y>0||S)&&(C=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=y+(y>=r?4:r-y),M=1),S||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](R,f,C,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){y0&&(!Dh&&Nf()&&(ui=Dh=window,Uf=ui.document||{},Un.gsap=Tn,(ui.gsapVersions||(ui.gsapVersions=[])).push(Tn.version),S0(Kl||ui.GreenSockGlobals||!ui.gsap&&ui||{}),k0.forEach(z0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Sa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sa=0,c=xa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,S){var y=m?function(M,R,C,w){p(M,R,C,w),h.remove(y)}:p;return h.remove(p),a[S?"unshift":"push"](y),So(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),So=function(){return!Sa&&Pn.wake()},Ke={},qC=/^[\d.\-M][\d.\-,\s]/,jC=/["']/g,YC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[s]=isNaN(c)?c.replace(jC,"").trim():+c,s=l.substr(a+1).trim();return t},KC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},$C=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[YC(t[1])]:KC(e).split(",").map(A0)):Ke._CE&&qC.test(e)?Ke._CE("",e):n},W0=function(e){return function(t){return 1-e(1-t)}},X0=function i(e,t){for(var n=e._first,s;n;)n instanceof fn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},ar=function(e,t){return e&&(wt(e)?e:Ke[e]||$C(e))||t},pr=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},o;return Sn(e,function(a){Ke[a]=Un[a]=r,Ke[o=a.toLowerCase()]=n;for(var l in r)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=r[l]}),r},q0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ru=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Lh*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*SC((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:q0(a);return r=Lh/r,l.config=function(c,u){return i(e,c,u)},l},Cu=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:q0(n);return s.config=function(r){return i(e,r)},s};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;pr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;pr("Elastic",Ru("in"),Ru("out"),Ru());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<s?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};pr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);pr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});pr("Circ",function(i){return-(_0(1-i*i)-1)});pr("Sine",function(i){return i===1?1:-yC(i*vC)+1});pr("Back",Cu("in"),Cu("out"),Cu());Ke.SteppedEase=Ke.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,o=1-ht;return function(a){return((s*La(0,o,a)|0)+r)*n}}};go.ease=Ke["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Bf+=i+","+i+"Params,"});var j0=function(e,t){this.id=xC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:T0,this.set=t?t.getSetter:Wf},Ma=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yo(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Sa||Pn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(So(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Tc(this,n),!r._dp||r.parent||C0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),b0(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rm(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rm(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?xo(this._tTime,r)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Jl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),Ec(this),LC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(So(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=xt(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&gi(s,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jl(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wC);var s=Kt;return Kt=n,zf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Cm(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(kn(this,n),yn(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,yn(s)),this._dur||(this._zTime=-ht),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-ht)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this,r=s._prom;return new Promise(function(o){var a=wt(n)?n:w0,l=function(){var u=s.then;s.then=null,r&&r(),wt(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=u),o(a),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},e.kill=function(){Xo(this)},i}();On(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var fn=function(i){m0(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=yn(n.sortChildren),yt&&gi(n.parent||yt,Hi(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&P0(Hi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return ra(0,arguments,this),this},t.from=function(s,r,o){return ra(1,arguments,this),this},t.fromTo=function(s,r,o,a){return ra(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,sa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Dt(s,r,kn(this,o),1),this},t.call=function(s,r,o){return gi(this,Dt.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Dt(s,o,kn(this,l)),this},t.staggerFrom=function(s,r,o,a,l,c,u){return o.runBackwards=1,sa(o).immediateRender=yn(o.immediateRender),this.staggerTo(s,r,o,a,l,c,u)},t.staggerFromTo=function(s,r,o,a,l,c,u,h){return a.startAt=o,sa(a).immediateRender=yn(a.immediateRender),this.staggerTo(s,r,a,l,c,u,h)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:xt(s),h=this._zTime<0!=s<0&&(this._initted||!c),f,d,g,_,p,m,S,y,M,R,C,w;if(this!==yt&&u>l&&s>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,s+=this._time-a),f=u,M=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,r,o);if(f=xt(u%p),u===l?(_=this._repeat,f=c):(R=xt(u/p),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=xo(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),C&&_&1&&(f=c-f,w=1),_!==R&&!this._lock){var D=C&&R&1,T=D===(C&&_&1);if(_<R&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(w?0:xt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;X0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=UC(this,xt(a),xt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&u&&c&&!r&&!R&&(Dn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&s>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-ht);break}}d=g}else{d=this._last;for(var E=s<0?s:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,r,o||Kt&&zf(d)),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=E?-ht:ht);break}}d=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-ht)._zTime=f>=a?1:-1,this._ts))return this._start=M,Ec(this),this.render(s,r,o);this._onUpdate&&!r&&Dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ps(this,1),!r&&!(s<0&&!a)&&(u||a||!l)&&(Dn(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(ts(r)||(r=kn(this,r,s)),!(s instanceof Ma)){if(sn(s))return s.forEach(function(a){return o.add(a,r)}),this;if(Gt(s))return this.addLabel(s,r);if(wt(s))s=Dt.delayedCall(0,s);else return this}return this!==s?gi(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Dt?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return Gt(s)?this.removeLabel(s):wt(s)?this.killTweensOf(s):(s.parent===this&&Mc(this,s),s===this._recent&&(this._recent=this._last),or(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(Pn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=kn(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=Dt.delayedCall(0,r||xa,o);return a.data="isPause",this._hasPause=1,gi(this,a,kn(this,s))},t.removePause=function(s){var r=this._first;for(s=kn(this,s);r;)r._start===s&&r.data==="isPause"&&Ps(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)ys!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=Wn(s),l=this._first,c=ts(r),u;l;)l instanceof Dt?RC(l._targets,a)&&(c?(!ys||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=kn(o,s),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Dt.to(o,On({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&yo(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,On({startAt:{time:kn(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Pm(this,kn(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Pm(this,kn(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(s=xt(s);a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return or(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),or(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=Gn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=xt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;yo(o,o===yt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(yt._ts&&(b0(yt,Jl(s,yt)),E0=Pn.frame),Pn.frame>=Am){Am+=Nn.autoSleep||120;var r=yt._first;if((!r||!r._ts)&&Nn.autoSleep&&Pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pn.sleep()}}},e}(Ma);On(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZC=function(e,t,n,s,r,o,a){var l=new Mn(this._pt,e,t,0,1,Q0,null,r),c=0,u=0,h,f,d,g,_,p,m,S;for(l.b=n,l.e=s,n+="",s+="",(m=~s.indexOf("random("))&&(s=ya(s)),o&&(S=[n,s],o(S,e,t),n=S[0],s=S[1]),f=n.match(bu)||[];h=bu.exec(s);)g=h[0],_=s.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Qr(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=bu.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(x0.test(s)||m)&&(l.e=0),this._pt=l,l},Hf=function(e,t,n,s,r,o,a,l,c,u){wt(s)&&(s=s(r||0,e,o));var h=e[t],f=n!=="get"?n:wt(h)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=wt(h)?c?nP:Z0:Gf,g;if(Gt(s)&&(~s.indexOf("random(")&&(s=ya(s)),s.charAt(1)==="="&&(g=Qr(f,s)+(tn(f)||0),(g||g===0)&&(s=g))),!u||f!==s||kh)return!isNaN(f*s)&&s!==""?(g=new Mn(this._pt,e,t,+f||0,s-(f||0),typeof h=="boolean"?sP:J0,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Of(t,s),ZC.call(this,e,t,f,s,d,l||Nn.stringFilter,c))},JC=function(e,t,n,s,r){if(wt(e)&&(e=oa(e,r,t,n,s)),!bi(e)||e.style&&e.nodeType||sn(e)||g0(e))return Gt(e)?oa(e,r,t,n,s):e;var o={},a;for(a in e)o[a]=oa(e[a],r,t,n,s);return o},Y0=function(e,t,n,s,r,o){var a,l,c,u;if(Cn[e]&&(a=new Cn[e]).init(r,a.rawVars?t[e]:JC(t[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new Mn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Vr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ys,kh,Vf=function i(e,t,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,h=s.yoyoEase,f=s.keyframes,d=s.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!Df,M=e.timeline,R,C,w,D,T,E,L,W,H,te,Q,q,j;if(M&&(!f||!r)&&(r="none"),e._ease=ar(r,go.ease),e._yEase=h?W0(ar(h===!0?r:h,go.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!s.runBackwards,!M||f&&!s.stagger){if(W=p[0]?rr(p[0]).harness:0,q=W&&s[W.prop],R=Zl(s,Ff),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?wl:AC),_._lazy=0),o){if(Ps(e._startAt=Dt.set(p,On({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!d)&&e._startAt.revert(wl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=On({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:m},R),q&&(w[W.prop]=q),Ps(e._startAt=Dt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(wl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&yn(l)||l&&!g,C=0;C<p.length;C++){if(T=p[C],L=T._gsap||kf(p)[C]._gsap,e._ptLookup[C]=te={},Ih[L.id]&&As.length&&$l(),Q=S===p?C:S.indexOf(T),W&&(H=new W).init(T,q||R,e,Q,S)!==!1&&(e._pt=D=new Mn(e._pt,T,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(V){te[V]=D}),H.priority&&(E=1)),!W||q)for(w in R)Cn[w]&&(H=Y0(w,R,e,Q,T,S))?H.priority&&(E=1):te[w]=D=Hf.call(e,T,w,"get",R[w],Q,S,0,s.stringFilter);e._op&&e._op[C]&&e.kill(T,e._op[C]),y&&e._pt&&(ys=e,yt.killTweensOf(T,te,e.globalTime(t)),j=!e.parent,ys=0),e._pt&&l&&(Ih[L.id]=1)}E&&ev(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&M.render(Gn,!0,!0)},QC=function(e,t,n,s,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return kh=1,e.vars[t]="+=0",Vf(e,a),kh=0,l?va(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(s||s===0)&&!r?s:u.s+(s||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Rt(n)+tn(h.e)),h.b&&(h.b=u.s+tn(h.b))},eP=function(e,t){var n=e[0]?rr(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return t;r=vo({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},tP=function(e,t,n,s){var r=t.ease||s||"power1.inOut",o,a;if(sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},oa=function(e,t,n,s,r){return wt(e)?e.call(t,n,s,r):Gt(e)&&~e.indexOf("random(")?ya(e):e},K0=Bf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$0={};Sn(K0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return $0[i]=1});var Dt=function(i){m0(e,i);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:sa(s))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=s.parent||yt,y=(sn(n)||g0(n)?ts(n[0]):"length"in s)?[n]:Wn(n),M,R,C,w,D,T,E,L;if(a._targets=y.length?kf(y):va("GSAP target "+n+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||ml(c)||ml(u)){if(s=a.vars,M=a.timeline=new fn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),M.kill(),M.parent=M._dp=Hi(a),M._start=0,f||ml(c)||ml(u)){if(w=y.length,E=f&&N0(f),bi(f))for(D in f)~K0.indexOf(D)&&(L||(L={}),L[D]=f[D]);for(R=0;R<w;R++)C=Zl(s,$0),C.stagger=0,m&&(C.yoyoEase=m),L&&vo(C,L),T=y[R],C.duration=+oa(c,Hi(a),R,T,y),C.delay=(+oa(u,Hi(a),R,T,y)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),M.to(T,C,E?E(R,T,y):0),M._ease=Ke.none;M.duration()?c=u=0:a.timeline=0}else if(g){sa(On(M.vars.defaults,{ease:"none"})),M._ease=ar(g.ease||s.ease||"none");var W=0,H,te,Q;if(sn(g))g.forEach(function(q){return M.to(y,q,">")}),M.duration();else{C={};for(D in g)D==="ease"||D==="easeEach"||tP(D,g[D],C,g.easeEach);for(D in C)for(H=C[D].sort(function(q,j){return q.t-j.t}),W=0,R=0;R<H.length;R++)te=H[R],Q={ease:te.e,duration:(te.t-(R?H[R-1].t:0))/100*c},Q[D]=te.v,M.to(y,Q,W),W+=Q.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!Df&&(ys=Hi(a),yt.killTweensOf(y),ys=0),gi(S,Hi(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(h||!c&&!g&&a._start===xt(S._time)&&yn(h)&&DC(Hi(a))&&S.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-u)||0)),p&&P0(Hi(a),p),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,u=s<0,h=s>l-ht&&!u?l:s<ht?0:s,f,d,g,_,p,m,S,y,M;if(!c)NC(this,s,r,o);else if(h!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+s,r,o);if(f=xt(h%_),h===l?(g=this._repeat,f=c):(p=xt(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(M=this._yEase,f=c-f),p=xo(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(y&&this._yEase&&X0(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(L0(this,u?s:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&h&&!r&&!p&&(Dn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(s<0?s:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&Nh(this,s,r,o),Dn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Dn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Nh(this,s,!0,!0),(s||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ps(this,1),!r&&!(u&&!a)&&(h||a||m)&&(Dn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,o,a,l){Sa||Pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vf(this,c),u=this._ease(c/this._dur),QC(this,s,r,o,a,u,c,l)?this.resetTo(s,r,o,a,1):(Tc(this,0),this.parent||R0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,ys&&ys.vars.overwrite!==!0)._first||Xo(this),this.parent&&o!==this.timeline.totalDuration()&&yo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Wn(s):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!r||r==="all")&&PC(a,l))return r==="all"&&(this._pt=0),Xo(this);for(h=this._op=this._op||[],r!=="all"&&(Gt(r)&&(_={},Sn(r,function(S){return _[S]=1}),r=_),r=eP(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(h[m]=r,g=f,d={}):(d=h[m]=h[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Mc(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Xo(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return ra(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return ra(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return yt.killTweensOf(s,r,o)},e}(Ma);On(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(i){Dt[i]=function(){var e=new fn,t=Oh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Gf=function(e,t,n){return e[t]=n},Z0=function(e,t,n){return e[t](n)},nP=function(e,t,n,s){return e[t](s.fp,n)},iP=function(e,t,n){return e.setAttribute(t,n)},Wf=function(e,t){return wt(e[t])?Z0:If(e[t])&&e.setAttribute?iP:Gf},J0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Q0=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Xf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},rP=function(e,t,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,n),r=o},oP=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Mc(this,t,"_pt"):t.dep||(n=1),t=s;return!n},aP=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},ev=function(e){for(var t=e._pt,n,s,r,o;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=r},Mn=function(){function i(t,n,s,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||J0,this.d=l||this,this.set=c||Gf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=aP,this.m=n,this.mt=r,this.tween=s},i}();Sn(Bf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Ff[i]=1});Un.TweenMax=Un.TweenLite=Dt;Un.TimelineLite=Un.TimelineMax=fn;yt=new fn({sortChildren:!1,defaults:go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=G0;var lr=[],Cl={},lP=[],Dm=0,cP=0,Pu=function(e){return(Cl[e]||lP).map(function(t){return t()})},zh=function(){var e=Date.now(),t=[];e-Dm>2&&(Pu("matchMediaInit"),lr.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=ui.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Dm=e,Pu("matchMedia"))},tv=function(){function i(t,n){this.selector=n&&Fh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cP++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){wt(n)&&(r=s,s=n,n=wt);var o=this,a=function(){var c=vt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Fh(r)),vt=o,h=s.apply(o,arguments),wt(h)&&o._r.push(h),vt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var s=vt;vt=null,n(this),vt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Dt&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Dt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=lr.length;o--;)lr[o].id===this.id&&lr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),uP=function(){function i(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=i.prototype;return e.add=function(n,s,r){bi(n)||(n={matches:n});var o=new tv(0,r||this.scope),a=o.conditions={},l,c,u;vt&&!o.selector&&(o.selector=vt.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?u=1:(l=ui.matchMedia(n[c]),l&&(lr.indexOf(o)<0&&lr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(zh):l.addEventListener("change",zh)));return u&&s(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),Ql={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return z0(s)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,s){Gt(e)&&(e=Wn(e)[0]);var r=rr(e||{}).get,o=n?w0:A0;return n==="native"&&(n=""),e&&(t?o((Cn[t]&&Cn[t].get||r)(e,t,n,s)):function(a,l,c){return o((Cn[a]&&Cn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var s=e.map(function(u){return Tn.quickSetter(u,t,n)}),r=s.length;return function(u){for(var h=r;h--;)s[h](u)}}e=e[0]||{};var o=Cn[t],a=rr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Vr._pt=0,h.init(e,n?u+n:u,Vr,0,[e]),h.render(1,h),Vr._pt&&Xf(1,Vr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var s,r=Tn.to(e,On((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ar(e.ease,go.ease)),wm(go,e||{})},config:function(e){return wm(Nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!Cn[a]&&!Un[a]&&va(t+" effect requires "+a+" plugin.")}),Au[t]=function(a,l,c){return n(Wn(a),On(l||{},r),c)},o&&(fn.prototype[t]=function(a,l,c){return this.add(Au[t](a,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=ar(t)},parseEase:function(e,t){return arguments.length?ar(e,t):Ke},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),s,r;for(n.smoothChildTiming=yn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,s=yt._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Dt&&s.vars.onComplete===s._targets[0]))&&gi(n,s,s._start-s._delay),s=r;return gi(yt,n,0),n},context:function(e,t){return e?new tv(e,t):vt},matchMedia:function(e){return new uP(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||zh()},addEventListener:function(e,t){var n=Cl[e]||(Cl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Cl[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:VC,wrapYoyo:GC,distribute:N0,random:O0,snap:U0,normalize:HC,getUnit:tn,clamp:FC,splitColor:H0,toArray:Wn,selector:Fh,mapRange:B0,pipe:kC,unitize:zC,interpolate:WC,shuffle:I0},install:S0,effects:Au,ticker:Pn,updateRoot:fn.updateRoot,plugins:Cn,globalTimeline:yt,core:{PropTween:Mn,globals:M0,Tween:Dt,Timeline:fn,Animation:Ma,getCache:rr,_removeLinkedListItem:Mc,reverting:function(){return Kt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Df=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ql[i]=Dt[i]});Pn.add(fn.updateRoot);Vr=Ql.to({},{duration:0});var hP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fP=function(e,t){var n=e._targets,s,r,o;for(s in t)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=hP(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[r],s))},Lu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(Gt(r)&&(l={},Sn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}fP(a,r)}}}},Tn=Ql.registerPlugin({name:"attr",init:function(e,t,n,s,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lu("roundProps",Bh),Lu("modifiers"),Lu("snap",U0))||Ql;Dt.version=fn.version=Tn.version="3.14.2";y0=1;Nf()&&So();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Im,Ss,eo,qf,tr,Nm,jf,dP=function(){return typeof window<"u"},ns={},Ks=180/Math.PI,to=Math.PI/180,Ur=Math.atan2,Um=1e8,Yf=/([A-Z])/g,pP=/(left|right|width|margin|padding|x)/i,mP=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_P=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vP=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},nv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},iv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yP=function(e,t,n){return e.style[t]=n},SP=function(e,t,n){return e.style.setProperty(t,n)},MP=function(e,t,n){return e._gsap[t]=n},EP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},TP=function(e,t,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},bP=function(e,t,n,s,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Mt="transform",En=Mt+"Origin",AP=function i(e,t){var n=this,s=this.target,r=s.style,o=s._gsap;if(e in ns&&r){if(this.tfm=this.tfm||{},e!=="transform")e=vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Gi(s,a)}):this.tfm[e]=o.x?o[e]:Gi(s,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Mt)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=Mt}(r||t)&&this.props.push(e,t,r[e])},sv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wP=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Yf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=jf(),(!r||!r.isStart)&&!n[Mt]&&(sv(n),s.zOrigin&&n[En]&&(n[En]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},rv=function(e,t){var n={target:e,props:[],revert:wP,save:AP};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},ov,Vh=function(e,t){var n=Ss.createElementNS?Ss.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ss.createElement(e);return n&&n.style?n:Ss.createElement(e)},In=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Yf,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,Mo(t)||t,1)||""},Om="O,Moz,ms,Ms,Webkit".split(","),Mo=function(e,t,n){var s=t||tr,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Om[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Om[o]:"")+e},Gh=function(){dP()&&window.document&&(Im=window,Ss=Im.document,eo=Ss.documentElement,tr=Vh("div")||{style:{}},Vh("div"),Mt=Mo(Mt),En=Mt+"Origin",tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ov=!!Mo("perspective"),jf=Tn.core.reverting,qf=1)},Fm=function(e){var t=e.ownerSVGElement,n=Vh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),r;s.style.display="block",n.appendChild(s),eo.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),eo.removeChild(n),r},Bm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},av=function(e){var t,n;try{t=e.getBBox()}catch{t=Fm(e),n=1}return t&&(t.width||t.height)||n||(t=Fm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Bm(e,["x","cx","x1"])||0,y:+Bm(e,["y","cy","y1"])||0,width:0,height:0}:t},lv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&av(e))},Ls=function(e,t){if(t){var n=e.style,s;t in ns&&t!==En&&(t=Mt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(Yf,"-$1").toLowerCase())):n.removeAttribute(t)}},Ms=function(e,t,n,s,r,o){var a=new Mn(e._pt,t,n,0,1,o?iv:nv);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},km={deg:1,rad:1,turn:1},RP={grid:1,flex:1},Ds=function i(e,t,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=tr.style,l=pP.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=s==="px",d=s==="%",g,_,p,m;if(s===o||!r||km[s]||km[o])return r;if(o!=="px"&&!f&&(r=i(e,t,n,"px")),m=e.getCTM&&lv(e),(d||o==="%")&&(ns[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Rt(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:s),_=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ss||!_.appendChild)&&(_=Ss.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Pn.time&&!p.uncache)return Rt(r/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+s,g=e[u],S?e.style[t]=S:Ls(e,t)}else(d||o==="%")&&!RP[In(_,"display")]&&(a.position=In(e,"position")),_===e&&(a.position="static"),_.appendChild(tr),g=tr[u],_.removeChild(tr),a.position="absolute";return l&&d&&(p=rr(_),p.time=Pn.time,p.width=_[u]),Rt(f?g*r/h:g&&r?h/g*r:0)},Gi=function(e,t,n,s){var r;return qf||Gh(),t in vi&&t!=="transform"&&(t=vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ns[t]&&t!=="transform"?(r=Ta(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:tc(In(e,En))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=ec[t]&&ec[t](e,t,n)||In(e,t)||T0(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ds(e,t,r,n)+n:r},CP=function(e,t,n,s){if(!n||n==="none"){var r=Mo(t,e,1),o=r&&In(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=In(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,Q0),l=0,c=0,u,h,f,d,g,_,p,m,S,y,M,R;if(a.b=n,a.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=In(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=e.style[t],e.style[t]=s,s=In(e,t)||s,_?e.style[t]=_:Ls(e,t)),u=[n,s],G0(u),n=u[0],s=u[1],f=n.match(Hr)||[],R=s.match(Hr)||[],R.length){for(;h=Hr.exec(s);)p=h[0],S=s.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),p.charAt(1)==="="&&(p=Qr(d,p)+M),m=parseFloat(p),y=p.substr((m+"").length),l=Hr.lastIndex-y.length,y||(y=y||Nn.units[t]||M,l===s.length&&(s+=y,a.e+=y)),M!==y&&(d=Ds(e,t,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?iv:nv;return x0.test(s)&&(a.e=0),this._pt=a,a},zm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PP=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=zm[n]||n,t[1]=zm[s]||s,t.join(" ")},LP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ns[a]&&(l=1,a=a==="transformOrigin"?En:Mt),Ls(n,a);l&&(Ls(n,Mt),o&&(o.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ta(n,1),o.uncache=1,sv(s)))}},ec={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,n,0,0,LP);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ea=[1,0,0,1,0,0],cv={},uv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hm=function(e){var t=In(e,Mt);return uv(t)?Ea:t.substr(7).match(v0).map(Rt)},Kf=function(e,t){var n=e._gsap||rr(e),s=e.style,r=Hm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!e.offsetParent&&e!==eo&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,eo.appendChild(e)),r=Hm(e),l?s.display=l:Ls(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):eo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Wh=function(e,t,n,s,r,o){var a=e._gsap,l=r||Kf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],y=t.split(" "),M=parseFloat(y[0])||0,R=parseFloat(y[1])||0,C,w,D,T;n?l!==Ea&&(w=d*p-g*_)&&(D=M*(p/w)+R*(-_/w)+(_*S-p*m)/w,T=M*(-g/w)+R*(d/w)-(d*S-g*m)/w,M=D,R=T):(C=av(e),M=C.x+(~y[0].indexOf("%")?M/100*C.width:M),R=C.y+(~(y[1]||y[0]).indexOf("%")?R/100*C.height:R)),s||s!==!1&&a.smooth?(m=M-c,S=R-u,a.xOffset=h+(m*d+S*_)-m,a.yOffset=f+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=R,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!n,e.style[En]="0px 0px",o&&(Ms(o,a,"xOrigin",c,M),Ms(o,a,"yOrigin",u,R),Ms(o,a,"xOffset",h,a.xOffset),Ms(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+R)},Ta=function(e,t){var n=e._gsap||new j0(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=In(e,En)||"0",u,h,f,d,g,_,p,m,S,y,M,R,C,w,D,T,E,L,W,H,te,Q,q,j,V,ge,xe,Me,Re,je,ee,le;return u=h=f=_=p=m=S=y=M=0,d=g=1,n.svg=!!(e.getCTM&&lv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),s.scale=s.rotate=s.translate="none"),w=Kf(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Wh(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,w)),R=n.xOrigin||0,C=n.yOrigin||0,w!==Ea&&(L=w[0],W=w[1],H=w[2],te=w[3],u=Q=w[4],h=q=w[5],w.length===6?(d=Math.sqrt(L*L+W*W),g=Math.sqrt(te*te+H*H),_=L||W?Ur(W,L)*Ks:0,S=H||te?Ur(H,te)*Ks+_:0,S&&(g*=Math.abs(Math.cos(S*to))),n.svg&&(u-=R-(R*L+C*H),h-=C-(R*W+C*te))):(le=w[6],je=w[7],xe=w[8],Me=w[9],Re=w[10],ee=w[11],u=w[12],h=w[13],f=w[14],D=Ur(le,Re),p=D*Ks,D&&(T=Math.cos(-D),E=Math.sin(-D),j=Q*T+xe*E,V=q*T+Me*E,ge=le*T+Re*E,xe=Q*-E+xe*T,Me=q*-E+Me*T,Re=le*-E+Re*T,ee=je*-E+ee*T,Q=j,q=V,le=ge),D=Ur(-H,Re),m=D*Ks,D&&(T=Math.cos(-D),E=Math.sin(-D),j=L*T-xe*E,V=W*T-Me*E,ge=H*T-Re*E,ee=te*E+ee*T,L=j,W=V,H=ge),D=Ur(W,L),_=D*Ks,D&&(T=Math.cos(D),E=Math.sin(D),j=L*T+W*E,V=Q*T+q*E,W=W*T-L*E,q=q*T-Q*E,L=j,Q=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Rt(Math.sqrt(L*L+W*W+H*H)),g=Rt(Math.sqrt(q*q+le*le)),D=Ur(Q,q),S=Math.abs(D)>2e-4?D*Ks:0,M=ee?1/(ee<0?-ee:ee):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!uv(In(e,Mt)),j&&e.setAttribute("transform",j))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Rt(d),n.scaleY=Rt(g),n.rotation=Rt(_)+a,n.rotationX=Rt(p)+a,n.rotationY=Rt(m)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(s[En]=tc(c)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?IP:ov?hv:DP,n.uncache=0,n},tc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Du=function(e,t,n){var s=tn(t);return Rt(parseFloat(t)+parseFloat(Ds(e,"x",n+"px",s)))+s},DP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hv(e,t)},Xs="0deg",Ho="0px",qs=") ",hv=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,M="",R=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==Xs||u!==Xs)){var C=parseFloat(u)*to,w=Math.sin(C),D=Math.cos(C),T;C=parseFloat(h)*to,T=Math.cos(C),o=Du(S,o,w*T*-y),a=Du(S,a,-Math.sin(C)*-y),l=Du(S,l,D*T*-y+y)}p!==Ho&&(M+="perspective("+p+qs),(s||r)&&(M+="translate("+s+"%, "+r+"%) "),(R||o!==Ho||a!==Ho||l!==Ho)&&(M+=l!==Ho||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qs),c!==Xs&&(M+="rotate("+c+qs),u!==Xs&&(M+="rotateY("+u+qs),h!==Xs&&(M+="rotateX("+h+qs),(f!==Xs||d!==Xs)&&(M+="skew("+f+", "+d+qs),(g!==1||_!==1)&&(M+="scale("+g+", "+_+qs),S.style[Mt]=M||"translate(0, 0)"},IP=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(o),M=parseFloat(a),R,C,w,D,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=to,c*=to,R=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(u*=to,T=Math.tan(c-u),T=Math.sqrt(1+T*T),w*=T,D*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),R*=T,C*=T)),R=Rt(R),C=Rt(C),w=Rt(w),D=Rt(D)):(R=h,D=f,C=w=0),(y&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(y=Ds(d,"x",o,"px"),M=Ds(d,"y",a,"px")),(g||_||p||m)&&(y=Rt(y+g-(g*R+_*w)+p),M=Rt(M+_-(g*C+_*D)+m)),(s||r)&&(T=d.getBBox(),y=Rt(y+s/100*T.width),M=Rt(M+r/100*T.height)),T="matrix("+R+","+C+","+w+","+D+","+y+","+M+")",d.setAttribute("transform",T),S&&(d.style[Mt]=T)},NP=function(e,t,n,s,r){var o=360,a=Gt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ks:1),c=l-s,u=s+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Um)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Um)%o-~~(c/o)*o)),e._pt=f=new Mn(e._pt,t,n,s,c,_P),f.e=u,f.u="deg",e._props.push(n),f},Vm=function(e,t){for(var n in t)e[n]=t[n];return e},UP=function(e,t,n){var s=Vm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Mt]=t,a=Ta(n,1),Ls(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],o[Mt]=t,a=Ta(n,1),o[Mt]=c);for(l in ns)c=s[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=tn(c),g=tn(u),h=d!==g?Ds(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Mn(e._pt,a,l,h,f-h,Hh),e._pt.u=g||0,e._props.push(l));Vm(a,s)};Sn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",o=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(a){return e<2?i+a:"border"+a+i});ec[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Gi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var fv={name:"css",register:Gh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,S,y,M,R,C,w,D,T;qf||Gh(),this.styles=this.styles||rv(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Cn[_]&&Y0(_,t,n,s,e,r)))){if(d=typeof u,g=ec[_],d==="function"&&(u=u.call(n,s,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ya(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ws.lastIndex=0,ws.test(c)||(p=tn(c),m=tn(u),m?p!==m&&(c=Ds(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,s,r,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,s,e,r):l[_],Gt(c)&&~c.indexOf("random(")&&(c=ya(c)),tn(c+"")||c==="auto"||(c+=Nn.units[_]||tn(Gi(e,_))||""),(c+"").charAt(1)==="="&&(c=Gi(e,_))):c=Gi(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in vi&&(_==="autoAlpha"&&(f===1&&Gi(e,"visibility")==="hidden"&&h&&(f=0),D.push("visibility",0,a.visibility),Ms(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ns,y){if(this.styles.save(_),T=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=In(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=In(e,"perspective"),E?e.style.perspective=E:Ls(e,"perspective")}h=parseFloat(u)}if(M||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ta(e,t.parseTransform),C=t.smoothOrigin!==!1&&R.smooth,M=this._pt=new Mn(this._pt,a,Mt,0,1,R.renderTransform,R,0,-1),M.dep=1),_==="scale")this._pt=new Mn(this._pt,R,"scaleY",R.scaleY,(S?Qr(R.scaleY,S+h):h)-R.scaleY||0,Hh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(En,0,a[En]),u=PP(u),R.svg?Wh(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Ms(this,R,"zOrigin",R.zOrigin,m),Ms(this,a,_,tc(c),tc(u)));continue}else if(_==="svgOrigin"){Wh(e,u,1,C,0,this);continue}else if(_ in cv){NP(this,R,_,f,S?Qr(f,S+u):u);continue}else if(_==="smoothOrigin"){Ms(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){UP(this,u,e);continue}}else _ in a||(_=Mo(_)||_);if(y||(h||h===0)&&(f||f===0)&&!mP.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=tn(u)||(_ in Nn.units?Nn.units[_]:p),p!==m&&(f=Ds(e,_,c,m)),this._pt=new Mn(this._pt,y?R:a,_,f,(S?Qr(f,S+h):h)-f,!y&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?xP:Hh),this._pt.u=m||0,y&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=vP):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gP);else if(_ in a)CP.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,s,r);else if(_!=="parseTransform"){Of(_,u);continue}y||(_ in a?D.push(_,0,a[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),o.push(_)}}w&&ev(this)},render:function(e,t){if(t.tween._time||!jf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:vi,getSetter:function(e,t,n){var s=vi[t];return s&&s.indexOf(",")<0&&(t=s),t in ns&&t!==En&&(e._gsap.x||Gi(e,"x"))?n&&Nm===n?t==="scale"?EP:MP:(Nm=n||{})&&(t==="scale"?TP:bP):e.style&&!If(e.style[t])?yP:~t.indexOf("-")?SP:Wf(e,t)},core:{_removeProperty:Ls,_getMatrix:Kf}};Tn.utils.checkPrefix=Mo;Tn.core.getStyleSaver=rv;(function(i,e,t,n){var s=Sn(i+","+e+","+t,function(r){ns[r]=1});Sn(e,function(r){Nn.units[r]="deg",cv[r]=1}),vi[s[13]]=i+","+e,Sn(n,function(r){var o=r.split(":");vi[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Nn.units[i]="px"});Tn.registerPlugin(fv);var li=Tn.registerPlugin(fv)||Tn;li.core.Tween;const OP={__name:"MyOfficeScene",setup(i){const e=new NR,t=new IR({alpha:!0,antialias:!0});t.useLegacyLights=!0,t.outputEncoding=Ot,t.shadowMap.enabled=!0,t.shadowMap.type=bg,t.setSize(300,300),t.setPixelRatio(Math.min(window.devicePixelRatio,2));let n=null,s=null;const r=dn(null),o=()=>{li.to(n.rotation,{y:.7,duration:10,ease:"power1.inOut",repeat:-1,yoyo:!0})},a=()=>{const M=document.createElement("video");M.src="/personal-website/3D/火影.mp4",M.muted=!0,M.playsInline=!0,M.autoplay=!0,M.loop=!0,M.play();const R=new WR(M);R.minFilter=jt,R.magFilter=jt,R.generateMipmaps=!1,R.encoding=Ot,s.material=new ga({map:R})},l=new S1,c=new nC;c.setDecoderPath("/personal-website/draco/"),c.setDecoderConfig({type:"js"}),l.setDRACOLoader(c),l.load("/personal-website/3D/officeScene.glb",M=>{console.log("模型加载成功",M.scene),M.scene.scale.set(1.8,1.8,1.8),M.scene.position.y=-1.5,M.scene.children.forEach(R=>{R.castShadow=!0,R.receiveShadow=!0,R.name==="Chair"?n=R:R.name==="mac-screen"&&(s=R)}),o(),a(),e.add(M.scene),t.render(e,u)},M=>{console.log("加载进度:",M.loaded/M.total*100+"%")},M=>{console.error("模型加载失败:",M);const R=new Eo(2,2,2),C=new ga({color:65280}),w=new vn(R,C);e.add(w),t.render(e,u)});const u=new xc(-10,10,10,-10,.1,1e3);u.position.set(-9.72,5.27,-2.25),u.lookAt(0,0,0);const h=new c1(16777215,.5);h.intensity=3,e.add(h);const f=new h0(16777215);f.intensity=3,f.castShadow=!0,f.shadow.camera.far=20,f.shadow.mapSize.set(2048,2048),f.shadow.normalBias=.05,f.position.set(-1.5,7,3),e.add(f);const d=new u0(16777215);d.castShadow=!0,d.position.set(.7,4,-2.3),d.shadow.camera.far=20,d.shadow.mapSize.set(2048,2048),d.shadow.normalBias=.05,e.add(d);const g={width:0,height:0,aspect:1,frustrum:10,pixelRatio:Math.min(window.devicePixelRatio,2)},_=()=>{if(!r.value)return;const M=r.value.offsetWidth,R=r.value.offsetHeight;g.width=Math.min(M,300),g.height=Math.min(R,300),g.width/g.height>1?g.width=g.height:g.height=g.width,g.aspect=g.width/g.height,g.pixelRatio=Math.min(window.devicePixelRatio,2),u.left=-g.aspect*g.frustrum/2,u.right=g.aspect*g.frustrum/2,u.top=g.frustrum/2,u.bottom=-10/2,u.updateProjectionMatrix(),t.setSize(g.width,g.height),t.setPixelRatio(g.pixelRatio)},p=new rC(u,t.domElement);p.maxAzimuthAngle=-1,p.minAzimuthAngle=Math.PI*1.2,p.maxPolarAngle=Math.PI/3,p.minPolarAngle=Math.PI/6,p.enableZoom=!1;const m=()=>{requestAnimationFrame(m),t.render(e,u)},S=Eg().theme,y=()=>{S.value==="light"?(li.to(f,{intensity:2.5}),li.to(h,{intensity:1.66}),li.to(d,{intensity:0}),li.to(h.color,{r:1,g:1,b:1})):(li.to(f,{intensity:0}),li.to(h,{intensity:2}),li.to(d,{intensity:6}),li.to(h.color,{b:.9568627450980393,g:.24313725490196078,r:.3607843137254902}))};return sr(S,()=>{y()}),uc(()=>{setTimeout(()=>{r.value&&(_(),m(),y(),r.value.appendChild(t.domElement))},100)}),(M,R)=>(mt(),gt("div",{class:"three-container",ref_key:"divDomRef",ref:r},null,512))}},FP=Is(OP,[["__scopeId","data-v-1e6d62ef"]]),BP={class:"home section",id:"home"},kP={class:"home__container container grid"},zP={class:"home__content grid"},HP={class:"home__three",id:"home__three"},VP={class:"home__data"},GP={class:"home__title"},WP={class:"home__scroll"},Gm="Hi, Welcome to My Website!",XP={__name:"AppHome",setup(i){const e=dn([]),t=(s,r)=>{for(let o=0;o<s.length;o++)setTimeout(()=>{r==="write"?e.value.push(s[o]):e.value.pop(),o===Gm.length-1&&setTimeout(()=>{t(s,r==="write"?"wipe":"write")},2e3)},o*500)};t(Gm,"write");const n=(s,r)=>{var l;s.preventDefault();const o=r.substring(1),a=document.getElementById(o);if(a){const c=((l=document.querySelector(".header"))==null?void 0:l.offsetHeight)||0,u=a.offsetTop-c;window.scrollTo({top:u,behavior:"smooth"})}};return(s,r)=>(mt(),gt("section",BP,[fe("div",kP,[fe("div",zP,[fe("div",HP,[St(FP)]),fe("div",VP,[fe("h1",GP,[dc(_n(e.value.join("")),1),r[2]||(r[2]=fe("span",{class:"home__columeline"},"|",-1))]),r[4]||(r[4]=fe("h3",{class:"home__subtitle"}," WebGIS工程师 ",-1)),r[5]||(r[5]=fe("p",{class:"home__description"}," 欢迎来到我的个人简历页面！这里展示了我的教育背景、技术技能以及自己做的相关地图框架案例。虽然我刚刚进入GIS开发，但我对地理信息系统和前端开发充满热情，并已在多个项目中实践了所学。期待通过这些信息，向你展示我的能力与潜力。 ",-1)),fe("a",{href:"#contact",class:"button button-flex",onClick:r[0]||(r[0]=o=>n(o,"#contact"))},[...r[3]||(r[3]=[fe("span",null,"与我联系",-1),fe("i",{class:"fa-solid fa-right-long button__icon"},null,-1)])])])]),fe("div",WP,[fe("a",{href:"#about",class:"button--flex",onClick:r[1]||(r[1]=o=>n(o,"#about"))},[...r[6]||(r[6]=[fe("span",null,"往下滑",-1),fe("i",{class:"fa-solid fa-arrow-down home__arrow"},null,-1)])])])])]))}},qP=Is(XP,[["__scopeId","data-v-21aef4db"]]),jP="/personal-website/assets/%E4%B8%AA%E4%BA%BA%E7%85%A7%E7%89%872--mVNwKLs.jpg",YP={},KP={class:"about section",id:"about"};function $P(i,e){return mt(),gt("section",KP,[...e[0]||(e[0]=[tg('<h2 class="section__title" data-v-e28935b7>关于我</h2><span class="section__subtitle" data-v-e28935b7>自我介绍</span><div class="about__container container grid" data-v-e28935b7><img src="'+jP+'" class="about__img" data-v-e28935b7><div class="about__data" data-v-e28935b7><p class="about__description" data-v-e28935b7>         您好！我叫曹进龙，2023年毕业于湖北大学地理信息科学专业。在过去的一年中，我深入学习了WebGIS开发相关的知识，掌握了诸如Vue、Openlayers、Mapbox、Cesium等前端技术，并且熟悉使用这些技术来开发与GIS相关的应用。我对地理信息系统有着浓厚的兴趣，乐于钻研技术细节，致力于将地理数据与现代Web技术相结合，开发出高效、直观的GIS应用。我相信自己的专业背景和技术能力能够胜任贵公司的WebGIS岗位，期待能有机会为公司贡献我的力量。 </p><div class="about__info" data-v-e28935b7><div class="about__info-item" data-v-e28935b7><span class="about__info-title" data-v-e28935b7>24</span><span class="about__info-name" data-v-e28935b7>年龄</span></div><div class="about__info-item" data-v-e28935b7><span class="about__info-title" data-v-e28935b7>本科</span><span class="about__info-name" data-v-e28935b7>学历</span></div></div></div></div>',3)])])}const ZP=Is(YP,[["render",$P],["__scopeId","data-v-e28935b7"]]),JP={class:"skills section",id:"skills"},QP={class:"skills__container container"},eL={class:"skills__category"},tL={class:"skills__grid"},nL={class:"skills__info"},iL={class:"skills__name"},sL={class:"skills__level"},rL={class:"skills__progress"},oL=["data-width"],aL={class:"skills__category"},lL={class:"skills__grid"},cL={class:"skills__info"},uL={class:"skills__name"},hL={class:"skills__level"},fL={class:"skills__progress"},dL=["data-width"],pL={class:"skills__category"},mL={class:"skills__grid"},_L={class:"skills__info"},gL={class:"skills__name"},vL={class:"skills__level"},xL={class:"skills__progress"},yL=["data-width"],SL={class:"skills__category"},ML={class:"skills__grid"},EL={class:"skills__info"},TL={class:"skills__name"},bL={class:"skills__level"},AL={class:"skills__progress"},wL=["data-width"],RL={__name:"AppSkills",setup(i){const e=dn([{title:"HTML5",percentage:"95%"},{title:"CSS3/SCSS",percentage:"85%"},{title:"JavaScript (ES6+)",percentage:"85%"},{title:"TypeScript",percentage:"75%"},{title:"Vue.js",percentage:"85%"},{title:"React",percentage:"70%"},{title:"WebGL",percentage:"65%"},{title:"RESTful APIs",percentage:"80%"}]),t=dn([{title:"OpenLayers",percentage:"90%"},{title:"Mapbox GL JS",percentage:"85%"},{title:"CesiumJS",percentage:"88%"},{title:"Leaflet",percentage:"80%"},{title:"GeoJSON",percentage:"95%"},{title:"TopoJSON",percentage:"75%"},{title:"TurboFan",percentage:"60%"},{title:"Three.js (3D)",percentage:"70%"}]),n=dn([{title:"ArcGIS Pro",percentage:"85%"},{title:"QGIS",percentage:"90%"},{title:"ENVI",percentage:"75%"},{title:"Global Mapper",percentage:"70%"},{title:"AutoCAD Map 3D",percentage:"65%"}]),s=dn([{title:"PostGIS",percentage:"80%"},{title:"MongoDB",percentage:"75%"},{title:"MySQL/PostgreSQL",percentage:"85%"},{title:"Node.js",percentage:"80%"},{title:"Git/GitHub",percentage:"90%"},{title:"Docker",percentage:"70%"}]);return uc(()=>{setTimeout(()=>{document.querySelectorAll(".skills__progress-bar").forEach(o=>{const a=o.getAttribute("data-width");o.style.width=a,o.style.transition="width 1.5s ease-out"})},300)}),(r,o)=>(mt(),gt("section",JP,[o[4]||(o[4]=fe("h2",{class:"section__title skills__title"},[fe("i",{class:"fa-solid fa-computer skills__icon"}),dc("技能 ")],-1)),o[5]||(o[5]=fe("span",{class:"section__subtitle"},"技术水平",-1)),fe("div",QP,[fe("div",eL,[o[0]||(o[0]=fe("h3",{class:"skills__category-title"},"Web开发",-1)),fe("div",tL,[(mt(!0),gt(Ht,null,Br(e.value,a=>(mt(),gt("div",{key:a.title,class:"skills__item"},[fe("div",nL,[fe("span",iL,_n(a.title),1),fe("span",sL,_n(a.percentage),1)]),fe("div",rL,[fe("div",{class:"skills__progress-bar",style:"width: 0%","data-width":a.percentage},null,8,oL)])]))),128))])]),fe("div",aL,[o[1]||(o[1]=fe("h3",{class:"skills__category-title"},"GIS技术",-1)),fe("div",lL,[(mt(!0),gt(Ht,null,Br(t.value,a=>(mt(),gt("div",{key:a.title,class:"skills__item"},[fe("div",cL,[fe("span",uL,_n(a.title),1),fe("span",hL,_n(a.percentage),1)]),fe("div",fL,[fe("div",{class:"skills__progress-bar",style:"width: 0%","data-width":a.percentage},null,8,dL)])]))),128))])]),fe("div",pL,[o[2]||(o[2]=fe("h3",{class:"skills__category-title"},"GIS软件",-1)),fe("div",mL,[(mt(!0),gt(Ht,null,Br(n.value,a=>(mt(),gt("div",{key:a.title,class:"skills__item"},[fe("div",_L,[fe("span",gL,_n(a.title),1),fe("span",vL,_n(a.percentage),1)]),fe("div",xL,[fe("div",{class:"skills__progress-bar",style:"width: 0%","data-width":a.percentage},null,8,yL)])]))),128))])]),fe("div",SL,[o[3]||(o[3]=fe("h3",{class:"skills__category-title"},"数据库与工具",-1)),fe("div",ML,[(mt(!0),gt(Ht,null,Br(s.value,a=>(mt(),gt("div",{key:a.title,class:"skills__item"},[fe("div",EL,[fe("span",TL,_n(a.title),1),fe("span",bL,_n(a.percentage),1)]),fe("div",AL,[fe("div",{class:"skills__progress-bar",style:"width: 0%","data-width":a.percentage},null,8,wL)])]))),128))])])])]))}},CL=Is(RL,[["__scopeId","data-v-6424b1cd"]]),PL={key:0,class:"qualification__line"},LL={class:"qualification__title"},DL={class:"qualification__subtitle"},IL={class:"qualification__calendar"},NL={key:0,class:"qualification__line"},UL={__name:"TheQualificationItem",props:{list:{type:Array}},setup(i){return(e,t)=>(mt(!0),gt(Ht,null,Br(i.list,(n,s)=>{var r,o;return mt(),gt("div",{class:"qualification__data",key:s},[s%2===1?(mt(),gt(Ht,{key:0},[t[1]||(t[1]=fe("div",null,null,-1)),fe("div",null,[t[0]||(t[0]=fe("span",{class:"qualification__rounder"},null,-1)),s!==((r=i.list)==null?void 0:r.length)-1?(mt(),gt("span",PL)):Fa("",!0)])],64)):Fa("",!0),fe("div",null,[fe("h3",LL,_n(n.title||""),1),fe("span",DL,_n(n.describe||""),1),fe("div",IL,[t[2]||(t[2]=fe("i",{class:"fa-solid fa-calendar-days"},null,-1)),dc(" "+_n(n.time||""),1)])]),s%2===0?(mt(),gt(Ht,{key:1},[fe("div",null,[t[3]||(t[3]=fe("span",{class:"qualification__rounder"},null,-1)),s!==((o=i.list)==null?void 0:o.length)-1?(mt(),gt("span",NL)):Fa("",!0)]),t[4]||(t[4]=fe("div",null,null,-1))],64)):Fa("",!0)])}),128))}},Wm=Is(UL,[["__scopeId","data-v-4bc5cb7b"]]),OL={class:"qualification section"},FL={class:"container"},BL={class:"qualification__tabs"},kL={class:"qualification__sections"},zL={id:"education"},HL={class:"qualification__content"},VL={__name:"AppQualification",setup(i){const e=dn("education"),t=dn([{title:"地理信息科学",describe:"湖北大学",time:"2019.09-2023.06"},{title:"WebGIS开发",describe:"武汉新中地+自学",time:"2024.03-至今"}]),n=dn([{title:"WebGIS开发实习生",describe:"武汉中地数码公司",time:"2022.07 - 2022.09"}]);return(s,r)=>(mt(),gt("section",OL,[r[4]||(r[4]=fe("h2",{class:"section__title"},"学习教育经历",-1)),r[5]||(r[5]=fe("span",{class:"section__subtitle"},"个人履历",-1)),fe("div",FL,[fe("div",BL,[fe("div",{class:Es([[e.value==="education"?"qualification__button--active":""],"qualification__button button--flex"]),onClick:r[0]||(r[0]=o=>e.value="education")},[...r[2]||(r[2]=[fe("i",{class:"fa-solid fa-graduation-cap qualification__icon"},null,-1),fe("span",null,"教育",-1)])],2),fe("div",{class:Es([[e.value==="work"?"qualification__button--active":""],"qualification__button button--flex"]),onClick:r[1]||(r[1]=o=>e.value="work")},[...r[3]||(r[3]=[fe("i",{class:"fa-solid fa-briefcase qualification__icon"},null,-1),fe("span",null,"实习",-1)])],2)]),fe("div",kL,[cd(fe("div",zL,[St(Wm,{list:t.value},null,8,["list"])],512),[[Td,e.value==="education"]]),cd(fe("div",HL,[St(Wm,{list:n.value},null,8,["list"])],512),[[Td,e.value==="work"]])])])]))}},GL=Is(VL,[["__scopeId","data-v-c01ce751"]]),WL="/personal-website/assets/weixin-DkaIJNi4.jpg",XL={},qL={class:"footer__bg"};function jL(i,e){return mt(),gt("div",qL,[...e[0]||(e[0]=[tg('<div class="footer__container container grid" data-v-a5c16ff7><div class="footer__information" data-v-a5c16ff7><i class="fa-solid fa-phone footer__icon" data-v-a5c16ff7></i><div data-v-a5c16ff7><h3 class="footer__title" data-v-a5c16ff7>电话</h3><span class="footer__subtitle" data-v-a5c16ff7>13310539521</span></div></div><div class="footer__information footer__wechat" data-v-a5c16ff7><i class="fa-brands fa-weixin footer__icon" data-v-a5c16ff7></i><div data-v-a5c16ff7><h3 class="footer__title" data-v-a5c16ff7>微信</h3><img src="'+WL+'" alt="weixin" class="weixin" data-v-a5c16ff7></div></div><div class="footer__information" data-v-a5c16ff7><i class="fa-solid fa-envelope footer__icon" data-v-a5c16ff7></i><div data-v-a5c16ff7><h3 class="footer__title" data-v-a5c16ff7>邮箱</h3><span class="footer__subtitle" data-v-a5c16ff7>1426559553@qq.com</span></div></div><div class="footer__information" data-v-a5c16ff7><i class="fa-solid fa-location-dot footer__icon" data-v-a5c16ff7></i><div data-v-a5c16ff7><h3 class="footer__title" data-v-a5c16ff7>现居住地</h3><span class="footer__subtitle" data-v-a5c16ff7>广东惠州</span></div></div></div><p class="footer__copy" data-v-a5c16ff7>© 2024 Caojinlong</p>',2)])])}const YL=Is(XL,[["render",jL],["__scopeId","data-v-a5c16ff7"]]),KL={class:"header scroll-header"},$L={class:"main"},ZL={class:"footer",id:"contact"},JL={__name:"HomeView",setup(i){return(e,t)=>(mt(),gt(Ht,null,[fe("header",KL,[St(hM)]),fe("main",$L,[St(qP),St(ZP),St(GL),St(CL)]),fe("footer",ZL,[St(YL)])],64))}},QL=kS({history:vS(),routes:[{path:"/",name:"home",component:JL}]}),$f=Cy(zS);$f.use(Iy());$f.use(QL);$f.mount("#app");
