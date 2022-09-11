let moedl =[
        "1INCH","AAVE","ACA","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
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
        "WNXM","WOO","WRX","WTC","XEC","XEM","XLM","XMR","XNO","XRP","XTZ","XVG","XVS","YFI","YFII","YGG","ZEC","ZEN","ZIL","ZRX"/**/
]


let limita=50
let o=''

let symbo=''
let sym=''
let p=''

/*
setInterval(() => {
     for(p=0;p<=moedl.length-1;p++){
        reldepth(moedl,p)
    }
}, 140000);




setTimeout(() => {
    for(p=0;p<=moedl.length-1;p++){
        reldepth(moedl,p)
    }

}, 10000);
*/

let result4 = ''
let results= ''
let relprof=''
let somqt=''
let sombids=0
let somasks=0
let som10bids=0
let som10asks=0
let totdep=0
let tot10dep=0
    
    



function reldepth(moedl,p){

        sym=moedl[p]
        symbo=sym+'USDT'
        //interv=30000
        //let date = new Date();
        //let agora=date.getTime()
        //let endTime=agora
        //let startTime=  parseInt(endTime-interv)
        //let limit =1000
    
        let durl =' https://api.binance.com';
        let duer = `/api/v3/depth?symbol=${symbo}&limit=${limita}` //&interval=15m'; //'/vapi/v1/ping';
        //query +='';
        let comrul = durl+duer;
        let ourRequest = new XMLHttpRequest();
        ourRequest.open('GET',comrul,true);
        ourRequest.onload = function(){
            result4 = ourRequest.responseText
            results= JSON.parse(result4)
            //console.log(results.asks.length)
            //console.log(result4)
            
            for(o=0; o<=results.asks.length-1;o++){
                //console.log(`${limita} procuras. Procura ${o+1} preco ${results.bids[o][0]} qty ${results.bids[o][1]}`)
                //console.log(`${limita} ofertas. Oferta ${o+1}: preco ${results.asks[o][0]} qty ${results.asks[o][1]}`)
                relprof= parseFloat(results.bids[o][1]/results.asks[o][1]).toFixed(2)
                somqt= parseInt(results.bids[o][1]+results.asks[o][1])
                sombids+=parseInt(results.bids[o][1])
                somasks+=parseInt(results.asks[o][1])
                //console.log(`Relação ${o} nº Procura/Oferta= ${relprof} total: ${somqt} preco ${results.bids[o][0]} x ${results.asks[o][0]}`)

                if(parseInt(o)<=9){//depth de 10 limit
                    som10bids+=parseInt(results.bids[o][1])
                    som10asks+=parseInt(results.asks[o][1])

                }



            }

            if(parseFloat(somasks)===0){
                totdep= sombids //parseFloat(sombids/somasks).toFixed(2)
            }else{
                totdep= parseFloat(sombids/somasks).toFixed(2)
            }

            if(parseFloat(som10asks)===0){
                tot10dep= som10bids //parseFloat(som10bids/som10asks).toFixed(2)
            }else{
                tot10dep= parseFloat(som10bids/som10asks).toFixed(2)
            }

            //console.log(`${p}-${moedl[p]} 50 p=${sombids} o= ${somasks} Rel= ${totdep} - 10 p=${som10bids} o= ${som10asks} Rel= ${tot10dep}`)
            
            if(document.getElementById(`dep50pc_${moedl[p]}`)){
                document.getElementById(`dep50pc_${moedl[p]}`).innerHTML=sombids
                document.getElementById(`dep50rel_${moedl[p]}`).innerHTML=totdep
                document.getElementById(`dep10pc_${moedl[p]}`).innerHTML=som10bids
                document.getElementById(`dep10rel_${moedl[p]}`).innerHTML=tot10dep

            }
            


            result4 = ''
            results= ''
            relprof=''
            somqt=''
            sombids=0
            somasks=0
            som10bids=0
            som10asks=0
            totdep=0
            tot10dep=0
            symbo=''
            sym=''
            

        }

        ourRequest.send();
        //ourRequest.abort();
}

