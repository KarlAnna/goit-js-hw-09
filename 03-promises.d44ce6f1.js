var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("iQIUW");const i=document.querySelector("input[name=delay]"),l=document.querySelector("input[name=step]"),u=document.querySelector("input[name=amount]"),a=document.querySelector("form");let s=null;a.addEventListener("submit",(function(e){e.preventDefault();let t=i.value;const n=u.value;let o=l.value,a=0,d=Number(t),c=Number(o);s=setInterval((()=>{var e,t;a!=n?(a+=1,(e=a,t=d,new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),d+=c):clearInterval(s)}),o)}));
//# sourceMappingURL=03-promises.d44ce6f1.js.map
