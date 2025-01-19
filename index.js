import{i as c,S as m}from"./assets/vendor-De63neY_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=t=>`
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
  `,d="48294006-48b6aa90621f9de3d5d79819e",f="https://pixabay.com/api/",g=t=>{const a=new URLSearchParams({key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${a}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},i=document.querySelector(".js-form"),n=document.querySelector(".js-gallery"),u={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"},h=t=>{t.preventDefault();const a=t.currentTarget.elements.search_query.value.trim();if(a===""){c.show({message:"The field must be filled!",...u});return}g(a).then(r=>{if(r.total===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",...u}),n.innerHTML="",i.reset();return}const l=r.hits.map(s=>p(s)).join("");n.innerHTML=l,i.reset(),new m(".gallery a",{captionsData:"alt",captionDellay:250}).refresh()}).catch(r=>{console.log(r)})};i.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
