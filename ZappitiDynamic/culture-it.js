var cultureIt = new Array();
cultureIt.EmptyMenu = "Questo menu è vuoto.";
cultureIt.SearchResultFor = "Risultato: ";
cultureIt.NoSearchResult = "Nessun risultato.";
cultureIt.ConnectionTitle = "In connessione";
cultureIt.ErrorBadCredentialTitle = "Autenticazione fallita:";
cultureIt.ErrorBadCredentialMessage = "Per favore inserisci un account Zappiti valido.";
cultureIt.ErrorCloudNotActivatedTitle = "Zappiti Cloud non è attivo:";
cultureIt.ErrorCloudNotActivatedMessage = "Abilita la sincronizzazione su Zappiti Media Center, Impostazioni/Account, per continuare.";
cultureIt.ErrorZappitiPlayerNotActivatedTitle = "Zappiti Player non registrato:";
cultureIt.ErrorZappitiPlayerNotActivatedMessage = "Per continuare, assicurati di aver registrato il Token fornito con il tuo Zappiti Player su Zappiti Media Center. Infine, abilita la sincronizzazione su Impostazioni/Account.";
cultureIt.SignInTitle = "Connessione";
cultureIt.SignInEmail = "E-mail";
cultureIt.SignInPassword = "Password";
cultureIt.SignInEnter = "Entra";
cultureIt.SignInShowKeyboard = "&nbsp;Mostra la tastiera virtuale";
cultureIt.SignInDemoLabel = "&nbsp;Mostra l'account di prova";
cultureIt.SearchTitle = "Che cosa stai cercando?";
cultureIt.SearchMovie = "Film, Serie TV";
cultureIt.SearchAlbumPlaylist = "Album, Playlist";
cultureIt.SearchTrack = "Tracce musicali";
cultureIt.SearchActor = "Attori";
cultureIt.SearchDirector = "Registi";
cultureIt.SearchPerformer = "Artisti, Cantanti";
cultureIt.FileNotFound = "File non trovato:";
cultureIt.HelpSilver = "help-silver-en.jpg";
cultureIt.HelpDefault = "help-default-en.jpg";
cultureIt.AudioHelpSilver = "audio-help-silver-en.jpg";
cultureIt.AudioHelpDefault = "audio-help-default-en.jpg";
cultureIt.Yes = "Si";
cultureIt.No = "No";
cultureIt.OK = "OK";
cultureIt.QuitZappitiMessage = "Vuoi chiudere Zappiti e tornare all'interfaccia principale ?";
cultureIt.ChangelogTitle = "Version 0.4";
cultureIt.ChangelogMessage = "<div style='text-align:left;font-size:30px'>Miglioramenti :" +
    "<ul>" +
        "<li>Am&eacute;lioration des performances g&eacute;n&eacute;rales.</li>" +
        "<li>Correction de la navigation entre les synopsis et de la fonction de recherche apr&egrave;s avoir lanc&eacute; une vid&eacute;o.</li>" +
        "<li>Sauvegarde vos pr&eacute;f&eacute;rences pour l'affichage du Mur d'image.</li>" +
        "<li>Prise en charge du lancement des vid&eacute;os/musiques avec Zappiti Media Control (nouvelle version requise actuellement en cours validation).</li>" +
        "<li>L'interface utilise maintenant la langue param&eacute;tr&eacute;e dans Zappiti Media Center (si traduction disponible).</li>" +
        "<li>Diverses corrections et am&eacute;liorations.</li>" +
    "</ul>" +
    "<div>NB :<br/>N&eacute;cessite Zappiti v3.0 sur votre ordinateur :<br/>http://bit.ly/zmc-3-0-preview-fr</div>"
    + "</div>";
cultureIt.SetSeenstateTitle = "Stato di visualizzazione";
cultureIt.Unseen = "Non visto";
cultureIt.Seen = "Visto";
cultureIt.Ongoing = "In corso";

cultureIt.Keyboard = {
    // la liste de panels
    'alpha': [
        [
            { "key": "q" },
            { "key": "w" },
            { "key": "e" },
            { "key": "r" },
            { "key": "t" },
            { "key": "y" },
            { "key": "u" },
            { "key": "i" },
            { "key": "o" },
            { "key": "p" }
        ],
        [
            { "key": "a" },
            { "key": "s" },
            { "key": "d" },
            { "key": "f" },
            { "key": "g" },
            { "key": "h" },
            { "key": "j" },
            { "key": "k" },
            { "key": "l" },
            { "key": "!" }
        ],
        [
            { "key": "z" },
            { "key": "x" },
            { "key": "c" },
            { "key": "v" },
            { "key": "b" },
            { "key": "n" },
            { "key": "m" },
            { "key": "," },
            { "key": "." },
            { "key": "?" }
        ],
        [
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'alpha-numeric-up', 'class': 'dark' },
            { "key": " ", "width": 6, 'caption': 'Space' },
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'alpha-numeric-up', 'class': 'dark' }
        ]
    ],

    'alpha-up': [
        [
            { "key": "Q" },
            { "key": "W" },
            { "key": "E" },
            { "key": "R" },
            { "key": "T" },
            { "key": "Y" },
            { "key": "U" },
            { "key": "I" },
            { "key": "O" },
            { "key": "P" }
        ],
        [
            { "key": "A" },
            { "key": "S" },
            { "key": "D" },
            { "key": "F" },
            { "key": "G" },
            { "key": "H" },
            { "key": "J" },
            { "key": "K" },
            { "key": "L" },
            { "key": "-" }
        ],
        [
            { "key": "Z" },
            { "key": "X" },
            { "key": "C" },
            { "key": "V" },
            { "key": "B" },
            { "key": "N" },
            { "key": "M" },
            { "key": ";" },
            { "key": ":" },
            { "key": "/" },
        ],
        [
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'alpha-numeric', 'class': 'dark pressed' },
            { "key": " ", "width": 6, 'caption': 'Space' },
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'alpha-numeric', 'class': 'dark pressed' }
        ]
    ],

    'symbol': [
        [
            { "key": "&acirc;" },
            { "key": "&agrave;" },
            { "key": "&auml;" },
            { "key": "&aelig;" },
            { "key": "&eacute;" },
            { "key": "&egrave;" },
            { "key": "&ecirc;" },
            { "key": "&euml;" },
            { "key": "-" },
            { "key": "+" }
        ],
        [
            { "key": "&icirc;" },
            { "key": "&iuml;" },
            { "key": "&ocirc;" },
            { "key": "&ouml;" },
            { "key": "&ugrave;" },
            { "key": "&ucirc;" },
            { "key": "&uuml;" },
            { "key": "&ccedil;" },
            { "key": "*" },
            { "key": ";" }
        ],
        [
            { "key": "&euro;" },
            { "key": "$" },
            { "key": "&pound;" },
            { "key": "&lt;" },
            { "key": "&gt;" },
            { "key": "(" },
            { "key": ")" },
            { "key": "[" },
            { "key": "]" },
            { "key": "@" }
        ],
        [
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'symbols-up', 'class': 'dark' },
            { "key": " ", "width": 6, 'caption': 'Space' },
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'symbols-up', 'class': 'dark' }
        ]
    ],

    'symbol-up': [
        [
            { "key": "&Acirc;" },
            { "key": "&Agrave;" },
            { "key": "&Auml;" },
            { "key": "&AElig;" },
            { "key": "&Eacute;" },
            { "key": "&Egrave;" },
            { "key": "&Ecirc;" },
            { "key": "&Euml;" },
            { "key": "-" },
            { "key": "+" }
        ],
        [
            { "key": "&Icirc;" },
            { "key": "&Iuml;" },
            { "key": "&Ocirc;" },
            { "key": "&Ouml;" },
            { "key": "&Ugrave;" },
            { "key": "&Ucirc;" },
            { "key": "&Uuml;" },
            { "key": "&Ccedil;" },
            { "key": "*" },
            { "key": ";" }
        ],
        [
            { "key": "&yen;" },
            { "key": "&sect;" },
            { "key": "&deg;" },
            { "key": "`" },
            { "key": "&sup2;" },
            { "key": "{" },
            { "key": "}" },
            { "key": "^" },
            { "key": "~" },
            { "key": "&mu;" }
        ],
        [
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'symbols', 'class': 'dark pressed' },
            { "key": " ", "width": 6, 'caption': 'Space' },
            { "caption": "&#x21e7;", "width": 2, 'cmdShow': 'symbols', 'class': 'dark pressed' }
        ]
    ],

    'numeric': [
        [
            { "key": "1" },
            { "key": "2" },
            { "key": "3" }
        ],
        [
            { "key": "4" },
            { "key": "5" },
            { "key": "6" }
        ],
        [
            { "key": "7" },
            { "key": "8" },
            { "key": "9" }
        ],
        [
            { "caption": "&lArr;", 'class': 'dark' },
            { "key": "0" },
            { "caption": "&rArr;", 'class': 'dark' }
        ]
    ],


    'symbol2': [
        [
            { "key": "\\" },
            { "key": "#" },
            { "key": "=" }
        ],
        [
            { "key": "." },
            { "key": "|" },
            { "key": "_" }
        ],
        [
            { "key": "&amp;" },
            { "key": "&quot;" },
            { "key": "'" }
        ],
        [
            { "caption": "&lArr;", 'class': 'dark' },
            { "key": "%" },
            { "caption": "&rArr;", 'class': 'dark' }
        ]
    ],


    'control': [
        [
            { "caption": "&#x232b;", 'cmdErase': 1 }
        ],
        [
            { "caption": "Clear", "cmdClear": 1 }
        ],
        [
            { "caption": "Symbols", 'cmdShow': 'symbols' }
        ],
        [
            { "caption": "Enter", 'cmdSubmit': 1 }
        ]
    ],

    'control-up': [
        [
            { "caption": "&#x232b;", 'cmdErase': 1 }
        ],
        [
            { "caption": "Clear", "cmdClear": 1 }
        ],
        [
            { "caption": "Symbols", 'cmdShow': 'symbols-up' }
        ],
        [
            { "caption": "Enter", 'cmdSubmit': 1 }
        ]
    ],

    'control2': [
        [
            { "caption": "&#x232b;", 'cmdErase': 1 }
        ],
        [
            { "caption": "Clear", "cmdClear": 1 }
        ],
        [
            { "caption": "abc", 'cmdShow': 'alpha-numeric' }
        ],
        [
            { "caption": "Enter", 'cmdSubmit': 1 }
        ]
    ],

    'control2-up': [
        [
            { "caption": "&#x232b;", 'cmdErase': 1 }
        ],
        [
            { 'caption': "Clear", "cmdClear": 1 }
        ],
        [
            { "caption": "abc", 'cmdShow': 'alpha-numeric-up' }
        ],
        [
            { "caption": "Enter", 'cmdSubmit': 1 }
        ]
    ],

    // la liste des sets
    'alpha-numeric': [
            { 'name': 'alpha', 'width': "1160px", "padding": "0px 0px 0px 0px" },
            { 'name': 'control', 'width': "200px", "padding": "0px 16px 0px 16px" },
            { 'name': 'numeric', 'width': "355px", "padding": "0px 0px 0px 0px" }
    ],

    'alpha-numeric-up': [
            { 'name': 'alpha-up', 'width': "1160px", "padding": "0px 0px 0px 0px" },
            { 'name': 'control-up', 'width': "200px", "padding": "0px 16px 0px 16px" },
            { 'name': 'numeric', 'width': "355px", "padding": "0px 0px 0px 0px" }
    ],

    'symbols': [
            { 'name': 'symbol', 'width': "1160px", "padding": "0px 0px 0px 0px" },
            { 'name': 'control2', 'width': "200px", "padding": "0px 16px 0px 16px" },
            { 'name': 'symbol2', 'width': "355px", "padding": "0px 0px 0px 0px" }
    ],

    'symbols-up': [
            { 'name': 'symbol-up', 'width': "1160px", "padding": "0px 0px 0px 0px" },
            { 'name': 'control2-up', 'width': "200px", "padding": "0px 16px 0px 16px" },
            { 'name': 'symbol2', 'width': "355px", "padding": "0px 0px 0px 0px" }
    ]
};
