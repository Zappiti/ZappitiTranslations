var cultureIt = new Array();
cultureIt.EmptyMenu = "Questo menu è vuoto.";
cultureIt.SearchResultFor = "Risultato: ";
cultureIt.NoSearchResult = "Nessun risultato.";
cultureIt.ConnectionTitle = "In connessione";
cultureIt.ErrorBadCredentialTitle = "Autenticazione fallita:";
cultureIt.ErrorBadCredentialMessage = "Per favore inserisci un account Zappiti valido.";
cultureIt.ErrorCloudNotActivatedTitle = "Zappiti Cloud non è attivo :";
cultureIt.ErrorCloudNotActivatedMessage = "<p align='left'>Abilita la sincronizzazione su Zappiti Media Center, Impostazioni/Account, per continuare. </p><p align='left'>Clicca su ENTER o RETURN per visualizzare le impostazioni, dove potrai selezionare un'altra libreria se hai ricevuto l'invito da un amico.</p>";
cultureIt.ErrorZappitiPlayerNotActivatedTitle = "Zappiti Player non registrato:";
cultureIt.ErrorZappitiPlayerNotActivatedMessage = "<p align='left'>Per continuare, assicurati di aver registrato il Token fornito con il tuo Zappiti Player su Zappiti Media Center. Infine, abilita la sincronizzazione su Impostazioni/Account.</p><p align='left'>Clicca su ENTER o RETURN per visualizzare le impostazioni, dove potrai selezionare un'altra libreria se hai ricevuto l'invito da un amico.</p>";
cultureIt.ErrorStreamingTitle = "Impossibile avviare lo stream di questo video";
cultureIt.ErrorStreamingMessage = "<p align='left'>Il server remoto non ha dato alcuna risposta. Il servizio potrebbe non essere disponibile. Per favore contatta il proprietario della libreria condivisa per controllare se Zappiti Media Center è stato avviato con l'opzione server attivata.</p>";
cultureIt.SetupLibrary = "Librerie";
cultureIt.SetupLibraryBody = "Seleziona la libreria che vuoi visualizzare :";
cultureIt.SetupLibraryMain = "La tua libreria :";
cultureIt.SetupLibraryOther = "Librerie condivise con te :";
cultureIt.SetupSettings = "Impostazioni";
cultureIt.SettingsPlayMode = "Modalità playback :";
cultureIt.SettingsStreamQuality = "Qualità streaming :";
cultureIt.SettingsStreamVariable = "Straming variabile :";
cultureIt.SettingsStreamSubtitlesSize = "Dimensione dei sottotitoli :";
cultureIt.SettingsPlayModeCaptions = ['Locale', 'Streaming'];
cultureIt.SettingsStreamQualityCaptions = ['Bassa', 'Normale', 'Alta;', 'HD'];
cultureIt.SettingsStreamVariableCaptions = ['Abilitato;', 'Disabilitato'];
cultureIt.SettingsStreamSubtitlesSizeCaptions = ['Molto piccola', 'Piccola', 'Normale', 'Alta', 'Molto alta'];
cultureIt.SetupDisconnect = "Logout";
cultureIt.SetupQuit = "Chiudi Zappiti";
cultureIt.SignInTitle = "Connessione";
cultureIt.SignInEmail = "E-mail";
cultureIt.SignInPassword = "Password";
cultureIt.SignInEnter = "Entra";
cultureIt.SignInShowKeyboard = "&nbsp;Mostra la tastiera virtuale";
cultureIt.SignInSetup = "Setup";
cultureIt.SignInShowSetup = "&nbsp;Mostra il pannello delle impostazioni";
cultureIt.SignInDemoLabel = "&nbsp;Mostra l'account di prova";
cultureIt.SearchTitle = "Che cosa stai cercando?";
cultureIt.SearchMovie = "Film, Serie TV";
cultureIt.SearchAlbumPlaylist = "Album";
cultureIt.SearchTrack = "Tracce musicali";
cultureIt.SearchActor = "Attori";
cultureIt.SearchDirector = "Registi";
cultureIt.SearchPerformer = "Artisti, Band";
cultureIt.FileNotFound = "File non trovato:";
cultureIt.StreamSelectAudio = "Seleziona l'audio :";
cultureIt.StreamSelectSubtitles = "Seleziona un sottotitolo :";
cultureIt.NoSubtitles = "Nessuno";
cultureIt.WaitforStream = "Avvio del playback...";
cultureIt.HelpSilver = "help-silver-en.jpg";
cultureIt.HelpDefault = "help-default-en.jpg";
cultureIt.AudioHelpSilver = "audio-help-silver-en.jpg";
cultureIt.AudioHelpDefault = "audio-help-default-en.jpg";
cultureIt.Yes = "Si";
cultureIt.No = "No";
cultureIt.OK = "OK";
cultureIt.QuitZappitiMessage = "Vuoi chiudere Zappiti e tornare all'interfaccia principale ?";
cultureIt.ChangelogTitle = "Version 1.1";
cultureIt.ChangelogMessage = "<div style='text-align:left;font-size:30px'>Miglioramenti :" +
    "<ul>" +
        "<li>E' stato aggiunto il menu impostazioni sul comando SETUP.</li>" +
        "<li>Puoi esplorare le librerie che i tuoi amici hanno condiviso con te.</li>" +
        "<li>Puoi avviare un video usando la funzione streaming da Zappiti Media Center (funziona anche con le librerie condivise).</li>" +
        "<li>Miglioramento generale della stabilità e interfaccia utente.</li>" +
    "</ul>" +
    "</div>";
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
            { "key": "@", 'class': 'dark' },
            { "key": "0" },
            { "key": ".com", 'class': 'dark' }
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
            { "key": "@", 'class': 'dark' },
            { "key": "%" },
            { "key": ".com", 'class': 'dark' }
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
