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
    "Týna": new Player("Týna", "Týna se urazila a přestala raidovat ve Vault tieru po tom co dostala bench na kterém bossovi?", "DH", "dps", false, ""),
    "Gagin": new Player("Gagin", "Gagin se IRL zná s jedním z officerů. Se kterým?", "DH", "dps", false, ""),
    "Lana": new Player("Lana", "Za kterou class začla Lana raidovat s IAO?", "Druid", "heal", false, ""),
    "Lesi": new Player("Lesi", "Co je to salamandr?", "Rogue", "dps", false, ""),
    "Weng": new Player("Weng", "V nicku Wengeancovo huntera (Nevrmore) se použit jeden speciální znak. Který znak to je?", "Rogue", "dps", false, ""),
    "Mia": new Player("Mia", "MIA PH", "Warrior", "dps", false, ""),
    "Punchie": new Player("Punchie", "PUNCHIE PH", "Warrior", "dps", false, ""),
    "Venda": new Player("Venda", "VENDA PH", "Warlock", "dps", false, ""),
    "Elg": new Player("Elg", "Pro každý tier od Nathrie přiřaď LGmu, jakého maina hrál. Pokud hrál více postav, uzná se ti i jen jedna z nich.", "Warlock", "dps", false, ""),
    "Daph": new Player("Daph", "Jaké zranění utrpěl Daph na historicky prvním velkém guildovním srazu?", "Warlock", "dps", false, ""),
    "Dralf": new Player("Dralf", "DRALF PH", "Druid", "dps", false, ""),
    "Andree": new Player("Andree", "Andree má moc rád jeden konkrétní dopravní prostředek. Jaký?", "Hunter", "dps", false, ""),
    "Dedgo": new Player("Dedgo", "DEDGO PH", "Hunter", "dps", false, ""),
    "Linda": new Player("Linda", "Padla evoker legendárka dříve Lindovi nebo LGmu?", "Evoker", "dps", false, ""),
    "Draruka": new Player("Draruka", "DRARUKA PH", "Evoker", "dps", false, ""),
    "Vophsi": new Player("Vophsi", "Jaká abilita je Vophsiho nemesis z Xy'moxe v Nathrii?", "Mage", "dps", false, ""),
    "Nolife": new Player("Nolife", "Kolik let bylo Nolifovi, když začal raidovat s IAO?", "Mage", "dps", false, ""),
    "Banán": new Player("Banán", "Banán nemá rád, když musí hrát holy. Je to totiž shadow main. Ano nebo ne?", "Priest", "heal", false, ""),
    "Lesienne": new Player("Lesienne", "Jak se jmenoval healer, který se s Lesiennem střídal na progressu Denathriuse, a který místo něj byl na killu?", "Priest", "heal", false, ""),
    "Papouch": new Player("Papouch", "PAPOUCH PH", "Shaman", "heal", false, ""),
    "Chilla": new Player("Chilla", "CHILLA PH", "Shaman", "heal", false, ""),
    "Zan": new Player("Zan", "ZAN PH", "Shaman", "dps", false, ""),
    "Suvoj": new Player("Suvoj", "Jaká je nejčastejší koncovka u Suvojových nicků postav?", "Paladin", "heal", false, ""),
    "Spaf": new Player("Spaf", "Spaf byl členem IAO už při jejím prvním mythic tieru. Ano nebo ne?", "Monk", "heal", false, ""),
    "Sussile": new Player("Sussile", "SUSSILE PH", "Monk", "tank", false, ""),
    "Hiruka": new Player("Hiruka", "Jakou roli zastává Honza ve svojí kapele, kterou nikdy nikdo neslyšel a nikde nehrála?", "DH", "tank", false, ""),
    "Janča": new Player("Janča", "JANČA PH <i>tohle znamená placeholder, aby bylo jasno...</i>", "DH", "dps", false, ""),
    "Solluna": new Player("Solluna", "SOLLUNA PH <i>tohle znamená placeholder, aby bylo jasno...</i>", "Shaman", "dps", false, ""),
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
        player: new Player("", "", "", "", false, "")
    },
    onTurn: "zoro"
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
        document.getElementById("otazkaTimer").style.display = "none";
    }
}

function setTurn(gdo){
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
 * Gets called every time an element is clicked
 * @param {HTMLDivElement} self 
 */
function onClick(self){
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
    game.otazka.timer = setInterval(() => {
        game.otazka.timeRemaining--;
        setProgress((game.otazka.timeRemaining / (10*60))*100);
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
        return;
    }
    setPopupVisibility(false);
    if(game.otazka.isCorrect){
        if(game.onTurn == "zoro"){
            game.otazka.player.team = "zoro";
            setColor(game.otazka.player.name, "zoro");
            game.otazka.isfinished = true;
            game.onTurn = "kropec";
            setTurn(game.onTurn);
            game.otazka.player.isPicked = true;
        }else{
            game.otazka.player.team = "kropec";
            setColor(game.otazka.player.name, "krop");
            game.otazka.isfinished = true;
            game.onTurn = "zoro";
            setTurn(game.onTurn);
            game.otazka.player.isPicked = true;
        }
    }
    else{
        game.otazka.player.team = "kosik";
        setColor(game.otazka.player.name, "dark");
        if(game.onTurn == "zoro"){
            game.onTurn = "kropec";
        }
        else{
            game.onTurn = "zoro"
        }
        setTurn(game.onTurn);
    }
}

function onEscPress(){
    console.log("esc pressed")
    if(game.otazka.isfinished){
        return;
    }
    if(!game.otazka.isRunning && game.otazka.isLaunched){
        if(game.onTurn == "zoro"){
            game.otazka.player.team = "kropec";
            setColor(game.otazka.player.name, "krop");
            game.otazka.player.isPicked = true;
            game.onTurn = "kropec";
            setTurn(game.onTurn);
            game.otazka.isfinished = true;
        }
        else{
            game.otazka.player.team = "zoro";
            setColor(game.otazka.player.name, "zoro");
            game.otazka.player.isPicked = true;
            game.onTurn = "zoro";
            setTurn(game.onTurn);
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
    }
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