var h=document.getElementById('h'),nv=document.getElementById('nv'),lb=document.getElementById('lb');
function sc(){h.classList.toggle('s',scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
document.getElementById('mb').onclick=function(){nv.classList.toggle('o')};
document.querySelectorAll('#mn a').forEach(function(a){a.onclick=function(){nv.classList.remove('o')}});
document.querySelectorAll('.gg button').forEach(function(b){b.onclick=function(){lb.querySelector('img').src=b.dataset.i;lb.classList.add('o')}});
lb.onclick=function(){lb.classList.remove('o')};addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('o')});
document.getElementById('f').onsubmit=function(e){e.preventDefault();var d=new FormData(e.target);
var t='Olá, REVO! Gostaria de um orçamento.\nNome: '+d.get('n')+'\nTelefone: '+d.get('t')+'\nE-mail: '+d.get('e')+'\nMensagem: '+d.get('m');
window.open('https://wa.me/5541998536600?text=Ol%C3%A1%2C%20REVO!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.'.split('?')[0]+'?text='+encodeURIComponent(t),'_blank','noopener')};