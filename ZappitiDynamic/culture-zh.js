var cultureEn = new Array();
cultureEn.EmptyMenu = "這個清單是空的.";
cultureEn.SearchResultFor = "搜尋結果為: ";
cultureEn.NoSearchResult = "找不到.";
cultureEn.ConnectionTitle = "連結中";
cultureEn.ErrorBadCredentialTitle = "授權失敗:";
cultureEn.ErrorBadCredentialMessage = "感謝您輸入有效的 Zappiti 帳號與密碼.";
cultureEn.ErrorCloudNotActivatedTitle = "Zappiti Cloud 尚未啟用:";
cultureEn.ErrorCloudNotActivatedMessage = "如要繼續請在 Zappiti Media Center中,設定/帳戶 啟用同步 .";
cultureEn.ErrorZappitiPlayerNotActivatedTitle = "Zappiti Player 尚未註冊:";
cultureEn.ErrorZappitiPlayerNotActivatedMessage = "使用 Zappiti Media Center, 請確保你已經註冊 Zappiti Player ,並且在設定/帳戶中啟用同步.";
cultureEn.SignInTitle = "連結";
cultureEn.SignInEmail = "電子郵箱";
cultureEn.SignInPassword = "密碼";
cultureEn.SignInEnter = "輸入";
cultureEn.SignInShowKeyboard = "&nbsp;顯示虛擬鍵盤";
cultureEn.SignInDemoLabel = "&nbsp;使用Demo帳戶";
cultureEn.SearchTitle = "您正在搜尋什麼呢?";
cultureEn.SearchMovie = "電影, 電視影集";
cultureEn.SearchAlbumPlaylist = "相簿, 播放清單";
cultureEn.SearchTrack = "音樂標題";
cultureEn.SearchActor = "表演者";
cultureEn.SearchDirector = "指導者";
cultureEn.SearchPerformer = "歌手";
cultureEn.FileNotFound = "找不到檔案:";
cultureEn.HelpSilver = "help-silver-en.jpg";
cultureEn.HelpDefault = "help-default-en.jpg";
cultureEn.AudioHelpSilver = "audio-help-silver-en.jpg";
cultureEn.AudioHelpDefault = "audio-help-default-en.jpg";
cultureEn.Yes = "Yes";
cultureEn.No = "No";
cultureEn.OK = "OK";
cultureEn.QuitZappitiMessage = "是否退出 Zappiti 並且回到原始介面?";
cultureEn.ChangelogTitle = "Version 0.4";
cultureEn.ChangelogMessage = "<div style='text-align:left; font-size:30px'>Improvements :" +
    "<ul>" +
        "<li>Improving overall performance.</li>" +
        "<li>Fixed navigation issues between synopsis and the with search function after launching a video.</li>" +
        "<li>Saving your preferences for displaying the image wall.</li>" +
        "<li>Support the launch of videos/music with Zappiti Media Control (version 2.3 on iOS; version 1.6 on Android).</li>" +
        "<li>The interface now uses the language set in Zappiti Media Center (if available).</li>" +
        "<li>Various fixes and enhancements.</li>" +
    "</ul>" +
    "<div>NB :<br/>Requiere Zappiti v3.0 installed on your computer : :<br/>http://bit.ly/zmc-3-0-preview-en</div>"
    + "</div>";
cultureEn.SetSeenstateTitle = "Visualisation state";
cultureEn.Unseen = "未看過";
cultureEn.Seen = "看過";
cultureEn.Ongoing = "進行中";

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
