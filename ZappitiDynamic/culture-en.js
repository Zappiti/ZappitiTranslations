var cultureEn = new Array();
cultureEn.EmptyMenu = "This menu is empty.";
cultureEn.SearchResultFor = "Results for: ";
cultureEn.NoSearchResult = "No results.";
cultureEn.ConnectionTitle = "Connecting";
cultureEn.ErrorBadCredentialTitle = "Authentication failed:";
cultureEn.ErrorBadCredentialMessage = "Thank you to enter a valide Zappiti username and password.";
cultureEn.ErrorCloudNotActivatedTitle = "Zappiti Cloud is not activated:";
cultureEn.ErrorCloudNotActivatedMessage = "Enable synchronization in Zappiti Media Center, Settings/Account, to continue.";
cultureEn.ErrorZappitiPlayerNotActivatedTitle = "Zappiti Player is not registered:";
cultureEn.ErrorZappitiPlayerNotActivatedMessage = "With Zappiti Media Center, make sure that you register the Token of your Zappiti Player to continue. Then, enable the synchronization in Settings/Account.";
cultureEn.SignInTitle = "Connection";
cultureEn.SignInEmail = "Email";
cultureEn.SignInPassword = "Password";
cultureEn.SignInEnter = "Enter";
cultureEn.SignInShowKeyboard = "&nbsp;Display the virtual keyboard";
cultureEn.SignInDemoLabel = "&nbsp;Show the demo account";
cultureEn.SearchTitle = "What are you searching for?";
cultureEn.SearchMovie = "Movies, TV Show";
cultureEn.SearchAlbumPlaylist = "Album, Playlist";
cultureEn.SearchTrack = "Audio title";
cultureEn.SearchActor = "Actor";
cultureEn.SearchDirector = "Director";
cultureEn.SearchPerformer = "Artist, Singer";
cultureEn.FileNotFound = "File not found:";
cultureEn.HelpSilver = "help-silver-en.jpg";
cultureEn.HelpDefault = "help-default-en.jpg";
cultureEn.AudioHelpSilver = "audio-help-silver-en.jpg";
cultureEn.AudioHelpDefault = "audio-help-default-en.jpg";
cultureEn.Yes = "Yes";
cultureEn.No = "No";
cultureEn.OK = "OK";
cultureEn.QuitZappitiMessage = "Do you want to quit Zappiti and display the native interface ?";
cultureEn.ChangelogTitle = "Version 0.4";
cultureEn.ChangelogMessage = "<div style='text-align:left; font-size:30px'>Improvements :" +
    "<ul>" +
        "<li>Improving overall performance.</li>" +
        "<li>Fixed navigation issues between synopsis and the with search function after launching a video.</li>" +
        "<li>Saving your preferences for displaying the image wall.</li>" +
        "<li>Support the launch of videos/music with Zappiti Media Control (new version currently in validation is required).</li>" +
        "<li>The interface now uses the language set in Zappiti Media Center (if available).</li>" +
        "<li>Various fixes and enhancements.</li>" +
    "</ul>" +
    "<div>NB :<br/>Requiere Zappiti v3.0 installed on your computer : :<br/>http://bit.ly/zmc-3-0-preview-en</div>"
    + "</div>";
cultureEn.SetSeenstateTitle = "Visualisation state";
cultureEn.Unseen = "Unseen";
cultureEn.Seen = "Seen";
cultureEn.Ongoing = "Ongoing";

cultureEn.Keyboard = {
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