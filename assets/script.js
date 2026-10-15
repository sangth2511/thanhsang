const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);

// Chế độ sáng/tối
$('#theme').onclick=()=>{
  document.documentElement.classList.toggle('dark');
  try{localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch(e){}
};

// Menu điện thoại
$('#burger').onclick=()=>$('#menu').classList.toggle('open');
$$('#menu a').forEach(a=>a.addEventListener('click',()=>$('#menu').classList.remove('open')));

// Lọc theo chủ đề + tìm kiếm (dùng cho Bài viết, Hình ảnh, Video)
let cur='all';
function apply(){
  const q=($('#search')?$('#search').value:'').toLowerCase().trim();
  $$('.item').forEach(el=>{
    const okT=cur==='all'||el.dataset.t===cur;
    const okS=!q||(el.dataset.s||'').includes(q);
    el.style.display=(okT&&okS)?'':'none';
  });
}
$$('.filter button').forEach(b=>b.onclick=()=>{
  $$('.filter button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');cur=b.dataset.f;apply();
});
if($('#search'))$('#search').oninput=apply;

// Phóng to ảnh
$$('.gallery img,.content img').forEach(i=>i.onclick=()=>{$('#lbimg').src=i.src;$('#lb').classList.add('open')});
$('#lb').onclick=()=>$('#lb').classList.remove('open');
