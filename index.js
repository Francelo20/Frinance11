const api=require('./api');
//const symbol = process.env.SYMBOL;
const profitability = parseFloat(process.env.PROFITABILITY);
const coin = process.env.COIN;
const goodBuy = process.env.GOOD_BUY;
const goodSell = process.env.GOOD_SELL;
//const limite =process.env.LIMIT_CANDLE

//let interval= ''
//let symbol='MITHUSDT'
let limit=250

//entsymb('NEO')

let listcoin=[
/**/"1INCH","AAVE","ACA","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
    "ALPINE","AMP","ANC","ANKR","ANT","ANY","API3","AR","ARDR","ARPA","ASR","ATA","ATM","ATOM","AUCTION","AUD","AUDIO",
    "AUTO","AVA","AVAX","AXS","BADGER","BAKE","BAL","BAND","BAR","BAT","BCH","BEAM","BEL","BETA","BICO","BLZ",
    "BNB","BNT","BNX","BOND","BTC","BTCST","BTG","BTS","BTT","BTTC","BURGER", "BUSD","C98","CAKE","CELO","CELR",
    "CFX","CHESS","CHR","CHZ","CITY","CKB","CLV","COCOS","COMP","COS","COTI","CRV","CTK","CTSI","CTXC","CVC","CVP",
    "CVX","DAR","DASH","DATA","DCR","DEGO","DENT","DEXE","DF","DGB","DIA","DNT","DOCK","DODO","DOGE","DOT","DREP",
    "DUSK","DYDX","EGLD","ELF","ENJ","ENS","EOS","EPS","ERN","ETC","ETH","EUR","FARM","FET","FIDA","FIL","FIO","FIRO",
    "FIS","FLM","FLOW","FLUX","FOR","FORTH","FRONT","FTM","FTT","FUN","FXS","GALA","GBP","GHST","GLMR","GNO","GRT","GTC",
    "GTO","GXS","HARD","HBAR","HIGH","HIVE","HNT","HOT","ICP","ICX","IDEX","ILV","IMX","INJ","IOST","IOTA","IOTX","IRIS",
    "JASMY","JOE","JST","JUV","KAVA","KEEP","KEY","KLAY","KMD","KNC","KP3R","KSM","LAZIO","LINA","LINK","LIT","LOKA","LPT",
    "LRC","LSK","LTC","LTO","LUNA","MANA","MASK","MATIC","MBL","MBOX","MC","MDT","MDX","MFT","MINA","MIR","MITH","MKR","MLN",
    "MOVR","MTL","NANO","NBS","NEAR","NEO","NKN","NMR","NU","NULS","OCEAN","OG","OGN","OM","OMG","ONE","ONG","ONT","OOKI","ORN",
    "OXT","PAXG","PEOPLE","PERL","PERP","PHA","PLA","PNT","POLS","POLY","POND","PORTO","POWR","PSG","PUNDIX","PYR","QI","QNT",
    "QTUM","QUICK","RAD","RAMP","RARE","RAY","REEF","REN","REP","REQ","RGT","RIF","RLC","RNDR","ROSE","RSR","RUNE","RVN","SAND",
    "SANTOS","SC","SCRT","SFP","SHIB","SKL","SLP","SNX","SOL","SPELL","SRM","STMX","STORJ","STPT","STRAX","STX","SUN","SUPER",
    "SUSD","SUSHI","SXP","SYS","TCT","TFUEL","THETA","TKO","TLM","TOMO","TORN","TRB","TRIBE","TROY","TRU","TRX","TUSD","TVK",
    "TWT","UMA","UNFI","UNI","USDC","USDP","UST","UTK","VET","VGX","VIDT","VITE","VOXEL","VTHO","WAN","WAVES","WAXP","WIN","WING",
    "WNXM","WOO","WRX","WTC","XEC","XEM","XLM","XMR","XNO","XRP","XTZ","XVG","XVS","YFI","YFII","YGG","ZEC","ZEN","ZIL","ZRX"
]


let cc=0

/*

for(cc=0;cc<=listcoin.length-1;cc++){
    entsymb(listcoin[cc])
}
*/
let interv=500
setInterval(() => {

    if(cc<=listcoin.length-1){
        entsymb(listcoin[cc])
        cc++
    }else{
        clearInterval(interv)
    }
    
},interv);







//entsymb('JOE')
function entsymb(symboll){

    let symbol=symboll+'USDT'

    let listart=["1M","1w", "1d", "4h", "1h", "15m", "5m", "1m"] // INTERVAL P LOOP  ]// ["1M","1w", "1d", "4h", "1h", "15m", "5m", "1m"]

    let list=[]//{"mes":15, "val":0},{"mes":15, "val":500000},{"mes":15, "val":0}] // 0 -max 1 -min 2-atual

    let colec=[{"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":""}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0},{"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}, {"int":"","rod":0, "val":"", "max":[],"min":[], "rmaxt":"", "rmini":0}]// pontos p cada cry

    let rmaxvai=''
    colec[8].val= symbol

    for(let cont=0; cont<=listart.length-1; cont++){
        //console.log(`${listart[cont]}`)
        
        async function chamar(limit){
            colec[cont].rod++
            colec[8].rod ++ // colec[8].rod +colec[cont].rod
            
            
            let interval = listart[cont]
            colec[cont].int = interval
            //blookconsole.log(`Rodada Geral ${colec[8].rod}.  Interv. ${colec[cont].int}. ${colec[cont].rod}ª rod. ${limit} velas`)
            //blookconsole.log(`intervalo: ${interval}`)
            //console.log(`cont +1 ${cont+1}`)
            
            


            let result= await api.candle(symbol,interval,limit);
            let m50=0
            let m200=0
            let m50qua=0
            let m200qua=0

            aplica(limit)

            function aplica(limit){
                let ii = ''
                //encontrando a primeira rodada. p i=0. Depois, i=...
                //Math.sign(parseInt(result.length-limit))>=0){//parseInt(colec[cont].rod)===0){//Math.sign(parseInt(result.length-limit))===-1){
                if(parseInt(result.length)> parseInt(limit)){   
                    ii=result.length-limit
                }else{
                    ii = 0
                }
                //console.log(ii)
                

                
                //console.log('result.length '+result.length);
                list=[{"mes":15, "val":0},{"mes":15, "val":500000},{"mes":15, "val":0}]
                
                let i=''
                //console.log(result.length)
                for(i=ii; i<=result.length-1;i++){
                    let quant= (result.length-1)-i
                    //console.log(` Há ${quant} mes Open: ${result[i][1]} High: ${result[i][2]}  Low-${result[i][3]} Close-${result[i][4]} `);

                    //usando open ou close para marcar max e min, sup e res
                    //se open maior qu close, quem vi p max e min, sup e res
                    if(parseFloat(result[i][1])> parseFloat(result[i][4])){

                            if(parseFloat(result[i][1])> parseFloat(list[0].val)){
                                list[0].val=result[i][1]
                                list[0].mes=quant
                            }
                            if(parseFloat(result[i][4])<parseFloat(list[1].val)){
                                list[1].val=result[i][4]
                                list[1].mes=quant
                            }
                            //se close maior que open,  quem vi p max e min, sup e res
                    }else if(parseFloat(result[i][1])<= parseFloat(result[i][4])){

                            if(parseFloat(result[i][4])> parseFloat(list[0].val)){
                                list[0].val=result[i][4]
                                list[0].mes=quant   
                            }
                            if(parseFloat(result[i][1])<parseFloat(list[1].val)){
                                list[1].val=result[i][1]
                                list[1].mes=quant
                            }

                    }else{
                        console.log('caiu no else')
                    }

                    /*
                    if(parseFloat(result[i][1])>= parseFloat(list[0].val)){
                        list[0].val=result[i][1]
                        list[0].mes=quant
                        
                    }

                    if(parseFloat(result[i][3])<=parseFloat(list[1].val)){
                        list[1].val=result[i][3]
                        list[1].mes=quant
                    }
                    */
                    if(quant<1){
                        list[2].val=result[i][4]
                        list[2].mes=quant
                
                    }

                    //aqui vai o m50 e m200
                    if(interval==='1m'){
                        //console.log('interv 1m')

                        if(parseInt(ii)===0){
                            //console.log('ii===0')
                            if(parseInt(result.length)>=50){
                                if(quant<=49){
                                    //console.log(`quant50 = ${quant}`)
                                    m50qua+= parseFloat(result[i][4])
                                    m50= parseFloat(m50qua/50).toFixed(8)
                                }
                            }else{
                                m50=50
                            }

                            if(parseInt(result.length)>=200){

                                if(quant<=199){
                                    //console.log(`quant200 = ${quant}`)

                                    m200qua+= parseFloat(result[i][4])
                                    m200= parseFloat(m200qua/200).toFixed(8)
    
                                    //console.log(`m200qua = ${m200qua}`)
                                    //console.log(`m200 = ${m200}`)
                                }

                            }else{
                                m200=200
                            }

                        }
                        
                    }


                    
                }

                //puxhando max e min p listar nos intervalos. criando sup e res nos intervalos

               

                colec[cont].max.push(list[0].val)
                colec[cont].min.push(list[1].val)



                //puxando max e min p lista geral [8]max e [8].min
                //incluindo sup e res só dos intervalos 1m e 5m
                if(cont===7 || cont===6){
                    if(!colec[8].max.includes(list[0].val)){
                        colec[8].max.push(list[0].val)
                    }
                    if(!colec[8].min.includes(list[1].val)){
                        colec[8].min.push(list[1].val)
                    }
                }
                



                //Relacao Maximo Todo e Minimo Inicio
                let rlcmxtd= parseFloat((i-list[0].mes)/i).toFixed(2)    //relação Máximo Todo
                let rlcmnin= parseFloat(list[1].mes/i).toFixed(2)//relação Mínimo-Início
                if(parseInt(colec[cont].rod)<=1){
                    colec[cont].rmaxt=parseFloat(rlcmxtd)
                    colec[cont].rmini=parseFloat(rlcmnin)
                    //blookconsole.log(`OK SETANDO rmaxt = ${colec[cont].rmaxt} MES NO intervalo 1M ${colec[cont].int} rodada 0-1 ${colec[cont].rod}`)
                }
            
                let quedamamMat = parseFloat((list[0].val-list[2].val)/list[0].val).toFixed(2)   //%- minimo antes do maximo, perda % do max ao atual (M-A/M)
                let falpresamdm=  parseFloat((list[0].val-list[2].val)/list[2].val).toFixed(2)   //minimo depois do maximo, quanto % falta p atingir resistencia= (M-A)/A 
                let falpsup=(list[2].val-list[1].val)   //USDT quanto falta p atingir o mínimo, se voltar a cair (A-m)
                let falpsupper= parseFloat(falpsup/list[2].val).toFixed(2) // % que perde se voltar a cair (A-m/A)
                let alta=  parseFloat((list[2].val-list[1].val)/list[1].val).toFixed(2)    //quanto % subiu desde que caiu do maximo p o minimo e recuperou (A-m/m)
                let perMmper=  parseFloat((list[0].val-list[1].val)/list[0].val).toFixed(2)   //perda do max ao min em % desde iniciar queda , do max ao min, com min depois do max
                let quedmdmMm=  parseFloat((list[0].val-list[1].val)/list[0].val).toFixed(2)  //min depois do max. quanto% caiu de M ao m...e recuperou (M-m/M)
            
                            //max >atual
                if(parseFloat(list[0].val)>parseFloat(list[2].val)){ //só caindo curvou p baixo ou parou de só subir...caindo
                    
                    if(list[1].mes>list[0].mes){ //mínimo antes do maximo.  (II)
                        colec[cont].val=colec[cont].val+'6' //.push(6) 
                        //blookconsole.log(`-->PAROU DE SUBIR, EM QUEDA HÁ ${list[0].mes} ${colec[cont].int} (6 pontos)<--`)
                        //blookconsole.log(`Em queda de ${list[0].val-list[2].val} USDT (${(quedamamMat*100).toFixed(2)}%) desde então`) 
                        //blookconsole.log(`Antes o mínimo foi ${list[1].val} USDT há ${list[1].mes} meses`)
                        //blookconsole.log(`Falta cair ${falpsup.toFixed(8)} USDT (${falpsupper*100}%) para atingir o pior mínimo que teve em ${i} ${colec[cont].int} `)
                    }else{ //mínimo depois do maximo
                        if(parseFloat(list[1].val)<parseFloat(list[2].val)){ // min < atual ? (III)
                            colec[cont].val=colec[cont].val+'3'//.push(3)
                            //blookconsole.log(`--> RECUPERANDO APÓS QUEDA (3 pontos) <--`) //teve buraco, min<attual
                            //blookconsole.log(` Há ${list[0].mes} ${colec[cont].int}, perdeu  ${perMmper*100}% por ${list[0].mes-list[1].mes} ${colec[cont].int},`) //Ha x meses, perdeu x% por n meses
                            //blookconsole.log(`Subindo ${alta*100}% há ${list[1].mes} ${colec[cont].int} desde que atingiu o min de ${list[1].val} USDT`)// quanto % subiu ha quanto tempo desde queda
                            //blookconsole.log(`Se subir ${list[0].val-list[2].val} USDT (${falpresamdm*100}%) atinge o máximo`) // quanto falta USDT (%) p resistencia
                        //blook console.log(`Se voltar a cair ${falpsup} USDT (${falpsupper*100}%) reatinge o mínimo`) // voltar a cair ...USDT (%) p minimo
            
                        }else if(parseFloat(list[1].val)>parseFloat(list[2].val)){ //min > atual so caindo  (I)
                            colec[cont].val=colec[cont].val+'1'//.push(1)
                        //blook console.log(`--> SÓ CAINDO HÁ ${list[0].mes} ${colec[cont].int} (1 ponto)<--`) // não teve buraco, min >=atual
                            //blookconsole.log(`Precisa subir ${falpresamdm*100}% para atingir o máximo`)// quantos % do atual p atingir o max se subir (M-A/A)
                        }else{ //  min === atual lateralizado
                            //blookconsole.log(`--> PAROU DE CAIR (2 pontos)<--`) //(IV)
                            colec[cont].val=colec[cont].val+'2' //.push(2)
                        }
            
                    }
                }else if(parseFloat(list[0].val)<parseFloat(list[2].val)){ //max<atual,  só subindo, parou de subir mas nao curvou p baixo, caiu mas recuperou muuuito- atual > max
            
                    if(list[1].mes>list[0].mes){// se o minimo é mais anterior mais antigo o maximo (V)
                        colec[cont].val=colec[cont].val+'8' //.push(8)
                            //blookconsole.log(`--> SÓ SUBINDO ou RECUPEROU DE QUEDA COM LOUVOR 4 (SEM TOCAR O MÍNIMO) (8 pontos) <--`)
                        //blook console.log(`Mínimo há ${list[1].mes} meses.`)
                        //blook console.log(`Subiu ${alta}%  desde este mínimo`) //quanto subiu (A-m/m)
                        
                    }else{//se o minimo é posterior ao max - mais recente que o maximo (VI)
                        colec[cont].val=colec[cont].val+'5' //.push(5)
                    //blook console.log(`--> RECUPERADA DE QUEDA COM LOUVOR 2, atual>max (5 pontos) <--`)
                    //blook  console.log(`Caiu ${list[0].val-list[1].val} USDT (${quedmdmMm*100}%) por ${list[0].mes -list[1].mes} ${colec[cont].int}`) //% - caiu M-m USDT (M-m/M)% por n meses
                    //blook console.log(`Recuperando ${alta}% há ${list[1].mes-list[2].mes} ${colec[cont].int}`)//recuperando % (A-m/m) ha n meses
                    }
                }else if(parseFloat(list[0].val)===parseFloat(list[2].val)){
                        if(list[1].mes>list[0].mes){ // atual=max,
                            // se o minimo é mais anterior mais antigo o maximo  , com atual ===max  (VII)
                            colec[cont].val=colec[cont].val+'7' //.push(7)
                                    //blook console.log(`--> SÓ SUBINDO COM LOUVOR 3 (min antes do maximo e do atual)(7 pontos) <--`)
                                    //blook console.log(`Mínimo há ${list[1].mes} ${colec[cont].int}.`)
                                    //blook console.log(`"Subindo" ${alta}%  desde este mínimo`) //quanto subiu (A-m/m)
                                    
                        }else{//se o minimo é posterior ao max - mais recente que o maximo ,  com atual ===max  (VIII)
                            colec[cont].val=colec[cont].val+'4' //.push(4)
                                //blook  console.log(`--> RECUPERANDO DE QUEDA COM LOUVOR 1,atual=max (4 pontos) <--`)
                                //blook console.log(`Caiu ${list[0].val-list[1].val} USDT (${quedmdmMm*100}%) por ${list[0].mes -list[1].mes} ${colec[cont].int}`) //% - caiu M-m USDT (M-m/M)% por n meses
                                //blook  console.log(`"Recuperando" ${alta}% há ${list[1].mes-list[2].mes} ${colec[cont].int}`)//recuperando % (A-m/m) há n meses
                        }
                }else{
                    //colec[cont].val.push(0)
                    console.log('sera aqui o vazio?')
                }
                    
                    
                //console.log('...........................')

                //criando suporte e resistencia a partir do '1m' - colec[7]
                //enviando sup e res do [8], mas antes tem if p [8] puxar só de cont===0 [1M]e 6[5m]
                let tentsort = colec[8].min.sort()
                tentsort =colec[8].min.reverse()
                tentsort=colec[8].min// emvez de pegar o primeiro suporte 0 vou pegar o segundo [1]
                /*
                let tentresis= colec[7].max.sort()
                tentresis=colec[7].max[0]
                */
                let tentresis= colec[8].max.sort()
                
                //tentresis=colec[7].max
                
                //qualymes h[3]
                
                
                limit =parseInt(list[0].mes-2) // -1 tirando 1 ou 2 do Maximo p proxima chamada
                if(parseInt(limit)>=2){        // >=2 chegando a chamada até num minimo de velas
                    aplica(limit)
                }else{
                    
                    
                //blook console.log(`ÚLTIMA RODADA do interv. ${colec[cont].int}`)
                    //colec[cont].val = parseFloat(colec[cont].val/colec[cont].rod).toFixed(1)
                    //colec[cont].tot = soma dos colec[cont].val/colec[cont].rod
                //blook  console.log('..............................................')
                
                //blook console.log(`Crypto: ${colec[8].val}  Intervalos:${listart.length}  Rodadas:${colec[8].rod} Atual: ${list[2].val}`)

                    if(parseInt(cont)===7){ //interval==='1M' estava assim. troquie p pegar na ultima rodada 1m, cont=7
                        
                        //sup e res vindo de 1m. qualymes vindo de 1m [7]. rmaxt vindo de 1m -> 1M [0] -> [7]
                        let qualyhora;
                        if( parseInt(colec[7].val.length)<=4){
                            qualyhora=colec[7].val
                        }else{
                            qualyhora=colec[7].val.slice(-5,-1)
                        }

                        let newres=colec[7].max.slice()
                        
                        
                        if(colec[0].rmaxt){
                            
                            //console.log('0--'+colec[0].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else if(colec[1].rmaxt){
                            //console.log('1--'+colec[1].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[1].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else if(colec[2].rmaxt){
                            //console.log('2--'+colec[2].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[2].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else  if(colec[3].rmaxt){
                            //console.log('3--'+colec[3].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[3].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else  if(colec[4].rmaxt){
                            //console.log('4--'+colec[4].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[4].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else  if(colec[5].rmaxt){
                            //console.log('5--'+colec[5].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[5].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else  if(colec[6].rmaxt){
                            //console.log('6--'+colec[6].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[6].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else  if(colec[7].rmaxt){
                            //console.log('7--'+colec[7].rmaxt)
                            console.log(`{"cryp":"${symboll}", "sup":[${tentsort}], "res":[${tentresis}], "qualymes":${qualyhora}, "rmaxt": ${colec[7].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else{
                            console.log('merda')
                        }
                        
                        /*
                        if(colec[4].val){
                            //console.log('4--'+colec[4].val)
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${colec[7].val}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else if(colec[3].val){
                            //console.log('3--'+colec[3].val)
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${colec[7].val}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else if(colec[2].val){
                            //console.log('2--'+colec[2].val)
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${colec[7].val}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else if(colec[1].val){
                            //console.log('1--'+colec[1].val)
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${colec[7].val}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else if(colec[0].val){
                            //console.log('0--'+colec[0].val)
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${colec[7].val}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                        }else{
                            console.log('merda')
                        }
                        */
                        /*
                        if(colec[4].val[3]){
                            qualymes= `${colec[4].val[0]}${colec[4].val[1]}${colec[4].val[2]}${colec[4].val[3]}`
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
                                //console.log(`{"cryp":"${symboll}","atual":${list[2].val}},`)
                        
                        }else if(colec[4].val[2]){
                            qualymes= `${colec[4].val[0]}${colec[4].val[1]}${colec[4].val[2]}`
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)


                        }else if(colec[4].val[1]){
                            qualymes= `${colec[4].val[0]}${colec[4].val[1]}`
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)

                        }else if(colec[4].val[0]){
                            qualymes= `${colec[4].val[0]}`
                            console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)

                        }else{
                            
                            if(colec[3].val[3]){
                                qualymes= `${colec[3].val[0]}${colec[3].val[1]}${colec[3].val[2]}${colec[3].val[3]}`
                                console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)

                            }else if(colec[3].val[2]){
                                qualymes= `${colec[3].val[0]}${colec[3].val[1]}${colec[3].val[2]}`
                                console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
        
        
                            }else if(colec[3].val[1]){
                                qualymes= `${colec[3].val[0]}${colec[3].val[1]}`
                                console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
        
                            }else if(colec[3].val[0]){
                                qualymes= `${colec[3].val[0]}`
                                console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)
        
                            }else{
                                //qualymes= `${colec[4].rod}`
                                qualymes=0
                                console.log(`{"cryp":"${symboll}", "sup":${tentsort}, "res":[${tentresis}], "qualymes":${qualymes}, "rmaxt": ${colec[0].rmaxt}, "atual":${list[2].val},"m50":${m50},"m200": ${m200}},`)

                            }
                        }
                        */



                    }
                    /*
                    console.log(`Suportes: ${colec[8].min}`)
                    console.log(`Resistencias: ${colec[8].max}`)
                    console.log(`............................................Falta ${falpsup.toFixed(8)} USDT (${falpsupper*100}%)`)
                    console.log(` ${colec[0].int}: Rodadas:${colec[0].rod}  Classif. ${colec[0].val}   RMT1-  ${colec[0].rmaxt}   IMI1 ${colec[0].rmini}`)//1M
                    console.log(`Max: ${colec[0].max}`)
                    console.log(`Min: ${colec[0].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[1].int}: Rodadas:${colec[1].rod}  Classif. ${colec[1].val}  `)//1w
                    console.log(`Max: ${colec[1].max}`)
                    console.log(`Min: ${colec[1].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[2].int}: Rodadas:${colec[2].rod}  Classif. ${colec[2].val}  `)//1d
                    console.log(`Max: ${colec[2].max}`)
                    console.log(`Min: ${colec[2].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[3].int}: Rodadas:${colec[3].rod}  Classif. ${colec[3].val}  `)//4h
                    console.log(`Max: ${colec[3].max}`)
                    console.log(`Min: ${colec[3].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[4].int}: Rodadas:${colec[4].rod}  Classif. ${colec[4].val}  `)//1h
                    console.log(`Max: ${colec[4].max}`)
                    console.log(`Min: ${colec[4].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[5].int}: Rodadas:${colec[5].rod}  Classif. ${colec[5].val}   IMT2-    IMI2    `)//15p
                    console.log(`Max: ${colec[5].max}`)
                    console.log(`Min: ${colec[5].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[6].int}: Rodadas:${colec[6].rod}  Classif. ${colec[6].val}   IMT3-    IMI3    `)//5p
                    console.log(`Max: ${colec[6].max}`)
                    console.log(`Min: ${colec[6].min}`)
                    console.log('..............................................')
                    console.log(` ${colec[7].int}: Rodadas:${colec[7].rod}  Classif. ${colec[7].val}   IMT4-    IMI4    `)//1p
                    console.log(`Max: ${colec[7].max}`)
                    console.log(`Min: ${colec[7].min}`)
                    console.log('..............................................')
                    */
                }
                
                colec[cont].max
                colec[cont].min

            }

        }
        chamar(limit)
    }
}























/*
async function rechamar(limite){
    //console.log('Oi mundao')
    list=[{"mes":15, "val":0},{"mes":15, "val":500000},{"mes":15, "val":0}]
    result = await api.candle(symbol,interval, limite);
    //console.log('result.length '+result.length);
    //console.log(result.length)


    let i=''
    for(i=0; i<=result.length-1;i++){
        let quant= (result.length-1)-i
        //console.log(` Há ${quant} mes Open: ${result[i][1]} High: ${result[i][2]}  Low-${result[i][3]} Close-${result[i][4]} `);
        if(parseFloat(result[i][4])>= parseFloat(list[0].val)){
            list[0].val=result[i][4]
            list[0].mes=quant
        }
        if(parseFloat(result[i][4])<=parseFloat(list[1].val)){
            list[1].val=result[i][4]
            list[1].mes=quant
        }
        if(quant<1){
            list[2].val=result[i][4]
            list[2].mes=quant

        }

    }

    let rlcmxtd= parseFloat((i-list[0].mes)/i).toFixed(2)    //relação Máximo Todo
    let rlcmnin= parseFloat(list[1].mes/i).toFixed(2)//relação Mínimo-Início
    //console.log(`Moeda ${symbol}  - ${interval}/${interval}`)
    console.log(`Com ${limite} meses...`)
    console.log('..............................')
    console.log(`Máximo há ${list[0].mes} M: ${list[0].val}`)
    console.log(`Mínimo há ${list[1].mes} M: ${list[1].val}`)
    console.log(`Atualmente (${list[2].mes} M): ${list[2].val}`)
    //console.log(`Relação Máximo-Todo = ${rlcmxtd}`)
    //console.log(`Relação Mínimo-Início = ${rlcmnin}`)

    let quedamamMat = parseFloat((list[0].val-list[2].val)/list[0].val).toFixed(2)   //%- minimo antes do maximo, perda % do max ao atual (M-A/M)
    let falpresamdm=  parseFloat((list[0].val-list[2].val)/list[2].val).toFixed(2)   //minimo depois do maximo, quanto % falta p atingir resistencia= (M-A)/A 
    let falpsup=(list[2].val-list[1].val)   //USDT quanto falta p atingir o mínimo, se voltar a cair (A-m)
    let falpsupper= parseFloat(falpsup/list[2].val).toFixed(2) // % que perde se voltar a cair (A-m/A)
    alta=  parseFloat((list[2].val-list[1].val)/list[1].val).toFixed(2)    //quanto % subiu desde que caiu do maximo p o minimo e recuperou (A-m/m)
    let perMmper=  parseFloat((list[0].val-list[1].val)/list[0].val).toFixed(2)   //perda do max ao min em % desde iniciar queda , do max ao min, com min depois do max
    let quedmdmMm =  parseFloat((list[0].val-list[1].val)/list[0].val).toFixed(2)  //min depois do max. quanto% caiu de M ao m...e recuperou (M-m/M)
                    //max >atual
    if(parseFloat(list[0].val)>parseFloat(list[2].val)){ //só caindo curvou p baixo ou parou de só subir...caindo
        
        if(list[1].mes>list[0].mes){ //mínimo antes do maximo. 
            console.log(`--> Subia. parou de subir há ${list[0].mes} meses <--`)
            console.log(`Em queda de ${list[0].val-list[2].val} USDT (${quedamamMat*100}%) desde então`) 
            console.log(`Teve mínimo = ${list[1].val} USDT há ${list[1].mes} meses`)
            console.log(`Falta cair ${falpsup.toFixed(8)} USDT (${falpsupper*100}%) para atingir o pior mínimo que teve em ${i} meses `)
        }else{ //mínimo depois do maximo
            if(list[1].val<list[2].val){ // min < atual ?
                console.log(`--> Recuperando após queda de um máximo <--`) //teve buraco, min<attual
                console.log(` Há ${list[0].mes} meses, perdeu  ${perMmper*100}% por ${list[0].mes-list[1].mes} meses,`) //Ha x meses, perdeu x% por n meses
                console.log(`Subindo ${alta*100}% há ${list[1].mes} meses desde que atingiu o min de ${list[1].val} USDT`)// quanto % subiu ha quanto tempo desde queda
                console.log(`Se subir ${list[0].val-list[2].val} USDT (${falpresamdm*100}%) atinge o máximo`) // quanto falta USDT (%) p resistencia
                console.log(`Se voltar a cair ${falpsup} USDT (${falpsupper*100}%) reatinge o mínimo`) // voltar a cair ...USDT (%) p minimo

            }else{ // só caindo ou lateralizado
                console.log(`--> Só caindo há ${list[0].mes} meses <--`) // não teve buraco, min >=atual
                console.log(`Precisa subir ${falpresamdm*100}% para atingir o máximo`)// quantos % do atual p atingir o max se subir (M-A/A)
            }

        }
    }else{ //!max>atual, atual=max,  só subindo, parou de subir mas nao curvou p baixo, caiu mas recuperou muuuito- atual > max

        
        if(list[1].mes>list[0].mes){// se o minimo é mais anterior mais antigo o maximo
            console.log(`--> Subindo. Está no máximo do intervalo <--`)
            console.log(`Pior mínimo há ${list[1].mes} meses.`)
            console.log(`Subiu ${alta}%  desde este mínimo`) //quanto subiu (A-m/m)
        }else{//se o minimo é posterior ao max - mais recente que o maximo
            console.log(`--> Recuperada de queda com louvor <--`)
            console.log(`Caiu ${list[0].val-list[1].val} USDT (${quedmdmMm*100}%) por ${list[0].mes -list[1].mes} meses`) //% - caiu M-m USDT (M-m/M)% por n meses
            console.log(`Recuperando ${alta}% há ${list[1].mes-list[2].mes} meses`)//recuperando % (A-m/m) ha n meses
        }
        
        
    }

    limite =parseInt(list[0].mes-1)
    if(parseInt(limite)>=2){
        chamar(limite)
    }





}
*/

//, 10000);

/*
setInterval(async() => {
    let buy=0, sell=0;
    console.log('Bemvindo');

    const result = await api.depth(symbol);
    console.log(result);

    if( result.bids && result.bids.length){
        console.log(`Highest Buy: ${result.bids[0][0]}`);
        buy = parseFloat(result.bids[0][0]);
    }

    if(result.asks && result.asks.length){
        console.log(`lowest sell: ${result.asks[0][0]}`);
        sell = parseFloat(result.asks[0][0]);
    }
    
    const account= await api.accountInfo();
    const coins= account.balances.filter(b => symbol.indexOf(b.asset !== -1));
    console.log('Posição da carteira'); 
    console.log(coins);
    
    if(sell>0 && sell < goodBuy){
        console.log(`Em ${symbol}-Hora de comprar!!`);

        

        console.log('Verificando se tenho grana...');

        //parseFloat(coins.find(c => c.asset=== 'BUSD').free)
        //parseFloat(coins.find(c => c.asset.endsWith('USD')).free)
        //parseFloat(coins.find(c => c.asset=== coin).free)

        const walletCoin = parseFloat(coins.find(c => c.asset=== coin).free)
        console.log('Tenho: '+walletCoin+' '+coin)
        
        if(sell< walletCoin){
            console.log('temos grana...comprando agora...');
            const buyOrder = await api.newOrder(symbol, 1);

            console.log(`OrderId: ${buyOrder.orderId} `);
            console.log(`status: ${buyOrder.status} `);
            

            if(buyOrder.status==='FILLED'){  //
                console.log('comprou!!!');
                console.log(buyOrder);
                console.log('*** Posicionando venda futura ***');
                const price = parseFloat(sell*profitability).toFixed(5);
                const sellOrder = await api.newOrder(symbol, 1, price, 'SELL', 'LIMIT');
                console.log(`Posicionando... ${sellOrder}`);
                console.log(sellOrder);


            }else{
                console.log('nao filled...else')
            }

            

        }else{
            console.log('Nao temos grana');
        }

        

    }else if(buy && buy >goodSell){
        console.log('Hora de vender!!')

        const sell2Order = await api.newOrder(symbol, 10, price=buy, 'SELL', 'LIMIT');       
        console.log(sell2Order);
        if(sell2Order.status==='FILLED'){
            console.log('vendido...')
        }else if(sell2Order.status==='PARTIALLY_FILLED'){
            console.log('parcialmente vendido...')
        }

    }else{
        console.log(`Em ${symbol}-aguardar mercado...`);
    }

    console.log('Obrigado...')
}, process.env.CRAWLER_INTERVAL)
*/