const api=require('./api');
//const symbol = process.env.SYMBOL;
const profitability = parseFloat(process.env.PROFITABILITY);
const coin = process.env.COIN;
const goodBuy = process.env.GOOD_BUY;
const goodSell = process.env.GOOD_SELL;
//const limite =process.env.LIMIT_CANDLE

//let interval= ''
let symbol='MITHUSDT'
let limit=200

function entsymb(symboll){
    symbol=symboll+'USDT'
}
entsymb('ADA')



let listart=["1M","1w", "1d", "4h", "1h", "15m", "5m", "1m"] // INTERVAL P LOOP  ]//

let list=[{"mes":15, "val":0},{"mes":15, "val":500000},{"mes":15, "val":0}] // 0 -max 1 -min 2-atual

let colec=[{"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]},{"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]}, {"int":"","rod":0, "val":[]}]// pontos p cada cry


colec[8].val= symbol

for(let cont=0; cont<=listart.length-1; cont++){
    //console.log(`${listart[cont]}`)
    
    

    async function chamar(limit){
        colec[cont].rod++
        colec[8].rod ++ // colec[8].rod +colec[cont].rod
        
        //colec[cont].rod++ 
        let interval = listart[cont]
        colec[cont].int = interval
        console.log(`Rodada Geral ${colec[8].rod}.  Interv. ${colec[cont].int}. ${colec[cont].rod}ª rod. ${limit} velas`)
        console.log(`intervalo: ${interval}`)
        //console.log(`cont +1 ${cont+1}`)
        
        
        
        
        let result = await api.candle(symbol,interval,limit);
        //console.log('result.length '+result.length);
        list=[{"mes":15, "val":0},{"mes":15, "val":500000},{"mes":15, "val":0}]
    
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


        console.log('..............................')
        console.log(`Moeda ${symbol}  - ${interval}/${interval}`)
        //console.log('..............................')
        console.log(`Gráfico de ${i} meses.`)
        console.log('..............................')
        console.log(`Máximo há ${list[0].mes} M: ${list[0].val}`)
        console.log(`Mínimo há ${list[1].mes} M: ${list[1].val}`)
        console.log(`Atualmente (${list[2].mes} M): ${list[2].val}`)
        console.log(`Relação Máximo-Todo = ${rlcmxtd}`)
        console.log(`Relação Mínimo-Início = ${rlcmnin}`)
    
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
                colec[cont].val.push(6) 
                console.log(`-->PAROU DE SUBIR, EM QUEDA HÁ ${list[0].mes} ${colec[cont].int} (6 pontos)<--`)
                console.log(`Em queda de ${list[0].val-list[2].val} USDT (${(quedamamMat*100).toFixed(2)}%) desde então`) 
                console.log(`Antes o mínimo foi ${list[1].val} USDT há ${list[1].mes} meses`)
                console.log(`Falta cair ${falpsup.toFixed(8)} USDT (${falpsupper*100}%) para atingir o pior mínimo que teve em ${i} ${colec[cont].int} `)
            }else{ //mínimo depois do maximo
                if(parseFloat(list[1].val)<parseFloat(list[2].val)){ // min < atual ? (III)
                    colec[cont].val.push(3)
                    console.log(`--> RECUPERANDO APÓS QUEDA (3 pontos) <--`) //teve buraco, min<attual
                    console.log(` Há ${list[0].mes} ${colec[cont].int}, perdeu  ${perMmper*100}% por ${list[0].mes-list[1].mes} ${colec[cont].int},`) //Ha x meses, perdeu x% por n meses
                    console.log(`Subindo ${alta*100}% há ${list[1].mes} ${colec[cont].int} desde que atingiu o min de ${list[1].val} USDT`)// quanto % subiu ha quanto tempo desde queda
                    console.log(`Se subir ${list[0].val-list[2].val} USDT (${falpresamdm*100}%) atinge o máximo`) // quanto falta USDT (%) p resistencia
                    console.log(`Se voltar a cair ${falpsup} USDT (${falpsupper*100}%) reatinge o mínimo`) // voltar a cair ...USDT (%) p minimo
    
                }else if(parseFloat(list[1].val)>parseFloat(list[2].val)){ //min > atual so caindo  (I)
                    colec[cont].val.push(1)
                    console.log(`--> SÓ CAINDO HÁ ${list[0].mes} ${colec[cont].int} (1 ponto)<--`) // não teve buraco, min >=atual
                    console.log(`Precisa subir ${falpresamdm*100}% para atingir o máximo`)// quantos % do atual p atingir o max se subir (M-A/A)
                }else{ //  min === atual lateralizado
                    console.log(`--> PAROU DE CAIR (2 pontos)<--`) //(IV)
                    colec[cont].val.push(2)
                }
    
            }
        }else if(parseFloat(list[0].val)<parseFloat(list[2].val)){ //max<atual,  só subindo, parou de subir mas nao curvou p baixo, caiu mas recuperou muuuito- atual > max
    
            
            if(list[1].mes>list[0].mes){// se o minimo é mais anterior mais antigo o maximo (V)
                colec[cont].val.push(8)
                    console.log(`--> SÓ SUBINDO ou RECUPEROU DE QUEDA COM LOUVOR 4 (SEM TOCAR O MÍNIMO) (8 pontos) <--`)
                    console.log(`Mínimo há ${list[1].mes} meses.`)
                    console.log(`Subiu ${alta}%  desde este mínimo`) //quanto subiu (A-m/m)
                
            }else{//se o minimo é posterior ao max - mais recente que o maximo (VI)
                colec[cont].val.push(5)
                console.log(`--> RECUPERADA DE QUEDA COM LOUVOR 2, atual>max (5 pontos) <--`)
                console.log(`Caiu ${list[0].val-list[1].val} USDT (${quedmdmMm*100}%) por ${list[0].mes -list[1].mes} ${colec[cont].int}`) //% - caiu M-m USDT (M-m/M)% por n meses
                console.log(`Recuperando ${alta}% há ${list[1].mes-list[2].mes} ${colec[cont].int}`)//recuperando % (A-m/m) ha n meses
            }
        }else{ // atual=max,
            if(list[1].mes>list[0].mes){// se o minimo é mais anterior mais antigo o maximo  , com atual ===max  (VII)
                colec[cont].val.push(7)
                    console.log(`--> SÓ SUBINDO COM LOUVOR 3 (min antes do maximo e do atual)(7 pontos) <--`)
                    console.log(`Mínimo há ${list[1].mes} ${colec[cont].int}.`)
                    console.log(`"Subindo" ${alta}%  desde este mínimo`) //quanto subiu (A-m/m)
                
            }else{//se o minimo é posterior ao max - mais recente que o maximo ,  com atual ===max  (VIII)
                colec[cont].val.push(4)
                console.log(`--> RECUPERANDO DE QUEDA COM LOUVOR 1,atual=max (4 pontos) <--`)
                console.log(`Caiu ${list[0].val-list[1].val} USDT (${quedmdmMm*100}%) por ${list[0].mes -list[1].mes} ${colec[cont].int}`) //% - caiu M-m USDT (M-m/M)% por n meses
                console.log(`"Recuperando" ${alta}% há ${list[1].mes-list[2].mes} ${colec[cont].int}`)//recuperando % (A-m/m) há n meses
            }
            
            
        }
        //console.log('...........................')
        
        limit =parseInt(list[0].mes-1) // -1 tirando 1 ou 2 do Maximo p proxima chamada
        if(parseInt(limit)>=2){        // >=2 chegando a chamada até num minimo de velas
            chamar(limit)
        }else{
            
            console.log(`ÚLTIMA RODADA do interv. ${colec[cont].int}`)
            //colec[cont].val = parseFloat(colec[cont].val/colec[cont].rod).toFixed(1)
            //colec[cont].tot = soma dos colec[cont].val/colec[cont].rod
            console.log('..............................................')
            console.log(`Crypto: ${colec[8].val}  Intervalos:${listart.length}  Rodadas:${colec[8].rod} `)
            console.log('..............................................')
            console.log(` ${colec[0].int}: Rodadas:${colec[0].rod}  Classif. ${colec[0].val}   IMT1-    IMI1   `)//1M
            console.log('..............................................')
            console.log(` ${colec[1].int}: Rodadas:${colec[1].rod}  Classif. ${colec[1].val}  `)//1w
            console.log('..............................................')
            console.log(` ${colec[2].int}: Rodadas:${colec[2].rod}  Classif. ${colec[2].val}  `)//1d
            console.log('..............................................')
            console.log(` ${colec[3].int}: Rodadas:${colec[3].rod}  Classif. ${colec[3].val}  `)//4h
            console.log('..............................................')
            console.log(` ${colec[4].int}: Rodadas:${colec[4].rod}  Classif. ${colec[4].val}  `)//1h
            console.log('..............................................')
            console.log(` ${colec[5].int}: Rodadas:${colec[5].rod}  Classif. ${colec[5].val}   IMT2-    IMI2    `)//15p
            console.log('..............................................')
            console.log(` ${colec[6].int}: Rodadas:${colec[6].rod}  Classif. ${colec[6].val}   IMT3-    IMI3    `)//5p
            console.log('..............................................')
            console.log(` ${colec[7].int}: Rodadas:${colec[7].rod}  Classif. ${colec[7].val}   IMT4-    IMI4    `)//1p
            console.log('..............................................')
        }
            
    
    
    
    }
//let colec=[{"rod":0, "val":0}, {"rod":0, "val":0}, {"rod":0, "val":0}, {"rod":0, "val":0},{"rod":0, "val":0}, {"rod":0, "val":0}, {"rod":0, "val":0}, {"rod":0, "val":0}, {"rod":0, "val":""}]// pontos p cada cry
    
    
    chamar(limit)



}


function integracao(){
    console.log('integrado')
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