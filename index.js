import{S as n}from"./assets/vendor-B-WyX8ve.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <figure class="gallery-figure">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
          <figcaption class="image-stats">
            <div class="stat-item">
              <p class="stat-label">Likes</p>
              <p class="stat-value">${t.likes}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Views</p>
              <p class="stat-value">${t.views}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Comments</p>
              <p class="stat-value">${t.comments}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Downloads</p>
              <p class="stat-value">${t.downloads}</p>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  `,p="48294006-48b6aa90621f9de3d5d79819e",d="https://pixabay.com/api/",m=t=>{const a=new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},c=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),f=t=>{t.preventDefault();const a=t.currentTarget.elements.search_query.value.trim();if(a===""){alert("The field must be filled!");return}m(a).then(s=>{if(s.total===0){alert("Sorry, there are no images matching your search query. Please try again!"),i.innerHTML="",c.reset();return}const l=s.hits.map(r=>u(r)).join("");i.innerHTML=l,new n(".gallery a",{captionsData:"alt",captionDellay:250}).refresh()}).catch(s=>{console.log(s)})};c.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
