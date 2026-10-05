(() => {
  'use strict';
  const scene=document.querySelector('.fauna-story');
  const stage=document.querySelector('.fauna-sticky');
  const ending=document.querySelector('.brand-ending');
  const palette=document.querySelector('.color-strip');
  const letter=document.querySelector('.love-letter');
  const fragments=[...document.querySelectorAll('[data-fragment]')];
  const logoParts=[...document.querySelectorAll('[data-logo-part]')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const clamp=x=>Math.max(0,Math.min(1,x));
  const ease=x=>{x=clamp(x);return x*x*(3-2*x)};
  let queued=false;
  function render(){
    queued=false;
    const rect=scene.getBoundingClientRect();
    const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header'))||82;
    const p=reduced.matches?1:clamp((header-rect.top)/Math.max(1,rect.height-innerHeight+header));
    stage.style.setProperty('--join',ease((p-.04)/.55));
    stage.style.setProperty('--arrive',ease((p-.18)/.55));
    stage.style.setProperty('--bloom',ease((p-.35)/.5));
    stage.style.setProperty('--progress',p);
    stage.style.setProperty('--complete',reduced.matches?1:ease((p-.82)/.06));
    fragments.forEach((el,i)=>{const delay=.08+(i%4)*.045+Math.floor(i/4)*.035;el.style.setProperty('--piece',reduced.matches?1:ease((p-delay)/.55));});
    logoParts.forEach((el,i)=>el.style.setProperty('--piece',reduced.matches?1:ease((p-(.05+i*.045))/.46)));
    const er=ending.getBoundingClientRect();
    ending.style.setProperty('--end-progress',reduced.matches?1:ease((innerHeight-er.top)/(Math.min(innerHeight,er.height)*.85)));
    const pr=palette.getBoundingClientRect();
    palette.style.setProperty('--chip-round',reduced.matches?0:60*ease((innerHeight-pr.top)/(innerHeight*.7)));
    if(letter){const lr=letter.getBoundingClientRect();letter.style.setProperty('--letter-flow',reduced.matches?.5:clamp((innerHeight-lr.top)/(innerHeight+lr.height)));}
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(render)}}
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',schedule);render();
  const lines=[...letter.querySelectorAll('.letter-line, p:not(.eyebrow), .love-signature')];
  if('IntersectionObserver' in window&&!reduced.matches){
    lines.forEach((el,i)=>{el.classList.add('letter-wait');el.style.setProperty('--letter-delay',`${(i%2)*130}ms`)});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('letter-wait');observer.unobserve(entry.target)}}),{threshold:.5});
    lines.forEach(el=>observer.observe(el));
    reduced.addEventListener('change',()=>{if(reduced.matches){lines.forEach(el=>el.classList.remove('letter-wait'));observer.disconnect()}});
  }
})();
