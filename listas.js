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
    {"cryp":"1INCH", "sup":1.71800000, "res":1.73800000, "qualymes":633, "rmaxt": 0.4, "atual":1.72500000,"final":""},
{"cryp":"ACA", "sup":1.41000000, "res":1.49900000, "qualymes":3, "rmaxt": 0.5, "atual":1.45300000,"final":""},
{"cryp":"ACH", "sup":0.03849000, "res":0.03903000, "qualymes":3, "rmaxt": 0.5, "atual":0.03856000,"final":""},
{"cryp":"AAVE", "sup":25.93900000, "res":162.30000000, "qualymes":633, "rmaxt": 0.47, "atual":162.20000000,"final":""},
{"cryp":"ACM", "sup":4.23000000, "res":16.58400000, "qualymes":3333, "rmaxt": 0.08, "atual":4.25100000, "final":""},
{"cryp":"ADA", "sup":1.06600000, "res":1.08300000, "qualymes":63, "rmaxt": 0.89, "atual":1.07600000,"final":""},
{"cryp":"ADX", "sup":0.43910000, "res":0.44770000, "qualymes":33, "rmaxt": 0.2, "atual":0.44280000,"final":""},
{"cryp":"AGLD", "sup":1.66000000, "res":1.75800000, "qualymes":33, "rmaxt": 0.2, "atual":1.66900000,"final":""},
{"cryp":"AION", "sup":0.09000000, "res":0.09840000, "qualymes":63, "rmaxt": 0.64, "atual":0.09300000,"final":""},
{"cryp":"AKRO", "sup":0.01348000, "res":0.01363000, "qualymes":63, "rmaxt": 0.38, "atual":0.01354000,"final":""},
{"cryp":"ALCX", "sup":175.90000000, "res":177.40000000, "qualymes":3, "rmaxt": 0.25, "atual":175.90000000,"final":""},
{"cryp":"ALGO", "sup":1.01740000, "res":1.02120000, "qualymes":36, "rmaxt": 0.03, "atual":1.02100000,"final":""},
{"cryp":"ALICE", "sup":7.39000000, "res":11.37000000, "qualymes":36, "rmaxt": 0.08, "atual":7.42000000,"final":""},
{"cryp":"ALPACA", "sup":0.36820000, "res":0.37260000, "qualymes":33, "rmaxt": 0.14, "atual":0.36930000,"final":""},
{"cryp":"AMP", "sup":0.02400000, "res":0.08000000, "qualymes":3, "rmaxt": 0.25, "atual":0.03095000,"final":""},
{"cryp":"ALPHA", "sup":0.38810000, "res":0.38980000, "qualymes":6333, "rmaxt": 0.29, "atual":0.38890000, "final":""},
{"cryp":"ANC", "sup":1.25300000, "res":1.98000000, "qualymes":3, "rmaxt": 0.5, "atual":1.52900000,"final":""},
{"cryp":"ANKR", "sup":0.07939000, "res":0.07979000, "qualymes":66, "rmaxt": 0.66, "atual":0.07951000,"final":""},
{"cryp":"ANT", "sup":8.36100000, "res":14.29300000, "qualymes":366, "rmaxt": 0.05, "atual":8.41400000,"final":""},
{"cryp":"ANY", "sup":19.36000000, "res":20.42000000, "qualymes":6, "rmaxt": 0.67, "atual":20.26000000,"final":""},
{"cryp":"API3", "sup":3.33100000, "res":7.22000000, "qualymes":3, "rmaxt": 0.5, "atual":3.69400000,"final":""},
{"cryp":"AR", "sup":7.10100000, "res":41.82000000, "qualymes":6, "rmaxt": 0.7, "atual":39.35000000,"final":""},
{"cryp":"ARPA", "sup":0.00326000, "res":0.27525000, "qualymes":6, "rmaxt": 0.89, "atual":0.06340000,"final":""},
{"cryp":"ARDR", "sup":0.18390000, "res":0.18420000, "qualymes":663, "rmaxt": 0.55, "atual":0.18420000,"final":""},
{"cryp":"ASR", "sup":3.13400000, "res":11.65300000, "qualymes":3333, "rmaxt": 0.07, "atual":3.13600000, "final":""},
{"cryp":"ATA", "sup":0.40590000, "res":0.42100000, "qualymes":33, "rmaxt": 0.11, "atual":0.41860000,"final":""},
{"cryp":"ATM", "sup":5.32000000, "res":13.90000000, "qualymes":633, "rmaxt": 0.4, "atual":5.35000000,"final":""},
{"cryp":"ATOM", "sup":28.47000000, "res":28.87000000, "qualymes":66, "rmaxt": 0.86, "atual":28.71000000,"final":""},
{"cryp":"AUCTION", "sup":11.66000000, "res":43.79000000, "qualymes":3, "rmaxt": 0.4, "atual":14.59000000,"final":""},
{"cryp":"AUD", "sup":0.71310000, "res":0.71420000, "qualymes":3333, "rmaxt": 0.21, "atual":0.71420000, "final":""},
{"cryp":"AUDIO", "sup":0.96500000, "res":0.97000000, "qualymes":66, "rmaxt": 0.35, "atual":0.96900000,"final":""},
{"cryp":"AUTO", "sup":419.70000000, "res":1039.80000000, "qualymes":333, "rmaxt": 0.09, "atual":419.80000000,"final":""},
{"cryp":"AVA", "sup":1.14900000, "res":1.17600000, "qualymes":633, "rmaxt": 0.38, "atual":1.16500000,"final":""},
{"cryp":"AVAX", "sup":72.91000000, "res":147.00000000, "qualymes":6, "rmaxt": 0.83, "atual":74.08000000,"final":""},
{"cryp":"AXS", "sup":0.10000000, "res":166.09000000, "qualymes":6, "rmaxt": 0.81, "atual":53.20000000,"final":""},
{"cryp":"BADGER", "sup":8.28000000, "res":11.30000000, "qualymes":36, "rmaxt": 0.08, "atual":11.05000000,"final":""},
{"cryp":"BAKE", "sup":0.65100000, "res":0.65500000, "qualymes":333, "rmaxt": 0.18, "atual":0.65300000,"final":""},
{"cryp":"BAL", "sup":8.37500000, "res":12.62000000, "qualymes":633, "rmaxt": 0.53, "atual":12.60000000,"final":""},
{"cryp":"BAND", "sup":3.50100000, "res":10.08700000, "qualymes":633, "rmaxt": 0.67, "atual":3.51700000,"final":""},
{"cryp":"BAT", "sup":0.83580000, "res":0.86300000, "qualymes":6, "rmaxt": 0.92, "atual":0.85850000,"final":""},
{"cryp":"BAR", "sup":6.36000000, "res":10.76000000, "qualymes":333, "rmaxt": 0.09, "atual":6.36000000,"final":""},
{"cryp":"BCH", "sup":293.90000000, "res":1650.00000000, "qualymes":633, "rmaxt": 0.68, "atual":294.50000000,"final":""},
{"cryp":"BEAM", "sup":0.34450000, "res":0.35330000, "qualymes":63, "rmaxt": 0.67, "atual":0.34770000,"final":""},
{"cryp":"BEL", "sup":0.95800000, "res":0.96300000, "qualymes":3333, "rmaxt": 0.06, "atual":0.96000000, "final":""},
{"cryp":"BETA", "sup":0.40154000, "res":0.41950000, "qualymes":33, "rmaxt": 0.2, "atual":0.40957000,"final":""},
{"cryp":"BICO", "sup":1.91400000, "res":2.20000000, "qualymes":3, "rmaxt": 0.33, "atual":2.02000000,"final":""},
{"cryp":"BLZ", "sup":0.13560000, "res":0.13680000, "qualymes":63, "rmaxt": 0.42, "atual":0.13640000,"final":""},
{"cryp":"BNB", "sup":6.38000000, "res":385.40000000, "qualymes":66, "rmaxt": 0.83, "atual":382.80000000,"final":""},
{"cryp":"BNT", "sup":2.54300000, "res":2.54700000, "qualymes":63, "rmaxt": 0.56, "atual":2.54600000,"final":""},
{"cryp":"BNX", "sup":21.00000000, "res":109.70000000, "qualymes":3, "rmaxt": 0.25, "atual":21.20000000,"final":""},
{"cryp":"BOND", "sup":9.85000000, "res":10.33000000, "qualymes":33, "rmaxt": 0.5, "atual":10.05000000,"final":""},
{"cryp":"BTC", "sup":32917.17000000, "res":69000.00000000, "qualymes":6, "rmaxt": 0.95, "atual":38521.92000000,"final":""},
{"cryp":"BTCST", "sup":8.00000000, "res":1000.00000000, "qualymes":3363, "rmaxt": 0.07, "atual":15.25000000, "final":""},
{"cryp":"BTG", "sup":31.09000000, "res":169.00000000, "qualymes":333, "rmaxt": 0.18, "atual":31.18000000,"final":""},
{"cryp":"BTS", "sup":0.02486000, "res":0.02518000, "qualymes":633, "rmaxt": 0.6, "atual":0.02489000,"final":""},
{"cryp":"BTT", "sup":0.00271000, "res":0.00278000, "qualymes":663, "rmaxt": 0.76, "atual":0.00277700,"final":""},
{"cryp":"BTTC", "sup":0.00000214, "res":0.00000215, "qualymes":3, "rmaxt": 0.5, "atual":0.00000215,"final":""},
{"cryp":"BURGER", "sup":1.77300000, "res":1.78400000, "qualymes":333, "rmaxt": 0.18, "atual":1.77700000,"final":""},
{"cryp":"C98", "sup":1.68200000, "res":1.70300000, "qualymes":63, "rmaxt": 0.25, "atual":1.68500000,"final":""},
{"cryp":"BUSD", "sup":0.99950000, "res":0.99960000, "qualymes":3333, "rmaxt": 0.03, "atual":0.99950000, "final":""},
{"cryp":"CAKE", "sup":7.63000000, "res":19.86000000, "qualymes":333, "rmaxt": 0.23, "atual":7.64000000,"final":""},
{"cryp":"CELO", "sup":3.19200000, "res":10.95700000, "qualymes":63, "rmaxt": 0.57, "atual":3.20500000,"final":""},
{"cryp":"CELR", "sup":0.05248000, "res":0.05291000, "qualymes":63, "rmaxt": 0.86, "atual":0.05262000,"final":""},
{"cryp":"CFX", "sup":0.11350000, "res":0.11490000, "qualymes":333, "rmaxt": 0.08, "atual":0.11380000,"final":""},
{"cryp":"CHESS", "sup":0.95300000, "res":0.95800000, "qualymes":33, "rmaxt": 0.2, "atual":0.95500000,"final":""},
{"cryp":"CHR", "sup":0.53910000, "res":0.55580000, "qualymes":6, "rmaxt": 0.86, "atual":0.55330000,"final":""},
{"cryp":"CHZ", "sup":0.19130000, "res":0.19230000, "qualymes":633, "rmaxt": 0.63, "atual":0.19160000,"final":""},
{"cryp":"CITY", "sup":9.67000000, "res":10.02000000, "qualymes":3, "rmaxt": 0.25, "atual":9.70000000,"final":""},
{"cryp":"CKB", "sup":0.01551000, "res":0.01577000, "qualymes":66, "rmaxt": 0.21, "atual":0.01561000,"final":""},
{"cryp":"CLV", "sup":0.34400000, "res":0.35000000, "qualymes":33, "rmaxt": 0.13, "atual":0.34500000,"final":""},
{"cryp":"COCOS", "sup":0.00017100, "res":6.50000000, "qualymes":6, "rmaxt": 0.9, "atual":1.34110000,"final":""},
{"cryp":"COMP", "sup":80.62000000, "res":130.90000000, "qualymes":633, "rmaxt": 0.57, "atual":130.40000000,"final":""},
{"cryp":"COS", "sup":0.01731000, "res":0.01736000, "qualymes":6, "rmaxt": 0.94, "atual":0.01732000,"final":""},
{"cryp":"COTI", "sup":0.30750000, "res":0.31290000, "qualymes":63, "rmaxt": 0.84, "atual":0.30840000,"final":""},
{"cryp":"CRV", "sup":3.35500000, "res":23.25500000, "qualymes":36, "rmaxt": 0.05, "atual":3.36800000,"final":""},
{"cryp":"CTK", "sup":1.32600000, "res":1.33200000, "qualymes":336, "rmaxt": 0.06, "atual":1.33000000,"final":""},
{"cryp":"CTSI", "sup":0.46210000, "res":0.46680000, "qualymes":63, "rmaxt": 0.61, "atual":0.46380000,"final":""},
{"cryp":"CTXC", "sup":0.30360000, "res":0.32050000, "qualymes":6, "rmaxt": 0.93, "atual":0.31150000,"final":""},
{"cryp":"CVC", "sup":0.28110000, "res":0.28230000, "qualymes":63, "rmaxt": 0.84, "atual":0.28160000,"final":""},
{"cryp":"CVP", "sup":1.08300000, "res":1.12400000, "qualymes":33, "rmaxt": 0.2, "atual":1.09700000,"final":""},
{"cryp":"CVX", "sup":28.17000000, "res":28.91000000, "qualymes":3, "rmaxt": 0.67, "atual":28.57000000,"final":""},
{"cryp":"DAR", "sup":0.75550000, "res":0.81948000, "qualymes":3, "rmaxt": 0.25, "atual":0.79622000,"final":""},
{"cryp":"DASH", "sup":98.60000000, "res":240.30000000, "qualymes":633, "rmaxt": 0.75, "atual":98.80000000,"final":""},
{"cryp":"DATA", "sup":0.07706000, "res":0.08000000, "qualymes":633, "rmaxt": 0.57, "atual":0.07779000,"final":""},
{"cryp":"DCR", "sup":64.10000000, "res":114.20000000, "qualymes":633, "rmaxt": 0.5, "atual":64.10000000,"final":""},
{"cryp":"DEGO", "sup":3.77000000, "res":10.12000000, "qualymes":33, "rmaxt": 0.08, "atual":3.78000000,"final":""},
{"cryp":"DENT", "sup":0.00268000, "res":0.00272400, "qualymes":663, "rmaxt": 0.68, "atual":0.00269400,"final":""},
{"cryp":"DEXE", "sup":6.61000000, "res":27.22000000, "qualymes":33, "rmaxt": 0.13, "atual":6.95000000,"final":""},
{"cryp":"DF", "sup":0.10180000, "res":0.10340000, "qualymes":33, "rmaxt": 0.17, "atual":0.10210000,"final":""},
{"cryp":"DGB", "sup":0.02248000, "res":0.02263000, "qualymes":633, "rmaxt": 0.55, "atual":0.02259000,"final":""},
{"cryp":"DIA", "sup":0.95800000, "res":0.95800000, "qualymes":333, "rmaxt": 0.5, "atual":0.95800000,"final":""},
{"cryp":"DNT", "sup":0.08320000, "res":0.08360000, "qualymes":633, "rmaxt": 0.38, "atual":0.08340000,"final":""},
{"cryp":"DOCK", "sup":0.04328000, "res":0.04435000, "qualymes":633, "rmaxt": 0.68, "atual":0.04396000,"final":""},
{"cryp":"DODO", "sup":0.49100000, "res":0.49500000, "qualymes":3333, "rmaxt": 0.08, "atual":0.49400000, "final":""},
{"cryp":"DOGE", "sup":0.14400000, "res":0.14470000, "qualymes":633, "rmaxt": 0.72, "atual":0.14420000,"final":""},
{"cryp":"DOT", "sup":20.27000000, "res":20.45000000, "qualymes":6, "rmaxt": 0.84, "atual":20.35000000,"final":""},
{"cryp":"DREP", "sup":0.73500000, "res":0.75080000, "qualymes":66, "rmaxt": 0.62, "atual":0.74120000,"final":""},
{"cryp":"DUSK", "sup":0.52150000, "res":0.55160000, "qualymes":6, "rmaxt": 0.94, "atual":0.53570000,"final":""},
{"cryp":"DYDX", "sup":6.30400000, "res":14.94000000, "qualymes":33, "rmaxt": 0.17, "atual":6.32000000,"final":""},
{"cryp":"EGLD", "sup":6.00000000, "res":544.25000000, "qualymes":6, "rmaxt": 0.83, "atual":154.87000000,"final":""},
{"cryp":"ELF", "sup":0.33440000, "res":0.33510000, "qualymes":33, "rmaxt": 0.17, "atual":0.33450000,"final":""},
{"cryp":"ENJ", "sup":0.03223000, "res":4.84500000, "qualymes":6, "rmaxt": 0.91, "atual":1.84400000,"final":""},
{"cryp":"ENS", "sup":14.43000000, "res":120.00000000, "qualymes":3, "rmaxt": 0.25, "atual":19.47000000,"final":""},
{"cryp":"EOS", "sup":2.42600000, "res":14.90000000, "qualymes":3633, "rmaxt": 0.04, "atual":2.43000000, "final":""},
{"cryp":"ERN", "sup":4.92800000, "res":19.83800000, "qualymes":33, "rmaxt": 0.33, "atual":5.05300000,"final":""},
{"cryp":"EPS", "sup":0.16910000, "res":0.17000000, "qualymes":333, "rmaxt": 0.09, "atual":0.16970000,"final":""},
{"cryp":"ETC", "sup":3.07260000, "res":179.83000000, "qualymes":633, "rmaxt": 0.8, "atual":27.98000000,"final":""},
{"cryp":"ETH", "sup":86.00000000, "res":2790.98000000, "qualymes":6, "rmaxt": 0.95, "atual":2785.38000000,"final":""},
{"cryp":"EUR", "sup":1.12900000, "res":1.13100000, "qualymes":3636, "rmaxt": 0.04, "atual":1.13000000, "final":""},
{"cryp":"FARM", "sup":99.70000000, "res":110.10000000, "qualymes":33, "rmaxt": 0.14, "atual":108.80000000,"final":""},
{"cryp":"FET", "sup":0.32270000, "res":0.32750000, "qualymes":63, "rmaxt": 0.86, "atual":0.32360000,"final":""},
{"cryp":"FIDA", "sup":2.24100000, "res":10.05500000, "qualymes":3, "rmaxt": 0.5, "atual":2.24800000,"final":""},
{"cryp":"FIL", "sup":21.16000000, "res":120.17000000, "qualymes":3333, "rmaxt": 0.06, "atual":21.22000000, "final":""},
{"cryp":"FIO", "sup":0.09830000, "res":0.10030000, "qualymes":63, "rmaxt": 0.44, "atual":0.09960000,"final":""},
{"cryp":"FIRO", "sup":3.66700000, "res":12.29600000, "qualymes":333, "rmaxt": 0.36, "atual":3.68500000,"final":""},
{"cryp":"FIS", "sup":0.73240000, "res":0.75000000, "qualymes":363, "rmaxt": 0.08, "atual":0.74480000,"final":""},
{"cryp":"FLM", "sup":0.24890000, "res":0.25950000, "qualymes":3633, "rmaxt": 0.06, "atual":0.25690000, "final":""},
{"cryp":"FLOW", "sup":6.52000000, "res":10.56000000, "qualymes":333, "rmaxt": 0.13, "atual":6.53000000,"final":""},
{"cryp":"FLUX", "sup":1.56100000, "res":1.60400000, "qualymes":3, "rmaxt": 0.33, "atual":1.57700000,"final":""},
{"cryp":"FOR", "sup":0.04606000, "res":0.04659000, "qualymes":33, "rmaxt": 0.29, "atual":0.04611000,"final":""},
{"cryp":"FORTH", "sup":5.82000000, "res":10.00000000, "qualymes":3333, "rmaxt": 0.09, "atual":6.21000000, "final":""},
{"cryp":"FRONT", "sup":0.50210000, "res":0.50900000, "qualymes":33, "rmaxt": 0.2, "atual":0.50870000,"final":""},
{"cryp":"FTM", "sup":2.06430000, "res":2.09490000, "qualymes":63, "rmaxt": 0.88, "atual":2.07120000,"final":""},
{"cryp":"FTT", "sup":45.31000000, "res":46.22000000, "qualymes":63, "rmaxt": 0.81, "atual":45.85000000,"final":""},
{"cryp":"FUN", "sup":0.00986000, "res":0.00994000, "qualymes":633, "rmaxt": 0.68, "atual":0.00989000,"final":""},
{"cryp":"FXS", "sup":21.48000000, "res":21.48200000, "qualymes":6, "rmaxt": 0.67, "atual":21.48000000,"final":""},
{"cryp":"GALA", "sup":0.02103000, "res":0.84128000, "qualymes":6, "rmaxt": 0.5, "atual":0.20230000,"final":""},
{"cryp":"GBP", "sup":1.35500000, "res":1.35800000, "qualymes":3633, "rmaxt": 0.05, "atual":1.35700000, "final":""},
{"cryp":"GHST", "sup":1.50800000, "res":3.40000000, "qualymes":6, "rmaxt": 0.57, "atual":2.03000000,"final":""},
{"cryp":"GLMR", "sup":5.00000000, "res":51.00000000, "qualymes":3, "rmaxt": 0.5, "atual":5.33820000,"final":""},
{"cryp":"GNO", "sup":295.10000000, "res":296.70000000, "qualymes":3, "rmaxt": 0.57, "atual":296.70000000,"final":""},
{"cryp":"GTC", "sup":8.08900000, "res":29.04300000, "qualymes":6, "rmaxt": 0.67, "atual":8.18900000,"final":""},
{"cryp":"GTO", "sup":0.03356000, "res":0.03381000, "qualymes":66, "rmaxt": 0.69, "atual":0.03363000,"final":""},
{"cryp":"GXS", "sup":1.13380000, "res":2.27990000, "qualymes":6, "rmaxt": 0.91, "atual":1.53810000,"final":""},
{"cryp":"HARD", "sup":0.56900000, "res":0.57490000, "qualymes":3333, "rmaxt": 0.06, "atual":0.56990000, "final":""},
{"cryp":"HBAR", "sup":0.23110000, "res":0.23210000, "qualymes":63, "rmaxt": 0.83, "atual":0.23170000,"final":""},
{"cryp":"HIGH", "sup":5.77000000, "res":12.52000000, "qualymes":3, "rmaxt": 0.33, "atual":5.77000000,"final":""},
{"cryp":"HIVE", "sup":0.71020000, "res":1.31940000, "qualymes":6, "rmaxt": 0.87, "atual":0.96200000,"final":""},
{"cryp":"HNT", "sup":0.68600000, "res":59.27000000, "qualymes":6, "rmaxt": 0.83, "atual":27.26000000,"final":""},
{"cryp":"HOT", "sup":0.00454400, "res":0.00459300, "qualymes":63, "rmaxt": 0.73, "atual":0.00454400,"final":""},
{"cryp":"ICP", "sup":21.47000000, "res":21.81000000, "qualymes":333, "rmaxt": 0.1, "atual":21.47000000,"final":""},
{"cryp":"ICX", "sup":0.74600000, "res":0.75800000, "qualymes":63, "rmaxt": 0.76, "atual":0.74600000,"final":""},
{"cryp":"IDEX", "sup":0.15748000, "res":0.19737000, "qualymes":33, "rmaxt": 0.17, "atual":0.19019000,"final":""},
{"cryp":"ILV", "sup":414.50000000, "res":1930.00000000, "qualymes":6, "rmaxt": 0.67, "atual":619.20000000,"final":""},
{"cryp":"IMX", "sup":2.00000000, "res":4.67900000, "qualymes":3, "rmaxt": 0.5, "atual":3.02900000,"final":""},
{"cryp":"INJ", "sup":4.28000000, "res":10.33700000, "qualymes":633, "rmaxt": 0.47, "atual":4.28000000,"final":""},
{"cryp":"IOST", "sup":0.02521000, "res":0.02670000, "qualymes":663, "rmaxt": 0.72, "atual":0.02652000,"final":""},
{"cryp":"IOTA", "sup":0.89580000, "res":0.90450000, "qualymes":663, "rmaxt": 0.78, "atual":0.89660000,"final":""},
{"cryp":"IOTX", "sup":0.00103400, "res":0.26300000, "qualymes":6, "rmaxt": 0.89, "atual":0.07769000,"final":""},
{"cryp":"IRIS", "sup":0.06756000, "res":0.06910000, "qualymes":66, "rmaxt": 0.47, "atual":0.06762000,"final":""},
{"cryp":"JASMY", "sup":0.04370000, "res":0.04440000, "qualymes":3, "rmaxt": 0.25, "atual":0.04380000,"final":""},
{"cryp":"JOE", "sup":0.65700000, "res":2.79000000, "qualymes":3, "rmaxt": 0.33, "atual":1.44000000,"final":""},
{"cryp":"JST", "sup":0.04363000, "res":0.04377000, "qualymes":633, "rmaxt": 0.47, "atual":0.04363000,"final":""},
{"cryp":"JUV", "sup":6.28000000, "res":10.98000000, "qualymes":3333, "rmaxt": 0.07, "atual":6.30000000, "final":""},
{"cryp":"KAVA", "sup":3.35000000, "res":3.39000000, "qualymes":63, "rmaxt": 0.79, "atual":3.35000000,"final":""},
{"cryp":"KEEP", "sup":0.44540000, "res":0.44900000, "qualymes":63, "rmaxt": 0.56, "atual":0.44550000,"final":""},
{"cryp":"KEY", "sup":0.00694200, "res":0.00711800, "qualymes":66, "rmaxt": 0.68, "atual":0.00704300,"final":""},
{"cryp":"KLAY", "sup":1.17800000, "res":1.18700000, "qualymes":63, "rmaxt": 0.56, "atual":1.17900000,"final":""},
{"cryp":"KMD", "sup":0.49300000, "res":0.49350000, "qualymes":63, "rmaxt": 0.47, "atual":0.49300000,"final":""},
{"cryp":"KNC", "sup":1.97800000, "res":2.02400000, "qualymes":66, "rmaxt": 0.52, "atual":1.98000000,"final":""},
{"cryp":"KP3R", "sup":547.25000000, "res":2065.00000000, "qualymes":3, "rmaxt": 0.25, "atual":893.32000000,"final":""},
{"cryp":"KSM", "sup":23.15800000, "res":175.20000000, "qualymes":63, "rmaxt": 0.5, "atual":173.80000000,"final":""},
{"cryp":"LAZIO", "sup":3.14550000, "res":10.90000000, "qualymes":33, "rmaxt": 0.2, "atual":3.15000000,"final":""},
{"cryp":"LINA", "sup":0.02542000, "res":0.02557000, "qualymes":33, "rmaxt": 0.08, "atual":0.02548000,"final":""},
{"cryp":"LIT", "sup":1.46300000, "res":1.49500000, "qualymes":333, "rmaxt": 0.08, "atual":1.46700000,"final":""},
{"cryp":"LOKA", "sup":0.16000000, "res":3.84000000, "qualymes":3, "rmaxt": 0.5, "atual":2.19090000,"final":""},
{"cryp":"LINK", "sup":17.04000000, "res":17.11000000, "qualymes":63, "rmaxt": 0.76, "atual":17.06000000,"final":""},
{"cryp":"LPT", "sup":26.37000000, "res":101.80000000, "qualymes":6, "rmaxt": 0.7, "atual":28.05000000,"final":""},
{"cryp":"LRC", "sup":0.07100000, "res":3.85000000, "qualymes":6, "rmaxt": 0.86, "atual":0.93530000,"final":""},
{"cryp":"LSK", "sup":1.60600000, "res":1.62200000, "qualymes":633, "rmaxt": 0.64, "atual":1.60800000,"final":""},
{"cryp":"LTO", "sup":0.20250000, "res":0.20460000, "qualymes":66, "rmaxt": 0.6, "atual":0.20300000,"final":""},
{"cryp":"LUNA", "sup":50.41000000, "res":103.60000000, "qualymes":6, "rmaxt": 0.89, "atual":52.52000000,"final":""},
{"cryp":"LTC", "sup":97.50000000, "res":114.40000000, "qualymes":63, "rmaxt": 0.82, "atual":114.20000000,"final":""},
{"cryp":"MANA", "sup":0.03000000, "res":5.90000000, "qualymes":6, "rmaxt": 0.84, "atual":2.67350000,"final":""},
{"cryp":"MASK", "sup":6.37000000, "res":14.30100000, "qualymes":6, "rmaxt": 0.7, "atual":6.41500000,"final":""},
{"cryp":"MATIC", "sup":1.63800000, "res":1.66500000, "qualymes":6, "rmaxt": 0.94, "atual":1.64000000,"final":""},
{"cryp":"MBL", "sup":0.00578200, "res":0.00585700, "qualymes":63, "rmaxt": 0.6, "atual":0.00580300,"final":""},
{"cryp":"MBOX", "sup":1.96900000, "res":15.73400000, "qualymes":6, "rmaxt": 0.71, "atual":2.92600000,"final":""},
{"cryp":"MC", "sup":2.30000000, "res":12.70000000, "qualymes":3, "rmaxt": 0.33, "atual":2.35000000,"final":""},
{"cryp":"MDT", "sup":0.00788000, "res":0.17888000, "qualymes":6, "rmaxt": 0.9, "atual":0.06158000,"final":""},
{"cryp":"MDX", "sup":0.23100000, "res":0.23100000, "qualymes":333, "rmaxt": 0.2, "atual":0.23100000,"final":""},
{"cryp":"MFT", "sup":0.00623800, "res":0.00651200, "qualymes":663, "rmaxt": 0.65, "atual":0.00635800,"final":""},
{"cryp":"MINA", "sup":2.05000000, "res":6.68400000, "qualymes":3, "rmaxt": 0.57, "atual":2.59500000,"final":""},
{"cryp":"MIR", "sup":1.17000000, "res":1.17600000, "qualymes":333, "rmaxt": 0.09, "atual":1.17500000,"final":""},
{"cryp":"MITH", "sup":0.03637000, "res":0.03731000, "qualymes":63, "rmaxt": 0.71, "atual":0.03637000,"final":""},
{"cryp":"MKR", "sup":429.79000000, "res":2303.00000000, "qualymes":633, "rmaxt": 0.55, "atual":2274.00000000,"final":""},
{"cryp":"MLN", "sup":55.60000000, "res":131.90000000, "qualymes":33, "rmaxt": 0.38, "atual":55.60000000,"final":""},
{"cryp":"MOVR", "sup":67.10000000, "res":540.00000000, "qualymes":3, "rmaxt": 0.25, "atual":80.10000000,"final":""},
{"cryp":"MTL", "sup":1.66700000, "res":1.71400000, "qualymes":663, "rmaxt": 0.65, "atual":1.71200000,"final":""},
{"cryp":"NANO", "sup":2.14800000, "res":17.70000000, "qualymes":633, "rmaxt": 0.76, "atual":2.22400000,"final":""},
{"cryp":"NBS", "sup":0.01133000, "res":0.01133000, "qualymes":66, "rmaxt": 0.44, "atual":0.01133000,"final":""},
{"cryp":"NEAR", "sup":11.01000000, "res":11.72000000, "qualymes":6, "rmaxt": 0.94, "atual":11.52100000,"final":""},
{"cryp":"NEO", "sup":3.89000000, "res":141.00000000, "qualymes":3633, "rmaxt": 0.06, "atual":21.05000000, "final":""},
{"cryp":"NKN", "sup":0.22270000, "res":0.22560000, "qualymes":66, "rmaxt": 0.66, "atual":0.22320000,"final":""},
{"cryp":"NMR", "sup":24.85000000, "res":24.88000000, "qualymes":333, "rmaxt": 0.53, "atual":24.88000000,"final":""},
{"cryp":"NULS", "sup":0.39400000, "res":0.40080000, "qualymes":36, "rmaxt": 0.02, "atual":0.39500000,"final":""},
{"cryp":"NU", "sup":0.49410000, "res":0.49410000, "qualymes":63, "rmaxt": 0.56, "atual":0.49410000,"final":""},
{"cryp":"OCEAN", "sup":0.57260000, "res":0.57350000, "qualymes":66, "rmaxt": 0.47, "atual":0.57330000,"final":""},
{"cryp":"OG", "sup":3.34700000, "res":11.20000000, "qualymes":3333, "rmaxt": 0.07, "atual":3.36400000, "final":""},
{"cryp":"OGN", "sup":0.32540000, "res":0.34200000, "qualymes":63, "rmaxt": 0.62, "atual":0.33500000,"final":""},
{"cryp":"OM", "sup":0.09790000, "res":0.09800000, "qualymes":333, "rmaxt": 0.08, "atual":0.09800000,"final":""},
{"cryp":"OMG", "sup":0.30310000, "res":20.12400000, "qualymes":6, "rmaxt": 0.91, "atual":4.88500000,"final":""},
{"cryp":"ONE", "sup":0.18821000, "res":0.19184000, "qualymes":63, "rmaxt": 0.88, "atual":0.19157000,"final":""},
{"cryp":"ONG", "sup":0.63730000, "res":0.64060000, "qualymes":3633, "rmaxt": 0.03, "atual":0.63960000, "final":""},
{"cryp":"ONT", "sup":0.50610000, "res":0.51110000, "qualymes":3633, "rmaxt": 0.02, "atual":0.50700000, "final":""},
{"cryp":"OOKI", "sup":0.00932000, "res":1.80000000, "qualymes":3, "rmaxt": 0.33, "atual":0.01488000,"final":""},
{"cryp":"ORN", "sup":4.15900000, "res":13.18700000, "qualymes":633, "rmaxt": 0.39, "atual":4.17100000,"final":""},
{"cryp":"OXT", "sup":0.24550000, "res":0.24880000, "qualymes":63, "rmaxt": 0.44, "atual":0.24630000,"final":""},
{"cryp":"PAXG", "sup":1801.00000000, "res":1814.00000000, "qualymes":336, "rmaxt": 0.32, "atual":1811.00000000,"final":""},
{"cryp":"PEOPLE", "sup":0.03050000, "res":0.20000000, "qualymes":3, "rmaxt": 0.33, "atual":0.08790000,"final":""},
{"cryp":"PERL", "sup":0.05002000, "res":0.05049000, "qualymes":63, "rmaxt": 0.68, "atual":0.05016000,"final":""},
{"cryp":"PERP", "sup":6.27000000, "res":23.13000000, "qualymes":63, "rmaxt": 0.5, "atual":6.28000000,"final":""},
{"cryp":"PHA", "sup":0.25480000, "res":0.25910000, "qualymes":33, "rmaxt": 0.44, "atual":0.25490000,"final":""},
{"cryp":"PLA", "sup":0.62400000, "res":3.40400000, "qualymes":3, "rmaxt": 0.25, "atual":0.91700000,"final":""},
{"cryp":"PNT", "sup":0.61190000, "res":0.61440000, "qualymes":633, "rmaxt": 0.38, "atual":0.61370000,"final":""},
{"cryp":"POLS", "sup":0.80000000, "res":5.27000000, "qualymes":6, "rmaxt": 0.8, "atual":1.57800000,"final":""},
{"cryp":"POLY", "sup":0.39980000, "res":0.40650000, "qualymes":33, "rmaxt": 0.33, "atual":0.40060000,"final":""},
{"cryp":"POND", "sup":0.04373000, "res":0.04475000, "qualymes":333, "rmaxt": 0.17, "atual":0.04387000,"final":""},
{"cryp":"PORTO", "sup":1.00000000, "res":41.11000000, "qualymes":3, "rmaxt": 0.25, "atual":3.14770000,"final":""},
{"cryp":"POWR", "sup":0.54800000, "res":0.55340000, "qualymes":3, "rmaxt": 0.25, "atual":0.54940000,"final":""},
{"cryp":"PSG", "sup":7.68800000, "res":14.50000000, "qualymes":63, "rmaxt": 0.6, "atual":14.11000000,"final":""},
{"cryp":"PUNDIX", "sup":0.77100000, "res":0.79200000, "qualymes":333, "rmaxt": 0.09, "atual":0.78500000,"final":""},
{"cryp":"PYR", "sup":6.68000000, "res":50.00000000, "qualymes":3, "rmaxt": 0.25, "atual":13.42000000,"final":""},
{"cryp":"QI", "sup":0.05920000, "res":0.06140000, "qualymes":3, "rmaxt": 0.25, "atual":0.05940000,"final":""},
{"cryp":"QNT", "sup":97.10000000, "res":121.00000000, "qualymes":33, "rmaxt": 0.38, "atual":115.50000000,"final":""},
{"cryp":"QTUM", "sup":6.44500000, "res":19.30000000, "qualymes":63, "rmaxt": 0.81, "atual":6.45600000,"final":""},
{"cryp":"QUICK", "sup":191.50000000, "res":196.10000000, "qualymes":33, "rmaxt": 0.14, "atual":192.60000000,"final":""},
{"cryp":"RAD", "sup":5.53100000, "res":11.68900000, "qualymes":33, "rmaxt": 0.2, "atual":5.53900000,"final":""},
{"cryp":"RAMP", "sup":0.11050000, "res":0.11550000, "qualymes":333, "rmaxt": 0.08, "atual":0.11260000,"final":""},
{"cryp":"RARE", "sup":0.56900000, "res":0.66000000, "qualymes":33, "rmaxt": 0.2, "atual":0.60900000,"final":""},
{"cryp":"RAY", "sup":3.77800000, "res":13.44300000, "qualymes":33, "rmaxt": 0.14, "atual":3.78300000,"final":""},
{"cryp":"REEF", "sup":0.01027000, "res":0.01040000, "qualymes":333, "rmaxt": 0.07, "atual":0.01028000,"final":""},
{"cryp":"REN", "sup":0.33280000, "res":0.33590000, "qualymes":333, "rmaxt": 0.6, "atual":0.33280000,"final":""},
{"cryp":"REP", "sup":9.45000000, "res":17.63000000, "qualymes":6333, "rmaxt": 0.52, "atual":16.89000000, "final":""},
{"cryp":"REQ", "sup":0.16560000, "res":1.09900000, "qualymes":6, "rmaxt": 0.57, "atual":0.23280000,"final":""},
{"cryp":"RGT", "sup":20.81000000, "res":20.96000000, "qualymes":3, "rmaxt": 0.25, "atual":20.85000000,"final":""},
{"cryp":"RIF", "sup":0.14580000, "res":0.14680000, "qualymes":333, "rmaxt": 0.07, "atual":0.14680000,"final":""},
{"cryp":"RLC", "sup":1.97500000, "res":1.99100000, "qualymes":63, "rmaxt": 0.68, "atual":1.98100000,"final":""},
{"cryp":"RNDR", "sup":3.73100000, "res":3.76400000, "qualymes":3, "rmaxt": 0.25, "atual":3.74400000,"final":""},
{"cryp":"ROSE", "sup":0.34239000, "res":0.35370000, "qualymes":6, "rmaxt": 0.94, "atual":0.34255000,"final":""},
{"cryp":"RSR", "sup":0.01911000, "res":0.01915000, "qualymes":633, "rmaxt": 0.47, "atual":0.01914000,"final":""},
{"cryp":"RUNE", "sup":4.16800000, "res":14.89700000, "qualymes":63, "rmaxt": 0.5, "atual":4.17600000,"final":""},
{"cryp":"RVN", "sup":0.07033000, "res":0.07087000, "qualymes":6333, "rmaxt": 0.6, "atual":0.07048000, "final":""},
{"cryp":"SAND", "sup":0.00833300, "res":8.48760000, "qualymes":6, "rmaxt": 0.84, "atual":3.94190000,"final":""},
{"cryp":"SANTOS", "sup":2.64900000, "res":2.74200000, "qualymes":3, "rmaxt": 0.33, "atual":2.67400000,"final":""},
{"cryp":"SC", "sup":0.01028000, "res":0.01034000, "qualymes":63, "rmaxt": 0.5, "atual":0.01028000,"final":""},
{"cryp":"SCRT", "sup":5.38000000, "res":5.45300000, "qualymes":3, "rmaxt": 0.5, "atual":5.38000000,"final":""},
{"cryp":"SFP", "sup":0.84060000, "res":0.86090000, "qualymes":363, "rmaxt": 0.08, "atual":0.84540000,"final":""},
{"cryp":"SHIB", "sup":0.00002157, "res":0.00002182, "qualymes":63, "rmaxt": 0.6, "atual":0.00002160,"final":""},
{"cryp":"SKL", "sup":0.11840000, "res":0.11910000, "qualymes":633, "rmaxt": 0.27, "atual":0.11860000,"final":""},
{"cryp":"SLP", "sup":0.00990000, "res":0.01000000, "qualymes":333, "rmaxt": 0.18, "atual":0.01000000,"final":""},
{"cryp":"SNX", "sup":5.89500000, "res":11.80000000, "qualymes":6333, "rmaxt": 0.4, "atual":5.95100000, "final":""},
{"cryp":"SOL", "sup":80.83000000, "res":112.30000000, "qualymes":6, "rmaxt": 0.84, "atual":109.46000000,"final":""},
{"cryp":"SPELL", "sup":0.00483000, "res":0.02810000, "qualymes":3, "rmaxt": 0.33, "atual":0.00674000,"final":""},
{"cryp":"SRM", "sup":2.41000000, "res":13.73200000, "qualymes":63, "rmaxt": 0.74, "atual":2.41000000,"final":""},
{"cryp":"STMX", "sup":0.01507000, "res":0.01529000, "qualymes":633, "rmaxt": 0.52, "atual":0.01510000,"final":""},
{"cryp":"STORJ", "sup":1.17510000, "res":1.19270000, "qualymes":66, "rmaxt": 0.45, "atual":1.17870000,"final":""},
{"cryp":"STRAX", "sup":1.06100000, "res":1.13500000, "qualymes":633, "rmaxt": 0.44, "atual":1.13900000,"final":""},
{"cryp":"STX", "sup":0.04300000, "res":3.25600000, "qualymes":6, "rmaxt": 0.93, "atual":1.49300000,"final":""},
{"cryp":"STPT", "sup":0.07560000, "res":0.07574000, "qualymes":63, "rmaxt": 0.83, "atual":0.07560000,"final":""},
{"cryp":"SUSD", "sup":1.00000000, "res":1.00200000, "qualymes":6, "rmaxt": 0.93, "atual":1.00100000,"final":""},
{"cryp":"SUN", "sup":0.01549000, "res":0.01553000, "qualymes":333, "rmaxt": 0.44, "atual":0.01551000,"final":""},
{"cryp":"SUPER", "sup":0.69170000, "res":0.69270000, "qualymes":36, "rmaxt": 0.08, "atual":0.69170000,"final":""},
{"cryp":"SUSHI", "sup":4.37100000, "res":10.68400000, "qualymes":633, "rmaxt": 0.39, "atual":4.37200000,"final":""},
{"cryp":"SXP", "sup":1.38500000, "res":1.40200000, "qualymes":633, "rmaxt": 0.55, "atual":1.38900000,"final":""},
{"cryp":"SYS", "sup":0.25790000, "res":1.33000000, "qualymes":6, "rmaxt": 0.83, "atual":0.75450000,"final":""},
{"cryp":"TCT", "sup":0.02061000, "res":0.02152000, "qualymes":63, "rmaxt": 0.65, "atual":0.02086000,"final":""},
{"cryp":"TFUEL", "sup":0.17210000, "res":0.17620000, "qualymes":633, "rmaxt": 0.76, "atual":0.17460000,"final":""},
{"cryp":"THETA", "sup":2.90700000, "res":10.47700000, "qualymes":633, "rmaxt": 0.71, "atual":2.91200000,"final":""},
{"cryp":"TKO", "sup":0.74800000, "res":0.75900000, "qualymes":333, "rmaxt": 0.09, "atual":0.74900000,"final":""},
{"cryp":"TLM", "sup":0.11410000, "res":0.11460000, "qualymes":36, "rmaxt": 0.09, "atual":0.11420000,"final":""},
{"cryp":"TOMO", "sup":1.15600000, "res":1.16800000, "qualymes":63, "rmaxt": 0.84, "atual":1.16200000,"final":""},
{"cryp":"TORN", "sup":22.80000000, "res":23.63000000, "qualymes":33, "rmaxt": 0.44, "atual":23.31000000,"final":""},
{"cryp":"TRB", "sup":21.18000000, "res":164.05000000, "qualymes":63, "rmaxt": 0.53, "atual":21.19000000,"final":""},
{"cryp":"TRIBE", "sup":0.57420000, "res":1.52090000, "qualymes":6, "rmaxt": 0.57, "atual":0.69840000,"final":""},
{"cryp":"TROY", "sup":0.00662000, "res":0.00672000, "qualymes":63, "rmaxt": 0.81, "atual":0.00662100,"final":""},
{"cryp":"TRU", "sup":0.19400000, "res":0.19420000, "qualymes":63, "rmaxt": 0.57, "atual":0.19410000,"final":""},
{"cryp":"TRX", "sup":0.05665000, "res":0.06154000, "qualymes":66, "rmaxt": 0.78, "atual":0.06106000,"final":""},
{"cryp":"TUSD", "sup":0.99970000, "res":0.99980000, "qualymes":636, "rmaxt": 0.8, "atual":0.99980000,"final":""},
{"cryp":"TVK", "sup":0.13070000, "res":0.13110000, "qualymes":33, "rmaxt": 0.14, "atual":0.13090000,"final":""},
{"cryp":"TWT", "sup":0.57300000, "res":0.58370000, "qualymes":63, "rmaxt": 0.64, "atual":0.57360000,"final":""},
{"cryp":"UMA", "sup":5.90900000, "res":23.39000000, "qualymes":333, "rmaxt": 0.33, "atual":5.91500000,"final":""},
{"cryp":"UNFI", "sup":5.40700000, "res":13.57400000, "qualymes":633, "rmaxt": 0.31, "atual":5.41200000,"final":""},
{"cryp":"USDC", "sup":0.99950000, "res":0.99960000, "qualymes":3333, "rmaxt": 0.08, "atual":0.99960000, "final":""},
{"cryp":"USDP", "sup":0.99950000, "res":0.99960000, "qualymes":33, "rmaxt": 0.17, "atual":0.99950000,"final":""},
{"cryp":"UNI", "sup":9.85000000, "res":11.20000000, "qualymes":633, "rmaxt": 0.5, "atual":11.19000000,"final":""},
{"cryp":"UST", "sup":1.00000000, "res":1.00020000, "qualymes":3, "rmaxt": 0.33, "atual":1.00010000,"final":""},
{"cryp":"VET", "sup":0.05533000, "res":0.05579000, "qualymes":63, "rmaxt": 0.77, "atual":0.05539000,"final":""},
{"cryp":"VGX", "sup":1.05000000, "res":5.81800000, "qualymes":3, "rmaxt": 0.25, "atual":1.98300000,"final":""},
{"cryp":"UTK", "sup":0.23780000, "res":0.23920000, "qualymes":633, "rmaxt": 0.47, "atual":0.23780000,"final":""},
{"cryp":"VIDT", "sup":0.50000000, "res":0.51280000, "qualymes":33, "rmaxt": 0.33, "atual":0.50040000,"final":""},
{"cryp":"VOXEL", "sup":0.20000000, "res":6.95000000, "qualymes":3, "rmaxt": 0.33, "atual":2.03290000,"final":""},
{"cryp":"VTHO", "sup":0.00350400, "res":0.00355000, "qualymes":633, "rmaxt": 0.5, "atual":0.00350900,"final":""},
{"cryp":"VITE", "sup":0.05154000, "res":0.05168000, "qualymes":663, "rmaxt": 0.63, "atual":0.05168000,"final":""},
{"cryp":"WAN", "sup":0.41780000, "res":0.41870000, "qualymes":633, "rmaxt": 0.68, "atual":0.41790000,"final":""},
{"cryp":"WAVES", "sup":8.97000000, "res":23.38000000, "qualymes":633, "rmaxt": 0.76, "atual":8.99000000,"final":""},
{"cryp":"WAXP", "sup":0.33050000, "res":0.33250000, "qualymes":6, "rmaxt": 0.57, "atual":0.33100000,"final":""},
{"cryp":"WIN", "sup":0.00030780, "res":0.00031130, "qualymes":63, "rmaxt": 0.68, "atual":0.00030790,"final":""},
{"cryp":"WING", "sup":9.08000000, "res":12.83000000, "qualymes":3333, "rmaxt": 0.06, "atual":9.11000000, "final":""},
{"cryp":"WNXM", "sup":35.83000000, "res":134.20000000, "qualymes":63, "rmaxt": 0.53, "atual":35.88000000,"final":""},
{"cryp":"WRX", "sup":0.97700000, "res":1.03000000, "qualymes":63, "rmaxt": 0.6, "atual":0.99100000,"final":""},
{"cryp":"WTC", "sup":0.53350000, "res":0.54040000, "qualymes":66, "rmaxt": 0.57, "atual":0.53370000,"final":""},
{"cryp":"XEC", "sup":0.00007937, "res":0.00007991, "qualymes":33, "rmaxt": 0.17, "atual":0.00007986,"final":""},
{"cryp":"XEM", "sup":0.10470000, "res":0.10540000, "qualymes":363, "rmaxt": 0.31, "atual":0.10490000,"final":""},
{"cryp":"XLM", "sup":0.20280000, "res":0.20330000, "qualymes":63, "rmaxt": 0.8, "atual":0.20320000,"final":""},
{"cryp":"XMR", "sup":25.08000000, "res":149.70000000, "qualymes":633, "rmaxt": 0.75, "atual":149.60000000,"final":""},
{"cryp":"XNO", "sup":2.09200000, "res":3.89000000, "qualymes":3, "rmaxt": 0.5, "atual":2.15700000,"final":""},
{"cryp":"XRP", "sup":0.62630000, "res":0.62940000, "qualymes":663, "rmaxt": 0.78, "atual":0.62670000,"final":""},
{"cryp":"XTZ", "sup":3.76000000, "res":3.80200000, "qualymes":63, "rmaxt": 0.87, "atual":3.79800000,"final":""},
{"cryp":"XVG", "sup":0.01030000, "res":0.01052000, "qualymes":33, "rmaxt": 0.11, "atual":0.01030000,"final":""},
{"cryp":"XVS", "sup":8.15000000, "res":14.05000000, "qualymes":633, "rmaxt": 0.47, "atual":8.15000000,"final":""},
{"cryp":"YFI", "sup":3000.00000000, "res":24848.79000000, "qualymes":636, "rmaxt": 0.53, "atual":24622.93000000,"final":""},
{"cryp":"YFII", "sup":970.00000000, "res":2403.00000000, "qualymes":363, "rmaxt": 0.06, "atual":2386.00000000,"final":""},
{"cryp":"YGG", "sup":3.54500000, "res":11.50000000, "qualymes":3, "rmaxt": 0.5, "atual":3.56100000,"final":""},
{"cryp":"ZEC", "sup":99.50000000, "res":103.30000000, "qualymes":63, "rmaxt": 0.75, "atual":102.20000000,"final":""},
{"cryp":"ZEN", "sup":5.06200000, "res":138.31000000, "qualymes":63, "rmaxt": 0.55, "atual":39.76000000,"final":""},
{"cryp":"ZIL", "sup":0.04644000, "res":0.04667000, "qualymes":633, "rmaxt": 0.76, "atual":0.04661000,"final":""},
{"cryp":"ZRX", "sup":0.59010000, "res":0.59410000, "qualymes":633, "rmaxt": 0.73, "atual":0.59220000,"final":""}

]




function lissuporte(){
    for(let cc=0;cc<=lissuport.length-1;cc++){
        //setInterval(() => {
            if(document.getElementById(`sup_${lissuport[cc].cryp}`)){
                document.getElementById(`sup_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].sup.toFixed(8)
            }
            if(document.getElementById(`res_${lissuport[cc].cryp}`)){
                    document.getElementById(`res_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].res.toFixed(8)
            }
            if(document.getElementById(`qualymes_${lissuport[cc].cryp}`)){
                    document.getElementById(`qualymes_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].qualymes
            }
            if(document.getElementById(`rmaxtu_${lissuport[cc].cryp}`)){
                    document.getElementById(`rmaxtu_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].rmaxt
            }

            
        //}, 20);
    }
    
}

setTimeout(() => {
    lissuporte()
}, 8000);




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



/*
const burli =' https://api3.binance.com';
const queryy = '/api/v3/aggTrades'; //

let urli=burli+queryy
fetch(urli,{
    
})
.then(res =>{
   console.log(res)
})
.catch(err=> console.error('Algo deu errado',err))
*/