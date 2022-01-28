const api=require('./api');

/*
,"AAVE","ACH","ACM","ADA","ADX","AGLD","AION","AKRO","ALCX","ALGO","ALICE","ALPACA","ALPHA",
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
*/
let moe =[

    "1INCH"

]

let limit=24
let interval='1h'

//PARA PRODUZIR GELO  HORAS
async function chamar(){
    for(let i =0; i<=moe.length-1;i++){
        let symbol=moe[i]+'USDT'
        let result = await api.aggtrades(symbol);
        //console.log(result)
        console.log(result);
    }
    //console.log(` Há ${quant} ${interval} Open: ${result[i][1]} High: ${result[i][2]}  Low-${result[i][3]} Close-${result[i][4]} `);
}
chamar()