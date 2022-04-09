function CalcoloFormazione() {
  var portieri = [
    ["RADUNOVIC", 0],
["SPORTIELLO", 2.2725],
["GOLLINI", 11.4545454545455],
["ROSSI F.", 0],
["CARNESECCHI", 0],
["GORI P.", 0],
["MANFREDINI", 0],
["MONTIPO'", 5.904],
["DA COSTA", 0.937840909090909],
["SARR M.", 0],
["SKORUPSKI", 8.38380681818182],
["RAVAGLIA F.", 0.119318181818182],
["BREZA", 0],
["ARESTI", 0],
["CRAGNO", 16.47],
["CIOCCI", 0],
["VICARIO", 0],
["CORDAZ", 3.012],
["FESTA", 0],
["CRESPI", 0],
["DRAGOWSKI", 16.635],
["ROSATI", 0],
["TERRACCIANO", 0],
["BRANCOLINI", 0],
["PERIN", 14.7681818181818],
["MARCHETTI", 0.386363636363636],
["ZIMA", 0],
["PALEARI", 0],
["HANDANOVIC", 16.68],
["PADELLI", 0],
["RADU I.", 0],
["BUFFON", 5.71428571428571],
["SZCZESNY", 69.7],
["PINSOGLIO", 0],
["REINA", 16.4945454545455],
["STRAKOSHA", 0],
["PROTO", 0],
["ALIA", 0],
["TATARUSANU", 0.159090909090909],
["DONNARUMMA AN.", 0],
["DONNARUMMA G.", 16.8811363636364],
["MERET", 7.21928571428571],
["OSPINA", 0],
["CONTINI", 0],
["SEPE", 7.5675],
["COLOMBI", 0],
["ALASTRA", 0],
["DINI", 0],
["RINALDI", 0],
["MIRANTE", 6.81875],
["FUZATO", 0],
["PAU LOPEZ", 21.825],
["BOER", 0],
["FARELLI", 0],
["AUDERO", 12.8925],
["LETICA", 0],
["AVOGADRI", 0],
["RAVAGLIA", 0],
["CONSIGLI", 21.0954545454545],
["PEGOLO", 0.393939393939394],
["TURATI", 0],
["RAFAEL", 0],
["PROVEDEL", 13.9390909090909],
["DESJARDINS", 0],
["KRAPIKAS", 0],
["ZOET", 0.420454545454545],
["UJKANI", 0],
["MILINKOVIC-SAVIC V.", 0.431818181818182],
["SIRIGU", 13.6363636363636],
["SCUFFET", 0],
["PERISAN", 0],
["NICOLAS", 0],
["MUSSO", 29.8090909090909],
["GASPARINI", 0],
["SILVESTRI", 17.145],
["BERARDI A.", 0],
["PANDUR", 0]
]; //76
  var difensori = [
    ["TOLOI", 14.8254545454545],
["DJIMSITI", 14.8009090909091],
["CALDARA", 1.02272727272727],
["HATEBOER", 0],
["GOSENS", 16.9363636363636],
["PALOMINO", 11.0918181818182],
["CASTAGNE", 0],
["ROMERO", 13.7345454545455],
["BELLANOVA", 0],
["SUTALO", 1.53272727272727],
["PICCINI", 0],
["MOJICA", 0],
["RUGGERI", 1.25],
["MAEHLE", 17.76],
["LETIZIA", 0],
["BARBA", 5.34572727272727],
["MAGGIO", 0],
["ANTEI", 0],
["GLIK", 6.846],
["DEPAOLI", 2.89909090909091],
["CALDIROLA", 3.00109090909091],
["FOULON", 3.44327272727273],
["TUIA", 5.202],
["VOLTA", 0],
["PASTINA", 0],
["MBAYE", 0.349431818181818],
["DE SILVESTRI", 6.27272727272727],
["DANILO LAR.", 12.43125],
["FARAGO'", 0],
["DIJKS", 6.316875],
["PAZ", 0],
["CORBO", 0],
["DENSWIL", 0],
["TOMIYASU", 13.71375],
["SOUMAORO", 10.35],
["HICKEY", 2.00284090909091],
["KHAILOTI", 0],
["ANTOV", 0],
["RUGANI", 11.25],
["ASAMOAH", 0],
["CEPPITELLI", 0],
["PISACANE", 0],
["PAJAC", 0],
["GODIN", 10.6009090909091],
["LYKOGIANNIS", 14.8977272727273],
["CALABRESI", 0.333333333333333],
["KLAVAN", 0],
["WALUKIEWICZ", 14.2888636363636],
["TRIPALDELLI", 2.19886363636364],
["PINNA", 0],
["ZAPPA", 18.15],
["CARBONI", 1.52727272727273],
["SPOLLI", 0],
["MARRONE", 1.36909090909091],
["LUPERTO", 2.19886363636364],
["RISPOLI", 0.634363636363636],
["PEREIRA P.", 3.31322727272727],
["MAZZOTTA", 0],
["CUOMO", 0],
["RECA", 3.04172727272727],
["DJIDJI", 1.17272727272727],
["GIGLIOTTI", 0],
["GOLEMIC", 2.54836363636364],
["MAGALLAN", 1.54618181818182],
["BIRAGHI", 17.2534090909091],
["CACERES", 7.27363636363636],
["BARRECA", 0.784090909090909],
["LIROLA", 0],
["MILENKOVIC", 16.0636363636364],
["VENUTI", 10.2804545454545],
["PEZZELLA GER.", 13.6309090909091],
["MALCUIT", 1.09090909090909],
["IGOR", 6.52363636363636],
["DALLE MURA", 0],
["MARTINEZ QUARTA", 7.09977272727273],
["MASIELLO", 12.2072727272727],
["GHIGLIONE", 8.13409090909091],
["ZAPATA C.", 2.06909090909091],
["GOLDANIGA", 12.6545454545455],
["ZAPPACOSTA", 10.0881818181818],
["BIRASCHI", 0],
["JAROSZYNSKI", 0],
["EL YAMIQ", 0],
["PELLEGRINI LU.", 2.5],
["CRISCITO", 0],
["ANKERSEN", 0],
["CZYBORRA", 10.5034090909091],
["ONGUENE'", 2.4],
["D'AMBROSIO", 3.79090909090909],
["RANOCCHIA", 1.10181818181818],
["DE VRIJ", 0],
["SKRINIAR", 15.7827272727273],
["BASTONI", 15.3381818181818],
["KOLAROV", 1.67045454545455],
["DALBERT", 0],
["DARMIAN", 9.04],
["YOUNG", 8.36363636363636],
["HAKIMI", 20.94],
["PIROLA", 0],
["VAGIANNIDIS", 0],
["BONUCCI", 0],
["CHIELLINI", 11.8380952380952],
["DE SCIGLIO", 0],
["ALEX SANDRO", 41.9642857142857],
["CUADRADO", 0],
["DANILO", 91.7142857142857],
["DEMIRAL", 45.8214285714286],
["DE LIGT", 53.1428571428571],
["FRABOTTA", 16.4285714285714],
["DRAGUSIN", 0],
["HOEDT", 0],
["PATRIC", 18.4581818181818],
["RADU", 0],
["ACERBI", 21.3145454545455],
["LUKAKU J.", 0],
["WALLACE", 0],
["BASTOS", 0],
["MUSACCHIO", 13.8],
["LUIZ FELIPE", 0],
["ARMINI", 0],
["VAVRO", 0],
["LAXALT", 0],
["CALABRIA", 18.0981818181818],
["ROMAGNOLI", 13.9090909090909],
["KJAER", 12.7125],
["DALOT", 2.26431818181818],
["HERNANDEZ T.", 17.2554545454545],
["GABBIA", 1.63636363636364],
["DUARTE", 0],
["TOMORI", 6.33],
["KALULU", 2.01454545454545],
["HYSAJ", 0],
["MARIO RUI", 13.5428571428571],
["GHOULAM", 0],
["KOULIBALY", 0],
["MANOLAS", 0],
["MAKSIMOVIC", 8.73714285714286],
["DI LORENZO", 16.2428571428571],
["RRAHMANI", 4.28571428571428],
["CONTI", 6.7265625],
["GAGLIOLO", 7.09363636363636],
["DERMAKU", 0],
["LAURINI", 0.483181818181818],
["GAZZOLA", 0],
["PEZZELLA GIU.", 3.62522727272727],
["BRUNO ALVES", 3.78409090909091],
["BANI", 5.01238636363636],
["IACOPONI", 3.66477272727273],
["VALENTI", 0],
["BUSI", 0],
["OSORIO", 5.02568181818182],
["BALOGH", 0],
["RICCI G.", 0],
["DIERCKX", 0],
["ZAGARITIS", 0],
["JUAN JESUS", 0],
["SANTON", 2.64318181818182],
["FLORENZI", 0],
["BRUNO PERES", 22.9113636363636],
["SPINAZZOLA", 41.5517045454545],
["FAZIO", 0],
["KARSDORP", 40.6772727272727],
["MANCINI", 41.9403409090909],
["SMALLING", 0],
["IBANEZ", 43.8],
["KUMBULLA", 17.4909090909091],
["CALAFIORI", 1.30681818181818],
["REYNOLDS", 0],
["FERRARI A.", 1.03295454545455],
["TONELLI", 5.79375],
["REGINI", 0.238636363636364],
["BERESZYNSKI", 10.0667045454545],
["COLLEY", 9.63818181818182],
["AUGELLO", 12.7360227272727],
["YOSHIDA", 12.1254545454545],
["PELUSO", 1.62878787878788],
["CHIRICHES", 8.94242424242424],
["ADJAPONG", 0],
["FERRARI G.", 21.6727272727273],
["ROMAGNA", 0],
["ROGERIO", 17.0181818181818],
["MARLON", 11.61],
["TOLJAN", 3.78333333333333],
["MULDUR", 21.6727272727273],
["KYRIAKOPOULOS", 9.20242424242424],
["AYHAN", 10.5727272727273],
["MATTIELLO", 0],
["TERZI", 0],
["CAPRADOSSI", 0],
["DELL'ORCO", 1.54636363636364],
["SALA", 0],
["MARCHIZZA", 9.55636363636363],
["CHABOT", 15.1956818181818],
["ERLIC", 0],
["FERRER", 0],
["RAMOS", 0.977272727272727],
["VIGNALI", 7.53409090909091],
["ISMAJLI", 4.99090909090909],
["BASTONI S.", 0],
["IZZO", 9.3075],
["ANSALDI", 12.7840909090909],
["MURRU", 2.915],
["RODRIGUEZ R.", 0],
["LYANCO", 8.56954545454545],
["N'KOULOU", 7.77272727272727],
["BUONGIORNO", 1.36363636363636],
["BREMER", 15.5127272727273],
["AINA", 0],
["FERIGRA", 0],
["SINGO", 15.9729545454545],
["VOJVODA", 3.13636363636364],
["DE MAIO", 5.56],
["SAMIR", 34.02],
["BONIFAZI", 24.5454545454545],
["NUYTINCK", 14.1054545454545],
["STRYGER LARSEN", 27.0763636363636],
["TER AVEST", 0],
["TROOST-EKONG", 0],
["ZEEGELAAR", 29.1845454545455],
["RODRIGO BECAO", 19.8636363636364],
["PRODL", 0],
["MOLINA N.", 14.1818181818182],
["OUWEJAN", 5.01136363636364],
["DIMARCO", 0],
["FARAONI", 14.5554545454545],
["CECCHERINI", 0],
["GUNTER", 11.2636363636364],
["MAGNANI", 7.50272727272727],
["BOCCHETTI", 0],
["DAWIDOWICZ", 0],
["EMPEREUR", 0],
["CETIN", 4.22727272727273],
["LOVATO", 13.6309090909091],
["RUEGG", 1.39090909090909],
["AMIONE", 0],
["UDOGIE", 0.818181818181818]
];
  var centrocampisti = [
    ["DE ROON", 16.7181818181818],
["GOMEZ", 0],
["FREULER", 15.7336363636364],
["PASALIC", 3.0675],
["PESSINA", 12.1131818181818],
["MALINOVSKYI", 11.1727272727273],
["MIRANCHUK", 7.22090909090909],
["GYABUAA", 0],
["KOVALENKO", 0],
["HETEMAJ", 3.69054545454545],
["VIOLA", 1.55563636363636],
["IONITA", 6.426],
["KRAGL", 0],
["TELLO", 1.06909090909091],
["DEL PINTO", 0],
["SCHIATTARELLA", 5.89090909090909],
["DABO", 3.35709090909091],
["BASIT", 0],
["MEDEL", 0],
["POLI", 2.07443181818182],
["DONSAH", 0],
["SORIANO", 14.90625],
["SVANBERG", 11.9214204545455],
["KINGSLEY", 0],
["SCHOUTEN", 11.8022727272727],
["DOMINGUEZ", 7.12431818181818],
["BALDURSSON", 0],
["NAINGGOLAN", 17.58],
["DUNCAN", 1.82954545454545],
["DEIOLA", 7.14636363636364],
["ROG", 0],
["CALIGARA", 0],
["SOTTIL", 0],
["BRADARIC", 0],
["OLIVA", 0],
["NANDEZ", 13.4727272727273],
["PEREIRO", 1.75],
["LADINETTI", 0],
["MARIN", 17.97],
["TRAMONI M.", 1.56818181818182],
["CIGARINI", 0.309],
["PETRICCIONE", 1.6065],
["BENALI", 0],
["MOLINA S.", 0],
["CROCIATA", 0],
["ZANELLATO", 2.25463636363636],
["GOMELT", 0],
["MUSTACCHIO", 0],
["VULIC", 2.06236363636364],
["EDUARDO HENRIQUE", 1.35436363636364],
["ROJAS", 0],
["BORJA VALERO", 6.71863636363636],
["BONAVENTURA", 17.2677272727273],
["CALLEJON", 2.925],
["PULGAR", 8.28363636363637],
["CRISTOFORO", 0],
["EYSSERIC", 3.75],
["MONTIEL", 0],
["CASTROVILLI", 16.8],
["AMRABAT", 15.9818181818182],
["RADOVANOVIC", 15.4677272727273],
["BADELJ", 13.8743181818182],
["STROOTMAN", 19.35],
["PARIGINI", 0],
["MELEGONI", 2.22545454545455],
["ZAJC", 13.8047727272727],
["CASSATA", 0],
["BEHRAMI", 8.23636363636364],
["LERAGER", 0],
["PORTANOVA", 0.738409090909091],
["JAGIELLO", 0],
["ROVELLA", 2.85],
["SCHONE", 0],
["EBOA EBONGUE", 0],
["VECINO", 0],
["BROZOVIC", 16.4911363636364],
["PERISIC", 16.1045454545455],
["GAGLIARDINI", 9.58181818181818],
["BARELLA", 19.5],
["SENSI", 2.68409090909091],
["VIDAL", 0],
["ERIKSEN", 9],
["BERNARDESCHI", 69.0928571428571],
["KHEDIRA", 0],
["CHIESA", 94.7964285714286],
["BENTANCUR", 81.6321428571429],
["DOUGLAS COSTA", 0],
["RABIOT", 0],
["RAMSEY", 43.5666666666667],
["KULUSEVSKI", 58.447619047619],
["ARTHUR", 0],
["MCKENNIE", 84.7928571428571],
["CATALDI", 3.76],
["LULIC", 0.727272727272727],
["PAROLO", 4.24],
["FARES", 8.26909090909091],
["MILINKOVIC-SAVIC", 24.0090909090909],
["LUIS ALBERTO", 23.5081818181818],
["KIYINE", 0],
["MARUSIC", 22.6418181818182],
["LUCAS LEIVA", 17.7727272727273],
["LAZZARI", 0],
["PEREIRA A.", 10.6569696969697],
["ANDERSON D.", 0],
["JONY", 0],
["ESCALANTE", 11.3357575757576],
["AKPA AKPRO", 13.6339393939394],
["KRUNIC", 7.19727272727273],
["KESSIE'", 19.7161363636364],
["CALHANOGLU", 17.2425],
["CASTILLEJO", 9.14909090909091],
["MEITE'", 9.67090909090909],
["BENNACER", 8.5575],
["PAQUETA'", 0],
["TONALI", 8.21818181818182],
["DIAZ B.", 0],
["SAELEMAEKERS", 14.1525],
["MALDINI", 0],
["ZIELINSKI", 17.8192857142857],
["ALLAN", 0],
["POLITANO", 19.1714285714286],
["BAKAYOKO", 15.0814285714286],
["RUIZ", 13.4971428571429],
["LOBOTKA", 3.37142857142857],
["ELMAS", 10.4828571428571],
["DEMME", 7.96095238095238],
["GRASSI", 3.28840909090909],
["KURTIC", 8.01136363636363],
["KUCKA", 7.73795454545454],
["DEZI", 0],
["BRUGMAN", 5.60795454545455],
["CYPRIEN", 1.53136363636364],
["SCOZZARELLA", 0],
["NICOLUSSI CAVIGLIA", 0],
["HERNANI", 0],
["BRUNETTA", 0.784090909090909],
["SOHM", 3.53818181818182],
["DIAWARA", 5.79886363636364],
["PEROTTI", 0],
["PELLEGRINI LO.", 47.6079545454545],
["CRISTANTE", 39.9886363636364],
["UNDER", 0],
["VERETOUT", 50.4715909090909],
["PASTORE", 0],
["MKHITARYAN", 52.0823863636364],
["ZANIOLO", 0],
["KLUIVERT", 0],
["RICCARDI", 0],
["VILLAR", 39.2846590909091],
["CANDREVA", 13.1747727272727],
["VERRE", 7.51090909090909],
["JANKTO", 13.0397727272727],
["RAMIREZ", 7.25318181818182],
["LERIS", 5.1675],
["EKDAL", 12.8863636363636],
["ADRIEN SILVA", 6.04431818181818],
["THORSBY", 13.0152272727273],
["ASKILDSEN", 0.600852272727273],
["DAMSGAARD", 8.97034090909091],
["PALUMBO A.", 0],
["MAGNANELLI", 2.02181818181818],
["LOCATELLI", 22.7636363636364],
["DJURICIC", 20.5527272727273],
["BOURABIA", 0],
["FRATTESI", 0],
["TRAORE' HJ.", 22.8181818181818],
["OBIANG", 19.8118181818182],
["LOPEZ M.", 10.6363636363636],
["SAPONARA", 10.621875],
["MORA", 0],
["AGOUME", 2.45454545454545],
["AGUDELO", 13.7584090909091],
["ACAMPORA", 1.89318181818182],
["BARTOLOMEI", 0],
["MAGGIORE", 13.9786363636364],
["MASTINU", 0],
["RICCI M.", 13.4945454545455],
["ESTEVEZ", 12.0375],
["POBEGA", 7.92909090909091],
["LEO' SENA", 0.568181818181818],
["RINCON", 16.9384090909091],
["VERDI", 10.1995454545455],
["BASELLI", 1.08],
["MANDRAGORA", 9.37636363636364],
["LINETTY", 10.9295454545455],
["LUKIC", 16.8136363636364],
["BERENGUER", 0],
["SEGRE", 0],
["GOJAK", 2.9525],
["PEREYRA", 0],
["JAJALO", 0],
["DE PAUL", 39.2890909090909],
["COULIBALY", 0],
["WALACE", 22.9854545454545],
["PALUMBO", 0],
["ARSLAN", 29.3318181818182],
["MAKENGO", 3.70045454545455],
["LAZOVIC", 13.2436363636364],
["BESSA", 1.43977272727273],
["STURARO", 1.64727272727273],
["BENASSI", 0],
["BADU", 0],
["ZACCAGNI", 19.5156818181818],
["MIGUEL VELOSO", 3.48272727272727],
["BARAK", 17.1777272727273],
["DANZI", 0],
["VIEIRA", 0.488636363636364],
["HENDERSON L.", 0],
["TAMEZE", 17.1388636363636],
["ILIC", 14.1872727272727]
]; //207
  var attaccanti = [
    ["ILICIC", 14.8909090909091],
  ["MURIEL", 14.5454545454545],
  ["ZAPATA D.", 20.73],
  ["DIALLO", 0],
  ["LAMMERS", 3.50727272727273],
  ["IAGO FALQUE", 0.773818181818182],
  ["SAU", 3.88527272727273],
  ["LAPADULA", 7.284],
  ["CAPRARI", 6.58609090909091],
  ["MONCINI", 0.731818181818182],
  ["IMPROTA", 6.23454545454545],
  ["INSIGNE R.", 4.49454545454545],
  ["DI SERIO", 1.15],
  ["GAICH", 0],
  ["PALACIO", 9.0975],
  ["SANSONE", 7.54772727272727],
  ["VIGNATO", 8.25],
  ["ORSOLINI", 11.9106818181818],
  ["BARROW", 14.31],
  ["SANTANDER", 0],
  ["JUWARA", 0],
  ["SKOV OLSEN", 2.07954545454545],
  ["VERGANI", 0],
  ["RABBI", 0],
  ["PAGLIUCA", 0],
  ["PAVOLETTI", 10.3204545454545],
  ["CERRI", 2.59090909090909],
  ["JOAO PEDRO", 20.595],
  ["SIMEONE", 16.8954545454545],
  ["DESPODOV", 0],
  ["GAGLIANO", 0],
  ["LUVUMBO", 0],
  ["SILIGARDI", 0],
  ["SIMY", 2.556],
  ["OUNAS", 1.5255],
  ["DI CARMINE", 2.10763636363636],
  ["MESSIAS", 3.85159090909091],
  ["KARGBO", 0],
  ["RIVIERE", 1.51581818181818],
  ["DRAGUS", 0.785454545454546],
  ["CUTRONE", 0],
  ["RIBERY", 0],
  ["KOUAME'", 10.9772727272727],
  ["VLAHOVIC", 18.7568181818182],
  ["KOKORIN", 2],
  ["PANDEV", 9.54318181818182],
  ["DESTRO", 17.8813636363636],
  ["PJACA", 10.6918181818182],
  ["SCAMACCA", 7.88454545454545],
  ["ASORO", 0],
  ["MALES", 0],
  ["SHOMURODOV", 12.9579545454545],
  ["CASO", 0],
  ["PINAMONTI", 1.36363636363636],
  ["SANCHEZ", 9.23863636363636],
  ["LUKAKU", 22.4795454545455],
  ["MARTINEZ L.", 21.915],
  ["ESPOSITO", 0],
  ["DYBALA", 16.6309523809524],
  ["MORATA", 80.4464285714286],
  ["HIGUAIN", 0],
  ["RONALDO", 97.7142857142857],
  ["VRIONI", 0],
  ["AKE' M.", 0],
  ["CORREA", 16.6909090909091],
  ["IMMOBILE", 27.2727272727273],
  ["CAICEDO", 13.6412121212121],
  ["ADEKANYE", 0],
  ["MORO", 0],
  ["MURIQI", 9.32848484848485],
  ["REBIC", 8.52090909090909],
  ["MANDZUKIC", 6],
  ["IBRAHIMOVIC", 13.3854545454545],
  ["RAFAEL LEAO", 16.1577272727273],
  ["COLOMBO", 0],
  ["HAUGE", 7.56636363636364],
  ["PETAGNA", 0],
  ["INSIGNE", 18.6428571428571],
  ["MERTENS", 0],
  ["MILIK", 0],
  ["YOUNES", 0],
  ["LOZANO", 0],
  ["OSIMHEN", 8.25428571428571],
  ["CIOFFI", 0],
  ["INGLESE", 0],
  ["GERVINHO", 7.43113636363636],
  ["CORNELIUS", 6.71318181818182],
  ["KARAMOH", 6.79227272727273],
  ["SPROCATI", 0],
  ["ADORANTE", 0],
  ["ZIRKZEE", 2.625],
  ["MIHAILA", 0.784090909090909],
  ["MAN", 2.75],
  ["PELLE'", 0],
  ["DZEKO", 25.8863636363636],
  ["EL SHAARAWY", 0],
  ["SCHICK", 0],
  ["PEDRO", 21.6988636363636],
  ["CARLES PEREZ", 8.44090909090909],
  ["MAYORAL", 40.5],
  ["KEITA B.", 7.790625],
  ["GABBIADINI", 0.588068181818182],
  ["LA GUMINA", 0],
  ["QUAGLIARELLA", 13.4795454545455],
  ["TORREGROSSA", 3.825],
  ["BABACAR", 0],
  ["BERARDI", 22.5481818181818],
  ["DEFREL", 11.3363636363636],
  ["RICCI F.", 0],
  ["CAPUTO", 21.4972727272727],
  ["BOGA", 0],
  ["SCHIAPPACASSE", 0],
  ["RASPADORI", 11.6848484848485],
  ["HARASLIN", 2.74666666666667],
  ["ODDEI", 0.757575757575758],
  ["VERDE", 2.46727272727273],
  ["FARIAS", 0],
  ["GALABINOV", 1.96363636363636],
  ["PICCOLI", 3.44454545454545],
  ["GUDJOHNSEN", 0],
  ["GYASI", 18.615],
  ["NZOLA", 9.11181818181818],
  ["ZAZA", 10.7515909090909],
  ["BELOTTI", 21.3770454545455],
  ["SANABRIA", 0],
  ["BONAZZOLI", 8.30454545454545],
  ["EDERA", 0],
  ["MILLICO", 0],
  ["RAUTI", 0],
  ["MATOS", 0],
  ["LLORENTE", 29.7771428571429],
  ["NESTOROVSKI", 14.4772727272727],
  ["DEULOFEU", 21.8577272727273],
  ["PUSSETTO", 0],
  ["TEODORCZYK", 0],
  ["OKAKA", 5.65909090909091],
  ["FORESTIERI", 0],
  ["BRAAF", 0],
  ["LASAGNA", 15.4909090909091],
  ["KALINIC", 0],
  ["TUPTA", 0],
  ["FAVILLI", 0],
  ["SALCEDO E.", 0],
  ["STEPINSKI", 0],
  ["COLLEY E.", 0],
  ["YEBOAH", 0]
]; //133

  var i=0;
  var p1=null;
  var p2=null;
  var p3=null;

  var d1=null;
  var d2=null;
  var d3=null;
  var d4=null;
  var d5=null;
  var d6=null;
  var d7=null;
  var d8=null;

  var c1=null;
  var c2=null;
  var c3=null;
  var c4=null;
  var c5=null;
  var c6=null;
  var c7=null;
  var c8=null;

  var a1=null;
  var a2=null;
  var a3=null;
  var a4=null;
  var a5=null;
  var a6=null;

  var max=0;
  var pr=0;
  var rosa = [];

  //formazioni
  var trecinquedue = [];
  var trequattrotre = [];
  var quattrocinqueuno = [];
  var quattroquattrodue = [];
  var quattrotretre = [];
  var cinquetredue = [];
  var cinquequattrouno = [];

  //sommeformazioni
  var s352 = 0;
  var s343 = 0;
  var s451 = 0;
  var s442 = 0;
  var s433 = 0;
  var s532 = 0;
  var s541 = 0;
  /*
  //formazione emanuele
  port1 = "CONSIGLI";
  port2 = "MERET";
  port3 = "OSPINA";

  dif1 = "GAGLIOLO";
  dif2 = "KOULIBALY";
  dif3 = "ALEX SANDRO";
  dif4 = "SPINAZZOLA";
  dif5 = "FERRARI G.";
  dif6 = "DANILO";
  dif7 = "IBANEZ";
  dif8 = "TOMIYASU";

  cen1 = "POLITANO";
  cen2 = "KESSIE'";
  cen3 = "BARELLA";
  cen4 = "DJURICIC";
  cen5 = "VERETOUT";
  cen6 = "RAMIREZ";
  cen7 = "NANDEZ";
  cen8 = "MIRANCHUK";

  att1 = "REBIC";
  att2 = "IAGO FALQUE";
  att3 = "CORREA";
  att4 = "CAICEDO";
  att5 = "LUKAKU";
  att6 = "RAFAEL LEAO";
  */
  port1 = document.getElementById("p1").value.toUpperCase();
  port2 = document.getElementById("p2").value.toUpperCase();
  port3 = document.getElementById("p3").value.toUpperCase();

  dif1 = document.getElementById("d1").value.toUpperCase();
  dif2 = document.getElementById("d2").value.toUpperCase();
  dif3 = document.getElementById("d3").value.toUpperCase();
  dif4 = document.getElementById("d4").value.toUpperCase();
  dif5 = document.getElementById("d5").value.toUpperCase();
  dif6 = document.getElementById("d6").value.toUpperCase();
  dif7 = document.getElementById("d7").value.toUpperCase();
  dif8 = document.getElementById("d8").value.toUpperCase();

  cen1 = document.getElementById("c1").value.toUpperCase();
  cen2 = document.getElementById("c2").value.toUpperCase();
  cen3 = document.getElementById("c3").value.toUpperCase();
  cen4 = document.getElementById("c4").value.toUpperCase();
  cen5 = document.getElementById("c5").value.toUpperCase();
  cen6 = document.getElementById("c6").value.toUpperCase();
  cen7 = document.getElementById("c7").value.toUpperCase();
  cen8 = document.getElementById("c8").value.toUpperCase();

  att1 = document.getElementById("a1").value.toUpperCase();
  att2 = document.getElementById("a2").value.toUpperCase();
  att3 = document.getElementById("a3").value.toUpperCase();
  att4 = document.getElementById("a4").value.toUpperCase();
  att5 = document.getElementById("a5").value.toUpperCase();
  att6 = document.getElementById("a6").value.toUpperCase();

  m = document.getElementById("mo").value.toUpperCase();

  var v=0;
  var v1=0;
  var v2=0;
  var v3=0;
  var v4=1;

  //modulo
  //portieri
  //inserire portieri in rosa
  for(i=0; i<77; i++){
    if(port1==portieri[i][0]){
      rosa.push([port1,portieri[i][1]]);
      p1=rosa[0][0];
      v=0;
      break;
    }
    else v=1;
  }
  for(i=0; i<77; i++){
    if(port2==portieri[i][0]){
      rosa.push([port2,portieri[i][1]]);
      p2=rosa[1][0];
      v=0;
      break;
    }
    else v=2;
  }
  for(i=0; i<77; i++){
    if(port3==portieri[i][0]){
      rosa.push([port3,portieri[i][1]]);
      p3=rosa[2][0];
      v=0;
      break;
    } else v=3;
  }


//difensori
  //inserire difensori in rosa
  for(i=0; i<236; i++){
    if(dif1==difensori[i][0]){
      rosa.push([dif1,difensori[i][1]]);
      v1=0;
      break;
    } else v1=4;
  }
  for(i=0; i<236; i++){
    if(dif2==difensori[i][0]){
      rosa.push([dif2,difensori[i][1]]);
      v1=0;
      break;
    } else v1=5;
  }
  for(i=0; i<236; i++){
    if(dif3==difensori[i][0]){
      rosa.push([dif3,difensori[i][1]]);
      v1=0;
      break;
    } else v1=6;
  }
  for(i=0; i<236; i++){
    if(dif4==difensori[i][0]){
      rosa.push([dif4,difensori[i][1]]);
      v1=0;
      break;
    } else v1=7;
  }
  for(i=0; i<236; i++){
    if(dif5==difensori[i][0]){
      rosa.push([dif5,difensori[i][1]]);
      v1=0;
      break;
    } else v1=8;
  }
  for(i=0; i<236; i++){
    if(dif6==difensori[i][0]){
      rosa.push([dif6,difensori[i][1]]);
      v1=0;
      break;
    } else v1=9;
  }
  for(i=0; i<236; i++){
    if(dif7==difensori[i][0]){
      rosa.push([dif7,difensori[i][1]]);
      v1=0;
      break;
    } else v1=10;
  }
  for(i=0; i<236; i++){
    if(dif8==difensori[i][0]){
      rosa.push([dif8,difensori[i][1]]);
      v1=0;
      break;
    } else v1=11;
  }

//centrocampisti
  //inserire centrocampisti in rosa
  for(i=0; i<210; i++){
    if(cen1==centrocampisti[i][0]){
      rosa.push([cen1,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=12;
  }
  for(i=0; i<210; i++){
    if(cen2==centrocampisti[i][0]){
      rosa.push([cen2,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=13;
  }
  for(i=0; i<210; i++){
    if(cen3==centrocampisti[i][0]){
      rosa.push([cen3,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=14;
  }
  for(i=0; i<210; i++){
    if(cen4==centrocampisti[i][0]){
      rosa.push([cen4,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=15;
  }
  for(i=0; i<210; i++){
    if(cen5==centrocampisti[i][0]){
      rosa.push([cen5,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=16;
  }
  for(i=0; i<210; i++){
    if(cen6==centrocampisti[i][0]){
      rosa.push([cen6,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=17;
  }
  for(i=0; i<210; i++){
    if(cen7==centrocampisti[i][0]){
      rosa.push([cen7,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=18;
  }
  for(i=0; i<210; i++){
    if(cen8==centrocampisti[i][0]){
      rosa.push([cen8,centrocampisti[i][1]]);
      v2=0;
      break;
    } else v2=19;
  }

//attaccanti
  //inserire attacanti
  for(i=0; i<146; i++){
    if(att1==attaccanti[i][0]){
      rosa.push([att1,attaccanti[i][1]]);
      v3=0;
      break;
    } else v3=20;
  }
  for(i=0; i<146; i++){
    if(att2==attaccanti[i][0]){
      rosa.push([att2,attaccanti[i][1]]);
      v3=0;
      break;
    }else v3=21;
  }
  for(i=0; i<146; i++){
    if(att3==attaccanti[i][0]){
      rosa.push([att3,attaccanti[i][1]]);
      v3=0;
      break;
    } else v3=22;
  }
  for(i=0; i<146; i++){
    if(att4==attaccanti[i][0]){
      rosa.push([att4,attaccanti[i][1]]);
      v3=0;
      break;
    } else v3=23;
  }
  for(i=0; i<146; i++){
    if(att5==attaccanti[i][0]){
      rosa.push([att5,attaccanti[i][1]]);
      v3=0;
      break;
    } else v3=24;
  }
  for(i=0; i<146; i++){
    if(att6==attaccanti[i][0]){
      rosa.push([att6,attaccanti[i][1]]);
      v3=0;
      break;
    } else v3=25;
  }
  //controllo modulo e portieri validi o non validi
  if(m=="352"|| m=="343" || m=="451" || m=="442" || m=="433" || m=="532" || m=="541" ||m == 0){
  v4=0;
  }
  else {
    v4=1;
  }

  if(v>=1 && v<=3) {
  alert("hai inserito un portiere non valido");
  document.documentElement.scrollTop = 250;
  }
  else if(v1>=3 && v1<=11) {
  alert("hai inserito un difensore non valido");
  document.documentElement.scrollTop = 550;
  }
  else if(v2>=11 && v2<=19){
  alert("hai inserito un centrocampista non valido");
  document.documentElement.scrollTop = 1170;
  }
  else if(v3>=19 && v3<=25){
  alert("hai inserito un attaccante non valido");
  document.documentElement.scrollTop = 1790;
  }
  else if(v4>0){
  alert("hai inserito un modulo non valido");
  }

  //NON CONVOCATI E INFORTUNATI 1 = non convocati, 2 = infortunati;
  for(i=0; i<25; i++){
    for(var j=0; j<0; j++){
    if(rosa[i][0]==nc[j]){
      rosa[i][1]=0;
      break;
    }}}

    for(i=0; i<25; i++){
      for(var j=0; j<0; j++){
      if(rosa[i][0]==infortunati[j]){
        rosa[i][1]=0;
        break;
      }}}


//ordinamento Portieri
   var temp;
   var scambio=0;
   var s = 0;
   var c=2;

   do{
      scambio = 0;
      for(var i = 0; i <=2; i++)
      {
         for(var j = i + 1; j < 3; j++)
         {
            if(rosa[i][c - 1] > rosa[i + 1][c - 1])
            {
               scambio=1;
               while(s < c)
               {
                  temp = rosa[i][c - 1 - s];
                  rosa[i][c - 1 - s] = rosa[i + 1][c - 1 - s];
                  rosa[i + 1][c - 1 - s] = temp;
                  s++;
               }
               s = 0;
            }
         }
      }}while(scambio);

   //ordinamento difensori
   var temp;
   var scambio=0;
   var s = 0;
   var c=2;

   do{
      scambio = 0;
      for(var i = 3; i <=10; i++)
      {
         for(var j = i + 1; j < 11; j++)
         {
            if(rosa[i][c - 1] > rosa[i + 1][c - 1])
            {
               scambio=1;
               while(s < c)
               {
                  temp = rosa[i][c - 1 - s];
                  rosa[i][c - 1 - s] = rosa[i + 1][c - 1 - s];
                  rosa[i + 1][c - 1 - s] = temp;
                  s++;
               }
               s = 0;
            }
         }
      }}while(scambio);

   //ordinamento centrocampisti
   var temp;
   var scambio=0;
   var s = 0;
   var c=2;

   do{
      scambio =0;
      for(var i = 11; i <=18; i++)
      {
         for(var j = i + 1; j < 19; j++)
         {
            if(rosa[i][c - 1] > rosa[i + 1][c - 1])
            {
               scambio=1;
               while(s < c)
               {
                  temp = rosa[i][c - 1 - s];
                  rosa[i][c - 1 - s] = rosa[i + 1][c - 1 - s];
                  rosa[i + 1][c - 1 - s] = temp;
                  s++;
               }
               s = 0;
            }
         }
      }}while(scambio);

   //ordinamento attacanti
   var temp;
   var scambio=0;
   var s = 0;
   var c=2;

   do{
      scambio =0;
      for(var i = 19; i <=24; i++)
      {
         for(var j = i + 1; j < 25; j++)
         {
            if(rosa[i][c - 1] > rosa[i + 1][c - 1])
            {
               scambio=1;
               while(s < c)
               {
                  temp = rosa[i][c - 1 - s];
                  rosa[i][c - 1 - s] = rosa[i + 1][c - 1 - s];
                  rosa[i + 1][c - 1 - s] = temp;
                  s++;
               }
               s = 0;
            }
         }
      }}while(scambio);



   //trecinquedue
   trecinquedue.push([rosa[10][0], rosa[10][1]]);
   trecinquedue.push([rosa[9][0], rosa[9][1]]);
   trecinquedue.push([rosa[8][0], rosa[8][1]]);
   trecinquedue.push([rosa[18][0], rosa[18][1]]);
   trecinquedue.push([rosa[17][0], rosa[17][1]]);
   trecinquedue.push([rosa[16][0], rosa[16][1]]);
   trecinquedue.push([rosa[15][0], rosa[15][1]]);
   trecinquedue.push([rosa[14][0], rosa[14][1]]);
   trecinquedue.push([rosa[24][0], rosa[24][1]]);
   trecinquedue.push([rosa[23][0], rosa[23][1]]);

   //trequattrotre
   trequattrotre.push([rosa[10][0], rosa[10][1]]);
   trequattrotre.push([rosa[9][0], rosa[9][1]]);
   trequattrotre.push([rosa[8][0], rosa[8][1]]);
   trequattrotre.push([rosa[18][0], rosa[18][1]]);
   trequattrotre.push([rosa[17][0], rosa[17][1]]);
   trequattrotre.push([rosa[16][0], rosa[16][1]]);
   trequattrotre.push([rosa[15][0], rosa[15][1]]);
   trequattrotre.push([rosa[24][0], rosa[24][1]]);
   trequattrotre.push([rosa[23][0], rosa[23][1]]);
   trequattrotre.push([rosa[22][0], rosa[22][1]]);

   //quattrocinqueuno
   quattrocinqueuno.push([rosa[10][0], rosa[10][1]]);
   quattrocinqueuno.push([rosa[9][0], rosa[9][1]]);
   quattrocinqueuno.push([rosa[8][0], rosa[8][1]]);
   quattrocinqueuno.push([rosa[7][0], rosa[7][1]]);
   quattrocinqueuno.push([rosa[18][0], rosa[18][1]]);
   quattrocinqueuno.push([rosa[17][0], rosa[17][1]]);
   quattrocinqueuno.push([rosa[16][0], rosa[16][1]]);
   quattrocinqueuno.push([rosa[15][0], rosa[15][1]]);
   quattrocinqueuno.push([rosa[14][0], rosa[14][1]]);
   quattrocinqueuno.push([rosa[24][0], rosa[24][1]]);

   //quattroquattrodue
   quattroquattrodue.push([rosa[10][0], rosa[10][1]]);
   quattroquattrodue.push([rosa[9][0], rosa[9][1]]);
   quattroquattrodue.push([rosa[8][0], rosa[8][1]]);
   quattroquattrodue.push([rosa[7][0], rosa[7][1]]);
   quattroquattrodue.push([rosa[18][0], rosa[18][1]]);
   quattroquattrodue.push([rosa[17][0], rosa[17][1]]);
   quattroquattrodue.push([rosa[16][0], rosa[16][1]]);
   quattroquattrodue.push([rosa[15][0], rosa[15][1]]);
   quattroquattrodue.push([rosa[24][0], rosa[24][1]]);
   quattroquattrodue.push([rosa[23][0], rosa[23][1]]);

   //quattrotretre
   quattrotretre.push([rosa[10][0], rosa[10][1]]);
   quattrotretre.push([rosa[9][0], rosa[9][1]]);
   quattrotretre.push([rosa[8][0], rosa[8][1]]);
   quattrotretre.push([rosa[7][0], rosa[7][1]]);
   quattrotretre.push([rosa[18][0], rosa[18][1]]);
   quattrotretre.push([rosa[17][0], rosa[17][1]]);
   quattrotretre.push([rosa[16][0], rosa[16][1]]);
   quattrotretre.push([rosa[24][0], rosa[24][1]]);
   quattrotretre.push([rosa[23][0], rosa[23][1]]);
   quattrotretre.push([rosa[22][0], rosa[22][1]]);

   //cinquetredue
   cinquetredue.push([rosa[10][0], rosa[10][1]]);
   cinquetredue.push([rosa[9][0], rosa[9][1]]);
   cinquetredue.push([rosa[8][0], rosa[8][1]]);
   cinquetredue.push([rosa[7][0], rosa[7][1]]);
   cinquetredue.push([rosa[6][0], rosa[6][1]]);
   cinquetredue.push([rosa[18][0], rosa[18][1]]);
   cinquetredue.push([rosa[17][0], rosa[17][1]]);
   cinquetredue.push([rosa[16][0], rosa[16][1]]);
   cinquetredue.push([rosa[24][0], rosa[24][1]]);
   cinquetredue.push([rosa[23][0], rosa[23][1]]);

   //cinquequattrouno
   cinquequattrouno.push([rosa[10][0], rosa[10][1]]);
   cinquequattrouno.push([rosa[9][0], rosa[9][1]]);
   cinquequattrouno.push([rosa[8][0], rosa[8][1]]);
   cinquequattrouno.push([rosa[7][0], rosa[7][1]]);
   cinquequattrouno.push([rosa[6][0], rosa[6][1]]);
   cinquequattrouno.push([rosa[18][0], rosa[18][1]]);
   cinquequattrouno.push([rosa[17][0], rosa[17][1]]);
   cinquequattrouno.push([rosa[16][0], rosa[16][1]]);
   cinquequattrouno.push([rosa[15][0], rosa[15][1]]);
   cinquequattrouno.push([rosa[24][0], rosa[23][1]]);

   //calcolo sommeformazioni
   //somma 3-5-2
   for(i=0; i<10; i++){
     s352 = s352 + trecinquedue[i][1];
   }
   //somma 3-4-3
   for(i=0; i<10; i++){
     s343 = s343 + trequattrotre[i][1];
   }
   //somma 4-5-1
   for(i=0; i<10; i++){
     s451 = s451 + quattrocinqueuno[i][1];
   }
   //somma 4-4-2
   for(i=0; i<10; i++){
     s442 = s442 + quattroquattrodue[i][1];
   }
   //somma 4-3-3
   for(i=0; i<10; i++){
     s433 = s433 + quattrotretre[i][1];
   }
   //somma 5-3-2
   for(i=0; i<10; i++){
     s532 = s532 + cinquetredue[i][1];
   }
   //somma 5-4-1
   for(i=0; i<10; i++){
     s541 = s541 + cinquequattrouno[i][1];
   }

  //stampa formazione

    if (v4>0)
    document.documentElement.scrollTop = 2300;
    else if(m=="352"){
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[18][0];
      document.getElementById("g5").innerHTML = rosa[17][0];
      document.getElementById("g6").innerHTML = rosa[16][0];
      document.getElementById("g7").innerHTML = rosa[15][0];
      document.getElementById("g8").innerHTML = rosa[14][0];
      document.getElementById("g9").innerHTML = rosa[24][0];
      document.getElementById("g10").innerHTML = rosa[23][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(m=="343"){
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[18][0];
      document.getElementById("g5").innerHTML = rosa[17][0];
      document.getElementById("g6").innerHTML = rosa[16][0];
      document.getElementById("g7").innerHTML = rosa[15][0];
      document.getElementById("g8").innerHTML = rosa[24][0];
      document.getElementById("g9").innerHTML = rosa[23][0];
      document.getElementById("g10").innerHTML = rosa[22][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(m=="451"){
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[18][0];
      document.getElementById("g6").innerHTML = rosa[17][0];
      document.getElementById("g7").innerHTML = rosa[16][0];
      document.getElementById("g8").innerHTML = rosa[15][0];
      document.getElementById("g9").innerHTML = rosa[14][0];
      document.getElementById("g10").innerHTML = rosa[24][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(m=="442"){
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[18][0];
      document.getElementById("g6").innerHTML = rosa[17][0];
      document.getElementById("g7").innerHTML = rosa[16][0];
      document.getElementById("g8").innerHTML = rosa[15][0];
      document.getElementById("g9").innerHTML = rosa[24][0];
      document.getElementById("g10").innerHTML = rosa[23][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(m=="433"){
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[18][0];
      document.getElementById("g6").innerHTML = rosa[17][0];
      document.getElementById("g7").innerHTML = rosa[16][0];
      document.getElementById("g8").innerHTML = rosa[24][0];
      document.getElementById("g9").innerHTML = rosa[23][0];
      document.getElementById("g10").innerHTML = rosa[22][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(m=="532"){
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[6][0];
      document.getElementById("g6").innerHTML = rosa[18][0];
      document.getElementById("g7").innerHTML = rosa[17][0];
      document.getElementById("g8").innerHTML = rosa[16][0];
      document.getElementById("g9").innerHTML = rosa[24][0];
      document.getElementById("g10").innerHTML = rosa[23][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(m=="541"){
      document.getElementById("formazione").innerHTML = "La formazione consigliata in base al modulo è";
      document.getElementById("modulo").innerHTML = "";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[6][0];
      document.getElementById("g6").innerHTML = rosa[18][0];
      document.getElementById("g7").innerHTML = rosa[17][0];
      document.getElementById("g8").innerHTML = rosa[16][0];
      document.getElementById("g9").innerHTML = rosa[15][0];
      document.getElementById("g10").innerHTML = rosa[24][0];
            document.documentElement.scrollTop = 30000;
    }

    else if(s352>s343 && s352>s451 && s352>s442 && s352>s433 && s352>s532 && s352>s541){
    document.getElementById("formazione").innerHTML = "La formazione consigliata è";
    document.getElementById("modulo").innerHTML = "Modulo consigliato 3-5-2";
    document.getElementById("p").innerHTML = rosa[2][0];
    document.getElementById("g1").innerHTML = rosa[10][0];
    document.getElementById("g2").innerHTML = rosa[9][0];
    document.getElementById("g3").innerHTML = rosa[8][0];
    document.getElementById("g4").innerHTML = rosa[18][0];
    document.getElementById("g5").innerHTML = rosa[17][0];
    document.getElementById("g6").innerHTML = rosa[16][0];
    document.getElementById("g7").innerHTML = rosa[15][0];
    document.getElementById("g8").innerHTML = rosa[14][0];
    document.getElementById("g9").innerHTML = rosa[24][0];
    document.getElementById("g10").innerHTML = rosa[23][0];
          document.documentElement.scrollTop = 30000;
    }
  else if(s343>s352 && s343>s451 && s343>s442 && s343>s433 && s343>s532 && s343>s541){
      document.getElementById("formazione").innerHTML = "La formazione consigliata è";
      document.getElementById("modulo").innerHTML = "Modulo consigliato 3-4-3";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[18][0];
      document.getElementById("g5").innerHTML = rosa[17][0];
      document.getElementById("g6").innerHTML = rosa[16][0];
      document.getElementById("g7").innerHTML = rosa[15][0];
      document.getElementById("g8").innerHTML = rosa[24][0];
      document.getElementById("g9").innerHTML = rosa[23][0];
      document.getElementById("g10").innerHTML = rosa[22][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(s451>s343 && s451>s352 && s451>s442 && s451>s433 && s451>s532 && s451>s541){
      document.getElementById("formazione").innerHTML = "La formazione consigliata è";
      document.getElementById("modulo").innerHTML = "Modulo consigliato 4-5-1";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[18][0];
      document.getElementById("g6").innerHTML = rosa[17][0];
      document.getElementById("g7").innerHTML = rosa[16][0];
      document.getElementById("g8").innerHTML = rosa[15][0];
      document.getElementById("g9").innerHTML = rosa[14][0];
      document.getElementById("g10").innerHTML = rosa[24][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(s442>s343 && s442>s352 && s442>s451 && s442>s433 && s442>s532 && s442>s541){
      document.getElementById("formazione").innerHTML = "La formazione consigliata è";
      document.getElementById("modulo").innerHTML = "Modulo consigliato 4-4-2";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[18][0];
      document.getElementById("g6").innerHTML = rosa[17][0];
      document.getElementById("g7").innerHTML = rosa[16][0];
      document.getElementById("g8").innerHTML = rosa[15][0];
      document.getElementById("g9").innerHTML = rosa[24][0];
      document.getElementById("g10").innerHTML = rosa[23][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(s433>s352 && s433>s343 && s433>s451 && s433>s442 && s433>s532 && s433>s541){
      document.getElementById("formazione").innerHTML = "La formazione consigliata è";
      document.getElementById("modulo").innerHTML = "Modulo consigliato 4-3-3";
      document.getElementById("p").innerHTML = rosa[2][0];
      document.getElementById("g1").innerHTML = rosa[10][0];
      document.getElementById("g2").innerHTML = rosa[9][0];
      document.getElementById("g3").innerHTML = rosa[8][0];
      document.getElementById("g4").innerHTML = rosa[7][0];
      document.getElementById("g5").innerHTML = rosa[18][0];
      document.getElementById("g6").innerHTML = rosa[17][0];
      document.getElementById("g7").innerHTML = rosa[16][0];
      document.getElementById("g8").innerHTML = rosa[24][0];
      document.getElementById("g9").innerHTML = rosa[23][0];
      document.getElementById("g10").innerHTML = rosa[22][0];
            document.documentElement.scrollTop = 30000;
    }
    else if(s532>s352 && s532>s343 && s532>s451 && s532>s442 && s532>s433 && s532>s541){
        document.getElementById("formazione").innerHTML = "La formazione consigliata è";
        document.getElementById("modulo").innerHTML = "Modulo consigliato 5-3-2";
        document.getElementById("p").innerHTML = rosa[2][0];
        document.getElementById("g1").innerHTML = rosa[10][0];
        document.getElementById("g2").innerHTML = rosa[9][0];
        document.getElementById("g3").innerHTML = rosa[8][0];
        document.getElementById("g4").innerHTML = rosa[7][0];
        document.getElementById("g5").innerHTML = rosa[6][0];
        document.getElementById("g6").innerHTML = rosa[18][0];
        document.getElementById("g7").innerHTML = rosa[17][0];
        document.getElementById("g8").innerHTML = rosa[16][0];
        document.getElementById("g9").innerHTML = rosa[24][0];
        document.getElementById("g10").innerHTML = rosa[23][0];
              document.documentElement.scrollTop = 30000;
      }
      else if(s541>s352 && s541>s343 && s541>s451 && s541>s442 && s541>s433 && s541>s532){
        document.getElementById("formazione").innerHTML = "La formazione consigliata è";
        document.getElementById("modulo").innerHTML = "Modulo consigliato 5-4-1";
        document.getElementById("p").innerHTML = rosa[2][0];
        document.getElementById("g1").innerHTML = rosa[10][0];
        document.getElementById("g2").innerHTML = rosa[9][0];
        document.getElementById("g3").innerHTML = rosa[8][0];
        document.getElementById("g4").innerHTML = rosa[7][0];
        document.getElementById("g5").innerHTML = rosa[6][0];
        document.getElementById("g6").innerHTML = rosa[18][0];
        document.getElementById("g7").innerHTML = rosa[17][0];
        document.getElementById("g8").innerHTML = rosa[16][0];
        document.getElementById("g9").innerHTML = rosa[15][0];
        document.getElementById("g10").innerHTML = rosa[24][0];
              document.documentElement.scrollTop = 30000;
      }
      else{
        document.getElementById("formazione").innerHTML = "La formazione consigliata è";
        document.getElementById("modulo").innerHTML = "Modulo consigliato 4-3-3";
        document.getElementById("p").innerHTML = rosa[2][0];
        document.getElementById("g1").innerHTML = rosa[10][0];
        document.getElementById("g2").innerHTML = rosa[9][0];
        document.getElementById("g3").innerHTML = rosa[8][0];
        document.getElementById("g4").innerHTML = rosa[7][0];
        document.getElementById("g5").innerHTML = rosa[18][0];
        document.getElementById("g6").innerHTML = rosa[17][0];
        document.getElementById("g7").innerHTML = rosa[16][0];
        document.getElementById("g8").innerHTML = rosa[24][0];
        document.getElementById("g9").innerHTML = rosa[23][0];
        document.getElementById("g10").innerHTML = rosa[22][0];
              document.documentElement.scrollTop = 30000;
      }
}
