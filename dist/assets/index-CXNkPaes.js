(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="158",Nr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ig=0,Xu=1,rg=2,sg=0,pd=1,og=2,fi=3,Ki=0,rn=1,gi=2,Hi=0,os=1,qu=2,Yu=3,Ku=4,ag=5,pr=100,lg=101,cg=102,ju=103,$u=104,ug=200,hg=201,fg=202,dg=203,nc=204,ic=205,pg=206,mg=207,gg=208,_g=209,vg=210,xg=211,Sg=212,Mg=213,yg=214,Eg=0,Tg=1,bg=2,fa=3,wg=4,Ag=5,Cg=6,Rg=7,md=0,Pg=1,Lg=2,Gi=0,Dg=1,Ug=2,Ig=3,Ng=4,Og=5,gd=300,gs=301,_s=302,rc=303,sc=304,Da=306,oc=1e3,Fn=1001,ac=1002,Zt=1003,Zu=1004,Ja=1005,bn=1006,Fg=1007,io=1008,Vi=1009,Bg=1010,zg=1011,Hc=1012,_d=1013,Oi=1014,Fi=1015,ro=1016,vd=1017,xd=1018,_r=1020,kg=1021,Bn=1023,Hg=1024,Gg=1025,vr=1026,vs=1027,Vg=1028,Sd=1029,Wg=1030,Md=1031,yd=1033,Qa=33776,el=33777,tl=33778,nl=33779,Ju=35840,Qu=35841,eh=35842,th=35843,Xg=36196,nh=37492,ih=37496,rh=37808,sh=37809,oh=37810,ah=37811,lh=37812,ch=37813,uh=37814,hh=37815,fh=37816,dh=37817,ph=37818,mh=37819,gh=37820,_h=37821,il=36492,vh=36494,xh=36495,qg=36283,Sh=36284,Mh=36285,yh=36286,Ed=3e3,xr=3001,Yg=3200,Kg=3201,Td=0,jg=1,An="",It="srgb",Si="srgb-linear",Gc="display-p3",Ua="display-p3-linear",da="linear",lt="srgb",pa="rec709",ma="p3",Fr=7680,Eh=519,$g=512,Zg=513,Jg=514,Qg=515,e_=516,t_=517,n_=518,i_=519,Th=35044,bh="300 es",lc=1035,xi=2e3,ga=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,cc=180/Math.PI;function xo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function r_(i,e){return(i%e+e)%e}function rl(i,e,t){return(1-t)*i+t*e}function wh(i){return(i&i-1)===0&&i!==0}function uc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ps(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const s_={DEG2RAD:na};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],M=r[1],v=r[4],x=r[7],T=r[2],C=r[5],w=r[8];return s[0]=o*g+a*M+l*T,s[3]=o*m+a*v+l*C,s[6]=o*p+a*x+l*w,s[1]=c*g+u*M+h*T,s[4]=c*m+u*v+h*C,s[7]=c*p+u*x+h*w,s[2]=f*g+d*M+_*T,s[5]=f*m+d*v+_*C,s[8]=f*p+d*x+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new qe;function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function o_(){const i=_a("canvas");return i.style.display="block",i}const Ah={};function Vs(i){i in Ah||(Ah[i]=!0,console.warn(i))}const Ch=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[Si]:{transfer:da,primaries:pa,toReference:i=>i,fromReference:i=>i},[It]:{transfer:lt,primaries:pa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ua]:{transfer:da,primaries:ma,toReference:i=>i.applyMatrix3(Rh),fromReference:i=>i.applyMatrix3(Ch)},[Gc]:{transfer:lt,primaries:ma,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rh),fromReference:i=>i.applyMatrix3(Ch).convertLinearToSRGB()}},a_=new Set([Si,Ua]),nt={enabled:!0,_workingColorSpace:Si,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!a_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Co[e].toReference,r=Co[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Co[i].primaries},getTransfer:function(i){return i===An?da:Co[i].transfer}};function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ol(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Br;class wd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=_a("canvas")),Br.width=e.width,Br.height=e.height;const n=Br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(as(t[n]/255)*255):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l_=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(al(r[o].image)):s.push(al(r[o]))}else s=al(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class xn extends Dr{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=Fn,r=Fn,s=bn,o=io,a=Bn,l=Vi,c=xn.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=xo(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xr?It:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?xr:Ed}set encoding(e){Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?It:An}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=gd;xn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,T=(p+1)/2,C=(u+f)/4,w=(h+g)/4,L=(_+m)/4;return v>x&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=C/n,s=w/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=C/r,s=L/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=L/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u_ extends Dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?It:An),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends u_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cd extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h_ extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),C=Math.atan2(T,p*M);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}const x=a*M;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new O,Ph=new Cr;class So{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Po.subVectors(this.max,Ls),zr.subVectors(e.a,Ls),kr.subVectors(e.b,Ls),Hr.subVectors(e.c,Ls),Ai.subVectors(kr,zr),Ci.subVectors(Hr,kr),ir.subVectors(zr,Hr);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-ir.z,ir.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,ir.z,0,-ir.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-ir.y,ir.x,0];return!cl(t,zr,kr,Hr,Po)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,zr,kr,Hr,Po))?!1:(Lo.crossVectors(Ai,Ci),t=[Lo.x,Lo.y,Lo.z],cl(t,zr,kr,Hr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],Un=new O,Ro=new So,zr=new O,kr=new O,Hr=new O,Ai=new O,Ci=new O,ir=new O,Ls=new O,Po=new O,Lo=new O,rr=new O;function cl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){rr.fromArray(i,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=n.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const f_=new So,Ds=new O,ul=new O;class Vc{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):f_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ds,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(ul)),this.expandByPoint(Ds.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new O,hl=new O,Do=new O,Ri=new O,fl=new O,Uo=new O,dl=new O;class Wc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(hl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Ri.dot(this.direction),l=-Ri.dot(Do),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(hl).addScaledVector(Do,f),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){fl.subVectors(t,e),Uo.subVectors(n,e),dl.crossVectors(fl,Uo);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Uo.crossVectors(Ri,Uo));if(l<0)return null;const c=a*this.direction.dot(fl.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,p_)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Pi.crossVectors(n,fn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Pi.crossVectors(n,fn)),Pi.normalize(),Io.crossVectors(fn,Pi),r[0]=Pi.x,r[4]=Io.x,r[8]=fn.x,r[1]=Pi.y,r[5]=Io.y,r[9]=fn.y,r[2]=Pi.z,r[6]=Io.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],T=n[15],C=r[0],w=r[4],L=r[8],S=r[12],R=r[1],k=r[5],V=r[9],$=r[13],D=r[2],G=r[6],W=r[10],H=r[14],J=r[3],ce=r[7],ae=r[11],B=r[15];return s[0]=o*C+a*R+l*D+c*J,s[4]=o*w+a*k+l*G+c*ce,s[8]=o*L+a*V+l*W+c*ae,s[12]=o*S+a*$+l*H+c*B,s[1]=u*C+h*R+f*D+d*J,s[5]=u*w+h*k+f*G+d*ce,s[9]=u*L+h*V+f*W+d*ae,s[13]=u*S+h*$+f*H+d*B,s[2]=_*C+g*R+m*D+p*J,s[6]=_*w+g*k+m*G+p*ce,s[10]=_*L+g*V+m*W+p*ae,s[14]=_*S+g*$+m*H+p*B,s[3]=M*C+v*R+x*D+T*J,s[7]=M*w+v*k+x*G+T*ce,s[11]=M*L+v*V+x*W+T*ae,s[15]=M*S+v*$+x*H+T*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,v=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,T=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,C=t*M+n*v+r*x+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=M*w,e[1]=(g*f*s-h*m*s-g*r*d+n*m*d+h*r*p-n*f*p)*w,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*w,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*w,e[4]=v*w,e[5]=(u*m*s-_*f*s+_*r*d-t*m*d-u*r*p+t*f*p)*w,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*w,e[8]=x*w,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=T*w,e[13]=(u*g*r-_*h*r+_*n*f-t*g*f-u*n*m+t*h*m)*w,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,M=l*c,v=l*u,x=l*h,T=n.x,C=n.y,w=n.z;return r[0]=(1-(g+p))*T,r[1]=(d+x)*T,r[2]=(_-v)*T,r[3]=0,r[4]=(d-x)*C,r[5]=(1-(f+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(_+v)*w,r[9]=(m-M)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=xi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,_;if(a===xi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ga)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let _,g;if(a===xi)_=(o+s)*h,g=-2*h;else if(a===ga)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gr=new O,In=new _t,d_=new O(0,0,0),p_=new O(1,1,1),Pi=new O,Io=new O,fn=new O,Lh=new _t,Dh=new Cr;class Ia{constructor(e=0,t=0,n=0,r=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const Uh=new O,Vr=new Cr,li=new _t,No=new O,Us=new O,g_=new O,__=new Cr,Ih=new O(1,0,0),Nh=new O(0,1,0),Oh=new O(0,0,1),v_={type:"added"},x_={type:"removed"};class Gt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new O,t=new Ia,n=new Cr,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Us,No,this.up):li.lookAt(No,Us,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(li),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new O(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new O,ci=new O,pl=new O,ui=new O,Wr=new O,Xr=new O,Fh=new O,ml=new O,gl=new O,_l=new O;let Oo=!1;class On{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),ci.subVectors(n,t),pl.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(ci),l=Nn.dot(pl),c=ci.dot(ci),u=ci.dot(pl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,n,r,s,o,a,l){return Oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oo=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ui),l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),ci.subVectors(e,t),Nn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oo=!0),On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,n),Xr.subVectors(s,n),ml.subVectors(e,n);const l=Wr.dot(ml),c=Xr.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,r);const u=Wr.dot(gl),h=Xr.dot(gl);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wr,o);_l.subVectors(e,s);const d=Wr.dot(_l),_=Xr.dot(_l);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Xr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Fh.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(Fh,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=r_(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vl(o,s,e+1/3),this.g=vl(o,s,e),this.b=vl(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=ol(e.r),this.g=ol(e.g),this.b=ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Pt(zt.r*255,0,255))*65536+Math.round(Pt(zt.g*255,0,255))*256+Math.round(Pt(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){nt.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Fo);const n=rl(Li.h,Fo.h,t),r=rl(Li.s,Fo.s,t),s=rl(Li.l,Fo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Je;Je.NAMES=Rd;let S_=0;class Mo extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=os,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pd extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new O,Bo=new ye;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Th,this.updateRange={offset:0,count:-1},this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ld extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dd extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let M_=0;const En=new _t,xl=new Gt,qr=new O,dn=new So,Is=new So,Rt=new O;class Hn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Dd:Ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(dn.min,Is.min),dn.expandByPoint(Rt),Rt.addVectors(dn.max,Is.max),dn.expandByPoint(Rt)):(dn.expandByPoint(Is.min),dn.expandByPoint(Is.max))}dn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Rt.add(qr)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new O,u[R]=new O;const h=new O,f=new O,d=new O,_=new ye,g=new ye,m=new ye,p=new O,M=new O;function v(R,k,V){h.fromArray(r,R*3),f.fromArray(r,k*3),d.fromArray(r,V*3),_.fromArray(o,R*2),g.fromArray(o,k*2),m.fromArray(o,V*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar($),M.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar($),c[R].add(p),c[k].add(p),c[V].add(p),u[R].add(M),u[k].add(M),u[V].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,k=x.length;R<k;++R){const V=x[R],$=V.start,D=V.count;for(let G=$,W=$+D;G<W;G+=3)v(n[G+0],n[G+1],n[G+2])}const T=new O,C=new O,w=new O,L=new O;function S(R){w.fromArray(s,R*3),L.copy(w);const k=c[R];T.copy(k),T.sub(w.multiplyScalar(w.dot(k))).normalize(),C.crossVectors(L,k);const $=C.dot(u[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=$}for(let R=0,k=x.length;R<k;++R){const V=x[R],$=V.start,D=V.count;for(let G=$,W=$+D;G<W;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Qn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new _t,sr=new Wc,zo=new Vc,zh=new O,Yr=new O,Kr=new O,jr=new O,Sl=new O,ko=new O,Ho=new ye,Go=new ye,Vo=new ye,kh=new O,Hh=new O,Gh=new O,Wo=new O,Xo=new O;class He extends Gt{constructor(e=new Hn,t=new Pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Sl.fromBufferAttribute(h,e),o?ko.addScaledVector(Sl,u):ko.addScaledVector(Sl.sub(t),u))}t.add(ko)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(zo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(zo,zh)===null||sr.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Bh.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,T=v;x<T;x+=3){const C=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);r=qo(this,p,e,n,c,u,h,C,w,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=qo(this,o,e,n,c,u,h,M,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,T=v;x<T;x+=3){const C=x,w=x+1,L=x+2;r=qo(this,p,e,n,c,u,h,C,w,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,v=m+1,x=m+2;r=qo(this,o,e,n,c,u,h,M,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function y_(i,e,t,n,r,s,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,jr);const u=y_(i,e,t,n,Yr,Kr,jr,Wo);if(u){r&&(Ho.fromBufferAttribute(r,a),Go.fromBufferAttribute(r,l),Vo.fromBufferAttribute(r,c),u.uv=On.getInterpolation(Wo,Yr,Kr,jr,Ho,Go,Vo,new ye)),s&&(Ho.fromBufferAttribute(s,a),Go.fromBufferAttribute(s,l),Vo.fromBufferAttribute(s,c),u.uv1=On.getInterpolation(Wo,Yr,Kr,jr,Ho,Go,Vo,new ye),u.uv2=u.uv1),o&&(kh.fromBufferAttribute(o,a),Hh.fromBufferAttribute(o,l),Gh.fromBufferAttribute(o,c),u.normal=On.getInterpolation(Wo,Yr,Kr,jr,kh,Hh,Gh,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};On.getNormal(Yr,Kr,jr,h.normal),u.face=h}return u}class bi extends Hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function _(g,m,p,M,v,x,T,C,w,L,S){const R=x/w,k=T/L,V=x/2,$=T/2,D=C/2,G=w+1,W=L+1;let H=0,J=0;const ce=new O;for(let ae=0;ae<W;ae++){const B=ae*k-$;for(let X=0;X<G;X++){const xe=X*R-V;ce[g]=xe*M,ce[m]=B*v,ce[p]=D,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(X/w),h.push(1-ae/L),H+=1}}for(let ae=0;ae<L;ae++)for(let B=0;B<w;B++){const X=f+B+G*ae,xe=f+B+G*(ae+1),_e=f+(B+1)+G*(ae+1),Se=f+(B+1)+G*ae;l.push(X,xe,Se),l.push(xe,_e,Se),J+=6}a.addGroup(d,J,S),d+=J,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=xs(i[t]);for(const r in n)e[r]=n[r]}return e}function E_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ud(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const T_={clone:xs,merge:$t};var b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=E_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Id extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends Id{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $r=-90,Zr=1;class A_ extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn($r,Zr,e,t);r.layers=this.layers,this.add(r);const s=new wn($r,Zr,e,t);s.layers=this.layers,this.add(s);const o=new wn($r,Zr,e,t);o.layers=this.layers,this.add(o);const a=new wn($r,Zr,e,t);a.layers=this.layers,this.add(a);const l=new wn($r,Zr,e,t);l.layers=this.layers,this.add(l);const c=new wn($r,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nd extends xn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xr?It:An),this.texture=new Nd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bi(5,5,5),s=new Rr({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Hi});s.uniforms.tEquirect.value=t;const o=new He(r,s),a=t.minFilter;return t.minFilter===io&&(t.minFilter=bn),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ml=new O,R_=new O,P_=new qe;let Di=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ml.subVectors(n,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||P_.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const or=new Vc,Yo=new O;class qc{constructor(e=new Di,t=new Di,n=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],M=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+_,x+M).normalize(),n[3].setComponents(l-o,f-u,m-_,x-M).normalize(),n[4].setComponents(l-a,f-h,m-g,x-v).normalize(),t===xi)n[5].setComponents(l+a,f+h,m+g,x+v).normalize();else if(t===ga)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yo.x=r.normal.x>0?e.max.x:e.min.x,Yo.y=r.normal.y>0?e.max.y:e.min.y,Yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function L_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Yc extends Hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-M,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,x=M+c*(p+1),T=M+1+c*(p+1),C=M+1+c*p;d.push(v,x,C),d.push(x,T,C)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.width,e.height,e.widthSegments,e.heightSegments)}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
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
#endif`,I_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
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
#endif`,z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q_=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,t0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,l0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,E0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,R0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,P0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,X0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Fv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Bv=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Wv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,qv=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Kv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$v=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Jv=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ex=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,nx=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ix=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,ox=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ve={alphahash_fragment:D_,alphahash_pars_fragment:U_,alphamap_fragment:I_,alphamap_pars_fragment:N_,alphatest_fragment:O_,alphatest_pars_fragment:F_,aomap_fragment:B_,aomap_pars_fragment:z_,begin_vertex:k_,beginnormal_vertex:H_,bsdfs:G_,iridescence_fragment:V_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Y_,clipping_planes_vertex:K_,color_fragment:j_,color_pars_fragment:$_,color_pars_vertex:Z_,color_vertex:J_,common:Q_,cube_uv_reflection_fragment:e0,defaultnormal_vertex:t0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:r0,emissivemap_pars_fragment:s0,colorspace_fragment:o0,colorspace_pars_fragment:a0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:u0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:E0,envmap_vertex:f0,fog_vertex:d0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:M0,lights_pars_begin:y0,lights_toon_fragment:T0,lights_toon_pars_fragment:b0,lights_phong_fragment:w0,lights_phong_pars_fragment:A0,lights_physical_fragment:C0,lights_physical_pars_fragment:R0,lights_fragment_begin:P0,lights_fragment_maps:L0,lights_fragment_end:D0,logdepthbuf_fragment:U0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:O0,map_fragment:F0,map_pars_fragment:B0,map_particle_fragment:z0,map_particle_pars_fragment:k0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:G0,morphcolor_vertex:V0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:K0,normal_pars_fragment:j0,normal_pars_vertex:$0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:rv,premultiplied_alpha_fragment:sv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:fv,shadowmap_vertex:dv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:_v,skinnormal_vertex:vv,specularmap_fragment:xv,specularmap_pars_fragment:Sv,tonemapping_fragment:Mv,tonemapping_pars_fragment:yv,transmission_fragment:Ev,transmission_pars_fragment:Tv,uv_pars_fragment:bv,uv_pars_vertex:wv,uv_vertex:Av,worldpos_vertex:Cv,background_vert:Rv,background_frag:Pv,backgroundCube_vert:Lv,backgroundCube_frag:Dv,cube_vert:Uv,cube_frag:Iv,depth_vert:Nv,depth_frag:Ov,distanceRGBA_vert:Fv,distanceRGBA_frag:Bv,equirect_vert:zv,equirect_frag:kv,linedashed_vert:Hv,linedashed_frag:Gv,meshbasic_vert:Vv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:Kv,meshnormal_vert:jv,meshnormal_frag:$v,meshphong_vert:Zv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:rx,shadow_vert:sx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},ve={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Yn={basic:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([ve.lights,ve.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Yn.physical={uniforms:$t([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ko={r:0,b:0,g:0};function cx(i,e,t,n,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Da)?(u===void 0&&(u=new He(new bi(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:xs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==lt,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new He(new Yc(2,2),new Rr({name:"BackgroundMaterial",uniforms:xs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Ko,Ud(i)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function ux(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,G,W,H,J){let ce=!1;if(o){const ae=g(H,W,G);c!==ae&&(c=ae,d(c.object)),ce=p(D,H,W,J),ce&&M(D,H,W,J)}else{const ae=G.wireframe===!0;(c.geometry!==H.id||c.program!==W.id||c.wireframe!==ae)&&(c.geometry=H.id,c.program=W.id,c.wireframe=ae,ce=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,L(D,G,W,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,G,W){const H=W.wireframe===!0;let J=a[D.id];J===void 0&&(J={},a[D.id]=J);let ce=J[G.id];ce===void 0&&(ce={},J[G.id]=ce);let ae=ce[H];return ae===void 0&&(ae=m(f()),ce[H]=ae),ae}function m(D){const G=[],W=[],H=[];for(let J=0;J<r;J++)G[J]=0,W[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:H,object:D,attributes:{},index:null}}function p(D,G,W,H){const J=c.attributes,ce=G.attributes;let ae=0;const B=W.getAttributes();for(const X in B)if(B[X].location>=0){const _e=J[X];let Se=ce[X];if(Se===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;ae++}return c.attributesNum!==ae||c.index!==H}function M(D,G,W,H){const J={},ce=G.attributes;let ae=0;const B=W.getAttributes();for(const X in B)if(B[X].location>=0){let _e=ce[X];_e===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),J[X]=Se,ae++}c.attributes=J,c.attributesNum=ae,c.index=H}function v(){const D=c.newAttributes;for(let G=0,W=D.length;G<W;G++)D[G]=0}function x(D){T(D,0)}function T(D,G){const W=c.newAttributes,H=c.enabledAttributes,J=c.attributeDivisors;W[D]=1,H[D]===0&&(i.enableVertexAttribArray(D),H[D]=1),J[D]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),J[D]=G)}function C(){const D=c.newAttributes,G=c.enabledAttributes;for(let W=0,H=G.length;W<H;W++)G[W]!==D[W]&&(i.disableVertexAttribArray(W),G[W]=0)}function w(D,G,W,H,J,ce,ae){ae===!0?i.vertexAttribIPointer(D,G,W,J,ce):i.vertexAttribPointer(D,G,W,H,J,ce)}function L(D,G,W,H){if(n.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const J=H.attributes,ce=W.getAttributes(),ae=G.defaultAttributeValues;for(const B in ce){const X=ce[B];if(X.location>=0){let xe=J[B];if(xe===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const _e=xe.normalized,Se=xe.itemSize,De=t.get(xe);if(De===void 0)continue;const Fe=De.buffer,Ue=De.type,Ne=De.bytesPerElement,Qe=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||xe.gpuType===_d);if(xe.isInterleavedBufferAttribute){const ze=xe.data,E=ze.stride,U=xe.offset;if(ze.isInstancedInterleavedBuffer){for(let F=0;F<X.locationSize;F++)T(X.location+F,ze.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let F=0;F<X.locationSize;F++)x(X.location+F);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let F=0;F<X.locationSize;F++)w(X.location+F,Se/X.locationSize,Ue,_e,E*Ne,(U+Se/X.locationSize*F)*Ne,Qe)}else{if(xe.isInstancedBufferAttribute){for(let ze=0;ze<X.locationSize;ze++)T(X.location+ze,xe.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<X.locationSize;ze++)x(X.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let ze=0;ze<X.locationSize;ze++)w(X.location+ze,Se/X.locationSize,Ue,_e,Se*Ne,Se/X.locationSize*ze*Ne,Qe)}}else if(ae!==void 0){const _e=ae[B];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(X.location,_e);break;case 3:i.vertexAttrib3fv(X.location,_e);break;case 4:i.vertexAttrib4fv(X.location,_e);break;default:i.vertexAttrib1fv(X.location,_e)}}}}C()}function S(){V();for(const D in a){const G=a[D];for(const W in G){const H=G[W];for(const J in H)_(H[J].object),delete H[J];delete G[W]}delete a[D]}}function R(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const W in G){const H=G[W];for(const J in H)_(H[J].object),delete H[J];delete G[W]}delete a[D.id]}function k(D){for(const G in a){const W=a[G];if(W[D.id]===void 0)continue;const H=W[D.id];for(const J in H)_(H[J].object),delete H[J];delete W[D.id]}}function V(){$(),u=!0,c!==l&&(c=l,d(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:x,disableUnusedAttributes:C}}function hx(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function fx(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),T=v&&x,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:C}}function dx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Di,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,v=M*4;let x=p.clippingState||null;l.value=x,x=u(_,f,v,d);for(let T=0;T!==v;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==g;++v,x+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function px(i){let e=new WeakMap;function t(o,a){return a===rc?o.mapping=gs:a===sc&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rc||a===sc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C_(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fd extends Id{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Vh=[.125,.215,.35,.446,.526,.582],mr=20,yl=new Fd,Wh=new Je;let El=null,Tl=0,bl=0;const hr=(1+Math.sqrt(5))/2,Jr=1/hr,Xh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,hr,Jr),new O(0,hr,-Jr),new O(Jr,0,hr),new O(-Jr,0,hr),new O(hr,Jr,0),new O(-hr,Jr,0)];class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,bl),e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ro,format:Bn,colorSpace:Si,depthBuffer:!1},r=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(s)),this._blurMaterial=gx(s,e,t)}return r}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,r){const a=new wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wh),u.toneMapping=Gi,u.autoClear=!1;const d=new Pd({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new He(new bi,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Wh),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;jo(r,M*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gs||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;jo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xh[(r-1)%Xh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new He(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*mr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const p=[];let M=0;for(let w=0;w<mr;++w){const L=w/g,S=Math.exp(-L*L/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[r],T=3*x*(r>v-is?r-v+is:0),C=4*(this._cubeSize-x);jo(t,T,C,3*x,2*x),l.setRenderTarget(t),l.render(h,yl)}}function mx(i){const e=[],t=[],n=[];let r=i;const s=i-is+1+Vh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-is?l=Vh[o-i+is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),v=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,L=C>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(S,g*_*C),v.set(f,m*_*C);const R=[C,C,C,C,C,C];x.set(R,p*_*C)}const T=new Hn;T.setAttribute("position",new Qn(M,g)),T.setAttribute("uv",new Qn(v,m)),T.setAttribute("faceIndex",new Qn(x,p)),e.push(T),r>is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(i,e,t){const n=new Ar(i,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gx(i,e,t){const n=new Float32Array(mr),r=new O(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Kh(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function jh(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function _x(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===rc||l===sc,u=l===gs||l===_s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new qh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new qh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xx(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let v=0,x=M.length;v<x;v+=3){const T=M[v+0],C=M[v+1],w=M[v+2];f.push(T,C,C,w,w,T)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const T=v+0,C=v+1,w=v+2;f.push(T,C,C,w,w,T)}}else return;const m=new(bd(f)?Dd:Ld)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Sx(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,a,f*l,_),t.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Mx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yx(i,e){return i[0]-e[0]}function Ex(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Tx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let G=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var d=G;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),T===!0&&(S=3);let R=u.attributes.position.count*S,k=1;R>e.maxTextureSize&&(k=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const V=new Float32Array(R*k*4*g),$=new Cd(V,R,k,g);$.type=Fi,$.needsUpdate=!0;const D=S*4;for(let W=0;W<g;W++){const H=C[W],J=w[W],ce=L[W],ae=R*k*4*W;for(let B=0;B<H.count;B++){const X=B*D;v===!0&&(o.fromBufferAttribute(H,B),V[ae+X+0]=o.x,V[ae+X+1]=o.y,V[ae+X+2]=o.z,V[ae+X+3]=0),x===!0&&(o.fromBufferAttribute(J,B),V[ae+X+4]=o.x,V[ae+X+5]=o.y,V[ae+X+6]=o.z,V[ae+X+7]=0),T===!0&&(o.fromBufferAttribute(ce,B),V[ae+X+8]=o.x,V[ae+X+9]=o.y,V[ae+X+10]=o.z,V[ae+X+11]=ce.itemSize===4?o.w:1)}}m={count:g,texture:$,size:new ye(R,k)},s.set(u,m),u.addEventListener("dispose",G)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const T=g[x];T[0]=x,T[1]=f[x]}g.sort(Ex);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(yx);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const T=a[x],C=T[0],w=T[1];C!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),p&&u.getAttribute("morphNormal"+x)!==p[C]&&u.setAttribute("morphNormal"+x,p[C]),r[x]=w,M+=w):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function bx(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Bd=new xn,zd=new Cd,kd=new h_,Hd=new Nd,$h=[],Zh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),ef=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$h[r];if(s===void 0&&(s=new Float32Array(r),$h[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Px(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),wt(t,n)}}function Lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),wt(t,n)}}function Dx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Jh.set(n),i.uniformMatrix4fv(this.addr,!1,Jh),wt(t,n)}}function Ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Fx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Hx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Bd,r)}function Gx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kd,r)}function Vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hd,r)}function Wx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zd,r)}function Xx(i){switch(i){case 5126:return wx;case 35664:return Ax;case 35665:return Cx;case 35666:return Rx;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Ix;case 35668:case 35672:return Nx;case 35669:case 35673:return Ox;case 5125:return Fx;case 36294:return Bx;case 36295:return zx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qx(i,e){i.uniform1fv(this.addr,e)}function Yx(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function Kx(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function jx(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function $x(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zx(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jx(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qx(i,e){i.uniform1iv(this.addr,e)}function eS(i,e){i.uniform2iv(this.addr,e)}function tS(i,e){i.uniform3iv(this.addr,e)}function nS(i,e){i.uniform4iv(this.addr,e)}function iS(i,e){i.uniform1uiv(this.addr,e)}function rS(i,e){i.uniform2uiv(this.addr,e)}function sS(i,e){i.uniform3uiv(this.addr,e)}function oS(i,e){i.uniform4uiv(this.addr,e)}function aS(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bd,s[o])}function lS(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kd,s[o])}function cS(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hd,s[o])}function uS(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zd,s[o])}function hS(i){switch(i){case 5126:return qx;case 35664:return Yx;case 35665:return Kx;case 35666:return jx;case 35674:return $x;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return rS;case 36295:return sS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}class fS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Xx(t.type)}}class dS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=hS(t.type)}}class pS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function tf(i,e){i.seq.push(e),i.map[e.id]=e}function mS(i,e,t){const n=i.name,r=n.length;for(wl.lastIndex=0;;){const s=wl.exec(n),o=wl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tf(t,c===void 0?new fS(a,i,e):new dS(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new pS(a),tf(t,h)),t=h}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gS=37297;let _S=0;function vS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xS(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===ma&&t===pa?n="LinearDisplayP3ToLinearSRGB":e===pa&&t===ma&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case Ua:return[n,"LinearTransferOETF"];case It:case Gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vS(i.getShaderSource(e),o)}else return r}function SS(i,e){const t=xS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function MS(i,e){let t;switch(e){case Dg:t="Linear";break;case Ug:t="Reinhard";break;case Ig:t="OptimizedCineon";break;case Ng:t="ACESFilmic";break;case Og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function ES(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function TS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bs(i){return i!==""}function sf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bS=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(bS,AS)}const wS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AS(i,e){let t=Ve[e];if(t===void 0){const n=wS.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}const CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(CS,RS)}function RS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===og?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function LS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function US(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case Pg:e="ENVMAP_BLENDING_MIX";break;case Lg:e="ENVMAP_BLENDING_ADD";break}return e}function IS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function NS(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PS(t),c=LS(t),u=DS(t),h=US(t),f=IS(t),d=t.isWebGL2?"":yS(t),_=ES(s),g=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[d,lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Gi?MS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,SS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=hc(o),o=sf(o,t),o=of(o,t),a=hc(a),a=sf(a,t),a=of(a,t),o=af(o),a=af(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,x=M+p+a,T=nf(r,r.VERTEX_SHADER,v),C=nf(r,r.FRAGMENT_SHADER,x);r.attachShader(g,T),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(k){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(g).trim(),$=r.getShaderInfoLog(T).trim(),D=r.getShaderInfoLog(C).trim();let G=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,T,C);else{const H=rf(r,T,"vertex"),J=rf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+H+`
`+J)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):($===""||D==="")&&(W=!1);W&&(k.diagnostics={runnable:G,programLog:V,vertexShader:{log:$,prefix:m},fragmentShader:{log:D,prefix:p}})}r.deleteShader(T),r.deleteShader(C),L=new ia(r,g),S=TS(r,g)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(g,gS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}let OS=0;class FS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new BS(e),t.set(e,n)),n}}class BS{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}}function zS(i,e,t,n,r,s,o){const a=new Xc,l=new FS,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,R,k,V,$){const D=V.fog,G=$.geometry,W=S.isMeshStandardMaterial?V.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),J=H&&H.mapping===Da?H.image.height:null,ce=_[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,B=ae!==void 0?ae.length:0;let X=0;G.morphAttributes.position!==void 0&&(X=1),G.morphAttributes.normal!==void 0&&(X=2),G.morphAttributes.color!==void 0&&(X=3);let xe,_e,Se,De;if(ce){const xt=Yn[ce];xe=xt.vertexShader,_e=xt.fragmentShader}else xe=S.vertexShader,_e=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),De=l.getFragmentShaderID(S);const Fe=i.getRenderTarget(),Ue=$.isInstancedMesh===!0,Ne=!!S.map,Qe=!!S.matcap,ze=!!H,E=!!S.aoMap,U=!!S.lightMap,F=!!S.bumpMap,Y=!!S.normalMap,q=!!S.displacementMap,Q=!!S.emissiveMap,se=!!S.metalnessMap,te=!!S.roughnessMap,oe=S.anisotropy>0,le=S.clearcoat>0,Ee=S.iridescence>0,b=S.sheen>0,y=S.transmission>0,N=oe&&!!S.anisotropyMap,ne=le&&!!S.clearcoatMap,ie=le&&!!S.clearcoatNormalMap,re=le&&!!S.clearcoatRoughnessMap,Me=Ee&&!!S.iridescenceMap,he=Ee&&!!S.iridescenceThicknessMap,me=b&&!!S.sheenColorMap,P=b&&!!S.sheenRoughnessMap,de=!!S.specularMap,ue=!!S.specularColorMap,Ae=!!S.specularIntensityMap,Te=y&&!!S.transmissionMap,Re=y&&!!S.thicknessMap,Ce=!!S.gradientMap,we=!!S.alphaMap,Ye=S.alphaTest>0,I=!!S.alphaHash,ge=!!S.extensions,fe=!!G.attributes.uv1,ee=!!G.attributes.uv2,pe=!!G.attributes.uv3;let Le=Gi;return S.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Le=i.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:_e,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Si,map:Ne,matcap:Qe,envMap:ze,envMapMode:ze&&H.mapping,envMapCubeUVHeight:J,aoMap:E,lightMap:U,bumpMap:F,normalMap:Y,displacementMap:f&&q,emissiveMap:Q,normalMapObjectSpace:Y&&S.normalMapType===jg,normalMapTangentSpace:Y&&S.normalMapType===Td,metalnessMap:se,roughnessMap:te,anisotropy:oe,anisotropyMap:N,clearcoat:le,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:re,iridescence:Ee,iridescenceMap:Me,iridescenceThicknessMap:he,sheen:b,sheenColorMap:me,sheenRoughnessMap:P,specularMap:de,specularColorMap:ue,specularIntensityMap:Ae,transmission:y,transmissionMap:Te,thicknessMap:Re,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===os,alphaMap:we,alphaTest:Ye,alphaHash:I,combine:S.combine,mapUv:Ne&&g(S.map.channel),aoMapUv:E&&g(S.aoMap.channel),lightMapUv:U&&g(S.lightMap.channel),bumpMapUv:F&&g(S.bumpMap.channel),normalMapUv:Y&&g(S.normalMap.channel),displacementMapUv:q&&g(S.displacementMap.channel),emissiveMapUv:Q&&g(S.emissiveMap.channel),metalnessMapUv:se&&g(S.metalnessMap.channel),roughnessMapUv:te&&g(S.roughnessMap.channel),anisotropyMapUv:N&&g(S.anisotropyMap.channel),clearcoatMapUv:ne&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:P&&g(S.sheenRoughnessMap.channel),specularMapUv:de&&g(S.specularMap.channel),specularColorMapUv:ue&&g(S.specularColorMap.channel),specularIntensityMapUv:Ae&&g(S.specularIntensityMap.channel),transmissionMapUv:Te&&g(S.transmissionMap.channel),thicknessMapUv:Re&&g(S.thicknessMap.channel),alphaMapUv:we&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Y||oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:ee,vertexUv3s:pe,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Ne||we),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:X,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gi,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)R.push(k),R.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(M(R,S),v(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function M(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function v(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const R=_[S.type];let k;if(R){const V=Yn[R];k=T_.clone(V.uniforms)}else k=S.uniforms;return k}function T(S,R){let k;for(let V=0,$=c.length;V<$;V++){const D=c[V];if(D.cacheKey===R){k=D,++k.usedTimes;break}}return k===void 0&&(k=new NS(i,R,S,s),c.push(k)),k}function C(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:L}}function kS(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function HS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,_,g,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||HS),n.length>1&&n.sort(f||cf),r.length>1&&r.sort(f||cf)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new uf,i.set(n,[o])):r>=s.length?(o=new uf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function VS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function WS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let XS=0;function qS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function YS(i,e){const t=new VS,n=WS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new _t,a=new _t;function l(u,h){let f=0,d=0,_=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let g=0,m=0,p=0,M=0,v=0,x=0,T=0,C=0,w=0,L=0,S=0;u.sort(qS);const R=h===!0?Math.PI:1;for(let V=0,$=u.length;V<$;V++){const D=u[V],G=D.color,W=D.intensity,H=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*W*R,d+=G.g*W*R,_+=G.b*W*R;else if(D.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(D.sh.coefficients[ce],W);S++}else if(D.isDirectionalLight){const ce=t.get(D);if(ce.color.copy(D.color).multiplyScalar(D.intensity*R),D.castShadow){const ae=D.shadow,B=n.get(D);B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,r.directionalShadow[g]=B,r.directionalShadowMap[g]=J,r.directionalShadowMatrix[g]=D.shadow.matrix,x++}r.directional[g]=ce,g++}else if(D.isSpotLight){const ce=t.get(D);ce.position.setFromMatrixPosition(D.matrixWorld),ce.color.copy(G).multiplyScalar(W*R),ce.distance=H,ce.coneCos=Math.cos(D.angle),ce.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ce.decay=D.decay,r.spot[p]=ce;const ae=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,ae.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[p]=ae.matrix,D.castShadow){const B=n.get(D);B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,r.spotShadow[p]=B,r.spotShadowMap[p]=J,C++}p++}else if(D.isRectAreaLight){const ce=t.get(D);ce.color.copy(G).multiplyScalar(W),ce.halfWidth.set(D.width*.5,0,0),ce.halfHeight.set(0,D.height*.5,0),r.rectArea[M]=ce,M++}else if(D.isPointLight){const ce=t.get(D);if(ce.color.copy(D.color).multiplyScalar(D.intensity*R),ce.distance=D.distance,ce.decay=D.decay,D.castShadow){const ae=D.shadow,B=n.get(D);B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,B.shadowCameraNear=ae.camera.near,B.shadowCameraFar=ae.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=J,r.pointShadowMatrix[m]=D.shadow.matrix,T++}r.point[m]=ce,m++}else if(D.isHemisphereLight){const ce=t.get(D);ce.skyColor.copy(D.color).multiplyScalar(W*R),ce.groundColor.copy(D.groundColor).multiplyScalar(W*R),r.hemi[v]=ce,v++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==g||k.pointLength!==m||k.spotLength!==p||k.rectAreaLength!==M||k.hemiLength!==v||k.numDirectionalShadows!==x||k.numPointShadows!==T||k.numSpotShadows!==C||k.numSpotMaps!==w||k.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=S,k.directionalLength=g,k.pointLength=m,k.spotLength=p,k.rectAreaLength=M,k.hemiLength=v,k.numDirectionalShadows=x,k.numPointShadows=T,k.numSpotShadows=C,k.numSpotMaps=w,k.numLightProbes=S,r.version=XS++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const x=u[M];if(x.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(x.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const T=r.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function hf(i,e){const t=new YS(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function KS(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hf(i,e),t.set(s,[l])):o>=a.length?(l=new hf(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class jS extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
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
}`;function QS(i,e,t){let n=new qc;const r=new ye,s=new ye,o=new Dt,a=new jS({depthPacking:Kg}),l=new $S,c={},u=t.maxTextureSize,h={[Ki]:rn,[rn]:Ki,[gi]:gi},f=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:ZS,fragmentShader:JS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new He(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(T,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const L=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Hi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=p!==fi&&this.type===fi,$=p===fi&&this.type!==fi;for(let D=0,G=T.length;D<G;D++){const W=T[D],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();if(r.multiply(J),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,H.mapSize.y=s.y)),H.map===null||V===!0||$===!0){const ae=this.type!==fi?{minFilter:Zt,magFilter:Zt}:{};H.map!==null&&H.map.dispose(),H.map=new Ar(r.x,r.y,ae),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ce=H.getViewportCount();for(let ae=0;ae<ce;ae++){const B=H.getViewport(ae);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),k.viewport(o),H.updateMatrices(W,ae),n=H.getFrustum(),x(C,w,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===fi&&M(H,w),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,S,R)};function M(T,C){const w=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ar(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,w,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,w,d,g,null)}function v(T,C,w,L){let S=null;const R=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=w.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=S.uuid,V=C.uuid;let $=c[k];$===void 0&&($={},c[k]=$);let D=$[V];D===void 0&&(D=S.clone(),$[V]=D),S=D}if(S.visible=C.visible,S.wireframe=C.wireframe,L===fi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=i.properties.get(S);k.light=w}return S}function x(T,C,w,L,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const V=e.update(T),$=T.material;if(Array.isArray($)){const D=V.groups;for(let G=0,W=D.length;G<W;G++){const H=D[G],J=$[H.materialIndex];if(J&&J.visible){const ce=v(T,J,L,S);i.renderBufferDirect(w,null,V,ce,T,H)}}}else if($.visible){const D=v(T,$,L,S);i.renderBufferDirect(w,null,V,D,T,null)}}const k=T.children;for(let V=0,$=k.length;V<$;V++)x(k[V],C,w,L,S)}}function eM(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const ge=new Dt;let fe=null;const ee=new Dt(0,0,0,0);return{setMask:function(pe){fe!==pe&&!I&&(i.colorMask(pe,pe,pe,pe),fe=pe)},setLocked:function(pe){I=pe},setClear:function(pe,Le,Ke,xt,yn){yn===!0&&(pe*=xt,Le*=xt,Ke*=xt),ge.set(pe,Le,Ke,xt),ee.equals(ge)===!1&&(i.clearColor(pe,Le,Ke,xt),ee.copy(ge))},reset:function(){I=!1,fe=null,ee.set(-1,0,0,0)}}}function s(){let I=!1,ge=null,fe=null,ee=null;return{setTest:function(pe){pe?Ne(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function(pe){ge!==pe&&!I&&(i.depthMask(pe),ge=pe)},setFunc:function(pe){if(fe!==pe){switch(pe){case Eg:i.depthFunc(i.NEVER);break;case Tg:i.depthFunc(i.ALWAYS);break;case bg:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case wg:i.depthFunc(i.EQUAL);break;case Ag:i.depthFunc(i.GEQUAL);break;case Cg:i.depthFunc(i.GREATER);break;case Rg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ee!==pe&&(i.clearDepth(pe),ee=pe)},reset:function(){I=!1,ge=null,fe=null,ee=null}}}function o(){let I=!1,ge=null,fe=null,ee=null,pe=null,Le=null,Ke=null,xt=null,yn=null;return{setTest:function(rt){I||(rt?Ne(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!I&&(i.stencilMask(rt),ge=rt)},setFunc:function(rt,Yt,Gn){(fe!==rt||ee!==Yt||pe!==Gn)&&(i.stencilFunc(rt,Yt,Gn),fe=rt,ee=Yt,pe=Gn)},setOp:function(rt,Yt,Gn){(Le!==rt||Ke!==Yt||xt!==Gn)&&(i.stencilOp(rt,Yt,Gn),Le=rt,Ke=Yt,xt=Gn)},setLocked:function(rt){I=rt},setClear:function(rt){yn!==rt&&(i.clearStencil(rt),yn=rt)},reset:function(){I=!1,ge=null,fe=null,ee=null,pe=null,Le=null,Ke=null,xt=null,yn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,x=null,T=null,C=null,w=null,L=null,S=new Je(0,0,0),R=0,k=!1,V=null,$=null,D=null,G=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ce=0;const ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ae)[1]),J=ce>=1):ae.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),J=ce>=2);let B=null,X={};const xe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Se=new Dt().fromArray(xe),De=new Dt().fromArray(_e);function Fe(I,ge,fe,ee){const pe=new Uint8Array(4),Le=i.createTexture();i.bindTexture(I,Le),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<fe;Ke++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ge,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ge+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Le}const Ue={};Ue[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(fa),se(!1),te(Xu),Ne(i.CULL_FACE),q(Hi);function Ne(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function Qe(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function ze(I,ge){return d[I]!==ge?(i.bindFramebuffer(I,ge),d[I]=ge,n&&(I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge)),!0):!1}function E(I,ge){let fe=g,ee=!1;if(I)if(fe=_.get(ge),fe===void 0&&(fe=[],_.set(ge,fe)),I.isWebGLMultipleRenderTargets){const pe=I.texture;if(fe.length!==pe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,Ke=pe.length;Le<Ke;Le++)fe[Le]=i.COLOR_ATTACHMENT0+Le;fe.length=pe.length,ee=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,ee=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,ee=!0);ee&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function U(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const F={[pr]:i.FUNC_ADD,[lg]:i.FUNC_SUBTRACT,[cg]:i.FUNC_REVERSE_SUBTRACT};if(n)F[ju]=i.MIN,F[$u]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(F[ju]=I.MIN_EXT,F[$u]=I.MAX_EXT)}const Y={[ug]:i.ZERO,[hg]:i.ONE,[fg]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[vg]:i.SRC_ALPHA_SATURATE,[gg]:i.DST_COLOR,[pg]:i.DST_ALPHA,[dg]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[_g]:i.ONE_MINUS_DST_COLOR,[mg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[Sg]:i.ONE_MINUS_CONSTANT_COLOR,[Mg]:i.CONSTANT_ALPHA,[yg]:i.ONE_MINUS_CONSTANT_ALPHA};function q(I,ge,fe,ee,pe,Le,Ke,xt,yn,rt){if(I===Hi){p===!0&&(Qe(i.BLEND),p=!1);return}if(p===!1&&(Ne(i.BLEND),p=!0),I!==ag){if(I!==M||rt!==k){if((v!==pr||C!==pr)&&(i.blendEquation(i.FUNC_ADD),v=pr,C=pr),rt)switch(I){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qu:i.blendFunc(i.ONE,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ku:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,T=null,w=null,L=null,S.set(0,0,0),R=0,M=I,k=rt}return}pe=pe||ge,Le=Le||fe,Ke=Ke||ee,(ge!==v||pe!==C)&&(i.blendEquationSeparate(F[ge],F[pe]),v=ge,C=pe),(fe!==x||ee!==T||Le!==w||Ke!==L)&&(i.blendFuncSeparate(Y[fe],Y[ee],Y[Le],Y[Ke]),x=fe,T=ee,w=Le,L=Ke),(xt.equals(S)===!1||yn!==R)&&(i.blendColor(xt.r,xt.g,xt.b,yn),S.copy(xt),R=yn),M=I,k=!1}function Q(I,ge){I.side===gi?Qe(i.CULL_FACE):Ne(i.CULL_FACE);let fe=I.side===rn;ge&&(fe=!fe),se(fe),I.blending===os&&I.transparent===!1?q(Hi):q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ee=I.stencilWrite;c.setTest(ee),ee&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(I){V!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),V=I)}function te(I){I!==ig?(Ne(i.CULL_FACE),I!==$&&(I===Xu?i.cullFace(i.BACK):I===rg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),$=I}function oe(I){I!==D&&(J&&i.lineWidth(I),D=I)}function le(I,ge,fe){I?(Ne(i.POLYGON_OFFSET_FILL),(G!==ge||W!==fe)&&(i.polygonOffset(ge,fe),G=ge,W=fe)):Qe(i.POLYGON_OFFSET_FILL)}function Ee(I){I?Ne(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+H-1),B!==I&&(i.activeTexture(I),B=I)}function y(I,ge,fe){fe===void 0&&(B===null?fe=i.TEXTURE0+H-1:fe=B);let ee=X[fe];ee===void 0&&(ee={type:void 0,texture:void 0},X[fe]=ee),(ee.type!==I||ee.texture!==ge)&&(B!==fe&&(i.activeTexture(fe),B=fe),i.bindTexture(I,ge||Ue[I]),ee.type=I,ee.texture=ge)}function N(){const I=X[B];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(I){Se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Se.copy(I))}function Re(I){De.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),De.copy(I))}function Ce(I,ge){let fe=h.get(ge);fe===void 0&&(fe=new WeakMap,h.set(ge,fe));let ee=fe.get(I);ee===void 0&&(ee=i.getUniformBlockIndex(ge,I.name),fe.set(I,ee))}function we(I,ge){const ee=h.get(ge).get(I);u.get(ge)!==ee&&(i.uniformBlockBinding(ge,ee,I.__bindingPointIndex),u.set(ge,ee))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},B=null,X={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,x=null,T=null,C=null,w=null,L=null,S=new Je(0,0,0),R=0,k=!1,V=null,$=null,D=null,G=null,W=null,Se.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:Qe,bindFramebuffer:ze,drawBuffers:E,useProgram:U,setBlending:q,setMaterial:Q,setFlipSided:se,setCullFace:te,setLineWidth:oe,setPolygonOffset:le,setScissorTest:Ee,activeTexture:b,bindTexture:y,unbindTexture:N,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:ue,texImage3D:Ae,updateUBOMapping:Ce,uniformBlockBinding:we,texStorage2D:P,texStorage3D:de,texSubImage2D:re,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:me,scissor:Te,viewport:Re,reset:Ye}}function tM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,y){return p?new OffscreenCanvas(b,y):_a("canvas")}function v(b,y,N,ne){let ie=1;if((b.width>ne||b.height>ne)&&(ie=ne/Math.max(b.width,b.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=y?uc:Math.floor,Me=re(ie*b.width),he=re(ie*b.height);g===void 0&&(g=M(Me,he));const me=N?M(Me,he):g;return me.width=Me,me.height=he,me.getContext("2d").drawImage(b,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+he+")."),me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return wh(b.width)&&wh(b.height)}function T(b){return a?!1:b.wrapS!==Fn||b.wrapT!==Fn||b.minFilter!==Zt&&b.minFilter!==bn}function C(b,y){return b.generateMipmaps&&y&&b.minFilter!==Zt&&b.minFilter!==bn}function w(b){i.generateMipmap(b)}function L(b,y,N,ne,ie=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=y;if(y===i.RED&&(N===i.FLOAT&&(re=i.R32F),N===i.HALF_FLOAT&&(re=i.R16F),N===i.UNSIGNED_BYTE&&(re=i.R8)),y===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(re=i.R8UI),N===i.UNSIGNED_SHORT&&(re=i.R16UI),N===i.UNSIGNED_INT&&(re=i.R32UI),N===i.BYTE&&(re=i.R8I),N===i.SHORT&&(re=i.R16I),N===i.INT&&(re=i.R32I)),y===i.RG&&(N===i.FLOAT&&(re=i.RG32F),N===i.HALF_FLOAT&&(re=i.RG16F),N===i.UNSIGNED_BYTE&&(re=i.RG8)),y===i.RGBA){const Me=ie?da:nt.getTransfer(ne);N===i.FLOAT&&(re=i.RGBA32F),N===i.HALF_FLOAT&&(re=i.RGBA16F),N===i.UNSIGNED_BYTE&&(re=Me===lt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(b,y,N){return C(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==Zt&&b.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){return b===Zt||b===Zu||b===Ja?i.NEAREST:i.LINEAR}function k(b){const y=b.target;y.removeEventListener("dispose",k),$(y),y.isVideoTexture&&_.delete(y)}function V(b){const y=b.target;y.removeEventListener("dispose",V),G(y)}function $(b){const y=n.get(b);if(y.__webglInit===void 0)return;const N=b.source,ne=m.get(N);if(ne){const ie=ne[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(b),Object.keys(ne).length===0&&m.delete(N)}n.remove(b)}function D(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const N=b.source,ne=m.get(N);delete ne[y.__cacheKey],o.memory.textures--}function G(b){const y=b.texture,N=n.get(b),ne=n.get(y);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(N.__webglFramebuffer[ie]))for(let re=0;re<N.__webglFramebuffer[ie].length;re++)i.deleteFramebuffer(N.__webglFramebuffer[ie][re]);else i.deleteFramebuffer(N.__webglFramebuffer[ie]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[ie])}else{if(Array.isArray(N.__webglFramebuffer))for(let ie=0;ie<N.__webglFramebuffer.length;ie++)i.deleteFramebuffer(N.__webglFramebuffer[ie]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ie=0;ie<N.__webglColorRenderbuffer.length;ie++)N.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[ie]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,re=y.length;ie<re;ie++){const Me=n.get(y[ie]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(y[ie])}n.remove(y),n.remove(b)}let W=0;function H(){W=0}function J(){const b=W;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),W+=1,b}function ce(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function ae(b,y){const N=n.get(b);if(b.isVideoTexture&&le(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(N,b,y);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+y)}function B(b,y){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Ne(N,b,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+y)}function X(b,y){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Ne(N,b,y);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+y)}function xe(b,y){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Qe(N,b,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+y)}const _e={[oc]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},Se={[Zt]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Fg]:i.LINEAR_MIPMAP_NEAREST,[io]:i.LINEAR_MIPMAP_LINEAR},De={[$g]:i.NEVER,[i_]:i.ALWAYS,[Zg]:i.LESS,[Qg]:i.LEQUAL,[Jg]:i.EQUAL,[n_]:i.GEQUAL,[e_]:i.GREATER,[t_]:i.NOTEQUAL};function Fe(b,y,N){if(N?(i.texParameteri(b,i.TEXTURE_WRAP_S,_e[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,_e[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,_e[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Se[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Se[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Fn||y.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,R(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Zt&&y.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,De[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Zt||y.minFilter!==Ja&&y.minFilter!==io||y.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ro&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Ue(b,y){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",k));const ne=y.source;let ie=m.get(ne);ie===void 0&&(ie={},m.set(ne,ie));const re=ce(y);if(re!==b.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ie[re].usedTimes++;const Me=ie[b.__cacheKey];Me!==void 0&&(ie[b.__cacheKey].usedTimes--,Me.usedTimes===0&&D(y)),b.__cacheKey=re,b.__webglTexture=ie[re].texture}return N}function Ne(b,y,N){let ne=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=Ue(b,y),re=y.source;t.bindTexture(ne,b.__webglTexture,i.TEXTURE0+N);const Me=n.get(re);if(re.version!==Me.__version||ie===!0){t.activeTexture(i.TEXTURE0+N);const he=nt.getPrimaries(nt.workingColorSpace),me=y.colorSpace===An?null:nt.getPrimaries(y.colorSpace),P=y.colorSpace===An||he===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const de=T(y)&&x(y.image)===!1;let ue=v(y.image,de,!1,u);ue=Ee(y,ue);const Ae=x(ue)||a,Te=s.convert(y.format,y.colorSpace);let Re=s.convert(y.type),Ce=L(y.internalFormat,Te,Re,y.colorSpace,y.isVideoTexture);Fe(ne,y,Ae);let we;const Ye=y.mipmaps,I=a&&y.isVideoTexture!==!0,ge=Me.__version===void 0||ie===!0,fe=S(y,ue,Ae);if(y.isDepthTexture)Ce=i.DEPTH_COMPONENT,a?y.type===Fi?Ce=i.DEPTH_COMPONENT32F:y.type===Oi?Ce=i.DEPTH_COMPONENT24:y.type===_r?Ce=i.DEPTH24_STENCIL8:Ce=i.DEPTH_COMPONENT16:y.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===vr&&Ce===i.DEPTH_COMPONENT&&y.type!==Hc&&y.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Oi,Re=s.convert(y.type)),y.format===vs&&Ce===i.DEPTH_COMPONENT&&(Ce=i.DEPTH_STENCIL,y.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=_r,Re=s.convert(y.type))),ge&&(I?t.texStorage2D(i.TEXTURE_2D,1,Ce,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Te,Re,null));else if(y.isDataTexture)if(Ye.length>0&&Ae){I&&ge&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,Ye[0].width,Ye[0].height);for(let ee=0,pe=Ye.length;ee<pe;ee++)we=Ye[ee],I?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,we.width,we.height,Te,Re,we.data):t.texImage2D(i.TEXTURE_2D,ee,Ce,we.width,we.height,0,Te,Re,we.data);y.generateMipmaps=!1}else I?(ge&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Te,Re,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Te,Re,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ce,Ye[0].width,Ye[0].height,ue.depth);for(let ee=0,pe=Ye.length;ee<pe;ee++)we=Ye[ee],y.format!==Bn?Te!==null?I?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,we.width,we.height,ue.depth,Te,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ce,we.width,we.height,ue.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,we.width,we.height,ue.depth,Te,Re,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ce,we.width,we.height,ue.depth,0,Te,Re,we.data)}else{I&&ge&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,Ye[0].width,Ye[0].height);for(let ee=0,pe=Ye.length;ee<pe;ee++)we=Ye[ee],y.format!==Bn?Te!==null?I?t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,we.width,we.height,Te,Re,we.data):t.texImage2D(i.TEXTURE_2D,ee,Ce,we.width,we.height,0,Te,Re,we.data)}else if(y.isDataArrayTexture)I?(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ce,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,Re,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,Te,Re,ue.data);else if(y.isData3DTexture)I?(ge&&t.texStorage3D(i.TEXTURE_3D,fe,Ce,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,Re,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,Te,Re,ue.data);else if(y.isFramebufferTexture){if(ge)if(I)t.texStorage2D(i.TEXTURE_2D,fe,Ce,ue.width,ue.height);else{let ee=ue.width,pe=ue.height;for(let Le=0;Le<fe;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ce,ee,pe,0,Te,Re,null),ee>>=1,pe>>=1}}else if(Ye.length>0&&Ae){I&&ge&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,Ye[0].width,Ye[0].height);for(let ee=0,pe=Ye.length;ee<pe;ee++)we=Ye[ee],I?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Te,Re,we):t.texImage2D(i.TEXTURE_2D,ee,Ce,Te,Re,we);y.generateMipmaps=!1}else I?(ge&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Re,ue)):t.texImage2D(i.TEXTURE_2D,0,Ce,Te,Re,ue);C(y,Ae)&&w(ne),Me.__version=re.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Qe(b,y,N){if(y.image.length!==6)return;const ne=Ue(b,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);const re=n.get(ie);if(ie.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const Me=nt.getPrimaries(nt.workingColorSpace),he=y.colorSpace===An?null:nt.getPrimaries(y.colorSpace),me=y.colorSpace===An||Me===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const P=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!P&&!de?ue[ee]=v(y.image[ee],!1,!0,c):ue[ee]=de?y.image[ee].image:y.image[ee],ue[ee]=Ee(y,ue[ee]);const Ae=ue[0],Te=x(Ae)||a,Re=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type),we=L(y.internalFormat,Re,Ce,y.colorSpace),Ye=a&&y.isVideoTexture!==!0,I=re.__version===void 0||ne===!0;let ge=S(y,Ae,Te);Fe(i.TEXTURE_CUBE_MAP,y,Te);let fe;if(P){Ye&&I&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,Ae.width,Ae.height);for(let ee=0;ee<6;ee++){fe=ue[ee].mipmaps;for(let pe=0;pe<fe.length;pe++){const Le=fe[pe];y.format!==Bn?Re!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,we,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Le.width,Le.height,Re,Ce,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,we,Le.width,Le.height,0,Re,Ce,Le.data)}}}else{fe=y.mipmaps,Ye&&I&&(fe.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,ue[0].width,ue[0].height));for(let ee=0;ee<6;ee++)if(de){Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Re,Ce,ue[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,we,ue[ee].width,ue[ee].height,0,Re,Ce,ue[ee].data);for(let pe=0;pe<fe.length;pe++){const Ke=fe[pe].image[ee].image;Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ke.width,Ke.height,Re,Ce,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,we,Ke.width,Ke.height,0,Re,Ce,Ke.data)}}else{Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,Ce,ue[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,we,Re,Ce,ue[ee]);for(let pe=0;pe<fe.length;pe++){const Le=fe[pe];Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Re,Ce,Le.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,we,Re,Ce,Le.image[ee])}}}C(y,Te)&&w(i.TEXTURE_CUBE_MAP),re.__version=ie.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ze(b,y,N,ne,ie,re){const Me=s.convert(N.format,N.colorSpace),he=s.convert(N.type),me=L(N.internalFormat,Me,he,N.colorSpace);if(!n.get(y).__hasExternalTextures){const de=Math.max(1,y.width>>re),ue=Math.max(1,y.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,me,de,ue,y.depth,0,Me,he,null):t.texImage2D(ie,re,me,de,ue,0,Me,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),oe(y)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(N).__webglTexture,0,te(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(N).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(b,y,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||oe(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Fi?ne=i.DEPTH_COMPONENT32F:ie.type===Oi&&(ne=i.DEPTH_COMPONENT24));const re=te(y);oe(y)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ne,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ne,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const ne=te(y);N&&oe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,y.width,y.height):oe(y)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<ne.length;ie++){const re=ne[ie],Me=s.convert(re.format,re.colorSpace),he=s.convert(re.type),me=L(re.internalFormat,Me,he,re.colorSpace),P=te(y);N&&oe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,me,y.width,y.height):oe(y)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,me,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,me,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ae(y.depthTexture,0);const ne=n.get(y.depthTexture).__webglTexture,ie=te(y);if(y.depthTexture.format===vr)oe(y)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(y.depthTexture.format===vs)oe(y)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function F(b){const y=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");U(y.__webglFramebuffer,b)}else if(N){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=i.createRenderbuffer(),E(y.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),E(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(b,y,N){const ne=n.get(b);y!==void 0&&ze(ne.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&F(b)}function q(b){const y=b.texture,N=n.get(b),ne=n.get(y);b.addEventListener("dispose",V),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=y.version,o.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,Me=x(b)||a;if(ie){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let me=0;me<y.mipmaps.length;me++)N.__webglFramebuffer[he][me]=i.createFramebuffer()}else N.__webglFramebuffer[he]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)N.__webglFramebuffer[he]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const he=b.texture;for(let me=0,P=he.length;me<P;me++){const de=n.get(he[me]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&oe(b)===!1){const he=re?y:[y];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const P=he[me];N.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[me]);const de=s.convert(P.format,P.colorSpace),ue=s.convert(P.type),Ae=L(P.internalFormat,de,ue,P.colorSpace,b.isXRRenderTarget===!0),Te=te(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ae,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,N.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),E(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,y,Me);for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)ze(N.__webglFramebuffer[he][me],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else ze(N.__webglFramebuffer[he],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);C(y,Me)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const he=b.texture;for(let me=0,P=he.length;me<P;me++){const de=he[me],ue=n.get(de);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Fe(i.TEXTURE_2D,de,Me),ze(N.__webglFramebuffer,b,de,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),C(de,Me)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),Fe(he,y,Me),a&&y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)ze(N.__webglFramebuffer[me],b,y,i.COLOR_ATTACHMENT0,he,me);else ze(N.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,he,0);C(y,Me)&&w(he),t.unbindTexture()}b.depthBuffer&&F(b)}function Q(b){const y=x(b)||a,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,ie=N.length;ne<ie;ne++){const re=N[ne];if(C(re,y)){const Me=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(re).__webglTexture;t.bindTexture(Me,he),w(Me),t.unbindTexture()}}}function se(b){if(a&&b.samples>0&&oe(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,ne=b.height;let ie=i.COLOR_BUFFER_BIT;const re=[],Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(b),me=b.isWebGLMultipleRenderTargets===!0;if(me)for(let P=0;P<y.length;P++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let P=0;P<y.length;P++){re.push(i.COLOR_ATTACHMENT0+P),b.depthBuffer&&re.push(Me);const de=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(de===!1&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[P]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),me){const ue=n.get(y[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,N,ne,0,0,N,ne,ie,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let P=0;P<y.length;P++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,he.__webglColorRenderbuffer[P]);const de=n.get(y[P]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function te(b){return Math.min(h,b.samples)}function oe(b){const y=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(b){const y=o.render.frame;_.get(b)!==y&&(_.set(b,y),b.update())}function Ee(b,y){const N=b.colorSpace,ne=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===lc||N!==Si&&N!==An&&(nt.getTransfer(N)===lt?a===!1?e.has("EXT_sRGB")===!0&&ne===Bn?(b.format=lc,b.minFilter=bn,b.generateMipmaps=!1):y=wd.sRGBToLinear(y):(ne!==Bn||ie!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.setTexture2D=ae,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=xe,this.rebindTextures=Y,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=oe}function nM(i,e,t){const n=t.isWebGL2;function r(s,o=An){let a;const l=nt.getTransfer(o);if(s===Vi)return i.UNSIGNED_BYTE;if(s===vd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===xd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Bg)return i.BYTE;if(s===zg)return i.SHORT;if(s===Hc)return i.UNSIGNED_SHORT;if(s===_d)return i.INT;if(s===Oi)return i.UNSIGNED_INT;if(s===Fi)return i.FLOAT;if(s===ro)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kg)return i.ALPHA;if(s===Bn)return i.RGBA;if(s===Hg)return i.LUMINANCE;if(s===Gg)return i.LUMINANCE_ALPHA;if(s===vr)return i.DEPTH_COMPONENT;if(s===vs)return i.DEPTH_STENCIL;if(s===lc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vg)return i.RED;if(s===Sd)return i.RED_INTEGER;if(s===Wg)return i.RG;if(s===Md)return i.RG_INTEGER;if(s===yd)return i.RGBA_INTEGER;if(s===Qa||s===el||s===tl||s===nl)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ju||s===Qu||s===eh||s===th)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ju)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===th)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nh||s===ih)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nh)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ih)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rh||s===sh||s===oh||s===ah||s===lh||s===ch||s===uh||s===hh||s===fh||s===dh||s===ph||s===mh||s===gh||s===_h)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ah)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ch)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ph)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_h)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===il||s===vh||s===xh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===il)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qg||s===Sh||s===Mh||s===yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===il)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class iM extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rM={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sM extends xn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=Oi),n===void 0&&u===vs&&(n=_r),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class oM extends Dr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const M=[],v=[],x=new wn;x.layers.enable(1),x.viewport=new Dt;const T=new wn;T.layers.enable(2),T.viewport=new Dt;const C=[x,T],w=new iM;w.layers.enable(1),w.layers.enable(2);let L=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=M[B];return X===void 0&&(X=new Al,M[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=M[B];return X===void 0&&(X=new Al,M[B]=X),X.getGripSpace()},this.getHand=function(B){let X=M[B];return X===void 0&&(X=new Al,M[B]=X),X.getHandSpace()};function R(B){const X=v.indexOf(B.inputSource);if(X===-1)return;const xe=M[X];xe!==void 0&&(xe.update(B.inputSource,B.frame,c||o),xe.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",V);for(let B=0;B<M.length;B++){const X=v[B];X!==null&&(v[B]=null,M[B].disconnect(X))}L=null,S=null,e.setRenderTarget(m),d=null,f=null,h=null,r=null,p=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",k),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:d}),p=new Ar(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,xe=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?vs:vr,xe=g.stencil?_r:Oi);const Se={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Se),r.updateRenderState({layers:[f]}),p=new Ar(f.textureWidth,f.textureHeight,{format:Bn,type:Vi,depthTexture:new sM(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(B){for(let X=0;X<B.removed.length;X++){const xe=B.removed[X],_e=v.indexOf(xe);_e>=0&&(v[_e]=null,M[_e].disconnect(xe))}for(let X=0;X<B.added.length;X++){const xe=B.added[X];let _e=v.indexOf(xe);if(_e===-1){for(let De=0;De<M.length;De++)if(De>=v.length){v.push(xe),_e=De;break}else if(v[De]===null){v[De]=xe,_e=De;break}if(_e===-1)break}const Se=M[_e];Se&&Se.connect(xe)}}const $=new O,D=new O;function G(B,X,xe){$.setFromMatrixPosition(X.matrixWorld),D.setFromMatrixPosition(xe.matrixWorld);const _e=$.distanceTo(D),Se=X.projectionMatrix.elements,De=xe.projectionMatrix.elements,Fe=Se[14]/(Se[10]-1),Ue=Se[14]/(Se[10]+1),Ne=(Se[9]+1)/Se[5],Qe=(Se[9]-1)/Se[5],ze=(Se[8]-1)/Se[0],E=(De[8]+1)/De[0],U=Fe*ze,F=Fe*E,Y=_e/(-ze+E),q=Y*-ze;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(q),B.translateZ(Y),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Q=Fe+Y,se=Ue+Y,te=U-q,oe=F+(_e-q),le=Ne*Ue/se*Q,Ee=Qe*Ue/se*Q;B.projectionMatrix.makePerspective(te,oe,le,Ee,Q,se),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;w.near=T.near=x.near=B.near,w.far=T.far=x.far=B.far,(L!==w.near||S!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,S=w.far);const X=B.parent,xe=w.cameras;W(w,X);for(let _e=0;_e<xe.length;_e++)W(xe[_e],X);xe.length===2?G(w,x,T):w.projectionMatrix.copy(x.projectionMatrix),H(B,w,X)};function H(B,X,xe){xe===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(xe.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=cc*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let J=null;function ce(B,X){if(u=X.getViewerPose(c||o),_=X,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;xe.length!==w.cameras.length&&(w.cameras.length=0,_e=!0);for(let Se=0;Se<xe.length;Se++){const De=xe[Se];let Fe=null;if(d!==null)Fe=d.getViewport(De);else{const Ne=h.getViewSubImage(f,De);Fe=Ne.viewport,Se===0&&(e.setRenderTargetTextures(p,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(p))}let Ue=C[Se];Ue===void 0&&(Ue=new wn,Ue.layers.enable(Se),Ue.viewport=new Dt,C[Se]=Ue),Ue.matrix.fromArray(De.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(De.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Se===0&&(w.matrix.copy(Ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_e===!0&&w.cameras.push(Ue)}}for(let xe=0;xe<M.length;xe++){const _e=v[xe],Se=M[xe];_e!==null&&Se!==void 0&&Se.update(_e,X,c||o)}J&&J(B,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}const ae=new Od;ae.setAnimationLoop(ce),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function aM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ud(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=r[M.id];x===void 0&&(_(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(M,T);const C=e.render.frame;s[M.id]!==C&&(f(M),s[M.id]=C)}function u(M){const v=h();M.__bindingPointIndex=v;const x=i.createBuffer(),T=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=r[M.id],x=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,w=x.length;C<w;C++){const L=x[C];if(d(L,C,T)===!0){const S=L.__offset,R=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let V=0;V<R.length;V++){const $=R[V],D=g($);typeof $=="number"?(L.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,S+k,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=$.elements[0],L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=$.elements[0],L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=$.elements[0]):($.toArray(L.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,x){const T=M.value;if(x[v]===void 0){if(typeof T=="number")x[v]=T;else{const C=Array.isArray(T)?T:[T],w=[];for(let L=0;L<C.length;L++)w.push(C[L].clone());x[v]=w}return!0}else if(typeof T=="number"){if(x[v]!==T)return x[v]=T,!0}else{const C=Array.isArray(x[v])?x[v]:[x[v]],w=Array.isArray(T)?T:[T];for(let L=0;L<C.length;L++){const S=C[L];if(S.equals(w[L])===!1)return S.copy(w[L]),!0}}return!1}function _(M){const v=M.uniforms;let x=0;const T=16;let C=0;for(let w=0,L=v.length;w<L;w++){const S=v[w],R={boundary:0,storage:0},k=Array.isArray(S.value)?S.value:[S.value];for(let V=0,$=k.length;V<$;V++){const D=k[V],G=g(D);R.boundary+=G.boundary,R.storage+=G.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,w>0){C=x%T;const V=T-C;C!==0&&V-R.boundary<0&&(x+=T-C,S.__offset=x)}x+=R.storage}return C=x%T,C>0&&(x+=T-C),M.__size=x,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Gd{constructor(e={}){const{canvas:t=o_(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let x=!1,T=0,C=0,w=null,L=-1,S=null;const R=new Dt,k=new Dt;let V=null;const $=new Je(0);let D=0,G=t.width,W=t.height,H=1,J=null,ce=null;const ae=new Dt(0,0,G,W),B=new Dt(0,0,G,W);let X=!1;const xe=new qc;let _e=!1,Se=!1,De=null;const Fe=new _t,Ue=new ye,Ne=new O,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return w===null?H:1}let E=n;function U(A,z){for(let K=0;K<A.length;K++){const j=A[K],Z=t.getContext(j,z);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ge,!1),E===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),E=U(z,A),E===null)throw U(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let F,Y,q,Q,se,te,oe,le,Ee,b,y,N,ne,ie,re,Me,he,me,P,de,ue,Ae,Te,Re;function Ce(){F=new vx(E),Y=new fx(E,F,e),F.init(Y),Ae=new nM(E,F,Y),q=new eM(E,F,Y),Q=new Mx(E),se=new kS,te=new tM(E,F,q,se,Y,Ae,Q),oe=new px(v),le=new _x(v),Ee=new L_(E,Y),Te=new ux(E,F,Ee,Y),b=new xx(E,Ee,Q,Te),y=new bx(E,b,Ee,Q),P=new Tx(E,Y,te),Me=new dx(se),N=new zS(v,oe,le,F,Y,Te,Me),ne=new aM(v,se),ie=new GS,re=new KS(F,Y),me=new cx(v,oe,le,q,y,f,l),he=new QS(v,y,Y),Re=new lM(E,Q,Y,q),de=new hx(E,F,Q,Y),ue=new Sx(E,F,Q,Y),Q.programs=N.programs,v.capabilities=Y,v.extensions=F,v.properties=se,v.renderLists=ie,v.shadowMap=he,v.state=q,v.info=Q}Ce();const we=new oM(v,E);this.xr=we,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=F.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=F.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(G,W,!1))},this.getSize=function(A){return A.set(G,W)},this.setSize=function(A,z,K=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,W=z,t.width=Math.floor(A*H),t.height=Math.floor(z*H),K===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(G*H,W*H).floor()},this.setDrawingBufferSize=function(A,z,K){G=A,W=z,H=K,t.width=Math.floor(A*K),t.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,z,K,j){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,z,K,j),q.viewport(R.copy(ae).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,z,K,j){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,z,K,j),q.scissor(k.copy(B).multiplyScalar(H).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(A){q.setScissorTest(X=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(A=!0,z=!0,K=!0){let j=0;if(A){let Z=!1;if(w!==null){const be=w.texture.format;Z=be===yd||be===Md||be===Sd}if(Z){const be=w.texture.type,Pe=be===Vi||be===Oi||be===Hc||be===_r||be===vd||be===xd,Ie=me.getClearColor(),Oe=me.getClearAlpha(),Xe=Ie.r,Be=Ie.g,ke=Ie.b;Pe?(d[0]=Xe,d[1]=Be,d[2]=ke,d[3]=Oe,E.clearBufferuiv(E.COLOR,0,d)):(_[0]=Xe,_[1]=Be,_[2]=ke,_[3]=Oe,E.clearBufferiv(E.COLOR,0,_))}else j|=E.COLOR_BUFFER_BIT}z&&(j|=E.DEPTH_BUFFER_BIT),K&&(j|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),re.dispose(),se.dispose(),oe.dispose(),le.dispose(),y.dispose(),Te.dispose(),Re.dispose(),N.dispose(),we.dispose(),we.removeEventListener("sessionstart",yn),we.removeEventListener("sessionend",rt),De&&(De.dispose(),De=null),Yt.stop()};function Ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=Q.autoReset,z=he.enabled,K=he.autoUpdate,j=he.needsUpdate,Z=he.type;Ce(),Q.autoReset=A,he.enabled=z,he.autoUpdate=K,he.needsUpdate=j,he.type=Z}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const z=A.target;z.removeEventListener("dispose",fe),ee(z)}function ee(A){pe(A),se.remove(A)}function pe(A){const z=se.get(A).programs;z!==void 0&&(z.forEach(function(K){N.releaseProgram(K)}),A.isShaderMaterial&&N.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,j,Z,be){z===null&&(z=Qe);const Pe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=Qm(A,z,K,j,Z);q.setMaterial(j,Pe);let Oe=K.index,Xe=1;if(j.wireframe===!0){if(Oe=b.getWireframeAttribute(K),Oe===void 0)return;Xe=2}const Be=K.drawRange,ke=K.attributes.position;let mt=Be.start*Xe,un=(Be.start+Be.count)*Xe;be!==null&&(mt=Math.max(mt,be.start*Xe),un=Math.min(un,(be.start+be.count)*Xe)),Oe!==null?(mt=Math.max(mt,0),un=Math.min(un,Oe.count)):ke!=null&&(mt=Math.max(mt,0),un=Math.min(un,ke.count));const Ct=un-mt;if(Ct<0||Ct===1/0)return;Te.setup(Z,j,Ie,K,Oe);let si,dt=de;if(Oe!==null&&(si=Ee.get(Oe),dt=ue,dt.setIndex(si)),Z.isMesh)j.wireframe===!0?(q.setLineWidth(j.wireframeLinewidth*ze()),dt.setMode(E.LINES)):dt.setMode(E.TRIANGLES);else if(Z.isLine){let je=j.linewidth;je===void 0&&(je=1),q.setLineWidth(je*ze()),Z.isLineSegments?dt.setMode(E.LINES):Z.isLineLoop?dt.setMode(E.LINE_LOOP):dt.setMode(E.LINE_STRIP)}else Z.isPoints?dt.setMode(E.POINTS):Z.isSprite&&dt.setMode(E.TRIANGLES);if(Z.isInstancedMesh)dt.renderInstances(mt,Ct,Z.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ka=Math.min(K.instanceCount,je);dt.renderInstances(mt,Ct,Ka)}else dt.render(mt,Ct)};function Le(A,z,K){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Ao(A,z,K),A.side=Ki,A.needsUpdate=!0,Ao(A,z,K),A.side=gi):Ao(A,z,K)}this.compile=function(A,z,K=null){K===null&&(K=A),m=re.get(K),m.init(),M.push(m),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==K&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(v._useLegacyLights);const j=new Set;return A.traverse(function(Z){const be=Z.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){const Ie=be[Pe];Le(Ie,K,Z),j.add(Ie)}else Le(be,K,Z),j.add(be)}),M.pop(),m=null,j},this.compileAsync=function(A,z,K=null){const j=this.compile(A,z,K);return new Promise(Z=>{function be(){if(j.forEach(function(Pe){se.get(Pe).currentProgram.isReady()&&j.delete(Pe)}),j.size===0){Z(A);return}setTimeout(be,10)}F.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ke=null;function xt(A){Ke&&Ke(A)}function yn(){Yt.stop()}function rt(){Yt.start()}const Yt=new Od;Yt.setAnimationLoop(xt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(A){Ke=A,we.setAnimationLoop(A),A===null?Yt.stop():Yt.start()},we.addEventListener("sessionstart",yn),we.addEventListener("sessionend",rt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(z),z=we.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,w),m=re.get(A,M.length),m.init(),M.push(m),Fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xe.setFromProjectionMatrix(Fe),Se=this.localClippingEnabled,_e=Me.init(this.clippingPlanes,Se),g=ie.get(A,p.length),g.init(),p.push(g),Gn(A,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(J,ce),this.info.render.frame++,_e===!0&&Me.beginShadows();const K=m.state.shadowsArray;if(he.render(K,A,z),_e===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(g,A),m.setupLights(v._useLegacyLights),z.isArrayCamera){const j=z.cameras;for(let Z=0,be=j.length;Z<be;Z++){const Pe=j[Z];zu(g,A,Pe,Pe.viewport)}}else zu(g,A,z);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,z),Te.resetDefaultState(),L=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Gn(A,z,K,j){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xe.intersectsSprite(A)){j&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);const Pe=y.update(A),Ie=A.material;Ie.visible&&g.push(A,Pe,Ie,K,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xe.intersectsObject(A))){const Pe=y.update(A),Ie=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ie)){const Oe=Pe.groups;for(let Xe=0,Be=Oe.length;Xe<Be;Xe++){const ke=Oe[Xe],mt=Ie[ke.materialIndex];mt&&mt.visible&&g.push(A,Pe,mt,K,Ne.z,ke)}}else Ie.visible&&g.push(A,Pe,Ie,K,Ne.z,null)}}const be=A.children;for(let Pe=0,Ie=be.length;Pe<Ie;Pe++)Gn(be[Pe],z,K,j)}function zu(A,z,K,j){const Z=A.opaque,be=A.transmissive,Pe=A.transparent;m.setupLightsView(K),_e===!0&&Me.setGlobalState(v.clippingPlanes,K),be.length>0&&Jm(Z,be,z,K),j&&q.viewport(R.copy(j)),Z.length>0&&wo(Z,z,K),be.length>0&&wo(be,z,K),Pe.length>0&&wo(Pe,z,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Jm(A,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const be=Y.isWebGL2;De===null&&(De=new Ar(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?ro:Vi,minFilter:io,samples:be?4:0})),v.getDrawingBufferSize(Ue),be?De.setSize(Ue.x,Ue.y):De.setSize(uc(Ue.x),uc(Ue.y));const Pe=v.getRenderTarget();v.setRenderTarget(De),v.getClearColor($),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=Gi,wo(A,K,j),te.updateMultisampleRenderTarget(De),te.updateRenderTargetMipmap(De);let Oe=!1;for(let Xe=0,Be=z.length;Xe<Be;Xe++){const ke=z[Xe],mt=ke.object,un=ke.geometry,Ct=ke.material,si=ke.group;if(Ct.side===gi&&mt.layers.test(j.layers)){const dt=Ct.side;Ct.side=rn,Ct.needsUpdate=!0,ku(mt,K,j,un,Ct,si),Ct.side=dt,Ct.needsUpdate=!0,Oe=!0}}Oe===!0&&(te.updateMultisampleRenderTarget(De),te.updateRenderTargetMipmap(De)),v.setRenderTarget(Pe),v.setClearColor($,D),v.toneMapping=Ie}function wo(A,z,K){const j=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,be=A.length;Z<be;Z++){const Pe=A[Z],Ie=Pe.object,Oe=Pe.geometry,Xe=j===null?Pe.material:j,Be=Pe.group;Ie.layers.test(K.layers)&&ku(Ie,z,K,Oe,Xe,Be)}}function ku(A,z,K,j,Z,be){A.onBeforeRender(v,z,K,j,Z,be),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(v,z,K,j,A,be),Z.transparent===!0&&Z.side===gi&&Z.forceSinglePass===!1?(Z.side=rn,Z.needsUpdate=!0,v.renderBufferDirect(K,z,j,Z,A,be),Z.side=Ki,Z.needsUpdate=!0,v.renderBufferDirect(K,z,j,Z,A,be),Z.side=gi):v.renderBufferDirect(K,z,j,Z,A,be),A.onAfterRender(v,z,K,j,Z,be)}function Ao(A,z,K){z.isScene!==!0&&(z=Qe);const j=se.get(A),Z=m.state.lights,be=m.state.shadowsArray,Pe=Z.state.version,Ie=N.getParameters(A,Z.state,be,z,K),Oe=N.getProgramCacheKey(Ie);let Xe=j.programs;j.environment=A.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(A.isMeshStandardMaterial?le:oe).get(A.envMap||j.environment),Xe===void 0&&(A.addEventListener("dispose",fe),Xe=new Map,j.programs=Xe);let Be=Xe.get(Oe);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===Pe)return Gu(A,Ie),Be}else Ie.uniforms=N.getUniforms(A),A.onBuild(K,Ie,v),A.onBeforeCompile(Ie,v),Be=N.acquireProgram(Ie,Oe),Xe.set(Oe,Be),j.uniforms=Ie.uniforms;const ke=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Me.uniform),Gu(A,Ie),j.needsLights=tg(A),j.lightsStateVersion=Pe,j.needsLights&&(ke.ambientLightColor.value=Z.state.ambient,ke.lightProbe.value=Z.state.probe,ke.directionalLights.value=Z.state.directional,ke.directionalLightShadows.value=Z.state.directionalShadow,ke.spotLights.value=Z.state.spot,ke.spotLightShadows.value=Z.state.spotShadow,ke.rectAreaLights.value=Z.state.rectArea,ke.ltc_1.value=Z.state.rectAreaLTC1,ke.ltc_2.value=Z.state.rectAreaLTC2,ke.pointLights.value=Z.state.point,ke.pointLightShadows.value=Z.state.pointShadow,ke.hemisphereLights.value=Z.state.hemi,ke.directionalShadowMap.value=Z.state.directionalShadowMap,ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ke.spotShadowMap.value=Z.state.spotShadowMap,ke.spotLightMatrix.value=Z.state.spotLightMatrix,ke.spotLightMap.value=Z.state.spotLightMap,ke.pointShadowMap.value=Z.state.pointShadowMap,ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function Hu(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ia.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Gu(A,z){const K=se.get(A);K.outputColorSpace=z.outputColorSpace,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Qm(A,z,K,j,Z){z.isScene!==!0&&(z=Qe),te.resetTextureUnits();const be=z.fog,Pe=j.isMeshStandardMaterial?z.environment:null,Ie=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Si,Oe=(j.isMeshStandardMaterial?le:oe).get(j.envMap||Pe),Xe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Be=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,un=!!K.morphAttributes.color;let Ct=Gi;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const si=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=si!==void 0?si.length:0,je=se.get(j),Ka=m.state.lights;if(_e===!0&&(Se===!0||A!==S)){const hn=A===S&&j.id===L;Me.setState(j,A,hn)}let St=!1;j.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ka.state.version||je.outputColorSpace!==Ie||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||je.envMap!==Oe||j.fog===!0&&je.fog!==be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Be||je.morphTargets!==ke||je.morphNormals!==mt||je.morphColors!==un||je.toneMapping!==Ct||Y.isWebGL2===!0&&je.morphTargetsCount!==dt)&&(St=!0):(St=!0,je.__version=j.version);let tr=je.currentProgram;St===!0&&(tr=Ao(j,z,Z));let Vu=!1,Rs=!1,ja=!1;const Kt=tr.getUniforms(),nr=je.uniforms;if(q.useProgram(tr.program)&&(Vu=!0,Rs=!0,ja=!0),j.id!==L&&(L=j.id,Rs=!0),Vu||S!==A){Kt.setValue(E,"projectionMatrix",A.projectionMatrix),Kt.setValue(E,"viewMatrix",A.matrixWorldInverse);const hn=Kt.map.cameraPosition;hn!==void 0&&hn.setValue(E,Ne.setFromMatrixPosition(A.matrixWorld)),Y.logarithmicDepthBuffer&&Kt.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Kt.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Rs=!0,ja=!0)}if(Z.isSkinnedMesh){Kt.setOptional(E,Z,"bindMatrix"),Kt.setOptional(E,Z,"bindMatrixInverse");const hn=Z.skeleton;hn&&(Y.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Kt.setValue(E,"boneTexture",hn.boneTexture,te),Kt.setValue(E,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $a=K.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0&&Y.isWebGL2===!0)&&P.update(Z,K,tr),(Rs||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,Kt.setValue(E,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(nr.envMap.value=Oe,nr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Rs&&(Kt.setValue(E,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&eg(nr,ja),be&&j.fog===!0&&ne.refreshFogUniforms(nr,be),ne.refreshMaterialUniforms(nr,j,H,W,De),ia.upload(E,Hu(je),nr,te)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ia.upload(E,Hu(je),nr,te),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Kt.setValue(E,"center",Z.center),Kt.setValue(E,"modelViewMatrix",Z.modelViewMatrix),Kt.setValue(E,"normalMatrix",Z.normalMatrix),Kt.setValue(E,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hn=j.uniformsGroups;for(let Za=0,ng=hn.length;Za<ng;Za++)if(Y.isWebGL2){const Wu=hn[Za];Re.update(Wu,tr),Re.bind(Wu,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function eg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function tg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,K){se.get(A.texture).__webglTexture=z,se.get(A.depthTexture).__webglTexture=K;const j=se.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const K=se.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){w=A,T=z,C=K;let j=!0,Z=null,be=!1,Pe=!1;if(A){const Oe=se.get(A);Oe.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(E.FRAMEBUFFER,null),j=!1):Oe.__webglFramebuffer===void 0?te.setupRenderTarget(A):Oe.__hasExternalTextures&&te.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const Be=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?Z=Be[z][K]:Z=Be[z],be=!0):Y.isWebGL2&&A.samples>0&&te.useMultisampledRTT(A)===!1?Z=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?Z=Be[K]:Z=Be,R.copy(A.viewport),k.copy(A.scissor),V=A.scissorTest}else R.copy(ae).multiplyScalar(H).floor(),k.copy(B).multiplyScalar(H).floor(),V=X;if(q.bindFramebuffer(E.FRAMEBUFFER,Z)&&Y.drawBuffers&&j&&q.drawBuffers(A,Z),q.viewport(R),q.scissor(k),q.setScissorTest(V),be){const Oe=se.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+z,Oe.__webglTexture,K)}else if(Pe){const Oe=se.get(A.texture),Xe=z||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Oe.__webglTexture,K||0,Xe)}L=-1},this.readRenderTargetPixels=function(A,z,K,j,Z,be,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){q.bindFramebuffer(E.FRAMEBUFFER,Ie);try{const Oe=A.texture,Xe=Oe.format,Be=Oe.type;if(Xe!==Bn&&Ae.convert(Xe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Be===ro&&(F.has("EXT_color_buffer_half_float")||Y.isWebGL2&&F.has("EXT_color_buffer_float"));if(Be!==Vi&&Ae.convert(Be)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Fi&&(Y.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-j&&K>=0&&K<=A.height-Z&&E.readPixels(z,K,j,Z,Ae.convert(Xe),Ae.convert(Be),be)}finally{const Oe=w!==null?se.get(w).__webglFramebuffer:null;q.bindFramebuffer(E.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(A,z,K=0){const j=Math.pow(2,-K),Z=Math.floor(z.image.width*j),be=Math.floor(z.image.height*j);te.setTexture2D(z,0),E.copyTexSubImage2D(E.TEXTURE_2D,K,0,0,A.x,A.y,Z,be),q.unbindTexture()},this.copyTextureToTexture=function(A,z,K,j=0){const Z=z.image.width,be=z.image.height,Pe=Ae.convert(K.format),Ie=Ae.convert(K.type);te.setTexture2D(K,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,j,A.x,A.y,Z,be,Pe,Ie,z.image.data):z.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,j,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Pe,z.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,j,A.x,A.y,Pe,Ie,z.image),j===0&&K.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(A,z,K,j,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,Pe=A.max.y-A.min.y+1,Ie=A.max.z-A.min.z+1,Oe=Ae.convert(j.format),Xe=Ae.convert(j.type);let Be;if(j.isData3DTexture)te.setTexture3D(j,0),Be=E.TEXTURE_3D;else if(j.isDataArrayTexture)te.setTexture2DArray(j,0),Be=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,j.unpackAlignment);const ke=E.getParameter(E.UNPACK_ROW_LENGTH),mt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),un=E.getParameter(E.UNPACK_SKIP_PIXELS),Ct=E.getParameter(E.UNPACK_SKIP_ROWS),si=E.getParameter(E.UNPACK_SKIP_IMAGES),dt=K.isCompressedTexture?K.mipmaps[0]:K.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,dt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,dt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,A.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,A.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?E.texSubImage3D(Be,Z,z.x,z.y,z.z,be,Pe,Ie,Oe,Xe,dt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(Be,Z,z.x,z.y,z.z,be,Pe,Ie,Oe,dt.data)):E.texSubImage3D(Be,Z,z.x,z.y,z.z,be,Pe,Ie,Oe,Xe,dt),E.pixelStorei(E.UNPACK_ROW_LENGTH,ke),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,un),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ct),E.pixelStorei(E.UNPACK_SKIP_IMAGES,si),Z===0&&j.generateMipmaps&&E.generateMipmap(Be),q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){T=0,C=0,w=null,q.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ua?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?xr:Ed}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?It:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cM extends Gd{}cM.prototype.isWebGL1Renderer=!0;class jc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let uM=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ye:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,r=[],s=[],o=[],a=new O,l=new _t;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Pt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Pt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $c extends ri{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ye,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hM extends $c{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const $o=new O,Cl=new Zc,Rl=new Zc,Pl=new Zc;class fM extends ri{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:($o.subVectors(r[0],r[1]).add(r[0]),c=$o);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:($o.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=$o),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Cl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),Rl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),Pl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Rl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Pl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Cl.calc(l),Rl.calc(l),Pl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ff(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function dM(i,e){const t=1-i;return t*t*e}function pM(i,e){return 2*(1-i)*i*e}function mM(i,e){return i*i*e}function Ws(i,e,t,n){return dM(i,e)+pM(i,t)+mM(i,n)}function gM(i,e){const t=1-i;return t*t*t*e}function _M(i,e){const t=1-i;return 3*t*t*i*e}function vM(i,e){return 3*(1-i)*i*i*e}function xM(i,e){return i*i*i*e}function Xs(i,e,t,n,r){return gM(i,e)+_M(i,t)+vM(i,n)+xM(i,r)}class Vd extends ri{constructor(e=new ye,t=new ye,n=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xs(e,r.x,s.x,o.x,a.x),Xs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class SM extends ri{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xs(e,r.x,s.x,o.x,a.x),Xs(e,r.y,s.y,o.y,a.y),Xs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wd extends ri{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MM extends ri{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends ri{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ws(e,r.x,s.x,o.x),Ws(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yM extends ri{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ws(e,r.x,s.x,o.x),Ws(e,r.y,s.y,o.y),Ws(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(ff(a,l.x,c.x,u.x,h.x),ff(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var df=Object.freeze({__proto__:null,ArcCurve:hM,CatmullRomCurve3:fM,CubicBezierCurve:Vd,CubicBezierCurve3:SM,EllipseCurve:$c,LineCurve:Wd,LineCurve3:MM,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:yM,SplineCurve:qd});class EM extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new df[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new df[r.type]().fromJSON(r))}return this}}class TM extends EM{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wd(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Xd(this.currentPoint.clone(),new ye(e,t),new ye(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Vd(this.currentPoint.clone(),new ye(e,t),new ye(n,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new $c(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jc extends Hn{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Pt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new O,f=new ye,d=new O,_=new O,g=new O;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(_)}for(let M=0;M<=t;M++){const v=n+M*u*r,x=Math.sin(v),T=Math.cos(v);for(let C=0;C<=e.length-1;C++){h.x=e[C].x*x,h.y=e[C].y,h.z=e[C].x*T,o.push(h.x,h.y,h.z),f.x=M/t,f.y=C/(e.length-1),a.push(f.x,f.y);const w=l[3*C+0]*x,L=l[3*C+1],S=l[3*C+0]*T;c.push(w,L,S)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){const x=v+M*e.length,T=x,C=x+e.length,w=x+e.length+1,L=x+1;s.push(T,C,L),s.push(w,L,C)}this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.points,e.segments,e.phiStart,e.phiLength)}}class yo extends Jc{constructor(e=1,t=1,n=4,r=8){const s=new TM;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new yo(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ln extends Hn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function M(){const x=new O,T=new O;let C=0;const w=(t-e)/n;for(let L=0;L<=s;L++){const S=[],R=L/s,k=R*(t-e)+e;for(let V=0;V<=r;V++){const $=V/r,D=$*l+a,G=Math.sin(D),W=Math.cos(D);T.x=k*G,T.y=-R*n+m,T.z=k*W,h.push(T.x,T.y,T.z),x.set(G,w,W).normalize(),f.push(x.x,x.y,x.z),d.push($,1-R),S.push(_++)}g.push(S)}for(let L=0;L<r;L++)for(let S=0;S<s;S++){const R=g[S][L],k=g[S+1][L],V=g[S+1][L+1],$=g[S][L+1];u.push(R,k,$),u.push(k,V,$),C+=6}c.addGroup(p,C,0),p+=C}function v(x){const T=_,C=new ye,w=new O;let L=0;const S=x===!0?e:t,R=x===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),_++;const k=_;for(let V=0;V<=r;V++){const D=V/r*l+a,G=Math.cos(D),W=Math.sin(D);w.x=S*W,w.y=m*R,w.z=S*G,h.push(w.x,w.y,w.z),f.push(0,R,0),C.x=G*.5+.5,C.y=W*.5*R+.5,d.push(C.x,C.y),_++}for(let V=0;V<r;V++){const $=T+V,D=k+V;x===!0?u.push(D,D+1,$):u.push(D+1,D,$),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends Hn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const C=T/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(C+x,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const v=u[p][M+1],x=u[p][M],T=u[p+1][M],C=u[p+1][M+1];(p!==0||o>0)&&d.push(v,x,C),(p!==n-1||l<Math.PI)&&d.push(x,T,C)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ft extends Hn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new O,h=new O,f=new O;for(let d=0;d<=n;d++)for(let _=0;_<=r;_++){const g=_/r*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=r;_++){const g=(r+1)*d+_-1,m=(r+1)*(d-1)+_-1,p=(r+1)*(d-1)+_,M=(r+1)*d+_;o.push(g,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ze extends Mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yd extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ll=new _t,pf=new O,mf=new O;class bM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends bM{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends Yd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new wM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AM extends Yd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class CM{constructor(e,t,n=0,r=1/0){this.ray=new Wc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fc(e,this,n,t),n.sort(gf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fc(e[r],this,n,t);return n.sort(gf),n}}function gf(i,e){return i.distance-e.distance}function fc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)fc(r[s],e,t,!0)}}class _f{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);const vf={type:"change"},Ul={type:"start"},xf={type:"end"},Zo=new Wc,Sf=new Di,RM=Math.cos(70*s_.DEG2RAD);class PM extends Dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",y),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vf),n.update(),s=r.NONE},this.update=(function(){const P=new O,de=new Cr().setFromUnitVectors(e.up,new O(0,1,0)),ue=de.clone().invert(),Ae=new O,Te=new Cr,Re=new O,Ce=2*Math.PI;return function(Ye=null){const I=n.object.position;P.copy(I).sub(n.target),P.applyQuaternion(de),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&k(S(Ye)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ge=n.minAzimuthAngle,fe=n.maxAzimuthAngle;isFinite(ge)&&isFinite(fe)&&(ge<-Math.PI?ge+=Ce:ge>Math.PI&&(ge-=Ce),fe<-Math.PI?fe+=Ce:fe>Math.PI&&(fe-=Ce),ge<=fe?a.theta=Math.max(ge,Math.min(fe,a.theta)):a.theta=a.theta>(ge+fe)/2?Math.max(ge,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=ce(a.radius):a.radius=ce(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(ue),I.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ee=!1;if(n.zoomToCursor&&C){let pe=null;if(n.object.isPerspectiveCamera){const Le=P.length();pe=ce(Le*c);const Ke=Le-pe;n.object.position.addScaledVector(x,Ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Le=new O(T.x,T.y,0);Le.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ee=!0;const Ke=new O(T.x,T.y,0);Ke.unproject(n.object),n.object.position.sub(Ke).add(Le),n.object.updateMatrixWorld(),pe=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;pe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(pe).add(n.object.position):(Zo.origin.copy(n.object.position),Zo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Zo.direction))<RM?e.lookAt(n.target):(Sf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Zo.intersectPlane(Sf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ee=!0);return c=1,C=!1,ee||Ae.distanceToSquared(n.object.position)>o||8*(1-Te.dot(n.object.quaternion))>o||Re.distanceToSquared(n.target)>0?(n.dispatchEvent(vf),Ae.copy(n.object.position),Te.copy(n.object.quaternion),Re.copy(n.target),ee=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",oe),n.domElement.removeEventListener("wheel",b),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",oe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",y),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new _f,l=new _f;let c=1;const u=new O,h=new ye,f=new ye,d=new ye,_=new ye,g=new ye,m=new ye,p=new ye,M=new ye,v=new ye,x=new O,T=new ye;let C=!1;const w=[],L={};function S(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function k(P){l.theta-=P}function V(P){l.phi-=P}const $=(function(){const P=new O;return function(ue,Ae){P.setFromMatrixColumn(Ae,0),P.multiplyScalar(-ue),u.add(P)}})(),D=(function(){const P=new O;return function(ue,Ae){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ae,1):(P.setFromMatrixColumn(Ae,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ue),u.add(P)}})(),G=(function(){const P=new O;return function(ue,Ae){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;P.copy(Re).sub(n.target);let Ce=P.length();Ce*=Math.tan(n.object.fov/2*Math.PI/180),$(2*ue*Ce/Te.clientHeight,n.object.matrix),D(2*Ae*Ce/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(ue*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),D(Ae*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P){if(!n.zoomToCursor)return;C=!0;const de=n.domElement.getBoundingClientRect(),ue=P.clientX-de.left,Ae=P.clientY-de.top,Te=de.width,Re=de.height;T.x=ue/Te*2-1,T.y=-(Ae/Re)*2+1,x.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function ce(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ae(P){h.set(P.clientX,P.clientY)}function B(P){J(P),p.set(P.clientX,P.clientY)}function X(P){_.set(P.clientX,P.clientY)}function xe(P){f.set(P.clientX,P.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const de=n.domElement;k(2*Math.PI*d.x/de.clientHeight),V(2*Math.PI*d.y/de.clientHeight),h.copy(f),n.update()}function _e(P){M.set(P.clientX,P.clientY),v.subVectors(M,p),v.y>0?W(R()):v.y<0&&H(R()),p.copy(M),n.update()}function Se(P){g.set(P.clientX,P.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),G(m.x,m.y),_.copy(g),n.update()}function De(P){J(P),P.deltaY<0?H(R()):P.deltaY>0&&W(R()),n.update()}function Fe(P){let de=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),de=!0;break}de&&(P.preventDefault(),n.update())}function Ue(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),de=.5*(w[0].pageY+w[1].pageY);h.set(P,de)}}function Ne(){if(w.length===1)_.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),de=.5*(w[0].pageY+w[1].pageY);_.set(P,de)}}function Qe(){const P=w[0].pageX-w[1].pageX,de=w[0].pageY-w[1].pageY,ue=Math.sqrt(P*P+de*de);p.set(0,ue)}function ze(){n.enableZoom&&Qe(),n.enablePan&&Ne()}function E(){n.enableZoom&&Qe(),n.enableRotate&&Ue()}function U(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const ue=me(P),Ae=.5*(P.pageX+ue.x),Te=.5*(P.pageY+ue.y);f.set(Ae,Te)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const de=n.domElement;k(2*Math.PI*d.x/de.clientHeight),V(2*Math.PI*d.y/de.clientHeight),h.copy(f)}function F(P){if(w.length===1)g.set(P.pageX,P.pageY);else{const de=me(P),ue=.5*(P.pageX+de.x),Ae=.5*(P.pageY+de.y);g.set(ue,Ae)}m.subVectors(g,_).multiplyScalar(n.panSpeed),G(m.x,m.y),_.copy(g)}function Y(P){const de=me(P),ue=P.pageX-de.x,Ae=P.pageY-de.y,Te=Math.sqrt(ue*ue+Ae*Ae);M.set(0,Te),v.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),W(v.y),p.copy(M)}function q(P){n.enableZoom&&Y(P),n.enablePan&&F(P)}function Q(P){n.enableZoom&&Y(P),n.enableRotate&&U(P)}function se(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",oe)),re(P),P.pointerType==="touch"?N(P):le(P))}function te(P){n.enabled!==!1&&(P.pointerType==="touch"?ne(P):Ee(P))}function oe(P){Me(P),w.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",oe)),n.dispatchEvent(xf),s=r.NONE}function le(P){let de;switch(P.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Nr.DOLLY:if(n.enableZoom===!1)return;B(P),s=r.DOLLY;break;case Nr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),s=r.PAN}else{if(n.enableRotate===!1)return;ae(P),s=r.ROTATE}break;case Nr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ae(P),s=r.ROTATE}else{if(n.enablePan===!1)return;X(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ul)}function Ee(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;xe(P);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(P);break;case r.PAN:if(n.enablePan===!1)return;Se(P);break}}function b(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Ul),De(P),n.dispatchEvent(xf))}function y(P){n.enabled===!1||n.enablePan===!1||Fe(P)}function N(P){switch(he(P),w.length){case 1:switch(n.touches.ONE){case Or.ROTATE:if(n.enableRotate===!1)return;Ue(),s=r.TOUCH_ROTATE;break;case Or.PAN:if(n.enablePan===!1)return;Ne(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(),s=r.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ul)}function ne(P){switch(he(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;U(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;F(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(P),n.update();break;default:s=r.NONE}}function ie(P){n.enabled!==!1&&P.preventDefault()}function re(P){w.push(P)}function Me(P){delete L[P.pointerId];for(let de=0;de<w.length;de++)if(w[de].pointerId==P.pointerId){w.splice(de,1);return}}function he(P){let de=L[P.pointerId];de===void 0&&(de=new ye,L[P.pointerId]=de),de.set(P.pageX,P.pageY)}function me(P){const de=P.pointerId===w[0].pointerId?w[1]:w[0];return L[de.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",oe),n.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}class LM{#t;#i;#e;controls;raycaster;constructor(){this.#t=new uM,this.#t.fog=new jc("white",0,100),this.#i=new wn(50,window.innerWidth/window.innerHeight,.1,1e3),this.#i.position.y=12,this.#i.position.z=12,this.#i.position.x=-12,this.#e=new Gd({antialias:!0,alpha:!0}),this.controls=new PM(this.#i,this.#e.domElement),this.controls.enableZoom=!1,this.setup(),this.animate()}setup(){this.initLights(),this.setupRenderer(),document.body.appendChild(this.#e.domElement)}initLights(){const e=new AM(4210752);this.#t.add(e);const t=new Dl("white",2);t.castShadow=!0,t.position.set(15,15,15),this.#t.add(t);const n=new Dl("white",1.5);n.castShadow=!0,n.position.set(11,12,10),this.#t.add(n);const r=new Dl("white",1.3);r.castShadow=!0,r.position.set(-11,12,10),this.#t.add(r)}setupRenderer(){this.#e.shadowMap.enabled=!0,this.#e.shadowMap.type=sg,this.#e.setSize(window.innerWidth,window.innerHeight),this.#e.shadowMap.enabled=!0,this.#e.render(this.#t,this.#i)}addObject(e){this.#t.add(e),this.update()}update(){this.#e.render(this.#t,this.#i),this.controls.update()}animate(){requestAnimationFrame(this.animate.bind(this)),this.update()}getRenderer(){return this.#e}getCamera(){return this.#i}getScene(){return this.#t}remove(e){this.#t.remove(e)}}const ra=new LM,DM=()=>{const i=[];let e=0;for(let t of jd){i.push([]);for(let n of Kd)i[e].push(`${n}${t}`);e++}return i},Kd=["a","b","c","d","e","f","g","h"],jd=["1","2","3","4","5","6","7","8"],yt=DM(),dc={Pawn:["a7","b7","c7","d7","e7","f7","g7","h7"],Rook:["a8","h8"],Knight:["b8","g8"],Bishop:["c8","f8"],Queen:["d8"],King:["e8"]},pc={Pawn:["a2","b2","c2","d2","e2","f2","g2","h2"],Rook:["a1","h1"],Knight:["b1","g1"],Bishop:["c1","f1"],Queen:["d1"],King:["e1"]},UM={c1:{rookDefualtCellName:"a1",rookDestinationCellName:"d1"},g1:{rookDefualtCellName:"h1",rookDestinationCellName:"f1"},c8:{rookDefualtCellName:"a8",rookDestinationCellName:"d8"},g8:{rookDefualtCellName:"h8",rookDestinationCellName:"f8"}};[...pc.Rook,...dc.Rook];const eu=13536614,ls={black:2301728,white:16446433,capture:16209458,canMove:3952},ji={black:2829097,white:16446433,selected:247},IM=(i,e)=>{const t=new zn,n=ji[i],r=new Ft(1,.5,17,30),s=new Ze({color:n,wireframe:!1}),o=new He(r,s);o.rotateX(Math.PI/2),o.receiveShadow=!0,o.castShadow=!0,t.add(o);const a=new Ln(.3,1,2,32),l=new Ze({color:n,wireframe:!1}),c=new He(a,l);c.position.y=1.5,c.receiveShadow=!0,c.castShadow=!0,t.add(c);const u=new yo(.5,.25,4,8),h=new Ze({color:n,wireframe:!1}),f=new He(u,h);return f.position.y=3,f.receiveShadow=!0,f.castShadow=!0,t.add(f),t.position.y=.6,t.scale.set(.25,.25,.25),t.castShadow=!0,t.receiveShadow=!0,t.name=e,t};function di(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function $d(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ss={duration:.5,overwrite:!1,delay:0},tu,Vt,ct,Cn=1e8,ot=1/Cn,mc=Math.PI*2,NM=mc/4,OM=0,Zd=Math.sqrt,FM=Math.cos,BM=Math.sin,Ut=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},Mi=function(e){return typeof e=="number"},nu=function(e){return typeof e>"u"},ni=function(e){return typeof e=="object"},sn=function(e){return e!==!1},iu=function(){return typeof window<"u"},Jo=function(e){return pt(e)||Ut(e)},Jd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,gc=/(?:-?\.?\d|\.)+/gi,Qd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Il=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ep=/[+-]=-?[.\d]+/,tp=/[^,'"\[\]\s]+/gi,zM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,qn,_c,ru,Mn={},va={},np,ip=function(e){return(va=Pr(e,Mn))&&cn},su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},so=function(e,t){return!t&&console.warn(e)},rp=function(e,t){return e&&(Mn[e]=t)&&va&&(va[e]=t)||Mn},oo=function(){return 0},kM={suppressEvents:!0,isStart:!0,kill:!1},sa={suppressEvents:!0,kill:!1},HM={suppressEvents:!0},ou={},Wi=[],vc={},sp,mn={},Nl={},Mf=30,oa=[],au="",lu=function(e){var t=e[0],n,r;if(ni(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=oa.length;r--&&!oa[r].targetTest(t););n=oa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Rp(e[r],n)))||e.splice(r,1);return e},Sr=function(e){return e._gsap||lu(Rn(e))[0]._gsap},op=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():nu(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},cs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},GM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},xa=function(){var e=Wi.length,t=Wi.slice(0),n,r;for(vc={},Wi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ap=function(e,t,n,r){Wi.length&&!Vt&&xa(),e.render(t,n,Vt&&t<0&&(e._initted||e._startAt)),Wi.length&&!Vt&&xa()},lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tp).length<2?t:Ut(e)?e.trim():e},cp=function(e){return e},Dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},VM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Pr=function(e,t){for(var n in t)e[n]=t[n];return e},yf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ni(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Sa=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},qs=function(e){var t=e.parent||ut,n=e.keyframes?VM(Wt(e.keyframes)):Dn;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},WM=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},up=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Oa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},XM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xc=function(e,t,n,r){return e._startAt&&(Vt?e._startAt.revert(sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},qM=function i(e){return!e||e._ts&&i(e.parent)},Ef=function(e){return e._repeat?Ms(e._tTime,e=e.duration()+e._rDelay)*e:0},Ms=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fa=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Ba=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fa(e),n._dirty||Mr(n,e)),e},hp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ma(e.rawTime(),t),(!t._dur||Eo(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),Mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},$n=function(e,t,n,r){return t.parent&&$i(t),t._start=Lt((Mi(n)?n:n||e!==ut?Tn(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),up(e,t,"_first","_last",e._sort?"_start":0),Sc(t)||(e._recent=t),r||hp(e,t),e._ts<0&&Ba(e,e._tTime),e},fp=function(e,t){return(Mn.ScrollTrigger||su("scrollTrigger",t))&&Mn.ScrollTrigger.create(t,e)},dp=function(e,t,n,r,s){if(uu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sp!==gn.frame)return Wi.push(e),e._lazy=[s,r],1},YM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Sc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KM=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&YM(e)&&!(!e._initted&&Sc(e))||(e._ts<0||e._dp._ts<0)&&!Sc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Eo(0,e._tDur,t),u=Ms(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ms(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Vt||r||e._zTime===ot||!t&&e._zTime){if(!e._initted&&dp(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&xc(e,t,n,!0),e._onUpdate&&!n&&_n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$i(e,1),!n&&!Vt&&(_n(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},jM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ys=function(e,t,n,r){var s=e._repeat,o=Lt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Lt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ba(e,e._tTime=e._tDur*a),e.parent&&Fa(e),n||Mr(e.parent,e),e},Tf=function(e){return e instanceof Qt?Mr(e):ys(e,e._dur)},$M={_start:0,endTime:oo,totalDuration:oo},Tn=function i(e,t,n){var r=e.labels,s=e._recent||$M,o=e.duration()>=Cn?s.endTime(!1):e._dur,a,l,c;return Ut(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ys=function(e,t,n){var r=Mi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;o.immediateRender=sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Et(t[0],o,t[s+1])},er=function(e,t){return e||e===0?t(e):t},Eo=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Ut(e)||!(t=zM.exec(e))?"":t[1]},ZM=function(e,t,n){return er(n,function(r){return Eo(e,t,r)})},Mc=[].slice,pp=function(e,t){return e&&ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ni(e[0]))&&!e.nodeType&&e!==qn},JM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ut(r)&&!t||pp(r,1)?(s=n).push.apply(s,Rn(r)):n.push(r)})||n},Rn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):Ut(e)&&!n&&(_c||!Es())?Mc.call((t||ru).querySelectorAll(e),0):Wt(e)?JM(e,n):pp(e)?Mc.call(e,0):e?[e]:[]},yc=function(e){return e=Rn(e)[0]||so("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?so("Invalid scope")||ru.createElement("div"):e)}},mp=function(e){return e.sort(function(){return .5-Math.random()})},gp=function(e){if(pt(e))return e;var t=ni(e)?e:{each:e},n=yr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Ut(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,M,v,x,T,C,w,L,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Cn])[1],!S){for(w=-Cn;w<(w=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*u-.5:r%S,M=S===Cn?0:l?g*h/S-.5:r/S|0,w=0,L=Cn,C=0;C<g;C++)v=C%S-p,x=M-(C/S|0),m[C]=T=c?Math.abs(c==="y"?x:v):Zd(v*v+x*x),T>w&&(w=T),T<L&&(L=T);r==="random"&&mp(m),m.max=w-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ht(t.amount||t.each)||0,n=n&&g<0?wp(n):n}return g=(m[f]-m.min)/m.max||0,Lt(m.b+(n?n(g):g)*m.v)+m.u}},Ec=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Lt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Mi(n)?0:Ht(n))}},_p=function(e,t){var n=Wt(e),r,s;return!n&&ni(e)&&(r=n=e.radius||Cn,e.values?(e=Rn(e.values),(s=!Mi(e[0]))&&(r*=r)):e=Ec(e.increment)),er(t,n?pt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Cn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Mi(o)?u:u+Ht(o)}:Ec(e))},vp=function(e,t,n,r){return er(Wt(e)?!t:n===!0?!!(n=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},QM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ey=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},ty=function(e,t,n){return Sp(e,t,0,1,n)},xp=function(e,t,n){return er(n,function(r){return e[~~t(r)]})},ny=function i(e,t,n){var r=t-e;return Wt(e)?xp(e,i(0,e.length),t):er(n,function(s){return(r+(s-e)%r)%r+e})},iy=function i(e,t,n){var r=t-e,s=r*2;return Wt(e)?xp(e,i(0,e.length-1),t):er(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ao=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?tp:gc),n+=e.substr(t,r-t)+vp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Sp=function(e,t,n,r,s){var o=t-e,a=r-n;return er(s,function(l){return n+((l-e)/o*a||0)})},ry=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ut(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else r||(e=Pr(Wt(e)?[]:{},e));if(!u){for(l in t)cu.call(a,e,l,"get",t[l]);s=function(_){return du(_,a)||(o?e.p:e)}}}return er(n,s)},bf=function(e,t,n){var r=e.labels,s=Cn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_n=function(e,t,n){var r=e.vars,s=r[t],o=ct,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Wi.length&&xa(),a&&(ct=a),u=l?s.apply(c,l):s.call(c),ct=o,u},zs=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&_n(e,"onInterrupt"),e},ss,Mp=[],yp=function(e){if(e)if(e=!e.name&&e.default||e,iu()||e.headless){var t=e.name,n=pt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oo,render:du,add:cu,kill:Sy,modifier:xy,rawVars:0},o={targetTest:0,get:0,getSetter:fu,aliases:{},register:0};if(Es(),e!==r){if(mn[t])return;Dn(r,Dn(Sa(e,s),o)),Pr(r.prototype,Pr(s,Sa(e,o))),mn[r.prop=t]=r,e.targetTest&&(oa.push(r),ou[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rp(t,r),e.register&&e.register(cn,r,an)}else Mp.push(e)},it=255,ks={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Ol=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},Ep=function(e,t,n){var r=e?Mi(e)?[e>>16,e>>8&it,e&it]:0:ks.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ks[e])r=ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(gc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ol(l+1/3,s,o),r[1]=Ol(l,s,o),r[2]=Ol(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Qd),n&&r.length<4&&(r[3]=1),r}else r=e.match(gc)||ks.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Tp=function(e){var t=[],n=[],r=-1;return e.split(Xi).forEach(function(s){var o=s.match(rs)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},wf=function(e,t,n){var r="",s=(e+r).match(Xi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Ep(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Tp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Xi,"1").split(rs),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Xi),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Xi=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ks)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),sy=/hsl[a]?\(/,bp=function(e){var t=e.join(" "),n;if(Xi.lastIndex=0,Xi.test(t))return n=sy.test(t),e[1]=wf(e[1],n),e[0]=wf(e[0],n,Tp(e[1])),!0},lo,gn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=i()-r,M=m===!0,v,x,T,C;if((p>e||p<0)&&(n+=p-t),r+=p,T=r-n,v=T-o,(v>0||M)&&(C=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=v+(v>=s?4:s-v),x=1),M||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](T,f,C,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){np&&(!_c&&iu()&&(qn=_c=window,ru=qn.document||{},Mn.gsap=cn,(qn.gsapVersions||(qn.gsapVersions=[])).push(cn.version),ip(va||qn.GreenSockGlobals||!qn.gsap&&qn||{}),Mp.forEach(yp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},lo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),lo=0,c=oo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var v=p?function(x,T,C,w){m(x,T,C,w),h.remove(v)}:m;return h.remove(m),a[M?"unshift":"push"](v),Es(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Es=function(){return!lo&&gn.wake()},$e={},oy=/^[\d.\-M][\d.\-,\s]/,ay=/["']/g,ly=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(ay,"").trim():+c,r=l.substr(a+1).trim();return t},cy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},uy=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ly(t[1])]:cy(e).split(",").map(lp)):$e._CE&&oy.test(e)?$e._CE("",e):n},wp=function(e){return function(t){return 1-e(1-t)}},Ap=function i(e,t){for(var n=e._first,r;n;)n instanceof Qt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},yr=function(e,t){return e&&(pt(e)?e:$e[e]||uy(e))||t},Ur=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return on(e,function(a){$e[a]=Mn[a]=s,$e[o=a.toLowerCase()]=n;for(var l in s)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=s[l]}),s},Cp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fl=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*BM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Cp(a);return s=mc/s,l.config=function(c,u){return i(e,c,u)},l},Bl=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Cp(n);return r.config=function(s){return i(e,s)},r};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ur(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Ur("Elastic",Fl("in"),Fl("out"),Fl());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ur("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ur("Circ",function(i){return-(Zd(1-i*i)-1)});Ur("Sine",function(i){return i===1?1:-FM(i*NM)+1});Ur("Back",Bl("in"),Bl("out"),Bl());$e.SteppedEase=$e.steps=Mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-ot;return function(a){return((r*Eo(0,o,a)|0)+s)*n}}};Ss.ease=$e["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return au+=i+","+i+"Params,"});var Rp=function(e,t){this.id=OM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:op,this.set=t?t.getSetter:fu},co=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ys(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),lo||gn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Es(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ba(this,n),!s._dp||s.parent||hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ap(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ef(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ef(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ms(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(Eo(-Math.abs(this._delay),this._tDur,s),r!==!1),Fa(this),XM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$n(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=HM);var r=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Tf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Tf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Tn(this,n),sn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,sn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ot)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=pt(n)?n:cp,a=function(){var c=r.then;r.then=null,pt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){zs(this)},i})();Dn(co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var Qt=(function(i){$d(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=sn(n.sortChildren),ut&&$n(n.parent||ut,di(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fp(di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ys(0,arguments,this),this},t.from=function(r,s,o){return Ys(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ys(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,Tn(this,o),1),this},t.call=function(r,s,o){return $n(this,Et.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Et(r,o,Tn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,qs(o).immediateRender=sn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,qs(a).immediateRender=sn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Lt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,m,p,M,v,x,T,C,w;if(this!==ut&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Lt(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),T=Ms(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),C&&g&1&&(f=c-f,w=1),g!==T&&!this._lock){var L=C&&T&1,S=L===(C&&g&1);if(g<T&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Lt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Ap(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=jM(this,Lt(a),Lt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!g&&(_n(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-ot);break}}d=_}else{d=this._last;for(var R=r<0?r:f;d;){if(_=d._prev,(d._act||R<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,o||Vt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=R?-ot:ot);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-ot)._zTime=f>=a?1:-1,this._ts))return this._start=x,Fa(this),this.render(r,s,o);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(_n(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Mi(s)||(s=Tn(this,s,r)),!(r instanceof co)){if(Wt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ut(r))return this.addLabel(r,s);if(pt(r))r=Et.delayedCall(0,r);else return this}return this!==r?$n(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Cn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Et?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ut(r)?this.removeLabel(r):pt(r)?this.killTweensOf(r):(Oa(this,r),r===this._recent&&(this._recent=this._last),Mr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Tn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Et.delayedCall(0,s||oo,o);return a.data="isPause",this._hasPause=1,$n(this,a,Tn(this,r))},t.removePause=function(r){var s=this._first;for(r=Tn(this,r);s;)s._start===r&&s.data==="isPause"&&$i(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Bi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Rn(r),l=this._first,c=Mi(s),u;l;)l instanceof Et?GM(l._targets,a)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Tn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Et.to(o,Dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ot,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&ys(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Dn({startAt:{time:Tn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),bf(this,Tn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),bf(this,Tn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Mr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Cn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ys(o,o===ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ut._ts&&(ap(ut,Ma(r,ut)),sp=gn.frame),gn.frame>=Mf){Mf+=Sn.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&Sn.autoSleep&&gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gn.sleep()}}},e})(co);Dn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var hy=function(e,t,n,r,s,o,a){var l=new an(this._pt,e,t,0,1,Np,null,s),c=0,u=0,h,f,d,_,g,m,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=ao(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),f=n.match(Il)||[];h=Il.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?cs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Il.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(ep.test(r)||p)&&(l.e=0),this._pt=l,l},cu=function(e,t,n,r,s,o,a,l,c,u){pt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:pt(h)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=pt(h)?c?gy:Up:hu,_;if(Ut(r)&&(~r.indexOf("random(")&&(r=ao(r)),r.charAt(1)==="="&&(_=cs(f,r)+(Ht(f)||0),(_||_===0)&&(r=_))),!u||f!==r||Tc)return!isNaN(f*r)&&r!==""?(_=new an(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?vy:Ip,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&su(t,r),hy.call(this,e,t,f,r,d,l||Sn.stringFilter,c))},fy=function(e,t,n,r,s){if(pt(e)&&(e=Ks(e,s,t,n,r)),!ni(e)||e.style&&e.nodeType||Wt(e)||Jd(e))return Ut(e)?Ks(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ks(e[a],s,t,n,r);return o},Pp=function(e,t,n,r,s,o){var a,l,c,u;if(mn[e]&&(a=new mn[e]).init(s,a.rawVars?t[e]:fy(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new an(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ss))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Bi,Tc,uu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!tu,x=e.timeline,T,C,w,L,S,R,k,V,$,D,G,W,H;if(x&&(!f||!s)&&(s="none"),e._ease=yr(s,Ss.ease),e._yEase=h?wp(yr(h===!0?s:h,Ss.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!r.runBackwards,!x||f&&!r.stagger){if(V=m[0]?Sr(m[0]).harness:0,W=V&&r[V.prop],T=Sa(r,ou),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?sa:kM),g._lazy=0),o){if($i(e._startAt=Et.set(m,Dn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&sn(l),startAt:null,delay:0,onUpdate:c&&function(){return _n(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!d)&&e._startAt.revert(sa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),w=Dn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&sn(l),immediateRender:a,stagger:0,parent:p},T),W&&(w[V.prop]=W),$i(e._startAt=Et.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(sa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&sn(l)||l&&!_,C=0;C<m.length;C++){if(S=m[C],k=S._gsap||lu(m)[C]._gsap,e._ptLookup[C]=D={},vc[k.id]&&Wi.length&&xa(),G=M===m?C:M.indexOf(S),V&&($=new V).init(S,W||T,e,G,M)!==!1&&(e._pt=L=new an(e._pt,S,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(J){D[J]=L}),$.priority&&(R=1)),!V||W)for(w in T)mn[w]&&($=Pp(w,T,e,G,S,M))?$.priority&&(R=1):D[w]=L=cu.call(e,S,w,"get",T[w],G,M,0,r.stringFilter);e._op&&e._op[C]&&e.kill(S,e._op[C]),v&&e._pt&&(Bi=e,ut.killTweensOf(S,D,e.globalTime(t)),H=!e.parent,Bi=0),e._pt&&l&&(vc[k.id]=1)}R&&Op(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&x.render(Cn,!0,!0)},dy=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Tc=1,e.vars[t]="+=0",uu(e,a),Tc=0,l?so(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=gt(n)+Ht(h.e)),h.b&&(h.b=u.s+Ht(h.b))},py=function(e,t){var n=e[0]?Sr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Pr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},my=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Wt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ks=function(e,t,n,r,s){return pt(e)?e.call(t,n,r,s):Ut(e)&&~e.indexOf("random(")?ao(e):e},Lp=au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dp={};on(Lp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Dp[i]=1});var Et=(function(i){$d(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:qs(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||ut,v=(Wt(n)||Jd(n)?Mi(n[0]):"length"in r)?[n]:Rn(n),x,T,C,w,L,S,R,k;if(a._targets=v.length?lu(v):so("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Jo(c)||Jo(u)){if(r=a.vars,x=a.timeline=new Qt({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),x.kill(),x.parent=x._dp=di(a),x._start=0,f||Jo(c)||Jo(u)){if(w=v.length,R=f&&gp(f),ni(f))for(L in f)~Lp.indexOf(L)&&(k||(k={}),k[L]=f[L]);for(T=0;T<w;T++)C=Sa(r,Dp),C.stagger=0,p&&(C.yoyoEase=p),k&&Pr(C,k),S=v[T],C.duration=+Ks(c,di(a),T,S,v),C.delay=(+Ks(u,di(a),T,S,v)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),x.to(S,C,R?R(T,S,v):0),x._ease=$e.none;x.duration()?c=u=0:a.timeline=0}else if(_){qs(Dn(x.vars.defaults,{ease:"none"})),x._ease=yr(_.ease||r.ease||"none");var V=0,$,D,G;if(Wt(_))_.forEach(function(W){return x.to(v,W,">")}),x.duration();else{C={};for(L in _)L==="ease"||L==="easeEach"||my(L,_[L],C,_.easeEach);for(L in C)for($=C[L].sort(function(W,H){return W.t-H.t}),V=0,T=0;T<$.length;T++)D=$[T],G={ease:D.e,duration:(D.t-(T?$[T-1].t:0))/100*c},G[L]=D.v,x.to(v,G,V),V+=G.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!tu&&(Bi=di(a),ut.killTweensOf(v),Bi=0),$n(M,di(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===Lt(M._time)&&sn(h)&&qM(di(a))&&M.data!=="nested")&&(a._tTime=-ot,a.render(Math.max(0,-u)||0)),m&&fp(di(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ot&&!u?l:r<ot?0:r,f,d,_,g,m,p,M,v,x;if(!c)KM(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Lt(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===Lt(h/g)&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=Ms(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(v&&this._yEase&&Ap(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Lt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(dp(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!_&&(_n(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&xc(this,r,s,o),_n(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&xc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!s&&!(u&&!a)&&(h||a||p)&&(_n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){lo||gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||uu(this,c),u=this._ease(c/this._dur),dy(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ba(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Bi&&Bi.vars.overwrite!==!0)._first||zs(this),this.parent&&o!==this.timeline.totalDuration()&&ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Rn(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&WM(a,l))return s==="all"&&(this._pt=0),zs(this);for(h=this._op=this._op||[],s!=="all"&&(Ut(s)&&(g={},on(s,function(M){return g[M]=1}),s=g),s=py(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Oa(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&zs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ys(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ys(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ut.killTweensOf(r,s,o)},e})(co);Dn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(i){Et[i]=function(){var e=new Qt,t=Mc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var hu=function(e,t,n){return e[t]=n},Up=function(e,t,n){return e[t](n)},gy=function(e,t,n,r){return e[t](r.fp,n)},_y=function(e,t,n){return e.setAttribute(t,n)},fu=function(e,t){return pt(e[t])?Up:nu(e[t])&&e.setAttribute?_y:hu},Ip=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},vy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Np=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},du=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},xy=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Sy=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Oa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},My=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Op=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},an=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Ip,this.d=l||this,this.set=c||hu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=My,this.m=n,this.mt=s,this.tween=r},i})();on(au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return ou[i]=1});Mn.TweenMax=Mn.TweenLite=Et;Mn.TimelineLite=Mn.TimelineMax=Qt;ut=new Qt({sortChildren:!1,defaults:Ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=bp;var Er=[],aa={},yy=[],Af=0,Ey=0,zl=function(e){return(aa[e]||yy).map(function(t){return t()})},bc=function(){var e=Date.now(),t=[];e-Af>2&&(zl("matchMediaInit"),Er.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=qn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),zl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Af=e,zl("matchMedia"))},Fp=(function(){function i(t,n){this.selector=n&&yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ey++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){pt(n)&&(s=r,r=n,n=pt);var o=this,a=function(){var c=ct,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=yc(s)),ct=o,h=r.apply(o,arguments),pt(h)&&o._r.push(h),ct=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===pt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=ct;ct=null,n(this),ct=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Er.length;o--;)Er[o].id===this.id&&Er.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Ty=(function(){function i(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ni(n)||(n={matches:n});var o=new Fp(0,s||this.scope),a=o.conditions={},l,c,u;ct&&!o.selector&&(o.selector=ct.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=qn.matchMedia(n[c]),l&&(Er.indexOf(o)<0&&Er.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bc):l.addEventListener("change",bc)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return yp(r)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ut(e)&&(e=Rn(e)[0]);var s=Sr(e||{}).get,o=n?cp:lp;return n==="native"&&(n=""),e&&(t?o((mn[t]&&mn[t].get||s)(e,t,n,r)):function(a,l,c){return o((mn[a]&&mn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var r=e.map(function(u){return cn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=mn[t],a=Sr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ss._pt=0,h.init(e,n?u+n:u,ss,0,[e]),h.render(1,h),ss._pt&&du(1,ss)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=cn.to(e,Pr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yr(e.ease,Ss.ease)),yf(Ss,e||{})},config:function(e){return yf(Sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mn[a]&&!Mn[a]&&so(t+" effect requires "+a+" plugin.")}),Nl[t]=function(a,l,c){return n(Rn(a),Dn(l||{},s),c)},o&&(Qt.prototype[t]=function(a,l,c){return this.add(Nl[t](a,ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=yr(t)},parseEase:function(e,t){return arguments.length?yr(e,t):$e},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),r,s;for(n.smoothChildTiming=sn(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,r=ut._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&$n(n,r,r._start-r._delay),r=s;return $n(ut,n,0),n},context:function(e,t){return e?new Fp(e,t):ct},matchMedia:function(e){return new Ty(e)},matchMediaRefresh:function(){return Er.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||bc()},addEventListener:function(e,t){var n=aa[e]||(aa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=aa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ny,wrapYoyo:iy,distribute:gp,random:vp,snap:_p,normalize:ty,getUnit:Ht,clamp:ZM,splitColor:Ep,toArray:Rn,selector:yc,mapRange:Sp,pipe:QM,unitize:ey,interpolate:ry,shuffle:mp},install:ip,effects:Nl,ticker:gn,updateRoot:Qt.updateRoot,plugins:mn,globalTimeline:ut,core:{PropTween:an,globals:rp,Tween:Et,Timeline:Qt,Animation:co,getCache:Sr,_removeLinkedListItem:Oa,reverting:function(){return Vt},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return tu=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ya[i]=Et[i]});gn.add(Qt.updateRoot);ss=ya.to({},{duration:0});var by=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wy=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=by(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},kl=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ut(s)&&(l={},on(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}wy(a,s)}}}},cn=ya.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kl("roundProps",Ec),kl("modifiers"),kl("snap",_p))||ya;Et.version=Qt.version=cn.version="3.12.5";np=1;iu()&&Es();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cf,zi,us,pu,gr,Rf,mu,Ay=function(){return typeof window<"u"},yi={},fr=180/Math.PI,hs=Math.PI/180,Qr=Math.atan2,Pf=1e8,gu=/([A-Z])/g,Cy=/(left|right|width|margin|padding|x)/i,Ry=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Py=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ly=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Dy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Bp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Uy=function(e,t,n){return e.style[t]=n},Iy=function(e,t,n){return e.style.setProperty(t,n)},Ny=function(e,t,n){return e._gsap[t]=n},Oy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Fy=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},By=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ht="transform",ln=ht+"Origin",zy=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=mi(r,a)}):this.tfm[e]=o.x?o[e]:mi(r,e),e===ln&&(this.tfm.zOrigin=o.zOrigin);else return Zn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(ht)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ln,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},kp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ky=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mu(),(!s||!s.isStart)&&!n[ht]&&(kp(n),r.zOrigin&&n[ln]&&(n[ln]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Hp=function(e,t){var n={target:e,props:[],revert:ky,save:zy};return e._gsap||cn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},Gp,Ac=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n&&n.style?n:zi.createElement(e)},ei=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ts(t)||t,1)||""},Lf="O,Moz,ms,Ms,Webkit".split(","),Ts=function(e,t,n){var r=t||gr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Lf[o]:"")+e},Cc=function(){Ay()&&window.document&&(Cf=window,zi=Cf.document,us=zi.documentElement,gr=Ac("div")||{style:{}},Ac("div"),ht=Ts(ht),ln=ht+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gp=!!Ts("perspective"),mu=cn.core.reverting,pu=1)},Hl=function i(e){var t=Ac("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(us.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),us.removeChild(t),this.style.cssText=s,o},Df=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vp=function(e){var t;try{t=e.getBBox()}catch{t=Hl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hl||(t=Hl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Df(e,["x","cx","x1"])||0,y:+Df(e,["y","cy","y1"])||0,width:0,height:0}:t},Wp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vp(e))},Lr=function(e,t){if(t){var n=e.style,r;t in yi&&t!==ln&&(t=ht),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(gu,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,r,s,o){var a=new an(e._pt,t,n,0,1,o?zp:Bp);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Uf={deg:1,rad:1,turn:1},Hy={grid:1,flex:1},Zi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=gr.style,l=Cy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,m,p;if(r===o||!s||Uf[r]||Uf[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&Wp(e),(d||o==="%")&&(yi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],gt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===zi||!g.appendChild)&&(g=zi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===gn.time&&!m.uncache)return gt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,_=e[u],M?e.style[t]=M:Lr(e,t)}else(d||o==="%")&&!Hy[ei(g,"display")]&&(a.position=ei(e,"position")),g===e&&(a.position="static"),g.appendChild(gr),_=gr[u],g.removeChild(gr),a.position="absolute";return l&&d&&(m=Sr(g),m.time=gn.time,m.width=g[u]),gt(f?_*s/h:_&&s?h/_*s:0)},mi=function(e,t,n,r){var s;return pu||Cc(),t in Zn&&t!=="transform"&&(t=Zn[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(s=ho(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ta(ei(e,ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ea[t]&&Ea[t](e,t,n)||ei(e,t)||op(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zi(e,t,s,n)+n:s},Gy=function(e,t,n,r){if(!n||n==="none"){var s=Ts(t,e,1),o=s&&ei(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ei(e,"borderTopColor"))}var a=new an(this._pt,e.style,t,0,1,Np),l=0,c=0,u,h,f,d,_,g,m,p,M,v,x,T;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=ei(e,t)||r,g?e.style[t]=g:Lr(e,t)),u=[n,r],bp(u),n=u[0],r=u[1],f=n.match(rs)||[],T=r.match(rs)||[],T.length){for(;h=rs.exec(r);)m=h[0],M=r.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=cs(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=rs.lastIndex-v.length,v||(v=v||Sn.units[t]||x,l===r.length&&(r+=v,a.e+=v)),x!==v&&(d=Zi(e,t,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?zp:Bp;return ep.test(r)&&(a.e=0),this._pt=a,a},If={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Vy=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=If[n]||n,t[1]=If[r]||r,t.join(" ")},Wy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],yi[a]&&(l=1,a=a==="transformOrigin"?ln:ht),Lr(n,a);l&&(Lr(n,ht),o&&(o.svg&&n.removeAttribute("transform"),ho(n,1),o.uncache=1,kp(r)))}},Ea={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new an(e._pt,t,n,0,0,Wy);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},uo=[1,0,0,1,0,0],Xp={},qp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nf=function(e){var t=ei(e,ht);return qp(t)?uo:t.substr(7).match(Qd).map(gt)},_u=function(e,t){var n=e._gsap||Sr(e),r=e.style,s=Nf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?uo:s):(s===uo&&!e.offsetParent&&e!==us&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,us.appendChild(e)),s=Nf(e),l?r.display=l:Lr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):us.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Rc=function(e,t,n,r,s,o){var a=e._gsap,l=s||_u(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],v=t.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,C,w,L,S;n?l!==uo&&(w=d*m-_*g)&&(L=x*(m/w)+T*(-g/w)+(g*M-m*p)/w,S=x*(-_/w)+T*(d/w)-(d*M-_*p)/w,x=L,T=S):(C=Vp(e),x=C.x+(~v[0].indexOf("%")?x/100*C.width:x),T=C.y+(~(v[1]||v[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&a.smooth?(p=x-c,M=T-u,a.xOffset=h+(p*d+M*g)-p,a.yOffset=f+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[ln]="0px 0px",o&&(ki(o,a,"xOrigin",c,x),ki(o,a,"yOrigin",u,T),ki(o,a,"xOffset",h,a.xOffset),ki(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},ho=function(e,t){var n=e._gsap||new Rp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ei(e,ln)||"0",u,h,f,d,_,g,m,p,M,v,x,T,C,w,L,S,R,k,V,$,D,G,W,H,J,ce,ae,B,X,xe,_e,Se;return u=h=f=g=m=p=M=v=x=0,d=_=1,n.svg=!!(e.getCTM&&Wp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),r.scale=r.rotate=r.translate="none"),w=_u(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Rc(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,C=n.yOrigin||0,w!==uo&&(k=w[0],V=w[1],$=w[2],D=w[3],u=G=w[4],h=W=w[5],w.length===6?(d=Math.sqrt(k*k+V*V),_=Math.sqrt(D*D+$*$),g=k||V?Qr(V,k)*fr:0,M=$||D?Qr($,D)*fr+g:0,M&&(_*=Math.abs(Math.cos(M*hs))),n.svg&&(u-=T-(T*k+C*$),h-=C-(T*V+C*D))):(Se=w[6],xe=w[7],ae=w[8],B=w[9],X=w[10],_e=w[11],u=w[12],h=w[13],f=w[14],L=Qr(Se,X),m=L*fr,L&&(S=Math.cos(-L),R=Math.sin(-L),H=G*S+ae*R,J=W*S+B*R,ce=Se*S+X*R,ae=G*-R+ae*S,B=W*-R+B*S,X=Se*-R+X*S,_e=xe*-R+_e*S,G=H,W=J,Se=ce),L=Qr(-$,X),p=L*fr,L&&(S=Math.cos(-L),R=Math.sin(-L),H=k*S-ae*R,J=V*S-B*R,ce=$*S-X*R,_e=D*R+_e*S,k=H,V=J,$=ce),L=Qr(V,k),g=L*fr,L&&(S=Math.cos(L),R=Math.sin(L),H=k*S+V*R,J=G*S+W*R,V=V*S-k*R,W=W*S-G*R,k=H,G=J),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=gt(Math.sqrt(k*k+V*V+$*$)),_=gt(Math.sqrt(W*W+Se*Se)),L=Qr(G,W),M=Math.abs(L)>2e-4?L*fr:0,x=_e?1/(_e<0?-_e:_e):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qp(ei(e,ht)),H&&e.setAttribute("transform",H))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=gt(d),n.scaleY=gt(_),n.rotation=gt(g)+a,n.rotationX=gt(m)+a,n.rotationY=gt(p)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ln]=Ta(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?qy:Gp?Yp:Xy,n.uncache=0,n},Ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var r=Ht(t);return gt(parseFloat(t)+parseFloat(Zi(e,"x",n+"px",r)))+r},Xy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yp(e,t)},ar="0deg",Ns="0px",lr=") ",Yp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,x="",T=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==ar||u!==ar)){var C=parseFloat(u)*hs,w=Math.sin(C),L=Math.cos(C),S;C=parseFloat(h)*hs,S=Math.cos(C),o=Gl(M,o,w*S*-v),a=Gl(M,a,-Math.sin(C)*-v),l=Gl(M,l,L*S*-v+v)}m!==Ns&&(x+="perspective("+m+lr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(T||o!==Ns||a!==Ns||l!==Ns)&&(x+=l!==Ns||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+lr),c!==ar&&(x+="rotate("+c+lr),u!==ar&&(x+="rotateY("+u+lr),h!==ar&&(x+="rotateX("+h+lr),(f!==ar||d!==ar)&&(x+="skew("+f+", "+d+lr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+lr),M.style[ht]=x||"translate(0, 0)"},qy=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(o),x=parseFloat(a),T,C,w,L,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hs,c*=hs,T=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=hs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,L*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,C*=S)),T=gt(T),C=gt(C),w=gt(w),L=gt(L)):(T=h,L=f,C=w=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Zi(d,"x",o,"px"),x=Zi(d,"y",a,"px")),(_||g||m||p)&&(v=gt(v+_-(_*T+g*w)+m),x=gt(x+g-(_*C+g*L)+p)),(r||s)&&(S=d.getBBox(),v=gt(v+r/100*S.width),x=gt(x+s/100*S.height)),S="matrix("+T+","+C+","+w+","+L+","+v+","+x+")",d.setAttribute("transform",S),M&&(d.style[ht]=S)},Yy=function(e,t,n,r,s){var o=360,a=Ut(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Pf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Pf)%o-~~(c/o)*o)),e._pt=f=new an(e._pt,t,n,r,c,Py),f.e=u,f.u="deg",e._props.push(n),f},Of=function(e,t){for(var n in t)e[n]=t[n];return e},Ky=function(e,t,n){var r=Of({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ht]=t,a=ho(n,1),Lr(n,ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ht],o[ht]=t,a=ho(n,1),o[ht]=c);for(l in yi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ht(c),_=Ht(u),h=d!==_?Zi(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new an(e._pt,a,l,h,f-h,wc),e._pt.u=_||0,e._props.push(l));Of(a,r)};on("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Ea[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return mi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Kp={name:"css",register:Cc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,M,v,x,T,C,w,L;pu||Cc(),this.styles=this.styles||Hp(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(mn[g]&&Pp(g,t,n,r,e,s)))){if(d=typeof u,_=Ea[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ao(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Xi.lastIndex=0,Xi.test(c)||(m=Ht(c),p=Ht(u)),p?m!==p&&(c=Zi(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Ut(c)&&~c.indexOf("random(")&&(c=ao(c)),Ht(c+"")||c==="auto"||(c+=Sn.units[g]||Ht(mi(e,g))||""),(c+"").charAt(1)==="="&&(c=mi(e,g))):c=mi(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Zn&&(g==="autoAlpha"&&(f===1&&mi(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,a.visibility),ki(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Zn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in yi,v){if(this.styles.save(g),x||(T=e._gsap,T.renderTransform&&!t.parseTransform||ho(e,t.parseTransform),C=t.smoothOrigin!==!1&&T.smooth,x=this._pt=new an(this._pt,a,ht,0,1,T.renderTransform,T,0,-1),x.dep=1),g==="scale")this._pt=new an(this._pt,T,"scaleY",T.scaleY,(M?cs(T.scaleY,M+h):h)-T.scaleY||0,wc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(ln,0,a[ln]),u=Vy(u),T.svg?Rc(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&ki(this,T,"zOrigin",T.zOrigin,p),ki(this,a,g,Ta(c),Ta(u)));continue}else if(g==="svgOrigin"){Rc(e,u,1,C,0,this);continue}else if(g in Xp){Yy(this,T,g,f,M?cs(f,M+u):u);continue}else if(g==="smoothOrigin"){ki(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){Ky(this,u,e);continue}}else g in a||(g=Ts(g)||g);if(v||(h||h===0)&&(f||f===0)&&!Ry.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=Ht(u)||(g in Sn.units?Sn.units[g]:m),m!==p&&(f=Zi(e,g,c,p)),this._pt=new an(this._pt,v?T:a,g,f,(M?cs(f,M+h):h)-f,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Dy:wc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ly);else if(g in a)Gy.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,r,s);else if(g!=="parseTransform"){su(g,u);continue}v||(g in a?L.push(g,0,a[g]):L.push(g,1,c||e[g])),o.push(g)}}w&&Op(this)},render:function(e,t){if(t.tween._time||!mu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mi,aliases:Zn,getSetter:function(e,t,n){var r=Zn[t];return r&&r.indexOf(",")<0&&(t=r),t in yi&&t!==ln&&(e._gsap.x||mi(e,"x"))?n&&Rf===n?t==="scale"?Oy:Ny:(Rf=n||{})&&(t==="scale"?Fy:By):e.style&&!nu(e.style[t])?Uy:~t.indexOf("-")?Iy:fu(e,t)},core:{_removeProperty:Lr,_getMatrix:_u}};cn.utils.checkPrefix=Ts;cn.core.getStyleSaver=Hp;(function(i,e,t,n){var r=on(i+","+e+","+t,function(s){yi[s]=1});on(e,function(s){Sn.units[s]="deg",Xp[s]=1}),Zn[r[13]]=i+","+e,on(n,function(s){var o=s.split(":");Zn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Sn.units[i]="px"});cn.registerPlugin(Kp);var jp=cn.registerPlugin(Kp)||cn;jp.core.Tween;const jy=(i,e)=>{const t=new zn,n=ji[i],r=new Ft(1,.6,17,30),s=new Ze({color:n,wireframe:!1}),o=new He(r,s);o.rotateX(Math.PI/2),o.receiveShadow=!0,o.castShadow=!0,t.add(o);const a=new Ln(.5,1,3,52),l=new Ze({color:n,wireframe:!1}),c=new He(a,l);c.position.y=1.5,c.receiveShadow=!0,c.castShadow=!0,t.add(c);const u=new Ln(.75,.75,1,30),h=new Ze({color:n,wireframe:!1}),f=new He(u,h);return f.position.y=3.5,f.receiveShadow=!0,f.castShadow=!0,t.add(f),t.position.y=.6,t.scale.set(.25,.25,.25),t.castShadow=!0,t.receiveShadow=!0,t.name=e,t},$y=(i,e)=>{const t=new zn,n=ji[i],r=new Ft(1,.6,17,30),s=new Ze({color:n,wireframe:!1}),o=new He(r,s);o.rotateX(Math.PI/2),o.receiveShadow=!0,o.castShadow=!0,t.add(o);const a=new Ln(.25,.85,3,52),l=new Ze({color:n,wireframe:!1}),c=new He(a,l);c.position.y=1.5,c.receiveShadow=!0,c.castShadow=!0,t.add(c);const u=new Ft(.5,.25,20,30),h=new Ze({color:n,wireframe:!1}),f=new He(u,h);f.rotateX(Math.PI/2),f.position.y=3,f.receiveShadow=!0,f.castShadow=!0,t.add(f);const d=new yo(.65,.4,4,8),_=new Ze({color:n,wireframe:!1}),g=new He(d,_);return g.position.y=4,g.receiveShadow=!0,g.castShadow=!0,t.add(g),t.position.y=.6,t.scale.set(.25,.25,.25),t.castShadow=!0,t.receiveShadow=!0,t.name=e,t},Zy=(i,e)=>{const t=new zn,n=ji[i],r=new Ft(1,.6,17,30),s=new Ze({color:n,wireframe:!1}),o=new He(r,s);o.rotateX(Math.PI/2),o.receiveShadow=!0,o.castShadow=!0,t.add(o);const a=new Ln(.5,1.1,4.75,4);a.applyMatrix4(new _t().makeRotationZ(i==="black"?-Math.PI/12:Math.PI/12));const l=new Ze({color:n,wireframe:!1}),c=new He(a,l);c.position.y=2,c.position.x=i==="black"?.45:-.45,c.receiveShadow=!0,c.castShadow=!0,t.add(c);const u=new Ln(.4,.7,2.5,3),h=new Ze({color:n,wireframe:!1}),f=new He(u,h);return f.position.y=3.5,f.rotateZ(i==="black"?Math.PI/2:-Math.PI/2),f.rotateY(i==="black"?Math.PI/2:-Math.PI/2),f.rotateX(-Math.PI/4),f.position.x=i==="black"?.1:-.1,f.receiveShadow=!0,f.castShadow=!0,t.add(f),t.position.y=.6,t.scale.set(.25,.25,.25),t.castShadow=!0,t.receiveShadow=!0,t.name=e,t},Jy=(i,e)=>{const t=new zn,n=ji[i],r=new Ft(1,.3,17,30),s=new Ze({color:n,wireframe:!1}),o=new He(r,s);o.rotateX(Math.PI/2),o.receiveShadow=!0,o.castShadow=!0,t.add(o);const a=new Ft(1,.5,17,30),l=new Ze({color:n,wireframe:!1}),c=new He(a,l);c.rotateX(Math.PI/2),c.receiveShadow=!0,c.position.y=.5,c.castShadow=!0,t.add(c);const u=new Ft(.9,.4,17,30),h=new Ze({color:n,wireframe:!1}),f=new He(u,h);f.rotateX(Math.PI/2),f.receiveShadow=!0,f.position.y=1,f.castShadow=!0,t.add(f);const d=new Ln(.45,.85,5,52),_=new Ze({color:n,wireframe:!1}),g=new He(d,_);g.position.y=2.5,g.receiveShadow=!0,g.castShadow=!0,t.add(g);const m=new Ft(.3,.4,17,30),p=new Ze({color:n,wireframe:!1}),M=new He(m,p);M.rotateX(Math.PI/2),M.receiveShadow=!0,M.position.y=4.25,M.castShadow=!0,t.add(M);const v=new Ft(.3,.4,17,30),x=new Ze({color:n,wireframe:!1}),T=new He(v,x);T.rotateX(Math.PI/2),T.receiveShadow=!0,T.position.y=4.3,T.castShadow=!0,t.add(T);const C=new Ln(.75,.1,2,8),w=new Ze({color:n,wireframe:!1}),L=new He(C,w);L.position.y=4.75,L.receiveShadow=!0,L.castShadow=!0,t.add(L);const S=new Qc(.75,1,2),R=new Ze({color:n,wireframe:!1}),k=new He(S,R);return k.position.y=5.5,k.receiveShadow=!0,k.castShadow=!0,t.add(k),t.position.y=.6,t.scale.set(.25,.25,.25),t.castShadow=!0,t.receiveShadow=!0,t.name=e,t},Qy=(i,e)=>{const t=new zn,n=ji[i],r=new Ft(1,.3,17,30),s=new Ze({color:n,wireframe:!1}),o=new He(r,s);o.rotateX(Math.PI/2),o.receiveShadow=!0,o.castShadow=!0,t.add(o);const a=new Ft(1.1,.5,17,30),l=new Ze({color:n,wireframe:!1}),c=new He(a,l);c.rotateX(Math.PI/2),c.receiveShadow=!0,c.position.y=.6,c.castShadow=!0,t.add(c);const u=new Ft(1,.4,17,30),h=new Ze({color:n,wireframe:!1}),f=new He(u,h);f.rotateX(Math.PI/2),f.receiveShadow=!0,f.position.y=1.2,f.castShadow=!0,t.add(f);const d=new Ln(.55,.95,5.1,52),_=new Ze({color:n,wireframe:!1}),g=new He(d,_);g.position.y=2.75,g.receiveShadow=!0,g.castShadow=!0,t.add(g);const m=new Ft(.3,.4,17,30),p=new Ze({color:n,wireframe:!1}),M=new He(m,p);M.rotateX(Math.PI/2),M.receiveShadow=!0,M.position.y=4.35,M.castShadow=!0,t.add(M);const v=new Ft(.3,.4,17,30),x=new Ze({color:n,wireframe:!1}),T=new He(v,x);T.rotateX(Math.PI/2),T.receiveShadow=!0,T.position.y=4.4,T.castShadow=!0,t.add(T);const C=new Ln(.8,.15,2,8),w=new Ze({color:n,wireframe:!1}),L=new He(C,w);L.position.y=4.85,L.receiveShadow=!0,L.castShadow=!0,t.add(L);const S=new yo(.5,.25,4,8),R=new Ze({color:n,wireframe:!1}),k=new He(S,R);return k.position.y=5.75,k.receiveShadow=!0,k.castShadow=!0,t.add(k),t.position.y=.6,t.scale.set(.25,.25,.25),t.castShadow=!0,t.receiveShadow=!0,t.name=e,t},eE={Pawn:i=>{const e=IM(i.color,i.name);return new es(e,i.position,i.color)},Rook:i=>{const e=jy(i.color,i.name);return new es(e,i.position,i.color)},Bishop:i=>{const e=$y(i.color,i.name);return new es(e,i.position,i.color)},Knight:i=>{const e=Zy(i.color,i.name);return new es(e,i.position,i.color)},Queen:i=>{const e=Jy(i.color,i.name);return new es(e,i.position,i.color)},King:i=>{const e=Qy(i.color,i.name);return new es(e,i.position,i.color)}};class es{mesh;color;constructor(e,t,n){this.mesh=e,this.mesh.position.set(t.x,.5,t.z),this.color=n}getMesh(){return this.mesh}getPosition(){return this.mesh.position}unselect(){const e=ji[this.color];this.changeFigureColor(e)}select(){this.changeFigureColor(ji.selected)}changeFigureColor(e){for(let t=0;t<this.mesh.children.length;t++)this.mesh.children[t]?.material.color.setHex(e)}move=e=>{jp.to(this.mesh.position,{duration:1,x:e.x,z:e.z,onComplete:()=>this.mesh.position.set(e.x,.5,e.z)})}}class tE{#t;#i;#e;constructor(e,t,n){this.#t=new bi(1,1,1),this.#i=new Ze({color:ls[t]}),this.#e=new He(this.#t,this.#i),this.#e.position.x=e.x,this.#e.position.z=e.z,this.#e.receiveShadow=!0,this.#e.name=n}getPosition(){return this.#e.position}getName(){return this.#e.name}getMesh(){return this.#e}}const nE=i=>{let e=0,t=0;for(let n=0;n<yt.length;n++)for(let r=0;r<yt[n].length;r++)yt[n][r]===i&&(e=n,t=r);return{bottom:yt[e+1]?yt[e+1][t]:null,top:yt[e-1]?yt[e-1][t]:null,left:yt[e][t-1]??null,right:yt[e][t+1]??null,bottomLeft:yt[e+1]?yt[e+1][t-1]:null,bottomRight:yt[e+1]?yt[e+1][t+1]:null,topLeft:yt[e-1]?yt[e-1][t-1]:null,topRight:yt[e-1]?yt[e-1][t+1]:null}};class iE{#t;#i=null;#e;#n;#r=!1;#s;#o;constructor(e,t,n){this.#t=`${e}${t}`,this.#o=e,this.#s=(n.x+n.z)%2?"white":"black",this.#e=new tE({x:n.x-3.5,z:n.z-3.5},this.#s,this.#t),this.#n=nE(this.#t)}getTopSibling(e){return e==="black"?this.#n.top:this.#n.bottom}getBottomSibling(e){return e==="black"?this.#n.bottom:this.#n.top}getTopLeftSibling(e){return e==="black"?this.#n.topLeft:this.#n.bottomRight}getTopRightSibling(e){return e==="black"?this.#n.topRight:this.#n.bottomLeft}getBottomLeftSibling(e){return e==="black"?this.#n.bottomLeft:this.#n.topRight}getBottomRightSibling(e){return e==="black"?this.#n.bottomRight:this.#n.topLeft}getLeftSibling(e){return e==="black"?this.#n.left:this.#n.right}getRightSibling(e){return e==="black"?this.#n.right:this.#n.left}getCanMove(){return this.#r}setDefualtColor(){this.changeColor(ls[this.#s])}setCanMove(e){if(this.#r=e,this.#r&&this.hasFigure()){this.changeColor(ls.capture);return}if(this.#r){this.changeColor(ls.canMove);return}this.setDefualtColor()}changeColor(e){this.getMesh().material.color.setHex(e)}setFigure(e){this.#i=e}hasFigure(){return this.#i!==null}hasFigureColor(){return this.#i?.getColor()??""}getFigure(){return this.#i}getMesh(){return this.#e.getMesh()}getCellName(){return this.#t}getCellRow(){return this.#o}getCellPosition(){return this.#e.getPosition()}canEnPassantCupture(e){if(!this.hasFigure()||!this.#i)return!1;const t=this.getFigure();return t?t.getType()==="Pawn"&&t.getColor()!==e&&t.getStepNumber()===1:!1}}class rE{#t;#i;#e;#n;#r;#s=0;constructor(e,t,n,r){this.#t=t,this.#i=n,this.#r=`${n}_${r.getCellName()}`,this.#e=eE[n]({position:e,color:this.#t,name:this.#r}),this.#n=r}getColor(){return this.#t}getFigure(){return this.#e}getType(){return this.#i}getName(){return this.#r}getStepNumber(){return this.#s}move(e){this.#e.move(e.getCellPosition()),this.setCurrentCell(e),this.#s++}getCurrentCell(){return this.#n}setCurrentCell(e){this.#n=e}select(){this.#e.select()}unselect(){this.#e.unselect()}}const Tr={outsideClick:"outsideClick",cellClick:"cellClick",figureClick:"figureClick",figureCaptured:"figureCaptured"};class sE{dispatchEvent(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}subscribe(e,t){window.addEventListener(e,t)}}const Nt=new sE,oE=i=>{for(let t=0;t<yt.length;t++)for(let n=0;n<yt[t].length;n++)if(i===yt[t][n])return!0;return!1};class aE{#t={};addCell(e){const t=e.getCellName();this.#t[t]=e}getCell(e){return e?this.#t[e]:null}}const ft=new aE;class lE{#t={};addFigure(e){const t=e.getName();this.#t[t]=e}getFigure(e){return this.#t[e]}deleteFigure(e){const t=e.getName();delete this.#t[t]}getFiguresByColor(e){const t=[];return Object.keys(this.#t).forEach(n=>{this.#t[n].getColor()===e&&t.push(this.#t[n])}),t}getFiguresByType(e){const t=[];return Object.keys(this.#t).forEach(n=>{this.#t[n].getType()===e&&t.push(this.#t[n])}),t}}const _i=new lE,cE={"":i=>Nt.dispatchEvent(Tr.outsideClick,{}),figure:i=>{const e=_i.getFigure(i);Nt.dispatchEvent(Tr.figureClick,{clickedFigure:e})},cell:i=>{const e=ft.getCell(i);Nt.dispatchEvent(Tr.cellClick,{clickedCell:e})}};class uE{#t;#i=new CM;#e;#n=new ye;#r;constructor(){this.#r=ra,this.#t=ra.getRenderer(),this.#e=ra.getCamera(),this.initListener()}initListener(){this.#t.domElement.addEventListener("click",this.raycast.bind(this),!1)}getIntercectType=e=>oE(e)?"cell":e?"figure":"";getIntercectName=e=>e&&e.object?e.object.parent?.name||e.object.name:"";raycast(e){this.#n.x=e.clientX/window.innerWidth*2-1,this.#n.y=-(e.clientY/window.innerHeight)*2+1,this.#i.setFromCamera(this.#n,this.#e);const t=this.#i.intersectObjects(this.#r.getScene().children),n=t.length?t[0]:void 0,r=this.getIntercectName(n),s=this.getIntercectType(r);cE[s](r)}}class Ff{geometry;material;mesh;constructor(e){this.geometry=new bi(8,1.2,.5),this.material=new Ze({color:eu}),this.mesh=new He(this.geometry,this.material),this.mesh.position.x=e.x,this.mesh.position.z=e.z,this.mesh.receiveShadow=!0}getMesh(){return this.mesh}}class Bf{geometry;material;mesh;constructor(e){this.geometry=new bi(.5,1.2,9),this.material=new Ze({color:eu}),this.mesh=new He(this.geometry,this.material),this.mesh.position.x=e.x,this.mesh.position.z=e.z,this.mesh.receiveShadow=!0}getMesh(){return this.mesh}}class hE{geometry;material;mesh;constructor(){this.geometry=new bi(8,.125,8),this.material=new Ze({color:eu}),this.mesh=new He(this.geometry,this.material),this.mesh.position.y=-.5,this.mesh.receiveShadow=!0}getMesh(){return this.mesh}}const fE=()=>{const i=new zn;return i.add(new hE().getMesh()),i.add(new Ff({x:0,z:4.25}).getMesh()),i.add(new Ff({x:0,z:-4.25}).getMesh()),i.add(new Bf({x:4.25,z:0}).getMesh()),i.add(new Bf({x:-4.25,z:0}).getMesh()),{getMesh:()=>i}};class dE{#t=ra;#i;constructor(){this.#i=new uE,this.createBoard(),this.initFigures(),this.animate()}draw(e){this.#t.addObject(e.getMesh())}animate(){this.#t.animate()}remove(e){this.#t.remove(e.getMesh())}initFigure(e,t,n){const r=ft.getCell(e),s=r.getCellPosition(),o=new rE(s,t,n,r);r.setFigure(o),this.draw(o.getFigure()),_i.addFigure(o)}initFigures(){Object.keys(dc).forEach(e=>{dc[e].forEach(t=>this.initFigure(t,"black",e))}),Object.keys(pc).forEach(e=>{pc[e].forEach(t=>this.initFigure(t,"white",e))})}createBoard(){const e=fE();this.draw(e);for(let[t,n]of jd.entries())for(let[r,s]of Kd.entries()){const o=new iE(`${s}`,`${n}`,{x:t,z:r});ft.addCell(o),this.draw(o)}}}const pE=new dE;class mE{#t;constructor(){this.#t=document.body,Nt.subscribe("chagePlayer",this.onChangePlayer.bind(this)),Nt.subscribe("checked",this.onCheked.bind(this)),Nt.subscribe("gameFinished",this.onGameFinished.bind(this))}onChangePlayer(){this.#t.classList.toggle("black")}onCheked(){this.#t.classList.add("checked"),setTimeout(()=>this.#t.classList.remove("checked"),1e3)}onGameFinished(){this.#t.classList.add("finished")}}class gE{getAvalibleMoveCells(e){const t=e.getType();return xE[t](e)}getCaptureCells(e){const t=e.getType();return SE[t](e)}}const la=(i,e)=>e&&!e.hasFigure(),fo=(i,e)=>e&&e.hasFigure()&&e.getFigure()?.getColor()!==i,zf=(i,e)=>e&&fo(i,e)&&e.getFigure()?.getStepNumber()===1,$p=(i,e)=>la(i,e)||fo(i,e),_E=i=>{const e=i.getCurrentCell(),t=[],n=e.getTopSibling(i.getColor()),r=ft.getCell(n);if(la(i.getColor(),r)&&t.push(r),i.getStepNumber()===0&&la(i.getColor(),r)){const s=r.getTopSibling(i.getColor()),o=ft.getCell(s);la(i.getColor(),o)&&t.push(o)}return t},Zp=i=>{const e=i.getCurrentCell(),t=[],n=e.getTopLeftSibling(i.getColor()),r=ft.getCell(n);fo(i.getColor(),r)&&t.push(r);const s=e.getLeftSibling(i.getColor()),o=ft.getCell(s);zf(i.getColor(),o)&&t.push(r);const a=e.getTopRightSibling(i.getColor()),l=ft.getCell(a);fo(i.getColor(),l)&&t.push(l);const c=e.getRightSibling(i.getColor()),u=ft.getCell(c);return zf(i.getColor(),u)&&t.push(l),t},vE=i=>[..._E(i),...Zp(i)],Hs=(i,e,t)=>{const n=ft.getCell(t);$p(e,n)&&i.push(n)},Jp=i=>{const e=[],t=i.getCurrentCell(),n=t.getTopRightSibling(i.getColor()),r=ft.getCell(n);r&&[r.getTopSibling(i.getColor()),r.getRightSibling(i.getColor())].forEach(f=>Hs(e,i.getColor(),f));const s=t.getTopLeftSibling(i.getColor()),o=ft.getCell(s);o&&[o.getTopSibling(i.getColor()),o.getLeftSibling(i.getColor())].forEach(f=>Hs(e,i.getColor(),f));const a=t.getBottomRightSibling(i.getColor()),l=ft.getCell(a);l&&[l.getBottomSibling(i.getColor()),l.getRightSibling(i.getColor())].forEach(f=>Hs(e,i.getColor(),f));const c=t.getBottomLeftSibling(i.getColor()),u=ft.getCell(c);return u&&[u.getBottomSibling(i.getColor()),u.getLeftSibling(i.getColor())].forEach(f=>Hs(e,i.getColor(),f)),e},Qp=i=>{const e=[],t=i.getCurrentCell(),n=i.getColor();if([t.getTopSibling(n),t.getBottomSibling(n),t.getLeftSibling(n),t.getRightSibling(n),t.getTopLeftSibling(n),t.getTopRightSibling(n),t.getBottomLeftSibling(n),t.getBottomRightSibling(n)].forEach(h=>Hs(e,n,h)),i.getStepNumber()>0)return e;const s=Wn(i,n==="white"?"getLeftSibling":"getRightSibling"),o=Wn(i,n==="white"?"getRightSibling":"getLeftSibling"),a=ft.getCell(n=="white"?"a1":"a8"),l=ft.getCell(n=="white"?"h1":"h8"),c=a.getFigure(),u=l.getFigure();return s.length===3&&u&&u.getType()==="Rook"&&u.getStepNumber()===0&&e.push(...s),o.length===4&&c&&c.getType()==="Rook"&&c.getStepNumber()===0&&(o.splice(3,1),e.push(...o)),e},Wn=(i,e)=>{const t=i.getCurrentCell(),n=[];if(!t)return[];let r=t[e](i.getColor()),s=ft.getCell(r),o=t[e](i.getColor()),a=ft.getCell(o);for(;$p(i.getColor(),s)&&(n.push(s),!(fo(i.getColor(),s)||!a));)s=a,o=s[e](i.getColor()),a=ft.getCell(o);return n},qi={line:i=>{const e=Wn(i,"getTopSibling"),t=Wn(i,"getBottomSibling"),n=Wn(i,"getLeftSibling"),r=Wn(i,"getRightSibling");return[...e,...t,...n,...r]},diagonale:i=>{const e=Wn(i,"getTopLeftSibling"),t=Wn(i,"getTopRightSibling"),n=Wn(i,"getBottomLeftSibling"),r=Wn(i,"getBottomRightSibling");return[...e,...t,...r,...n]},all:i=>[...qi.line(i),...qi.diagonale(i)]},xE={Pawn:i=>vE(i),Rook:i=>qi.line(i),Bishop:i=>qi.diagonale(i),Knight:i=>Jp(i),Queen:i=>qi.all(i),King:i=>Qp(i)},SE={Pawn:i=>Zp(i),Rook:i=>qi.line(i),Bishop:i=>qi.diagonale(i),Knight:i=>Jp(i),Queen:i=>qi.all(i),King:i=>Qp(i)};class ME{#t="white";#i;constructor(){this.#i=new gE,Nt.subscribe("gameFinished",this.onGameFinished.bind(this)),Nt.subscribe("checked",this.onChecked.bind(this))}getCurrentPlayer(){return this.#t}getSecondPlayerColor(){return this.#t==="black"?"white":"black"}toggleCurrentPlayer(){if(Nt.dispatchEvent("chagePlayer"),this.#t==="white"){this.#t="black";return}this.#t="white"}onChecked(){this.getCurrentKing().getCurrentCell().changeColor(ls.capture),setTimeout(()=>{this.getCurrentKing().getCurrentCell().setDefualtColor()},1e3)}onGameFinished(){this.getCurrentKing().getCurrentCell().changeColor(ls.capture)}getCurrentKing(){const t=_i.getFiguresByType("King").find(n=>n.getColor()===this.getCurrentPlayer());if(!t)throw new Error("There must be the king");return t}getfiguresWithAttackedCells(){return _i.getFiguresByColor(this.getSecondPlayerColor()).flatMap(n=>({figure:n,cells:this.#i.getCaptureCells(n)}))}isKingUnderCheck(){const e=this.getCurrentKing().getCurrentCell();return this.getfiguresWithAttackedCells().flatMap(n=>n.cells).includes(e)}isGameFinished(){return _i.getFiguresByColor(this.#t).flatMap(n=>{const r=this.#i.getAvalibleMoveCells(n);return this.filterAvalibleCellsByKingCheck(r,n)}).length===0}isRoqueAvailable(e){return UM[e.getCellName()]}filterAvalibleCellsByKingCheck(e,t){const n=t.getCurrentCell(),r=this.isKingUnderCheck(),s=t.getType()==="King";return e.filter(o=>{const a=this.isRoqueAvailable(o);if(s&&r&&a)return!1;const l=o.getFigure();this.simulateMove(o,t,n,l);const c=this.isKingUnderCheck();return this.revertSimulateMove(o,t,n,l),!c})}simulateMove(e,t,n,r){(r&&r.getColor()!==this.#t||!r)&&(n.setFigure(null),t.setCurrentCell(e),e.setFigure(t),r&&_i.deleteFigure(r))}revertSimulateMove(e,t,n,r){(r&&r.getColor()!==this.#t||!r)&&(n.setFigure(t),t.setCurrentCell(n),e.setFigure(r),r&&r.setCurrentCell(e),r&&_i.addFigure(r))}highliteMoves(e){const t=this.#i.getAvalibleMoveCells(e);this.filterAvalibleCellsByKingCheck(t,e).forEach(n=>n.setCanMove(!0))}unhighliteMoves(e){this.#i.getAvalibleMoveCells(e).forEach(n=>n.setCanMove(!1))}upgradePawn(){}}class yE{#t;#i=new mE;#e=null;#n;constructor(e){this.#t=e,this.#n=new ME,Nt.subscribe(Tr.cellClick,this.onCellClick.bind(this)),Nt.subscribe(Tr.figureClick,this.onFigureClick.bind(this)),Nt.subscribe(Tr.outsideClick,this.onOutsideClick.bind(this))}onFigureClick(e){const{detail:t}=e,{clickedFigure:n}=t;if(this.#e&&n.getCurrentCell().getCanMove()){this.captureFigure(this.#e.getCurrentCell(),n.getCurrentCell());return}if(n.getColor()===this.#n.getCurrentPlayer()){if(this.#e&&this.#e.getName()!==n.getName()){this.#n.unhighliteMoves(this.#e),this.#e.unselect(),this.#e=n,this.#e.select(),this.#n.highliteMoves(this.#e);return}if(this.#e){this.#n.unhighliteMoves(this.#e),this.#e.unselect();return}this.#e=n,this.#e.select(),this.#n.highliteMoves(this.#e)}}onCellClick(e){const{detail:t}=e,{clickedCell:n}=t;if(!this.#e)return;const r=this.#e.getCurrentCell();this.tryEnPassantCapture(n,r)||this.tryRegularCapture(n,r)||this.tryMoveFigure(n,r)||this.unselectFigure()}tryEnPassantCapture(e,t){if(!this.#e)return!1;const n=t.getRightSibling(this.#e.getColor()),r=ft.getCell(n),s=t.getFigure();if(e.getCanMove()&&!e.hasFigure()&&s&&s.getType()==="Pawn"&&r&&r.canEnPassantCupture(this.#e.getColor())&&e.getCellRow()===r.getCellRow())return this.captureFigureEnPassant(t,e,r),!0;const o=t.getLeftSibling(this.#e.getColor()),a=ft.getCell(o);return e.getCanMove()&&!e.hasFigure()&&s&&s.getType()==="Pawn"&&a&&a.canEnPassantCupture(this.#e.getColor())&&e.getCellRow()===a.getCellRow()?(this.captureFigureEnPassant(t,e,a),!0):!1}tryRegularCapture(e,t){return this.#e&&e.getCanMove()&&e.hasFigure()&&e.hasFigureColor()!==this.#e.getColor()?(this.captureFigure(t,e),!0):!1}tryMoveFigure(e,t){return e.getCanMove()?(this.moveFigure(t,e),!0):!1}unselectFigure(){this.#e&&(this.#n.unhighliteMoves(this.#e),this.unSelectCurrentFigure())}onOutsideClick(){this.#e&&(this.#n.unhighliteMoves(this.#e),this.unSelectCurrentFigure())}unSelectCurrentFigure(){this.#e&&(this.#e.unselect(),this.#e=null)}moveFigure(e,t){if(!this.#e)return;const n=this.#e.getType();this.#n.unhighliteMoves(this.#e),this.#e.unselect(),this.#e.move(t),e.setFigure(null),t.setFigure(this.#e),this.#e=null;const r=this.#n.isRoqueAvailable(t);if(n==="King"&&r){const s=ft.getCell(r.rookDefualtCellName),o=ft.getCell(r.rookDestinationCellName),a=s.getFigure();a&&(a.move(o),o.setFigure(a),s.setFigure(null))}this.#n.toggleCurrentPlayer(),this.#n.isKingUnderCheck()&&Nt.dispatchEvent("checked"),this.#n.isGameFinished()&&Nt.dispatchEvent("gameFinished")}captureFigure(e,t){const n=t.getFigure();n&&(this.#t.remove(n.getFigure()),_i.deleteFigure(n),Nt.dispatchEvent("figureCaptured",{capturedFigure:n}),this.moveFigure(e,t))}captureFigureEnPassant(e,t,n){const r=n.getFigure();r&&(this.#t.remove(r.getFigure()),_i.deleteFigure(r),Nt.dispatchEvent("figureCaptured",{capturedFigure:r}),this.moveFigure(e,t))}}/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vu(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const at={},fs=[],ti=()=>{},em=()=>!1,za=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),xu=i=>i.startsWith("onUpdate:"),qt=Object.assign,Su=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},EE=Object.prototype.hasOwnProperty,tt=(i,e)=>EE.call(i,e),Ge=Array.isArray,js=i=>ka(i)==="[object Map]",TE=i=>ka(i)==="[object Set]",We=i=>typeof i=="function",At=i=>typeof i=="string",Cs=i=>typeof i=="symbol",vt=i=>i!==null&&typeof i=="object",tm=i=>(vt(i)||We(i))&&We(i.then)&&We(i.catch),bE=Object.prototype.toString,ka=i=>bE.call(i),wE=i=>ka(i).slice(8,-1),AE=i=>ka(i)==="[object Object]",Mu=i=>At(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,$s=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ha=i=>{const e=Object.create(null);return(t=>e[t]||(e[t]=i(t)))},CE=/-\w/g,Ji=Ha(i=>i.replace(CE,e=>e.slice(1).toUpperCase())),RE=/\B([A-Z])/g,Ir=Ha(i=>i.replace(RE,"-$1").toLowerCase()),nm=Ha(i=>i.charAt(0).toUpperCase()+i.slice(1)),Vl=Ha(i=>i?`on${nm(i)}`:""),Yi=(i,e)=>!Object.is(i,e),Wl=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},im=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},PE=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let kf;const Ga=()=>kf||(kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yu(i){if(Ge(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=At(n)?IE(n):yu(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(i)||vt(i))return i}const LE=/;(?![^(]*\))/g,DE=/:([^]+)/,UE=/\/\*[^]*?\*\//g;function IE(i){const e={};return i.replace(UE,"").split(LE).forEach(t=>{if(t){const n=t.split(DE);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Eu(i){let e="";if(At(i))e=i;else if(Ge(i))for(let t=0;t<i.length;t++){const n=Eu(i[t]);n&&(e+=n+" ")}else if(vt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const NE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",OE=vu(NE);function rm(i){return!!i||i===""}/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class FE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function BE(){return nn}let st;const Xl=new WeakSet;class sm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||am(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hf(this),lm(this);const e=st,t=kn;st=this,kn=!0;try{return this.fn()}finally{cm(this),st=e,kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wu(e);this.deps=this.depsTail=void 0,Hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pc(this)&&this.run()}get dirty(){return Pc(this)}}let om=0,Zs,Js;function am(i,e=!1){if(i.flags|=8,e){i.next=Js,Js=i;return}i.next=Zs,Zs=i}function Tu(){om++}function bu(){if(--om>0)return;if(Js){let e=Js;for(Js=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function lm(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cm(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),wu(n),zE(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Pc(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(um(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function um(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===po)||(i.globalVersion=po,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Pc(i))))return;i.flags|=2;const e=i.dep,t=st,n=kn;st=i,kn=!0;try{lm(i);const r=i.fn(i._value);(e.version===0||Yi(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=t,kn=n,cm(i),i.flags&=-3}}function wu(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)wu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function zE(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let kn=!0;const hm=[];function Ei(){hm.push(kn),kn=!1}function Ti(){const i=hm.pop();kn=i===void 0?!0:i}function Hf(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=st;st=void 0;try{e()}finally{st=t}}}let po=0;class kE{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!st||!kn||st===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==st)t=this.activeLink=new kE(st,this),st.deps?(t.prevDep=st.depsTail,st.depsTail.nextDep=t,st.depsTail=t):st.deps=st.depsTail=t,fm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=st.depsTail,t.nextDep=void 0,st.depsTail.nextDep=t,st.depsTail=t,st.deps===t&&(st.deps=n)}return t}trigger(e){this.version++,po++,this.notify(e)}notify(e){Tu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bu()}}}function fm(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)fm(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Lc=new WeakMap,br=Symbol(""),Dc=Symbol(""),mo=Symbol("");function kt(i,e,t){if(kn&&st){let n=Lc.get(i);n||Lc.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Au),r.map=n,r.key=t),r.track()}}function vi(i,e,t,n,r,s){const o=Lc.get(i);if(!o){po++;return}const a=l=>{l&&l.trigger()};if(Tu(),e==="clear")o.forEach(a);else{const l=Ge(i),c=l&&Mu(t);if(l&&t==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===mo||!Cs(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(mo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(br)),js(i)&&a(o.get(Dc)));break;case"delete":l||(a(o.get(br)),js(i)&&a(o.get(Dc)));break;case"set":js(i)&&a(o.get(br));break}}bu()}function ts(i){const e=et(i);return e===i?e:(kt(e,"iterate",mo),Pn(i)?e:e.map(Ot))}function Va(i){return kt(i=et(i),"iterate",mo),i}const HE={__proto__:null,[Symbol.iterator](){return ql(this,Symbol.iterator,Ot)},concat(...i){return ts(this).concat(...i.map(e=>Ge(e)?ts(e):e))},entries(){return ql(this,"entries",i=>(i[1]=Ot(i[1]),i))},every(i,e){return hi(this,"every",i,e,void 0,arguments)},filter(i,e){return hi(this,"filter",i,e,t=>t.map(Ot),arguments)},find(i,e){return hi(this,"find",i,e,Ot,arguments)},findIndex(i,e){return hi(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return hi(this,"findLast",i,e,Ot,arguments)},findLastIndex(i,e){return hi(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return hi(this,"forEach",i,e,void 0,arguments)},includes(...i){return Yl(this,"includes",i)},indexOf(...i){return Yl(this,"indexOf",i)},join(i){return ts(this).join(i)},lastIndexOf(...i){return Yl(this,"lastIndexOf",i)},map(i,e){return hi(this,"map",i,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...i){return Os(this,"push",i)},reduce(i,...e){return Gf(this,"reduce",i,e)},reduceRight(i,...e){return Gf(this,"reduceRight",i,e)},shift(){return Os(this,"shift")},some(i,e){return hi(this,"some",i,e,void 0,arguments)},splice(...i){return Os(this,"splice",i)},toReversed(){return ts(this).toReversed()},toSorted(i){return ts(this).toSorted(i)},toSpliced(...i){return ts(this).toSpliced(...i)},unshift(...i){return Os(this,"unshift",i)},values(){return ql(this,"values",Ot)}};function ql(i,e,t){const n=Va(i),r=n[e]();return n!==i&&!Pn(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const GE=Array.prototype;function hi(i,e,t,n,r,s){const o=Va(i),a=o!==i&&!Pn(i),l=o[e];if(l!==GE[e]){const h=l.apply(i,s);return a?Ot(h):h}let c=t;o!==i&&(a?c=function(h,f){return t.call(this,Ot(h),f,i)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function Gf(i,e,t,n){const r=Va(i);let s=t;return r!==i&&(Pn(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,Ot(a),l,i)}),r[e](s,...n)}function Yl(i,e,t){const n=et(i);kt(n,"iterate",mo);const r=n[e](...t);return(r===-1||r===!1)&&Lu(t[0])?(t[0]=et(t[0]),n[e](...t)):r}function Os(i,e,t=[]){Ei(),Tu();const n=et(i)[e].apply(i,t);return bu(),Ti(),n}const VE=vu("__proto__,__v_isRef,__isVue"),dm=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Cs));function WE(i){Cs(i)||(i=String(i));const e=et(this);return kt(e,"has",i),e.hasOwnProperty(i)}class pm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?eT:vm:s?_m:gm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ge(e);if(!r){let l;if(o&&(l=HE[t]))return l;if(t==="hasOwnProperty")return WE}const a=Reflect.get(e,t,Xt(e)?e:n);return(Cs(t)?dm.has(t):VE(t))||(r||kt(e,"get",t),s)?a:Xt(a)?o&&Mu(t)?a:a.value:vt(a)?r?xm(a):Ru(a):a}}class mm extends pm{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=Qi(s);if(!Pn(n)&&!Qi(n)&&(s=et(s),n=et(n)),!Ge(e)&&Xt(s)&&!Xt(n))return l||(s.value=n),!0}const o=Ge(e)&&Mu(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,n,Xt(e)?e:r);return e===et(r)&&(o?Yi(n,s)&&vi(e,"set",t,n):vi(e,"add",t,n)),a}deleteProperty(e,t){const n=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&vi(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Cs(t)||!dm.has(t))&&kt(e,"has",t),n}ownKeys(e){return kt(e,"iterate",Ge(e)?"length":br),Reflect.ownKeys(e)}}class XE extends pm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const qE=new mm,YE=new XE,KE=new mm(!0);const Uc=i=>i,Qo=i=>Reflect.getPrototypeOf(i);function jE(i,e,t){return function(...n){const r=this.__v_raw,s=et(r),o=js(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Uc:e?ba:Ot;return!e&&kt(s,"iterate",l?Dc:br),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ea(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function $E(i,e){const t={get(r){const s=this.__v_raw,o=et(s),a=et(r);i||(Yi(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:l}=Qo(o),c=e?Uc:i?ba:Ot;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&kt(et(r),"iterate",br),r.size},has(r){const s=this.__v_raw,o=et(s),a=et(r);return i||(Yi(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=et(a),c=e?Uc:i?ba:Ot;return!i&&kt(l,"iterate",br),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return qt(t,i?{add:ea("add"),set:ea("set"),delete:ea("delete"),clear:ea("clear")}:{add(r){!e&&!Pn(r)&&!Qi(r)&&(r=et(r));const s=et(this);return Qo(s).has.call(s,r)||(s.add(r),vi(s,"add",r,r)),this},set(r,s){!e&&!Pn(s)&&!Qi(s)&&(s=et(s));const o=et(this),{has:a,get:l}=Qo(o);let c=a.call(o,r);c||(r=et(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Yi(s,u)&&vi(o,"set",r,s):vi(o,"add",r,s),this},delete(r){const s=et(this),{has:o,get:a}=Qo(s);let l=o.call(s,r);l||(r=et(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&vi(s,"delete",r,void 0),c},clear(){const r=et(this),s=r.size!==0,o=r.clear();return s&&vi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=jE(r,i,e)}),t}function Cu(i,e){const t=$E(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(tt(t,r)&&r in n?t:n,r,s)}const ZE={get:Cu(!1,!1)},JE={get:Cu(!1,!0)},QE={get:Cu(!0,!1)};const gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,eT=new WeakMap;function tT(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nT(i){return i.__v_skip||!Object.isExtensible(i)?0:tT(wE(i))}function Ru(i){return Qi(i)?i:Pu(i,!1,qE,ZE,gm)}function iT(i){return Pu(i,!1,KE,JE,_m)}function xm(i){return Pu(i,!0,YE,QE,vm)}function Pu(i,e,t,n,r){if(!vt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=nT(i);if(s===0)return i;const o=r.get(i);if(o)return o;const a=new Proxy(i,s===2?n:t);return r.set(i,a),a}function ds(i){return Qi(i)?ds(i.__v_raw):!!(i&&i.__v_isReactive)}function Qi(i){return!!(i&&i.__v_isReadonly)}function Pn(i){return!!(i&&i.__v_isShallow)}function Lu(i){return i?!!i.__v_raw:!1}function et(i){const e=i&&i.__v_raw;return e?et(e):i}function rT(i){return!tt(i,"__v_skip")&&Object.isExtensible(i)&&im(i,"__v_skip",!0),i}const Ot=i=>vt(i)?Ru(i):i,ba=i=>vt(i)?xm(i):i;function Xt(i){return i?i.__v_isRef===!0:!1}function sT(i){return oT(i,!1)}function oT(i,e){return Xt(i)?i:new aT(i,e)}class aT{constructor(e,t){this.dep=new Au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Ot(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Pn(e)||Qi(e);e=n?e:et(e),Yi(e,t)&&(this._rawValue=e,this._value=n?e:Ot(e),this.dep.trigger())}}function lT(i){return Xt(i)?i.value:i}const cT={get:(i,e,t)=>e==="__v_raw"?i:lT(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Xt(r)&&!Xt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Sm(i){return ds(i)?i:new Proxy(i,cT)}class uT{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return am(this,!0),!0}get value(){const e=this.dep.track();return um(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hT(i,e,t=!1){let n,r;return We(i)?n=i:(n=i.get,r=i.set),new uT(n,r,t)}const ta={},wa=new WeakMap;let dr;function fT(i,e=!1,t=dr){if(t){let n=wa.get(t);n||wa.set(t,n=[]),n.push(i)}}function dT(i,e,t=at){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Pn(x)||r===!1||r===0?Ni(x,1):Ni(x);let u,h,f,d,_=!1,g=!1;if(Xt(i)?(h=()=>i.value,_=Pn(i)):ds(i)?(h=()=>c(i),_=!0):Ge(i)?(g=!0,_=i.some(x=>ds(x)||Pn(x)),h=()=>i.map(x=>{if(Xt(x))return x.value;if(ds(x))return c(x);if(We(x))return l?l(x,2):x()})):We(i)?e?h=l?()=>l(i,2):i:h=()=>{if(f){Ei();try{f()}finally{Ti()}}const x=dr;dr=u;try{return l?l(i,3,[d]):i(d)}finally{dr=x}}:h=ti,e&&r){const x=h,T=r===!0?1/0:r;h=()=>Ni(x(),T)}const m=BE(),p=()=>{u.stop(),m&&m.active&&Su(m.effects,u)};if(s&&e){const x=e;e=(...T)=>{x(...T),p()}}let M=g?new Array(i.length).fill(ta):ta;const v=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const T=u.run();if(r||_||(g?T.some((C,w)=>Yi(C,M[w])):Yi(T,M))){f&&f();const C=dr;dr=u;try{const w=[T,M===ta?void 0:g&&M[0]===ta?[]:M,d];M=T,l?l(e,3,w):e(...w)}finally{dr=C}}}else u.run()};return a&&a(v),u=new sm(h),u.scheduler=o?()=>o(v,!1):v,d=x=>fT(x,!1,u),f=u.onStop=()=>{const x=wa.get(u);if(x){if(l)l(x,4);else for(const T of x)T();wa.delete(u)}},e?n?v(!0):M=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ni(i,e=1/0,t){if(e<=0||!vt(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,Xt(i))Ni(i.value,e,t);else if(Ge(i))for(let n=0;n<i.length;n++)Ni(i[n],e,t);else if(TE(i)||js(i))i.forEach(n=>{Ni(n,e,t)});else if(AE(i)){for(const n in i)Ni(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Ni(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function To(i,e,t,n){try{return n?i(...n):i()}catch(r){Wa(r,e,t)}}function ii(i,e,t,n){if(We(i)){const r=To(i,e,t,n);return r&&tm(r)&&r.catch(s=>{Wa(s,e,t)}),r}if(Ge(i)){const r=[];for(let s=0;s<i.length;s++)r.push(ii(i[s],e,t,n));return r}}function Wa(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(s){Ei(),To(s,null,10,[i,l,c]),Ti();return}}pT(i,t,r,n,o)}function pT(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Jt=[];let Xn=-1;const ps=[];let Ui=null,ns=0;const Mm=Promise.resolve();let Aa=null;function mT(i){const e=Aa||Mm;return i?e.then(this?i.bind(this):i):e}function gT(i){let e=Xn+1,t=Jt.length;for(;e<t;){const n=e+t>>>1,r=Jt[n],s=go(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function Du(i){if(!(i.flags&1)){const e=go(i),t=Jt[Jt.length-1];!t||!(i.flags&2)&&e>=go(t)?Jt.push(i):Jt.splice(gT(e),0,i),i.flags|=1,ym()}}function ym(){Aa||(Aa=Mm.then(Tm))}function _T(i){Ge(i)?ps.push(...i):Ui&&i.id===-1?Ui.splice(ns+1,0,i):i.flags&1||(ps.push(i),i.flags|=1),ym()}function Vf(i,e,t=Xn+1){for(;t<Jt.length;t++){const n=Jt[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Jt.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Em(i){if(ps.length){const e=[...new Set(ps)].sort((t,n)=>go(t)-go(n));if(ps.length=0,Ui){Ui.push(...e);return}for(Ui=e,ns=0;ns<Ui.length;ns++){const t=Ui[ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ui=null,ns=0}}const go=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Tm(i){try{for(Xn=0;Xn<Jt.length;Xn++){const e=Jt[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),To(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<Jt.length;Xn++){const e=Jt[Xn];e&&(e.flags&=-2)}Xn=-1,Jt.length=0,Em(),Aa=null,(Jt.length||ps.length)&&Tm()}}let Jn=null,bm=null;function Ca(i){const e=Jn;return Jn=i,bm=i&&i.type.__scopeId||null,e}function vT(i,e=Jn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Qf(-1);const s=Ca(e);let o;try{o=i(...r)}finally{Ca(s),n._d&&Qf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function cr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ei(),ii(l,t,8,[i.el,a,i,e]),Ti())}}const xT=Symbol("_vte"),ST=i=>i.__isTeleport,MT=Symbol("_leaveCb");function Uu(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Uu(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function yT(i,e){return We(i)?qt({name:i.name},e,{setup:i}):i}function wm(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}const Ra=new WeakMap;function Qs(i,e,t,n,r=!1){if(Ge(i)){i.forEach((_,g)=>Qs(_,e&&(Ge(e)?e[g]:e),t,n,r));return}if(eo(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Qs(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?Bu(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState,f=et(h),d=h===at?em:_=>tt(f,_);if(c!=null&&c!==l){if(Wf(e),At(c))u[c]=null,d(c)&&(h[c]=null);else if(Xt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(We(l))To(l,a,12,[o,u]);else{const _=At(l),g=Xt(l);if(_||g){const m=()=>{if(i.f){const p=_?d(l)?h[l]:u[l]:l.value;if(r)Ge(p)&&Su(p,s);else if(Ge(p))p.includes(s)||p.push(s);else if(_)u[l]=[s],d(l)&&(h[l]=u[l]);else{const M=[s];l.value=M,i.k&&(u[i.k]=M)}}else _?(u[l]=o,d(l)&&(h[l]=o)):g&&(l.value=o,i.k&&(u[i.k]=o))};if(o){const p=()=>{m(),Ra.delete(i)};p.id=-1,Ra.set(i,p),pn(p,t)}else Wf(i),m()}}}function Wf(i){const e=Ra.get(i);e&&(e.flags|=8,Ra.delete(i))}Ga().requestIdleCallback;Ga().cancelIdleCallback;const eo=i=>!!i.type.__asyncLoader,Am=i=>i.type.__isKeepAlive;function ET(i,e){Cm(i,"a",e)}function TT(i,e){Cm(i,"da",e)}function Cm(i,e,t=en){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Xa(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Am(r.parent.vnode)&&bT(n,e,t,r),r=r.parent}}function bT(i,e,t,n){const r=Xa(e,i,n,!0);Rm(()=>{Su(n[e],r)},t)}function Xa(i,e,t=en,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Ei();const a=bo(t),l=ii(e,t,i,o);return a(),Ti(),l});return n?r.unshift(s):r.push(s),s}}const wi=i=>(e,t=en)=>{(!vo||i==="sp")&&Xa(i,(...n)=>e(...n),t)},wT=wi("bm"),AT=wi("m"),CT=wi("bu"),RT=wi("u"),PT=wi("bum"),Rm=wi("um"),LT=wi("sp"),DT=wi("rtg"),UT=wi("rtc");function IT(i,e=en){Xa("ec",i,e)}const NT=Symbol.for("v-ndc");function OT(i,e,t,n){let r;const s=t,o=Ge(i);if(o||At(i)){const a=o&&ds(i);let l=!1,c=!1;a&&(l=!Pn(i),c=Qi(i),i=Va(i)),r=new Array(i.length);for(let u=0,h=i.length;u<h;u++)r[u]=e(l?c?ba(Ot(i[u])):Ot(i[u]):i[u],u,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(vt(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}const Ic=i=>i?jm(i)?Bu(i):Ic(i.parent):null,to=qt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ic(i.parent),$root:i=>Ic(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Lm(i),$forceUpdate:i=>i.f||(i.f=()=>{Du(i.update)}),$nextTick:i=>i.n||(i.n=mT.bind(i.proxy)),$watch:i=>rb.bind(i)}),Kl=(i,e)=>i!==at&&!i.__isScriptSetup&&tt(i,e),FT={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Kl(n,e))return o[e]=1,n[e];if(r!==at&&tt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(t!==at&&tt(t,e))return o[e]=4,t[e];Nc&&(o[e]=0)}}const u=to[e];let h,f;if(u)return e==="$attrs"&&kt(i.attrs,"get",""),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Kl(r,e)?(r[e]=t,!0):n!==at&&tt(n,e)?(n[e]=t,!0):tt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(t[a]||i!==at&&a[0]!=="$"&&tt(i,a)||Kl(e,a)||(l=s[0])&&tt(l,a)||tt(n,a)||tt(to,a)||tt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:tt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Xf(i){return Ge(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Nc=!0;function BT(i){const e=Lm(i),t=i.proxy,n=i.ctx;Nc=!1,e.beforeCreate&&qf(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:v,unmounted:x,render:T,renderTracked:C,renderTriggered:w,errorCaptured:L,serverPrefetch:S,expose:R,inheritAttrs:k,components:V,directives:$,filters:D}=e;if(c&&zT(c,n,null),o)for(const H in o){const J=o[H];We(J)&&(n[H]=J.bind(t))}if(r){const H=r.call(t,t);vt(H)&&(i.data=Ru(H))}if(Nc=!0,s)for(const H in s){const J=s[H],ce=We(J)?J.bind(t,t):We(J.get)?J.get.bind(t,t):ti,ae=!We(J)&&We(J.set)?J.set.bind(t):ti,B=Cb({get:ce,set:ae});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>B.value,set:X=>B.value=X})}if(a)for(const H in a)Pm(a[H],n,t,H);if(l){const H=We(l)?l.call(t):l;Reflect.ownKeys(H).forEach(J=>{XT(J,H[J])})}u&&qf(u,i,"c");function W(H,J){Ge(J)?J.forEach(ce=>H(ce.bind(t))):J&&H(J.bind(t))}if(W(wT,h),W(AT,f),W(CT,d),W(RT,_),W(ET,g),W(TT,m),W(IT,L),W(UT,C),W(DT,w),W(PT,M),W(Rm,x),W(LT,S),Ge(R))if(R.length){const H=i.exposed||(i.exposed={});R.forEach(J=>{Object.defineProperty(H,J,{get:()=>t[J],set:ce=>t[J]=ce,enumerable:!0})})}else i.exposed||(i.exposed={});T&&i.render===ti&&(i.render=T),k!=null&&(i.inheritAttrs=k),V&&(i.components=V),$&&(i.directives=$),S&&wm(i)}function zT(i,e,t=ti){Ge(i)&&(i=Oc(i));for(const n in i){const r=i[n];let s;vt(r)?"default"in r?s=ca(r.from||n,r.default,!0):s=ca(r.from||n):s=ca(r),Xt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function qf(i,e,t){ii(Ge(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Pm(i,e,t,n){let r=n.includes(".")?Wm(t,n):()=>t[n];if(At(i)){const s=e[i];We(s)&&$l(r,s)}else if(We(i))$l(r,i.bind(t));else if(vt(i))if(Ge(i))i.forEach(s=>Pm(s,e,t,n));else{const s=We(i.handler)?i.handler.bind(t):e[i.handler];We(s)&&$l(r,s,i)}}function Lm(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Pa(l,c,o,!0)),Pa(l,e,o)),vt(e)&&s.set(e,l),l}function Pa(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Pa(i,s,t,!0),r&&r.forEach(o=>Pa(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=kT[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const kT={data:Yf,props:Kf,emits:Kf,methods:Gs,computed:Gs,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Gs,directives:Gs,watch:GT,provide:Yf,inject:HT};function Yf(i,e){return e?i?function(){return qt(We(i)?i.call(this,this):i,We(e)?e.call(this,this):e)}:e:i}function HT(i,e){return Gs(Oc(i),Oc(e))}function Oc(i){if(Ge(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function jt(i,e){return i?[...new Set([].concat(i,e))]:e}function Gs(i,e){return i?qt(Object.create(null),i,e):e}function Kf(i,e){return i?Ge(i)&&Ge(e)?[...new Set([...i,...e])]:qt(Object.create(null),Xf(i),Xf(e??{})):e}function GT(i,e){if(!i)return e;if(!e)return i;const t=qt(Object.create(null),i);for(const n in e)t[n]=jt(i[n],e[n]);return t}function Dm(){return{app:null,config:{isNativeTag:em,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VT=0;function WT(i,e){return function(n,r=null){We(n)||(n=qt({},n)),r!=null&&!vt(r)&&(r=null);const s=Dm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:VT++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Rb,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(c,...h)):We(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||wr(n,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Bu(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ii(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=ms;ms=c;try{return u()}finally{ms=h}}};return c}}let ms=null;function XT(i,e){if(en){let t=en.provides;const n=en.parent&&en.parent.provides;n===t&&(t=en.provides=Object.create(n)),t[i]=e}}function ca(i,e,t=!1){const n=yb();if(n||ms){let r=ms?ms._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&We(e)?e.call(n&&n.proxy):e}}const Um={},Im=()=>Object.create(Um),Nm=i=>Object.getPrototypeOf(i)===Um;function qT(i,e,t,n=!1){const r={},s=Im();i.propsDefaults=Object.create(null),Om(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:iT(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function YT(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=et(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(qa(i.emitsOptions,f))continue;const d=e[f];if(l)if(tt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=Ji(f);r[_]=Fc(l,a,_,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Om(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!tt(e,h)&&((u=Ir(h))===h||!tt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Fc(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!tt(e,h))&&(delete s[h],c=!0)}c&&vi(i.attrs,"set","")}function Om(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;r&&tt(r,u=Ji(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:qa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=et(t),c=a||at;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Fc(r,l,h,c[h],i,!tt(c,h))}}return o}function Fc(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=tt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=bo(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Ir(t))&&(n=!0))}return n}const KT=new WeakMap;function Fm(i,e,t=!1){const n=t?KT:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!We(i)){const u=h=>{l=!0;const[f,d]=Fm(h,e,!0);qt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return vt(i)&&n.set(i,fs),fs;if(Ge(s))for(let u=0;u<s.length;u++){const h=Ji(s[u]);jf(h)&&(o[h]=at)}else if(s)for(const u in s){const h=Ji(u);if(jf(h)){const f=s[u],d=o[h]=Ge(f)||We(f)?{type:f}:qt({},f),_=d.type;let g=!1,m=!0;if(Ge(_))for(let p=0;p<_.length;++p){const M=_[p],v=We(M)&&M.name;if(v==="Boolean"){g=!0;break}else v==="String"&&(m=!1)}else g=We(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||tt(d,"default"))&&a.push(h)}}const c=[o,a];return vt(i)&&n.set(i,c),c}function jf(i){return i[0]!=="$"&&!$s(i)}const Iu=i=>i==="_"||i==="_ctx"||i==="$stable",Nu=i=>Ge(i)?i.map(jn):[jn(i)],jT=(i,e,t)=>{if(e._n)return e;const n=vT((...r)=>Nu(e(...r)),t);return n._c=!1,n},Bm=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Iu(r))continue;const s=i[r];if(We(s))e[r]=jT(r,s,n);else if(s!=null){const o=Nu(s);e[r]=()=>o}}},zm=(i,e)=>{const t=Nu(e);i.slots.default=()=>t},km=(i,e,t)=>{for(const n in e)(t||!Iu(n))&&(i[n]=e[n])},$T=(i,e,t)=>{const n=i.slots=Im();if(i.vnode.shapeFlag&32){const r=e._;r?(km(n,e,t),t&&im(n,"_",r,!0)):Bm(e,n)}else e&&zm(i,e)},ZT=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=at;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:km(r,e,t):(s=!e.$stable,Bm(e,r)),o=e}else e&&(zm(i,e),o={default:1});if(s)for(const a in r)!Iu(a)&&o[a]==null&&delete r[a]},pn=fb;function JT(i){return QT(i)}function QT(i,e){const t=Ga();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ti,insertStaticContent:_}=i,g=(E,U,F,Y=null,q=null,Q=null,se=void 0,te=null,oe=!!U.dynamicChildren)=>{if(E===U)return;E&&!Fs(E,U)&&(Y=Fe(E),X(E,q,Q,!0),E=null),U.patchFlag===-2&&(oe=!1,U.dynamicChildren=null);const{type:le,ref:Ee,shapeFlag:b}=U;switch(le){case Ya:m(E,U,F,Y);break;case bs:p(E,U,F,Y);break;case Zl:E==null&&M(U,F,Y,se);break;case Kn:V(E,U,F,Y,q,Q,se,te,oe);break;default:b&1?T(E,U,F,Y,q,Q,se,te,oe):b&6?$(E,U,F,Y,q,Q,se,te,oe):(b&64||b&128)&&le.process(E,U,F,Y,q,Q,se,te,oe,Qe)}Ee!=null&&q?Qs(Ee,E&&E.ref,Q,U||E,!U):Ee==null&&E&&E.ref!=null&&Qs(E.ref,null,Q,E,!0)},m=(E,U,F,Y)=>{if(E==null)n(U.el=a(U.children),F,Y);else{const q=U.el=E.el;U.children!==E.children&&c(q,U.children)}},p=(E,U,F,Y)=>{E==null?n(U.el=l(U.children||""),F,Y):U.el=E.el},M=(E,U,F,Y)=>{[E.el,E.anchor]=_(E.children,U,F,Y,E.el,E.anchor)},v=({el:E,anchor:U},F,Y)=>{let q;for(;E&&E!==U;)q=f(E),n(E,F,Y),E=q;n(U,F,Y)},x=({el:E,anchor:U})=>{let F;for(;E&&E!==U;)F=f(E),r(E),E=F;r(U)},T=(E,U,F,Y,q,Q,se,te,oe)=>{U.type==="svg"?se="svg":U.type==="math"&&(se="mathml"),E==null?C(U,F,Y,q,Q,se,te,oe):S(E,U,q,Q,se,te,oe)},C=(E,U,F,Y,q,Q,se,te)=>{let oe,le;const{props:Ee,shapeFlag:b,transition:y,dirs:N}=E;if(oe=E.el=o(E.type,Q,Ee&&Ee.is,Ee),b&8?u(oe,E.children):b&16&&L(E.children,oe,null,Y,q,jl(E,Q),se,te),N&&cr(E,null,Y,"created"),w(oe,E,E.scopeId,se,Y),Ee){for(const ie in Ee)ie!=="value"&&!$s(ie)&&s(oe,ie,null,Ee[ie],Q,Y);"value"in Ee&&s(oe,"value",null,Ee.value,Q),(le=Ee.onVnodeBeforeMount)&&Vn(le,Y,E)}N&&cr(E,null,Y,"beforeMount");const ne=eb(q,y);ne&&y.beforeEnter(oe),n(oe,U,F),((le=Ee&&Ee.onVnodeMounted)||ne||N)&&pn(()=>{le&&Vn(le,Y,E),ne&&y.enter(oe),N&&cr(E,null,Y,"mounted")},q)},w=(E,U,F,Y,q)=>{if(F&&d(E,F),Y)for(let Q=0;Q<Y.length;Q++)d(E,Y[Q]);if(q){let Q=q.subTree;if(U===Q||qm(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const se=q.vnode;w(E,se,se.scopeId,se.slotScopeIds,q.parent)}}},L=(E,U,F,Y,q,Q,se,te,oe=0)=>{for(let le=oe;le<E.length;le++){const Ee=E[le]=te?Ii(E[le]):jn(E[le]);g(null,Ee,U,F,Y,q,Q,se,te)}},S=(E,U,F,Y,q,Q,se)=>{const te=U.el=E.el;let{patchFlag:oe,dynamicChildren:le,dirs:Ee}=U;oe|=E.patchFlag&16;const b=E.props||at,y=U.props||at;let N;if(F&&ur(F,!1),(N=y.onVnodeBeforeUpdate)&&Vn(N,F,U,E),Ee&&cr(U,E,F,"beforeUpdate"),F&&ur(F,!0),(b.innerHTML&&y.innerHTML==null||b.textContent&&y.textContent==null)&&u(te,""),le?R(E.dynamicChildren,le,te,F,Y,jl(U,q),Q):se||J(E,U,te,null,F,Y,jl(U,q),Q,!1),oe>0){if(oe&16)k(te,b,y,F,q);else if(oe&2&&b.class!==y.class&&s(te,"class",null,y.class,q),oe&4&&s(te,"style",b.style,y.style,q),oe&8){const ne=U.dynamicProps;for(let ie=0;ie<ne.length;ie++){const re=ne[ie],Me=b[re],he=y[re];(he!==Me||re==="value")&&s(te,re,Me,he,q,F)}}oe&1&&E.children!==U.children&&u(te,U.children)}else!se&&le==null&&k(te,b,y,F,q);((N=y.onVnodeUpdated)||Ee)&&pn(()=>{N&&Vn(N,F,U,E),Ee&&cr(U,E,F,"updated")},Y)},R=(E,U,F,Y,q,Q,se)=>{for(let te=0;te<U.length;te++){const oe=E[te],le=U[te],Ee=oe.el&&(oe.type===Kn||!Fs(oe,le)||oe.shapeFlag&198)?h(oe.el):F;g(oe,le,Ee,null,Y,q,Q,se,!0)}},k=(E,U,F,Y,q)=>{if(U!==F){if(U!==at)for(const Q in U)!$s(Q)&&!(Q in F)&&s(E,Q,U[Q],null,q,Y);for(const Q in F){if($s(Q))continue;const se=F[Q],te=U[Q];se!==te&&Q!=="value"&&s(E,Q,te,se,q,Y)}"value"in F&&s(E,"value",U.value,F.value,q)}},V=(E,U,F,Y,q,Q,se,te,oe)=>{const le=U.el=E?E.el:a(""),Ee=U.anchor=E?E.anchor:a("");let{patchFlag:b,dynamicChildren:y,slotScopeIds:N}=U;N&&(te=te?te.concat(N):N),E==null?(n(le,F,Y),n(Ee,F,Y),L(U.children||[],F,Ee,q,Q,se,te,oe)):b>0&&b&64&&y&&E.dynamicChildren?(R(E.dynamicChildren,y,F,q,Q,se,te),(U.key!=null||q&&U===q.subTree)&&Hm(E,U,!0)):J(E,U,F,Ee,q,Q,se,te,oe)},$=(E,U,F,Y,q,Q,se,te,oe)=>{U.slotScopeIds=te,E==null?U.shapeFlag&512?q.ctx.activate(U,F,Y,se,oe):D(U,F,Y,q,Q,se,oe):G(E,U,oe)},D=(E,U,F,Y,q,Q,se)=>{const te=E.component=Mb(E,Y,q);if(Am(E)&&(te.ctx.renderer=Qe),Eb(te,!1,se),te.asyncDep){if(q&&q.registerDep(te,W,se),!E.el){const oe=te.subTree=wr(bs);p(null,oe,U,F),E.placeholder=oe.el}}else W(te,E,U,F,q,Q,se)},G=(E,U,F)=>{const Y=U.component=E.component;if(ub(E,U,F))if(Y.asyncDep&&!Y.asyncResolved){H(Y,U,F);return}else Y.next=U,Y.update();else U.el=E.el,Y.vnode=U},W=(E,U,F,Y,q,Q,se)=>{const te=()=>{if(E.isMounted){let{next:b,bu:y,u:N,parent:ne,vnode:ie}=E;{const P=Gm(E);if(P){b&&(b.el=ie.el,H(E,b,se)),P.asyncDep.then(()=>{E.isUnmounted||te()});return}}let re=b,Me;ur(E,!1),b?(b.el=ie.el,H(E,b,se)):b=ie,y&&Wl(y),(Me=b.props&&b.props.onVnodeBeforeUpdate)&&Vn(Me,ne,b,ie),ur(E,!0);const he=Zf(E),me=E.subTree;E.subTree=he,g(me,he,h(me.el),Fe(me),E,q,Q),b.el=he.el,re===null&&hb(E,he.el),N&&pn(N,q),(Me=b.props&&b.props.onVnodeUpdated)&&pn(()=>Vn(Me,ne,b,ie),q)}else{let b;const{el:y,props:N}=U,{bm:ne,m:ie,parent:re,root:Me,type:he}=E,me=eo(U);ur(E,!1),ne&&Wl(ne),!me&&(b=N&&N.onVnodeBeforeMount)&&Vn(b,re,U),ur(E,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(he);const P=E.subTree=Zf(E);g(null,P,F,Y,E,q,Q),U.el=P.el}if(ie&&pn(ie,q),!me&&(b=N&&N.onVnodeMounted)){const P=U;pn(()=>Vn(b,re,P),q)}(U.shapeFlag&256||re&&eo(re.vnode)&&re.vnode.shapeFlag&256)&&E.a&&pn(E.a,q),E.isMounted=!0,U=F=Y=null}};E.scope.on();const oe=E.effect=new sm(te);E.scope.off();const le=E.update=oe.run.bind(oe),Ee=E.job=oe.runIfDirty.bind(oe);Ee.i=E,Ee.id=E.uid,oe.scheduler=()=>Du(Ee),ur(E,!0),le()},H=(E,U,F)=>{U.component=E;const Y=E.vnode.props;E.vnode=U,E.next=null,YT(E,U.props,Y,F),ZT(E,U.children,F),Ei(),Vf(E),Ti()},J=(E,U,F,Y,q,Q,se,te,oe=!1)=>{const le=E&&E.children,Ee=E?E.shapeFlag:0,b=U.children,{patchFlag:y,shapeFlag:N}=U;if(y>0){if(y&128){ae(le,b,F,Y,q,Q,se,te,oe);return}else if(y&256){ce(le,b,F,Y,q,Q,se,te,oe);return}}N&8?(Ee&16&&De(le,q,Q),b!==le&&u(F,b)):Ee&16?N&16?ae(le,b,F,Y,q,Q,se,te,oe):De(le,q,Q,!0):(Ee&8&&u(F,""),N&16&&L(b,F,Y,q,Q,se,te,oe))},ce=(E,U,F,Y,q,Q,se,te,oe)=>{E=E||fs,U=U||fs;const le=E.length,Ee=U.length,b=Math.min(le,Ee);let y;for(y=0;y<b;y++){const N=U[y]=oe?Ii(U[y]):jn(U[y]);g(E[y],N,F,null,q,Q,se,te,oe)}le>Ee?De(E,q,Q,!0,!1,b):L(U,F,Y,q,Q,se,te,oe,b)},ae=(E,U,F,Y,q,Q,se,te,oe)=>{let le=0;const Ee=U.length;let b=E.length-1,y=Ee-1;for(;le<=b&&le<=y;){const N=E[le],ne=U[le]=oe?Ii(U[le]):jn(U[le]);if(Fs(N,ne))g(N,ne,F,null,q,Q,se,te,oe);else break;le++}for(;le<=b&&le<=y;){const N=E[b],ne=U[y]=oe?Ii(U[y]):jn(U[y]);if(Fs(N,ne))g(N,ne,F,null,q,Q,se,te,oe);else break;b--,y--}if(le>b){if(le<=y){const N=y+1,ne=N<Ee?U[N].el:Y;for(;le<=y;)g(null,U[le]=oe?Ii(U[le]):jn(U[le]),F,ne,q,Q,se,te,oe),le++}}else if(le>y)for(;le<=b;)X(E[le],q,Q,!0),le++;else{const N=le,ne=le,ie=new Map;for(le=ne;le<=y;le++){const Ae=U[le]=oe?Ii(U[le]):jn(U[le]);Ae.key!=null&&ie.set(Ae.key,le)}let re,Me=0;const he=y-ne+1;let me=!1,P=0;const de=new Array(he);for(le=0;le<he;le++)de[le]=0;for(le=N;le<=b;le++){const Ae=E[le];if(Me>=he){X(Ae,q,Q,!0);continue}let Te;if(Ae.key!=null)Te=ie.get(Ae.key);else for(re=ne;re<=y;re++)if(de[re-ne]===0&&Fs(Ae,U[re])){Te=re;break}Te===void 0?X(Ae,q,Q,!0):(de[Te-ne]=le+1,Te>=P?P=Te:me=!0,g(Ae,U[Te],F,null,q,Q,se,te,oe),Me++)}const ue=me?tb(de):fs;for(re=ue.length-1,le=he-1;le>=0;le--){const Ae=ne+le,Te=U[Ae],Re=U[Ae+1],Ce=Ae+1<Ee?Re.el||Re.placeholder:Y;de[le]===0?g(null,Te,F,Ce,q,Q,se,te,oe):me&&(re<0||le!==ue[re]?B(Te,F,Ce,2):re--)}}},B=(E,U,F,Y,q=null)=>{const{el:Q,type:se,transition:te,children:oe,shapeFlag:le}=E;if(le&6){B(E.component.subTree,U,F,Y);return}if(le&128){E.suspense.move(U,F,Y);return}if(le&64){se.move(E,U,F,Qe);return}if(se===Kn){n(Q,U,F);for(let b=0;b<oe.length;b++)B(oe[b],U,F,Y);n(E.anchor,U,F);return}if(se===Zl){v(E,U,F);return}if(Y!==2&&le&1&&te)if(Y===0)te.beforeEnter(Q),n(Q,U,F),pn(()=>te.enter(Q),q);else{const{leave:b,delayLeave:y,afterLeave:N}=te,ne=()=>{E.ctx.isUnmounted?r(Q):n(Q,U,F)},ie=()=>{Q._isLeaving&&Q[MT](!0),b(Q,()=>{ne(),N&&N()})};y?y(Q,ne,ie):ie()}else n(Q,U,F)},X=(E,U,F,Y=!1,q=!1)=>{const{type:Q,props:se,ref:te,children:oe,dynamicChildren:le,shapeFlag:Ee,patchFlag:b,dirs:y,cacheIndex:N}=E;if(b===-2&&(q=!1),te!=null&&(Ei(),Qs(te,null,F,E,!0),Ti()),N!=null&&(U.renderCache[N]=void 0),Ee&256){U.ctx.deactivate(E);return}const ne=Ee&1&&y,ie=!eo(E);let re;if(ie&&(re=se&&se.onVnodeBeforeUnmount)&&Vn(re,U,E),Ee&6)Se(E.component,F,Y);else{if(Ee&128){E.suspense.unmount(F,Y);return}ne&&cr(E,null,U,"beforeUnmount"),Ee&64?E.type.remove(E,U,F,Qe,Y):le&&!le.hasOnce&&(Q!==Kn||b>0&&b&64)?De(le,U,F,!1,!0):(Q===Kn&&b&384||!q&&Ee&16)&&De(oe,U,F),Y&&xe(E)}(ie&&(re=se&&se.onVnodeUnmounted)||ne)&&pn(()=>{re&&Vn(re,U,E),ne&&cr(E,null,U,"unmounted")},F)},xe=E=>{const{type:U,el:F,anchor:Y,transition:q}=E;if(U===Kn){_e(F,Y);return}if(U===Zl){x(E);return}const Q=()=>{r(F),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(E.shapeFlag&1&&q&&!q.persisted){const{leave:se,delayLeave:te}=q,oe=()=>se(F,Q);te?te(E.el,Q,oe):oe()}else Q()},_e=(E,U)=>{let F;for(;E!==U;)F=f(E),r(E),E=F;r(U)},Se=(E,U,F)=>{const{bum:Y,scope:q,job:Q,subTree:se,um:te,m:oe,a:le}=E;$f(oe),$f(le),Y&&Wl(Y),q.stop(),Q&&(Q.flags|=8,X(se,E,U,F)),te&&pn(te,U),pn(()=>{E.isUnmounted=!0},U)},De=(E,U,F,Y=!1,q=!1,Q=0)=>{for(let se=Q;se<E.length;se++)X(E[se],U,F,Y,q)},Fe=E=>{if(E.shapeFlag&6)return Fe(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const U=f(E.anchor||E.el),F=U&&U[xT];return F?f(F):U};let Ue=!1;const Ne=(E,U,F)=>{E==null?U._vnode&&X(U._vnode,null,null,!0):g(U._vnode||null,E,U,null,null,null,F),U._vnode=E,Ue||(Ue=!0,Vf(),Em(),Ue=!1)},Qe={p:g,um:X,m:B,r:xe,mt:D,mc:L,pc:J,pbc:R,n:Fe,o:i};return{render:Ne,hydrate:void 0,createApp:WT(Ne)}}function jl({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ur({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function eb(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Hm(i,e,t=!1){const n=i.children,r=e.children;if(Ge(n)&&Ge(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ii(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Hm(o,a)),a.type===Ya&&a.patchFlag!==-1&&(a.el=o.el),a.type===bs&&!a.el&&(a.el=o.el)}}function tb(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Gm(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gm(e)}function $f(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const nb=Symbol.for("v-scx"),ib=()=>ca(nb);function $l(i,e,t){return Vm(i,e,t)}function Vm(i,e,t=at){const{immediate:n,deep:r,flush:s,once:o}=t,a=qt({},t),l=e&&n||!e&&s!=="post";let c;if(vo){if(s==="sync"){const d=ib();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ti,d.resume=ti,d.pause=ti,d}}const u=en;a.call=(d,_,g)=>ii(d,u,_,g);let h=!1;s==="post"?a.scheduler=d=>{pn(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,_)=>{_?d():Du(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=dT(i,e,a);return vo&&(c?c.push(f):l&&f()),f}function rb(i,e,t){const n=this.proxy,r=At(i)?i.includes(".")?Wm(n,i):()=>n[i]:i.bind(n,n);let s;We(e)?s=e:(s=e.handler,t=e);const o=bo(this),a=Vm(r,s.bind(n),t);return o(),a}function Wm(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const sb=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Ji(e)}Modifiers`]||i[`${Ir(e)}Modifiers`];function ob(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&sb(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>At(u)?u.trim():u)),o.number&&(r=t.map(PE)));let a,l=n[a=Vl(e)]||n[a=Vl(Ji(e))];!l&&s&&(l=n[a=Vl(Ir(e))]),l&&ii(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ii(c,i,6,r)}}const ab=new WeakMap;function Xm(i,e,t=!1){const n=t?ab:e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!We(i)){const l=c=>{const u=Xm(c,e,!0);u&&(a=!0,qt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(vt(i)&&n.set(i,null),null):(Ge(s)?s.forEach(l=>o[l]=null):qt(o,s),vt(i)&&n.set(i,o),o)}function qa(i,e){return!i||!za(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(i,e[0].toLowerCase()+e.slice(1))||tt(i,Ir(e))||tt(i,e))}function Zf(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:g}=i,m=Ca(i);let p,M;try{if(t.shapeFlag&4){const x=r||n,T=x;p=jn(c.call(T,x,u,h,d,f,_)),M=a}else{const x=e;p=jn(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),M=e.props?a:lb(a)}}catch(x){no.length=0,Wa(x,i,1),p=wr(bs)}let v=p;if(M&&g!==!1){const x=Object.keys(M),{shapeFlag:T}=v;x.length&&T&7&&(s&&x.some(xu)&&(M=cb(M,s)),v=ws(v,M,!1,!0))}return t.dirs&&(v=ws(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Uu(v,t.transition),p=v,Ca(m),p}const lb=i=>{let e;for(const t in i)(t==="class"||t==="style"||za(t))&&((e||(e={}))[t]=i[t]);return e},cb=(i,e)=>{const t={};for(const n in i)(!xu(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function ub(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Jf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!qa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Jf(n,o,c):!0:!!o;return!1}function Jf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!qa(t,s))return!0}return!1}function hb({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const qm=i=>i.__isSuspense;function fb(i,e){e&&e.pendingBranch?Ge(i)?e.effects.push(...i):e.effects.push(i):_T(i)}const Kn=Symbol.for("v-fgt"),Ya=Symbol.for("v-txt"),bs=Symbol.for("v-cmt"),Zl=Symbol.for("v-stc"),no=[];let vn=null;function Jl(i=!1){no.push(vn=i?null:[])}function db(){no.pop(),vn=no[no.length-1]||null}let _o=1;function Qf(i,e=!1){_o+=i,i<0&&vn&&e&&(vn.hasOnce=!0)}function pb(i){return i.dynamicChildren=_o>0?vn||fs:null,db(),_o>0&&vn&&vn.push(i),i}function Ql(i,e,t,n,r,s){return pb(Ou(i,e,t,n,r,s,!0))}function Ym(i){return i?i.__v_isVNode===!0:!1}function Fs(i,e){return i.type===e.type&&i.key===e.key}const Km=({key:i})=>i??null,ua=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?At(i)||Xt(i)||We(i)?{i:Jn,r:i,k:e,f:!!t}:i:null);function Ou(i,e=null,t=null,n=0,r=null,s=i===Kn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Km(e),ref:e&&ua(e),scopeId:bm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jn};return a?(Fu(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),_o>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const wr=mb;function mb(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===NT)&&(i=bs),Ym(i)){const a=ws(i,e,!0);return t&&Fu(a,t),_o>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(i)]=a:vn.push(a)),a.patchFlag=-2,a}if(Ab(i)&&(i=i.__vccOpts),e){e=gb(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Eu(a)),vt(l)&&(Lu(l)&&!Ge(l)&&(l=qt({},l)),e.style=yu(l))}const o=At(i)?1:qm(i)?128:ST(i)?64:vt(i)?4:We(i)?2:0;return Ou(i,e,t,n,r,o,s,!0)}function gb(i){return i?Lu(i)||Nm(i)?qt({},i):i:null}function ws(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?vb(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Km(c),ref:e&&e.ref?t&&s?Ge(s)?s.concat(ua(e)):[s,ua(e)]:ua(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Kn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ws(i.ssContent),ssFallback:i.ssFallback&&ws(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Uu(u,l.clone(u)),u}function _b(i=" ",e=0){return wr(Ya,null,i,e)}function jn(i){return i==null||typeof i=="boolean"?wr(bs):Ge(i)?wr(Kn,null,i.slice()):Ym(i)?Ii(i):wr(Ya,null,String(i))}function Ii(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ws(i)}function Fu(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Fu(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Nm(e)?e._ctx=Jn:r===3&&Jn&&(Jn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Jn},t=32):(e=String(e),n&64?(t=16,e=[_b(e)]):t=8);i.children=e,i.shapeFlag|=t}function vb(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Eu([e.class,n.class]));else if(r==="style")e.style=yu([e.style,n.style]);else if(za(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ge(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Vn(i,e,t,n=null){ii(i,e,7,[t,n])}const xb=Dm();let Sb=0;function Mb(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||xb,s={uid:Sb++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new FE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fm(n,r),emitsOptions:Xm(n,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:n.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ob.bind(null,s),i.ce&&i.ce(s),s}let en=null;const yb=()=>en||Jn;let La,Bc;{const i=Ga(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};La=e("__VUE_INSTANCE_SETTERS__",t=>en=t),Bc=e("__VUE_SSR_SETTERS__",t=>vo=t)}const bo=i=>{const e=en;return La(i),i.scope.on(),()=>{i.scope.off(),La(e)}},ed=()=>{en&&en.scope.off(),La(null)};function jm(i){return i.vnode.shapeFlag&4}let vo=!1;function Eb(i,e=!1,t=!1){e&&Bc(e);const{props:n,children:r}=i.vnode,s=jm(i);qT(i,n,s,e),$T(i,r,t||e);const o=s?Tb(i,e):void 0;return e&&Bc(!1),o}function Tb(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,FT);const{setup:n}=t;if(n){Ei();const r=i.setupContext=n.length>1?wb(i):null,s=bo(i),o=To(n,i,0,[i.props,r]),a=tm(o);if(Ti(),s(),(a||i.sp)&&!eo(i)&&wm(i),a){if(o.then(ed,ed),e)return o.then(l=>{td(i,l)}).catch(l=>{Wa(l,i,0)});i.asyncDep=o}else td(i,o)}else $m(i)}function td(i,e,t){We(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:vt(e)&&(i.setupState=Sm(e)),$m(i)}function $m(i,e,t){const n=i.type;i.render||(i.render=n.render||ti);{const r=bo(i);Ei();try{BT(i)}finally{Ti(),r()}}}const bb={get(i,e){return kt(i,"get",""),i[e]}};function wb(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,bb),slots:i.slots,emit:i.emit,expose:e}}function Bu(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Sm(rT(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in to)return to[t](i)},has(e,t){return t in e||t in to}})):i.proxy}function Ab(i){return We(i)&&"__vccOpts"in i}const Cb=(i,e)=>hT(i,e,vo),Rb="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zc;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{zc=nd.createPolicy("vue",{createHTML:i=>i})}catch{}const Zm=zc?i=>zc.createHTML(i):i=>i,Pb="http://www.w3.org/2000/svg",Lb="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,id=pi&&pi.createElement("template"),Db={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?pi.createElementNS(Pb,i):e==="mathml"?pi.createElementNS(Lb,i):t?pi.createElement(i,{is:t}):pi.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>pi.createTextNode(i),createComment:i=>pi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>pi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{id.innerHTML=Zm(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=id.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ub=Symbol("_vtc");function Ib(i,e,t){const n=i[Ub];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const rd=Symbol("_vod"),Nb=Symbol("_vsh"),Ob=Symbol(""),Fb=/(?:^|;)\s*display\s*:/;function Bb(i,e,t){const n=i.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ha(n,a,"")}else for(const o in e)t[o]==null&&ha(n,o,"");for(const o in t)o==="display"&&(s=!0),ha(n,o,t[o])}else if(r){if(e!==t){const o=n[Ob];o&&(t+=";"+o),n.cssText=t,s=Fb.test(t)}}else e&&i.removeAttribute("style");rd in i&&(i[rd]=s?n.display:"",i[Nb]&&(n.display="none"))}const sd=/\s*!important$/;function ha(i,e,t){if(Ge(t))t.forEach(n=>ha(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=zb(i,e);sd.test(t)?i.setProperty(Ir(n),t.replace(sd,""),"important"):i[n]=t}}const od=["Webkit","Moz","ms"],ec={};function zb(i,e){const t=ec[e];if(t)return t;let n=Ji(e);if(n!=="filter"&&n in i)return ec[e]=n;n=nm(n);for(let r=0;r<od.length;r++){const s=od[r]+n;if(s in i)return ec[e]=s}return e}const ad="http://www.w3.org/1999/xlink";function ld(i,e,t,n,r,s=OE(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(ad,e.slice(6,e.length)):i.setAttributeNS(ad,e,t):t==null||s&&!rm(t)?i.removeAttribute(e):i.setAttribute(e,s?"":Cs(t)?String(t):t)}function cd(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Zm(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=rm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function kb(i,e,t,n){i.addEventListener(e,t,n)}function Hb(i,e,t,n){i.removeEventListener(e,t,n)}const ud=Symbol("_vei");function Gb(i,e,t,n,r=null){const s=i[ud]||(i[ud]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Vb(e);if(n){const c=s[e]=qb(n,r);kb(i,a,c,l)}else o&&(Hb(i,a,o,l),s[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function Vb(i){let e;if(hd.test(i)){e={};let n;for(;n=i.match(hd);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ir(i.slice(2)),e]}let tc=0;const Wb=Promise.resolve(),Xb=()=>tc||(Wb.then(()=>tc=0),tc=Date.now());function qb(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ii(Yb(n,t.value),e,5,[n])};return t.value=i,t.attached=Xb(),t}function Yb(i,e){if(Ge(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const fd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Kb=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?Ib(i,n,o):e==="style"?Bb(i,t,n):za(e)?xu(e)||Gb(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jb(i,e,n,o))?(cd(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ld(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!At(n))?cd(i,Ji(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),ld(i,e,n,o))};function jb(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&fd(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return fd(e)&&At(t)?!1:e in i}const $b=qt({patchProp:Kb},Db);let dd;function Zb(){return dd||(dd=JT($b))}const Jb=((...i)=>{const e=Zb().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=ew(n);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Qb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Qb(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function ew(i){return At(i)?document.querySelector(i):i}const tw={class:"wrapper"},nw={class:"captured-list"},iw=["src"],rw=yT({__name:"CuttedFigures",setup(i){function e(n){return`/chess/dist/imgs/${n.figureType}${n.figureColor}.png`}const t=sT([]);return Nt.subscribe(Tr.figureCaptured,n=>{const{detail:r}=n;t.value.push({figureType:r.capturedFigure.getType(),figureColor:r.capturedFigure.getColor()})}),(n,r)=>(Jl(),Ql("div",tw,[(Jl(!0),Ql(Kn,null,OT(t.value,s=>(Jl(),Ql("li",nw,[Ou("img",{class:"captured-figure",src:e(s)},null,8,iw)]))),256))]))}}),sw=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},ow=sw(rw,[["__scopeId","data-v-7d6b0c09"]]),aw=Jb(ow);aw.mount("#cuttedFigures");new yE(pE);
