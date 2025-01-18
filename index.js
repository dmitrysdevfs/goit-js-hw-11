(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i="48294006-48b6aa90621f9de3d5d79819e",u="https://pixabay.com/api/",c=document.querySelector(".js-form"),a=document.querySelector(".js-gallery"),f=l=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${l.largeImageURL}">
        <img
          class="gallery-image"
          src="${l.webformatURL}"
          alt=""
        />
      </a>
    </li>
  `,d=l=>{l.preventDefault();const o=l.currentTarget.elements.search_query.value.trim();if(o===""){alert("The field must be filled!");return}console.log(o),fetch(`${u}?key=${i}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.total===0){alert("Sorry, there are no images matching your search query. Please try again!"),a.innerHTML="",c.reset();return}const s=t.hits.map(e=>f(e)).join("");console.log(s),a.innerHTML=s}).catch(t=>{console.log(t)})};console.log(a);c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
