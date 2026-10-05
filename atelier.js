(() => {
  'use strict';
  const base=['#F3ECDD','#214D3C','#E8A6B7','#97A68C','#78344C'];
  const colorNames=['Fundo','Forma principal','Contraponto','Detalhe','Nervura'];
  const p=(d,a)=>({d,a});
  const designs=[
    {id:'jardim',name:'Jardim modular',description:'A folha geométrica que deu origem à Tajá.',paths:[p('M0 0Q50 0 50 50Q0 50 0 0Z',1),p('M50 50Q100 50 100 100Q50 100 50 50Z',2),p('M100 0Q100 50 50 50Q50 0 100 0Z',3),p('M0 100Q0 50 50 50Q50 100 0 100Z',4)]},
    {id:'amazonas',name:'Rio Amazonas',description:'Um rio sinuoso atravessa o módulo. Gire as peças e descubra afluentes.',paths:[p('M0 0H100V23C75 48 22 8 0 36Z',1),p('M0 36C22 8 75 48 100 23V62C73 86 30 48 0 76Z',2),p('M0 76C30 48 73 86 100 62V100H0Z',3),p('M0 43C26 19 70 55 100 32V39C70 62 26 26 0 50Z',4)]},
    {id:'copacabana',name:'Ondas de Copa',description:'Curvas em preto e cal, inspiradas no ritmo da calçada de Copacabana.',paths:[p('M0 0H100V12C75 12 75 38 50 38S25 12 0 12Z',1),p('M0 25C25 25 25 51 50 51S75 25 100 25V38C75 38 75 64 50 64S25 38 0 38Z',2),p('M0 51C25 51 25 77 50 77S75 51 100 51V64C75 64 75 90 50 90S25 64 0 64Z',1),p('M0 77C25 77 25 103 50 103S75 77 100 77V100H0Z',3),p('M0 18C25 18 25 44 50 44S75 18 100 18V21C75 21 75 47 50 47S25 21 0 21Z',4)]},
    {id:'taja',name:'Folha de tajá',description:'Uma folha ampla com nervuras de cor. Faça um jardim de folhas em várias direções.',paths:[p('M50 6C37 26 7 27 9 57C11 82 40 92 50 74C60 92 89 82 91 57C93 27 63 26 50 6Z',1),p('M50 6V74C60 92 89 82 91 57C93 27 63 26 50 6Z',2),p('M48 25H52V78H48Z M48 42L24 59L27 63L52 45Z M52 42L76 59L73 63L48 45Z M48 58L25 72L28 76L52 61Z M52 58L75 72L72 76L48 61Z',4),p('M3 94H97V98H3Z',3)]},
    {id:'vitoria',name:'Vitória-régia',description:'Círculos flutuantes, recortes e pétalas. Um lago em cada quadrado.',paths:[p('M50 5A45 45 0 1 1 5 50H50Z',1),p('M50 16A34 34 0 1 1 16 50H50Z',2),p('M50 30A20 20 0 1 1 30 50H50Z',3),p('M48 9H52V40H48Z M60 43L87 29L89 33L62 47Z M59 56L88 71L86 75L57 60Z M47 61H51V92H47Z',4)]},
    {id:'igarape',name:'Igarapé',description:'Arcos que nascem dos cantos e viram caminhos quando as peças se encontram.',paths:[p('M0 0H100A100 100 0 0 1 0 100Z',1),p('M0 0H76A76 76 0 0 1 0 76Z',2),p('M0 0H52A52 52 0 0 1 0 52Z',3),p('M0 0H28A28 28 0 0 1 0 28Z',4)]},
    {id:'encontro',name:'Encontro das águas',description:'Dois fluxos, duas cores e uma faixa de encontro. Alterne as direções para criar ondas.',paths:[p('M0 0H100V50C75 5 25 95 0 50Z',1),p('M0 50C25 95 75 5 100 50V100H0Z',2),p('M0 43C25 88 75 -2 100 43V57C75 12 25 102 0 57Z',3),p('M0 48C25 93 75 3 100 48V52C75 7 25 97 0 52Z',4)]},
    {id:'estrela',name:'Estrela do norte',description:'Uma rosa dos ventos geométrica, com quatro áreas independentes.',paths:[p('M50 0L64 36L100 50L64 64L50 100L36 64L0 50L36 36Z',1),p('M50 0V50H0L36 36Z M50 100V50H100L64 64Z',2),p('M50 25L75 50L50 75L25 50Z',3),p('M50 40L60 50L50 60L40 50Z',4)]},
    {id:'vento',name:'Vento no jardim',description:'Pás curvas se encontram no centro. O giro muda a sensação de movimento.',paths:[p('M50 50C-10 50 0 0 50 0Z',1),p('M50 50C50 -10 100 0 100 50Z',2),p('M50 50C110 50 100 100 50 100Z',3),p('M50 50C50 110 0 100 0 50Z',4)]},
    {id:'trama',name:'Trama brasileira',description:'Faixas cruzadas, cheios e vazios. Faça o padrão parecer tecido.',paths:[p('M0 8H100V28H0Z M0 72H100V92H0Z',1),p('M8 0H28V100H8Z M72 0H92V100H72Z',2),p('M36 0H64V100H36Z',3),p('M0 36H100V64H0Z',4)]},
    {id:'sementes',name:'Sementes',description:'Gotas, brotos e espaços de respiro. Uma composição leve, com pequenos encontros.',paths:[p('M22 3C5 21 5 40 22 40C39 40 39 21 22 3Z',1),p('M78 60C61 78 61 97 78 97C95 97 95 78 78 60Z',2),p('M78 3C61 21 61 40 78 40C95 40 95 21 78 3Z',3),p('M22 60C5 78 5 97 22 97C39 97 39 78 22 60Z',4)]}
  ];
  const palettes={jardim:{name:'Jardim',colors:base,copy:'Verde profundo, rosa folha e cal.'},nervura:{name:'Nervura',colors:['#F3ECDD','#78344C','#E8A6B7','#D9C7A7','#214D3C'],copy:'Vinho e rosa, com contraste de verde.'},sol:{name:'Sol',colors:['#F3ECDD','#214D3C','#C5D56A','#97A68C','#78344C'],copy:'Lima, cal e verde: pequenos pontos de luz.'},barro:{name:'Barro',colors:['#F3ECDD','#B85F43','#E8A6B7','#D9C7A7','#78344C'],copy:'Argila, rosa e areia: a matéria encontra a folha.'}};
  const byId=id=>designs.find(d=>d.id===id)||designs[0];
  const board=document.querySelector('.tile-board');
  let selected=0,tool='select',scope='all',swapFrom=null,history=[];
  const fresh=()=>({design:'jardim',rotation:0,colors:[...base],seed:Math.random(),overrides:{}});
  let tiles=Array.from({length:16},fresh);
  try{const saved=JSON.parse(localStorage.getItem('taja-atelier-v1'));if(Array.isArray(saved)&&saved.length===16&&saved.every(t=>t&&typeof t.design==='string'&&Number.isFinite(t.rotation)&&Number.isFinite(t.seed)&&Array.isArray(t.colors)&&t.colors.length===5&&t.colors.every(c=>/^#[0-9a-f]{6}$/i.test(c))))tiles=saved;}catch{}
  tiles.forEach(t=>{t.overrides=Object.fromEntries(Object.entries(t.overrides||{}).filter(([k,v])=>/^\d+$/.test(k)&&/^#[0-9a-f]{6}$/i.test(v)));});
  const tell=text=>document.querySelector('.live-status').textContent=text;
  function remember(){history.push(JSON.stringify(tiles));if(history.length>40)history.shift();document.querySelector('#undo').disabled=false;}
  function store(){try{localStorage.setItem('taja-atelier-v1',JSON.stringify(tiles));}catch{}}
  function rnd(seed){let s=Math.floor(seed*2147483646)+1;return ()=>{s=s*16807%2147483647;return(s-1)/2147483646;};}
  function randomPaths(seed){
    const r=rnd(seed),bend=10+r()*70,neck=30+r()*40,edge=10+r()*25;
    return [p(`M0 0H100V${edge}C${bend} ${neck} ${100-bend} ${100-neck} 0 ${100-edge}Z`,1),p(`M0 ${edge}C${bend} ${neck} ${100-bend} ${100-neck} 100 ${100-edge}V100H0Z`,2),p(`M0 ${edge+7}C${bend} ${neck+15} ${100-bend} ${100-neck-15} 100 ${100-edge-7}V${100-edge+5}C${100-bend} ${100-neck+5} ${bend} ${neck-5} 0 ${edge-5}Z`,3),p(`M${neck} ${neck}a${8+r()*14} ${8+r()*14} 0 1 0 .1 0Z`,4)];
  }
  function art(t,preview=false){const ds=t.design==='livre'?randomPaths(t.seed):byId(t.design).paths;return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true"><g transform="rotate(${t.rotation%360} 50 50)"><rect width="100" height="100" fill="${t.overrides?.[0]||t.colors[0]}" data-area="0" data-region="0"/>${ds.map((shape,i)=>`<path d="${shape.d}" fill="${t.overrides?.[i+1]||t.colors[shape.a]}" data-area="${shape.a}" data-region="${i+1}"/>`).join('')}</g></svg>`;}
  function render(){
    board.innerHTML=tiles.map((t,i)=>`<button type="button" class="tile atelier-tile ${i===selected?'selected':''} ${i===swapFrom?'swap-source':''}" data-tile="${i}" aria-pressed="${i===selected}" aria-label="Peça ${i+1}, ${t.design==='livre'?'forma livre':byId(t.design).name}, rotação ${t.rotation%360} graus">${art(t)}<span class="piece-number">${i+1}</span></button>`).join('');
    board.dataset.tool=tool;
    const tile=tiles[selected];
    document.querySelector('#selected-label').textContent=`Peça ${selected+1} · ${tile.rotation%360}°`;
    document.querySelector('#board-title').textContent=new Set(tiles.map(t=>t.design)).size===1?(tile.design==='livre'?'Formas livres':byId(tile.design).name):'Jardim de encontros';
    document.querySelector('#design-select').value=tile.design==='livre'?'livre':tile.design;
    document.querySelector('#design-description').textContent=tile.design==='livre'?'Curvas criadas agora. Cada nova geração é um desenho diferente.':byId(tile.design).description;
    document.querySelectorAll('[data-design]').forEach(b=>{const active=b.dataset.design===tile.design;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    document.querySelectorAll('[data-area-color]').forEach(input=>{const val=tile.colors[Number(input.dataset.areaColor)];input.value=val;input.parentElement.querySelector('.area-hex').textContent=val.toUpperCase();});
    store();
  }
  const targets=()=>scope==='all'?tiles:[tiles[selected]];
  const animateTurn=indices=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;indices.forEach(i=>{const svg=board.querySelector(`[data-tile="${i}"] svg`);if(svg?.animate)svg.animate([{transform:'rotate(-90deg)'},{transform:'rotate(0deg)'}],{duration:350,easing:'cubic-bezier(.2,.8,.3,1)'});});};
  function changeDesign(id){remember();targets().forEach(t=>{t.design=id;t.seed=Math.random();t.overrides={};});render();tell((id==='livre'?'Forma livre':byId(id).name)+' aplicado '+(scope==='all'?'ao mosaico.':'à peça selecionada.'));}
  const select=document.querySelector('#design-select');
  select.innerHTML=designs.map(d=>`<option value="${d.id}">${d.name}</option>`).join('')+'<option value="livre">Forma livre · gerada agora</option>';
  select.addEventListener('change',()=>changeDesign(select.value));
  const gallery=document.querySelector('.design-gallery');
  gallery.innerHTML=designs.map(d=>`<button type="button" data-design="${d.id}" aria-pressed="false" aria-label="Escolher ${d.name}">${art({design:d.id,rotation:0,colors:d.id==='copacabana'?['#F3ECDD','#292E29','#292E29','#E8A6B7','#97A68C']:base})}<span>${d.name}</span></button>`).join('');
  gallery.addEventListener('click',event=>{const button=event.target.closest('[data-design]');if(button)changeDesign(button.dataset.design);});
  document.querySelector('.area-colors').innerHTML=colorNames.map((name,i)=>`<label class="area-color"><input type="color" data-area-color="${i}" value="${base[i]}" aria-label="Cor de ${name}"><span>${name}<small class="area-hex">${base[i]}</small></span></label>`).join('');
  let coloring=false;
  document.querySelectorAll('[data-area-color]').forEach(input=>{
    input.addEventListener('input',()=>{if(!coloring){remember();coloring=true;}targets().forEach(t=>{const area=Number(input.dataset.areaColor);t.colors[area]=input.value;const paths=t.design==='livre'?randomPaths(t.seed):byId(t.design).paths;Object.keys(t.overrides).forEach(k=>{if((k==='0'?0:paths[Number(k)-1]?.a)===area)delete t.overrides[k];});});render();});
    input.addEventListener('change',()=>{coloring=false;tell('Cores atualizadas.');});
  });
  document.querySelectorAll('[data-scope]').forEach(b=>b.addEventListener('click',()=>{scope=b.dataset.scope;document.querySelectorAll('[data-scope]').forEach(other=>{other.classList.toggle('active',other===b);other.setAttribute('aria-pressed',String(other===b));});tell(scope==='all'?'As próximas mudanças vão para todas as peças.':'As próximas mudanças vão somente para a peça selecionada.');}));
  const hints={select:'Toque em uma peça para editar. Use “Girar” para girar com um toque.',rotate:'Cada toque gira a peça 90°. Você pode combinar as direções livremente.',paint:'Escolha a cor do pincel e toque na área que quer pintar.',swap:'Toque em duas peças para trocar suas posições.'};
  document.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>{tool=b.dataset.tool;swapFrom=null;document.querySelectorAll('[data-tool]').forEach(other=>{other.classList.toggle('active',other===b);other.setAttribute('aria-pressed',String(other===b));});document.querySelector('#board-hint').textContent=hints[tool];render();}));
  board.addEventListener('click',event=>{
    const button=event.target.closest('[data-tile]');if(!button)return;
    const i=Number(button.dataset.tile);selected=i;
    if(tool==='rotate'){remember();tiles[i].rotation=(tiles[i].rotation+90)%360;tell(`Peça ${i+1} girada para ${tiles[i].rotation}°.`);}
    if(tool==='paint'){
      const region=event.target.closest('[data-area]');
      if(region){remember();const a=Number(region.dataset.area),n=Number(region.dataset.region),color=document.querySelector('#paint-color').value;targets().forEach(t=>t.overrides[n]=color);tell(`${colorNames[a]} pintado ${scope==='all'?'em todas as peças.':`na peça ${i+1}.`}`);}
      else tell('Toque diretamente em uma área do desenho para pintar.');
    }
    if(tool==='swap'){
      if(swapFrom===null){swapFrom=i;tell(`Peça ${i+1} escolhida. Toque na outra peça.`);}
      else{remember();[tiles[swapFrom],tiles[i]]=[tiles[i],tiles[swapFrom]];tell(`Peças ${swapFrom+1} e ${i+1} trocadas.`);swapFrom=null;}
    }
    render();if(tool==='rotate')animateTurn([i]);board.querySelector(`[data-tile="${i}"]`).focus({preventScroll:true});
  });
  document.querySelector('#rotate-piece').addEventListener('click',()=>{remember();tiles[selected].rotation=(tiles[selected].rotation+90)%360;render();animateTurn([selected]);tell('Peça selecionada girada 90°.');});
  board.addEventListener('keydown',event=>{const moves={ArrowLeft:-1,ArrowRight:1,ArrowUp:-4,ArrowDown:4};if(!(event.key in moves))return;event.preventDefault();selected=(selected+moves[event.key]+16)%16;render();board.querySelector(`[data-tile="${selected}"]`).focus({preventScroll:true});});
  document.querySelector('#rotate-all').addEventListener('click',()=>{remember();tiles.forEach(t=>t.rotation=(t.rotation+90)%360);render();animateTurn(tiles.map((t,i)=>i));tell('Todas as peças giradas 90°.');});
  document.querySelector('#undo').addEventListener('click',()=>{if(!history.length)return;tiles=JSON.parse(history.pop());document.querySelector('#undo').disabled=!history.length;swapFrom=null;render();tell('Última alteração desfeita.');});
  document.querySelectorAll('[data-palette]').forEach(b=>b.addEventListener('click',()=>{remember();const pal=palettes[b.dataset.palette];targets().forEach(t=>{t.colors=[...pal.colors];t.overrides={};});document.querySelector('#combination-name').textContent=pal.name;document.querySelector('#combination-copy').textContent=pal.copy;document.querySelectorAll('[data-palette]').forEach(other=>{other.classList.toggle('active',other===b);other.setAttribute('aria-pressed',String(other===b));});render();tell('Combinação '+pal.name+' aplicada.');}));
  document.querySelector('#random-arrangement').addEventListener('click',()=>{remember();for(let i=tiles.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[tiles[i],tiles[j]]=[tiles[j],tiles[i]];}tiles.forEach(t=>t.rotation=Math.floor(Math.random()*4)*90);render();tell('Posições e giros misturados.');});
  document.querySelector('#random-forms').addEventListener('click',()=>changeDesign('livre'));
  document.querySelector('#surprise').addEventListener('click',()=>{remember();const pal=Object.values(palettes)[Math.floor(Math.random()*4)];tiles.forEach(t=>{t.design=Math.random()<.22?'livre':designs[Math.floor(Math.random()*designs.length)].id;t.seed=Math.random();t.rotation=Math.floor(Math.random()*4)*90;t.colors=[...pal.colors];t.overrides={};});render();tell('Uma composição inédita de formas, cores e giros.');});
  let exportUrl=null,exportContent='';
  function saveFile(content,filename,type){if(exportUrl)URL.revokeObjectURL(exportUrl);exportContent=content;exportUrl=URL.createObjectURL(new Blob([content],{type}));document.querySelector('#export-link').href=exportUrl;document.querySelector('#export-preview').innerHTML=content;document.querySelector('#export-source').value=content;document.querySelector('#export-source').hidden=true;document.querySelector('#export-status').textContent='';document.querySelector('#export-dialog').showModal();}
  document.querySelector('#close-export').addEventListener('click',()=>document.querySelector('#export-dialog').close());
  document.querySelector('#copy-svg').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(exportContent);document.querySelector('#export-status').textContent='SVG copiado.';}catch{const source=document.querySelector('#export-source');source.hidden=false;source.focus();source.select();document.querySelector('#export-status').textContent='O desenho está selecionado abaixo. Use Copiar no seu dispositivo.';}});
  document.querySelector('#download-mosaic').addEventListener('click',()=>{
    const out=tiles.map((t,i)=>`<g transform="translate(${i%4*102} ${Math.floor(i/4)*102})"><g clip-path="url(#tile-clip)">${art(t).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')}</g></g>`).join('');
    saveFile(`<svg xmlns="http://www.w3.org/2000/svg" width="1632" height="1632" viewBox="0 0 408 408"><title>Mosaico autoral Tajá</title><defs><clipPath id="tile-clip"><rect width="100" height="100"/></clipPath></defs><rect width="408" height="408" fill="#F3ECDD"/>${out}</svg>`,'meu-jardim-taja.svg','image/svg+xml');tell('Seu desenho foi salvo em SVG.');
  });
  render();
  /* Tilt follows the pointer only on devices with a precise pointer. */
  const hero=document.querySelector('.hero-garden');
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--tilt-x',((e.clientY-r.top)/r.height-.5)*-7+'deg');hero.style.setProperty('--tilt-y',((e.clientX-r.left)/r.width-.5)*7+'deg');});hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--tilt-x','0deg');hero.style.setProperty('--tilt-y','0deg');});}
  document.querySelectorAll('.color-chip').forEach(button=>button.addEventListener('click',()=>{const color=getComputedStyle(button).getPropertyValue('--color').trim();document.querySelector('.ending-pattern').style.setProperty('--glow-color',color);}));
})();
