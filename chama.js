const api=require('./api');


let moe =[
    /**/"1INCH","AAVE","ACA","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
    "ALPINE","AMP","ANC","ANKR","ANT","ANY","API3","AR","ARDR","ARPA","ASR","ATA","ATM","ATOM","AUCTION","AUD","AUDIO","AUTO",
    "AVA","AVAX","AXS","BADGER","BAKE","BAL","BAND","BAR","BAT","BCH","BEAM","BEL","BETA","BICO","BLZ","BNB","BNT","BNX",
    "BOND","BTC","BTCST","BTG","BTS","BTT","BTTC","BURGER", "BUSD","C98","CAKE","CELO","CELR","CFX","CHESS","CHR","CHZ","CITY","CKB",
    "CLV","COCOS","COMP","COS","COTI","CRV","CTK","CTSI","CTXC","CVC","CVP","CVX","DAR","DASH","DATA","DCR","DEGO","DENT",
    "DEXE","DF","DGB","DIA","DNT","DOCK","DODO","DOGE","DOT","DREP","DUSK","DYDX","EGLD","ELF","ENJ","ENS","EOS","EPS",
    "ERN","ETC","ETH","EUR","FARM","FET","FIDA","FIL","FIO","FIRO","FIS","FLM","FLOW","FLUX","FOR","FORTH","FRONT","FTM","FTT",
    "FUN","FXS","GALA","GBP","GHST","GLMR","GNO","GRT","GTC","GTO","GXS","HARD","HBAR","HIGH","HIVE","HNT",
    "HOT","ICP","ICX","IDEX","ILV","IMX","INJ","IOST","IOTA","IOTX","IRIS","JASMY","JOE","JST","JUV","KAVA","KEEP","KEY","KLAY","KMD","KNC","KP3R","KSM",
    "LAZIO","LINA","LINK","LIT","LOKA","LPT","LRC","LSK","LTC","LTO","LUNA","MANA","MASK","MATIC","MBL","MBOX","MC","MDT","MDX","MFT",
    "MINA","MIR","MITH","MKR","MLN","MOVR","MTL","NANO","NBS","NEAR","NEO","NKN","NMR","NU","NULS","OCEAN","OG","OGN","OM","OMG","ONE",
    "ONG","ONT","OOKI","ORN","OXT","PAXG","PEOPLE","PERL","PERP","PHA","PLA","PNT","POLS","POLY","POND","PORTO","POWR","PSG","PUNDIX",
    "PYR","QI","QNT","QTUM","QUICK","RAD","RAMP","RARE","RAY","REEF","REN","REP","REQ","RGT","RIF","RLC","RNDR","ROSE","RSR",
    "RUNE","RVN","SAND","SANTOS","SC","SCRT","SFP","SHIB","SKL","SLP","SNX","SOL","SPELL","SRM","STMX","STORJ","STPT","STRAX","STX","SUN","SUPER","SUSD",
    "SUSHI","SXP",
    "SYS","TCT","TFUEL","THETA","TKO","TLM","TOMO","TORN","TRB","TRIBE","TROY","TRU","TRX","TUSD","TVK","TWT","UMA","UNFI","UNI",
    "USDC","USDP","UST","UTK","VET","VGX","VIDT","VITE","VOXEL","VTHO","WAN","WAVES","WAXP","WIN","WING","WNXM","WOO","WRX","WTC",
    "XEC","XEM","XLM","XMR","XNO","XRP","XTZ","XVG","XVS","YFI","YFII","YGG","ZEC","ZEN","ZIL","ZRX"

]

let limit=16
let interval='15m'

//PARA PRODUZIR GELO  HORAS
async function chamar(){
    let cont =''
    let i=''
    for(cont =0; cont<=moe.length-1;cont++){
        let symbol=moe[cont]+'USDT'
        let result = await api.candle(symbol,interval,limit);
        //console.log(result)
        let preco15=''
        let preco30=''
        let preco45=''
        let preco60=''
        let preco120=''
        let preco240=''
        for(i =0; i<=result.length-1;i++){
            let quant= (result.length-1)-i
            
            if(parseInt(i)===0){
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
            //console.log(` Há ${quant} ${interval} Open: ${result[i][1]} High: ${result[i][2]}  Low-${result[i][3]} Close-${result[i][4]} `);
            //console.log(`{"moe":"${moe[cont]}","preco":${preco},"preco30":${preco30},"preco45":${preco45},"preco60":${preco60},`);

        }
        console.log(`{"moe":"${moe[cont]}","preco":${preco15},"preco30":${preco30},"preco45":${preco45},"preco60":${preco60},"preco120":${preco120},"preco240":${preco240}},`);



        //console.log(`{"moe":"${moe[i]}","preco":${result[0][1]} },`);
    }
    //console.log(` Há ${quant} ${interval} Open: ${result[i][1]} High: ${result[i][2]}  Low-${result[i][3]} Close-${result[i][4]} `);
}
chamar()