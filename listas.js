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
    {"cryp":"1INCH", "sup":[1.66100000,0.20000000], "qualymes":[6,3], "rmaxt": 0.43, "atual":1.66900000},
    {"cryp":"AAVE", "sup":[25.93900000,153.80000000], "qualymes":[6,3], "rmaxt": 0.5, "atual":155.60000000},
    {"cryp":"ACH", "sup":[0.03577000], "qualymes":[3], "rmaxt": 1, "atual":0.03610000},
    {"cryp":"ACM", "sup":[3.98900000], "qualymes":[3,3,3,3], "rmaxt": 0.08, "atual":4.02200000},
    {"cryp":"ADA", "sup":[1.05300000,0.01765000], "qualymes":[6,3], "rmaxt": 0.91, "atual":1.07200000},
    {"cryp":"ADX", "sup":[0.39000000], "qualymes":[3], "rmaxt": 0.25, "atual":0.39530000},
    {"cryp":"AGLD", "sup":[0.85900000], "qualymes":[3], "rmaxt": 0.25, "atual":0.87200000},
    {"cryp":"AION", "sup":[0.09210000,0.03730000], "qualymes":[6,3], "rmaxt": 0.67, "atual":0.09350000},
    {"cryp":"AKRO", "sup":[0.01203000,0.00758300], "qualymes":[6,3], "rmaxt": 0.4, "atual":0.01229000},
    {"cryp":"ALCX", "sup":[166.10000000], "qualymes":[3], "rmaxt": 0.33, "atual":168.90000000},
    {"cryp":"ALGO", "sup":[0.90170000,0.09580000], "qualymes":[3,6], "rmaxt": 0.03, "atual":0.92740000},
    {"cryp":"ALICE", "sup":[7.00000000,3.17000000,0.10000000], "qualymes":[3,6], "rmaxt": 0.09, "atual":7.31000000},
    {"cryp":"ALPACA", "sup":[0.28160000], "qualymes":[3,3], "rmaxt": 0.17, "atual":0.28480000},
    {"cryp":"ALPHA", "sup":[0.38850000,0.30300000,0.02000000], "qualymes":[6,3,3,3], "rmaxt": 0.31, "atual":0.40200000},
    {"cryp":"AMP", "sup":[0.02646000], "qualymes":[3], "rmaxt": 0.33, "atual":0.02668000},
    {"cryp":"ANKR", "sup":[0.06562000,0.04761000,0.00063700], "qualymes":[6,6], "rmaxt": 0.68, "atual":0.06739000},
    {"cryp":"ANT", "sup":[4.50900000,3.39900000,3.00360000,2.77830000,2.60830000], "qualymes":[3,6,6], "rmaxt": 0.06, "atual":4.69400000},
    {"cryp":"ANY", "sup":[12.00000000], "qualymes":[6], "rmaxt": 1, "atual":18.70000000},
    {"cryp":"API3", "sup":[5.85000000,4.05200000], "qualymes":[3], "rmaxt": 1, "atual":7.10000000},
    {"cryp":"AR", "sup":[7.10100000], "qualymes":[6], "rmaxt": 0.78, "atual":31.16000000},
    {"cryp":"ARDR", "sup":[0.16560000,0.11678000,0.08713000,0.02119000], "qualymes":[6,6,3], "rmaxt": 0.57, "atual":0.16860000},
    {"cryp":"ARPA", "sup":[0.05609000,0.00326000], "qualymes":[6], "rmaxt": 0.93, "atual":0.05805000},
    {"cryp":"ASR", "sup":[3.02700000,2.77600000], "qualymes":[3,3,3,3], "rmaxt": 0.07, "atual":3.04900000},
    {"cryp":"ATA", "sup":[0.38160000,0.04139000], "qualymes":[3,3], "rmaxt": 0.13, "atual":0.39840000},
    {"cryp":"ATM", "sup":[5.48000000,4.09900000], "qualymes":[6,3,3], "rmaxt": 0.43, "atual":5.51000000},
    {"cryp":"ATOM", "sup":[30.68000000,20.18000000,1.06100000], "qualymes":[6,6], "rmaxt": 0.88, "atual":31.65000000},
    {"cryp":"AUCTION", "sup":[13.48000000], "qualymes":[3], "rmaxt": 0.5, "atual":13.69000000},
    {"cryp":"AUD", "sup":[0.71390000,0.71360000,0.71150000,0.65260000], "qualymes":[3,3,3,3], "rmaxt": 0.22, "atual":0.71470000},
    {"cryp":"AUDIO", "sup":[0.88200000,0.59000000,0.02000000], "qualymes":[6,6], "rmaxt": 0.38, "atual":0.91600000},
    {"cryp":"AUTO", "sup":[391.70000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":403.40000000},
    {"cryp":"AVA", "sup":[1.11300000,0.65000000], "qualymes":[6,3,3], "rmaxt": 0.4, "atual":1.12300000},
    {"cryp":"AVAX", "sup":[0.85000000], "qualymes":[6], "rmaxt": 0.88, "atual":62.35000000},
    {"cryp":"AXS", "sup":[0.10000000], "qualymes":[6], "rmaxt": 0.87, "atual":54.58000000},
    {"cryp":"BADGER", "sup":[6.56600000,3.06300000,11.03000000], "qualymes":[3,6], "rmaxt": 0.09, "atual":11.36000000},
    {"cryp":"BAKE", "sup":[0.62100000], "qualymes":[3,3,3], "rmaxt": 0.2, "atual":0.64800000},
    {"cryp":"BAL", "sup":[8.37500000,11.83000000], "qualymes":[6,3,3], "rmaxt": 0.56, "atual":12.25000000},
    {"cryp":"BAND", "sup":[3.55000000,0.19230000], "qualymes":[6,3,3], "rmaxt": 0.69, "atual":3.72900000},
    {"cryp":"BAR", "sup":[6.05000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":6.10000000},
    {"cryp":"BAT", "sup":[0.08000000], "qualymes":[6], "rmaxt": 0.94, "atual":0.76550000},
    {"cryp":"BCH", "sup":[292.90000000,129.00000000], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":302.00000000},
    {"cryp":"BEAM", "sup":[0.30390000,0.13060000], "qualymes":[6,3], "rmaxt": 0.69, "atual":0.31310000},
    {"cryp":"BEL", "sup":[0.87300000,0.77240000,0.60060000], "qualymes":[3,6,3], "rmaxt": 0.06, "atual":0.91300000},
    {"cryp":"BETA", "sup":[0.46660000,0.41057000,0.06001000], "qualymes":[3], "rmaxt": 0.25, "atual":0.48513000},
    {"cryp":"BICO", "sup":[2.02700000], "qualymes":[3], "rmaxt": 0.5, "atual":2.09400000},
    {"cryp":"BLZ", "sup":[0.12400000,0.10819000,0.04521000], "qualymes":[6,6], "rmaxt": 0.44, "atual":0.12920000},
    {"cryp":"BNB", "sup":[6.38000000,353.50000000,317.02000000,225.42000000,0.50000000], "qualymes":[6,6], "rmaxt": 0.84, "atual":362.20000000},
    {"cryp":"BNT", "sup":[2.33700000,0.11300000], "qualymes":[6,3], "rmaxt": 0.58, "atual":2.38200000},
    {"cryp":"BNX", "sup":[19.10000000], "qualymes":[3], "rmaxt": 0.33, "atual":19.80000000},
    {"cryp":"BOND", "sup":[11.03000000], "qualymes":[3], "rmaxt": 0.57, "atual":11.31000000},
    {"cryp":"BTC", "sup":[2817.00000000], "qualymes":[6], "rmaxt": 0.96, "atual":35880.76000000},
    {"cryp":"BTCST", "sup":[8.00000000,15.33000000,11.63700000], "qualymes":[3,3,6], "rmaxt": 0.08, "atual":15.42000000},
    {"cryp":"BTG", "sup":[29.37000000,29.24000000,29.14000000], "qualymes":[3,3,3], "rmaxt": 0.2, "atual":30.89000000},
    {"cryp":"BTS", "sup":[0.02296000,0.00875000], "qualymes":[6,3,3], "rmaxt": 0.63, "atual":0.02355000},
    {"cryp":"BTT", "sup":[0.00271000,0.00259600,0.00229000,0.00200200,0.00188690,0.00177500,0.00012480], "qualymes":[6,6,3], "rmaxt": 0.76, "atual":0.00277700},
    {"cryp":"BURGER", "sup":[1.66800000], "qualymes":[3,3], "rmaxt": 0.2, "atual":1.72200000},
    {"cryp":"BUSD", "sup":[0.99970000,0.99960000,0.99950000,0.98880000,0.97000000,0.00050000], "qualymes":[3,3,3,3,3], "rmaxt": 0.03, "atual":0.99980000},
    {"cryp":"C98", "sup":[1.62600000,0.07541000], "qualymes":[6,3], "rmaxt": 0.29, "atual":1.69000000},
    {"cryp":"CAKE", "sup":[7.24000000], "qualymes":[3,3,3], "rmaxt": 0.25, "atual":7.38000000},
    {"cryp":"CELO", "sup":[3.30000000,3.07900000,1.58800000], "qualymes":[6,3], "rmaxt": 0.62, "atual":3.41700000},
    {"cryp":"CELR", "sup":[0.05621000,0.00091000], "qualymes":[6,3], "rmaxt": 0.89, "atual":0.05877000},
    {"cryp":"CFX", "sup":[0.11110000], "qualymes":[3,3,3], "rmaxt": 0.09, "atual":0.11380000},
    {"cryp":"CHESS", "sup":[1.01000000], "qualymes":[3], "rmaxt": 0.25, "atual":1.02900000},
    {"cryp":"CHR", "sup":[0.60580000,0.58490000,0.50020000,0.47010000,0.29650000,0.01590000], "qualymes":[6], "rmaxt": 0.9, "atual":0.60750000},
    {"cryp":"CHZ", "sup":[0.18010000,0.17848000,0.00381300,0.00380000], "qualymes":[6,6], "rmaxt": 0.66, "atual":0.18710000},
    {"cryp":"CITY", "sup":[8.85000000,7.95000000], "qualymes":[3], "rmaxt": 0.33, "atual":8.93000000},
    {"cryp":"CKB", "sup":[0.01405000,0.00784500,0.00485000], "qualymes":[6,6], "rmaxt": 0.23, "atual":0.01441000},
    {"cryp":"CLV", "sup":[0.39500000], "qualymes":[3,3], "rmaxt": 0.14, "atual":0.41000000},
    {"cryp":"COCOS", "sup":[1.28850000,1.25000000,0.59860000,0.00017100], "qualymes":[6], "rmaxt": 0.93, "atual":1.29390000},
    {"cryp":"COMP", "sup":[80.62000000,124.10000000], "qualymes":[6,3,3], "rmaxt": 0.6, "atual":128.90000000},
    {"cryp":"COS", "sup":[0.00342000], "qualymes":[6], "rmaxt": 0.97, "atual":0.01484000},
    {"cryp":"COTI", "sup":[0.00850000], "qualymes":[6], "rmaxt": 0.88, "atual":0.26900000},
    {"cryp":"CRV", "sup":[3.00100000,2.68200000,0.33000000,0.32800000], "qualymes":[3,6], "rmaxt": 0.06, "atual":3.11900000},
    {"cryp":"CTK", "sup":[1.13600000,0.88370000,0.75000000,0.69010000], "qualymes":[3,3,6], "rmaxt": 0.06, "atual":1.18400000},
    {"cryp":"CTSI", "sup":[0.43600000,0.41000000,0.31138000,0.01506000], "qualymes":[6,6], "rmaxt": 0.64, "atual":0.44510000},
    {"cryp":"CTXC", "sup":[0.25770000,0.16980000,0.02510000], "qualymes":[6], "rmaxt": 0.96, "atual":0.26460000},
    {"cryp":"CVC", "sup":[0.21790000,0.00969000], "qualymes":[6,3], "rmaxt": 0.87, "atual":0.22710000},
    {"cryp":"CVP", "sup":[0.94800000], "qualymes":[3], "rmaxt": 0.25, "atual":0.98600000},
    {"cryp":"CVX", "sup":[28.10000000], "qualymes":[3], "rmaxt": 1, "atual":28.77000000},
    {"cryp":"DAR", "sup":[0.02300000], "qualymes":[3], "rmaxt": 0.33, "atual":0.80417000},
    {"cryp":"DASH", "sup":[95.20000000,31.33000000], "qualymes":[6,3,3], "rmaxt": 0.77, "atual":98.70000000},
    {"cryp":"DATA", "sup":[0.07387000,0.07310000,0.04859000,0.03100000], "qualymes":[6,6], "rmaxt": 0.59, "atual":0.07482000},
    {"cryp":"DCR", "sup":[6.00200000,52.00000000,50.80000000], "qualymes":[6,3,3], "rmaxt": 0.53, "atual":52.10000000},
    {"cryp":"DEGO", "sup":[3.53000000,3.45100000], "qualymes":[3,6], "rmaxt": 0.09, "atual":3.60000000},
    {"cryp":"DENT", "sup":[0.00250000,0.00156060,0.00006550], "qualymes":[6,6,3], "rmaxt": 0.7, "atual":0.00255800},
    {"cryp":"DEXE", "sup":[6.03000000,3.96700000], "qualymes":[3,3], "rmaxt": 0.14, "atual":6.19000000},
    {"cryp":"DF", "sup":[0.10190000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.10430000},
    {"cryp":"DGB", "sup":[0.01973000,0.01717000], "qualymes":[6,3,3], "rmaxt": 0.58, "atual":0.01999000},
    {"cryp":"DIA", "sup":[0.90000000], "qualymes":[3,3,3], "rmaxt": 0.53, "atual":0.90300000},
    {"cryp":"DNT", "sup":[0.07720000,0.03864000], "qualymes":[6,3,3], "rmaxt": 0.4, "atual":0.07780000},
    {"cryp":"DOCK", "sup":[0.04115000,0.03829900,0.03104200,0.00223400], "qualymes":[6,2,2], "rmaxt": 0.7, "atual":0.04115000},
    {"cryp":"DODO", "sup":[0.50000000], "qualymes":[3,3,3,3], "rmaxt": 0.08, "atual":0.51300000},
    {"cryp":"DOGE", "sup":[0.13280000,0.13090000,0.00113450], "qualymes":[6,3,3], "rmaxt": 0.74, "atual":0.13330000},
    {"cryp":"DOT", "sup":[2.00000000], "qualymes":[6], "rmaxt": 0.89, "atual":17.84000000},
    {"cryp":"DREP", "sup":[0.81860000,0.81160000,0.73480000,0.68260000,0.58000000,0.35500000,0.31500000,0.00035000], "qualymes":[6,6], "rmaxt": 0.64, "atual":0.83620000},
    {"cryp":"DUSK", "sup":[0.56580000,0.54940000,0.14950000,0.01060000], "qualymes":[6], "rmaxt": 0.97, "atual":0.56850000},
    {"cryp":"DYDX", "sup":[6.11400000,5.93700000,3.00000000], "qualymes":[3,3], "rmaxt": 0.2, "atual":6.31400000},
    {"cryp":"EGLD", "sup":[6.00000000,127.00000000], "qualymes":[6], "rmaxt": 0.88, "atual":128.43000000},
    {"cryp":"ELF", "sup":[0.30070000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.30100000},
    {"cryp":"ENJ", "sup":[1.55200000,1.52500000,1.51800000,0.03223000], "qualymes":[6], "rmaxt": 0.94, "atual":1.55300000},
    {"cryp":"ENS", "sup":[15.83000000], "qualymes":[3], "rmaxt": 0.33, "atual":16.08000000},
    {"cryp":"EOS", "sup":[2.20700000,1.35860000], "qualymes":[3,6,3,3], "rmaxt": 0.04, "atual":2.24700000},
    {"cryp":"EPS", "sup":[0.15920000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":0.15960000},
    {"cryp":"ERN", "sup":[5.51600000,5.31600000], "qualymes":[6,2], "rmaxt": 0.38, "atual":5.51600000},
    {"cryp":"ETC", "sup":[3.07260000,23.57000000], "qualymes":[6,3,3], "rmaxt": 0.82, "atual":23.95000000},
    {"cryp":"ETH", "sup":[86.00000000,81.79000000,2403.00000000], "qualymes":[6], "rmaxt": 0.96, "atual":2496.30000000},
    {"cryp":"EUR", "sup":[1.13100000,1.13000000,1.12800000,1.12600000,1.09500000,1.05760000,1.04800000], "qualymes":[3,6,3,6], "rmaxt": 0.04, "atual":1.13100000},
    {"cryp":"FARM", "sup":[98.80000000,81.40000000], "qualymes":[3,3], "rmaxt": 0.17, "atual":100.90000000},
    {"cryp":"FET", "sup":[0.33650000,0.00735000], "qualymes":[6,3], "rmaxt": 0.89, "atual":0.34520000},
    {"cryp":"FIDA", "sup":[1.49300000], "qualymes":[3], "rmaxt": 0.6, "atual":1.50000000},
    {"cryp":"FIL", "sup":[20.68000000,10.00000000], "qualymes":[3,3,3,3], "rmaxt": 0.06, "atual":21.01000000},
    {"cryp":"FIO", "sup":[0.09810000,0.05780000], "qualymes":[6,3], "rmaxt": 0.47, "atual":0.09890000},
    {"cryp":"FIRO", "sup":[3.62600000], "qualymes":[3,3], "rmaxt": 0.38, "atual":3.64600000},
    {"cryp":"FIS", "sup":[0.65360000,0.58600000], "qualymes":[3,6,3], "rmaxt": 0.09, "atual":0.66700000},
    {"cryp":"FLM", "sup":[0.23120000,0.11840000], "qualymes":[3,6,3,3], "rmaxt": 0.06, "atual":0.23650000},
    {"cryp":"FLOW", "sup":[5.19000000], "qualymes":[3,3], "rmaxt": 0.14, "atual":5.28000000},
    {"cryp":"FLUX", "sup":[1.52500000,1.22000000], "qualymes":[3], "rmaxt": 0.5, "atual":1.56000000},
    {"cryp":"FOR", "sup":[0.04293000], "qualymes":[3,3], "rmaxt": 0.33, "atual":0.04402000},
    {"cryp":"FORTH", "sup":[5.49000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":5.52000000},
    {"cryp":"FRONT", "sup":[0.41260000], "qualymes":[3], "rmaxt": 0.25, "atual":0.42010000},
    {"cryp":"FTM", "sup":[2.02010000,0.00170000], "qualymes":[6], "rmaxt": 0.91, "atual":2.04920000},
    {"cryp":"FTT", "sup":[36.10000000,33.76000000,1.76000000,0.50000000], "qualymes":[6,3], "rmaxt": 0.85, "atual":37.03000000},
    {"cryp":"FUN", "sup":[0.01003000,0.00996000,0.00983000,0.00971000,0.00100100], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":0.01039000},
    {"cryp":"FXS", "sup":[20.70000000,13.34800000], "qualymes":[6], "rmaxt": 1, "atual":21.04100000},
    {"cryp":"GALA", "sup":[0.18102000,0.06969000,0.02103000], "qualymes":[6], "rmaxt": 0.6, "atual":0.18988000},
    {"cryp":"GBP", "sup":[1.35300000,1.35100000,1.29600000,1.27450000,1.24950000,1.01740000], "qualymes":[3,6,3,3], "rmaxt": 0.05, "atual":1.35600000},
    {"cryp":"GHST", "sup":[1.50800000], "qualymes":[6], "rmaxt": 0.67, "atual":2.07900000},
    {"cryp":"GLMR", "sup":[7.14030000,6.99320000,6.93490000,0.25000000], "qualymes":[3], "rmaxt": 1, "atual":7.14900000},
    {"cryp":"GNO", "sup":[219.20000000], "qualymes":[6], "rmaxt": 0.67, "atual":267.60000000},
    {"cryp":"GRT", "sup":[0.38760000,0.03000000], "qualymes":[6,3,3], "rmaxt": 0.21, "atual":0.39930000},
    {"cryp":"GTC", "sup":[6.90100000,4.62000000], "qualymes":[6], "rmaxt": 0.75, "atual":7.15300000},
    {"cryp":"GTO", "sup":[0.03148000,0.02570000,0.00254000], "qualymes":[6,6], "rmaxt": 0.71, "atual":0.03212000},
    {"cryp":"GXS", "sup":[0.26560000], "qualymes":[6], "rmaxt": 0.95, "atual":1.35400000},
    {"cryp":"HARD", "sup":[0.54050000,0.43910000,0.38110000], "qualymes":[3,3,3,3,3], "rmaxt": 0.07, "atual":0.54500000},
    {"cryp":"HBAR", "sup":[0.22140000,0.21110000,0.00914000], "qualymes":[6,3], "rmaxt": 0.86, "atual":0.22600000},
    {"cryp":"HIGH", "sup":[5.68000000], "qualymes":[3], "rmaxt": 0.5, "atual":5.74000000},
    {"cryp":"HIVE", "sup":[0.10150000], "qualymes":[6], "rmaxt": 0.91, "atual":0.82990000},
    {"cryp":"HNT", "sup":[22.09000000,20.00000000,0.68600000], "qualymes":[6], "rmaxt": 0.88, "atual":22.72000000},
    {"cryp":"HOT", "sup":[0.00423100,0.00250000,0.00019600], "qualymes":[6,3], "rmaxt": 0.75, "atual":0.00436200},
    {"cryp":"ICP", "sup":[21.28000000,20.88000000], "qualymes":[3,3,3], "rmaxt": 0.11, "atual":21.67000000},
    {"cryp":"ICX", "sup":[0.67700000,0.63200000,0.12150000,0.10660000], "qualymes":[6,6], "rmaxt": 0.77, "atual":0.69600000},
    {"cryp":"IDEX", "sup":[0.11950000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.12195000},
    {"cryp":"ILV", "sup":[595.70000000,586.80000000,586.70000000,414.50000000], "qualymes":[6], "rmaxt": 0.8, "atual":595.70000000},
    {"cryp":"IMX", "sup":[2.27700000], "qualymes":[3], "rmaxt": 1, "atual":2.29100000},
    {"cryp":"INJ", "sup":[4.94400000,4.88000000,0.18000000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":4.95500000},
    {"cryp":"IOST", "sup":[0.02079000,0.01614300,0.00136300], "qualymes":[6,6,3], "rmaxt": 0.74, "atual":0.02121000},
    {"cryp":"IOTA", "sup":[0.77830000,0.57380000,0.05340000], "qualymes":[6,6,3], "rmaxt": 0.8, "atual":0.79870000},
    {"cryp":"IOTX", "sup":[0.00103400], "qualymes":[6], "rmaxt": 0.93, "atual":0.07587000},
    {"cryp":"IRIS", "sup":[0.07000000,0.05263000,0.03162000], "qualymes":[6,6], "rmaxt": 0.5, "atual":0.07099000},
    {"cryp":"JASMY", "sup":[0.04700000], "qualymes":[3], "rmaxt": 0.33, "atual":0.04820000},
    {"cryp":"JOE", "sup":[0.79700000], "qualymes":[3], "rmaxt": 0.5, "atual":0.79800000},
    {"cryp":"JST", "sup":[0.03935000,0.03591000,0.01743000], "qualymes":[6,6,3], "rmaxt": 0.5, "atual":0.03965000},
    {"cryp":"JUV", "sup":[6.24000000,4.70100000], "qualymes":[3,3,3], "rmaxt": 0.07, "atual":6.28000000},
    {"cryp":"KAVA", "sup":[3.42100000,3.08100000,0.24030000], "qualymes":[6,3], "rmaxt": 0.82, "atual":3.52400000},
    {"cryp":"KEEP", "sup":[0.41040000,0.21130000], "qualymes":[6], "rmaxt": 0.63, "atual":0.41890000},
    {"cryp":"KEY", "sup":[0.00645200,0.00540700,0.00539700,0.00052700], "qualymes":[6,6], "rmaxt": 0.7, "atual":0.00661700},
    {"cryp":"KLAY", "sup":[1.18700000,0.82400000], "qualymes":[6], "rmaxt": 0.63, "atual":1.20800000},
    {"cryp":"KMD", "sup":[0.49000000,0.38800000], "qualymes":[6,3], "rmaxt": 0.5, "atual":0.49610000},
    {"cryp":"KNC", "sup":[1.38200000,1.38000000,1.37900000,1.18400000,1.16900000,1.12600000,0.68300000], "qualymes":[6,6], "rmaxt": 0.55, "atual":1.42700000},
    {"cryp":"KP3R", "sup":[547.25000000], "qualymes":[3], "rmaxt": 0.33, "atual":964.86000000},
    {"cryp":"KSM", "sup":[23.15800000,191.00000000,142.00000000], "qualymes":[6,3], "rmaxt": 0.53, "atual":192.70000000},
    {"cryp":"LAZIO", "sup":[3.39430000,1.00000000], "qualymes":[3], "rmaxt": 0.25, "atual":3.44920000},
    {"cryp":"LINA", "sup":[0.02269000,0.02010000], "qualymes":[3,6], "rmaxt": 0.09, "atual":0.02335000},
    {"cryp":"LINK", "sup":[15.80000000,15.32000000,0.00010000], "qualymes":[6,3], "rmaxt": 0.78, "atual":15.91000000},
    {"cryp":"LIT", "sup":[1.72500000,0.25000000], "qualymes":[3,3,3], "rmaxt": 0.08, "atual":1.75200000},
    {"cryp":"LOKA", "sup":[1.70000000,1.66700000,1.52500000,0.16000000], "qualymes":[3], "rmaxt": 1, "atual":1.70390000},
    {"cryp":"LPT", "sup":[19.75000000,10.68000000], "qualymes":[6], "rmaxt": 0.78, "atual":22.87000000},
    {"cryp":"LRC", "sup":[0.07100000], "qualymes":[6], "rmaxt": 0.9, "atual":0.76800000},
    {"cryp":"LSK", "sup":[1.55100000,1.53000000,1.51130000,0.51040000], "qualymes":[6,3,3], "rmaxt": 0.67, "atual":1.55400000},
    {"cryp":"LTC", "sup":[22.32000000,106.00000000], "qualymes":[6,3], "rmaxt": 0.84, "atual":108.10000000},
    {"cryp":"LTO", "sup":[0.19020000,0.13423000,0.13000000,0.02001000], "qualymes":[6,6], "rmaxt": 0.63, "atual":0.19240000},
    {"cryp":"LUNA", "sup":[57.58000000,0.27330000], "qualymes":[6], "rmaxt": 0.94, "atual":58.49000000},
    {"cryp":"MANA", "sup":[0.03000000], "qualymes":[6], "rmaxt": 0.89, "atual":1.98340000},
    {"cryp":"MASK", "sup":[2.99500000], "qualymes":[6], "rmaxt": 0.78, "atual":5.86900000},
    {"cryp":"MATIC", "sup":[1.56100000,0.00263000], "qualymes":[6], "rmaxt": 0.97, "atual":1.59200000},
    {"cryp":"MBL", "sup":[0.00526200,0.00516000,0.00021400], "qualymes":[6,6], "rmaxt": 0.63, "atual":0.00527100},
    {"cryp":"MBOX", "sup":[1.96900000], "qualymes":[6], "rmaxt": 0.83, "atual":2.54900000},
    {"cryp":"MC", "sup":[2.24000000], "qualymes":[3], "rmaxt": 0.5, "atual":2.28000000},
    {"cryp":"MDT", "sup":[0.00788000], "qualymes":[6], "rmaxt": 0.95, "atual":0.05747000},
    {"cryp":"MDX", "sup":[0.25000000], "qualymes":[3,3,3], "rmaxt": 0.22, "atual":0.25100000},
    {"cryp":"MFT", "sup":[0.00551500,0.00456700,0.00034300], "qualymes":[6,6], "rmaxt": 0.67, "atual":0.00555700},
    {"cryp":"MINA", "sup":[2.39700000], "qualymes":[3], "rmaxt": 0.67, "atual":2.54800000},
    {"cryp":"MIR", "sup":[1.36000000,1.35900000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":1.36100000},
    {"cryp":"MITH", "sup":[0.03432000,0.03268000,0.02523000,0.00198000], "qualymes":[6,6], "rmaxt": 0.74, "atual":0.03449000},
    {"cryp":"MKR", "sup":[429.79000000,1804.00000000,1700.00000000], "qualymes":[6,3,3], "rmaxt": 0.58, "atual":1817.00000000},
    {"cryp":"MLN", "sup":[58.30000000], "qualymes":[3,3], "rmaxt": 0.43, "atual":58.80000000},
    {"cryp":"MOVR", "sup":[87.70000000], "qualymes":[3], "rmaxt": 0.33, "atual":87.90000000},
    {"cryp":"MTL", "sup":[1.32400000,0.89720000,0.10470000], "qualymes":[6,6,3], "rmaxt": 0.67, "atual":1.35200000},
    {"cryp":"NANO", "sup":[2.13300000,0.25620000], "qualymes":[6,3,3], "rmaxt": 0.76, "atual":2.18100000},
    {"cryp":"NBS", "sup":[0.01201000,0.01176000,0.00899000,0.00824000,0.00373000], "qualymes":[6,6], "rmaxt": 0.47, "atual":0.01214000},
    {"cryp":"NEAR", "sup":[11.51200000,0.52460000], "qualymes":[6], "rmaxt": 1, "atual":11.66900000},
    {"cryp":"NEO", "sup":[3.89000000,18.23000000,18.03000000], "qualymes":[3,6,3,3], "rmaxt": 0.06, "atual":18.34000000},
    {"cryp":"NKN", "sup":[0.19260000,0.16355000,0.00554000], "qualymes":[6,6], "rmaxt": 0.68, "atual":0.19460000},
    {"cryp":"NU", "sup":[0.17390000], "qualymes":[6], "rmaxt": 0.63, "atual":0.47660000},
    {"cryp":"NMR", "sup":[22.12000000,22.06000000,21.29900000], "qualymes":[6,3,3], "rmaxt": 0.56, "atual":22.12000000},
    {"cryp":"NULS", "sup":[0.36510000,0.09000000], "qualymes":[3,6], "rmaxt": 0.02, "atual":0.37000000},
    {"cryp":"OCEAN", "sup":[0.61000000,0.32580000,0.32240000,0.23960000], "qualymes":[6,6], "rmaxt": 0.5, "atual":0.61000000},
    {"cryp":"OG", "sup":[3.05300000,2.36800000], "qualymes":[3,3,3,3], "rmaxt": 0.07, "atual":3.08400000},
    {"cryp":"OGN", "sup":[0.31470000,0.09890000], "qualymes":[6,3], "rmaxt": 0.64, "atual":0.32070000},
    {"cryp":"OM", "sup":[0.08730000,0.08400000], "qualymes":[3,6,2], "rmaxt": 0.09, "atual":0.08730000},
    {"cryp":"OMG", "sup":[4.34900000,0.30310000], "qualymes":[6], "rmaxt": 0.94, "atual":4.39000000},
    {"cryp":"ONE", "sup":[0.00118000], "qualymes":[6], "rmaxt": 0.91, "atual":0.18563000},
    {"cryp":"ONG", "sup":[0.71030000,0.69140000,0.57050000,0.56450000,0.38370000,0.03640000], "qualymes":[3,6,3,3], "rmaxt": 0.03, "atual":0.76720000},
    {"cryp":"ONT", "sup":[0.46600000,0.21070000], "qualymes":[3,6,3,3], "rmaxt": 0.02, "atual":0.47600000},
    {"cryp":"OOKI", "sup":[0.01000000], "qualymes":[3], "rmaxt": 0.5, "atual":0.01049000},
    {"cryp":"ORN", "sup":[3.52200000,1.33400000], "qualymes":[6,3,3], "rmaxt": 0.41, "atual":3.55900000},
    {"cryp":"OXT", "sup":[0.22940000,0.22290000,0.19650000,0.19600000], "qualymes":[6,6], "rmaxt": 0.47, "atual":0.23050000},
    {"cryp":"PAXG", "sup":[1841.00000000,1840.00000000,1834.00000000,1830.00000000,1791.00000000,1772.00000000,1759.00000000,1700.36000000,1687.57000000], "qualymes":[3,3,6], "rmaxt": 0.33, "atual":1841.00000000},
    {"cryp":"PEOPLE", "sup":[0.03800000], "qualymes":[3], "rmaxt": 0.5, "atual":0.03890000},
    {"cryp":"PERL", "sup":[0.04710000,0.04526000,0.01018000], "qualymes":[6,6], "rmaxt": 0.7, "atual":0.04726000},
    {"cryp":"PERP", "sup":[7.81000000,3.61800000], "qualymes":[6,3], "rmaxt": 0.55, "atual":7.91000000},
    {"cryp":"PHA", "sup":[0.24430000], "qualymes":[2,2], "rmaxt": 0.5, "atual":0.24430000},
    {"cryp":"PLA", "sup":[0.71400000], "qualymes":[2], "rmaxt": 0.33, "atual":0.71400000},
    {"cryp":"PNT", "sup":[0.57300000,0.57010000,0.53890000,0.27600000], "qualymes":[6,3,3], "rmaxt": 0.4, "atual":0.57370000},
    {"cryp":"POLS", "sup":[1.55200000,0.80000000], "qualymes":[6], "rmaxt": 0.89, "atual":1.55300000},
    {"cryp":"POLY", "sup":[0.33820000], "qualymes":[3], "rmaxt": 0.4, "atual":0.33880000},
    {"cryp":"POND", "sup":[0.04620000,0.04430000,0.04380000], "qualymes":[3,6,3], "rmaxt": 0.18, "atual":0.04643000},
    {"cryp":"PORTO", "sup":[2.81220000,2.72360000,2.60000000,1.00000000], "qualymes":[3], "rmaxt": 0.33, "atual":2.81220000},
    {"cryp":"POWR", "sup":[0.47660000,0.36400000], "qualymes":[3], "rmaxt": 0.33, "atual":0.47790000},
    {"cryp":"PSG", "sup":[7.68800000,12.91000000,12.63000000], "qualymes":[6,3], "rmaxt": 0.64, "atual":12.94000000},
    {"cryp":"PUNDIX", "sup":[0.79600000,0.78700000,0.77400000,0.74400000,0.57800000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":0.80100000},
    {"cryp":"PYR", "sup":[7.55000000], "qualymes":[3], "rmaxt": 0.33, "atual":7.57000000},
    {"cryp":"QI", "sup":[0.05020000], "qualymes":[3], "rmaxt": 0.33, "atual":0.05100000},
    {"cryp":"QNT", "sup":[102.90000000,100.40000000], "qualymes":[6,3], "rmaxt": 0.43, "atual":103.60000000},
    {"cryp":"QTUM", "sup":[5.58300000,4.43900000,0.71000000], "qualymes":[6,2], "rmaxt": 0.83, "atual":5.58300000},
    {"cryp":"QUICK", "sup":[180.80000000], "qualymes":[3,3], "rmaxt": 0.17, "atual":182.60000000},
    {"cryp":"RAD", "sup":[5.53200000], "qualymes":[2], "rmaxt": 0.25, "atual":5.53200000},
    {"cryp":"RAMP", "sup":[0.10070000], "qualymes":[3,3,3], "rmaxt": 0.09, "atual":0.10090000},
    {"cryp":"RARE", "sup":[0.40600000], "qualymes":[2], "rmaxt": 0.25, "atual":0.40600000},
    {"cryp":"RAY", "sup":[3.82400000], "qualymes":[3,3], "rmaxt": 0.17, "atual":3.89000000},
    {"cryp":"REEF", "sup":[0.00949000,0.00125000], "qualymes":[3,3,3], "rmaxt": 0.07, "atual":0.00957000},
    {"cryp":"REN", "sup":[0.29010000,0.26682000,0.01510000], "qualymes":[3,6], "rmaxt": 0.62, "atual":0.29060000},
    {"cryp":"REP", "sup":[9.45000000,4.80000000,12.70000000], "qualymes":[6,2,2], "rmaxt": 0.55, "atual":12.70000000},
    {"cryp":"REQ", "sup":[0.24080000,0.23830000,0.22740000,0.22320000,0.17590000,0.16560000], "qualymes":[6], "rmaxt": 0.67, "atual":0.24080000},
    {"cryp":"RGT", "sup":[18.00000000], "qualymes":[3], "rmaxt": 0.33, "atual":21.45000000},
    {"cryp":"RIF", "sup":[0.14330000,0.12400000], "qualymes":[3,3,2], "rmaxt": 0.08, "atual":0.14330000},
    {"cryp":"RLC", "sup":[1.77400000,0.00010000], "qualymes":[6,2], "rmaxt": 0.7, "atual":1.77400000},
    {"cryp":"RNDR", "sup":[2.22000000], "qualymes":[3], "rmaxt": 0.33, "atual":2.22700000},
    {"cryp":"ROSE", "sup":[0.16883000,0.03000000], "qualymes":[6], "rmaxt": 1, "atual":0.30562000},
    {"cryp":"RSR", "sup":[0.01752000,0.01651000,0.00751000], "qualymes":[6,6,3], "rmaxt": 0.5, "atual":0.01760000},
    {"cryp":"RUNE", "sup":[3.85000000,0.32240000], "qualymes":[6,3], "rmaxt": 0.53, "atual":3.90600000},
    {"cryp":"RVN", "sup":[0.05924000,0.04050000,0.00712000], "qualymes":[6,3,3,3], "rmaxt": 0.62, "atual":0.06009000},
    {"cryp":"SAND", "sup":[2.84390000,0.00833300], "qualymes":[6], "rmaxt": 0.89, "atual":2.89820000},
    {"cryp":"SANTOS", "sup":[2.50000000], "qualymes":[3], "rmaxt": 0.5, "atual":2.62200000},
    {"cryp":"SC", "sup":[0.00959000,0.00930000,0.00762400,0.00229100], "qualymes":[6,6], "rmaxt": 0.53, "atual":0.00976000},
    {"cryp":"SCRT", "sup":[4.60000000], "qualymes":[3], "rmaxt": 1, "atual":5.31400000},
    {"cryp":"SFP", "sup":[0.69580000,0.60000000,0.10000000], "qualymes":[3,6], "rmaxt": 0.08, "atual":0.71020000},
    {"cryp":"SHIB", "sup":[0.00000510], "qualymes":[6], "rmaxt": 0.67, "atual":0.00001886},
    {"cryp":"SKL", "sup":[0.10180000,0.03000000], "qualymes":[6,3,3], "rmaxt": 0.29, "atual":0.10470000},
    {"cryp":"SLP", "sup":[0.01120000], "qualymes":[3,3,3], "rmaxt": 0.2, "atual":0.01140000},
    {"cryp":"SNX", "sup":[3.72800000,2.38400000], "qualymes":[6,3,3,3], "rmaxt": 0.42, "atual":3.83100000},
    {"cryp":"SOL", "sup":[1.03010000], "qualymes":[6], "rmaxt": 0.89, "atual":100.91000000},
    {"cryp":"SPELL", "sup":[0.00738000], "qualymes":[3], "rmaxt": 0.5, "atual":0.00751000},
    {"cryp":"SRM", "sup":[2.21900000,0.11000000], "qualymes":[6,3], "rmaxt": 0.78, "atual":2.26900000},
    {"cryp":"STMX", "sup":[0.01211000,0.01054100,0.00175800], "qualymes":[6,3,3], "rmaxt": 0.55, "atual":0.01251000},
    {"cryp":"STORJ", "sup":[1.02090000,0.50440000,0.15000000], "qualymes":[6,6], "rmaxt": 0.47, "atual":1.04980000},
    {"cryp":"STPT", "sup":[0.06511000,0.00961000], "qualymes":[6], "rmaxt": 0.87, "atual":0.06698000},
    {"cryp":"STRAX", "sup":[1.09800000,1.09700000,1.00000000,0.32930000], "qualymes":[6,3,3], "rmaxt": 0.47, "atual":1.10100000},
    {"cryp":"STX", "sup":[1.41000000,0.04300000], "qualymes":[6], "rmaxt": 0.96, "atual":1.42300000},
    {"cryp":"SUN", "sup":[0.01449000,0.01412000], "qualymes":[3,3], "rmaxt": 0.47, "atual":0.01456000},
    {"cryp":"SUPER", "sup":[0.66020000,0.27300000], "qualymes":[3,6], "rmaxt": 0.09, "atual":0.66600000},
    {"cryp":"SUSD", "sup":[1.00300000,1.00200000,0.99900000,0.99400000,0.97700000,0.85730000], "qualymes":[6], "rmaxt": 1, "atual":1.00500000},
    {"cryp":"SXP", "sup":[1.31100000,1.27600000,0.55800000], "qualymes":[6,3,3], "rmaxt": 0.58, "atual":1.33400000},
    {"cryp":"SUSHI", "sup":[4.43200000,4.33200000,0.47200000], "qualymes":[6,3,3], "rmaxt": 0.41, "atual":4.50600000},
    {"cryp":"SYS", "sup":[0.85220000,0.82400000,0.26400000,0.25790000], "qualymes":[6], "rmaxt": 1, "atual":0.86630000},
    {"cryp":"TCT", "sup":[0.01816000,0.00180000], "qualymes":[6,3], "rmaxt": 0.68, "atual":0.01842000},
    {"cryp":"TFUEL", "sup":[0.13220000,0.00077200], "qualymes":[6,3,3], "rmaxt": 0.79, "atual":0.13510000},
    {"cryp":"THETA", "sup":[2.80200000,0.03554000], "qualymes":[6,3,3], "rmaxt": 0.74, "atual":2.83900000},
    {"cryp":"TKO", "sup":[0.67200000,0.10000000], "qualymes":[3,3,3], "rmaxt": 0.1, "atual":0.68700000},
    {"cryp":"TLM", "sup":[0.10370000,0.07010000,0.06630000], "qualymes":[3,6], "rmaxt": 0.1, "atual":0.10740000},
    {"cryp":"TOMO", "sup":[1.09700000,0.11810000], "qualymes":[6,3], "rmaxt": 0.87, "atual":1.11900000},
    {"cryp":"TORN", "sup":[21.51000000], "qualymes":[3,3], "rmaxt": 0.5, "atual":21.58000000},
    {"cryp":"TRB", "sup":[18.73000000,12.78800000], "qualymes":[6,3], "rmaxt": 0.56, "atual":19.21000000},
    {"cryp":"TRIBE", "sup":[0.73880000,0.57420000], "qualymes":[6], "rmaxt": 0.67, "atual":0.75120000},
    {"cryp":"TROY", "sup":[0.00570600,0.00126660], "qualymes":[6,3], "rmaxt": 0.85, "atual":0.00585100},
    {"cryp":"TRU", "sup":[0.17470000,0.11340000], "qualymes":[6,3], "rmaxt": 0.62, "atual":0.17620000},
    {"cryp":"TRX", "sup":[0.05581000,0.04911000,0.00684000], "qualymes":[6,6], "rmaxt": 0.8, "atual":0.05629000},
    {"cryp":"TUSD", "sup":[0.99980000,0.99970000,0.99960000,0.99100000,0.46540000], "qualymes":[6,3,6], "rmaxt": 0.82, "atual":0.99990000},
    {"cryp":"TVK", "sup":[0.11250000], "qualymes":[3,3], "rmaxt": 0.17, "atual":0.11660000},
    {"cryp":"TWT", "sup":[0.51600000,0.16980000], "qualymes":[6,3], "rmaxt": 0.69, "atual":0.52590000},
    {"cryp":"UMA", "sup":[6.13100000,6.05400000,5.85500000], "qualymes":[6,3,3], "rmaxt": 0.35, "atual":6.18300000},
    {"cryp":"UNFI", "sup":[5.00000000,4.86900000,1.30000000], "qualymes":[6,6,3], "rmaxt": 0.33, "atual":5.16100000},
    {"cryp":"UNI", "sup":[11.21000000,0.30000000], "qualymes":[6,3,3], "rmaxt": 0.53, "atual":11.60000000},
    {"cryp":"USDC", "sup":[0.99960000,0.99920000,0.20000000], "qualymes":[3,3,3,3,3], "rmaxt": 0.08, "atual":0.99990000},
    {"cryp":"USDP", "sup":[0.99980000,0.99950000,0.99940000,0.98920000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.99980000},
    {"cryp":"UST", "sup":[0.96100000], "qualymes":[3], "rmaxt": 0.5, "atual":1.00100000},
    {"cryp":"UTK", "sup":[0.21460000,0.08100000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":0.21780000},
    {"cryp":"VET", "sup":[0.05081000,0.00156500], "qualymes":[6,3], "rmaxt": 0.79, "atual":0.05162000},
    {"cryp":"VGX", "sup":[1.72600000,1.05000000], "qualymes":[3], "rmaxt": 0.33, "atual":1.74700000},
    {"cryp":"VIDT", "sup":[0.46000000], "qualymes":[3], "rmaxt": 0.4, "atual":0.47100000},
    {"cryp":"VITE", "sup":[0.04953000,0.04327000,0.00430000], "qualymes":[6,6], "rmaxt": 0.65, "atual":0.04976000},
    {"cryp":"VOXEL", "sup":[0.20000000], "qualymes":[3], "rmaxt": 0.5, "atual":1.26500000},
    {"cryp":"VTHO", "sup":[0.00360100,0.00051900], "qualymes":[6,3,3], "rmaxt": 0.53, "atual":0.00372200},
    {"cryp":"WAN", "sup":[0.39770000,0.06980000], "qualymes":[6,3,3], "rmaxt": 0.7, "atual":0.40190000},
    {"cryp":"WAVES", "sup":[9.21000000,0.54290000,0.26000000], "qualymes":[6,3,3], "rmaxt": 0.78, "atual":9.32000000},
    {"cryp":"WAXP", "sup":[0.25420000,0.18520000], "qualymes":[6], "rmaxt": 0.67, "atual":0.25900000},
    {"cryp":"WIN", "sup":[0.00028990,0.00026550,0.00003680], "qualymes":[6,6], "rmaxt": 0.7, "atual":0.00029050},
    {"cryp":"WING", "sup":[9.14000000,7.04800000], "qualymes":[3,3,3,3], "rmaxt": 0.06, "atual":9.21000000},
    {"cryp":"WNXM", "sup":[38.86000000,15.00000000], "qualymes":[6,3], "rmaxt": 0.56, "atual":39.24000000},
    {"cryp":"WRX", "sup":[0.76000000,0.05167000,0.02000000], "qualymes":[6,3], "rmaxt": 0.63, "atual":0.77500000},
    {"cryp":"WTC", "sup":[0.48000000,0.40740000,0.21650000], "qualymes":[6,6], "rmaxt": 0.59, "atual":0.48590000},
    {"cryp":"XEC", "sup":[0.00007000], "qualymes":[3,3], "rmaxt": 0.2, "atual":0.00007187},
    {"cryp":"XEM", "sup":[0.09100000,0.08520000], "qualymes":[3,6,3], "rmaxt": 0.33, "atual":0.09210000},
    {"cryp":"XLM", "sup":[0.18200000,0.02600000], "qualymes":[6,3], "rmaxt": 0.82, "atual":0.18550000},
    {"cryp":"XMR", "sup":[25.08000000,153.80000000,151.80000000], "qualymes":[6,3,3], "rmaxt": 0.77, "atual":153.80000000},
    {"cryp":"XRP", "sup":[0.59460000,0.51570000,0.50900000,0.10129000], "qualymes":[6,6,3], "rmaxt": 0.8, "atual":0.60210000},
    {"cryp":"XTZ", "sup":[3.01300000,0.95000000,0.74990000], "qualymes":[6], "rmaxt": 0.9, "atual":3.08000000},
    {"cryp":"XVG", "sup":[0.00929000], "qualymes":[3,3], "rmaxt": 0.13, "atual":0.00941000},
    {"cryp":"XVS", "sup":[8.25000000,1.15900000], "qualymes":[6,3,3], "rmaxt": 0.5, "atual":8.30000000},
    {"cryp":"YFI", "sup":[3000.00000000,22132.76000000,17699.81000000], "qualymes":[6,3,6], "rmaxt": 0.56, "atual":22686.27000000},
    {"cryp":"YFII", "sup":[970.00000000,1900.00000000,1157.26000000], "qualymes":[3,6,3], "rmaxt": 0.06, "atual":1948.00000000},
    {"cryp":"YGG", "sup":[2.53500000], "qualymes":[3], "rmaxt": 0.6, "atual":2.60800000},
    {"cryp":"ZEC", "sup":[88.20000000,17.13000000], "qualymes":[6,3], "rmaxt": 0.77, "atual":90.70000000},
    {"cryp":"ZEN", "sup":[5.06200000,33.28000000], "qualymes":[6,3], "rmaxt": 0.58, "atual":33.88000000},
    {"cryp":"ZIL", "sup":[0.04334000,0.00224000], "qualymes":[6,3,3], "rmaxt": 0.78, "atual":0.04415000},
    {"cryp":"ZRX", "sup":[0.50410000,0.49790000,0.11050000], "qualymes":[6,3], "rmaxt": 0.75, "atual":0.51560000}
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
        setInterval(() => {
            if(cc<=lissuport.length-1){
                document.getElementById(`sup_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].sup[0].toFixed(8)
                //document.getElementById(`difsup_${lissuport[cc].cryp}`).innerHTML= 
                document.getElementById(`qualymes_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].qualymes
                document.getElementById(`rmaxtu_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].rmaxt
            }
            
        }, 20);
        
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
