var bodyEl = document.querySelector("body");
var linkEl = document.createElement("a");
linkEl.setAttribute("href", "index.html");
var logoEl = document.createElement("div");
logoEl.className = "logo";
linkEl.appendChild(logoEl);
bodyEl.appendChild(linkEl);

var link2El = document.createElement("a");
link2El.setAttribute("href", "index.html");
var h1El = document.createElement("h1");
h1El.innerHTML = "SMÅ SUNNE RETTER";
link2El.appendChild(h1El);
bodyEl.appendChild(link2El);

var miniMenyEl = document.createElement("div");
miniMenyEl.className = "miniMeny";

var link3El = document.createElement("a");
link3El.setAttribute("target", "_blank");
link3El.setAttribute("href", "https://www.instagram.com/smasunneretter/?hl=nb");
var divInstragramEl = document.createElement("div");
var instagramBilde = document.createElement("img");
instagramBilde.src = "media/instagram.png";
instagramBilde.style.width = "100%";
divInstragramEl.appendChild(instagramBilde);
divInstragramEl.className = "instagram";
link3El.appendChild(divInstragramEl);
miniMenyEl.appendChild(link3El);

var link4El = document.createElement("a");
link4El.setAttribute("href", "index.html");
var hjemEl = document.createElement("div");
hjemEl.innerHTML = "Hjem";
hjemEl.className = "rute";
link4El.appendChild(hjemEl);
miniMenyEl.appendChild(link4El);

var link5El = document.createElement("a");
link5El.setAttribute("href", "omoss.html");
var omossEl = document.createElement("div");
omossEl.innerHTML = "Om oss";
omossEl.className = "rute";
link5El.appendChild(omossEl);
miniMenyEl.appendChild(link5El);

bodyEl.appendChild(miniMenyEl);

/*
<a href="index.html"><div class="logo"></div></a>
<a href="index.html"><h1>SMÅ SUNNE RETTER</h1></a>
<div class="miniMeny">
  <a target="_blank" href="https://www.instagram.com/smasunneretter/?hl=nb"><div class="instagram"></div></a>
  <a href="index.html"><div class="rute">Hjem</div></a>
  <a href="omoss.html"><div class="rute">Om oss</div></a>
</div>
*/
