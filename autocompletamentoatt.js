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
"PELLE&#39"
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("a1"), countries);
autocomplete(document.getElementById("a2"), countries);
autocomplete(document.getElementById("a3"), countries);
autocomplete(document.getElementById("a4"), countries);
autocomplete(document.getElementById("a5"), countries);
autocomplete(document.getElementById("a6"), countries);
