let moe =[
    /**/"1INCH","AAVE","ACA","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
    "ALPINE","AMP","ANC","ANKR","ANT","ANY","APE","API3","AR","ARDR","ARPA","ASR","ASTR","ATA","ATM","ATOM","AUCTION","AUD","AUDIO",
    "AUTO","AVA","AVAX","AXS","BADGER","BAKE","BAL","BAND","BAR","BAT","BCH","BEAM","BEL","BETA","BICO","BIFI","BLZ",
    "BNB","BNT","BNX","BOND","BSW","BTC","BTCST","BTG","BTS","BTT","BTTC","BURGER", "BUSD","C98","CAKE","CELO","CELR",
    "CFX","CHESS","CHR","CHZ","CITY","CKB","CLV","COCOS","COMP","COS","COTI","CRV","CTK","CTSI","CTXC","CVC","CVP",
    "CVX","DAR","DASH","DATA","DCR","DEGO","DENT","DEXE","DF","DGB","DIA","DNT","DOCK","DODO","DOGE","DOT","DREP",
    "DUSK","DYDX","EGLD","ELF","ENJ","ENS","EOS","EPS","EPX","ERN","ETC","ETH","EUR","FARM","FET","FIDA","FIL","FIO","FIRO",
    "FIS","FLM","FLOW","FLUX","FOR","FORTH","FRONT","FTM","FTT","FUN","FXS","GAL","GALA","GBP","GHST","GLMR","GMT","GNO","GRT","GTC",
    "GTO","GXS","HARD","HBAR","HIGH","HIVE","HNT","HOT","ICP","ICX","IDEX","ILV","IMX","INJ","IOST","IOTA","IOTX","IRIS",
    "JASMY","JOE","JST","JUV","KAVA","KDA","KEEP","KEY","KLAY","KMD","KNC","KP3R","KSM","LAZIO","LDO","LEVER","LINA","LINK","LIT","LOKA","LPT",
    "LRC","LSK","LTC","LTO","LUNA","MANA","MASK","MATIC","MBL","MBOX","MC","MDT","MDX","MFT","MINA","MIR","MITH","MKR","MLN","MOB",
    "MOVR","MTL","MULTI","NANO","NBS","NBT","NEAR","NEO","NEXO","NKN","NMR","NU","NULS","OCEAN","OG","OGN","OM","OMG","ONE","ONG","ONT","OOKI","OP","ORN",
    "OXT","PAXG","PEOPLE","PERL","PERP","PHA","PLA","PNT","POLS","POLY","POND","PORTO","POWR","PSG","PUNDIX","PYR","QI","QNT",
    "QTUM","QUICK","RAD","RAMP","RARE","RAY","REEF","REI","REN","REP","REQ","RGT","RIF","RLC","RNDR","ROSE","RSR","RUNE","RVN","SAND",
    "SANTOS","SC","SCRT","SFP","SHIB","SKL","SLP","SNX","SOL","SPELL","SRM","STEEM","STG","STMX","STORJ","STPT","STRAX","STX","SUN","SUPER",
    "SUSD","SUSHI","SXP","SYS","T","TCT","TFUEL","THETA","TKO","TLM","TOMO","TORN","TRB","TRIBE","TROY","TRU","TRX","TUSD","TVK",
    "TWT","UMA","UNFI","UNI","USDC","USDP","UST","UTK","VET","VGX","VIDT","VITE","VOXEL","VTHO","WAN","WAVES","WAXP","WIN","WING",
    "WNXM","WOO","WRX","WTC","XEC","XEM","XLM","XMR","XNO","XRP","XTZ","XVG","XVS","YFI","YFII","YGG","ZEC","ZEN","ZIL","ZRX"
    ]

let cc=''
let symb=''
let symbol=''
let timeout=''
let interv=''

let volume=''

let psubir=0
let pcair=0
let total=0
let difer=0
let relac=0
let relac2=0
let soma=0
let subt=0
let cont=0
let result2=''

setInterval(() => {
    for(cc=0;cc<=moe.length-1;cc++){
        relatrade(moe,cc)
    }  
}, 120000);

/*
setTimeout(() => {
    for(cc=0;cc<=moe.length-1;cc++){
        relatrade(moe,cc)
    }
}, 5000);
*/
    



function relatrade(moe,cc){

        symb=moe[cc]
        symbol=symb+'USDT'
        interv=60000
        let date = new Date();
        let agora=date.getTime()
        let endTime=agora
        let startTime=  parseInt(endTime-interv)
        let limit =1000
    
        let curl =' https://api.binance.com';
        let quer = `/api/v3/aggTrades?symbol=${symbol}&startTime=${startTime}&endTime=${endTime}&limit=${limit}` //&interval=15m'; //'/vapi/v1/ping';
        //query +='';
        let urul = curl+quer;
        let ourRequest = new XMLHttpRequest();
        ourRequest.open('GET',urul,true);
        ourRequest.onload = function(){
            let result = ourRequest.responseText
            result2= JSON.parse(result)
            //console.log(result2)
            enviando(result2, moe, cc)

        }

        ourRequest.send();
        //ourRequest.abort();
}


function enviando(result2, moe, cc){
    //console.log(`${cc}-${moe[cc]} foram ${result2.length} trades`)
    for(let i =0;i<=result2.length-1;i++){
        //console.log(`a é ${result2[i].a}  p é ${result2[i].p}  q é ${result2[i].q}   f é ${result2[i].f}  l é ${result2[i].l}  T é ${result2[i].T} m é ${result2[i].m} M é ${result2[i].M}`)
        cont+=1
        //console.log(`Trade ${i+1}:`)
        if(result2[i].m===true){
            //console.log('Fudeu')
            subt+=1
            pcair+=parseFloat(result2[i].p*result2[i].q)
            //console.log(parseFloat(result2[i].p*result2[i].q))
        }else{
            //console.log('Beleza')
            soma+=1
            psubir+=parseFloat(result2[i].p*result2[i].q)
            //console.log(parseFloat(result2[i].p*result2[i].q))
        }
    }
    difer= parseFloat(psubir-pcair).toFixed(2)
    total= parseFloat(psubir+pcair).toFixed(2)
    //impedindo infinity se pcair e compr for ===0
    if(parseFloat(pcair)===0){
        relac=2
    }else{
        relac= parseFloat(psubir/pcair).toFixed(2)
    }

    if(parseInt(subt)===0){
        relac2=2
    }else{
        relac2= parseFloat(soma/subt).toFixed(2)
    }
    
    
    volume=0

    if(Math.sign(difer)===1){
        
        //console.log('volume > vendedor! Vai Subir?!')
        volume= 1//'vendedor'
        //console.log('Total '+total)
        //console.log('Difer positiva '+difer)
    }else if(Math.sign(difer)===-1){
        //console.log('volume >  comprador! Vai Cair?')
        volume= -1 //'comprador'
        //console.log('Total '+total)
        //console.log('Difer negativa '+difer)

    }else if(Math.sign(difer)===0){
        //console.log('empatou')
        //console.log('Total '+total)
        //console.log('Difer '+difer)

    }

    if(relac>1){
        //console.log('Relação volume positiva')
        //console.log(relac)
    }else{
        if(relac<1){
            //console.log('Relação volume negativa')
            //console.log(relac)
        }else{
            //console.log('Relação volume neutra')
            //console.log(relac)
        }
    }

    if(relac2>1){
        //console.log('Relação quant positiva')
        //console.log(relac2)
    }else{
        if(relac2<1){
            //console.log('Relação quant negativa')
            //console.log(relac2)
        }else{
            //console.log('Relação quant neutra')
            //console.log(relac2)
        }
    }

    
    


    //json = JSON.parse(res);
    //console.log(`{"crip": "${moe[cc]}", "vol":${volume}, "total":${parseFloat(total/1000).toFixed(3)}, "difer": ${difer}, "relvol": ${relac}, "relqut": ${relac2}, "vend": ${soma}, "compr": ${subt},"trades": ${cont}},`)
    
    //{"crip": "ZRX", "vol":1, "total":0.456, "difer": 219.15, "relvol": 2.85, "relqut": 4.00, "vend": 4, "compr": 1,"trades": 5}
    
    if(document.getElementById(`favor_${moe[cc]}`)){
        document.getElementById(`favor_${moe[cc]}`).innerHTML= volume
    }
    if(document.getElementById(`volmom_${moe[cc]}`)){
        document.getElementById(`volmom_${moe[cc]}`).innerHTML= parseFloat(total/1000).toFixed(3)
    }
    if(document.getElementById(`relvolmom_${moe[cc]}`)){
        document.getElementById(`relvolmom_${moe[cc]}`).innerHTML= relac
    }
    if(document.getElementById(`reltrade_${moe[cc]}`)){
        document.getElementById(`reltrade_${moe[cc]}`).innerHTML= relac2
    }
    if(document.getElementById(`trades_${moe[cc]}`)){
        let rodt= document.getElementById(`trades_${moe[cc]}`).innerHTML
        let rodt2=document.getElementById(`trades2_${moe[cc]}`).innerHTML
        let rodt3=document.getElementById(`trades3_${moe[cc]}`).innerHTML
        let totrad= document.getElementById(`totrades_${moe[cc]}`).innerHTML
        let novotot= parseInt(totrad)+parseInt(cont)
        //let rodt4=document.getElementById(`trades4_${moe[cc]}`).innerHTML
        document.getElementById(`trades2_${moe[cc]}`).innerHTML=rodt
        document.getElementById(`trades3_${moe[cc]}`).innerHTML=rodt2
        document.getElementById(`trades4_${moe[cc]}`).innerHTML=rodt3
        document.getElementById(`totrades_${moe[cc]}`).innerHTML=novotot
        document.getElementById(`trades_${moe[cc]}`).innerHTML= cont
    }

    volume=''
    psubir=0
    pcair=0
    total=0
    difer=0
    relac=0
    relac2=0
    soma=0
    subt=0
    cont=0
    result2=''






}
