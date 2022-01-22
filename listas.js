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
    {"cryp":"ACH", "sup":[0.04207000,0.04014000,0.03924000], "qualymes":[3], "rmaxt": 1},
    {"cryp":"ADA", "sup":[1.16700000,1.16400000,1.06900000,0.01765000], "qualymes":[6,3], "rmaxt": 0.91},  //1.17600000,
    {"cryp":"API3", "sup":[5.19700000,4.82300000,4.05200000], "qualymes":[3], "rmaxt": 1},  //5.50900000,5.46700000,5.40000000,
    {"cryp":"BETA", "sup":[0.56680000,0.55400000,0.47461000,0.41057000,0.06001000], "qualymes":[3,3], "rmaxt": 0.25},
    {"cryp":"BTC", "sup":[36136.66000000,35656.05000000,35440.45000000,2817.00000000], "qualymes":[6], "rmaxt": 0.96},  //
    {"cryp":"DOGE", "sup":[0.13680000,0.13100000,0.00113450], "qualymes":[6,3,3,3,3], "rmaxt": 0.74}, //0.14660000,
    {"cryp":"ETH", "sup":[86.00000000,81.79000000], "qualymes":[6], "rmaxt": 0.96},    //2660.00000000,
    {"cryp":"GLMR", "sup":[8.57930000,8.51100000,8.50000000,8.36330000,8.32330000,0.25000000], "qualymes":[3], "rmaxt": 1},
    {"cryp":"IMX", "sup":[2.80900000,2.64300000], "qualymes":[3], "rmaxt": 1},
    {"cryp":"IOTA", "sup":[0.85040000,0.83700000,0.83520000,0.57380000,0.05340000], "qualymes":[6,3,6,3], "rmaxt": 0.8},
    {"cryp":"JOE", "sup":[0.97100000,0.96400000], "qualymes":[3], "rmaxt": 0.5},   //0.98800000,
    {"cryp":"KAVA", "sup":[3.88800000,3.85200000,3.78100000,3.08100000,0.24030000], "qualymes":[6,3,3,3], "rmaxt": 0.82}, //4.01800000,
    {"cryp":"LOKA", "sup":[1.80020000,1.80000000,1.79400000,0.16000000], "qualymes":[3], "rmaxt": 1},
    {"cryp":"NEO", "sup":[3.89000000,19.75000000,19.63000000,19.21000000], "qualymes":[3,3,6,3,3], "rmaxt": 0.06},//
    {"cryp":"QTUM", "sup":[6.03600000,5.98700000,4.43900000,0.71000000], "qualymes":[6,6], "rmaxt": 0.83},
    {"cryp":"SPELL", "sup":[0.00914000,0.00898000,0.00892000], "qualymes":[3], "rmaxt": 0.5},
    {"cryp":"USDC", "sup":[0.99980000,0.99970000,0.99960000,0.99920000,0.20000000], "qualymes":[3,3,3,3,3,3,3,3], "rmaxt": 0.08},//
    {"cryp":"XTZ", "sup":[3.28800000,3.25800000,3.22600000,0.95000000,0.74990000], "qualymes":[6,3], "rmaxt": 0.9}  //3.35200000,

    

]


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
