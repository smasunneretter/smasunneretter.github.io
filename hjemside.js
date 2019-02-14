var matvarer = ["Egg", "Pasta", "Kylling", "Bacon", "Løk", "Margarin", "Nudler", "Skinke", "Grønnsaker", "Ost", "Frukt", "Agurk", "Gulrot"];
matvarer.sort();

var tilgjengeligeMatvarer = [];

var infoEl = document.querySelector(".info");
var muligeMatvarerEl = document.querySelector("#muligeMatvarer");
var dineMatvarerEl = document.querySelector("#dineMatvarer");

for (var i = 0; i < matvarer.length; i++) {
  var valgMatvare = document.createElement("option");
  valgMatvare.value = matvarer[i];
  valgMatvare.innerHTML = matvarer[i];
  muligeMatvarerEl.appendChild(valgMatvare);
}

var leggTilMatvareKnappEl = document.querySelector("#leggTilMatvareKnapp");
leggTilMatvareKnappEl.addEventListener("click", leggMatvareTilListe);

function leggMatvareTilListe() {
  var riktig = "feil";
  var korrekt = 0;
  for (var i = 0; i < matvarer.length; i++) {
    if (muligeMatvarerEl.value === matvarer[i]) {
      korrekt++;
      if (tilgjengeligeMatvarer.length > 0) {
        var test = 0;
        for (var j = 0; j < tilgjengeligeMatvarer.length; j++) {
          if (muligeMatvarerEl.value != tilgjengeligeMatvarer[j]) {
            test++;
          }
        }
        if (test === tilgjengeligeMatvarer.length) {
          tilgjengeligeMatvarer.push(muligeMatvarerEl.value);
          riktig = "rett";
        }
        else {
          alert("Det er ikke nødvendig å legge inn samme matvare flere ganger!");
        }

      }
      else {
        tilgjengeligeMatvarer.push(muligeMatvarerEl.value);
        riktig = "rett";
      }
    }
  }
  if (muligeMatvarerEl.value === "") {
    korrekt++;
    alert("Du må legge inn noe!");
  }
  if (korrekt === 0) {
    alert("Du må legge inn en matvare som eksisterer i programmet!");
  }

  muligeMatvarerEl.value = "";

  if (riktig === "rett") {
    dineMatvarerEl.innerHTML = "<p class='underoverskrifter'>Dine matvarer:</p>";
    for (var i = 0; i < tilgjengeligeMatvarer.length; i++) {
      var fjernMatvareKnappEl = document.createElement("button");
      fjernMatvareKnappEl.setAttribute("class", "fjernMatvareKnapp");
      fjernMatvareKnappEl.setAttribute("id", tilgjengeligeMatvarer[i]);
      fjernMatvareKnappEl.innerHTML = "X";
      fjernMatvareKnappEl.addEventListener("click", fjernMatvarerFraListe);
      dineMatvarerEl.appendChild(fjernMatvareKnappEl);
      var nyMatvare = document.createElement("p");
      nyMatvare.style.display = "inline";
      nyMatvare.innerHTML = tilgjengeligeMatvarer[i] + "<br>";
      dineMatvarerEl.appendChild(nyMatvare);
    }
    var mellomRomTilKnapp = document.createElement("p");
    dineMatvarerEl.appendChild(mellomRomTilKnapp);
    var finnRetterKnappEl = document.createElement("button");
    finnRetterKnappEl.innerHTML = "Finn retter";
    finnRetterKnappEl.addEventListener("click", finnRett);
    dineMatvarerEl.appendChild(finnRetterKnappEl);
  }
}

function fjernMatvarerFraListe(e) {
  for (var i = 0; i < tilgjengeligeMatvarer.length; i++) {
    if (e.target.id === tilgjengeligeMatvarer[i]) {
      tilgjengeligeMatvarer.splice(i, 1);
    }
  }
  dineMatvarerEl.innerHTML = "<p class='underoverskrifter'>Dine matvarer:</p>";
  for (var i = 0; i < tilgjengeligeMatvarer.length; i++) {
    var nyMatvare = document.createElement("p");
    nyMatvare.innerHTML = tilgjengeligeMatvarer[i];
    var fjernMatvareKnappEl = document.createElement("button");
    fjernMatvareKnappEl.setAttribute("class", "fjernMatvareKnapp");
    fjernMatvareKnappEl.setAttribute("id", tilgjengeligeMatvarer[i]);
    fjernMatvareKnappEl.innerHTML = "X";
    fjernMatvareKnappEl.addEventListener("click", fjernMatvarerFraListe);
    nyMatvare.appendChild(fjernMatvareKnappEl);
    dineMatvarerEl.appendChild(nyMatvare);
  }
  var mellomRomTilKnapp = document.createElement("p");
  dineMatvarerEl.appendChild(mellomRomTilKnapp);
  var finnRetterKnappEl = document.createElement("button");
  finnRetterKnappEl.innerHTML = "Finn retter";
  finnRetterKnappEl.addEventListener("click", finnRett);
  dineMatvarerEl.appendChild(finnRetterKnappEl);
}

var programmetsRetter = [
  {
    navnPaRett: "Eggerøre",
    ingredienser: ["Egg"],
    oppskrift: "<ol> <li>Knekk egg opp i en gryte, og varm opp på medium varme mens du rører rundt med en slikkepott.</li><li>Rør hele tiden. Steker eggene for fort, så skru ned varmen på plata. Det hele skal ta 2-3 minutter.</li><li>Når eggerøren tykner, tas kjelen av varmen. Du kan gjerne blande inn hakket gressløk til slutt hvis du har det tilgjengelig. Serveres gjerne på brødskive, men smaker også godt rett fra pannen.</li></ol>"
  },
  {
    navnPaRett: "Omelett",
    ingredienser: ["Egg", "Margarin", "Løk"],
    oppskrift: "<ol><li>Visp sammen egg (2 stk) og vann (2 ss).</li><li>Smelt 1 ss margarin på stekeplaten, margarinen skal frese når den slippes i. Hell i røren og trekk den inn mot midten av platen etter hvert som røren stivner.</li><li>Legg den finhakkede løken (mengde løk avhenger av hva en selv ønsker) på den ene halvparten når røren nesten er stivnet.</li><li>La så omeletten steke noen sekunder før den andre halvparten brettes over, så er det bare å hive innpå.</li></ol>"
  },
  {
    navnPaRett: "Stekte nudler",
    ingredienser: ["Egg", "Margarin", "Grønnsaker", "Skinke", "Nudler"],
    oppskrift: "<ol><li>Kok opp nudlene (Mengden velger du selv).</li><li>Stek 200-300 g oppskåret skinke i en middels mengde margarin.</li><li>Ha i utvalgte oppskårede grønnsaker og stek så videre i noen minutter. Husk å vende blandingen underveis.</li><li>Rør så inn de ferdig kokte nudlene.</li><li>Lag et hull i midten av panna og knekk 2 egg oppi. Rør rundt til eggene ser ut som ferdig eggerøre. Vend det så inn i nudelblandingen. Velbekomme!</li></ol>"
  }
];

function finnRett() {
  infoEl.innerHTML = "<p class='underoverskrifter'>Forslag til retter:</p>";
  var forslagPaRettNr = 0;
  for (var i = 0; i < programmetsRetter.length; i++) {
    var antallKorrekteMatvarer = 0;
    for (var j = 0; j < programmetsRetter[i].ingredienser.length; j++) {
      for (var k = 0; k < tilgjengeligeMatvarer.length; k++) {
        if (tilgjengeligeMatvarer[k] === programmetsRetter[i].ingredienser[j]) {
          antallKorrekteMatvarer++;
        }
      }
    }
    if (antallKorrekteMatvarer === programmetsRetter[i].ingredienser.length) {
      forslagPaRettNr++;

      var nyDiv = document.createElement("div");
      nyDiv.className = "forslagPaRett";
      var overskriftRettEl = document.createElement("p");
      overskriftRettEl.className = "overskriftRett";
      overskriftRettEl.innerHTML = programmetsRetter[i].navnPaRett + " på 123";
      nyDiv.appendChild(overskriftRettEl);
      nyDiv.innerHTML += "<ul>";
      for (var j = 0; j < programmetsRetter[i].ingredienser.length; j++) {
        nyDiv.innerHTML += "<li>" + programmetsRetter[i].ingredienser[j] + "</li>";
      }
      nyDiv.innerHTML += "</ul>";
      nyDiv.innerHTML += programmetsRetter[i].oppskrift;
      infoEl.appendChild(nyDiv);
    }
  }
  if (forslagPaRettNr === 0) {
    infoEl.innerHTML = "<p class='underoverskrifter'>Det finnes dessverre ingen oppskrifter med de matvarene du har lagt inn. </p>";
  }
}
