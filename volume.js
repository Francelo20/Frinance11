const api=require('./api');

/*

*/
let moe =[

    "1INCH","AAVE","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
    "AMP","ANKR","ANT","ANY","API3","AR","ARDR","ARPA","ASR","ATA","ATM","ATOM","AUCTION","AUD","AUDIO","AUTO",
    "AVA",
    "AVAX","AXS","BADGER","BAKE","BAL","BAND","BAR","BAT","BCH","BEAM","BEL","BETA","BICO","BLZ","BNB","BNT","BNX",
    "BOND","BTC","BTCST","BTG","BTS","BTT","BTTC","BURGER", "BUSD","C98","CAKE","CELO","CELR","CFX","CHESS","CHR","CHZ","CITY","CKB",
    "CLV","COCOS","COMP","COS","COTI","CRV","CTK","CTSI","CTXC","CVC","CVP","CVX","DAR","DASH","DATA","DCR","DEGO","DENT",
    "DEXE","DF","DGB","DIA","DNT","DOCK","DODO","DOGE","DOT","DREP","DUSK","DYDX","EGLD","ELF","ENJ","ENS","EOS","EPS",
    "ERN","ETC","ETH","EUR","FARM","FET","FIDA","FIL","FIO","FIRO","FIS","FLM","FLOW","FLUX","FOR","FORTH","FRONT","FTM","FTT",
    "FUN","FXS","GALA",
    "GBP","GHST","GLMR","GNO","GRT","GTC","GTO","GXS","HARD","HBAR","HIGH","HIVE","HNT","HOT","ICP",
    "ICX","IDEX","ILV","IMX","INJ","IOST","IOTA","IOTX","IRIS","JASMY","JOE","JST","JUV","KAVA","KEEP","KEY","KLAY","KMD","KNC",
    "KP3R","KSM","LAZIO","LINA","LINK","LIT","LOKA","LPT","LRC","LSK","LTC","LTO","LUNA","MANA","MASK","MATIC","MBL","MBOX","MC","MDT","MDX","MFT",
    "MINA","MIR","MITH","MKR","MLN","MOVR","MTL","NANO","NBS","NEAR","NEO","NKN","NMR","NU","NULS","OCEAN","OG","OGN","OM","OMG","ONE",
    "ONG","ONT","OOKI","ORN","OXT","PAXG","PEOPLE","PERL","PERP","PHA","PLA","PNT","POLS","POLY","POND","PORTO","POWR","PSG","PUNDIX",
    "PYR","QI","QNT","QTUM","QUICK","RAD","RAMP","RARE","RAY","REEF","REN","REP","REQ","RGT","RIF","RLC","RNDR","ROSE","RSR",
    "RUNE","RVN","SAND","SANTOS","SC","SCRT","SFP","SHIB","SKL","SLP","SNX","SOL","SPELL","SRM","STMX","STORJ","STPT","STRAX","STX","SUN","SUPER","SUSD",
    "SUSHI","SXP","SYS","TCT","TFUEL","THETA","TKO","TLM","TOMO","TORN","TRB","TRIBE","TROY","TRU","TRX","TUSD","TVK","TWT","UMA","UNFI","UNI",
    "USDC","USDP","UST","UTK","VET","VGX","VIDT","VITE","VOXEL","VTHO","WAN","WAVES","WAXP","WIN","WING","WNXM","WRX","WTC",
    "XEC","XEM","XLM","XMR","XRP","XTZ","XVG","XVS","YFI","YFII","YGG","ZEC","ZEN","ZIL","ZRX"

]

let limit=1
let interv=120000
//let interval='1h'
chamar()
//PARA PRODUZIR GELO  HORAS
async function chamar(){
    for(let i =0; i<=moe.length-1;i++){
        let symb=moe[i]
        let symbol=symb+'USDT'
        let result = await api.trades(symbol, limit);
        //console.log(result)
        //console.log(result);
        agora= result[0].time
        endTime=agora
        
        startTime=  parseInt(endTime-interv)
        //console.log(agora)    
        //console.log('simbolooo '+symbol)
        rechamar(symb,startTime,endTime,limit)
        
        
        
    }
    //console.log(` Há ${quant} ${interval} Open: ${result[i][1]} High: ${result[i][2]}  Low-${result[i][3]} Close-${result[i][4]} `);
}

async function rechamar(symb,startTime,endTime,limit){
    let symbol=symb+'USDT'
    limit=1000
    //console.log(`trades ${symbol} De ${startTime} até ${endTime}`)
    let result2 = await api.aggTradesDate(symbol,startTime,endTime,limit)
    //console.log(result2)
    //console.log(`Foram ${result2.length} trades`)

    let psubir=0
    let pcair=0
    let total=0
    let difer=0
    let relac=0
    let relac2=0
    let soma=0
    let subt=0
    let cont=0
    for(let i =0;i<=result2.length-1;i++){
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
    
    
    let volume=0
    
    //console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')
    //console.log('Symbol '+symbol)

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


    //let json={'symb':symbol, 'vol':'', 'tot': total, 'difer': difer, 'relvol':relac, 'relqut':relac2, 'trades':0, 'vendedor':0,'comprador':0 }
    







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


    console.log(`{"crip": "${symb}", "vol":${volume}, "total":${parseFloat(total/1000).toFixed(3)}, "difer": ${difer}, "relvol": ${relac}, "relqut": ${relac2}, "vend": ${soma}, "compr": ${subt},"trades": ${cont}},`)
    //console.log(cont+' trades')
    //console.log(`vendedor ${soma} X ${subt} comprador`)
    


}