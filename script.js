(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.classList.add('js');
  const story = document.querySelector('.origin');
  const stage = document.querySelector('.origin-stage');
  const chapters = [...document.querySelectorAll('.chapter')];
  const dots = [...document.querySelectorAll('.chapter-dots span')];
  const ribbon = document.querySelector('.type-ribbon div');
  const root = document.documentElement;
  const clamp = (value, min=0, max=1) => Math.max(min, Math.min(max, value));
  const board = document.querySelector('.tile-board');
  let queued = false;
  function renderScroll() {
    queued=false;
    const scrollMax = root.scrollHeight-window.innerHeight;
    root.style.setProperty('--scroll', scrollMax>0?clamp(window.scrollY/scrollMax):0);
    if(reduced.matches)return;
    const rect=story.getBoundingClientRect();
    const header=parseFloat(getComputedStyle(root).getPropertyValue('--header'))||82;
    const p=clamp((header-rect.top)/(rect.height-window.innerHeight+header));
    const chapter=p<.32?0:p<.64?1:2;
    chapters.forEach((el,i)=>{el.classList.toggle('active',i===chapter);el.setAttribute('aria-hidden',i!==chapter?'true':'false');});
    dots.forEach((el,i)=>el.classList.toggle('active',i===chapter));
    stage.style.setProperty('--leaf-scale', 1+.25*clamp(p/.55));
    stage.style.setProperty('--leaf-opacity',1-clamp((p-.55)/.15));
    stage.style.setProperty('--frame-opacity',clamp((p-.22)/.12)*(1-clamp((p-.6)/.15)));
    stage.style.setProperty('--frame-turn',(clamp((p-.28)/.3)*90)+'deg');
    stage.style.setProperty('--pattern-reveal',(clamp((p-.54)/.42)*78)+'%');
    stage.style.setProperty('--pattern-turn',(-12*(1-clamp((p-.54)/.42)))+'deg');
    const ribbonRect=ribbon.parentElement.getBoundingClientRect();
    ribbon.style.transform=`translateX(${-clamp((window.innerHeight-ribbonRect.top)/(window.innerHeight+ribbonRect.height))*220}px)`;
    const photo=document.querySelector('.material-photo');
    if(photo){const pr=photo.getBoundingClientRect(),progress=clamp((window.innerHeight-pr.top)/(window.innerHeight+pr.height));photo.style.setProperty('--photo-drift',`${(progress-.5)*30}px`);}
    const hero=document.querySelector('.hero');
    if(hero.getBoundingClientRect().bottom>0) {
      const y=clamp(window.scrollY,0,700);
      document.querySelector('.garden-board').style.transform=`translateY(${y*.06}px) rotate(${-7+y*.009}deg)`;
      document.querySelector('.garden-square').style.transform=`translateY(${-y*.07}px) rotate(${8-y*.008}deg)`;
    }
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(renderScroll);}}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  reduced.addEventListener('change',()=>{chapters.forEach(el=>el.removeAttribute('aria-hidden'));renderScroll();});
  renderScroll();
  if('IntersectionObserver' in window && !reduced.matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.remove('waiting');observer.unobserve(entry.target);}
    }),{threshold:.12});
    document.querySelectorAll('.reveal,.tile').forEach(el=>{el.classList.add('waiting');observer.observe(el);});
  }
  const colors=[['Verde tajá','#214D3C'],['Cal','#F3ECDD'],['Rosa folha','#E8A6B7'],['Argila','#B85F43'],['Sálvia','#97A68C'],['Areia','#D9C7A7'],['Carvão','#292E29'],['Vinho nervura','#78344C'],['Verde lima','#C5D56A']];
  const strip=document.querySelector('.color-strip');
  colors.forEach(([name,hex])=>{
    const button=document.createElement('button');button.type='button';button.className='color-chip';button.style.setProperty('--color',hex);button.setAttribute('aria-label',`Copiar ${name}: ${hex}`);
    button.innerHTML=`<span class="pigment" aria-hidden="true"></span><span class="color-name">${name}</span><span class="hex">${hex}</span>`;
    button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(hex);document.querySelector('.copy-status').textContent=`${name} — ${hex} copiado.`;}catch{document.querySelector('.copy-status').textContent=`${name}: ${hex}. Selecione o código para copiar.`;}});
    strip.appendChild(button);
  });
})();
