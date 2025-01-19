(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i=o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt=""
        />
      </a>
    </li>
  `,u="48294006-48b6aa90621f9de3d5d79819e",f="https://pixabay.com/api/",m=o=>{const s=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},l=document.querySelector(".js-form"),c=document.querySelector(".js-gallery"),d=o=>{o.preventDefault();const s=o.currentTarget.elements.search_query.value.trim();if(s===""){alert("The field must be filled!");return}m(s).then(t=>{if(t.total===0){alert("Sorry, there are no images matching your search query. Please try again!"),c.innerHTML="",l.reset();return}const a=t.hits.map(e=>i(e)).join("");c.innerHTML=a}).catch(t=>{console.log(t)})};l.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
