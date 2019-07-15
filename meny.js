var bodyEl = document.querySelector("body");

  //Hele meny-elementet
  var flexBoksParentEl = document.createElement("div");
  flexBoksParentEl.className = "moderFlex";

    //Logo-elementet
    var linkEl = document.createElement("a");
    linkEl.setAttribute("href", "index.html");
    var logoEl = document.createElement("div");
    logoEl.className = "logo";
    linkEl.appendChild(logoEl);
    flexBoksParentEl.appendChild(linkEl);

    //Tekst-elementet
    var link2El = document.createElement("a");
    link2El.setAttribute("href", "index.html");
    link2El.className = "overskrift";
    var h1El = document.createElement("div");
    h1El.innerHTML = "SMÅ SUNNE RETTER";
    link2El.appendChild(h1El);
    flexBoksParentEl.appendChild(link2El);

    //Minimeny-elementet
    var miniMenyEl = document.createElement("div");
    miniMenyEl.className = "miniMeny";

      var overFlex = document.createElement("div");
      overFlex.className = "overFlex";

        var link3El = document.createElement("a");
        link3El.setAttribute("target", "_blank");
        link3El.setAttribute("href", "https://www.instagram.com/smasunneretter/?hl=nb");
        link3El.className = "sosialeMedier";
        link3El.style.flexGrow = 1;
          var instagramBilde = document.createElement("img");
          instagramBilde.src = "media/instagram.png";
          instagramBilde.style.marginTop = "10px";
          instagramBilde.style.height = "60px";
          link3El.appendChild(instagramBilde);
        overFlex.appendChild(link3El);

        var link4El = document.createElement("a");
        link4El.setAttribute("target", "_blank");
        link4El.setAttribute("href", "https://www.youtube.com/channel/UC9hlXWcaZb-LdYlnwbH5WsQ?view_as=subscriber");
        link4El.className = "sosialeMedier";
        link4El.style.flexGrow = 1;
          var youtubeBilde = document.createElement("img");
          youtubeBilde.src = "media/youtube.png";
          youtubeBilde.style.height = "80px";
          link4El.appendChild(youtubeBilde);
        overFlex.appendChild(link4El);

      miniMenyEl.appendChild(overFlex);

      var underFlex = document.createElement("div");
      underFlex.className = "underFlex";

        var link5El = document.createElement("a");
        link5El.setAttribute("href", "index.html");
        link5El.innerHTML = "Hjem";
        link5El.className = "rute";
        underFlex.appendChild(link5El);

        var link6El = document.createElement("a");
        link6El.setAttribute("href", "omoss.html");
        link6El.innerHTML = "Om oss";
        link6El.className = "rute";
        underFlex.appendChild(link6El);

      miniMenyEl.appendChild(underFlex);

  flexBoksParentEl.appendChild(miniMenyEl);

bodyEl.appendChild(flexBoksParentEl);
