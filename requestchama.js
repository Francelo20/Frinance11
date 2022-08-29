let moed =[
    /**/"1INCH","AAVE","ACA","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
        "ALPINE","AMP","ANC","ANKR","ANT","ANY","API3","AR","ARDR","ARPA","ASR","ASTR","ATA","ATM","ATOM","AUCTION","AUD","AUDIO",
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
        "SUSD","SUSHI","SXP","SYS","T","TCT","TFUEL","THETA","TKO","TLM","TOMO","TORN","TRB","TRIBE","TROY","TRU","TRX","TUSD","TVK",
        "TWT","UMA","UNFI","UNI","USDC","USDP","UST","UTK","VET","VGX","VIDT","VITE","VOXEL","VTHO","WAN","WAVES","WAXP","WIN","WING",
        "WNXM","WOO","WRX","WTC","XEC","XEM","XLM","XMR","XNO","XRP","XTZ","XVG","XVS","YFI","YFII","YGG","ZEC","ZEN","ZIL","ZRX"
]


let limits=16
let interval='15m'
let i=''

let nn=''
let symba=''
let symboli=''
let preco15=''
let preco30=''
let preco45=''
let preco60=''
let preco120=''
let preco240=''
//criando lista p fazer suporte e res a partir dos gelosss
let lisgelos=[]

setInterval(() => {
    for(nn=0;nn<=moed.length-1;nn++){
        relagelo(moed,nn)
    }  
}, 65000); //290000



/*
setTimeout(() => {
    for(nn=0;nn<=moed.length-1;nn++){
        relagelo(moed,nn)
    }
}, 65000);
*/
    
    



function relagelo(moed,nn){

        symba=moed[nn]
        symboli=symba+'USDT'
        //interv=30000
        //let date = new Date();
        //let agora=date.getTime()
        //let endTime=agora
        //let startTime=  parseInt(endTime-interv)
        //let limits =1000
    
        let curl =' https://api.binance.com';
        let quer = `/api/v3/klines?symbol=${symboli}&interval=${interval}&limit=${limits}` //&interval=15m'; //'/vapi/v1/ping';
        //query +='';
        let urul = curl+quer;
        let ourRequest = new XMLHttpRequest();
        ourRequest.open('GET',urul,true);
        ourRequest.onload = function(){
            let result3 = ourRequest.responseText
            let result= JSON.parse(result3)




            for(i =0; i<=result.length-1;i++){
                let quant= (result.length-1)-i
                
                if(parseInt(i)===0){//gelo de 16x 15m=240 i=0
                    preco240=result[i][4]
                }else if(parseInt(i)===8){
                    preco120=result[i][4]
                }else if(parseInt(i)===12){
                    preco60=result[i][4]
                }else if(parseInt(i)===13){
                    preco45=result[i][4]
                }else if(parseInt(i)===14){
                    preco30=result[i][4]
                }else if(parseInt(i)===15){
                    preco15=result[i][4]
                }
            }

            //aplicando gelos p sup e res
            lisgelos.push(preco240, preco120, preco60, preco45, preco30, preco15)
            lisgelos.sort()

            //console.log(`{"moed":"${moed[nn]}","preco":${preco15},"preco30":${preco30},"preco45":${preco45},"preco60":${preco60},"preco120":${preco120},"preco240":${preco240}},`);
            
            if(document.getElementById(`gelo_${moed[nn]}`)){
                document.getElementById(`gelo_${moed[nn]}`).innerHTML= preco15
            }else{
                console.log(`nao está chegando ${moed[nn]}`)
            }
            if(document.getElementById(`gelo30_${moed[nn]}`)){
                document.getElementById(`gelo30_${moed[nn]}`).innerHTML= preco30
            }
            if(document.getElementById(`gelo45_${moed[nn]}`)){
                document.getElementById(`gelo45_${moed[nn]}`).innerHTML= preco45
            }
            if(document.getElementById(`gelo60_${moed[nn]}`)){
                document.getElementById(`gelo60_${moed[nn]}`).innerHTML= preco60
            }
            if(document.getElementById(`gelo120_${moed[nn]}`)){
                document.getElementById(`gelo120_${moed[nn]}`).innerHTML= preco120
            }
            if(document.getElementById(`gelo240_${moed[nn]}`)){
                document.getElementById(`gelo240_${moed[nn]}`).innerHTML= preco240
            }

            ///////////////////
            if(document.getElementById(`sup_${moed[nn]}`)){
                document.getElementById(`sup_${moed[nn]}`).innerHTML= lisgelos[0]
            }
            if(document.getElementById(`res_${moed[nn]}`)){
                document.getElementById(`res_${moed[nn]}`).innerHTML= lisgelos[5]
            }


            lisgelos=[]




            //console.log(result2)
            //enviando(result2, moed, nn)

        }

        ourRequest.send();
        //ourRequest.abort();
}

/*
function enviando(result2, moed, nn){
    //console.log(`${nn}-${moed[nn]} foram ${result2.length} trades`)
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
*/
