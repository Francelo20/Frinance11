// Marcações Muito Alta, Boa, Ruim
const btnMarMA = document.querySelector(".mrma");
btnMarMA.addEventListener("click", marcarma);

const btnMarBoa = document.querySelector(".mrb");
btnMarBoa.addEventListener("click", marcarboa);

const btnMarLat = document.querySelector(".mrl");
btnMarLat.addEventListener("click", marcarlate);

const btnMarQued = document.querySelector(".mrq");
btnMarQued.addEventListener("click", marcarqued);

const btnMarRuim = document.querySelector(".mrc");
btnMarRuim.addEventListener("click", marcarruim);

//Listas
let listma = ['ROSE','SYS','MDT','DUSK', 'FXS','ATOM', 'NEAR'];

let listboa= ['KEY','GNO','ZEC','ACH','LUNA','INJ','DEXE','ICP','KLAY','POLS','IOTA','OGN','LTC','XRP','QTUM','GALA','GNO','BTC',
    'ETH','VOXEL','SUPER','AR','ERN','WAXP','FLUX','POWR','PERP','XTZ','BTCST','LSK',
    'IRIS', 'GXS', 'FIO', 'CVC', 'COS', 'PNT', 'MKR', 'KP3R', 'DREP', 'XTZ'];

let listlat=['NULS'];

let listqued=['FIRO','TROY'];

let listruim = ['TORN','BADGER','MINA','ANT','REP','VGX','DIA','RNDR','BNX','NANO','OG','ALPACA','NEO','BETA','FRONT','DF','TCT','CFX','UTK','MITH','ADA','EOS','VET','YGG','TRIBE',
    'PEOPLE','MOVR','BURGER','FIDA','RIF','AUTO','PHA','IDEX','AMP','ASR','FIS','AUCTION','SPELL','POLY',
    'ELF','PYR', 'WING', 'QI', 'DATA', 'SLP', 'PLA', 'BICO', 'PORTO'];


let destaques = ['NULS', 'TROY', 'GLMR', 'KP3R']
//aplicando às listas finais
//document.querySelector('#muitaltas').innerHTML= listma
//document.querySelector('#boas').innerHTML= listboa
//document.querySelector('#ruins').innerHTML= listruim


//MUITO ALTAS
function marcarma(){
    
    btnMarMA.style.backgroundColor= "#fff"
    for( let c=0; listma.length; c++){
        let talma = document.getElementById(`mo_${listma[c]}`)
        talma.style.backgroundColor = "#0b5623" //verde escurao
    }
}
// BOAS
function marcarboa(){
    
    btnMarBoa.style.backgroundColor= "#fff"
    for(let c=0; listboa.length; c++){
        let talbo= document.getElementById(`mo_${listboa[c]}`)
        talbo.style.backgroundColor= "#d2dd54" //amarelo esverdeado

    }
       
}
//lateralizadas
function marcarlate(){
    btnMarLat.style.backgroundColor="#fff"
    for(let c=0; listlat.length; c++){
        let talla= document.getElementById(`mo_${listlat[c]}`)
        talla.style.backgroundColor ="#7576c2"
    }
}
//em queda prolongada
function marcarqued(){
    btnMarQued.style.backgroundColor = "#fff"
    for(let c=0; listqued.length; c++){
        let talqu= document.getElementById(`mo_${listqued[c]}`)
        talqu.style.backgroundColor ="#cf821c"

    }
}

//RUINS
function marcarruim(){
    
    btnMarRuim.style.backgroundColor= "#fff"
    //console.log(listruim.length)

    for( let c=0; listruim.length; c++){
        let talru = document.getElementById(`mo_${listruim[c]}`)
        talru.style.backgroundColor = "#f7281d" //vermelho
    }
    console.log(listruim)

}

function destaq(){
    document.getElementById('destaq').innerHTML =destaques
}
destaq()


let lissuport=[
    {"cryp":"1INCH", "sup":[1.42200000,0.20000000], "qualymes":[6,3], "rmaxt": 0.43, "atual":1.47000000},
    {"cryp":"AAVE", "sup":[25.93900000,131.10000000], "qualymes":[6,3], "rmaxt": 0.5, "atual":135.50000000},
    {"cryp":"ACH", "sup":[0.03232000], "qualymes":[3], "rmaxt": 1, "atual":0.03614000},
    {"cryp":"ACM", "sup":[3.36200000,3.34800000], "qualymes":[3,3,3,3], "rmaxt": 0.08, "atual":3.52300000},
    {"cryp":"ADA", "sup":[0.99700000,0.95200000,0.95100000,0.91700000,0.01765000], "qualymes":[6,3], "rmaxt": 0.91, "atual":0.99800000},
    {"cryp":"ADX", "sup":[0.37200000,0.37040000], "qualymes":[3], "rmaxt": 0.25, "atual":0.37890000},
    {"cryp":"AGLD", "sup":[0.69700000], "qualymes":[3], "rmaxt": 0.25, "atual":0.73900000},
    {"cryp":"AION", "sup":[0.07510000,0.03730000], "qualymes":[6,3], "rmaxt": 0.67, "atual":0.07800000},
    {"cryp":"AKRO", "sup":[0.01062000,0.01055000,0.00758300], "qualymes":[6,3], "rmaxt": 0.4, "atual":0.01101000},
    {"cryp":"ALCX", "sup":[141.40000000], "qualymes":[3], "rmaxt": 0.33, "atual":148.20000000},
    {"cryp":"ALGO", "sup":[0.84530000,0.81700000,0.79570000,0.09580000], "qualymes":[3,6], "rmaxt": 0.03, "atual":0.85130000},
    {"cryp":"ALICE", "sup":[5.75000000,5.70000000,3.17000000,0.10000000], "qualymes":[3,6], "rmaxt": 0.09, "atual":6.01000000},
    {"cryp":"ALPACA", "sup":[0.28720000,0.28490000,0.27970000,0.27860000,0.25060000], "qualymes":[3,3], "rmaxt": 0.17, "atual":0.29670000},
    {"cryp":"ALPHA", "sup":[0.35880000,0.34670000,0.34540000,0.30300000,0.02000000], "qualymes":[6,3,3,3], "rmaxt": 0.31, "atual":0.36050000},
    {"cryp":"AMP", "sup":[0.02552000,0.02550000,0.02400000], "qualymes":[3], "rmaxt": 0.33, "atual":0.02677000},
    {"cryp":"ANKR", "sup":[0.05711000,0.05681000,0.05654000,0.04761000,0.00063700], "qualymes":[6,6], "rmaxt": 0.68, "atual":0.05933000},
    {"cryp":"ANT", "sup":[3.95800000,3.39900000,3.00360000,2.60830000], "qualymes":[3,6,6], "rmaxt": 0.06, "atual":4.67700000},
    {"cryp":"ANY", "sup":[17.80000000,12.00000000], "qualymes":[6], "rmaxt": 1, "atual":19.07000000},
    {"cryp":"API3", "sup":[3.50000000], "qualymes":[3], "rmaxt": 1, "atual":3.63300000},
    {"cryp":"AR", "sup":[7.10100000,27.38000000,27.27000000], "qualymes":[6], "rmaxt": 0.78, "atual":28.61000000},
    {"cryp":"ARDR", "sup":[0.14490000,0.11678000,0.08713000,0.02119000], "qualymes":[6,6,3], "rmaxt": 0.57, "atual":0.14960000},
    {"cryp":"ARPA", "sup":[0.04962000,0.04921000,0.00326000], "qualymes":[6], "rmaxt": 0.93, "atual":0.05205000},
    {"cryp":"ASR", "sup":[2.64700000,2.62500000,2.55000000], "qualymes":[3,3,3,3], "rmaxt": 0.07, "atual":2.73400000},
    {"cryp":"ATA", "sup":[0.33830000,0.33580000,0.04139000], "qualymes":[3,3], "rmaxt": 0.13, "atual":0.35650000},
    {"cryp":"ATM", "sup":[4.54000000,4.53000000,4.09900000], "qualymes":[6,3,3], "rmaxt": 0.43, "atual":4.69000000},
    {"cryp":"ATOM", "sup":[29.81000000,20.18000000,1.06100000], "qualymes":[6,6], "rmaxt": 0.88, "atual":32.64000000},
    {"cryp":"AUCTION", "sup":[11.66000000], "qualymes":[3], "rmaxt": 0.5, "atual":12.05000000},
    {"cryp":"AUD", "sup":[0.71100000,0.71060000,0.70930000,0.65260000], "qualymes":[3,3,3,3], "rmaxt": 0.22, "atual":0.71110000},
    {"cryp":"AUDIO", "sup":[0.76300000,0.59000000,0.02000000], "qualymes":[6,6], "rmaxt": 0.38, "atual":0.80600000},
    {"cryp":"AUTO", "sup":[367.30000000,367.00000000,366.10000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":381.70000000},
    {"cryp":"AVA", "sup":[0.97700000,0.65000000], "qualymes":[6,3,3], "rmaxt": 0.4, "atual":1.02400000},
    {"cryp":"AVAX", "sup":[55.14000000,52.95000000,0.85000000], "qualymes":[6], "rmaxt": 0.88, "atual":58.01000000},
    {"cryp":"AXS", "sup":[44.42000000,0.10000000], "qualymes":[6], "rmaxt": 0.87, "atual":46.74000000},
    {"cryp":"BADGER", "sup":[6.56600000,3.06300000], "qualymes":[3,6], "rmaxt": 0.09, "atual":8.91000000},
    {"cryp":"BAKE", "sup":[0.52300000,0.52100000], "qualymes":[3,3,3], "rmaxt": 0.2, "atual":0.55100000},
    {"cryp":"BAL", "sup":[8.37500000,10.40000000], "qualymes":[6,3,3], "rmaxt": 0.56, "atual":10.87000000},
    {"cryp":"BAND", "sup":[2.97300000,0.19230000], "qualymes":[6,3,3], "rmaxt": 0.69, "atual":3.14400000},
    {"cryp":"BAR", "sup":[5.11000000,5.10000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":5.27000000},
    {"cryp":"BAT", "sup":[0.65230000,0.65220000,0.63200000,0.08000000], "qualymes":[6], "rmaxt": 0.94, "atual":0.67790000},
    {"cryp":"BCH", "sup":[259.60000000,129.00000000], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":270.90000000},
    {"cryp":"BEAM", "sup":[0.26890000,0.13060000], "qualymes":[6,3], "rmaxt": 0.69, "atual":0.28490000},
    {"cryp":"BEL", "sup":[0.73100000,0.72800000,0.60060000], "qualymes":[3,3,3], "rmaxt": 0.06, "atual":0.76600000},
    {"cryp":"BETA", "sup":[0.33265000,0.06001000], "qualymes":[3], "rmaxt": 0.25, "atual":0.35096000},
    {"cryp":"BICO", "sup":[1.81900000], "qualymes":[3], "rmaxt": 0.5, "atual":1.89200000},
    {"cryp":"BLZ", "sup":[0.10580000,0.10510000,0.04521000], "qualymes":[6,3], "rmaxt": 0.44, "atual":0.10980000},
    {"cryp":"BNB", "sup":[346.70000000,336.50000000,336.00000000,317.02000000,0.50000000], "qualymes":[6,6], "rmaxt": 0.84, "atual":347.30000000},
    {"cryp":"BNT", "sup":[2.14400000,2.08700000,0.11300000], "qualymes":[6,3], "rmaxt": 0.58, "atual":2.14400000},
    {"cryp":"BNX", "sup":[15.80000000], "qualymes":[3], "rmaxt": 0.33, "atual":16.40000000},
    {"cryp":"BOND", "sup":[10.30000000], "qualymes":[3], "rmaxt": 0.57, "atual":10.60000000},
    {"cryp":"BTC", "sup":[2817.00000000], "qualymes":[6], "rmaxt": 0.96, "atual":33702.14000000},
    {"cryp":"BTCST", "sup":[8.00000000,13.71000000,13.43000000,13.26000000,11.63700000], "qualymes":[3,3,6], "rmaxt": 0.08, "atual":13.71000000},
    {"cryp":"BTG", "sup":[25.77000000], "qualymes":[3,3,3], "rmaxt": 0.2, "atual":26.31000000},
    {"cryp":"BTS", "sup":[0.02034000,0.01993000,0.01990000,0.00875000], "qualymes":[6,3,3], "rmaxt": 0.63, "atual":0.02036000},
    {"cryp":"BTT", "sup":[0.00271000,0.00259600,0.00254200,0.00244500,0.00200200,0.00188690,0.00012480], "qualymes":[6,6,3], "rmaxt": 0.76, "atual":0.00277700},
    {"cryp":"BURGER", "sup":[1.44400000,1.44200000,1.42800000], "qualymes":[3,3], "rmaxt": 0.2, "atual":1.49100000},
    {"cryp":"BUSD", "sup":[0.99970000,0.99950000,0.98880000,0.98830000,0.97000000,0.00050000], "qualymes":[3,3,3,3,3], "rmaxt": 0.03, "atual":0.99970000},
    {"cryp":"C98", "sup":[1.38900000,1.34600000,1.34000000,0.07541000], "qualymes":[6,3], "rmaxt": 0.29, "atual":1.40300000},
    {"cryp":"CAKE", "sup":[6.99000000,6.82000000,6.81000000], "qualymes":[3,3,3], "rmaxt": 0.25, "atual":7.02000000},
    {"cryp":"CELO", "sup":[2.89100000,1.58800000], "qualymes":[6,3], "rmaxt": 0.62, "atual":2.98300000},
    {"cryp":"CELR", "sup":[0.04671000,0.04663000,0.04438000,0.04424000,0.00091000], "qualymes":[6,3], "rmaxt": 0.89, "atual":0.04700000},
    {"cryp":"CFX", "sup":[0.09120000], "qualymes":[3,3,3], "rmaxt": 0.09, "atual":0.09440000},
    {"cryp":"CHESS", "sup":[0.85700000], "qualymes":[3], "rmaxt": 0.25, "atual":0.88600000},
    {"cryp":"CHR", "sup":[0.29650000,0.01590000], "qualymes":[6], "rmaxt": 0.9, "atual":0.48320000},
    {"cryp":"CHZ", "sup":[0.16170000,0.15890000,0.15810000,0.00381300,0.00380000], "qualymes":[6,3], "rmaxt": 0.66, "atual":0.16200000},
    {"cryp":"CITY", "sup":[7.95000000], "qualymes":[3], "rmaxt": 0.33, "atual":8.37000000},
    {"cryp":"CKB", "sup":[0.01245000,0.00784500,0.00485000], "qualymes":[6,6], "rmaxt": 0.23, "atual":0.01279000},
    {"cryp":"CLV", "sup":[0.35100000,0.34100000,0.33800000], "qualymes":[3,3], "rmaxt": 0.14, "atual":0.35200000},
    {"cryp":"COCOS", "sup":[1.02570000,1.00380000,0.98560000,0.59860000,0.00017100], "qualymes":[6], "rmaxt": 0.93, "atual":1.03950000},
    {"cryp":"COMP", "sup":[80.62000000,114.20000000,114.00000000,110.30000000,109.30000000], "qualymes":[6,3,3], "rmaxt": 0.6, "atual":114.40000000},
    {"cryp":"COS", "sup":[0.01258000,0.01248000,0.00342000], "qualymes":[6], "rmaxt": 0.97, "atual":0.01317000},
    {"cryp":"COTI", "sup":[0.00850000], "qualymes":[6], "rmaxt": 0.88, "atual":0.23190000},
    {"cryp":"CRV", "sup":[2.36400000,0.33000000,0.32800000], "qualymes":[3,6], "rmaxt": 0.06, "atual":2.46300000},
    {"cryp":"CTK", "sup":[1.09100000,1.04000000,0.88370000,0.75000000,0.69010000], "qualymes":[3,3,6], "rmaxt": 0.06, "atual":1.09800000},
    {"cryp":"CTSI", "sup":[0.37820000,0.01506000], "qualymes":[6,3], "rmaxt": 0.64, "atual":0.39450000},
    {"cryp":"CTXC", "sup":[0.02510000], "qualymes":[6], "rmaxt": 0.96, "atual":0.27550000},
    {"cryp":"CVC", "sup":[0.19550000,0.19540000,0.19530000,0.19050000,0.00969000], "qualymes":[6,3], "rmaxt": 0.87, "atual":0.19550000},
    {"cryp":"CVP", "sup":[0.92500000], "qualymes":[3], "rmaxt": 0.25, "atual":0.96000000},
    {"cryp":"CVX", "sup":[23.50000000], "qualymes":[3], "rmaxt": 1, "atual":24.22000000},
    {"cryp":"DAR", "sup":[0.63129000,0.02300000], "qualymes":[3], "rmaxt": 0.33, "atual":0.64790000},
    {"cryp":"DASH", "sup":[80.60000000,31.33000000], "qualymes":[6,3,3], "rmaxt": 0.77, "atual":82.00000000},
    {"cryp":"DATA", "sup":[0.06270000,0.03100000], "qualymes":[6,3], "rmaxt": 0.59, "atual":0.06468000},
    {"cryp":"DCR", "sup":[6.00200000,51.10000000,50.40000000,50.00000000], "qualymes":[6,3,3], "rmaxt": 0.53, "atual":51.10000000},
    {"cryp":"DEGO", "sup":[3.06000000], "qualymes":[3,3], "rmaxt": 0.09, "atual":3.13000000},
    {"cryp":"DENT", "sup":[0.00225900,0.00219600,0.00218700,0.00156060,0.00006550], "qualymes":[6,6,3], "rmaxt": 0.7, "atual":0.00227000},
    {"cryp":"DEXE", "sup":[5.71000000,5.54000000,5.53000000,3.96700000], "qualymes":[3,3], "rmaxt": 0.14, "atual":5.73000000},
    {"cryp":"DF", "sup":[0.08820000,0.08710000,0.08510000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.08820000},
    {"cryp":"DGB", "sup":[0.01846000,0.01823000,0.01821000,0.01747000,0.01717000], "qualymes":[6,3,3], "rmaxt": 0.58, "atual":0.01854000},
    {"cryp":"DIA", "sup":[0.75400000,0.73000000], "qualymes":[3,3,3], "rmaxt": 0.53, "atual":0.75700000},
    {"cryp":"DNT", "sup":[0.06830000,0.06720000,0.06580000,0.03864000], "qualymes":[6,3,3], "rmaxt": 0.4, "atual":0.06840000},
    {"cryp":"DOCK", "sup":[0.03654000,0.03641000,0.03550000,0.03104200,0.00223400], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":0.03661000},
    {"cryp":"DODO", "sup":[0.44600000,0.43600000,0.43300000], "qualymes":[3,3,3,3], "rmaxt": 0.08, "atual":0.45000000},
    {"cryp":"DOGE", "sup":[0.12560000,0.12000000,0.00113450], "qualymes":[6,3,3], "rmaxt": 0.74, "atual":0.12950000},
    {"cryp":"DOT", "sup":[2.00000000], "qualymes":[6], "rmaxt": 0.89, "atual":16.38000000},
    {"cryp":"DREP", "sup":[0.72070000,0.70140000,0.69630000,0.66000000,0.35500000,0.31500000,0.00035000], "qualymes":[6,6], "rmaxt": 0.64, "atual":0.72310000},
    {"cryp":"DUSK", "sup":[0.51390000,0.51310000,0.50020000,0.49760000,0.46050000,0.14950000,0.01060000], "qualymes":[6], "rmaxt": 0.97, "atual":0.51940000},
    {"cryp":"DYDX", "sup":[5.08700000,5.08000000,3.00000000], "qualymes":[3,3], "rmaxt": 0.2, "atual":5.24600000},
    {"cryp":"EGLD", "sup":[6.00000000,115.63000000], "qualymes":[6], "rmaxt": 0.88, "atual":121.67000000},
    {"cryp":"ELF", "sup":[0.31810000,0.26010000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.32760000},
    {"cryp":"ENJ", "sup":[1.32600000,0.03223000], "qualymes":[6], "rmaxt": 0.94, "atual":1.35800000},
    {"cryp":"ENS", "sup":[14.43000000], "qualymes":[3], "rmaxt": 0.33, "atual":14.97000000},
    {"cryp":"EOS", "sup":[2.02900000,1.99000000,1.35860000], "qualymes":[3,6,3,3], "rmaxt": 0.04, "atual":2.04200000},
    {"cryp":"EPS", "sup":[0.14690000,0.14230000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":0.15260000},
    {"cryp":"ERN", "sup":[4.13600000], "qualymes":[3,3], "rmaxt": 0.38, "atual":4.26400000},
    {"cryp":"ETC", "sup":[3.07260000,22.31000000,21.88000000,21.69000000,21.20000000], "qualymes":[6,3,3], "rmaxt": 0.82, "atual":22.57000000},
    {"cryp":"ETH", "sup":[81.79000000], "qualymes":[6], "rmaxt": 0.96, "atual":2215.74000000},
    {"cryp":"EUR", "sup":[1.12800000,1.12700000,1.09500000,1.05760000,1.04800000], "qualymes":[3,6,3,6], "rmaxt": 0.04, "atual":1.12900000},
    {"cryp":"FARM", "sup":[98.60000000,97.30000000,88.20000000,81.40000000,100.30000000], "qualymes":[3,3], "rmaxt": 0.17, "atual":101.30000000},
    {"cryp":"FET", "sup":[0.28370000,0.00735000], "qualymes":[6,3], "rmaxt": 0.89, "atual":0.29630000},
    {"cryp":"FIDA", "sup":[1.92700000,1.86400000,1.84000000,1.53100000,1.33100000], "qualymes":[3], "rmaxt": 0.6, "atual":1.96100000},
    {"cryp":"FIL", "sup":[17.24000000,16.82000000,10.00000000], "qualymes":[3,3,3,3], "rmaxt": 0.06, "atual":17.42000000},
    {"cryp":"FIO", "sup":[0.08390000,0.05780000], "qualymes":[6,3], "rmaxt": 0.47, "atual":0.08740000},
    {"cryp":"FIRO", "sup":[3.08200000,3.06000000], "qualymes":[3,3], "rmaxt": 0.38, "atual":3.21700000},
    {"cryp":"FIS", "sup":[0.62700000,0.61800000,0.61180000,0.60000000,0.58600000], "qualymes":[3,6,3], "rmaxt": 0.09, "atual":0.63420000},
    {"cryp":"FLM", "sup":[0.20800000,0.20350000,0.20270000,0.20190000,0.11840000], "qualymes":[3,6,3,3], "rmaxt": 0.06, "atual":0.21000000},
    {"cryp":"FLOW", "sup":[4.30000000], "qualymes":[3,3], "rmaxt": 0.14, "atual":4.46000000},
    {"cryp":"FLUX", "sup":[1.27800000,1.22000000], "qualymes":[3], "rmaxt": 0.5, "atual":1.31500000},
    {"cryp":"FOR", "sup":[0.03771000,0.03703000], "qualymes":[3,3], "rmaxt": 0.33, "atual":0.03897000},
    {"cryp":"FORTH", "sup":[4.45000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":4.60000000},
    {"cryp":"FRONT", "sup":[0.37000000], "qualymes":[3], "rmaxt": 0.25, "atual":0.38640000},
    {"cryp":"FTM", "sup":[1.90200000,1.77000000,1.15380000,0.00170000], "qualymes":[6], "rmaxt": 0.91, "atual":1.96780000},
    {"cryp":"FTT", "sup":[31.18000000,0.50000000], "qualymes":[6,3], "rmaxt": 0.85, "atual":32.02000000},
    {"cryp":"FUN", "sup":[0.00965000,0.00949000,0.00943000,0.00900000,0.00100100], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":0.00966000},
    {"cryp":"FXS", "sup":[18.37200000,18.29000000,18.16300000,18.15300000,18.12600000,18.11500000,13.34800000], "qualymes":[6], "rmaxt": 1, "atual":18.39000000},
    {"cryp":"GALA", "sup":[0.02103000], "qualymes":[6], "rmaxt": 0.6, "atual":0.16757000},
    {"cryp":"GBP", "sup":[1.34500000,1.29600000,1.27450000,1.24950000,1.01740000], "qualymes":[3,6,3,3], "rmaxt": 0.05, "atual":1.34600000},
    {"cryp":"GHST", "sup":[2.01200000,2.00900000,1.69500000,1.50800000], "qualymes":[6], "rmaxt": 0.67, "atual":2.01200000},
    {"cryp":"GLMR", "sup":[6.50000000,0.25000000], "qualymes":[3], "rmaxt": 1, "atual":6.64270000},
    {"cryp":"GNO", "sup":[219.10000000], "qualymes":[3], "rmaxt": 0.67, "atual":226.10000000},
    {"cryp":"GRT", "sup":[0.34380000,0.03000000], "qualymes":[6,3,3], "rmaxt": 0.21, "atual":0.35720000},
    {"cryp":"GTC", "sup":[5.85300000,4.62000000], "qualymes":[6], "rmaxt": 0.75, "atual":6.11000000},
    {"cryp":"GTO", "sup":[0.02681000,0.02674000,0.02570000,0.01800000,0.00254000], "qualymes":[6,6], "rmaxt": 0.71, "atual":0.02784000},
    {"cryp":"GXS", "sup":[0.26560000], "qualymes":[6], "rmaxt": 0.95, "atual":1.27310000},
    {"cryp":"HARD", "sup":[0.49820000,0.48890000,0.47600000,0.43910000,0.38200000,0.38110000], "qualymes":[3,3,3,3,3], "rmaxt": 0.07, "atual":0.50570000},
    {"cryp":"HBAR", "sup":[0.18810000,0.18600000,0.01761000,0.00914000], "qualymes":[6,3], "rmaxt": 0.86, "atual":0.19290000},
    {"cryp":"HIGH", "sup":[4.52000000], "qualymes":[3], "rmaxt": 0.5, "atual":4.68000000},
    {"cryp":"HIVE", "sup":[0.69210000,0.10150000], "qualymes":[6], "rmaxt": 0.91, "atual":0.74620000},
    {"cryp":"HNT", "sup":[19.70000000,0.68600000], "qualymes":[6], "rmaxt": 0.88, "atual":20.65000000},
    {"cryp":"HOT", "sup":[0.00408200,0.00407900,0.00400100,0.00384200,0.00250000,0.00019600], "qualymes":[6,3], "rmaxt": 0.75, "atual":0.00420900},
    {"cryp":"ICP", "sup":[19.06000000,18.89000000,18.41000000,18.06000000], "qualymes":[3,3,3], "rmaxt": 0.11, "atual":19.86000000},
    {"cryp":"ICX", "sup":[0.59300000,0.59000000,0.58900000,0.12150000,0.10660000], "qualymes":[6,3], "rmaxt": 0.77, "atual":0.61900000},
    {"cryp":"IDEX", "sup":[0.10534000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.10975000},
    {"cryp":"ILV", "sup":[493.20000000,414.50000000], "qualymes":[6], "rmaxt": 0.8, "atual":519.00000000},
    {"cryp":"IMX", "sup":[2.02100000,2.02000000,2.01000000], "qualymes":[3], "rmaxt": 1, "atual":2.08100000},
    {"cryp":"INJ", "sup":[3.75300000,3.75000000,0.18000000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":3.90300000},
    {"cryp":"IOST", "sup":[0.01991000,0.01976000,0.01970000,0.01887000,0.01614300,0.01427200,0.00136300], "qualymes":[6,6,3], "rmaxt": 0.74, "atual":0.02057000},
    {"cryp":"IOTA", "sup":[0.69430000,0.57380000,0.05340000], "qualymes":[6,6,3], "rmaxt": 0.8, "atual":0.72120000},
    {"cryp":"IOTX", "sup":[0.00103400], "qualymes":[6], "rmaxt": 0.93, "atual":0.06499000},
    {"cryp":"IRIS", "sup":[0.06235000,0.06183000,0.06105000,0.05263000,0.05133000,0.03162000], "qualymes":[6,6], "rmaxt": 0.5, "atual":0.06495000},
    {"cryp":"JASMY", "sup":[0.04390000], "qualymes":[3], "rmaxt": 0.33, "atual":0.04750000},
    {"cryp":"JOE", "sup":[0.66800000,0.65700000], "qualymes":[3], "rmaxt": 0.5, "atual":0.69100000},
    {"cryp":"JST", "sup":[0.03512000,0.03493000,0.03485000,0.03382000,0.01743000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":0.03595000},
    {"cryp":"JUV", "sup":[5.04000000,4.70100000], "qualymes":[3,3,3], "rmaxt": 0.07, "atual":5.25000000},
    {"cryp":"KAVA", "sup":[2.84500000,2.82100000,2.80500000,0.24030000], "qualymes":[6,3], "rmaxt": 0.82, "atual":2.94800000},
    {"cryp":"KEEP", "sup":[0.21130000], "qualymes":[6], "rmaxt": 0.63, "atual":0.37200000},
    {"cryp":"KEY", "sup":[0.00603300,0.00575000,0.00558300,0.00540700,0.00539700,0.00052700], "qualymes":[6,6], "rmaxt": 0.7, "atual":0.00604400},
    {"cryp":"KLAY", "sup":[0.82400000], "qualymes":[6], "rmaxt": 0.63, "atual":1.14400000},
    {"cryp":"KMD", "sup":[0.45310000,0.44620000,0.38800000], "qualymes":[6,3], "rmaxt": 0.5, "atual":0.46720000},
    {"cryp":"KNC", "sup":[1.33000000,1.28800000,1.25000000,1.16900000,1.12600000,1.08200000,0.68300000], "qualymes":[6,6], "rmaxt": 0.55, "atual":1.41700000},
    {"cryp":"KP3R", "sup":[547.25000000,1080.00000000,1050.18000000,1008.56000000], "qualymes":[3], "rmaxt": 0.33, "atual":1114.00000000},
    {"cryp":"KSM", "sup":[23.15800000,161.90000000], "qualymes":[6,3], "rmaxt": 0.53, "atual":168.50000000},
    {"cryp":"LAZIO", "sup":[2.87650000,2.85000000,2.83410000,1.00000000], "qualymes":[3], "rmaxt": 0.25, "atual":2.94920000},
    {"cryp":"LINA", "sup":[0.01999000,0.01989000,0.01979000], "qualymes":[3,3], "rmaxt": 0.09, "atual":0.02087000},
    {"cryp":"LINK", "sup":[14.22000000,13.71000000,13.62000000,13.48000000,13.38400000,0.00010000], "qualymes":[6,3], "rmaxt": 0.78, "atual":14.33000000},
    {"cryp":"LIT", "sup":[1.39500000,1.38600000,0.25000000], "qualymes":[3,3,3], "rmaxt": 0.08, "atual":1.45600000},
    {"cryp":"LOKA", "sup":[0.16000000], "qualymes":[3], "rmaxt": 1, "atual":1.48000000},
    {"cryp":"LPT", "sup":[10.68000000], "qualymes":[6], "rmaxt": 0.78, "atual":21.53000000},
    {"cryp":"LRC", "sup":[0.07100000], "qualymes":[6], "rmaxt": 0.9, "atual":0.78240000},
    {"cryp":"LSK", "sup":[1.46100000,1.42300000,1.41900000,0.51040000], "qualymes":[6,3,3], "rmaxt": 0.67, "atual":1.47000000},
    {"cryp":"LTC", "sup":[98.00000000,97.50000000,96.30000000,24.00000000,22.32000000], "qualymes":[6,3], "rmaxt": 0.84, "atual":102.40000000},
    {"cryp":"LTO", "sup":[0.17000000,0.13423000,0.02001000], "qualymes":[6,6], "rmaxt": 0.63, "atual":0.18120000},
    {"cryp":"LUNA", "sup":[0.27330000], "qualymes":[6], "rmaxt": 0.94, "atual":64.12000000},
    {"cryp":"MANA", "sup":[1.81000000,1.70500000,0.03000000], "qualymes":[6], "rmaxt": 0.89, "atual":1.89040000},
    {"cryp":"MASK", "sup":[4.71600000,2.99500000], "qualymes":[6], "rmaxt": 0.78, "atual":5.02100000},
    {"cryp":"MATIC", "sup":[1.33300000,1.30700000,1.30600000,0.00632000,0.00263000], "qualymes":[6], "rmaxt": 0.97, "atual":1.39600000},
    {"cryp":"MBL", "sup":[0.00452000,0.00451600,0.00021400], "qualymes":[6,3], "rmaxt": 0.63, "atual":0.00470400},
    {"cryp":"MBOX", "sup":[1.96900000], "qualymes":[6], "rmaxt": 0.83, "atual":2.40200000},
    {"cryp":"MC", "sup":[1.85000000], "qualymes":[3], "rmaxt": 0.5, "atual":1.95000000},
    {"cryp":"MDT", "sup":[0.05666000,0.05649000,0.05644000,0.04774000,0.03800000,0.00788000], "qualymes":[6], "rmaxt": 0.95, "atual":0.05793000},
    {"cryp":"MDX", "sup":[0.22600000,0.22100000], "qualymes":[3,3,3], "rmaxt": 0.22, "atual":0.23500000},
    {"cryp":"MFT", "sup":[0.00468700,0.00463600,0.00456700,0.00034300], "qualymes":[6,6], "rmaxt": 0.67, "atual":0.00490000},
    {"cryp":"MINA", "sup":[2.05000000], "qualymes":[3], "rmaxt": 0.67, "atual":2.18800000},
    {"cryp":"MIR", "sup":[1.20700000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":1.23500000},
    {"cryp":"MITH", "sup":[0.03076000,0.03050000,0.03000000,0.00198000], "qualymes":[6,3], "rmaxt": 0.74, "atual":0.03225000},
    {"cryp":"MKR", "sup":[429.79000000,1652.00000000,1616.00000000], "qualymes":[6,3,3], "rmaxt": 0.58, "atual":1750.00000000},
    {"cryp":"MLN", "sup":[49.90000000], "qualymes":[3,3], "rmaxt": 0.43, "atual":53.80000000},
    {"cryp":"MOVR", "sup":[67.10000000], "qualymes":[3], "rmaxt": 0.33, "atual":72.60000000},
    {"cryp":"MTL", "sup":[1.33200000,1.17700000,0.89720000,0.10470000], "qualymes":[6,6,3], "rmaxt": 0.67, "atual":1.38800000},
    {"cryp":"NANO", "sup":[2.14800000,2.09000000,2.04900000,1.85900000,0.25620000], "qualymes":[6,3,3], "rmaxt": 0.76, "atual":2.22400000},
    {"cryp":"NBS", "sup":[0.01054000,0.01000000,0.00899000,0.00373000], "qualymes":[6,6], "rmaxt": 0.47, "atual":0.01109000},
    {"cryp":"NEAR", "sup":[9.73100000,9.50900000,0.52460000], "qualymes":[6], "rmaxt": 1, "atual":10.40500000},
    {"cryp":"NEO", "sup":[3.89000000,16.11000000], "qualymes":[3,6,3,3], "rmaxt": 0.06, "atual":17.09000000},
    {"cryp":"NKN", "sup":[0.16950000,0.16790000,0.16355000,0.00554000], "qualymes":[6,6], "rmaxt": 0.68, "atual":0.17840000},
    {"cryp":"NMR", "sup":[19.78000000,19.01000000], "qualymes":[3,3,3], "rmaxt": 0.56, "atual":19.79000000},
    {"cryp":"NU", "sup":[0.40000000,0.17390000], "qualymes":[6], "rmaxt": 0.63, "atual":0.41620000},
    {"cryp":"NULS", "sup":[0.31550000,0.31330000,0.09000000], "qualymes":[3,6], "rmaxt": 0.02, "atual":0.32830000},
    {"cryp":"OCEAN", "sup":[0.53320000,0.32580000,0.23960000], "qualymes":[6,6], "rmaxt": 0.5, "atual":0.56420000},
    {"cryp":"OG", "sup":[2.71100000,2.71000000,2.36800000], "qualymes":[3,3,3,3], "rmaxt": 0.07, "atual":2.84000000},
    {"cryp":"OGN", "sup":[0.27170000,0.09890000], "qualymes":[6,3], "rmaxt": 0.64, "atual":0.29070000},
    {"cryp":"OM", "sup":[0.07680000], "qualymes":[3,3,3], "rmaxt": 0.09, "atual":0.08110000},
    {"cryp":"OMG", "sup":[3.68600000,0.30310000], "qualymes":[6], "rmaxt": 0.94, "atual":3.87400000},
    {"cryp":"ONE", "sup":[0.16722000,0.00118000], "qualymes":[6], "rmaxt": 0.91, "atual":0.17767000},
    {"cryp":"ONG", "sup":[0.55500000,0.55010000,0.03640000], "qualymes":[3,6,3,3], "rmaxt": 0.03, "atual":0.57890000},
    {"cryp":"ONT", "sup":[0.42710000,0.40750000,0.40560000,0.21070000], "qualymes":[3,6,3,3], "rmaxt": 0.02, "atual":0.42710000},
    {"cryp":"OOKI", "sup":[0.00932000], "qualymes":[3], "rmaxt": 0.5, "atual":0.00998000},
    {"cryp":"ORN", "sup":[3.11700000,3.06100000,1.33400000], "qualymes":[6,3,3], "rmaxt": 0.41, "atual":3.25400000},
    {"cryp":"OXT", "sup":[0.21340000,0.20320000,0.19600000], "qualymes":[6,3], "rmaxt": 0.47, "atual":0.21340000},
    {"cryp":"PAXG", "sup":[1837.00000000,1836.00000000,1830.00000000,1791.00000000,1759.00000000,1700.36000000,1687.57000000], "qualymes":[3,3,6], "rmaxt": 0.33, "atual":1839.00000000},
    {"cryp":"PEOPLE", "sup":[0.03050000], "qualymes":[3], "rmaxt": 0.5, "atual":0.03360000},
    {"cryp":"PERL", "sup":[0.04070000,0.03967000,0.03700000,0.01018000], "qualymes":[6,3], "rmaxt": 0.7, "atual":0.04253000},
    {"cryp":"PERP", "sup":[5.50000000,3.61800000], "qualymes":[6,3], "rmaxt": 0.55, "atual":5.86000000},
    {"cryp":"PHA", "sup":[0.23050000,0.22740000], "qualymes":[3,3], "rmaxt": 0.5, "atual":0.24110000},
    {"cryp":"PLA", "sup":[0.66400000,0.62400000], "qualymes":[3], "rmaxt": 0.33, "atual":0.69700000},
    {"cryp":"PNT", "sup":[0.53400000,0.27600000], "qualymes":[6,3,3], "rmaxt": 0.4, "atual":0.55980000},
    {"cryp":"POLS", "sup":[1.36800000,0.80000000], "qualymes":[6], "rmaxt": 0.89, "atual":1.46400000},
    {"cryp":"POLY", "sup":[0.30760000,0.29390000], "qualymes":[3], "rmaxt": 0.4, "atual":0.32380000},
    {"cryp":"POND", "sup":[0.03894000,0.03730000,0.03716000], "qualymes":[3,3,3], "rmaxt": 0.18, "atual":0.03923000},
    {"cryp":"PORTO", "sup":[2.62900000,2.53200000,2.53160000,1.00000000], "qualymes":[3], "rmaxt": 0.33, "atual":2.63190000},
    {"cryp":"POWR", "sup":[0.50700000,0.49200000,0.48560000,0.45790000,0.37510000,0.36400000], "qualymes":[3], "rmaxt": 0.33, "atual":0.50850000},
    {"cryp":"PSG", "sup":[7.68800000,11.70000000], "qualymes":[6,3], "rmaxt": 0.64, "atual":12.19000000},
    {"cryp":"PUNDIX", "sup":[0.67700000,0.67600000,0.65000000,0.63400000,0.57800000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":0.67800000},
    {"cryp":"PYR", "sup":[6.71000000,6.68000000], "qualymes":[3], "rmaxt": 0.33, "atual":7.16000000},
    {"cryp":"QI", "sup":[0.04270000], "qualymes":[3], "rmaxt": 0.33, "atual":0.04670000},
    {"cryp":"QNT", "sup":[91.80000000,86.10000000,84.00000000], "qualymes":[3,3], "rmaxt": 0.43, "atual":92.20000000},
    {"cryp":"QTUM", "sup":[4.94800000,0.71000000], "qualymes":[6,3], "rmaxt": 0.83, "atual":5.21000000},
    {"cryp":"QUICK", "sup":[156.70000000], "qualymes":[3,3], "rmaxt": 0.17, "atual":166.10000000},
    {"cryp":"RAD", "sup":[4.61600000], "qualymes":[3], "rmaxt": 0.25, "atual":4.82300000},
    {"cryp":"RAMP", "sup":[0.09030000], "qualymes":[3,3,3], "rmaxt": 0.09, "atual":0.09360000},
    {"cryp":"RARE", "sup":[0.38400000,0.37700000], "qualymes":[3], "rmaxt": 0.25, "atual":0.40600000},
    {"cryp":"RAY", "sup":[3.14200000], "qualymes":[3,3], "rmaxt": 0.17, "atual":3.29500000},
    {"cryp":"REEF", "sup":[0.00915000,0.00869000,0.00868000,0.00125000], "qualymes":[3,3,3], "rmaxt": 0.07, "atual":0.00918000},
    {"cryp":"REN", "sup":[0.24260000,0.01510000], "qualymes":[3,3], "rmaxt": 0.62, "atual":0.26120000},
    {"cryp":"REP", "sup":[4.80000000,11.62000000,11.19000000], "qualymes":[6,3,3], "rmaxt": 0.55, "atual":11.62000000},
    {"cryp":"REQ", "sup":[0.21540000,0.20620000,0.20240000,0.17590000,0.16560000], "qualymes":[6], "rmaxt": 0.67, "atual":0.21570000},
    {"cryp":"RGT", "sup":[18.00000000], "qualymes":[3], "rmaxt": 0.33, "atual":20.03000000},
    {"cryp":"RIF", "sup":[0.13690000,0.13380000,0.13130000,0.12400000], "qualymes":[3,3,3], "rmaxt": 0.08, "atual":0.13690000},
    {"cryp":"RLC", "sup":[1.52300000,1.51700000,0.00010000], "qualymes":[6,3], "rmaxt": 0.7, "atual":1.62800000},
    {"cryp":"RNDR", "sup":[1.80100000], "qualymes":[3], "rmaxt": 0.33, "atual":1.92800000},
    {"cryp":"ROSE", "sup":[0.28000000,0.16883000,0.03000000], "qualymes":[6], "rmaxt": 1, "atual":0.30312000},
    {"cryp":"RSR", "sup":[0.01640000,0.00751000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":0.01712000},
    {"cryp":"RUNE", "sup":[3.25700000,0.32240000], "qualymes":[6,3], "rmaxt": 0.53, "atual":3.44700000},
    {"cryp":"RVN", "sup":[0.05817000,0.05554000,0.05491000,0.05194000,0.04050000,0.00712000], "qualymes":[6,3,3,3], "rmaxt": 0.62, "atual":0.05840000},
    {"cryp":"SAND", "sup":[0.00833300], "qualymes":[6], "rmaxt": 0.89, "atual":2.74260000},
    {"cryp":"SANTOS", "sup":[2.39800000], "qualymes":[3], "rmaxt": 0.5, "atual":2.48300000},
    {"cryp":"SC", "sup":[0.00829000,0.00762400,0.00229100], "qualymes":[6,3], "rmaxt": 0.53, "atual":0.00870000},
    {"cryp":"SCRT", "sup":[4.51800000], "qualymes":[3], "rmaxt": 1, "atual":4.88800000},
    {"cryp":"SFP", "sup":[0.67950000,0.67600000,0.65110000,0.64520000,0.63660000,0.60000000,0.10000000], "qualymes":[3,6], "rmaxt": 0.08, "atual":0.68010000},
    {"cryp":"SHIB", "sup":[0.00000510], "qualymes":[6], "rmaxt": 0.67, "atual":0.00001967},
    {"cryp":"SKL", "sup":[0.09930000,0.09710000,0.09250000,0.03000000], "qualymes":[6,3,3], "rmaxt": 0.29, "atual":0.10310000},
    {"cryp":"SLP", "sup":[0.01120000,0.01080000,0.01040000], "qualymes":[3,3,3], "rmaxt": 0.2, "atual":0.01130000},
    {"cryp":"SNX", "sup":[3.70100000,3.55400000,3.51200000,3.50400000,2.38400000], "qualymes":[6,3,3,3], "rmaxt": 0.42, "atual":3.71600000},
    {"cryp":"SOL", "sup":[82.46000000,80.89000000,80.83000000,1.03010000], "qualymes":[6], "rmaxt": 0.89, "atual":86.71000000},
    {"cryp":"SPELL", "sup":[0.00660000], "qualymes":[3], "rmaxt": 0.5, "atual":0.00730000},
    {"cryp":"SRM", "sup":[1.92200000,0.11000000], "qualymes":[6,3], "rmaxt": 0.78, "atual":2.00800000},
    {"cryp":"STMX", "sup":[0.01138000,0.01109000,0.00175800], "qualymes":[6,3,3], "rmaxt": 0.55, "atual":0.01201000},
    {"cryp":"STORJ", "sup":[0.50440000,0.15000000], "qualymes":[6,6], "rmaxt": 0.47, "atual":0.96440000},
    {"cryp":"STPT", "sup":[0.06001000,0.05761000,0.05626000,0.00961000], "qualymes":[6], "rmaxt": 0.87, "atual":0.06005000},
    {"cryp":"STRAX", "sup":[0.83700000,0.32930000], "qualymes":[6,3,3], "rmaxt": 0.47, "atual":0.87600000},
    {"cryp":"STX", "sup":[1.17800000,0.04300000], "qualymes":[6], "rmaxt": 0.96, "atual":1.24500000},
    {"cryp":"SUN", "sup":[0.01363000,0.01324000,0.01314000], "qualymes":[3,3], "rmaxt": 0.47, "atual":0.01366000},
    {"cryp":"SUPER", "sup":[0.55840000,0.27300000], "qualymes":[3,6], "rmaxt": 0.09, "atual":0.59260000},
    {"cryp":"SUSD", "sup":[0.99700000,0.99400000,0.85730000], "qualymes":[6], "rmaxt": 1, "atual":0.99700000},
    {"cryp":"SUSHI", "sup":[4.11100000,3.86100000,3.79200000,0.47200000], "qualymes":[6,3,3], "rmaxt": 0.41, "atual":4.14500000},
    {"cryp":"SXP", "sup":[1.12400000,1.11300000,0.55800000], "qualymes":[6,3,3], "rmaxt": 0.58, "atual":1.16000000},
    {"cryp":"SYS", "sup":[0.79740000,0.76890000,0.75170000,0.72000000,0.27540000,0.25790000], "qualymes":[6], "rmaxt": 1, "atual":0.80080000},
    {"cryp":"TCT", "sup":[0.01661000,0.01607000,0.01590000,0.01551600,0.00180000], "qualymes":[6,3], "rmaxt": 0.68, "atual":0.01673000},
    {"cryp":"TFUEL", "sup":[0.11890000,0.11840000,0.11500000,0.11400000,0.00077200], "qualymes":[6,3,3], "rmaxt": 0.79, "atual":0.11920000},
    {"cryp":"THETA", "sup":[2.39600000,2.30500000,2.27400000,0.03554000], "qualymes":[6,3,3], "rmaxt": 0.74, "atual":2.39700000},
    {"cryp":"TKO", "sup":[0.63400000,0.10000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":0.65600000},
    {"cryp":"TLM", "sup":[0.09520000,0.09100000,0.08970000,0.07010000,0.06630000], "qualymes":[3,6], "rmaxt": 0.1, "atual":0.09520000},
    {"cryp":"TOMO", "sup":[0.95600000,0.95000000,0.11810000], "qualymes":[6,3], "rmaxt": 0.87, "atual":0.99900000},
    {"cryp":"TORN", "sup":[19.28000000,18.53000000,18.38000000], "qualymes":[3,3], "rmaxt": 0.5, "atual":19.54000000},
    {"cryp":"TRB", "sup":[16.67000000,16.57000000,12.78800000], "qualymes":[6,3], "rmaxt": 0.56, "atual":17.64000000},
    {"cryp":"TRIBE", "sup":[0.70190000,0.57420000], "qualymes":[6], "rmaxt": 0.67, "atual":0.71890000},
    {"cryp":"TROY", "sup":[0.00572600,0.00553300,0.00552000,0.00539000,0.00527900,0.00126660], "qualymes":[6,3], "rmaxt": 0.85, "atual":0.00576200},
    {"cryp":"TRU", "sup":[0.16180000,0.15410000,0.15200000,0.11340000], "qualymes":[6,3], "rmaxt": 0.62, "atual":0.16270000},
    {"cryp":"TRX", "sup":[0.05101000,0.04911000,0.04637000,0.00684000], "qualymes":[6,6], "rmaxt": 0.8, "atual":0.05309000},
    {"cryp":"TUSD", "sup":[0.99980000,0.99960000,0.99100000,0.46540000], "qualymes":[6,3,6], "rmaxt": 0.82, "atual":0.99980000},
    {"cryp":"TVK", "sup":[0.09550000], "qualymes":[3,3], "rmaxt": 0.17, "atual":0.10130000},
    {"cryp":"TWT", "sup":[0.45160000,0.16980000], "qualymes":[6,3], "rmaxt": 0.69, "atual":0.46990000},
    {"cryp":"UMA", "sup":[5.39400000,5.21900000,5.20000000], "qualymes":[3,3,3], "rmaxt": 0.35, "atual":5.48000000},
    {"cryp":"UNFI", "sup":[4.27900000,1.30000000], "qualymes":[6,3,3], "rmaxt": 0.33, "atual":4.49300000},
    {"cryp":"UNI", "sup":[9.60000000,9.53000000,10.04000000,0.30000000], "qualymes":[6,3,3], "rmaxt": 0.53, "atual":10.13000000},
    {"cryp":"USDC", "sup":[0.99980000,0.99950000,0.99920000,0.20000000], "qualymes":[3,3,3,3,3], "rmaxt": 0.08, "atual":0.99980000},
    {"cryp":"USDP", "sup":[0.99990000,0.99970000,0.99940000,0.98920000], "qualymes":[3,3], "rmaxt": 0.2, "atual":1.00000000},
    {"cryp":"UST", "sup":[0.99910000,0.96100000], "qualymes":[3], "rmaxt": 0.5, "atual":0.99980000},
    {"cryp":"UTK", "sup":[0.19510000,0.08100000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":0.20850000},
    {"cryp":"VET", "sup":[0.04709000,0.04461000,0.04385000,0.00156500], "qualymes":[6,3], "rmaxt": 0.79, "atual":0.04739000},
    {"cryp":"VGX", "sup":[1.61100000,1.05000000], "qualymes":[3], "rmaxt": 0.33, "atual":1.68600000},
    {"cryp":"VIDT", "sup":[0.40160000], "qualymes":[3], "rmaxt": 0.4, "atual":0.41890000},
    {"cryp":"VITE", "sup":[0.04366000,0.04327000,0.00430000], "qualymes":[6,6], "rmaxt": 0.65, "atual":0.04653000},
    {"cryp":"VOXEL", "sup":[1.28590000,1.28390000,1.24060000,1.20000000,1.12800000,0.20000000], "qualymes":[3], "rmaxt": 0.5, "atual":1.28870000},
    {"cryp":"VTHO", "sup":[0.00340300,0.00326700,0.00325000,0.00051900], "qualymes":[6,3,3], "rmaxt": 0.53, "atual":0.00340900},
    {"cryp":"WAN", "sup":[0.37870000,0.37140000,0.37060000,0.06980000], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":0.38080000},
    {"cryp":"WAVES", "sup":[7.56000000,0.54290000,0.26000000], "qualymes":[6,3,3], "rmaxt": 0.78, "atual":8.02000000},
    {"cryp":"WAXP", "sup":[0.23280000,0.18520000], "qualymes":[6], "rmaxt": 0.67, "atual":0.25420000},
    {"cryp":"WIN", "sup":[0.00026980,0.00026360,0.00003680], "qualymes":[6,3], "rmaxt": 0.7, "atual":0.00027900},
    {"cryp":"WING", "sup":[8.69000000,8.50000000,8.37000000,8.25000000,8.13000000,7.04800000], "qualymes":[3,3,3,3], "rmaxt": 0.06, "atual":8.80000000},
    {"cryp":"WNXM", "sup":[34.93000000,33.69000000,15.00000000], "qualymes":[6,3], "rmaxt": 0.56, "atual":35.10000000},
    {"cryp":"WRX", "sup":[0.71500000,0.69200000,0.68400000,0.02000000], "qualymes":[6,3], "rmaxt": 0.63, "atual":0.72200000},
    {"cryp":"WTC", "sup":[0.43760000,0.43210000,0.40740000,0.21650000], "qualymes":[6,6], "rmaxt": 0.59, "atual":0.45370000},
    {"cryp":"XEC", "sup":[0.00006450,0.00006330], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.00006730},
    {"cryp":"XEM", "sup":[0.09200000,0.08920000,0.08680000,0.08520000], "qualymes":[3,6,3], "rmaxt": 0.33, "atual":0.09250000},
    {"cryp":"XLM", "sup":[0.17330000,0.17180000,0.16760000,0.02600000], "qualymes":[6,3], "rmaxt": 0.82, "atual":0.18150000},
    {"cryp":"XMR", "sup":[25.08000000,140.50000000,134.90000000,134.30000000], "qualymes":[6,3,3], "rmaxt": 0.77, "atual":141.40000000},
    {"cryp":"XRP", "sup":[0.57620000,0.55800000,0.55240000,0.54890000,0.51570000,0.10129000], "qualymes":[6,6,3], "rmaxt": 0.8, "atual":0.57890000},
    {"cryp":"XTZ", "sup":[0.74990000], "qualymes":[6], "rmaxt": 0.9, "atual":2.73200000},
    {"cryp":"XVG", "sup":[0.00848000,0.00800000], "qualymes":[3,3], "rmaxt": 0.13, "atual":0.00868000},
    {"cryp":"XVS", "sup":[7.27000000,6.71000000,6.18000000,1.15900000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":7.66000000},
    {"cryp":"YFI", "sup":[3000.00000000,22312.28000000,22312.23000000,21400.53000000,21375.17000000,20200.49000000,17699.81000000], "qualymes":[6,3,6], "rmaxt": 0.56, "atual":22435.85000000},
    {"cryp":"YFII", "sup":[970.00000000,1806.00000000,1803.00000000,1777.00000000,1157.26000000], "qualymes":[3,6,3], "rmaxt": 0.06, "atual":1889.00000000},
    {"cryp":"YGG", "sup":[2.24400000,2.16800000], "qualymes":[3], "rmaxt": 0.6, "atual":2.40900000},
    {"cryp":"ZEC", "sup":[83.20000000,81.40000000,17.13000000], "qualymes":[6,3], "rmaxt": 0.77, "atual":88.00000000},
    {"cryp":"ZEN", "sup":[5.06200000,31.68000000,30.22000000,30.01000000], "qualymes":[6,3], "rmaxt": 0.58, "atual":32.00000000},
    {"cryp":"ZIL", "sup":[0.03924000,0.03783000,0.03758000,0.00224000], "qualymes":[6,3,3], "rmaxt": 0.78, "atual":0.03980000},
    {"cryp":"ZRX", "sup":[0.45370000,0.44810000,0.11050000], "qualymes":[6,3], "rmaxt": 0.75, "atual":0.47990000},
]

/*
function lissuporte(){
    for(let i=0;i<=lissuport.length-1;i++){
        
        document.getElementById(`sup_${lissuport[i].cryp}`).innerHTML= lissuport[i].sup[0].toFixed(8)
        //document.getElementById(`difsup_${lissuport[i].cryp}`).innerHTML= 
        document.getElementById(`qualymes_${lissuport[i].cryp}`).innerHTML= lissuport[i].qualymes
        document.getElementById(`rmaxtu_${lissuport[i].cryp}`).innerHTML= lissuport[i].rmaxt


    }
    
}
setTimeout(() => {
    lissuporte()
}, 10000);
*/



function lissuporte(){
    for(let cc=0;cc<=lissuport.length-1;cc++){
        //setInterval(() => {
            if(document.getElementById(`sup_${lissuport[cc].cryp}`)){
                setTimeout(20)
                document.getElementById(`sup_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].sup[0].toFixed(8)
                //document.getElementById(`difsup_${lissuport[cc].cryp}`).innerHTML= 
                document.getElementById(`qualymes_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].qualymes
                document.getElementById(`rmaxtu_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].rmaxt
            }
            
        //}, 20);
        
    }
    
}

setTimeout(() => {
    lissuporte()
}, 10000);




/*
let cc=0
setInterval(() => {

    if(cc<=lissuport.length-1){
        document.getElementById(`sup_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].sup[0].toFixed(8)
        //document.getElementById(`difsup_${lissuport[cc].cryp}`).innerHTML= 
        document.getElementById(`qualymes_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].qualymes
        document.getElementById(`rmaxtu_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].rmaxt
        
    }
    cc++
    
}, 10000);
*/







/*
lisjson=[
    {"name":"BTC", "age":12, "cat":3, "vida":+1, "mês": +1,"sem": +1, "dia":+1, "hora":-1,"now":+1, "circul":"alta"},
    {"name":"ETH", "age":5, "cat":3, "vida":0, "mês": +1,"sem": +1, "dia":+1, "hora":-1,"now":+1, "circul":"boa"},
    {"name":"XTZ", "age":1, "cat":4, "vida":-1, "mês": +1,"sem": +1, "dia":+1, "hora":-1,"now":+1, "circul":"média"}
]


for(let i=0; i<=lisjson.length; i++){
    console.log(`A moeda ${lisjson[i].name} tem ${lisjson[i].age} anos, é categoria ${lisjson[i].cat}, soma ${lisjson[i].vida} e tem circulação ${lisjson[i].circul}`)
}
*/
