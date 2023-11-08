class Player{
    /**
     * 
     * @param {string} name 
     * @param {string} otazka 
     * @param {string} wowClass 
     * @param {string} role 
     * @param {boolean} isPicked 
     * @param {string} team 
     */
    constructor(name, otazka, wowClass, role, isPicked, team){
        this.name = name;
        this.otazka = otazka;
        this.wowClass = wowClass;
        this.role = role;
        this.isPicked = isPicked;
        this.team = team;
        this.divRef = document.getElementById("div_" + this.name);
    }
}

const classList = "dk_hex dh_hex druid_hex evoker_hex hunter_hex krop_hex mage_hex monk_hex paladin_hex priest_hex shaman_hex warlock_hex warrior_hex zoro_hex rogue_hex";
/**
 * @type {Object<string,Player>}
 */
const players = {
    "Kropec": new Player("Kropec", "lorem ipsum", "dk", "dps", true, "kropec"),
    "Zoro": new Player("Zoro", "lorem ipsum", "paladin", "tank", true, "zoro"),
    "Týna": new Player("Týna", "Týna se urazila a přestala raidovat ve Vault tieru po tom co dostala bench na kterém bossovi?", "dh", "dps", false, ""),
    "Gagin": new Player("Gagin", "Gagin se IRL zná s jedním z officerů. Se kterým?", "dh", "dps", false, ""),
    "Lana": new Player("Lana", "Za kterou class začla Lana raidovat s IAO?", "druid", "heal", false, ""),
    "Lesi": new Player("Lesi", "Co je to salamandr?", "rogue", "dps", false, ""),
    "Weng": new Player("Weng", "V nicku Wengeancovo huntera (Nevrmore) se použit jeden speciální znak. Který znak to je?", "rogue", "dps", false, ""),
    "Mia": new Player("Mia", "MIA PH", "warrior", "dps", false, ""),
    "Punchie": new Player("Punchie", "PUNCHIE PH", "warrior", "dps", false, ""),
    "Venda": new Player("Venda", "VENDA PH", "warlock", "dps", false, ""),
    "Elg": new Player("Elg", "Pro každý tier od Nathrie přiřaď LGmu, jakého maina hrál. Pokud hrál více postav, uzná se ti i jen jedna z nich.", "warlock", "dps", false, ""),
    "Daph": new Player("Daph", "Jaké zranění utrpěl Daph na historicky prvním velkém guildovním srazu?", "warlock", "dps", false, ""),
    "Dralf": new Player("Dralf", "DRALF PH", "druid", "dps", false, ""),
    "Andree": new Player("Andree", "Andree má moc rád jeden konkrétní dopravní prostředek. Jaký?", "hunter", "dps", false, ""),
    "Dedgo": new Player("Dedgo", "DEDGO PH", "hunter", "dps", false, ""),
    "Linda": new Player("Linda", "Padla evoker legendárka dříve Lindovi nebo LGmu?", "evoker", "dps", false, ""),
    "Draruka": new Player("Draruka", "DRARUKA PH", "evoker", "dps", false, ""),
    "Vophsi": new Player("Vophsi", "Jaká abilita je Vophsiho nemesis z Xy'moxe v Nathrii?", "mage", "dps", false, ""),
    "Nolife": new Player("Nolife", "Kolik let bylo Nolifovi, když začal raidovat s IAO?", "mage", "dps", false, ""),
    "Banán": new Player("Banán", "Banán nemá rád, když musí hrát holy. Je to totiž shadow main. Ano nebo ne?", "priest", "heal", false, ""),
    "Lesienne": new Player("Lesienne", "Jak se jmenoval healer, který se s Lesiennem střídal na progressu Denathriuse, a který místo něj byl na killu?", "priest", "heal", false, ""),
    "Papouch": new Player("Papouch", "PAPOUCH PH", "shaman", "heal", false, ""),
    "Chilla": new Player("Chilla", "CHILLA PH", "shaman", "heal", false, ""),
    "Zan": new Player("Zan", "ZAN PH", "shaman", "dps", false, ""),
    "Suvoj": new Player("Suvoj", "Jaká je nejčastejší koncovka u Suvojových nicků postav?", "paladin", "heal", false, ""),
    "Spaf": new Player("Spaf", "Spaf byl členem IAO už při jejím prvním mythic tieru. Ano nebo ne?", "monk", "heal", false, ""),
    "Sussile": new Player("Sussile", "SUSSILE PH", "monk", "tank", false, ""),
    "Hiruka": new Player("Hiruka", "Jakou roli zastává Honza ve svojí kapele, kterou nikdy nikdo neslyšel a nikde nehrála?", "dh", "tank", false, ""),
    "Janča": new Player("Janča", "JANČA PH <i>tohle znamená placeholder, aby bylo jasno...</i>", "dh", "dps", false, ""),
    "Solluna": new Player("Solluna", "SOLLUNA PH <i>tohle znamená placeholder, aby bylo jasno...</i>", "shaman", "dps", false, ""),
}
/**
 * @type {Array<string>}
 */
let guildOtazky = [
    "Kolik let už existuje IAO?",
    "Jaký byl první raid tier IAO?",
    "Za celou dobu se v IAO vystřídalo 9 officerů. Ano nebo ne?"
]
const game = {
    otazka:{
        timeRemaining: 10*60,
        isRunning: false,
        isCorrect: false,
        isLaunched: false,
        isfinished: true,
        timer: null,
        player: new Player("", "", "", "", false, ""),
        isSoundPlaying: false,
        sound: document.getElementById("audio")
    },
    onTurn: "zoro",
    isContextMenuShown: false,
    selectedTileName: "",
    tymKropec: [players["Kropec"]],
    tymZoro: [players["Zoro"]]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var AzQuizGame = {
    players: [
        {
            name: "",
            color: "grey"
        },
        {
            name: "",
            color: "grey"
        }
    ],
    settings: {
        selectedNum: 0,
        gameStarted: false,
        zoom: 1,
        lottery: {
            isRunning: false,
            left: "",
            right: "",
            shapes: ["rect", "hex", "tria", "koso", "circ"],
            interval: null,
            keyCodeLeft: 16,
            keyCodeRight: 107 || 8 //8 is backspace
        },
        endGame: {
            side: [
                [1, 2, 4, 7, 11, 16, 22],
                [1, 3, 6, 10, 15, 21, 28],
                [22, 23, 24, 25, 26, 27, 28]
            ],
            done: [false, false, false],
            visited: [],
            toVisit: [],
            blink: true,
            timerWin: null
        },
        isQuestionActive: false
    },
    neighbors: [
        [],
        [2, 3],
        [1, 3, 4, 5],
        [1, 2, 5, 6],
        [2, 5, 7, 8],
        [2, 3, 4, 6, 8, 9],
        [3, 5, 9, 10],
        [4, 8, 11, 12],
        [4, 5, 7, 9, 12, 13],
        [5, 6, 8, 10, 13, 14],
        [6, 9, 14, 15],
        [7, 12, 16, 17],
        [7, 8, 11, 13, 17, 18],
        [8, 9, 12, 14, 18, 19],
        [9, 10, 13, 15, 19, 20],
        [10, 14, 20, 21],
        [11, 17, 22, 23],
        [11, 12, 16, 18, 23, 24],
        [12, 13, 17, 19, 24, 25],
        [13, 14, 18, 20, 25, 26],
        [14, 15, 19, 21, 26, 27],
        [15, 20, 27, 28],
        [16, 23],
        [16, 17, 22, 24],
        [17, 18, 23, 25],
        [18, 19, 24, 26],
        [19, 20, 25, 27],
        [20, 21, 26],
        [21, 27]
    ]
};

AzQuizGame.start = function () {
    //Starting animation
    $("#help, #lottery, #color_select").hide();
    $("#uvod").delay(2000).fadeOut(1000);

    this.bind();
};

AzQuizGame.applyColors = function () {
    var rmClasses = "blue_hex yellow_hex grey_hex green_hex red_hex";
    $("#img_tym_left").removeClass(rmClasses).addClass(this.players[0].color + "_hex");
    $("#img_tym_right").removeClass(rmClasses).addClass(this.players[1].color + "_hex");

    $("#tym0").removeClass(rmClasses).addClass(this.players[0].color + "_hex");
    $("#tym1").removeClass(rmClasses).addClass(this.players[1].color + "_hex");
};

/**
 * 
 * @param {string} player 
 * @param {string} color 
 */
function setColor(player, color){
    $("#div_" + player).removeClass(classList).addClass(color + "_hex");
}

/**
 * 
 * @param {number} percentage 
 */
function setProgress(percentage){
    let perc = "" + percentage + "%";
    document.getElementById("progressbar").style.width = perc;
    console.log(perc);
}

/**
 * 
 * @param {boolean} flag 
 */
function setPopupVisibility(flag){
    if(flag){
        document.getElementById("otazkaTimer").style.display = "block";
    }
    else{
        updateTeams()
        document.getElementById("otazkaTimer").style.display = "none";
    }
}

function setTurn(gdo){
    game.onTurn = gdo;
    if(gdo == "kropec"){
        document.getElementById("name_tym_kropec").style.fontWeight = "bold";
        document.getElementById("name_tym_zoro").style.fontWeight = "normal";
    }
    else{
        document.getElementById("name_tym_kropec").style.fontWeight = "normal";
        document.getElementById("name_tym_zoro").style.fontWeight = "bold";
    }
}

setTurn(game.onTurn);

/**
 * 
 * @param {boolean} flag 
 */
function setContextMenuVisibility(flag, e){
    game.isContextMenuShown = flag
    if(flag){
        var menu = document.getElementById("contextMenu")      
        menu.style.display = 'block'; 
        menu.style.left = (e.clientX) / Number(document.body.style.zoom) + "px"; 
        menu.style.top = (e.clientY) / Number(document.body.style.zoom) + "px"; 
    }
    else{
        document.getElementById("contextMenu").style.display = "none";
    }
}

/**
 * 
 * @param {HTMLDivElement} self 
 * @param {MouseEvent} e 
 */
function onRightClick(self, e){
    if (game.isContextMenuShown){ 
        setContextMenuVisibility(false);
    }else{ 
        setContextMenuVisibility(true, e);
        game.selectedTileName = self.id.split("_")[1];
    } 
}

/**
 * 
 * @param {string} team 
 */
function forceSelect(team){
    player = players[game.selectedTileName];
    if(player.isPicked){
        if(player.team == "zoro"){
            game.tymZoro.splice(game.tymZoro.indexOf(player), 1);
        }
        if(player.team == "kropec"){
            game.tymKropec.splice(game.tymKropec.indexOf(player), 1);
        }
    }
    switch (team){
        case "zoro":
            player.isPicked = true;
            player.team = "zoro";
            game.tymZoro.push(player);
            setColor(player.name,"zoro");
            break;
        case "kropec":
            player.isPicked = true;
            player.team = "kropec";
            game.tymKropec.push(player);
            setColor(player.name,"krop");
            break;
        case "black":
            player.isPicked = false;
            player.team = "kosik";
            setColor(player.name,"dark");
            break;
        case "reset":
            player.isPicked = false;
            player.team = "";
            setColor(player.name,player.wowClass);
            break;
    }
    updateTeams();
}

function updateTeams(){
    /*game.tymKropec = [];
    game.tymZoro = [];
    for(let i in players){
        if(players[i].team == "kropec"){
            game.tymKropec.push(players[i]);
        }
        else if(players[i].team == "zoro"){
            game.tymZoro.push(players[i]);
        }
    }*/
    let kropTanks = [];
    let kropHeals = [];
    let kropDps = [];
    document.getElementById("tanks-kropec").innerHTML = "";
    document.getElementById("heals-kropec").innerHTML = "";
    document.getElementById("dps-kropec").innerHTML = "";
    for (const i of game.tymKropec) {
        switch (i.role){
            case "tank":
                document.getElementById("tanks-kropec").innerHTML += i.name + "<br>";
                kropTanks.push(i);
                break;
            case "heal":
                document.getElementById("heals-kropec").innerHTML += i.name + "<br>";
                kropHeals.push(i);
                break;
            case "dps":
                document.getElementById("dps-kropec").innerHTML += i.name + "<br>";
                kropDps.push(i);
                break;
        }
    }
    document.getElementById("tank-count-kropec").innerHTML = kropTanks.length;
    document.getElementById("heal-count-kropec").innerHTML = kropHeals.length;
    document.getElementById("dps-count-kropec").innerHTML = kropDps.length;
    
    let zoroTanks = [];
    let zoroHeals = [];
    let zoroDps = [];
    document.getElementById("tanks-zoro").innerHTML = "";
    document.getElementById("heals-zoro").innerHTML = "";
    document.getElementById("dps-zoro").innerHTML = "";
    for (const i of game.tymZoro) {
        switch (i.role){
            case "tank":
                document.getElementById("tanks-zoro").innerHTML += i.name + "<br>";
                zoroTanks.push(i);
                break;
            case "heal":
                document.getElementById("heals-zoro").innerHTML += i.name + "<br>";
                zoroHeals.push(i);
                break;
            case "dps":
                document.getElementById("dps-zoro").innerHTML += i.name + "<br>";
                zoroDps.push(i);
                break;
        }
    }
    document.getElementById("tank-count-zoro").innerHTML = zoroTanks.length;
    document.getElementById("heal-count-zoro").innerHTML = zoroHeals.length;
    document.getElementById("dps-count-zoro").innerHTML = zoroDps.length;
}

updateTeams();

/**
 * Gets called every time an element is clicked
 * @param {HTMLDivElement} self 
 */
function onClick(self){
    if(game.isContextMenuShown){
        setContextMenuVisibility(false);
        return;
    }
    let player = players[self.id.split("_")[1]]
    let otazka;
    if(player.isPicked){
        return;
    }
    if(player.team == "kosik"){
        id = getRandomInt(0,guildOtazky.length);
        otazka = guildOtazky[id];
        guildOtazky.splice(id, 1);
    }
    else{
        otazka = player.otazka;
    }
    document.getElementById("progressbar").style.backgroundColor = game.onTurn == "zoro" ? "#F48CBA" : "#C41E3A"
    setProgress(100)
    setPopupVisibility(true);
    document.getElementById("otazka-container").innerHTML = otazka;
    game.otazka.timeRemaining = 10*60;
    game.otazka.isRunning = false;
    game.otazka.isCorrect = false;
    game.otazka.isLaunched = false;
    game.otazka.isfinished = false;
    clearInterval(game.otazka.timer);
    game.otazka.timer = null;
    game.otazka.player = player;
}

function startTimer(){
    game.otazka.isRunning = true;
    game.otazka.isLaunched = true;
    game.otazka.isSoundPlaying = false;
    game.otazka.sound.currentTime = 0;
    game.otazka.timer = setInterval(() => {
        game.otazka.timeRemaining--;
        setProgress((game.otazka.timeRemaining / (10*60))*100);
        if (game.otazka.timeRemaining == 6.1*60){
            game.otazka.isSoundPlaying = true;
            game.otazka.sound.play();
        }
        if (game.otazka.timeRemaining == 0) {
            clearInterval(game.otazka.timer);
            game.otazka.isRunning = false;
        }
    }, 1000/60);
}

function onEnterPress(){
    console.log("enter pressed")
    if(game.otazka.isfinished){
        return;
    }
    if(!game.otazka.isLaunched){
        startTimer();
        return;
    }
    if(game.otazka.isRunning){
        clearInterval(game.otazka.timer);
        game.otazka.isRunning = false;
        game.otazka.isCorrect = true;
        game.otazka.isSoundPlaying = false;
        game.otazka.sound.pause();
        return;
    }
    if(game.otazka.isCorrect){
        if(game.onTurn == "zoro"){
            game.otazka.player.team = "zoro";
            game.tymZoro.push(game.otazka.player);
            setColor(game.otazka.player.name, "zoro");
            game.otazka.isfinished = true;
            setTurn("kropec");
            game.otazka.player.isPicked = true;
        }else{
            game.otazka.player.team = "kropec";
            game.tymKropec.push(game.otazka.player);
            setColor(game.otazka.player.name, "krop");
            game.otazka.isfinished = true;
            setTurn("zoro");
            game.otazka.player.isPicked = true;
        }
    }
    else{
        game.otazka.player.team = "kosik";
        setColor(game.otazka.player.name, "dark");
        if(game.onTurn == "zoro"){
            setTurn("kropec");
        }
        else{
            setTurn("zoro");
        }
    }
    setPopupVisibility(false);
}

function onEscPress(){
    console.log("esc pressed")
    if(game.otazka.isfinished){
        return;
    }
    if(!game.otazka.isRunning && game.otazka.isLaunched){
        if(game.onTurn == "zoro"){
            game.otazka.player.team = "kropec";
            game.tymKropec.push(game.otazka.player);
            setColor(game.otazka.player.name, "krop");
            game.otazka.player.isPicked = true;
            setTurn("kropec");
            game.otazka.isfinished = true;
        }
        else{
            game.otazka.player.team = "zoro";
            game.tymZoro.push(game.otazka.player);
            setColor(game.otazka.player.name, "zoro");
            game.otazka.player.isPicked = true;
            setTurn("zoro");
            game.otazka.isfinished = true;
        }
        setPopupVisibility(false);
    }
}

AzQuizGame.bind = function () {
    /**
     * @type {Array<HTMLElement>}
     */
    var fields = document.getElementsByClassName("number");
    for(let i of fields){
        i.addEventListener("click", () => {
            onClick(i);
        })
        i.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            onRightClick(i, e);
        })
    }
    document.body.addEventListener("click", () => {
        setContextMenuVisibility(false)
    })
    /*
    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("click", function (event) {
            AzQuizGame.selectHex(event);
        });
    }

    var colors = document.getElementsByClassName("colors");
    for (var j = 0; j < colors.length; j++) {
        colors[j].addEventListener("click", function (event) {
            AzQuizGame.selectColor(AzQuizGame.settings.selectedNum, event.toElement.id);
        });
    }*/

    document.addEventListener("keydown", function (e) {
        if (e.key == "Escape") {
            e.preventDefault();
            onEscPress();
        }
        else if (e.key == "Enter") {
            e.preventDefault();
            onEnterPress();
        }
    });

    var events = ["resize", "load"];
    for(i in events) {
        window.addEventListener(events[i], function() {
            AzQuizGame.setProperGameHeight();
        });
    }
};

AzQuizGame.setProperGameHeight = function(){
    var newHeight = window.innerHeight;
    var newWidth = (newHeight /  600) *  800;
    if(newWidth > window.innerWidth){
        newWidth = window.innerWidth;
        newHeight = (newWidth /  800) *  600;
    }

    this.settings.zoom = newHeight / 600;
    document.getElementById("body").style.zoom = this.settings.zoom;
};

/**
 * Is called on hex click
 * @param {Event} event 
 * @returns 
 */
AzQuizGame.selectHex = function (event) {
    if (!this.checkSetup()) {
        return;
    }
    this.settings.selectedNum = event.toElement.id.split("_")[1];
    var colorSelect = $('#color_select');
    colorSelect.css({
        top: (event.pageY  / this.settings.zoom) + 20,
        left: (event.pageX / this.settings.zoom) - (colorSelect.width() / 2)
    }).fadeIn(200);
};

AzQuizGame.checkSetup = function () {
    if (this.players[0].color === "grey" || this.players[1].color === "grey") {
        alert("Vyber barvu týmům / hráčům");
        return false;
    }
    if (this.players[0].color === this.players[1].color) {
        alert("Vyber rozdílnou barvu týmům / hráčům");
        return false;
    }
    if (this.players[0].name == "" || this.players[1].name == "") {
        alert("Nastav jména týmů / hráčů");
        return false;
    }
    this.settings.gameStarted = true;
    return true;
};

AzQuizGame.changePlayerColor = function (player) {
    if (!this.settings.gameStarted) {
        var currentColor = this.players[player].color;
        var newColor;
        switch (currentColor) {
            case "blue":
                newColor = "red";
                break;
            case "red":
                newColor = "green";
                break;
            case "green":
                newColor = "yellow";
                break;
            default:
                newColor = "blue";
        }
        this.players[player].color = newColor;

        this.applyColors();
    }
};

AzQuizGame.changePlayerName = function (player, name) {
    this.players[player].name = name;
};

AzQuizGame.selectColor = function (id, action) {
    if (action == "butt_los") {
        this.startLottery();
    } else {
        var $div = $("#div_" + id);
        $div.removeClass(this.players[0].color + "_hex " + this.players[1].color + "_hex dark_hex");

        if (action == "tym0") {
            $div.addClass(this.players[0].color + "_hex");
            this.startPrimGraph(id, this.players[0].color);
        }
        else if (action == "tym1") {
            $div.addClass(this.players[1].color + "_hex");
            this.startPrimGraph(id, this.players[1].color);
        }
        else if (action == "dark") {
            $div.addClass("dark_hex");
        }
    }
    $('#color_select').fadeOut(500);
};


AzQuizGame.startLottery = function () {
    this.settings.lottery.isRunning = true;
    $("#lottery").fadeIn(500);
    AzQuizGame.lottery();
    this.settings.lottery.interval = setInterval(function () {
        AzQuizGame.lottery();
    }, 700);
};

AzQuizGame.lottery = function () {
    var max = 4, min = 0;
    this.settings.lottery.left = Math.floor(Math.random() * (max - min + 1)) + min;
    this.settings.lottery.right = 4 - Math.floor(Math.random() * (max - min + 1)) + min;
    $("#los_leva").html("<img src=\"./obr/" + this.settings.lottery.shapes[this.settings.lottery.left] + "/" + this.settings.lottery.shapes[this.settings.lottery.left] + "_grey.png\">");
    $("#los_prava").html("<img src=\"./obr/" + this.settings.lottery.shapes[this.settings.lottery.right] + "/" + this.settings.lottery.shapes[this.settings.lottery.right] + "_grey.png\">");
};

AzQuizGame.lotteryKeyboardClick = function (keyCode) {
    this.settings.lottery.isRunning = false;
    clearInterval(this.settings.lottery.interval);

    if (this.settings.lottery.left == this.settings.lottery.right) {
        if (keyCode == this.settings.lottery.keyCodeLeft) {
            $("#los_leva").html("<img src=\"./obr/" + this.settings.lottery.shapes[this.settings.lottery.left] + "/" + this.settings.lottery.shapes[this.settings.lottery.left] + "_" + this.players[0].color + ".png\">");
            this.selectColor(this.settings.selectedNum, "tym0");
        }
        else if (keyCode == this.settings.lottery.keyCodeRight) {
            $("#los_prava").html("<img src=\"./obr/" + this.settings.lottery.shapes[this.settings.lottery.right] + "/" + this.settings.lottery.shapes[this.settings.lottery.right] + "_" + this.players[1].color + ".png\">");
            this.selectColor(this.settings.selectedNum, "tym1");
        }
    }
    else {
        if (keyCode == this.settings.lottery.keyCodeLeft) {
            $("#los_prava").html("<img src=\"./obr/" + this.settings.lottery.shapes[this.settings.lottery.right] + "/" + this.settings.lottery.shapes[this.settings.lottery.right] + "_" + this.players[1].color + ".png\">");
            this.selectColor(this.settings.selectedNum, "tym1");
        }
        else if (keyCode == this.settings.lottery.keyCodeRight) {
            $("#los_leva").html("<img src=\"./obr/" + this.settings.lottery.shapes[this.settings.lottery.left] + "/" + this.settings.lottery.shapes[this.settings.lottery.left] + "_" + this.players[0].color + ".png\">");
            this.selectColor(this.settings.selectedNum, "tym0");
        }
    }

    $("#lottery").delay(1000).fadeOut(500);
};

AzQuizGame.startPrimGraph = function (num, color) {
    this.settings.endGame.done = [false, false, false];
    this.settings.endGame.visited = [];
    this.settings.endGame.toVisit = [];
    clearInterval(this.settings.endGame.timerWin);

    this.primGraph(num, color);

    if (this.settings.endGame.done[0] && this.settings.endGame.done[1] && this.settings.endGame.done[2]) {
        this.endGame(color);
    }
};

AzQuizGame.endGame = function (winColor) {
    if (this.players[0].color === winColor) {
        alert("Vyhrál tým " + this.players[0].name);
    } else if (this.players[1].color === winColor) {
        alert("Vyhrál tým " + this.players[1].name);
    }
    var list = document.getElementsByClassName(winColor + "_hex");
    var winningIds = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].id.slice(0, 4) == "div_") {
            winningIds.push("#" + list[i].id);
        }
    }

    this.settings.endGame.timerWin = setInterval(function () {
        if (AzQuizGame.settings.endGame.blink) {
            $(winningIds.join(", ")).removeClass(winColor + "_hex");
            AzQuizGame.settings.endGame.blink = false;
        }
        else {
            $(winningIds.join(", ")).addClass(winColor + "_hex");
            AzQuizGame.settings.endGame.blink = true;
        }
    }, 200);
};


AzQuizGame.primGraph = function (pos, color) {
    pos = parseFloat(pos);
    this.settings.endGame.visited.push(pos);
    if (this.settings.endGame.side[0].indexOf(pos) != -1) {
        this.settings.endGame.done[0] = true;
    }
    if (this.settings.endGame.side[1].indexOf(pos) != -1) {
        this.settings.endGame.done[1] = true;
    }
    if (this.settings.endGame.side[2].indexOf(pos) != -1) {
        this.settings.endGame.done[2] = true;
    }
    for (var i = 0; i < this.neighbors[pos].length; i++) {
        var new_neigh = this.neighbors[pos][i];
        if (this.settings.endGame.toVisit.indexOf(new_neigh) == -1 && this.settings.endGame.visited.indexOf(new_neigh) < 0) {
            var src = $("div#div_" + new_neigh).attr("class");
            if (src.indexOf(color) != -1) {
                this.settings.endGame.toVisit.push(parseFloat(new_neigh));
            }
        }
    }
    if (this.settings.endGame.toVisit.length > 0) {
        var next_neigh = this.settings.endGame.toVisit.pop();
        this.primGraph(next_neigh, color);
    }
};

AzQuizGame.start();