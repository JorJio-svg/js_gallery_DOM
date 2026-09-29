var e=document.querySelector("#largeImg");document.querySelector("#thumbs").addEventListener("click",function(r){r.preventDefault();var t=r.target;switch(t.tagName){case"IMG":e.src=t.parentNode.href;break;case"A":e.src=t.href}});
//# sourceMappingURL=index.79a8885f.js.map
