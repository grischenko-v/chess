import{S as r,Z as l,m as p}from"./reactivity.esm-bundler-BxCf1S-q.js";/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const u=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function h(){const t=r(!0),i=t.run(()=>l({}));let n=[],a=[];const c=p({install(e){c._a=e,e.provide(u,c),e.config.globalProperties.$pinia=c,a.forEach(s=>n.push(s)),a=[]},use(e){return this._a?n.push(e):a.push(e),this},_p:n,_a:null,_e:t,_s:new Map,state:i});return c}export{o as MutationType,h as createPinia};
