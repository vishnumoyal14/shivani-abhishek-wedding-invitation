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
var deckEl=document.getElementById("deck");
var deckMode=!!deckEl;
var deck=deckEl||document.getElementById("events");
EVENTS.forEach(function(e,i){
  var f=document.createElement("figure");
  f.className="card "+(i%2?"tilt-r":"tilt-l");
  if(deckMode)f.style.zIndex=EVENTS.length-i;
  f.innerHTML='<div class="card-stack" aria-hidden="true"></div>'+
    '<div class="art"><video src="./assets/'+e.img+'.mp4" poster="./assets/'+e.img+'.webp" muted loop playsinline preload="metadata" aria-label="'+e.en+'"></video></div>'+
    '<figcaption class="card-text">'+
    '<strong class="card-title '+e.cls+'" data-en="'+e.en+'" data-hi="'+e.hi+'"></strong>'+
    '<span class="card-when" data-en="'+e.enWhen+'" data-hi="'+e.hiWhen+'"></span>'+
    '<span class="card-venue" data-en="'+e.enV+'" data-hi="'+e.hiV+'"></span></figcaption>';
  deck.appendChild(f);
});
var cards=Array.prototype.slice.call(deck.children);
function playV(v){ if(v&&v.paused){var p=v.play(); if(p&&p.catch)p.catch(function(){});} }
function pauseV(v){ if(v&&!v.paused)v.pause(); }
/* legacy static layout: play whichever card is on screen */
if(!deckMode&&"IntersectionObserver" in window){
  var vio=new IntersectionObserver(function(es){
    es.forEach(function(en){var v=en.target.querySelector("video");if(!v)return;en.isIntersecting?playV(v):pauseV(v);});
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
  if(!window.gsap||!window.ScrollTrigger){
    document.body.classList.add("no-anim");
    cards.forEach(function(c){var v=c.querySelector("video");if(v){v.autoplay=true;playV(v);}});
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* hero intro */
  gsap.from(".hero-blessing",{y:24,opacity:0,duration:1.1,ease:"power2.out",delay:.15});
  gsap.from(".hero-names",{y:44,opacity:0,scale:.94,duration:1.3,ease:"power3.out",delay:.35});
  gsap.from(".hero-sub",{y:26,opacity:0,duration:1,ease:"power2.out",delay:.75});
  gsap.from(".hero-date",{y:20,opacity:0,duration:1,ease:"power2.out",delay:.95});

  /* hero parallax out */
  gsap.to(".hero-inner",{yPercent:-24,opacity:.15,ease:"none",
    scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:true}});

  /* temple grows from the sky as it enters, then keeps breathing while pinned */
  gsap.fromTo(".temple-art",{scale:.55},{scale:1.14,ease:"none",
    scrollTrigger:{trigger:"#temple",start:"top bottom",end:"bottom bottom",scrub:true}});

  /* invitation */
  gsap.from(".pillar-l",{xPercent:-70,opacity:0,duration:1.2,ease:"power2.out",
    scrollTrigger:{trigger:"#invitation",start:"top 70%"}});
  gsap.from(".pillar-r",{xPercent:70,opacity:0,duration:1.2,ease:"power2.out",
    scrollTrigger:{trigger:"#invitation",start:"top 70%"}});
  gsap.from(".invite-inner > *",{y:34,opacity:0,stagger:.14,duration:.9,ease:"power2.out",
    scrollTrigger:{trigger:"#invitation",start:"top 62%"}});

  /* ---------- event deck : cards lift away one by one, last reveals temple ---------- */
  if(!deckMode){
    /* legacy static layout on old HTML: simple entrances */
    gsap.utils.toArray(".events .card").forEach(function(card){
      gsap.from(card,{y:90,opacity:0,rotate:0,duration:1,ease:"power3.out",
        scrollTrigger:{trigger:card,start:"top 82%"}});
    });
  }else{
  var N=cards.length;
  var ENTRY=.6,UNIT=1.05,LIFT=.7,SETTLE=1.25;
  var TOTAL=ENTRY+UNIT*N+SETTLE;
  document.getElementById("events").style.height=(TOTAL*100)+"dvh";

  cards.forEach(function(c,i){
    gsap.set(c,{rotation:(i%2?1.8:-1.8),transformOrigin:"50% 60%"});
    if(i>0)gsap.set(c,{scale:.94,filter:"brightness(.93)"});
  });
  gsap.set(".reveal-art",{opacity:0,scale:1.14});

  var lastActive=-1;
  function setActive(ix){
    if(ix===lastActive)return;
    lastActive=ix;
    cards.forEach(function(c,i){
      var v=c.querySelector("video");if(!v)return;
      if(i===ix||i===ix+1)playV(v);else pauseV(v);
    });
  }

  var tl=gsap.timeline({scrollTrigger:{
    trigger:"#events",start:"top top",end:"bottom bottom",scrub:.5,
    onUpdate:function(self){
      var t=self.progress*TOTAL;
      var ix=t<ENTRY?0:Math.min(N-1,Math.floor((t-ENTRY)/UNIT));
      setActive(ix);
    },
    onLeave:function(){cards.forEach(function(c){pauseV(c.querySelector("video"));});},
    onLeaveBack:function(){cards.forEach(function(c){pauseV(c.querySelector("video"));});lastActive=-1;}
  }});

  /* deck rises into view */
  tl.from("#deck",{y:"62vh",opacity:0,ease:"power1.out",duration:ENTRY},0);
  /* each card lifts up and away, next one grows into place */
  for(var i=0;i<N;i++){
    var at=ENTRY+i*UNIT;
    tl.to(cards[i],{yPercent:-165,rotation:(i%2?10:-10),ease:"power1.in",duration:LIFT},at);
    if(i+1<N)tl.to(cards[i+1],{scale:1,filter:"brightness(1)",ease:"power1.out",duration:LIFT},at);
  }
  /* final card lifts: temple scene fades in beneath, then settles */
  var wedAt=ENTRY+(N-1)*UNIT;
  tl.to(".reveal-art",{opacity:1,ease:"power1.out",duration:LIFT},wedAt);
  tl.to(".reveal-art",{scale:1,ease:"none",duration:LIFT+SETTLE},wedAt);
  }

  /* courtyard parallax */
  gsap.fromTo(".courtyard-art",{yPercent:-11},{yPercent:0,ease:"none",
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
