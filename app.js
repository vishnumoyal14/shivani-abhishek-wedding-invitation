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
 {img:"ev-swaroochbhoj",cls:"c-bhoj",en:"Swarooch Bhoj",hi:"स्वरूचिभोज", enWhen:"Wednesday, 02 December 2026 • from 6.15 PM", hiWhen:"बुधवार, 02 दिसंबर 2026 • सांय 6.15 बजे से", enV:"Terapanth Sabha Bhawan, Sujangarh", hiV:"तेरापंथ सभा भवन, सूजानगढ़"}
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

/* ---------- event cards ---------- */
var evHost=document.getElementById("events");
EVENTS.forEach(function(e,i){
  var f=document.createElement("figure");
  f.className="card "+(i%2?"tilt-r":"tilt-l");
  f.innerHTML='<div class="card-stack" aria-hidden="true"></div>'+
    '<div class="art"><img src="./assets/'+e.img+'.webp" alt="'+e.en+'" loading="lazy"></div>'+
    '<figcaption class="card-text">'+
    '<strong class="card-title '+e.cls+'" data-en="'+e.en+'" data-hi="'+e.hi+'"></strong>'+
    '<span class="card-when" data-en="'+e.enWhen+'" data-hi="'+e.hiWhen+'"></span>'+
    '<span class="card-venue" data-en="'+e.enV+'" data-hi="'+e.hiV+'"></span></figcaption>';
  evHost.appendChild(f);
});

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

/* ---------- scalloped arch top ---------- */
(function(){
  var d="M0,240 L0,120 Q100,10 200,120 Q300,10 400,120 L400,240 Z";
  document.querySelectorAll(".arch-top .arch-gold,.arch-top .arch-white").forEach(function(p){p.setAttribute("d",d);});
  document.querySelector(".arch-top .arch-white").setAttribute("transform","translate(0,14)");
})();

/* ---------- music : Mangal Rang via YouTube ---------- */
var MUSIC_IDS=["z_e1d5_VVfw","Wm4KBCU7AXs","EF-7XiyKKKc"];
var ytPlayer=null,ytState="off",idIx=0;
function setPill(s){
  ytState=s;
  var pill=document.getElementById("musicPill");
  document.getElementById("musicNote").textContent=(s==="on")?"\u{1F3B5}":"\u{1F507}";
  pill.classList.toggle("playing",s==="on");
}
function mountYT(){
  if(ytPlayer||!window.YT||!YT.Player)return;
  ytPlayer=new YT.Player("yt-music-frame",{
    videoId:MUSIC_IDS[idIx],height:"100%",width:"100%",
    playerVars:{autoplay:1,mute:1,loop:1,playlist:MUSIC_IDS[idIx],playsinline:1,controls:1,rel:0},
    events:{
      onReady:function(e){
        try{e.target.unMute();e.target.setVolume(70);}catch(_){}
        e.target.playVideo();
        setTimeout(function(){
          var p=ytPlayer;if(!p||!p.getPlayerState)return;
          var playing=p.getPlayerState()===YT.PlayerState.PLAYING;
          if(playing&&!(p.isMuted&&p.isMuted())){setPill("on");}
          else setPill("off");
        },900);
      },
      onError:function(){
        idIx++;
        if(idIx<MUSIC_IDS.length&&ytPlayer){ytPlayer.loadVideoById(MUSIC_IDS[idIx]);}
      }
    }
  });
}
(function(){
  var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
  var old=window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady=function(){if(old)old();mountYT();};
  setTimeout(mountYT,2500);setTimeout(mountYT,6000);
})();
document.getElementById("musicPill").addEventListener("click",function(e){
  e.stopPropagation();
  if(!ytPlayer)return;
  if(ytState==="on"){ytPlayer.mute();setPill("off");}
  else{try{ytPlayer.unMute();ytPlayer.setVolume(70);}catch(_){ }ytPlayer.playVideo();setPill("on");}
});
/* tap-anywhere fallback for browsers that block autoplay with sound */
function tapStart(){
  if(ytPlayer&&ytState!=="on"){try{ytPlayer.unMute();ytPlayer.setVolume(70);}catch(_){ }ytPlayer.playVideo();setPill("on");}
  document.removeEventListener("pointerdown",tapStart);
}
document.addEventListener("pointerdown",tapStart);

/* ---------- scroll animations (GSAP if available) ---------- */
window.addEventListener("load",function(){
  if(!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);

  /* hero intro */
  gsap.from(".hero-blessing",{y:24,opacity:0,duration:1.1,ease:"power2.out",delay:.15});
  gsap.from(".hero-names",{y:44,opacity:0,scale:.94,duration:1.3,ease:"power3.out",delay:.35});
  gsap.from(".hero-sub",{y:26,opacity:0,duration:1,ease:"power2.out",delay:.75});
  gsap.from(".hero-date",{y:20,opacity:0,duration:1,ease:"power2.out",delay:.95});

  /* hero parallax out, temple parallax in */
  gsap.to(".hero-inner",{yPercent:-24,opacity:.15,ease:"none",
    scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:true}});
  gsap.fromTo(".temple-art",{yPercent:-10},{yPercent:0,ease:"none",
    scrollTrigger:{trigger:"#temple",start:"top bottom",end:"bottom top",scrub:true}});

  /* invitation */
  gsap.from(".pillar-l",{xPercent:-70,opacity:0,duration:1.2,ease:"power2.out",
    scrollTrigger:{trigger:"#invitation",start:"top 70%"}});
  gsap.from(".pillar-r",{xPercent:70,opacity:0,duration:1.2,ease:"power2.out",
    scrollTrigger:{trigger:"#invitation",start:"top 70%"}});
  gsap.from(".invite-inner > *",{y:34,opacity:0,stagger:.14,duration:.9,ease:"power2.out",
    scrollTrigger:{trigger:"#invitation",start:"top 62%"}});

  /* event cards */
  gsap.utils.toArray(".events .card").forEach(function(card){
    gsap.from(card,{y:90,opacity:0,rotate:0,duration:1,ease:"power3.out",
      scrollTrigger:{trigger:card,start:"top 82%"}});
  });

  /* wedding card lifts to reveal temple */
  var lift=gsap.timeline({scrollTrigger:{trigger:"#reveal",start:"top top",end:"bottom bottom",scrub:.6}});
  lift.to("#revealCard",{yPercent:-135,rotate:-7,ease:"power1.in",duration:1});
  gsap.fromTo(".reveal-art",{scale:1.12},{scale:1,ease:"none",
    scrollTrigger:{trigger:"#reveal",start:"top bottom",end:"bottom top",scrub:true}});

  /* courtyard parallax */
  gsap.fromTo(".courtyard-art",{yPercent:-10},{yPercent:0,ease:"none",
    scrollTrigger:{trigger:"#courtyard",start:"top bottom",end:"bottom top",scrub:true}});

  /* story */
  gsap.from(".story-head > *",{y:30,opacity:0,stagger:.16,duration:.9,ease:"power2.out",
    scrollTrigger:{trigger:"#story",start:"top 65%"}});
  gsap.from(".arch-panel",{y:80,opacity:0,scale:.96,duration:1.1,ease:"power3.out",
    scrollTrigger:{trigger:".arch-panel",start:"top 80%"}});
  gsap.from(".story-col",{y:44,opacity:0,stagger:.2,duration:.9,ease:"power2.out",
    scrollTrigger:{trigger:".story-cols",start:"top 85%"}});
  gsap.from(".story-lantern",{y:-60,opacity:0,duration:1.2,ease:"power2.out",
    scrollTrigger:{trigger:"#story",start:"top 70%"}});

  /* venue */
  gsap.from(".venue > *",{y:26,opacity:0,stagger:.09,duration:.8,ease:"power2.out",
    scrollTrigger:{trigger:"#venue",start:"top 70%"}});
});
})();
