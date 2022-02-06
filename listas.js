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
    {"cryp":"1INCH", "sup":1.65100000, "res":1.68500000, "qualymes":633, "rmaxt": 0.4, "atual":1.66400000},
{"cryp":"AAVE", "sup":25.93900000, "res":158.50000000, "qualymes":633, "rmaxt": 0.47, "atual":156.20000000},
{"cryp":"ACA", "sup":1.21000000, "res":2.80000000, "qualymes":3, "rmaxt": 0.5, "atual":1.53800000},
{"cryp":"ACH", "sup":0.03524000, "res":0.03919000, "qualymes":3, "rmaxt": 0.5, "atual":0.03692000},
{"cryp":"ACM", "sup":4.19400000, "res":16.58400000, "qualymes":3333, "rmaxt": 0.08, "atual":4.20900000},
{"cryp":"ADA", "sup":1.04700000, "res":1.06800000, "qualymes":63, "rmaxt": 0.89, "atual":1.05300000},
{"cryp":"ADX", "sup":0.45350000, "res":0.45540000, "qualymes":33, "rmaxt": 0.2, "atual":0.45500000},
{"cryp":"AGLD", "sup":1.17800000, "res":1.23700000, "qualymes":33, "rmaxt": 0.2, "atual":1.19200000},
{"cryp":"AION", "sup":0.08550000, "res":0.09480000, "qualymes":63, "rmaxt": 0.64, "atual":0.09020000},
{"cryp":"AKRO", "sup":0.01336000, "res":0.01351000, "qualymes":63, "rmaxt": 0.38, "atual":0.01351000},
{"cryp":"ALCX", "sup":135.20000000, "res":458.00000000, "qualymes":3, "rmaxt": 0.25, "atual":167.30000000},
{"cryp":"ALGO", "sup":0.90080000, "res":1.02340000, "qualymes":36, "rmaxt": 0.03, "atual":0.93590000},
{"cryp":"ALICE", "sup":6.71000000, "res":11.37000000, "qualymes":36, "rmaxt": 0.08, "atual":6.79000000},
{"cryp":"ALPACA", "sup":0.34930000, "res":0.35020000, "qualymes":33, "rmaxt": 0.14, "atual":0.34960000},
{"cryp":"ALPHA", "sup":0.39020000, "res":0.39420000, "qualymes":6333, "rmaxt": 0.29, "atual":0.39410000},
{"cryp":"AMP", "sup":0.02981000, "res":0.03040000, "qualymes":3, "rmaxt": 0.25, "atual":0.02985000},
{"cryp":"ANC", "sup":1.25300000, "res":1.98000000, "qualymes":3, "rmaxt": 0.5, "atual":1.33500000},
{"cryp":"ANKR", "sup":0.07766000, "res":0.07815000, "qualymes":66, "rmaxt": 0.66, "atual":0.07807000},
{"cryp":"ANT", "sup":7.22900000, "res":12.24000000, "qualymes":366, "rmaxt": 0.05, "atual":7.30400000},
{"cryp":"ANY", "sup":20.71000000, "res":21.45000000, "qualymes":6, "rmaxt": 0.67, "atual":20.80000000},
{"cryp":"API3", "sup":3.23000000, "res":3.79900000, "qualymes":3, "rmaxt": 0.5, "atual":3.39400000},
{"cryp":"AR", "sup":7.10100000, "res":36.54000000, "qualymes":6, "rmaxt": 0.7, "atual":35.70000000},
{"cryp":"ARDR", "sup":0.19780000, "res":0.20080000, "qualymes":663, "rmaxt": 0.55, "atual":0.19780000},
{"cryp":"ARPA", "sup":0.00326000, "res":0.27525000, "qualymes":6, "rmaxt": 0.89, "atual":0.06207000},
{"cryp":"ASR", "sup":3.10000000, "res":11.65300000, "qualymes":3333, "rmaxt": 0.07, "atual":3.10000000},
{"cryp":"ATA", "sup":0.40450000, "res":0.41490000, "qualymes":33, "rmaxt": 0.11, "atual":0.40520000},
{"cryp":"ATM", "sup":5.16000000, "res":13.90000000, "qualymes":633, "rmaxt": 0.4, "atual":5.16000000},
{"cryp":"ATOM", "sup":8.93000000, "res":29.27000000, "qualymes":66, "rmaxt": 0.86, "atual":29.08000000},
{"cryp":"AUCTION", "sup":13.98000000, "res":14.21000000, "qualymes":3, "rmaxt": 0.4, "atual":14.00000000},
{"cryp":"AUD", "sup":0.70500000, "res":0.70820000, "qualymes":3333, "rmaxt": 0.21, "atual":0.70510000},
{"cryp":"AUDIO", "sup":0.95400000, "res":0.97900000, "qualymes":66, "rmaxt": 0.35, "atual":0.95600000},
{"cryp":"AUTO", "sup":418.10000000, "res":1497.80000000, "qualymes":333, "rmaxt": 0.09, "atual":418.10000000},
{"cryp":"AVA", "sup":1.14400000, "res":1.16300000, "qualymes":633, "rmaxt": 0.38, "atual":1.14600000},
{"cryp":"AVAX", "sup":0.85000000, "res":147.00000000, "qualymes":6, "rmaxt": 0.83, "atual":70.40000000},
{"cryp":"AXS", "sup":47.95000000, "res":166.09000000, "qualymes":6, "rmaxt": 0.81, "atual":48.26000000},
{"cryp":"BADGER", "sup":8.28000000, "res":10.61000000, "qualymes":36, "rmaxt": 0.08, "atual":10.42000000},
{"cryp":"BAKE", "sup":0.66700000, "res":0.67900000, "qualymes":333, "rmaxt": 0.18, "atual":0.67200000},
{"cryp":"BAL", "sup":8.37500000, "res":13.04000000, "qualymes":633, "rmaxt": 0.53, "atual":12.84000000},
{"cryp":"BAND", "sup":3.53900000, "res":11.43700000, "qualymes":633, "rmaxt": 0.67, "atual":3.57200000},
{"cryp":"BAR", "sup":6.15000000, "res":17.26000000, "qualymes":333, "rmaxt": 0.09, "atual":6.15000000},
{"cryp":"BAT", "sup":0.08000000, "res":1.92900000, "qualymes":6, "rmaxt": 0.92, "atual":0.84320000},
{"cryp":"BCH", "sup":282.70000000, "res":1650.00000000, "qualymes":633, "rmaxt": 0.68, "atual":283.70000000},
{"cryp":"BEAM", "sup":0.33690000, "res":0.35000000, "qualymes":63, "rmaxt": 0.67, "atual":0.33770000},
{"cryp":"BEL", "sup":0.91100000, "res":0.91900000, "qualymes":3333, "rmaxt": 0.06, "atual":0.91700000},
{"cryp":"BETA", "sup":0.42645000, "res":0.44011000, "qualymes":33, "rmaxt": 0.2, "atual":0.43108000},
{"cryp":"BICO", "sup":1.98000000, "res":2.06900000, "qualymes":3, "rmaxt": 0.33, "atual":2.00600000},
{"cryp":"BLZ", "sup":0.13150000, "res":0.14720000, "qualymes":63, "rmaxt": 0.42, "atual":0.14300000},
{"cryp":"BNB", "sup":4.12000000, "res":375.30000000, "qualymes":66, "rmaxt": 0.83, "atual":374.20000000},
{"cryp":"BNT", "sup":2.46600000, "res":2.50000000, "qualymes":63, "rmaxt": 0.56, "atual":2.46900000},
{"cryp":"BNX", "sup":15.80000000, "res":230.00000000, "qualymes":3, "rmaxt": 0.25, "atual":23.10000000},
{"cryp":"BOND", "sup":9.91000000, "res":10.11000000, "qualymes":33, "rmaxt": 0.5, "atual":9.91000000},
{"cryp":"BTC", "sup":37525.25000000, "res":37971.45000000, "qualymes":6, "rmaxt": 0.95, "atual":37560.06000000},
{"cryp":"BTCST", "sup":8.00000000, "res":1000.00000000, "qualymes":3363, "rmaxt": 0.07, "atual":15.47000000},
{"cryp":"BTG", "sup":30.45000000, "res":169.00000000, "qualymes":333, "rmaxt": 0.18, "atual":30.45000000},
{"cryp":"BTS", "sup":0.02286000, "res":0.02309000, "qualymes":633, "rmaxt": 0.6, "atual":0.02294000},
{"cryp":"BTT", "sup":0.00271000, "res":0.00278000, "qualymes":663, "rmaxt": 0.76, "atual":0.00277700},
{"cryp":"BTTC", "sup":0.00000215, "res":0.00000222, "qualymes":3, "rmaxt": 0.5, "atual":0.00000216},
{"cryp":"BURGER", "sup":1.71200000, "res":1.76600000, "qualymes":333, "rmaxt": 0.18, "atual":1.71600000},
{"cryp":"BUSD", "sup":0.99940000, "res":0.99950000, "qualymes":3333, "rmaxt": 0.03, "atual":0.99940000},
{"cryp":"C98", "sup":1.67100000, "res":1.72500000, "qualymes":63, "rmaxt": 0.25, "atual":1.68300000},
{"cryp":"CAKE", "sup":7.24000000, "res":12.18000000, "qualymes":333, "rmaxt": 0.23, "atual":7.28000000},
{"cryp":"CELO", "sup":3.01600000, "res":10.95700000, "qualymes":63, "rmaxt": 0.57, "atual":3.02300000},
{"cryp":"CELR", "sup":0.04975000, "res":0.05136000, "qualymes":63, "rmaxt": 0.86, "atual":0.05039000},
{"cryp":"CFX", "sup":0.11350000, "res":0.11390000, "qualymes":333, "rmaxt": 0.08, "atual":0.11370000},
{"cryp":"CHESS", "sup":1.08200000, "res":1.13200000, "qualymes":33, "rmaxt": 0.2, "atual":1.08900000},
{"cryp":"CHR", "sup":0.01590000, "res":1.50000000, "qualymes":6, "rmaxt": 0.86, "atual":0.52710000},
{"cryp":"CHZ", "sup":0.18860000, "res":0.19300000, "qualymes":633, "rmaxt": 0.63, "atual":0.18980000},
{"cryp":"CITY", "sup":9.70000000, "res":10.02000000, "qualymes":3, "rmaxt": 0.25, "atual":9.70000000},
{"cryp":"CKB", "sup":0.01435000, "res":0.01522000, "qualymes":66, "rmaxt": 0.21, "atual":0.01480000},
{"cryp":"CLV", "sup":0.33700000, "res":0.34900000, "qualymes":33, "rmaxt": 0.13, "atual":0.33800000},
{"cryp":"COCOS", "sup":0.00017100, "res":6.50000000, "qualymes":6, "rmaxt": 0.9, "atual":1.24270000},
{"cryp":"COMP", "sup":80.62000000, "res":131.10000000, "qualymes":633, "rmaxt": 0.57, "atual":129.20000000},
{"cryp":"COTI", "sup":0.29080000, "res":0.30080000, "qualymes":63, "rmaxt": 0.84, "atual":0.29100000},
{"cryp":"COS", "sup":0.01622000, "res":0.01625000, "qualymes":6, "rmaxt": 0.94, "atual":0.01624000},
{"cryp":"CRV", "sup":3.13300000, "res":23.25500000, "qualymes":36, "rmaxt": 0.05, "atual":3.16000000},
{"cryp":"CTK", "sup":1.32600000, "res":1.34500000, "qualymes":336, "rmaxt": 0.06, "atual":1.33400000},
{"cryp":"CTSI", "sup":0.45630000, "res":0.45800000, "qualymes":63, "rmaxt": 0.61, "atual":0.45740000},
{"cryp":"CTXC", "sup":0.29850000, "res":0.30810000, "qualymes":6, "rmaxt": 0.93, "atual":0.29930000},
{"cryp":"CVC", "sup":0.28790000, "res":0.30320000, "qualymes":63, "rmaxt": 0.84, "atual":0.28960000},
{"cryp":"CVP", "sup":1.08000000, "res":1.10200000, "qualymes":33, "rmaxt": 0.2, "atual":1.08000000},
{"cryp":"CVX", "sup":26.70000000, "res":27.12000000, "qualymes":3, "rmaxt": 0.67, "atual":26.84000000},
{"cryp":"DAR", "sup":0.82254000, "res":0.94329000, "qualymes":3, "rmaxt": 0.25, "atual":0.83030000},
{"cryp":"DASH", "sup":97.00000000, "res":247.80000000, "qualymes":633, "rmaxt": 0.75, "atual":97.80000000},
{"cryp":"DATA", "sup":0.07607000, "res":0.07640000, "qualymes":633, "rmaxt": 0.57, "atual":0.07607000},
{"cryp":"DCR", "sup":63.90000000, "res":114.20000000, "qualymes":633, "rmaxt": 0.5, "atual":63.90000000},
{"cryp":"DEGO", "sup":3.77000000, "res":14.44000000, "qualymes":33, "rmaxt": 0.08, "atual":3.79000000},
{"cryp":"DENT", "sup":0.00253400, "res":0.00260700, "qualymes":663, "rmaxt": 0.68, "atual":0.00255400},
{"cryp":"DEXE", "sup":6.98000000, "res":11.91000000, "qualymes":33, "rmaxt": 0.13, "atual":7.03000000},
{"cryp":"DF", "sup":0.10290000, "res":0.10510000, "qualymes":33, "rmaxt": 0.17, "atual":0.10290000},
{"cryp":"DGB", "sup":0.02158000, "res":0.02209000, "qualymes":633, "rmaxt": 0.55, "atual":0.02163000},
{"cryp":"DIA", "sup":0.91800000, "res":0.93900000, "qualymes":333, "rmaxt": 0.5, "atual":0.92800000},
{"cryp":"DNT", "sup":0.08040000, "res":0.08100000, "qualymes":633, "rmaxt": 0.38, "atual":0.08050000},
{"cryp":"DOCK", "sup":0.04304000, "res":0.04425000, "qualymes":633, "rmaxt": 0.68, "atual":0.04319000},
{"cryp":"DODO", "sup":0.54200000, "res":0.56300000, "qualymes":3333, "rmaxt": 0.08, "atual":0.55000000},
{"cryp":"DOGE", "sup":0.13620000, "res":0.14110000, "qualymes":633, "rmaxt": 0.72, "atual":0.13840000},
{"cryp":"DOT", "sup":2.00000000, "res":55.09000000, "qualymes":6, "rmaxt": 0.84, "atual":19.03000000},
{"cryp":"DREP", "sup":0.70820000, "res":0.72230000, "qualymes":66, "rmaxt": 0.62, "atual":0.71000000},
{"cryp":"DUSK", "sup":0.01060000, "res":1.17430000, "qualymes":6, "rmaxt": 0.94, "atual":0.49100000},
{"cryp":"DYDX", "sup":6.08600000, "res":14.94000000, "qualymes":33, "rmaxt": 0.17, "atual":6.11000000},
{"cryp":"EGLD", "sup":65.00000000, "res":142.67000000, "qualymes":6, "rmaxt": 0.83, "atual":140.51000000},
{"cryp":"ELF", "sup":0.35070000, "res":0.35870000, "qualymes":33, "rmaxt": 0.17, "atual":0.35170000},
{"cryp":"ENJ", "sup":1.65300000, "res":1.73100000, "qualymes":6, "rmaxt": 0.91, "atual":1.68400000},
{"cryp":"ENS", "sup":18.27000000, "res":120.00000000, "qualymes":3, "rmaxt": 0.25, "atual":18.37000000},
{"cryp":"EOS", "sup":2.34000000, "res":14.90000000, "qualymes":3633, "rmaxt": 0.04, "atual":2.36000000},
{"cryp":"EPS", "sup":0.17060000, "res":0.17550000, "qualymes":333, "rmaxt": 0.09, "atual":0.17150000},
{"cryp":"ERN", "sup":5.04700000, "res":11.90000000, "qualymes":33, "rmaxt": 0.33, "atual":5.05000000},
{"cryp":"ETH", "sup":81.79000000, "res":4868.00000000, "qualymes":6, "rmaxt": 0.95, "atual":2786.86000000},
{"cryp":"ETC", "sup":3.07260000, "res":179.83000000, "qualymes":633, "rmaxt": 0.8, "atual":27.61000000},
{"cryp":"EUR", "sup":1.14200000, "res":1.14700000, "qualymes":3636, "rmaxt": 0.04, "atual":1.14200000},
{"cryp":"FARM", "sup":99.60000000, "res":106.60000000, "qualymes":33, "rmaxt": 0.14, "atual":103.40000000},
{"cryp":"FET", "sup":0.31340000, "res":0.32350000, "qualymes":63, "rmaxt": 0.86, "atual":0.31400000},
{"cryp":"FIDA", "sup":2.14600000, "res":107.36500000, "qualymes":3, "rmaxt": 0.5, "atual":2.15200000},
{"cryp":"FIL", "sup":20.57000000, "res":120.17000000, "qualymes":3333, "rmaxt": 0.06, "atual":20.64000000},
{"cryp":"FIO", "sup":0.09770000, "res":0.10000000, "qualymes":63, "rmaxt": 0.44, "atual":0.09770000},
{"cryp":"FIRO", "sup":3.65100000, "res":10.26800000, "qualymes":333, "rmaxt": 0.36, "atual":3.72500000},
{"cryp":"FIS", "sup":0.72670000, "res":0.75000000, "qualymes":363, "rmaxt": 0.08, "atual":0.72890000},
{"cryp":"FLM", "sup":0.23790000, "res":0.24000000, "qualymes":3633, "rmaxt": 0.06, "atual":0.23980000},
{"cryp":"FLOW", "sup":5.88000000, "res":10.56000000, "qualymes":333, "rmaxt": 0.13, "atual":5.91000000},
{"cryp":"FLUX", "sup":1.22000000, "res":5.00000000, "qualymes":3, "rmaxt": 0.33, "atual":1.48400000},
{"cryp":"FOR", "sup":0.04462000, "res":0.04576000, "qualymes":33, "rmaxt": 0.29, "atual":0.04476000},
{"cryp":"FORTH", "sup":7.69000000, "res":10.25000000, "qualymes":3336, "rmaxt": 0.09, "atual":8.30000000},
{"cryp":"FRONT", "sup":0.48300000, "res":0.50990000, "qualymes":33, "rmaxt": 0.2, "atual":0.49200000},
{"cryp":"FTM", "sup":1.92200000, "res":2.02040000, "qualymes":63, "rmaxt": 0.88, "atual":1.95870000},
{"cryp":"FTT", "sup":42.88000000, "res":43.02000000, "qualymes":63, "rmaxt": 0.81, "atual":42.94000000},
{"cryp":"FUN", "sup":0.01002000, "res":0.01021000, "qualymes":633, "rmaxt": 0.68, "atual":0.01006000},
{"cryp":"FXS", "sup":17.94500000, "res":19.65900000, "qualymes":6, "rmaxt": 0.67, "atual":19.03900000},
{"cryp":"GALA", "sup":0.18438000, "res":0.18914000, "qualymes":6, "rmaxt": 0.5, "atual":0.18522000},
{"cryp":"GBP", "sup":1.35000000, "res":1.35200000, "qualymes":3633, "rmaxt": 0.05, "atual":1.35000000},
{"cryp":"GHST", "sup":2.00900000, "res":2.05000000, "qualymes":6, "rmaxt": 0.57, "atual":2.01100000},
{"cryp":"GLMR", "sup":4.74010000, "res":4.95000000, "qualymes":3, "rmaxt": 0.5, "atual":4.77310000},
{"cryp":"GRT", "sup":0.40160000, "res":0.40980000, "qualymes":633, "rmaxt": 0.2, "atual":0.40380000},
{"cryp":"GTC", "sup":7.24000000, "res":29.04300000, "qualymes":6, "rmaxt": 0.67, "atual":7.31100000},
{"cryp":"GTO", "sup":0.03408000, "res":0.03516000, "qualymes":66, "rmaxt": 0.69, "atual":0.03420000},
{"cryp":"GXS", "sup":1.13380000, "res":2.72390000, "qualymes":6, "rmaxt": 0.91, "atual":1.45600000},
{"cryp":"GNO", "sup":302.10000000, "res":302.10000000, "qualymes":3, "rmaxt": 0.57, "atual":302.10000000},
{"cryp":"HARD", "sup":0.54780000, "res":0.56180000, "qualymes":3333, "rmaxt": 0.06, "atual":0.55110000},
{"cryp":"HBAR", "sup":0.23900000, "res":0.24660000, "qualymes":63, "rmaxt": 0.83, "atual":0.24050000},
{"cryp":"HIGH", "sup":4.95000000, "res":12.86000000, "qualymes":3, "rmaxt": 0.33, "atual":5.12000000},
{"cryp":"HIVE", "sup":1.00840000, "res":1.02510000, "qualymes":6, "rmaxt": 0.87, "atual":1.01070000},
{"cryp":"HNT", "sup":19.70000000, "res":45.16000000, "qualymes":6, "rmaxt": 0.83, "atual":25.67000000},
{"cryp":"HOT", "sup":0.00421300, "res":0.00460000, "qualymes":63, "rmaxt": 0.73, "atual":0.00438900},
{"cryp":"ICP", "sup":20.52000000, "res":21.30000000, "qualymes":333, "rmaxt": 0.1, "atual":20.56000000},
{"cryp":"ICX", "sup":0.75900000, "res":0.77700000, "qualymes":63, "rmaxt": 0.76, "atual":0.76200000},
{"cryp":"IDEX", "sup":0.19213000, "res":0.20061000, "qualymes":33, "rmaxt": 0.17, "atual":0.19271000},
{"cryp":"ILV", "sup":414.50000000, "res":1930.00000000, "qualymes":6, "rmaxt": 0.67, "atual":604.10000000},
{"cryp":"IMX", "sup":2.00000000, "res":4.67900000, "qualymes":3, "rmaxt": 0.5, "atual":2.90500000},
{"cryp":"INJ", "sup":4.19100000, "res":10.33700000, "qualymes":633, "rmaxt": 0.47, "atual":4.19600000},
{"cryp":"IOST", "sup":0.02618000, "res":0.02674000, "qualymes":663, "rmaxt": 0.72, "atual":0.02620000},
{"cryp":"IOTA", "sup":0.91000000, "res":0.94440000, "qualymes":663, "rmaxt": 0.78, "atual":0.91260000},
{"cryp":"IOTX", "sup":0.07008000, "res":0.08092000, "qualymes":6, "rmaxt": 0.89, "atual":0.07508000},
{"cryp":"IRIS", "sup":0.07099000, "res":0.07152000, "qualymes":66, "rmaxt": 0.47, "atual":0.07102000},
{"cryp":"JASMY", "sup":0.03900000, "res":0.04050000, "qualymes":3, "rmaxt": 0.25, "atual":0.03910000},
{"cryp":"JOE", "sup":1.32200000, "res":1.40800000, "qualymes":3, "rmaxt": 0.33, "atual":1.32800000},
{"cryp":"JST", "sup":0.05862000, "res":0.06091000, "qualymes":633, "rmaxt": 0.47, "atual":0.05876000},
{"cryp":"KAVA", "sup":3.46500000, "res":3.57600000, "qualymes":63, "rmaxt": 0.79, "atual":3.55000000},
{"cryp":"JUV", "sup":6.15000000, "res":10.98000000, "qualymes":3333, "rmaxt": 0.07, "atual":6.15000000},
{"cryp":"KEEP", "sup":0.43070000, "res":0.46500000, "qualymes":63, "rmaxt": 0.56, "atual":0.44680000},
{"cryp":"KEY", "sup":0.00705000, "res":0.00736000, "qualymes":66, "rmaxt": 0.68, "atual":0.00716500},
{"cryp":"KLAY", "sup":1.12500000, "res":1.15000000, "qualymes":63, "rmaxt": 0.56, "atual":1.12700000},
{"cryp":"KMD", "sup":0.47060000, "res":0.48760000, "qualymes":63, "rmaxt": 0.47, "atual":0.47170000},
{"cryp":"KNC", "sup":1.96500000, "res":2.01100000, "qualymes":66, "rmaxt": 0.52, "atual":1.97300000},
{"cryp":"KP3R", "sup":760.00000000, "res":1935.00000000, "qualymes":3, "rmaxt": 0.25, "atual":950.00000000},
{"cryp":"KSM", "sup":23.15800000, "res":182.90000000, "qualymes":63, "rmaxt": 0.5, "atual":175.80000000},
{"cryp":"LAZIO", "sup":3.20000000, "res":100.00000000, "qualymes":33, "rmaxt": 0.2, "atual":3.20180000},
{"cryp":"LINA", "sup":0.02422000, "res":0.02441000, "qualymes":33, "rmaxt": 0.08, "atual":0.02426000},
{"cryp":"LINK", "sup":16.06000000, "res":16.21000000, "qualymes":63, "rmaxt": 0.76, "atual":16.11000000},
{"cryp":"LOKA", "sup":0.16000000, "res":3.84000000, "qualymes":3, "rmaxt": 0.5, "atual":1.80310000},
{"cryp":"LIT", "sup":1.47900000, "res":1.48900000, "qualymes":333, "rmaxt": 0.08, "atual":1.48200000},
{"cryp":"LPT", "sup":25.68000000, "res":101.80000000, "qualymes":6, "rmaxt": 0.7, "atual":25.72000000},
{"cryp":"LRC", "sup":0.83470000, "res":0.88420000, "qualymes":6, "rmaxt": 0.86, "atual":0.85400000},
{"cryp":"LSK", "sup":1.67100000, "res":1.69500000, "qualymes":633, "rmaxt": 0.64, "atual":1.67100000},
{"cryp":"LTC", "sup":96.30000000, "res":113.20000000, "qualymes":63, "rmaxt": 0.82, "atual":110.70000000},
{"cryp":"LTO", "sup":0.20480000, "res":0.21070000, "qualymes":66, "rmaxt": 0.6, "atual":0.20480000},
{"cryp":"LUNA", "sup":0.27330000, "res":103.60000000, "qualymes":6, "rmaxt": 0.89, "atual":49.32000000},
{"cryp":"MANA", "sup":2.57640000, "res":2.63450000, "qualymes":6, "rmaxt": 0.84, "atual":2.58780000},
{"cryp":"MATIC", "sup":1.54900000, "res":1.56200000, "qualymes":6, "rmaxt": 0.94, "atual":1.55200000},
{"cryp":"MBL", "sup":0.00603100, "res":0.00618700, "qualymes":63, "rmaxt": 0.6, "atual":0.00603100},
{"cryp":"MBOX", "sup":2.67200000, "res":10.26100000, "qualymes":6, "rmaxt": 0.71, "atual":2.68400000},
{"cryp":"MASK", "sup":5.84000000, "res":10.49200000, "qualymes":6, "rmaxt": 0.7, "atual":5.85500000},
{"cryp":"MC", "sup":2.22000000, "res":12.70000000, "qualymes":3, "rmaxt": 0.33, "atual":2.23000000},
{"cryp":"MDT", "sup":0.05865000, "res":0.06061000, "qualymes":6, "rmaxt": 0.9, "atual":0.05866000},
{"cryp":"MDX", "sup":0.23200000, "res":0.23400000, "qualymes":333, "rmaxt": 0.2, "atual":0.23200000},
{"cryp":"MFT", "sup":0.00638000, "res":0.00653500, "qualymes":663, "rmaxt": 0.65, "atual":0.00638000},
{"cryp":"MINA", "sup":2.05000000, "res":6.68400000, "qualymes":3, "rmaxt": 0.57, "atual":2.45200000},
{"cryp":"MIR", "sup":1.20600000, "res":1.22600000, "qualymes":333, "rmaxt": 0.09, "atual":1.21800000},
{"cryp":"MITH", "sup":0.03815000, "res":0.03987000, "qualymes":63, "rmaxt": 0.71, "atual":0.03818000},
{"cryp":"MKR", "sup":429.79000000, "res":2279.00000000, "qualymes":633, "rmaxt": 0.55, "atual":2225.00000000},
{"cryp":"MLN", "sup":56.60000000, "res":100.10000000, "qualymes":33, "rmaxt": 0.38, "atual":56.70000000},
{"cryp":"MOVR", "sup":76.50000000, "res":150.10000000, "qualymes":3, "rmaxt": 0.25, "atual":77.10000000},
{"cryp":"MTL", "sup":1.65400000, "res":1.68300000, "qualymes":663, "rmaxt": 0.65, "atual":1.66200000},
{"cryp":"NANO", "sup":2.14800000, "res":17.70000000, "qualymes":633, "rmaxt": 0.76, "atual":2.22400000},
{"cryp":"NBS", "sup":0.01220000, "res":0.01331000, "qualymes":66, "rmaxt": 0.44, "atual":0.01224000},
{"cryp":"NEAR", "sup":9.50900000, "res":11.38100000, "qualymes":6, "rmaxt": 0.94, "atual":11.07700000},
{"cryp":"NEO", "sup":3.89000000, "res":141.00000000, "qualymes":3633, "rmaxt": 0.06, "atual":21.54000000},
{"cryp":"NKN", "sup":0.19900000, "res":0.20920000, "qualymes":66, "rmaxt": 0.66, "atual":0.20380000},
{"cryp":"NMR", "sup":22.58000000, "res":25.00000000, "qualymes":333, "rmaxt": 0.53, "atual":23.09000000},
{"cryp":"NU", "sup":0.48950000, "res":0.50200000, "qualymes":63, "rmaxt": 0.56, "atual":0.49080000},
{"cryp":"NULS", "sup":0.37690000, "res":0.42650000, "qualymes":36, "rmaxt": 0.02, "atual":0.37970000},
{"cryp":"OCEAN", "sup":0.56020000, "res":0.57480000, "qualymes":66, "rmaxt": 0.47, "atual":0.56130000},
{"cryp":"OG", "sup":3.40100000, "res":11.20000000, "qualymes":3333, "rmaxt": 0.07, "atual":3.41200000},
{"cryp":"OGN", "sup":0.32240000, "res":0.33970000, "qualymes":63, "rmaxt": 0.62, "atual":0.32750000},
{"cryp":"OM", "sup":0.09540000, "res":0.09840000, "qualymes":333, "rmaxt": 0.08, "atual":0.09580000},
{"cryp":"OMG", "sup":4.60600000, "res":20.12400000, "qualymes":6, "rmaxt": 0.91, "atual":4.66300000},
{"cryp":"ONE", "sup":0.17800000, "res":0.18019000, "qualymes":63, "rmaxt": 0.88, "atual":0.17830000},
{"cryp":"ONG", "sup":0.65460000, "res":0.67620000, "qualymes":3633, "rmaxt": 0.03, "atual":0.65610000},
{"cryp":"ONT", "sup":0.54940000, "res":0.55910000, "qualymes":3633, "rmaxt": 0.02, "atual":0.55180000},
{"cryp":"OOKI", "sup":0.00932000, "res":1.80000000, "qualymes":3, "rmaxt": 0.33, "atual":0.01820000},
{"cryp":"ORN", "sup":3.83600000, "res":13.18700000, "qualymes":633, "rmaxt": 0.39, "atual":3.84200000},
{"cryp":"OXT", "sup":0.23680000, "res":0.24040000, "qualymes":63, "rmaxt": 0.44, "atual":0.23680000},
{"cryp":"PAXG", "sup":1800.00000000, "res":1820.00000000, "qualymes":336, "rmaxt": 0.32, "atual":1801.00000000},
{"cryp":"PEOPLE", "sup":0.03050000, "res":0.20000000, "qualymes":3, "rmaxt": 0.33, "atual":0.07610000},
{"cryp":"PERL", "sup":0.04974000, "res":0.05105000, "qualymes":63, "rmaxt": 0.68, "atual":0.04974000},
{"cryp":"PERP", "sup":6.00000000, "res":23.13000000, "qualymes":63, "rmaxt": 0.5, "atual":6.00000000},
{"cryp":"PHA", "sup":0.25010000, "res":0.25600000, "qualymes":33, "rmaxt": 0.44, "atual":0.25090000},
{"cryp":"PLA", "sup":0.92600000, "res":0.92800000, "qualymes":3, "rmaxt": 0.25, "atual":0.92700000},
{"cryp":"POLS", "sup":1.60700000, "res":1.66100000, "qualymes":6, "rmaxt": 0.8, "atual":1.62200000},
{"cryp":"PNT", "sup":0.59000000, "res":0.59350000, "qualymes":633, "rmaxt": 0.38, "atual":0.59330000},
{"cryp":"POLY", "sup":0.42220000, "res":0.43400000, "qualymes":33, "rmaxt": 0.33, "atual":0.42370000},
{"cryp":"POND", "sup":0.04342000, "res":0.04486000, "qualymes":333, "rmaxt": 0.17, "atual":0.04368000},
{"cryp":"PORTO", "sup":2.66830000, "res":3.30000000, "qualymes":3, "rmaxt": 0.25, "atual":3.07530000},
{"cryp":"POWR", "sup":0.36400000, "res":0.96170000, "qualymes":3, "rmaxt": 0.25, "atual":0.55880000},
{"cryp":"PSG", "sup":7.68800000, "res":14.83000000, "qualymes":63, "rmaxt": 0.6, "atual":14.57000000},
{"cryp":"PUNDIX", "sup":0.79200000, "res":0.80800000, "qualymes":333, "rmaxt": 0.09, "atual":0.79200000},
{"cryp":"PYR", "sup":6.68000000, "res":14.09000000, "qualymes":3, "rmaxt": 0.25, "atual":13.05000000},
{"cryp":"QI", "sup":0.06920000, "res":0.07680000, "qualymes":3, "rmaxt": 0.25, "atual":0.06980000},
{"cryp":"QNT", "sup":87.60000000, "res":141.90000000, "qualymes":33, "rmaxt": 0.38, "atual":134.90000000},
{"cryp":"QTUM", "sup":6.49400000, "res":10.18100000, "qualymes":63, "rmaxt": 0.81, "atual":6.59500000},
{"cryp":"QUICK", "sup":175.30000000, "res":196.20000000, "qualymes":33, "rmaxt": 0.14, "atual":182.10000000},
{"cryp":"RAD", "sup":4.97500000, "res":11.42000000, "qualymes":33, "rmaxt": 0.2, "atual":5.16000000},
{"cryp":"RAMP", "sup":0.10770000, "res":0.10880000, "qualymes":333, "rmaxt": 0.08, "atual":0.10810000},
{"cryp":"RARE", "sup":0.59000000, "res":0.60900000, "qualymes":33, "rmaxt": 0.2, "atual":0.59000000},
{"cryp":"RAY", "sup":3.61300000, "res":13.44300000, "qualymes":33, "rmaxt": 0.14, "atual":3.62100000},
{"cryp":"REEF", "sup":0.00993000, "res":0.01018000, "qualymes":333, "rmaxt": 0.07, "atual":0.00996000},
{"cryp":"REN", "sup":0.32750000, "res":0.33170000, "qualymes":333, "rmaxt": 0.6, "atual":0.33170000},
{"cryp":"REP", "sup":9.45000000, "res":14.60000000, "qualymes":6336, "rmaxt": 0.52, "atual":14.49000000},
{"cryp":"REQ", "sup":0.27980000, "res":0.29280000, "qualymes":6, "rmaxt": 0.57, "atual":0.28170000},
{"cryp":"RGT", "sup":20.55000000, "res":21.34000000, "qualymes":3, "rmaxt": 0.25, "atual":20.74000000},
{"cryp":"RLC", "sup":1.93600000, "res":1.98600000, "qualymes":63, "rmaxt": 0.68, "atual":1.94700000},
{"cryp":"RNDR", "sup":1.80100000, "res":7.94500000, "qualymes":3, "rmaxt": 0.25, "atual":3.26400000},
{"cryp":"RIF", "sup":0.14150000, "res":0.14180000, "qualymes":333, "rmaxt": 0.07, "atual":0.14180000},
{"cryp":"ROSE", "sup":0.32131000, "res":0.33962000, "qualymes":6, "rmaxt": 0.94, "atual":0.32362000},
{"cryp":"RSR", "sup":0.01764000, "res":0.01817000, "qualymes":633, "rmaxt": 0.47, "atual":0.01772000},
{"cryp":"RUNE", "sup":3.85300000, "res":13.52500000, "qualymes":63, "rmaxt": 0.5, "atual":3.86600000},
{"cryp":"RVN", "sup":0.06688000, "res":0.06752000, "qualymes":6333, "rmaxt": 0.6, "atual":0.06705000},
{"cryp":"SAND", "sup":3.62840000, "res":3.71700000, "qualymes":6, "rmaxt": 0.84, "atual":3.63950000},
{"cryp":"SANTOS", "sup":2.60200000, "res":2.65500000, "qualymes":3, "rmaxt": 0.33, "atual":2.61200000},
{"cryp":"SC", "sup":0.01040000, "res":0.01071000, "qualymes":63, "rmaxt": 0.5, "atual":0.01043000},
{"cryp":"SCRT", "sup":5.03700000, "res":5.23600000, "qualymes":3, "rmaxt": 0.5, "atual":5.03700000},
{"cryp":"SFP", "sup":0.86040000, "res":0.88530000, "qualymes":363, "rmaxt": 0.08, "atual":0.87820000},
{"cryp":"SHIB", "sup":0.00002072, "res":0.00002123, "qualymes":63, "rmaxt": 0.6, "atual":0.00002080},
{"cryp":"SKL", "sup":0.11490000, "res":0.11860000, "qualymes":633, "rmaxt": 0.27, "atual":0.11580000},
{"cryp":"SLP", "sup":0.00990000, "res":0.01050000, "qualymes":333, "rmaxt": 0.18, "atual":0.01010000},
{"cryp":"SNX", "sup":5.02000000, "res":11.80000000, "qualymes":6333, "rmaxt": 0.4, "atual":5.07100000},
{"cryp":"SOL", "sup":1.03010000, "res":259.90000000, "qualymes":6, "rmaxt": 0.84, "atual":102.59000000},
{"cryp":"SPELL", "sup":0.00483000, "res":0.02810000, "qualymes":3, "rmaxt": 0.33, "atual":0.00606000},
{"cryp":"SRM", "sup":2.26600000, "res":13.73200000, "qualymes":63, "rmaxt": 0.74, "atual":2.27400000},
{"cryp":"STMX", "sup":0.01524000, "res":0.01543000, "qualymes":633, "rmaxt": 0.52, "atual":0.01528000},
{"cryp":"STORJ", "sup":1.16680000, "res":1.20270000, "qualymes":66, "rmaxt": 0.45, "atual":1.17170000},
{"cryp":"STPT", "sup":0.07363000, "res":0.10400000, "qualymes":63, "rmaxt": 0.83, "atual":0.08681000},
{"cryp":"STRAX", "sup":1.03500000, "res":1.08000000, "qualymes":633, "rmaxt": 0.44, "atual":1.04600000},
{"cryp":"STX", "sup":1.17800000, "res":2.90000000, "qualymes":6, "rmaxt": 0.93, "atual":1.43300000},
{"cryp":"SUN", "sup":0.01601000, "res":0.01757000, "qualymes":333, "rmaxt": 0.44, "atual":0.01618000},
{"cryp":"SUPER", "sup":0.67130000, "res":0.69320000, "qualymes":36, "rmaxt": 0.08, "atual":0.67330000},
{"cryp":"SUSD", "sup":0.97700000, "res":4.72100000, "qualymes":6, "rmaxt": 0.93, "atual":0.99800000},
{"cryp":"SUSHI", "sup":4.07400000, "res":10.68400000, "qualymes":633, "rmaxt": 0.39, "atual":4.11100000},
{"cryp":"SXP", "sup":1.40900000, "res":1.44900000, "qualymes":633, "rmaxt": 0.55, "atual":1.42100000},
{"cryp":"SYS", "sup":0.25790000, "res":1.33000000, "qualymes":6, "rmaxt": 0.83, "atual":0.71870000},
{"cryp":"TCT", "sup":0.02033000, "res":0.02109000, "qualymes":63, "rmaxt": 0.65, "atual":0.02043000},
{"cryp":"TFUEL", "sup":0.16310000, "res":0.16810000, "qualymes":633, "rmaxt": 0.76, "atual":0.16410000},
{"cryp":"THETA", "sup":2.81900000, "res":10.47700000, "qualymes":633, "rmaxt": 0.71, "atual":2.83900000},
{"cryp":"TKO", "sup":0.70500000, "res":0.71400000, "qualymes":333, "rmaxt": 0.09, "atual":0.70800000},
{"cryp":"TLM", "sup":0.10710000, "res":0.11070000, "qualymes":36, "rmaxt": 0.09, "atual":0.10860000},
{"cryp":"TOMO", "sup":1.20600000, "res":1.22700000, "qualymes":63, "rmaxt": 0.84, "atual":1.21500000},
{"cryp":"TORN", "sup":22.04000000, "res":22.80000000, "qualymes":33, "rmaxt": 0.44, "atual":22.10000000},
{"cryp":"TRB", "sup":19.52000000, "res":164.05000000, "qualymes":63, "rmaxt": 0.53, "atual":19.74000000},
{"cryp":"TRIBE", "sup":0.57420000, "res":1.52090000, "qualymes":6, "rmaxt": 0.57, "atual":0.68150000},
{"cryp":"TROY", "sup":0.00639100, "res":0.00644200, "qualymes":63, "rmaxt": 0.81, "atual":0.00643300},
{"cryp":"TRU", "sup":0.19040000, "res":0.19100000, "qualymes":63, "rmaxt": 0.57, "atual":0.19100000},
{"cryp":"TUSD", "sup":0.99970000, "res":0.99980000, "qualymes":636, "rmaxt": 0.8, "atual":0.99970000},
{"cryp":"TRX", "sup":0.06206000, "res":0.06238000, "qualymes":66, "rmaxt": 0.78, "atual":0.06237000},
{"cryp":"TVK", "sup":0.11860000, "res":0.13400000, "qualymes":33, "rmaxt": 0.14, "atual":0.12740000},
{"cryp":"TWT", "sup":0.53580000, "res":0.58820000, "qualymes":63, "rmaxt": 0.64, "atual":0.56100000},
{"cryp":"UNFI", "sup":5.33500000, "res":13.79000000, "qualymes":633, "rmaxt": 0.31, "atual":5.41000000},
{"cryp":"UMA", "sup":5.69700000, "res":10.09800000, "qualymes":333, "rmaxt": 0.33, "atual":5.69700000},
{"cryp":"UNI", "sup":9.97000000, "res":10.66000000, "qualymes":633, "rmaxt": 0.5, "atual":10.43000000},
{"cryp":"USDC", "sup":0.99950000, "res":0.99960000, "qualymes":3333, "rmaxt": 0.08, "atual":0.99960000},
{"cryp":"USDP", "sup":0.99930000, "res":0.99940000, "qualymes":33, "rmaxt": 0.17, "atual":0.99940000},
{"cryp":"UST", "sup":0.99910000, "res":1.00100000, "qualymes":3, "rmaxt": 0.33, "atual":1.00000000},
{"cryp":"UTK", "sup":0.23690000, "res":0.24180000, "qualymes":633, "rmaxt": 0.47, "atual":0.24010000},
{"cryp":"VET", "sup":0.05396000, "res":0.05452000, "qualymes":63, "rmaxt": 0.77, "atual":0.05437000},
{"cryp":"VGX", "sup":1.86100000, "res":1.94000000, "qualymes":3, "rmaxt": 0.25, "atual":1.86800000},
{"cryp":"VIDT", "sup":0.50020000, "res":0.51690000, "qualymes":33, "rmaxt": 0.33, "atual":0.50310000},
{"cryp":"VOXEL", "sup":1.85000000, "res":1.95100000, "qualymes":3, "rmaxt": 0.33, "atual":1.86270000},
{"cryp":"VITE", "sup":0.05076000, "res":0.05080000, "qualymes":663, "rmaxt": 0.63, "atual":0.05090000},
{"cryp":"VTHO", "sup":0.00342800, "res":0.00351400, "qualymes":633, "rmaxt": 0.5, "atual":0.00344500},
{"cryp":"WAN", "sup":0.41000000, "res":0.42500000, "qualymes":633, "rmaxt": 0.68, "atual":0.41210000},
{"cryp":"WAVES", "sup":8.75000000, "res":10.03000000, "qualymes":633, "rmaxt": 0.76, "atual":8.79000000},
{"cryp":"WAXP", "sup":0.33500000, "res":0.34470000, "qualymes":6, "rmaxt": 0.57, "atual":0.33620000},
{"cryp":"WIN", "sup":0.00030780, "res":0.00031490, "qualymes":63, "rmaxt": 0.68, "atual":0.00030870},
{"cryp":"WING", "sup":9.50000000, "res":12.35000000, "qualymes":3333, "rmaxt": 0.06, "atual":12.27000000},
{"cryp":"WNXM", "sup":32.90000000, "res":134.20000000, "qualymes":63, "rmaxt": 0.53, "atual":33.07000000},
{"cryp":"WRX", "sup":0.90700000, "res":0.93300000, "qualymes":63, "rmaxt": 0.6, "atual":0.91100000},
{"cryp":"WTC", "sup":0.51250000, "res":0.53110000, "qualymes":66, "rmaxt": 0.57, "atual":0.51530000},
{"cryp":"XEC", "sup":0.00007723, "res":0.00007855, "qualymes":33, "rmaxt": 0.17, "atual":0.00007763},
{"cryp":"XEM", "sup":0.10360000, "res":0.10410000, "qualymes":363, "rmaxt": 0.31, "atual":0.10390000},
{"cryp":"XLM", "sup":0.19480000, "res":0.20010000, "qualymes":63, "rmaxt": 0.8, "atual":0.19600000},
{"cryp":"XMR", "sup":25.08000000, "res":156.40000000, "qualymes":633, "rmaxt": 0.75, "atual":155.50000000},
{"cryp":"XNO", "sup":2.00600000, "res":3.89000000, "qualymes":3, "rmaxt": 0.5, "atual":2.09000000},
{"cryp":"XRP", "sup":0.60560000, "res":0.62060000, "qualymes":663, "rmaxt": 0.78, "atual":0.60830000},
{"cryp":"XTZ", "sup":3.76200000, "res":3.86700000, "qualymes":63, "rmaxt": 0.87, "atual":3.79700000},
{"cryp":"XVG", "sup":0.01000000, "res":0.01029000, "qualymes":33, "rmaxt": 0.11, "atual":0.01002000},
{"cryp":"XVS", "sup":8.09000000, "res":147.63400000, "qualymes":633, "rmaxt": 0.47, "atual":8.13000000},
{"cryp":"YFI", "sup":3000.00000000, "res":24125.00000000, "qualymes":636, "rmaxt": 0.53, "atual":23541.56000000},
{"cryp":"YGG", "sup":3.36800000, "res":11.50000000, "qualymes":3, "rmaxt": 0.5, "atual":3.40400000},
{"cryp":"ZEC", "sup":99.90000000, "res":102.30000000, "qualymes":63, "rmaxt": 0.75, "atual":100.90000000},
{"cryp":"YFII", "sup":970.00000000, "res":2468.00000000, "qualymes":363, "rmaxt": 0.06, "atual":2462.00000000},
{"cryp":"ZIL", "sup":0.04770000, "res":0.04861000, "qualymes":633, "rmaxt": 0.76, "atual":0.04834000},
{"cryp":"ZEN", "sup":5.06200000, "res":109.82000000, "qualymes":63, "rmaxt": 0.55, "atual":39.10000000},
{"cryp":"ZRX", "sup":0.59450000, "res":0.60030000, "qualymes":633, "rmaxt": 0.73, "atual":0.59800000}





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