function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = [
  "RADUNOVIC",
  "SPORTIELLO",
  "GOLLINI",
  "ROSSI F.",
  "CARNESECCHI",
  "GORI P.",
  "MANFREDINI",
  "MONTIPO&#39",
  "DA COSTA",
  "SARR M.",
  "SKORUPSKI",
  "RAVAGLIA F.",
  "BREZA",
  "ARESTI",
  "CRAGNO",
  "CIOCCI",
  "VICARIO",
  "CORDAZ",
  "FESTA",
  "CRESPI",
  "DRAGOWSKI",
  "TERRACCIANO",
  "BRANCOLINI",
  "PERIN",
  "MARCHETTI",
  "ZIMA",
  "PALEARI",
  "HANDANOVIC",
  "PADELLI",
  "RADU I.",
  "BUFFON",
  "SZCZESNY",
  "PINSOGLIO",
  "REINA",
  "STRAKOSHA",
  "PROTO",
  "ALIA",
  "TATARUSANU",
  "DONNARUMMA AN.",
  "DONNARUMMA G.",
  "MERET",
  "OSPINA",
  "CONTINI",
  "SEPE",
  "COLOMBI",
  "ALASTRA",
  "DINI",
  "RINALDI",
  "MIRANTE",
  "FUZATO",
  "PAU LOPEZ",
  "BOER",
  "FARELLI",
  "AUDERO",
  "LETICA",
  "AVOGADRI",
  "RAVAGLIA",
  "CONSIGLI",
  "PEGOLO",
  "TURATI",
  "RAFAEL",
  "PROVEDEL",
  "DESJARDINS",
  "KRAPIKAS",
  "ZOET",
  "UJKANI",
  "MILINKOVIC-SAVIC V.",
  "SIRIGU",
  "ROSATI",
  "SCUFFET",
  "PERISAN",
  "NICOLAS",
  "MUSSO",
  "GASPARINI",
  "SILVESTRI",
  "BERARDI A.",
  "PANDUR",
  "ILICIC",
"MURIEL",
"ZAPATA D.",
"DIALLO",
"LAMMERS",
"IAGO FALQUE",
"SAU",
"LAPADULA",
"CAPRARI",
"MONCINI",
"IMPROTA",
"INSIGNE R.",
"DI SERIO",
"PALACIO",
"SANSONE",
"VIGNATO",
"ORSOLINI",
"BARROW",
"SANTANDER",
"JUWARA",
"SKOV OLSEN",
"VERGANI",
"RABBI",
"PAGLIUCA",
"PAVOLETTI",
"CERRI",
"JOAO PEDRO",
"SIMEONE",
"OUNAS",
"DESPODOV",
"GAGLIANO",
"LUVUMBO",
"SILIGARDI",
"SIMY",
"MESSIAS",
"KARGBO",
"RIVIERE",
"DRAGUS",
"CUTRONE",
"RIBERY",
"KOUAME&#39",
"VLAHOVIC",
"PANDEV",
"DESTRO",
"PJACA",
"SCAMACCA",
"ASORO",
"MALES",
"SHOMURODOV",
"CASO",
"PINAMONTI",
"SANCHEZ",
"LUKAKU",
"MARTINEZ L.",
"ESPOSITO",
"DYBALA",
"MORATA",
"HIGUAIN",
"RONALDO",
"VRIONI",
"CORREA",
"IMMOBILE",
"CAICEDO",
"ADEKANYE",
"MORO",
"MURIQI",
"REBIC",
"IBRAHIMOVIC",
"RAFAEL LEAO",
"COLOMBO",
"HAUGE",
"LLORENTE",
"PETAGNA",
"INSIGNE",
"MERTENS",
"MILIK",
"YOUNES",
"LOZANO",
"OSIMHEN",
"INGLESE",
"GERVINHO",
"CORNELIUS",
"KARAMOH",
"SPROCATI",
"ADORANTE",
"MIHAILA",
"DZEKO",
"SCHICK",
"PEDRO",
"CARLES PEREZ",
"MAYORAL",
"KEITA B.",
"GABBIADINI",
"LA GUMINA",
"QUAGLIARELLA",
"TORREGROSSA",
"BABACAR",
"BERARDI",
"DEFREL",
"RICCI F.",
"CAPUTO",
"BOGA",
"SCHIAPPACASSE",
"RASPADORI",
"HARASLIN",
"ODDEI",
"VERDE",
"FARIAS",
"GALABINOV",
"PICCOLI",
"GUDJOHNSEN",
"GYASI",
"NZOLA",
"ZAZA",
"BELOTTI",
"BONAZZOLI",
"EDERA",
"MILLICO",
"RAUTI",
"LASAGNA",
"MATOS",
"NESTOROVSKI",
"DEULOFEU",
"PUSSETTO",
"TEODORCZYK",
"OKAKA",
"FORESTIERI",
"KALINIC",
"TUPTA",
"FAVILLI",
"SALCEDO E.",
"STEPINSKI",
"COLLEY E.",
"DI CARMINE",
"YEBOAH ANKRAH",
"CIOFFI",
"KOKORIN",
"MAN",
"GAICH",
"BRAAF",
"PELLE&#39",
"DE ROON",
"GOMEZ",
"FREULER",
"PASALIC",
"PESSINA",
"MALINOVSKYI",
"MIRANCHUK",
"GYABUAA",
"HETEMAJ",
"VIOLA",
"IONITA",
"KRAGL",
"TELLO",
"DEL PINTO",
"SCHIATTARELLA",
"DABO",
"BASIT",
"MEDEL",
"POLI",
"DONSAH",
"SORIANO",
"SVANBERG",
"KINGSLEY",
"SCHOUTEN",
"DOMINGUEZ",
"BALDURSSON",
"NAINGGOLAN",
"ROG",
"CALIGARA",
"SOTTIL",
"BRADARIC",
"OLIVA",
"NANDEZ",
"PEREIRO",
"LADINETTI",
"MARIN",
"TRAMONI M.",
"CIGARINI",
"PETRICCIONE",
"BENALI",
"MOLINA S.",
"CROCIATA",
"ZANELLATO",
"GOMELT",
"MUSTACCHIO",
"VULIC",
"EDUARDO HENRIQUE",
"ROJAS",
"BORJA VALERO",
"BONAVENTURA",
"CALLEJON",
"DUNCAN",
"PULGAR",
"CRISTOFORO",
"EYSSERIC",
"MONTIEL",
"CASTROVILLI",
"AMRABAT",
"RADOVANOVIC",
"BADELJ",
"STURARO",
"PARIGINI",
"MELEGONI",
"ZAJC",
"CASSATA",
"BEHRAMI",
"LERAGER",
"JAGIELLO",
"ROVELLA",
"SCHONE",
"EBOA EBONGUE",
"VECINO",
"BROZOVIC",
"PERISIC",
"GAGLIARDINI",
"BARELLA",
"SENSI",
"VIDAL",
"ERIKSEN",
"BERNARDESCHI",
"KHEDIRA",
"CHIESA",
"BENTANCUR",
"DOUGLAS COSTA",
"RABIOT",
"RAMSEY",
"KULUSEVSKI",
"ARTHUR",
"PORTANOVA",
"MCKENNIE",
"CATALDI",
"LULIC",
"PAROLO",
"FARES",
"MILINKOVIC-SAVIC",
"LUIS ALBERTO",
"KIYINE",
"MARUSIC",
"LUCAS LEIVA",
"LAZZARI",
"PEREIRA A.",
"ANDERSON D.",
"JONY",
"ESCALANTE",
"AKPA AKPRO",
"KRUNIC",
"KESSIE&#39",
"CALHANOGLU",
"CASTILLEJO",
"BENNACER",
"PAQUETA&#39",
"TONALI",
"DIAZ B.",
"SAELEMAEKERS",
"MALDINI",
"ZIELINSKI",
"ALLAN",
"POLITANO",
"BAKAYOKO",
"RUIZ",
"LOBOTKA",
"ELMAS",
"DEMME",
"GRASSI",
"KURTIC",
"KUCKA",
"DEZI",
"BRUGMAN",
"CYPRIEN",
"SCOZZARELLA",
"NICOLUSSI CAVIGLIA",
"HERNANI",
"BRUNETTA",
"SOHM",
"DIAWARA",
"PEROTTI",
"PELLEGRINI LO.",
"CRISTANTE",
"UNDER",
"VERETOUT",
"PASTORE",
"MKHITARYAN",
"ZANIOLO",
"KLUIVERT",
"RICCARDI",
"VILLAR",
"CANDREVA",
"VERRE",
"JANKTO",
"RAMIREZ",
"LERIS",
"EKDAL",
"ADRIEN SILVA",
"THORSBY",
"ASKILDSEN",
"DAMSGAARD",
"PALUMBO A.",
"MAGNANELLI",
"LOCATELLI",
"DJURICIC",
"BOURABIA",
"FRATTESI",
"TRAORE&#39 HJ.",
"OBIANG",
"LOPEZ M.",
"SAPONARA",
"DEIOLA",
"MORA",
"AGOUME",
"AGUDELO",
"ACAMPORA",
"BARTOLOMEI",
"MAGGIORE",
"MASTINU",
"RICCI M.",
"ESTEVEZ",
"POBEGA",
"LEO&#39 SENA",
"RINCON",
"VERDI",
"BASELLI",
"LINETTY",
"LUKIC",
"BERENGUER",
"MEITE&#39",
"SEGRE",
"GOJAK",
"PEREYRA",
"JAJALO",
"MANDRAGORA",
"DE PAUL",
"COULIBALY",
"WALACE",
"PALUMBO",
"ARSLAN",
"MAKENGO",
"LAZOVIC",
"BESSA",
"BENASSI",
"BADU",
"ZACCAGNI",
"MIGUEL VELOSO",
"BARAK",
"DANZI",
"VIEIRA",
"HENDERSON L.",
"TAMEZE",
"ILIC",
"KOVALENKO",
"TOLOI",
"DJIMSITI",
"CALDARA",
"HATEBOER",
"DEPAOLI",
"GOSENS",
"PALOMINO",
"CASTAGNE",
"ROMERO",
"BELLANOVA",
"SUTALO",
"PICCINI",
"MOJICA",
"RUGGERI",
"MAEHLE",
"LETIZIA",
"BARBA",
"MAGGIO",
"ANTEI",
"GLIK",
"CALDIROLA",
"FOULON",
"TUIA",
"VOLTA",
"PASTINA",
"MBAYE",
"DE SILVESTRI",
"DANILO LAR.",
"CALABRESI",
"DIJKS",
"PAZ",
"CORBO",
"DENSWIL",
"TOMIYASU",
"SOUMAORO",
"HICKEY",
"KHAILOTI",
"CEPPITELLI",
"PISACANE",
"PAJAC",
"FARAGO&#39",
"GODIN",
"LYKOGIANNIS",
"KLAVAN",
"WALUKIEWICZ",
"TRIPALDELLI",
"PINNA",
"ZAPPA",
"CARBONI",
"SPOLLI",
"MARRONE",
"LUPERTO",
"RISPOLI",
"PEREIRA P.",
"MAZZOTTA",
"CUOMO",
"RECA",
"DJIDJI",
"GIGLIOTTI",
"GOLEMIC",
"MAGALLAN",
"BIRAGHI",
"CACERES",
"BARRECA",
"LIROLA",
"MILENKOVIC",
"VENUTI",
"PEZZELLA GER.",
"IGOR",
"DALLE MURA",
"MARTINEZ QUARTA",
"MASIELLO",
"GHIGLIONE",
"ZAPATA C.",
"GOLDANIGA",
"ZAPPACOSTA",
"BIRASCHI",
"JAROSZYNSKI",
"BANI",
"EL YAMIQ",
"PELLEGRINI LU.",
"CRISCITO",
"ANKERSEN",
"CZYBORRA",
"ONGUENE&#39",
"D&#39AMBROSIO",
"RANOCCHIA",
"ASAMOAH",
"DE VRIJ",
"SKRINIAR",
"BASTONI",
"KOLAROV",
"DALBERT",
"DARMIAN",
"YOUNG",
"HAKIMI",
"PIROLA",
"VAGIANNIDIS",
"BONUCCI",
"CHIELLINI",
"RUGANI",
"DE SCIGLIO",
"ALEX SANDRO",
"CUADRADO",
"DANILO",
"DEMIRAL",
"DE LIGT",
"FRABOTTA",
"DRAGUSIN",
"HOEDT",
"PATRIC",
"RADU",
"ACERBI",
"LUKAKU J.",
"WALLACE",
"BASTOS",
"LUIZ FELIPE",
"ARMINI",
"VAVRO",
"CONTI",
"LAXALT",
"CALABRIA",
"ROMAGNOLI",
"MUSACCHIO",
"KJAER",
"DALOT",
"HERNANDEZ T.",
"GABBIA",
"DUARTE",
"KALULU",
"HYSAJ",
"MARIO RUI",
"GHOULAM",
"KOULIBALY",
"MANOLAS",
"MAKSIMOVIC",
"DI LORENZO",
"MALCUIT",
"RRAHMANI",
"GAGLIOLO",
"DERMAKU",
"LAURINI",
"GAZZOLA",
"PEZZELLA GIU.",
"BRUNO ALVES",
"IACOPONI",
"VALENTI",
"BUSI",
"OSORIO",
"BALOGH",
"RICCI G.",
"JUAN JESUS",
"SANTON",
"FLORENZI",
"BRUNO PERES",
"SPINAZZOLA",
"FAZIO",
"KARSDORP",
"MANCINI",
"SMALLING",
"IBANEZ",
"KUMBULLA",
"CALAFIORI",
"FERRARI A.",
"TONELLI",
"REGINI",
"BERESZYNSKI",
"COLLEY",
"AUGELLO",
"YOSHIDA",
"PELUSO",
"CHIRICHES",
"ADJAPONG",
"FERRARI G.",
"ROMAGNA",
"ROGERIO",
"MARLON",
"TOLJAN",
"MULDUR",
"KYRIAKOPOULOS",
"AYHAN",
"MATTIELLO",
"TERZI",
"CAPRADOSSI",
"DELL&#39ORCO",
"SALA",
"MARCHIZZA",
"CHABOT",
"ERLIC",
"FERRER",
"RAMOS",
"VIGNALI",
"ISMAJLI",
"BASTONI S.",
"IZZO",
"ANSALDI",
"MURRU",
"RODRIGUEZ R.",
"LYANCO",
"N&#39KOULOU",
"BUONGIORNO",
"BREMER",
"AINA",
"FERIGRA",
"SINGO",
"VOJVODA",
"DE MAIO",
"SAMIR",
"BONIFAZI",
"NUYTINCK",
"STRYGER LARSEN",
"TER AVEST",
"TROOST-EKONG",
"ZEEGELAAR",
"RODRIGO BECAO",
"PRODL",
"MOLINA N.",
"OUWEJAN",
"DIMARCO",
"FARAONI",
"CECCHERINI",
"GUNTER",
"MAGNANI",
"BOCCHETTI",
"DAWIDOWICZ",
"EMPEREUR",
"CETIN",
"LOVATO",
"RUEGG",
"AMIONE",
"UDOGIE",
"ONGUENE&#39",
"DIERCKX",
"ZAGARITIS",
"REYNOLDS",
"ANTOV"
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("bb1"), countries);
autocomplete(document.getElementById("bb2"), countries);
