!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var i=o("h6c0i"),r=document.querySelector("input[name=delay]"),a=document.querySelector("input[name=step]"),u=document.querySelector("input[name=amount]"),l=document.querySelector("form"),c=null;l.addEventListener("submit",(function(e){e.preventDefault();var n=r.value,t=u.value,o=a.value,l=0,d=Number(n),f=Number(o);c=setInterval((function(){var e,n;l!=t?((e=l+=1,n=d,new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),d+=f):clearInterval(c)}),o)}))}();
//# sourceMappingURL=03-promises.6a1532d6.js.map