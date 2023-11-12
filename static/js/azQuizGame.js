class Player{
    /**
     * 
     * @param {string} name 
     * @param {string} otazka 
     * @param {string} backupOtazka 
     * @param {boolean} isBackupAvailable 
     * @param {string} wowClass 
     * @param {string} role 
     * @param {boolean} isPicked 
     * @param {string} team 
     */
    constructor(name, otazka, backupOtazka, isBackupAvailable, wowClass, role, isPicked, team){
        this.name = name;
        this.otazka = otazka;
        this.backupOtazka = backupOtazka;
        this.isBackupAvailable = isBackupAvailable;
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
    "Kropec": new Player("Kropec", "lorem ipsum", "nezajem", false, "dk", "dps", true, "kropec"),
    "Zoro": new Player("Zoro", "lorem ipsum", "nezajem", false, "paladin", "dps", true, "zoro"),
    "Janča": new Player("Janča", "lorem ipsum", "nezajem", false, "dh", "dps", true, "zoro"),
    "Slečna Chillová": new Player("Slečna Chillová", "lorem ipsum", "nezajem", false, "dh", "dps", false, ""),
    "Týna": new Player("Týna", "Týna se urazila a přestala raidovat ve Vault tieru po tom co dostala bench na kterém bossovi?", "Týna nestíhá raidy a přestala hrát v minulém tieru. Má to ale naprosto pochopitelné vysvětlení, stala se maminkou (psí) a musela se starat o nového člena domácnosti. Je to pravda?", true, "druid", "dps", false, ""),
    "Gagin": new Player("Gagin", "Gagin se IRL zná s jedním z officerů. Se kterým?", "Gagin je jeden z našich nejstarších raiderů, s IAO raiduje už od raidu Battle for Dazar'Alor v BFA. Je to pravda?",  true, "dh", "dps", false, ""),
    "Lana": new Player("Lana", "Lana sbírá pety i v realitě a tak má doma už 3 kočky, z nichž každá je jiný recolor. O jaké 3 barvy se jedná?", "Lana se v průběhu dragonflightu rozhodla vyskillovat všechny profese a nabídnout gildě možnost craftu většiny itemů. V rámci nové sezóny se ale překonala a naučila se už úplně všechny dragonflight recepty, které by mohli naši raideři potřebovat. Je to pravda?", true, "druid", "heal", false, ""),
    "Lesi": new Player("Lesi", "Na BfA Lesi sháněl na svého guardian druida weapon, která byla známa svojí bezprecedentní mitigací (potvrzeno i Lesiho výpočty). Z kterého raidu tato mitigační zbraň padala?", "Lesiho nick pochází z doby jeho působení ve skautském oddíle v dětství a odkazuje na jeho expertní zálesácké dovednosti. Je to pravda?", true, "rogue", "dps", false, ""),
    "Weng": new Player("Weng", "V nicku Wengeancovo huntera (Nevrmore) se použit jeden speciální znak. Který znak to je?", "backup ph", false, "rogue", "dps", false, ""),
    "Mia": new Player("Mia", "Mia je další zástupkyní něžného pohlaví v mythic raidu IAO. Vyjmenuj alespoň 4 další ženy, které se v mythic raidu IAO pravidelně objevovaly.", "backup ph", false, "warrior", "dps", false, ""),
    "Punchie": new Player("Punchie", "Kolik AotC Punch za svou kariéru získal?", "Každý nováček musí prokázat, jak dobrý člověk je. K tomu u nás slouží jednoduchá otázka. Má Punch rád guláš?", true, "mage", "dps", false, ""),
    "Venda": new Player("Venda", "Vendův paladin byl dříve pojmenován podle jednoho z jeho kamarádů, se kterým přišel do guildy. Po dramatu s tímto člověkem byl paladin přejmenován podle druhého z jeho kamarádů. Uveď alespoň jeden z těchto nicků Vendova paladina.", "backup ph", false, "warlock", "dps", false, ""),
    "Elg": new Player("Elg", "Pro každý tier od Nathrie přiřaď LGmu, jakého maina hrál. Pokud hrál více postav, uzná se ti i jen jedna z nich.", "LGho nick vzinkl podle jeho oblíbené značky televizí, ano nebo ne?", true, "warlock", "dps", false, ""),
    "Daph": new Player("Daph", "Jaké zranění utrpěl Daph na historicky prvním velkém guildovním srazu?", "Daph je guild master IAO, protože se Lesi a LG nemohli dohodnout, kdo z nich by měl být v guildě důležitější. Ano nebo ne?", true, "warlock", "dps", false, ""),
    "Dralf": new Player("Dralf", "Balance druidů se historicky v IAO moc neobjevovalo, ale když už s námi nějaký raidoval, jednalo se většinou o dobré hráče. Vyjmenuj alespoň dva další IAO balance druidy, kteří se v R1 objevovali pravidelně na předních příčkách DPS metrů.", "Dralfův nick se správně vyslovuje \"Doktor Alf\", ano nebo ne?", true, "druid", "dps", false, ""),
    "Andree": new Player("Andree", "Andree má moc rád jeden konkrétní dopravní prostředek. Jaký?", "Andree občas postuje do channelu zvířátka obrázky svojí kočky. Ano nebo ne?", true, "hunter", "dps", false, ""),
    "Dedgo": new Player("Dedgo", "Nick Dedgo se podle všeho čte přesně tak, jak se píše. Jak ale s oblibou Dedgovi v guildě říkáme?", "Přijel se Dedgo podívat na Nolifův maturitní ples?", true, "hunter", "dps", false, ""),
    "Linda": new Player("Linda", "Padla evoker legendárka dříve Lindovi nebo LGmu?", "Linda se dlouho těšil na dracthyra a release DF byl pro něj splněný sen. Vzal to tak vážně, že při releasu smazal svého původního maina (druida), aby si mohl na nově založeném drakovi zachovat jeho nick. Je to pravda?", true, "evoker", "dps", false, ""),
    "Draruka": new Player("Draruka", "Kolik hodin má podle steamu Uruka nahráno na jeho oblíbeném hentai dating simulátoru s názvem Crush Crush? Tolerance 10 hodin.", "backup ph", false, "evoker", "dps", false, ""),
    "Vophsi": new Player("Vophsi", "Jaká abilita je Vophsiho nemesis z Xy'moxe v Nathrii?", "Vopes má rád worgeny a mágy a kromě postavy, se kterou raiduje, má i další Worgen-mage postavu/y. Je to pravda?", true, "mage", "dps", false, ""),
    "Nolife": new Player("Nolife", "Kolik let bylo Nolifovi, když začal raidovat s IAO?", "Patří Nolife do týmu \"přijdu dýl\" haterů?", true, "mage", "dps", false, ""),
    "Banán": new Player("Banán", "Banán je bezesporu náš nejlepší healer, byly ale doby kdy jeho skill byl potřeba na pozici tanka. Jaké jméno a classu má jeho postava, za kterou tankoval mythic progress v průběhu BfA?", "Banán je nóbl člověk a na offi srazech pije zásadně víno. Ano nebo ne?", true, "priest", "heal", false, ""),
    "Lesienne": new Player("Lesienne", "Jak se jmenoval healer, který se s Lesiennem střídal na progressu Denathriuse, a který místo něj byl na killu?", "Lesiennova poslední raidovací pauza byla zapříčiněna tím, že musel letět pracovně do Ugandy. Je to pravda?", true, "priest", "heal", false, ""),
    "Papouch": new Player("Papouch", "Kolik totemů celkem vyčaroval Papouch na killu Echa?", "Jména Paposnica, Papousnik jsou odvozená od Papouchovo životního přání pořídit si papouška. Je to pravda? (ne, už ho má)", true, "mage", "heal", false, ""),
    "Chilla": new Player("Chilla", "Chilla přišel do IAO na konci minulého tieru s dalšimi dvěma hráči. Kteří hráči to byli?", "Ve sbírání čehokoliv se Chilla drží na předních příčkách v rámci guildy. Má ale víc mountů než Lana?", true, "shaman", "heal", false, ""),
    "Zan": new Player("Zan", "Zan už má za sebou vydatný mythic progress v BfA, jak si říkala jeho tehdejší officerka, ke které měl blízko?", "backup ph", false, "paladin", "dps", false, ""),
    "Suvoj": new Player("Suvoj", "V úterý večer většinou Suvoje ingame nezastihnete, protože sportuje. Jakému sportu se Suvoj ve svém volném čase věnuje?", "Původní nick Suvojova paladina byl Palaidra. Ano nebo ne?", true, "paladin", "heal", false, ""),
    "Spaf": new Player("Spaf", "V jakém raidu z BfA expanze se Spaf poprvé objevil v IAO mythic rosteru?", "Spaf v IAO začínal za huntera. Ano nebo ne?", true, "monk", "heal", false, ""),
    "Sussile": new Player("Sussile", "Z jaké guildy k nám Sussiky přišel?", "V tomto patchi bude s námi Sussiky usilovat o své 5. CE. Je to pravda?", true, "monk", "tank", false, ""),
    "Hiruka": new Player("Hiruka", "Jakou roli zastává Honza ve svojí kapele, kterou nikdy nikdo neslyšel a nikde nehrála?", "Hirukova poprvé raidoval s IAO za paladina s nickem Oneechan. Ano nebo ne?", true, "dh", "tank", false, ""),
    "Olda": new Player("Olda", "V M+ nás Olda minulou sezónu vzorně reprezentoval se svým paladinem. Jaký healer rank na serveru se mu podařilo dosáhnout?", "Pítchifuk, Ukradenýkolo, Tragicomedy - to jsou osobitá jména Oldových postav. Patří mezi jeho alty i  nudně pojmenovaný char Belysra?", true, "dh", "dps", false, ""),
    "Cix": new Player("Cix", "V jakém převleku jste se mohli potkat s Cixem na posledním srazu, kdybyste na něj přijeli?", "Byl Cix součástí historicky prvního CE, které IAO získalo?", true, "warrior", "dps", false, ""),
    "Raspo": new Player("Raspo", "Nějakou dobu se v guildě objevovaly fámy o tom, že je Raspo brácha jednoho z našich raiderů. Čí brácha měl Raspo být?", "backup ph", false, "druid", "dps", false, ""),
    "Olgrin": new Player("Olgrin", "Olgrin do IAO přišel společně s dalšími hráči ze Seekers. Pamatujete si v jakém měsíci tu vznikla plantáž? ", "Zatímco někteří hunteři pojmenovávají svoje pety \"KurvoHero\" nebo \"TrhejPico\", Olgrin své válečné bestii, se kterou zabil i Echo, říká Frank. Je to pravda?", true, "hunter", "dps", false, ""),
    "Luriol": new Player("Luriol", "Než Lura přestal hrát, měl našlápnuto na silnou push sezónu. Jaký nejvyšší klíč timnul v prvním týdnu S2?", "backup ph", false, "paladin", "dps", false, ""),
    "Redhill": new Player("Redhill", "Paťas alias Redhill nebo Lopaťas je bájný válečník, jehož damage je postrachem každého tanka. Jakou class a roli hrál v Castle Nathria, kde aktivně raidoval s druhou raid grupou?", "Paťas bývá pod častou palbou kritiky od jeho nejlepších přátel. Proto se v těchto dnes často skrývá na svém magovi, kterého pojmenoval rafinovaně tak, aby nemohl nikoho zklamat - Nuladmgpatas. Je toto tvrzení pravdivé?", true, "warrior", "dps", false, ""),
    "Julka": new Player("Julka", "Julka v létě oslavil narození potomka. Kolikáté dítě už má?", "backup ph", false, "hunter", "dps", false, ""),
    "Labamba": new Player("Labamba", "Jakubko býval jednou z největších drama queen v IAO. Kolikrát leavl guildu?", "Přetočil Labambu Vopes na prvním mythic killu Terrose?", true, "mage", "dps", false, ""),
    "Zedd": new Player("Zedd", "Jaký je Zeddův oblíbený alkohol?", "Zed má hodně altů a jen o trochu méně dětí. Aktuálně má Zed doma 2 děti. Je to pravda?", true, "warrior", "dps", false, ""),



}
/**
 * @type {Array<string>}
 */
let guildOtazky = [
    "Kolik let už existuje IAO?",
    "Jaký byl první raid tier IAO?",
    "Za celou dobu se v IAO vystřídalo 9 officerů. Ano nebo ne?",
    "Vyjmenuj alespoň 4 z 5 zakládajících členů IAO.",
    "V kterém raidu dala IAO svůj první Cutting Edge?",
    "Kolik bossů na mythic zabila IAO v Uldiru?",
    "Se kterou guildou se IAO na pokraji rozpadu spojovala během Sepucher of the First Ones v Shadowlands?",
    "Jak se jmenovala první R2 v IAO a kdo jí vedl?",
    "IAO je Drak'thulská alianční streamovací velmoc. Vyjmenuj alespoň 5 streamerů co kdy byli v IAO.",
    "IAO se pyšní svým vlastním botem na memy a další useless věci. Starají se o něj 3 lidi, vyjmenuj alespoň 2 z nich.",
    "Ve druhé sezóně Shadowlands se odehrála velká bitva mezi dvěma týmy v guildě, kdo bude mít větší R.io. Jak se tyto dva týmy jmenovaly?",
    "Jaká je úhlová rychlost na kolotoči v Sanctum of Domination?"
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
    tymZoro: [players["Zoro"], players["Janča"]]
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
        document.getElementById("otazkaCudliky").style.display = "block";
    }
    else{
        updateTeams()
        document.getElementById("otazkaTimer").style.display = "none";
        document.getElementById("otazkaCudliky").style.display = "none";
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

function modButtonClick(team){
    setPopupVisibility(false);
    clearInterval(game.otazka.timer);
    game.otazka.isRunning = false;
    game.otazka.isCorrect = true;
    game.otazka.isSoundPlaying = false;
    game.otazka.sound.pause();
    if(game.onTurn == "zoro"){
        setTurn("kropec");
    }
    else{
        setTurn("zoro");
    }
    forceSelect(team);
}

/**
 * 
 * @param {string} team 
 */
function forceSelect(team){
    /**
     * @type {Player}
     */
    let player;
    if(!game.otazka.isfinished){
        player = game.otazka.player;
    }
    else{
        player = players[game.selectedTileName];
    }
    if(player.isPicked){
        if(player.team == "zoro"){
            if(player.name == "Chilla"){
                game.tymZoro.splice(game.tymZoro.indexOf(players["Slečna Chillová"]), 1);
            }
            game.tymZoro.splice(game.tymZoro.indexOf(player), 1);
        }
        if(player.team == "kropec"){
            if(player.name == "Chilla"){
                game.tymKropec.splice(game.tymKropec.indexOf(players["Slečna Chillová"]), 1);
            }
            game.tymKropec.splice(game.tymKropec.indexOf(player), 1);
        }
    }
    switch (team){
        case "zoro":
            player.isPicked = true;
            player.team = "zoro";
            game.tymZoro.push(player);
            if(player.name == "Chilla"){
                game.tymZoro.push(players["Slečna Chillová"]);
                players["Slečna Chillová"].isPicked = true;
                players["Slečna Chillová"].team = "zoro";
            }
            setColor(player.name,"zoro");
            break;
        case "kropec":
            player.isPicked = true;
            player.team = "kropec";
            game.tymKropec.push(player);
            if(player.name == "Chilla"){
                game.tymKropec.push(players["Slečna Chillová"]);
                players["Slečna Chillová"].isPicked = true;
                players["Slečna Chillová"].team = "kropec";
            }
            setColor(player.name,"krop");
            break;
        case "black":
            player.isPicked = false;
            player.team = "kosik";
            setColor(player.name,"dark");
            if(player.name == "Chilla"){
                players["Slečna Chillová"].isPicked = false;
                players["Slečna Chillová"].team = "kosik";
            }
            break;
        case "reset":
            player.isPicked = false;
            player.team = "";
            setColor(player.name,player.wowClass);
            if(player.name == "Chilla"){
                players["Slečna Chillová"].isPicked = false;
                players["Slečna Chillová"].team = "";
            }
            break;
    }
    game.otazka.isfinished = true;
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
    if(!game.otazka.isfinished){
        return;
    }
    let player = players[self.id.split("_")[1]]
    let otazka;
    if(player.isPicked){
        return;
    }
    if(player.team == "kosik"){
        if(player.isBackupAvailable){
            otazka = player.backupOtazka;
            player.isBackupAvailable = false;
        }
        else{
            id = getRandomInt(0,guildOtazky.length);
            otazka = guildOtazky[id];
            guildOtazky.splice(id, 1);
        }
        
    }
    else{
        otazka = player.otazka;
    }
    document.getElementById("progressbar").style.backgroundColor = game.onTurn == "zoro" ? "#F48CBA" : "#C41E3A"
    document.getElementById("otazkaTimer").style.borderColor = game.onTurn == "zoro" ? "#F48CBA" : "#C41E3A"
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
            if(game.otazka.player.name == "Chilla"){
                game.tymZoro.push(players["Slečna Chillová"]);
                players["Slečna Chillová"].isPicked = true;
                players["Slečna Chillová"].team = "zoro";
            }
            setColor(game.otazka.player.name, "zoro");
            game.otazka.isfinished = true;
            setTurn("kropec");
            game.otazka.player.isPicked = true;
        }else{
            game.otazka.player.team = "kropec";
            game.tymKropec.push(game.otazka.player);
            if(game.otazka.player.name == "Chilla"){
                game.tymKropec.push(players["Slečna Chillová"]);
                players["Slečna Chillová"].isPicked = true;
                players["Slečna Chillová"].team = "kropec";
            }
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

    this.settings.zoom = newHeight / 700;
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