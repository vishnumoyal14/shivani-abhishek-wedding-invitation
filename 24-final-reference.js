/* Shivani & Abhishek wedding invitation — original implementation */
(function(){
"use strict";

/* ---------- content ---------- */
var EVENTS=[
 {img:"ev-baan",   cls:"c-baan",   en:"Baan",   hi:"बान",          enWhen:"Monday, 30 November 2026 • 4.15 PM",   hiWhen:"सोमवार, 30 नवंबर 2026 • सांय 4.15 बजे",        enV:"Residence, Sujangarh",               hiV:"निवास स्थान, सूजानगढ़"},
 {img:"ev-mayra",  cls:"c-mayra",  en:"Mayra",  hi:"मायरा",         enWhen:"Tuesday, 01 December 2026 • 11.15 AM", hiWhen:"मंगलवार, 01 दिसंबर 2026 • सुबह 11.15 बजे",      enV:"Residence, Sujangarh",               hiV:"निवास स्थान, सूजानगढ़"},
 {img:"ev-mehndi", cls:"c-mehndi", en:"Mehndi", hi:"मेहंदी",        enWhen:"Tuesday, 01 December 2026 • 4.15 PM",  hiWhen:"मंगलवार, 01 दिसंबर 2026 • सांय 4.15 बजे",      enV:"Terapanth Sabha Bhawan, Sujangarh",  hiV:"तेरापंथ सभा भवन, सूजानगढ़"},
 {img:"ev-sangeet",cls:"c-sangeet",en:"Sangeet",hi:"संगीत संध्या",  enWhen:"Tuesday, 01 December 2026 • Evening",  hiWhen:"मंगलवार, 01 दिसंबर 2026 • रात्रि वेला में",    enV:"Terapanth Sabha Bhawan, Sujangarh",  hiV:"तेरापंथ सभा भवन, सूजानगढ़"},
 {img:"ev-baraat", cls:"c-baraat", en:"Baraat", hi:"बारात आगमन",    enWhen:"Wednesday, 02 December 2026 • 4.15 PM, by bus from Jodhpur", hiWhen:"बुधवार, 02 दिसंबर 2026 • सांय 4.15 बजे, बस द्वारा जोधपुर से", enV:"Terapanth Sabha Bhawan, Sujangarh", hiV:"तेरापंथ सभा भवन, सूजानगढ़"},
 {img:"ev-swaroochbhoj",cls:"c-bhoj",en:"Swarooch Bhoj",hi:"स्वरूचिभोज", enWhen:"Wednesday, 02 December 2026 • from 6.15 PM", hiWhen:"बुधवार, 02 दिसंबर 2026 • सांय 6.15 बजे से", enV:"Terapanth Sabha Bhawan, Sujangarh", hiV:"तेरापंथ सभा भवन, सूजानगढ़"},
 {img:"ev-wedding",cls:"c-wedding",en:"Wedding",hi:"पाणिग्रहण संस्कार", enWhen:"Wednesday, 02 December 2026 • Shubh Muhurat (Night)", hiWhen:"बुधवार, 02 दिसंबर 2026 • रात्रि शुभ लग्न में", enV:"Terapanth Sabha Bhawan, Sujangarh", hiV:"तेरापंथ सभा भवन, सूजानगढ़"}
];
var STORY=[
 {n:"Shivani",hn:"आयुष्मती शिवानी",
  lines:[["Granddaughter of Late Smt. Geeta Devi – Late Shri Sohanlal Ji Songara","सुपौत्री – स्व. गीता देवी – स्व. सोहनलाल जी सोनगरा"],
         ["Daughter of Smt. Rita Devi – Late Shri Pawan Kumar Ji Songara","सुपुत्री – श्रीमती रीता देवी – स्व. पवन कुमार जी सोनगरा"]],
  town:["Sujangarh","निवासी – सूजानगढ़"]},
 {n:"Abhishek",hn:"आयुष्मान् अभिषेक",
  lines:[["Grandson of Late Smt. Godavari Devi – Late Shri Pukhraj Ji Solanki","सुपौत्र – स्व. गोदावरी देवी – स्व. पुखराज जी सोलंकी"],
         ["Son of Smt. Vimla Devi – Shri Lalaram Ji Solanki","सुपुत्र – श्रीमती विमला देवी – लालाराम जी सोलंकी"]],
  town:["Harsolav, Nagaur (currently Jodhpur)","निवासी – हरसोलाव, नागौर (हाल निवास जोधपुर)"]}
];
var WEDDING_AT=new Date("2026-12-02T18:15:00+05:30").getTime();

/* ---------- event card deck ---------- */
var assetNames={"rich-baan.mp4": "1-rich-baan.mp4", "rich-baraat.mp4": "2-rich-baraat.mp4", "rich-bhoj.mp4": "3-rich-bhoj.mp4", "rich-mayra.mp4": "4-rich-mayra.mp4", "rich-mehndi.mp4": "5-rich-mehndi.mp4", "rich-sangeet.mp4": "6-rich-sangeet.mp4", "rich-wedding.mp4": "7-rich-wedding.mp4", "rich-baan.webp": "8-rich-baan.webp", "rich-baraat.webp": "9-rich-baraat.webp", "rich-bhoj.webp": "10-rich-bhoj.webp", "rich-mayra.webp": "11-rich-mayra.webp", "rich-mehndi.webp": "12-rich-mehndi.webp", "rich-sangeet.webp": "13-rich-sangeet.webp", "rich-wedding.webp": "14-rich-wedding.webp", "rich-courtyard.webp": "15-rich-courtyard.webp", "rich-gateway.webp": "16-rich-gateway.webp", "rich-invitation.webp": "17-rich-invitation.webp", "rich-room.webp": "18-rich-room.webp", "rich-room-portrait.webp": "19-rich-room-portrait.webp", "rich-temple.webp": "20-rich-temple.webp", "temple-cutout.png": "21-temple-cutout.png"};
function asset(n){return "./assets/"+(assetNames[n]||n);}
var deckEl=document.getElementById("deck");
var deckMode=!!deckEl;
var deck=deckEl||document.getElementById("events");
EVENTS.forEach(function(e,i){
  var f=document.createElement("figure");
  f.className="card";
  if(deckMode)f.style.zIndex=i+1;
  f.innerHTML='<div class="card-stack" aria-hidden="true"></div>'+
    '<div class="art"><video data-src="'+asset('rich-'+({'ev-swaroochbhoj':'bhoj'}[e.img]||e.img.replace('ev-',''))+'.mp4')+'" poster="'+asset('rich-'+({'ev-swaroochbhoj':'bhoj'}[e.img]||e.img.replace('ev-',''))+'.webp')+'" muted loop playsinline disableremoteplayback disablepictureinpicture controlslist="nodownload noremoteplayback" preload="none" aria-label="'+e.en+'"></video></div>'+
    '<figcaption class="card-text">'+
    '<strong class="card-title '+e.cls+'" data-en="'+e.en+'" data-hi="'+e.hi+'"></strong>'+
    '<span class="card-when" data-en="'+e.enWhen+'" data-hi="'+e.hiWhen+'"></span>'+
    '<span class="card-venue" data-en="'+e.enV+'" data-hi="'+e.hiV+'"></span></figcaption>';
  deck.appendChild(f);
});
var cards=Array.prototype.slice.call(deck.children);
function playV(v){ if(v&&v.paused){var p=v.play(); if(p&&p.catch)p.catch(function(){});} }
function pauseV(v){ if(v&&!v.paused)v.pause(); }
function ensureV(v){ if(v&&!v.getAttribute("src")){var s=v.getAttribute("data-src");if(s){v.setAttribute("src",s);v.load();}} }
/* legacy static layout: play whichever card is on screen */
if(!deckMode&&"IntersectionObserver" in window){
  var vio=new IntersectionObserver(function(es){
    es.forEach(function(en){var v=en.target.querySelector("video");if(!v)return;en.isIntersecting?(ensureV(v),playV(v)):pauseV(v);});
  },{threshold:.35});
  cards.forEach(function(c){vio.observe(c);});
}

/* ---------- story columns ---------- */
var sc=document.getElementById("storyCols");
STORY.forEach(function(p){
  var d=document.createElement("div");d.className="story-col";
  var h='<h3 data-en="'+p.n+'" data-hi="'+p.hn+'"></h3>';
  p.lines.forEach(function(l){h+='<p data-en="'+l[0]+'" data-hi="'+l[1]+'"></p>';});
  h+='<p class="town" data-en="'+p.town[0]+'" data-hi="'+p.town[1]+'"></p>';
  d.innerHTML=h;sc.appendChild(d);
});

/* ---------- language ---------- */
function applyLang(lang){
  document.body.classList.toggle("lang-hi",lang==="hi");
  document.body.classList.toggle("lang-en",lang!=="hi");
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-en]").forEach(function(el){
    var v=el.getAttribute(lang==="hi"?"data-hi":"data-en");
    if(v!=null)el.innerHTML=v;
  });
  document.getElementById("langHi").classList.toggle("on",lang==="hi");
  document.getElementById("langEn").classList.toggle("on",lang!=="hi");
}
document.getElementById("langHi").addEventListener("click",function(){applyLang("hi");});
document.getElementById("langEn").addEventListener("click",function(){applyLang("en");});
applyLang("hi");

/* ---------- petals ---------- */
document.querySelectorAll(".petals").forEach(function(host){
  for(var i=0;i<10;i++){
    var s=document.createElement("i");
    s.style.left=(Math.random()*100)+"%";
    s.style.animationDuration=(9+Math.random()*9)+"s";
    s.style.animationDelay=(-Math.random()*14)+"s";
    var sc2=.6+Math.random()*.8;s.style.width=(14*sc2)+"px";s.style.height=(11*sc2)+"px";
    host.appendChild(s);
  }
});

/* ---------- countdown ---------- */
function pad(n){return String(n).padStart(2,"0");}
function tick(){
  var d=Math.max(0,WEDDING_AT-Date.now());
  document.getElementById("cdD").textContent=pad(Math.floor(d/864e5));
  document.getElementById("cdH").textContent=pad(Math.floor(d%864e5/36e5));
  document.getElementById("cdM").textContent=pad(Math.floor(d%36e5/6e4));
  document.getElementById("cdS").textContent=pad(Math.floor(d%6e4/1e3));
}
tick();setInterval(tick,1000);

/* Inline music: muted autoplay where allowed, sound after a visitor gesture. */
var MUSIC_IDS=["z_e1d5_VVfw","Wm4KBCU7AXs","EF-7XiyKKKc"];
var ytPlayer=null,idIx=0,gesture=false,wantsSound=true,ytBooted=false;
var pill=document.getElementById("musicPill");
function syncMusic(){var on=false;try{on=ytPlayer&&ytPlayer.getPlayerState()===1&&!ytPlayer.isMuted();}catch(_){}pill.classList.toggle("playing",!!on);pill.setAttribute("aria-pressed",on?"true":"false");}
function startMusic(){if(!ytPlayer||!ytPlayer.playVideo)return;try{if(wantsSound){ytPlayer.unMute();ytPlayer.setVolume(70);}else ytPlayer.mute();ytPlayer.playVideo();}catch(_){}setTimeout(syncMusic,350);}
function mountYT(){if(ytPlayer||!window.YT||!YT.Player)return;ytPlayer=new YT.Player("yt-music-frame",{videoId:MUSIC_IDS[idIx],height:"100%",width:"100%",playerVars:{autoplay:1,mute:1,loop:1,playlist:MUSIC_IDS[idIx],playsinline:1,controls:1,rel:0,origin:location.origin},events:{onReady:function(e){e.target.getIframe().setAttribute("allow","autoplay; encrypted-media; picture-in-picture");e.target.getIframe().setAttribute("referrerpolicy","strict-origin-when-cross-origin");startMusic();},onStateChange:function(e){pill.dataset.playerState=e.data;syncMusic();},onError:function(e){pill.dataset.playerError=e.data;if(++idIx<MUSIC_IDS.length){ytPlayer.loadVideoById(MUSIC_IDS[idIx]);}else{syncMusic();}},onAutoplayBlocked:function(){try{ytPlayer.mute();ytPlayer.playVideo();}catch(_){}syncMusic();}}});}
function bootYT(){if(ytBooted)return;ytBooted=true;window.onYouTubeIframeAPIReady=mountYT;var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";document.head.appendChild(tag);setTimeout(mountYT,3000);}
window.addEventListener("load",bootYT);
document.addEventListener("pointerdown",function(){gesture=true;bootYT();if(wantsSound)startMusic();},{passive:true});
pill.addEventListener("click",function(e){e.stopPropagation();gesture=true;wantsSound=!pill.classList.contains("playing");if(wantsSound)startMusic();else{try{ytPlayer.mute();}catch(_){}syncMusic();}});
/* One scroll position controls the camera and incoming-card stack. */
var opening=document.getElementById('opening'),events=document.getElementById('events'),court=document.getElementById('courtyard');
var entry=.55,unit=1.05,travel=.68,exit=.9,N=cards.length,total=entry+(N-1)*unit+unit+exit;
events.style.height=((total+1)*100)+'svh';
var lastIx=-10,queued=false;
var clamp=function(x,a,b){return Math.min(b,Math.max(a,x));};
var smooth=function(a,b,x){x=clamp((x-a)/(b-a),0,1);return x*x*(3-2*x);};
var el={cut:document.querySelector('.temple-cutout'),temple:document.querySelector('.opening-temple'),gate:document.querySelector('.opening-gateway'),invite:document.querySelector('.opening-invite'),names:document.querySelector('.hero-inner'),hint:document.querySelector('.scroll-hint'),reveal:document.querySelector('.reveal-art'),deck:document.getElementById('deck'),court:document.querySelector('.courtyard-art')};
function render(){queued=false;var vh=innerHeight,y=scrollY;
 var op=clamp(y/(opening.offsetHeight-vh),0,1),grow=smooth(0,.28,op);
 el.names.style.opacity=1-smooth(.08,.20,op);el.names.style.transform='translateY('+(-55*smooth(.05,.22,op))+'px)';el.hint.style.opacity=1-smooth(0,.06,op);
 el.cut.style.transform='translate(-50%,'+(79*(1-grow))+'vh) scale('+(.50+.50*grow)+')';el.cut.style.opacity=1-smooth(.32,.33,op);
 el.temple.style.opacity=smooth(.28,.32,op);el.temple.style.transform='scale('+(1+.12*smooth(.34,.46,op))+') translateY('+(-12*smooth(.38,.55,op))+'%)';
 el.gate.style.transform='translateY('+(105*(1-smooth(.38,.59,op)))+'%) scale('+(1+.10*smooth(.55,.7,op))+')';
 el.invite.style.transform='translateY('+(105*(1-smooth(.62,.80,op)))+'%)';
 var text=document.querySelector('.invite-inner');text.style.opacity=smooth(.78,.86,op);
 var t=(y-events.offsetTop)/vh;document.querySelector('.events-sticky').style.backgroundColor='rgba(249,248,246,'+smooth(.02,.5,t)+')';var phase=t-entry;var endStart=entry+(N-1)*unit+unit;
 cards.forEach(function(c,i){var local=i===0?clamp(t/entry,0,1):clamp((phase-(i-1)*unit-.30)/travel,0,1);var cy=(1-local)*(vh+30);c.style.transform='translate3d(0,'+cy+'px,0)';});
 var leaving=smooth(endStart,endStart+exit,t);el.deck.style.transform='translate3d(0,'+(-leaving*(vh*1.55))+'px,0)';el.reveal.style.opacity=smooth(endStart-.15,endStart+.35,t);el.reveal.style.transform='translateY('+(24*(1-leaving))+'%) scale('+(1.18-.18*leaving)+')';
 var ix=clamp(Math.floor((phase-.30)/unit)+1,0,N-1);if(t<0||t>total+1)ix=-1;
 if(ix!==lastIx){lastIx=ix;cards.forEach(function(c,i){var v=c.querySelector('video');if(ix>=0&&i>=ix-1&&i<=ix+1){ensureV(v);playV(v);}else pauseV(v);});}
 var cp=clamp((y-court.offsetTop+vh*.2)/(court.offsetHeight-vh*.5),0,1);el.court.style.transform='scale('+(1.13-.13*cp)+') translateY('+(-6+12*cp)+'%)';
}
function request(){if(!queued){queued=true;requestAnimationFrame(render);}}
addEventListener('scroll',request,{passive:true});addEventListener('resize',request);addEventListener('load',request);request();
document.querySelectorAll('video').forEach(function(v){v.disableRemotePlayback=true;v.disablePictureInPicture=true;});

})();
