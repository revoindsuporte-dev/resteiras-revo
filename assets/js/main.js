var h=document.getElementById('h'),nv=document.getElementById('nv'),lb=document.getElementById('lb');
function sc(){h.classList.toggle('s',scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
document.getElementById('mb').onclick=function(){nv.classList.toggle('o')};
document.querySelectorAll('#mn a').forEach(function(a){a.onclick=function(){nv.classList.remove('o')}});
document.querySelectorAll('.gg button').forEach(function(b){b.onclick=function(){lb.querySelector('img').src=b.dataset.i;lb.classList.add('o')}});
lb.onclick=function(){lb.classList.remove('o')};addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('o')});
