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
    {"cryp":"1INCH", "sup":1.56000000, "res":1.60500000, "qualymes":63, "rmaxt": 0.43, "atual":1.60300000,"final":""},
{"cryp":"ACA", "sup":1.51000000, "res":2.80000000, "qualymes":3, "rmaxt": 1, "atual":1.53300000,"final":""},
{"cryp":"AAVE", "sup":25.93900000, "res":144.90000000, "qualymes":63, "rmaxt": 0.5, "atual":144.60000000,"final":""},
{"cryp":"ACH", "sup":0.03232000, "res":0.06690000, "qualymes":3, "rmaxt": 1, "atual":0.03858000,"final":""},
{"cryp":"ACM", "sup":3.83100000, "res":16.58400000, "qualymes":3333, "rmaxt": 0.08, "atual":3.84200000, "final":""},
{"cryp":"ADA", "sup":1.02600000, "res":1.03800000, "qualymes":63, "rmaxt": 0.91, "atual":1.03500000,"final":""},
{"cryp":"ADX", "sup":0.37040000, "res":1.92660000, "qualymes":3, "rmaxt": 0.25, "atual":0.40260000,"final":""},
{"cryp":"AGLD", "sup":0.69700000, "res":5.43700000, "qualymes":3, "rmaxt": 0.25, "atual":0.81800000,"final":""},
{"cryp":"AION", "sup":0.08300000, "res":0.08760000, "qualymes":63, "rmaxt": 0.67, "atual":0.08760000,"final":""},
{"cryp":"AKRO", "sup":0.01195000, "res":0.01200000, "qualymes":63, "rmaxt": 0.4, "atual":0.01200000,"final":""},
{"cryp":"ALCX", "sup":135.20000000, "res":458.00000000, "qualymes":3, "rmaxt": 0.33, "atual":152.40000000,"final":""},
{"cryp":"ALGO", "sup":0.92220000, "res":0.95800000, "qualymes":36, "rmaxt": 0.03, "atual":0.95630000,"final":""},
{"cryp":"ALICE", "sup":6.38000000, "res":11.69000000, "qualymes":36, "rmaxt": 0.09, "atual":6.61000000,"final":""},
{"cryp":"ALPACA", "sup":0.34200000, "res":0.34260000, "qualymes":33, "rmaxt": 0.17, "atual":0.34170000,"final":""},
{"cryp":"ALPHA", "sup":0.35760000, "res":0.36960000, "qualymes":6333, "rmaxt": 0.31, "atual":0.36960000, "final":""},
{"cryp":"AMP", "sup":0.02400000, "res":0.08000000, "qualymes":3, "rmaxt": 0.33, "atual":0.02893000,"final":""},
{"cryp":"ANC", "sup":1.25300000, "res":1.98000000, "qualymes":3, "rmaxt": 1, "atual":1.28900000,"final":""},
{"cryp":"ANKR", "sup":0.06869000, "res":0.07050000, "qualymes":66, "rmaxt": 0.68, "atual":0.07016000,"final":""},
{"cryp":"ANT", "sup":5.10400000, "res":11.02200000, "qualymes":366, "rmaxt": 0.06, "atual":5.17200000,"final":""},
{"cryp":"ANY", "sup":19.42000000, "res":19.57000000, "qualymes":6, "rmaxt": 1, "atual":19.54000000,"final":""},
{"cryp":"API3", "sup":3.47000000, "res":7.22000000, "qualymes":3, "rmaxt": 1, "atual":3.67600000,"final":""},
{"cryp":"AR", "sup":7.10100000, "res":91.08000000, "qualymes":6, "rmaxt": 0.78, "atual":29.97000000,"final":""},
{"cryp":"ARDR", "sup":0.16420000, "res":0.17140000, "qualymes":663, "rmaxt": 0.57, "atual":0.16830000,"final":""},
{"cryp":"ARPA", "sup":0.06260000, "res":0.06286000, "qualymes":6, "rmaxt": 0.93, "atual":0.06266000,"final":""},
{"cryp":"ASR", "sup":2.96500000, "res":11.65300000, "qualymes":3333, "rmaxt": 0.07, "atual":2.99800000, "final":""},
{"cryp":"ATA", "sup":0.37630000, "res":0.38850000, "qualymes":33, "rmaxt": 0.13, "atual":0.38550000,"final":""},
{"cryp":"ATM", "sup":5.07000000, "res":13.90000000, "qualymes":633, "rmaxt": 0.43, "atual":5.12000000,"final":""},
{"cryp":"ATOM", "sup":27.71000000, "res":32.78000000, "qualymes":66, "rmaxt": 0.88, "atual":28.90000000,"final":""},
{"cryp":"AUCTION", "sup":11.66000000, "res":43.79000000, "qualymes":3, "rmaxt": 0.5, "atual":14.04000000,"final":""},
{"cryp":"AUD", "sup":0.69900000, "res":0.69910000, "qualymes":3333, "rmaxt": 0.22, "atual":0.69900000, "final":""},
{"cryp":"AUDIO", "sup":0.86300000, "res":0.86500000, "qualymes":66, "rmaxt": 0.38, "atual":0.86500000,"final":""},
{"cryp":"AUTO", "sup":393.70000000, "res":1362.00000000, "qualymes":333, "rmaxt": 0.1, "atual":407.30000000,"final":""},
{"cryp":"AVA", "sup":1.08400000, "res":1.10800000, "qualymes":633, "rmaxt": 0.4, "atual":1.10700000,"final":""},
{"cryp":"AVAX", "sup":55.14000000, "res":147.00000000, "qualymes":6, "rmaxt": 0.88, "atual":64.36000000,"final":""},
{"cryp":"AXS", "sup":0.10000000, "res":166.09000000, "qualymes":6, "rmaxt": 0.87, "atual":46.16000000,"final":""},
{"cryp":"BADGER", "sup":9.93000000, "res":10.50000000, "qualymes":36, "rmaxt": 0.09, "atual":10.40000000,"final":""},
{"cryp":"BAKE", "sup":0.58900000, "res":0.60300000, "qualymes":333, "rmaxt": 0.2, "atual":0.60300000,"final":""},
{"cryp":"BAL", "sup":8.37500000, "res":11.74000000, "qualymes":633, "rmaxt": 0.56, "atual":11.71000000,"final":""},
{"cryp":"BAND", "sup":3.30800000, "res":10.08700000, "qualymes":633, "rmaxt": 0.69, "atual":3.40200000,"final":""},
{"cryp":"BAR", "sup":5.73000000, "res":17.26000000, "qualymes":333, "rmaxt": 0.1, "atual":5.77000000,"final":""},
{"cryp":"BAT", "sup":0.08000000, "res":1.92900000, "qualymes":6, "rmaxt": 0.94, "atual":0.84850000,"final":""},
{"cryp":"BEAM", "sup":0.29680000, "res":0.31050000, "qualymes":63, "rmaxt": 0.69, "atual":0.30620000,"final":""},
{"cryp":"BCH", "sup":287.00000000, "res":1650.00000000, "qualymes":633, "rmaxt": 0.7, "atual":288.00000000,"final":""},
{"cryp":"BEL", "sup":0.85500000, "res":0.85800000, "qualymes":333, "rmaxt": 0.06, "atual":0.85800000,"final":""},
{"cryp":"BETA", "sup":0.06001000, "res":4.75000000, "qualymes":3, "rmaxt": 0.25, "atual":0.37873000,"final":""},
{"cryp":"BICO", "sup":1.86500000, "res":1.88200000, "qualymes":3, "rmaxt": 0.5, "atual":1.87400000,"final":""},
{"cryp":"BLZ", "sup":0.12180000, "res":0.12320000, "qualymes":63, "rmaxt": 0.44, "atual":0.12250000,"final":""},
{"cryp":"BNB", "sup":6.38000000, "res":384.20000000, "qualymes":66, "rmaxt": 0.84, "atual":383.10000000,"final":""},
{"cryp":"BNT", "sup":2.25600000, "res":2.32700000, "qualymes":63, "rmaxt": 0.58, "atual":2.30900000,"final":""},
{"cryp":"BNX", "sup":15.80000000, "res":230.00000000, "qualymes":3, "rmaxt": 0.33, "atual":20.80000000,"final":""},
{"cryp":"BOND", "sup":9.89000000, "res":75.00000000, "qualymes":3, "rmaxt": 0.57, "atual":10.11000000,"final":""},
{"cryp":"BTC", "sup":3782.13000000, "res":37500.00000000, "qualymes":6, "rmaxt": 0.96, "atual":37017.60000000,"final":""},
{"cryp":"BTCST", "sup":8.00000000, "res":1000.00000000, "qualymes":336, "rmaxt": 0.08, "atual":14.93000000,"final":""},
{"cryp":"BTG", "sup":29.42000000, "res":169.00000000, "qualymes":333, "rmaxt": 0.2, "atual":29.58000000,"final":""},
{"cryp":"BTS", "sup":0.02346000, "res":0.02352000, "qualymes":633, "rmaxt": 0.63, "atual":0.02347000,"final":""},
{"cryp":"BTT", "sup":0.00271000, "res":0.00278000, "qualymes":663, "rmaxt": 0.76, "atual":0.00277700,"final":""},
{"cryp":"BTTC", "sup":0.00000150, "res":0.00000255, "qualymes":3, "rmaxt": 1, "atual":0.00000203,"final":""},
{"cryp":"BURGER", "sup":1.54900000, "res":1.59900000, "qualymes":33, "rmaxt": 0.2, "atual":1.58700000,"final":""},
{"cryp":"BUSD", "sup":0.99960000, "res":0.99970000, "qualymes":3333, "rmaxt": 0.03, "atual":0.99960000, "final":""},
{"cryp":"C98", "sup":1.51000000, "res":1.58100000, "qualymes":63, "rmaxt": 0.29, "atual":1.57000000,"final":""},
{"cryp":"CELO", "sup":3.01700000, "res":10.95700000, "qualymes":63, "rmaxt": 0.62, "atual":3.06200000,"final":""},
{"cryp":"CAKE", "sup":7.01000000, "res":10.27000000, "qualymes":333, "rmaxt": 0.25, "atual":7.02000000,"final":""},
{"cryp":"CELR", "sup":0.04660000, "res":0.04838000, "qualymes":63, "rmaxt": 0.89, "atual":0.04817000,"final":""},
{"cryp":"CFX", "sup":0.11000000, "res":0.11070000, "qualymes":333, "rmaxt": 0.09, "atual":0.11070000,"final":""},
{"cryp":"CHESS", "sup":0.83600000, "res":9.20000000, "qualymes":3, "rmaxt": 0.25, "atual":0.86600000,"final":""},
{"cryp":"CHR", "sup":0.50050000, "res":0.50760000, "qualymes":6, "rmaxt": 0.9, "atual":0.50680000,"final":""},
{"cryp":"CHZ", "sup":0.17590000, "res":0.17620000, "qualymes":63, "rmaxt": 0.66, "atual":0.17610000,"final":""},
{"cryp":"CITY", "sup":7.95000000, "res":53.00000000, "qualymes":3, "rmaxt": 0.33, "atual":8.99000000,"final":""},
{"cryp":"CKB", "sup":0.01422000, "res":0.01455000, "qualymes":66, "rmaxt": 0.23, "atual":0.01452000,"final":""},
{"cryp":"CLV", "sup":0.31300000, "res":0.32900000, "qualymes":33, "rmaxt": 0.14, "atual":0.32600000,"final":""},
{"cryp":"COCOS", "sup":0.00017100, "res":6.50000000, "qualymes":6, "rmaxt": 0.93, "atual":1.05490000,"final":""},
{"cryp":"COMP", "sup":80.62000000, "res":122.30000000, "qualymes":633, "rmaxt": 0.6, "atual":122.00000000,"final":""},
{"cryp":"COS", "sup":0.00342000, "res":0.06500000, "qualymes":6, "rmaxt": 0.97, "atual":0.01378000,"final":""},
{"cryp":"COTI", "sup":0.28890000, "res":0.29360000, "qualymes":6, "rmaxt": 0.88, "atual":0.29300000,"final":""},
{"cryp":"CRV", "sup":2.70100000, "res":2.84000000, "qualymes":36, "rmaxt": 0.06, "atual":2.80400000,"final":""},
{"cryp":"CTK", "sup":1.36600000, "res":1.41700000, "qualymes":336, "rmaxt": 0.06, "atual":1.36800000,"final":""},
{"cryp":"CTSI", "sup":0.42660000, "res":0.49370000, "qualymes":63, "rmaxt": 0.64, "atual":0.44070000,"final":""},
{"cryp":"CTXC", "sup":0.28010000, "res":0.29100000, "qualymes":6, "rmaxt": 0.96, "atual":0.28920000,"final":""},
{"cryp":"CVC", "sup":0.23280000, "res":0.24120000, "qualymes":63, "rmaxt": 0.87, "atual":0.24090000,"final":""},
{"cryp":"CVP", "sup":0.92500000, "res":3.28000000, "qualymes":3, "rmaxt": 0.25, "atual":1.07400000,"final":""},
{"cryp":"CVX", "sup":21.70000000, "res":63.00000000, "qualymes":3, "rmaxt": 1, "atual":23.68000000,"final":""},
{"cryp":"DAR", "sup":0.02300000, "res":16.79999000, "qualymes":3, "rmaxt": 0.33, "atual":0.72454000,"final":""},
{"cryp":"DASH", "sup":92.50000000, "res":143.00000000, "qualymes":633, "rmaxt": 0.77, "atual":92.70000000,"final":""},
{"cryp":"DATA", "sup":0.07471000, "res":0.07580000, "qualymes":63, "rmaxt": 0.59, "atual":0.07549000,"final":""},
{"cryp":"DCR", "sup":6.00200000, "res":114.20000000, "qualymes":633, "rmaxt": 0.53, "atual":59.90000000,"final":""},
{"cryp":"DEGO", "sup":3.44000000, "res":14.44000000, "qualymes":33, "rmaxt": 0.09, "atual":3.54000000,"final":""},
{"cryp":"DENT", "sup":0.00248500, "res":0.00250400, "qualymes":663, "rmaxt": 0.7, "atual":0.00248500,"final":""},
{"cryp":"DEXE", "sup":6.20000000, "res":10.50000000, "qualymes":33, "rmaxt": 0.14, "atual":6.33000000,"final":""},
{"cryp":"DF", "sup":0.10240000, "res":0.10270000, "qualymes":33, "rmaxt": 0.2, "atual":0.10240000,"final":""},
{"cryp":"DGB", "sup":0.02159000, "res":0.02168000, "qualymes":633, "rmaxt": 0.58, "atual":0.02159000,"final":""},
{"cryp":"DIA", "sup":0.90600000, "res":0.94700000, "qualymes":333, "rmaxt": 0.53, "atual":0.94500000,"final":""},
{"cryp":"DNT", "sup":0.07970000, "res":0.07990000, "qualymes":633, "rmaxt": 0.4, "atual":0.07990000,"final":""},
{"cryp":"DOCK", "sup":0.04267000, "res":0.04305000, "qualymes":633, "rmaxt": 0.7, "atual":0.04267000,"final":""},
{"cryp":"DODO", "sup":0.47100000, "res":0.47400000, "qualymes":3333, "rmaxt": 0.08, "atual":0.47100000, "final":""},
{"cryp":"DOGE", "sup":0.13910000, "res":0.14030000, "qualymes":633, "rmaxt": 0.74, "atual":0.13920000,"final":""},
{"cryp":"DOT", "sup":2.00000000, "res":55.09000000, "qualymes":6, "rmaxt": 0.89, "atual":17.73000000,"final":""},
{"cryp":"DREP", "sup":0.71460000, "res":0.72970000, "qualymes":66, "rmaxt": 0.64, "atual":0.71550000,"final":""},
{"cryp":"DUSK", "sup":0.60510000, "res":0.61230000, "qualymes":6, "rmaxt": 0.97, "atual":0.60560000,"final":""},
{"cryp":"DYDX", "sup":5.63600000, "res":14.94000000, "qualymes":33, "rmaxt": 0.2, "atual":5.74000000,"final":""},
{"cryp":"EGLD", "sup":6.00000000, "res":544.25000000, "qualymes":6, "rmaxt": 0.88, "atual":140.00000000,"final":""},
{"cryp":"ELF", "sup":0.31490000, "res":0.32890000, "qualymes":33, "rmaxt": 0.2, "atual":0.32240000,"final":""},
{"cryp":"ENJ", "sup":0.03223000, "res":4.84500000, "qualymes":6, "rmaxt": 0.94, "atual":1.60800000,"final":""},
{"cryp":"ENS", "sup":16.62000000, "res":120.00000000, "qualymes":3, "rmaxt": 0.33, "atual":17.41000000,"final":""},
{"cryp":"EOS", "sup":2.19200000, "res":14.90000000, "qualymes":3633, "rmaxt": 0.04, "atual":2.21600000, "final":""},
{"cryp":"EPS", "sup":0.15660000, "res":0.15750000, "qualymes":333, "rmaxt": 0.1, "atual":0.15680000,"final":""},
{"cryp":"ERN", "sup":4.64100000, "res":19.83800000, "qualymes":33, "rmaxt": 0.38, "atual":4.77500000,"final":""},
{"cryp":"ETC", "sup":3.07260000, "res":179.83000000, "qualymes":633, "rmaxt": 0.82, "atual":24.15000000,"final":""},
{"cryp":"ETH", "sup":86.00000000, "res":4868.00000000, "qualymes":6, "rmaxt": 0.96, "atual":2398.69000000,"final":""},
{"cryp":"EUR", "sup":1.11400000, "res":1.11500000, "qualymes":3636, "rmaxt": 0.04, "atual":1.11400000, "final":""},
{"cryp":"FARM", "sup":99.00000000, "res":103.70000000, "qualymes":33, "rmaxt": 0.17, "atual":102.00000000,"final":""},
{"cryp":"FET", "sup":0.30020000, "res":0.31010000, "qualymes":63, "rmaxt": 0.89, "atual":0.30450000,"final":""},
{"cryp":"FIDA", "sup":1.33100000, "res":107.36500000, "qualymes":3, "rmaxt": 0.6, "atual":1.63000000,"final":""},
{"cryp":"FIL", "sup":18.72000000, "res":120.17000000, "qualymes":3333, "rmaxt": 0.06, "atual":18.76000000, "final":""},
{"cryp":"FIO", "sup":0.09260000, "res":0.09450000, "qualymes":63, "rmaxt": 0.47, "atual":0.09380000,"final":""},
{"cryp":"FIRO", "sup":3.30400000, "res":12.29600000, "qualymes":33, "rmaxt": 0.38, "atual":3.37100000,"final":""},
{"cryp":"FIS", "sup":0.72760000, "res":0.73940000, "qualymes":363, "rmaxt": 0.09, "atual":0.72980000,"final":""},
{"cryp":"FLM", "sup":0.22380000, "res":0.22540000, "qualymes":3633, "rmaxt": 0.06, "atual":0.22430000, "final":""},
{"cryp":"FLOW", "sup":5.20000000, "res":17.00000000, "qualymes":33, "rmaxt": 0.14, "atual":5.42000000,"final":""},
{"cryp":"FLUX", "sup":1.53000000, "res":1.53800000, "qualymes":3, "rmaxt": 0.5, "atual":1.53300000,"final":""},
{"cryp":"FOR", "sup":0.04309000, "res":0.04361000, "qualymes":33, "rmaxt": 0.33, "atual":0.04329000,"final":""},
{"cryp":"FORTH", "sup":5.07000000, "res":17.49000000, "qualymes":333, "rmaxt": 0.1, "atual":5.16000000,"final":""},
{"cryp":"FRONT", "sup":0.48340000, "res":0.51540000, "qualymes":3, "rmaxt": 0.25, "atual":0.48900000,"final":""},
{"cryp":"FTM", "sup":2.04080000, "res":2.06750000, "qualymes":6, "rmaxt": 0.91, "atual":2.04410000,"final":""},
{"cryp":"FTT", "sup":37.74000000, "res":39.38000000, "qualymes":63, "rmaxt": 0.85, "atual":38.29000000,"final":""},
{"cryp":"FUN", "sup":0.00929000, "res":0.00942000, "qualymes":633, "rmaxt": 0.7, "atual":0.00929000,"final":""},
{"cryp":"FXS", "sup":22.95000000, "res":23.51700000, "qualymes":6, "rmaxt": 1, "atual":23.03000000,"final":""},
{"cryp":"GALA", "sup":0.02103000, "res":0.84128000, "qualymes":6, "rmaxt": 0.6, "atual":0.18496000,"final":""},
{"cryp":"GBP", "sup":1.33700000, "res":1.34000000, "qualymes":3633, "rmaxt": 0.05, "atual":1.33900000, "final":""},
{"cryp":"GHST", "sup":1.50800000, "res":3.40000000, "qualymes":6, "rmaxt": 0.67, "atual":1.98600000,"final":""},
{"cryp":"GLMR", "sup":0.25000000, "res":51.00000000, "qualymes":3, "rmaxt": 1, "atual":6.19000000,"final":""},
{"cryp":"GNO", "sup":219.10000000, "res":300.00000000, "qualymes":3, "rmaxt": 0.67, "atual":258.00000000,"final":""},
{"cryp":"GRT", "sup":0.39790000, "res":0.40460000, "qualymes":633, "rmaxt": 0.21, "atual":0.39870000,"final":""},
{"cryp":"GTC", "sup":6.87500000, "res":19.50000000, "qualymes":6, "rmaxt": 0.75, "atual":6.89400000,"final":""},
{"cryp":"GTO", "sup":0.02952000, "res":0.03019000, "qualymes":66, "rmaxt": 0.71, "atual":0.02991000,"final":""},
{"cryp":"GXS", "sup":1.49500000, "res":1.52750000, "qualymes":6, "rmaxt": 0.95, "atual":1.49940000,"final":""},
{"cryp":"HARD", "sup":0.55090000, "res":0.56180000, "qualymes":3333, "rmaxt": 0.07, "atual":0.55240000, "final":""},
{"cryp":"HBAR", "sup":0.20440000, "res":0.21250000, "qualymes":63, "rmaxt": 0.86, "atual":0.20830000,"final":""},
{"cryp":"HIGH", "sup":4.08000000, "res":10.61000000, "qualymes":3, "rmaxt": 0.5, "atual":4.25000000,"final":""},
{"cryp":"HIVE", "sup":0.86000000, "res":0.88960000, "qualymes":6, "rmaxt": 0.91, "atual":0.87670000,"final":""},
{"cryp":"HNT", "sup":0.68600000, "res":59.27000000, "qualymes":6, "rmaxt": 0.88, "atual":27.23000000,"final":""},
{"cryp":"HOT", "sup":0.00430100, "res":0.00437700, "qualymes":63, "rmaxt": 0.75, "atual":0.00432100,"final":""},
{"cryp":"ICP", "sup":19.28000000, "res":19.76000000, "qualymes":333, "rmaxt": 0.11, "atual":19.31000000,"final":""},
{"cryp":"ICX", "sup":0.67300000, "res":0.69300000, "qualymes":63, "rmaxt": 0.77, "atual":0.68100000,"final":""},
{"cryp":"IDEX", "sup":0.11600000, "res":0.12397000, "qualymes":33, "rmaxt": 0.2, "atual":0.11794000,"final":""},
{"cryp":"ILV", "sup":414.50000000, "res":1930.00000000, "qualymes":6, "rmaxt": 0.8, "atual":546.70000000,"final":""},
{"cryp":"IMX", "sup":2.60500000, "res":2.65500000, "qualymes":3, "rmaxt": 1, "atual":2.63300000,"final":""},
{"cryp":"INJ", "sup":4.17900000, "res":14.15600000, "qualymes":633, "rmaxt": 0.5, "atual":4.32900000,"final":""},
{"cryp":"IOST", "sup":0.02273000, "res":0.02390000, "qualymes":663, "rmaxt": 0.74, "atual":0.02303000,"final":""},
{"cryp":"IOTA", "sup":0.77680000, "res":0.79980000, "qualymes":663, "rmaxt": 0.8, "atual":0.78870000,"final":""},
{"cryp":"IOTX", "sup":0.05594000, "res":0.26300000, "qualymes":6, "rmaxt": 0.93, "atual":0.07379000,"final":""},
{"cryp":"IRIS", "sup":0.06496000, "res":0.06605000, "qualymes":66, "rmaxt": 0.5, "atual":0.06498000,"final":""},
{"cryp":"JASMY", "sup":0.04390000, "res":0.36490000, "qualymes":3, "rmaxt": 0.33, "atual":0.04540000,"final":""},
{"cryp":"JOE", "sup":0.65700000, "res":2.79000000, "qualymes":3, "rmaxt": 0.5, "atual":1.08700000,"final":""},
{"cryp":"JST", "sup":0.04056000, "res":0.04106000, "qualymes":633, "rmaxt": 0.5, "atual":0.04068000,"final":""},
{"cryp":"JUV", "sup":5.86000000, "res":10.98000000, "qualymes":333, "rmaxt": 0.07, "atual":5.88000000,"final":""},
{"cryp":"KAVA", "sup":3.10300000, "res":3.16600000, "qualymes":63, "rmaxt": 0.82, "atual":3.10300000,"final":""},
{"cryp":"KEEP", "sup":0.21130000, "res":1.20900000, "qualymes":6, "rmaxt": 0.63, "atual":0.39540000,"final":""},
{"cryp":"KEY", "sup":0.00614900, "res":0.00640000, "qualymes":66, "rmaxt": 0.7, "atual":0.00629000,"final":""},
{"cryp":"KLAY", "sup":0.82400000, "res":4.40000000, "qualymes":6, "rmaxt": 0.63, "atual":1.17400000,"final":""},
{"cryp":"KMD", "sup":0.48210000, "res":0.49390000, "qualymes":63, "rmaxt": 0.5, "atual":0.48800000,"final":""},
{"cryp":"KNC", "sup":1.68300000, "res":1.74000000, "qualymes":66, "rmaxt": 0.55, "atual":1.69800000,"final":""},
{"cryp":"KP3R", "sup":547.25000000, "res":2065.00000000, "qualymes":3, "rmaxt": 0.33, "atual":961.00000000,"final":""},
{"cryp":"KSM", "sup":23.15800000, "res":165.00000000, "qualymes":63, "rmaxt": 0.53, "atual":161.90000000,"final":""},
{"cryp":"LAZIO", "sup":3.02740000, "res":100.00000000, "qualymes":3, "rmaxt": 0.25, "atual":3.06940000,"final":""},
{"cryp":"LINA", "sup":0.02250000, "res":0.02258000, "qualymes":33, "rmaxt": 0.09, "atual":0.02252000,"final":""},
{"cryp":"LINK", "sup":14.97000000, "res":15.09000000, "qualymes":63, "rmaxt": 0.78, "atual":15.01000000,"final":""},
{"cryp":"LIT", "sup":1.35700000, "res":1.44700000, "qualymes":333, "rmaxt": 0.08, "atual":1.37400000,"final":""},
{"cryp":"LOKA", "sup":1.98000000, "res":2.06040000, "qualymes":3, "rmaxt": 1, "atual":1.98630000,"final":""},
{"cryp":"LPT", "sup":24.09000000, "res":101.80000000, "qualymes":6, "rmaxt": 0.78, "atual":24.51000000,"final":""},
{"cryp":"LSK", "sup":1.56200000, "res":1.57000000, "qualymes":633, "rmaxt": 0.67, "atual":1.56200000,"final":""},
{"cryp":"LTC", "sup":96.30000000, "res":295.70000000, "qualymes":63, "rmaxt": 0.84, "atual":106.80000000,"final":""},
{"cryp":"LTO", "sup":0.19450000, "res":0.20190000, "qualymes":66, "rmaxt": 0.63, "atual":0.19790000,"final":""},
{"cryp":"LRC", "sup":0.93750000, "res":0.94500000, "qualymes":6, "rmaxt": 0.9, "atual":0.93830000,"final":""},
{"cryp":"LUNA", "sup":47.74000000, "res":103.60000000, "qualymes":6, "rmaxt": 0.94, "atual":48.16000000,"final":""},
{"cryp":"MANA", "sup":0.03000000, "res":5.90000000, "qualymes":6, "rmaxt": 0.89, "atual":2.19970000,"final":""},
{"cryp":"MASK", "sup":2.99500000, "res":22.58100000, "qualymes":6, "rmaxt": 0.78, "atual":5.51100000,"final":""},
{"cryp":"MBL", "sup":0.00529200, "res":0.00575900, "qualymes":63, "rmaxt": 0.63, "atual":0.00562600,"final":""},
{"cryp":"MATIC", "sup":1.59600000, "res":1.60700000, "qualymes":6, "rmaxt": 0.97, "atual":1.60100000,"final":""},
{"cryp":"MBOX", "sup":1.96900000, "res":15.73400000, "qualymes":6, "rmaxt": 0.83, "atual":2.51600000,"final":""},
{"cryp":"MC", "sup":2.26000000, "res":12.70000000, "qualymes":3, "rmaxt": 0.5, "atual":2.29000000,"final":""},
{"cryp":"MDT", "sup":0.00788000, "res":0.17888000, "qualymes":6, "rmaxt": 0.95, "atual":0.05353000,"final":""},
{"cryp":"MDX", "sup":0.22200000, "res":0.22800000, "qualymes":333, "rmaxt": 0.22, "atual":0.22600000,"final":""},
{"cryp":"MFT", "sup":0.00577100, "res":0.00582000, "qualymes":66, "rmaxt": 0.67, "atual":0.00578400,"final":""},
{"cryp":"MINA", "sup":2.16200000, "res":2.27500000, "qualymes":3, "rmaxt": 0.67, "atual":2.18700000,"final":""},
{"cryp":"MIR", "sup":1.12800000, "res":1.15100000, "qualymes":333, "rmaxt": 0.1, "atual":1.12900000,"final":""},
{"cryp":"MITH", "sup":0.03350000, "res":0.03469000, "qualymes":63, "rmaxt": 0.74, "atual":0.03415000,"final":""},
{"cryp":"MKR", "sup":429.79000000, "res":1822.00000000, "qualymes":633, "rmaxt": 0.58, "atual":1783.00000000,"final":""},
{"cryp":"MLN", "sup":52.80000000, "res":131.90000000, "qualymes":33, "rmaxt": 0.43, "atual":53.30000000,"final":""},
{"cryp":"MOVR", "sup":73.30000000, "res":140.20000000, "qualymes":3, "rmaxt": 0.33, "atual":73.70000000,"final":""},
{"cryp":"MTL", "sup":1.39900000, "res":1.40400000, "qualymes":663, "rmaxt": 0.67, "atual":1.40100000,"final":""},
{"cryp":"NANO", "sup":2.14800000, "res":17.70000000, "qualymes":633, "rmaxt": 0.76, "atual":2.22400000,"final":""},
{"cryp":"NBS", "sup":0.01113000, "res":0.01113000, "qualymes":66, "rmaxt": 0.47, "atual":0.01113000,"final":""},
{"cryp":"NEAR", "sup":6.12300000, "res":20.59700000, "qualymes":6, "rmaxt": 1, "atual":10.30000000,"final":""},
{"cryp":"NEO", "sup":3.89000000, "res":141.00000000, "qualymes":3633, "rmaxt": 0.06, "atual":18.15000000, "final":""},
{"cryp":"NKN", "sup":0.19080000, "res":0.19240000, "qualymes":66, "rmaxt": 0.68, "atual":0.19100000,"final":""},
{"cryp":"NMR", "sup":26.30000000, "res":27.10000000, "qualymes":333, "rmaxt": 0.56, "atual":26.30000000,"final":""},
{"cryp":"NU", "sup":0.46410000, "res":0.47290000, "qualymes":6, "rmaxt": 0.63, "atual":0.46560000,"final":""},
{"cryp":"NULS", "sup":0.36650000, "res":0.36800000, "qualymes":36, "rmaxt": 0.02, "atual":0.36710000,"final":""},
{"cryp":"OCEAN", "sup":0.56890000, "res":0.57940000, "qualymes":66, "rmaxt": 0.5, "atual":0.56980000,"final":""},
{"cryp":"OG", "sup":3.45300000, "res":11.65000000, "qualymes":3333, "rmaxt": 0.07, "atual":3.47100000, "final":""},
{"cryp":"OGN", "sup":0.30400000, "res":0.30510000, "qualymes":63, "rmaxt": 0.64, "atual":0.30450000,"final":""},
{"cryp":"OM", "sup":0.09130000, "res":0.09160000, "qualymes":333, "rmaxt": 0.09, "atual":0.09130000,"final":""},
{"cryp":"OMG", "sup":0.30310000, "res":20.12400000, "qualymes":6, "rmaxt": 0.94, "atual":4.46400000,"final":""},
{"cryp":"ONE", "sup":0.00118000, "res":0.38000000, "qualymes":6, "rmaxt": 0.91, "atual":0.17277000,"final":""},
{"cryp":"ONG", "sup":0.58670000, "res":0.58930000, "qualymes":3633, "rmaxt": 0.03, "atual":0.58780000, "final":""},
{"cryp":"ONT", "sup":0.45470000, "res":0.46130000, "qualymes":3633, "rmaxt": 0.02, "atual":0.45590000, "final":""},
{"cryp":"OOKI", "sup":0.00932000, "res":1.80000000, "qualymes":3, "rmaxt": 0.5, "atual":0.01122000,"final":""},
{"cryp":"ORN", "sup":4.25400000, "res":13.18700000, "qualymes":633, "rmaxt": 0.41, "atual":4.25400000,"final":""},
{"cryp":"OXT", "sup":0.23180000, "res":0.24000000, "qualymes":63, "rmaxt": 0.47, "atual":0.23520000,"final":""},
{"cryp":"PAXG", "sup":1792.00000000, "res":1798.00000000, "qualymes":336, "rmaxt": 0.33, "atual":1792.00000000,"final":""},
{"cryp":"PEOPLE", "sup":0.03050000, "res":0.20000000, "qualymes":3, "rmaxt": 0.5, "atual":0.05190000,"final":""},
{"cryp":"PERL", "sup":0.04603000, "res":0.04765000, "qualymes":63, "rmaxt": 0.7, "atual":0.04734000,"final":""},
{"cryp":"PERP", "sup":5.48000000, "res":23.13000000, "qualymes":63, "rmaxt": 0.55, "atual":5.56000000,"final":""},
{"cryp":"PHA", "sup":0.23720000, "res":0.24330000, "qualymes":33, "rmaxt": 0.5, "atual":0.24020000,"final":""},
{"cryp":"PLA", "sup":0.62400000, "res":3.40400000, "qualymes":3, "rmaxt": 0.33, "atual":0.88900000,"final":""},
{"cryp":"POLS", "sup":1.50000000, "res":1.52800000, "qualymes":6, "rmaxt": 0.89, "atual":1.50500000,"final":""},
{"cryp":"PNT", "sup":0.57900000, "res":0.57900000, "qualymes":633, "rmaxt": 0.4, "atual":0.57900000,"final":""},
{"cryp":"POLY", "sup":0.36400000, "res":0.38130000, "qualymes":3, "rmaxt": 0.4, "atual":0.36860000,"final":""},
{"cryp":"POND", "sup":0.04028000, "res":0.04078000, "qualymes":333, "rmaxt": 0.18, "atual":0.04047000,"final":""},
{"cryp":"PORTO", "sup":1.00000000, "res":41.11000000, "qualymes":3, "rmaxt": 0.33, "atual":2.78050000,"final":""},
{"cryp":"POWR", "sup":0.45790000, "res":0.72000000, "qualymes":3, "rmaxt": 0.33, "atual":0.53830000,"final":""},
{"cryp":"PSG", "sup":7.68800000, "res":12.84000000, "qualymes":63, "rmaxt": 0.64, "atual":12.59000000,"final":""},
{"cryp":"PUNDIX", "sup":0.72000000, "res":0.72900000, "qualymes":333, "rmaxt": 0.1, "atual":0.72000000,"final":""},
{"cryp":"PYR", "sup":9.71000000, "res":11.33000000, "qualymes":3, "rmaxt": 0.33, "atual":10.16000000,"final":""},
{"cryp":"QNT", "sup":90.90000000, "res":111.10000000, "qualymes":33, "rmaxt": 0.43, "atual":92.90000000,"final":""},
{"cryp":"QI", "sup":0.04700000, "res":0.04730000, "qualymes":3, "rmaxt": 0.33, "atual":0.04740000,"final":""},
{"cryp":"QTUM", "sup":5.55800000, "res":19.30000000, "qualymes":63, "rmaxt": 0.83, "atual":5.65600000,"final":""},
{"cryp":"QUICK", "sup":174.20000000, "res":174.50000000, "qualymes":33, "rmaxt": 0.17, "atual":174.20000000,"final":""},
{"cryp":"RAD", "sup":4.61600000, "res":30.50000000, "qualymes":3, "rmaxt": 0.25, "atual":4.99100000,"final":""},
{"cryp":"RAMP", "sup":0.10000000, "res":0.10020000, "qualymes":333, "rmaxt": 0.09, "atual":0.10020000,"final":""},
{"cryp":"RARE", "sup":0.43600000, "res":0.43700000, "qualymes":3, "rmaxt": 0.25, "atual":0.43700000,"final":""},
{"cryp":"RAY", "sup":3.39900000, "res":13.44300000, "qualymes":33, "rmaxt": 0.17, "atual":3.54600000,"final":""},
{"cryp":"REEF", "sup":0.00957000, "res":0.00971000, "qualymes":333, "rmaxt": 0.07, "atual":0.00961000,"final":""},
{"cryp":"REN", "sup":0.30790000, "res":0.31470000, "qualymes":33, "rmaxt": 0.62, "atual":0.30930000,"final":""},
{"cryp":"REP", "sup":4.80000000, "res":12.71000000, "qualymes":633, "rmaxt": 0.55, "atual":12.54000000,"final":""},
{"cryp":"REQ", "sup":0.16560000, "res":1.09900000, "qualymes":6, "rmaxt": 0.67, "atual":0.21450000,"final":""},
{"cryp":"RGT", "sup":19.50000000, "res":19.63000000, "qualymes":3, "rmaxt": 0.33, "atual":19.63000000,"final":""},
{"cryp":"RIF", "sup":0.11350000, "res":0.11370000, "qualymes":333, "rmaxt": 0.08, "atual":0.11370000,"final":""},
{"cryp":"RLC", "sup":1.72800000, "res":1.84800000, "qualymes":63, "rmaxt": 0.7, "atual":1.74600000,"final":""},
{"cryp":"RNDR", "sup":1.80100000, "res":7.94500000, "qualymes":3, "rmaxt": 0.33, "atual":2.55600000,"final":""},
{"cryp":"ROSE", "sup":0.16883000, "res":0.59800000, "qualymes":6, "rmaxt": 1, "atual":0.29297000,"final":""},
{"cryp":"RSR", "sup":0.01773000, "res":0.01784000, "qualymes":633, "rmaxt": 0.5, "atual":0.01780000,"final":""},
{"cryp":"RUNE", "sup":3.82900000, "res":17.27000000, "qualymes":63, "rmaxt": 0.53, "atual":3.85900000,"final":""},
{"cryp":"RVN", "sup":0.06517000, "res":0.06714000, "qualymes":6333, "rmaxt": 0.62, "atual":0.06704000, "final":""},
{"cryp":"SAND", "sup":2.55610000, "res":5.21270000, "qualymes":6, "rmaxt": 0.89, "atual":3.34430000,"final":""},
{"cryp":"SANTOS", "sup":2.39800000, "res":35.99300000, "qualymes":3, "rmaxt": 0.5, "atual":2.59100000,"final":""},
{"cryp":"SC", "sup":0.00917000, "res":0.00998000, "qualymes":63, "rmaxt": 0.53, "atual":0.00981000,"final":""},
{"cryp":"SCRT", "sup":5.30300000, "res":5.55900000, "qualymes":3, "rmaxt": 1, "atual":5.43800000,"final":""},
{"cryp":"SFP", "sup":0.75150000, "res":0.77010000, "qualymes":36, "rmaxt": 0.08, "atual":0.75710000,"final":""},
{"cryp":"SHIB", "sup":0.00000510, "res":0.00008854, "qualymes":6, "rmaxt": 0.67, "atual":0.00002071,"final":""},
{"cryp":"SKL", "sup":0.11060000, "res":0.11280000, "qualymes":633, "rmaxt": 0.29, "atual":0.11100000,"final":""},
{"cryp":"SLP", "sup":0.00980000, "res":0.00990000, "qualymes":333, "rmaxt": 0.2, "atual":0.00990000,"final":""},
{"cryp":"SNX", "sup":4.48500000, "res":10.63200000, "qualymes":6333, "rmaxt": 0.42, "atual":4.50900000, "final":""},
{"cryp":"SOL", "sup":88.27000000, "res":104.43000000, "qualymes":6, "rmaxt": 0.89, "atual":88.63000000,"final":""},
{"cryp":"SPELL", "sup":0.00483000, "res":0.02810000, "qualymes":3, "rmaxt": 0.5, "atual":0.00520000,"final":""},
{"cryp":"SRM", "sup":2.09500000, "res":13.73200000, "qualymes":63, "rmaxt": 0.78, "atual":2.11600000,"final":""},
{"cryp":"STMX", "sup":0.01348000, "res":0.01416000, "qualymes":633, "rmaxt": 0.55, "atual":0.01373000,"final":""},
{"cryp":"STORJ", "sup":1.06920000, "res":1.07260000, "qualymes":66, "rmaxt": 0.47, "atual":1.07120000,"final":""},
{"cryp":"STPT", "sup":0.07866000, "res":0.08200000, "qualymes":6, "rmaxt": 0.87, "atual":0.08091000,"final":""},
{"cryp":"STRAX", "sup":0.94800000, "res":0.96400000, "qualymes":633, "rmaxt": 0.47, "atual":0.95200000,"final":""},
{"cryp":"STX", "sup":0.04300000, "res":3.25600000, "qualymes":6, "rmaxt": 0.96, "atual":1.42400000,"final":""},
{"cryp":"SUN", "sup":0.01366000, "res":0.01386000, "qualymes":33, "rmaxt": 0.47, "atual":0.01373000,"final":""},
{"cryp":"SUPER", "sup":0.62450000, "res":0.65050000, "qualymes":36, "rmaxt": 0.09, "atual":0.63690000,"final":""},
{"cryp":"SUSD", "sup":0.85730000, "res":4.72100000, "qualymes":6, "rmaxt": 1, "atual":0.99600000,"final":""},
{"cryp":"SUSHI", "sup":4.00100000, "res":10.68400000, "qualymes":633, "rmaxt": 0.41, "atual":4.02100000,"final":""},
{"cryp":"SXP", "sup":1.28200000, "res":1.29000000, "qualymes":633, "rmaxt": 0.58, "atual":1.29000000,"final":""},
{"cryp":"SYS", "sup":0.77620000, "res":0.78280000, "qualymes":6, "rmaxt": 1, "atual":0.78040000,"final":""},
{"cryp":"TCT", "sup":0.01590000, "res":0.02035000, "qualymes":63, "rmaxt": 0.68, "atual":0.01842000,"final":""},
{"cryp":"TFUEL", "sup":0.16930000, "res":0.17150000, "qualymes":633, "rmaxt": 0.79, "atual":0.17050000,"final":""},
{"cryp":"THETA", "sup":2.81200000, "res":13.20000000, "qualymes":633, "rmaxt": 0.74, "atual":2.83400000,"final":""},
{"cryp":"TKO", "sup":0.69800000, "res":0.72800000, "qualymes":333, "rmaxt": 0.1, "atual":0.70800000,"final":""},
{"cryp":"TLM", "sup":0.10240000, "res":0.10450000, "qualymes":36, "rmaxt": 0.1, "atual":0.10290000,"final":""},
{"cryp":"TOMO", "sup":1.09900000, "res":1.19900000, "qualymes":63, "rmaxt": 0.87, "atual":1.15100000,"final":""},
{"cryp":"TORN", "sup":20.05000000, "res":20.35000000, "qualymes":33, "rmaxt": 0.5, "atual":20.05000000,"final":""},
{"cryp":"TRB", "sup":18.73000000, "res":164.05000000, "qualymes":63, "rmaxt": 0.56, "atual":18.95000000,"final":""},
{"cryp":"TRIBE", "sup":0.65890000, "res":1.52090000, "qualymes":6, "rmaxt": 0.67, "atual":0.67800000,"final":""},
{"cryp":"TROY", "sup":0.00605200, "res":0.00616200, "qualymes":63, "rmaxt": 0.85, "atual":0.00609500,"final":""},
{"cryp":"TRU", "sup":0.18080000, "res":0.18680000, "qualymes":63, "rmaxt": 0.62, "atual":0.18290000,"final":""},
{"cryp":"TRX", "sup":0.05613000, "res":0.05677000, "qualymes":66, "rmaxt": 0.8, "atual":0.05632000,"final":""},
{"cryp":"TUSD", "sup":0.99950000, "res":0.99970000, "qualymes":636, "rmaxt": 0.82, "atual":0.99970000,"final":""},
{"cryp":"TVK", "sup":0.12040000, "res":0.12620000, "qualymes":33, "rmaxt": 0.17, "atual":0.12170000,"final":""},
{"cryp":"TWT", "sup":0.49550000, "res":0.51790000, "qualymes":63, "rmaxt": 0.69, "atual":0.50730000,"final":""},
{"cryp":"UMA", "sup":5.53000000, "res":23.39000000, "qualymes":333, "rmaxt": 0.35, "atual":5.56600000,"final":""},
{"cryp":"UNFI", "sup":4.77100000, "res":11.01300000, "qualymes":633, "rmaxt": 0.33, "atual":4.79200000,"final":""},
{"cryp":"UNI", "sup":9.98000000, "res":10.28000000, "qualymes":633, "rmaxt": 0.53, "atual":10.07000000,"final":""},
{"cryp":"USDP", "sup":0.99960000, "res":0.99970000, "qualymes":33, "rmaxt": 0.2, "atual":0.99970000,"final":""},
{"cryp":"USDC", "sup":0.99970000, "res":0.99980000, "qualymes":3333, "rmaxt": 0.08, "atual":0.99970000, "final":""},
{"cryp":"UST", "sup":0.98700000, "res":0.99550000, "qualymes":3, "rmaxt": 0.5, "atual":0.99450000,"final":""},
{"cryp":"UTK", "sup":0.22940000, "res":0.23350000, "qualymes":633, "rmaxt": 0.5, "atual":0.23060000,"final":""},
{"cryp":"VET", "sup":0.05103000, "res":0.05256000, "qualymes":63, "rmaxt": 0.79, "atual":0.05156000,"final":""},
{"cryp":"VGX", "sup":1.05000000, "res":5.81800000, "qualymes":3, "rmaxt": 0.33, "atual":1.72500000,"final":""},
{"cryp":"VIDT", "sup":0.40160000, "res":0.54450000, "qualymes":3, "rmaxt": 0.4, "atual":0.48430000,"final":""},
{"cryp":"VITE", "sup":0.04865000, "res":0.04995000, "qualymes":66, "rmaxt": 0.65, "atual":0.04931000,"final":""},
{"cryp":"VOXEL", "sup":0.20000000, "res":6.95000000, "qualymes":3, "rmaxt": 0.5, "atual":1.48850000,"final":""},
{"cryp":"VTHO", "sup":0.00353800, "res":0.00355000, "qualymes":633, "rmaxt": 0.53, "atual":0.00354900,"final":""},
{"cryp":"WAN", "sup":0.41650000, "res":0.42110000, "qualymes":633, "rmaxt": 0.7, "atual":0.41650000,"final":""},
{"cryp":"WAVES", "sup":9.38000000, "res":10.09000000, "qualymes":633, "rmaxt": 0.78, "atual":9.53000000,"final":""},
{"cryp":"WAXP", "sup":0.18520000, "res":0.98350000, "qualymes":6, "rmaxt": 0.67, "atual":0.29980000,"final":""},
{"cryp":"WIN", "sup":0.00029220, "res":0.00029690, "qualymes":63, "rmaxt": 0.7, "atual":0.00029580,"final":""},
{"cryp":"WING", "sup":9.01000000, "res":10.00000000, "qualymes":3333, "rmaxt": 0.06, "atual":9.01000000, "final":""},
{"cryp":"WNXM", "sup":34.98000000, "res":134.20000000, "qualymes":63, "rmaxt": 0.56, "atual":35.46000000,"final":""},
{"cryp":"WRX", "sup":0.77900000, "res":0.79400000, "qualymes":63, "rmaxt": 0.63, "atual":0.78800000,"final":""},
{"cryp":"WTC", "sup":0.47940000, "res":0.49080000, "qualymes":66, "rmaxt": 0.59, "atual":0.48580000,"final":""},
{"cryp":"XEM", "sup":0.09680000, "res":0.09750000, "qualymes":363, "rmaxt": 0.33, "atual":0.09720000,"final":""},
{"cryp":"XEC", "sup":0.00007083, "res":0.00007138, "qualymes":33, "rmaxt": 0.2, "atual":0.00007134,"final":""},
{"cryp":"XLM", "sup":0.19310000, "res":0.19650000, "qualymes":63, "rmaxt": 0.82, "atual":0.19530000,"final":""},
{"cryp":"XMR", "sup":25.08000000, "res":144.80000000, "qualymes":633, "rmaxt": 0.77, "atual":143.70000000,"final":""},
{"cryp":"XNO", "sup":2.12600000, "res":3.89000000, "qualymes":3, "rmaxt": 1, "atual":2.32900000,"final":""},
{"cryp":"XRP", "sup":0.59160000, "res":0.60310000, "qualymes":663, "rmaxt": 0.8, "atual":0.60140000,"final":""},
{"cryp":"XTZ", "sup":0.74990000, "res":9.17100000, "qualymes":6, "rmaxt": 0.9, "atual":2.93500000,"final":""},
{"cryp":"XVG", "sup":0.00964000, "res":0.00967000, "qualymes":33, "rmaxt": 0.13, "atual":0.00964000,"final":""},
{"cryp":"XVS", "sup":8.23000000, "res":147.63400000, "qualymes":633, "rmaxt": 0.5, "atual":8.31000000,"final":""},
{"cryp":"YFI", "sup":3000.00000000, "res":23130.89000000, "qualymes":636, "rmaxt": 0.56, "atual":22961.70000000,"final":""},
{"cryp":"YFII", "sup":970.00000000, "res":2251.00000000, "qualymes":363, "rmaxt": 0.06, "atual":2232.00000000,"final":""},
{"cryp":"YGG", "sup":2.64600000, "res":11.50000000, "qualymes":3, "rmaxt": 0.6, "atual":2.86800000,"final":""},
{"cryp":"ZEC", "sup":88.40000000, "res":149.90000000, "qualymes":63, "rmaxt": 0.77, "atual":90.00000000,"final":""},
{"cryp":"ZEN", "sup":5.06200000, "res":138.31000000, "qualymes":63, "rmaxt": 0.58, "atual":37.77000000,"final":""},
{"cryp":"ZIL", "sup":0.04391000, "res":0.04429000, "qualymes":633, "rmaxt": 0.78, "atual":0.04417000,"final":""},
{"cryp":"ZRX", "sup":0.51830000, "res":0.52920000, "qualymes":63, "rmaxt": 0.75, "atual":0.52730000,"final":""}
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
                document.getElementById(`sup_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].sup.toFixed(8)

                if(document.getElementById(`res_${lissuport[cc].cryp}`)){
                    document.getElementById(`res_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].res.toFixed(8)
                }
                if(document.getElementById(`qualymes_${lissuport[cc].cryp}`)){
                    document.getElementById(`qualymes_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].qualymes
                }
                if(document.getElementById(`rmaxtu_${lissuport[cc].cryp}`)){
                    document.getElementById(`rmaxtu_${lissuport[cc].cryp}`).innerHTML= lissuport[cc].rmaxt
                }

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