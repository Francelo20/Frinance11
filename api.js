const axios =require('axios');
const querystring=require('querystring');
const crypto=require('crypto');

const apiKey = process.env.API_KEY;
const apiSecret= process.env.SECRET_KEY;
const apiUrl= process.env.API_URL;


async function privateCall(path, data = {}, method= 'GET'){
    const timestamp = Date.now();
    const signature= crypto.createHmac('sha256', apiSecret)
                    .update(`${querystring.stringify({...data, timestamp})}`)
                    .digest('hex');
    
    const newData= { ...data, timestamp, signature};
    const qs= `?${querystring.stringify(newData)}`;
    //console.log(qs);

    try{
        const result = await axios({
            method,
            url:`${apiUrl}${path}${qs}`,
            headers: {'X-MBX-APIKEY': apiKey}
        })
        return result.data;
    }catch(err){
        console.log(err);
    }

}



async function newOrder(symbol, quantity, price, side = 'BUY', type = 'MARKET'){
    const data = {symbol, side, type, quantity};
    if(price){
        data.price = price;
    }
    if(type==='LIMIT'){
        data.timeInForce = 'GTC';
        
    } 

    return privateCall('/v3/order', data, 'POST');
}



async function accountInfo(){
    return privateCall('/v3/account');
}



async function publicCall(path, data, method='GET'){
    //console.log('Buscando dados...')
    try{
        const qs= data ? `?${querystring.stringify(data)}`:'';
        const result =await axios({
            method,
            url: `${process.env.API_URL}${path}${qs}`
        })
        return result.data;

    }catch(err){
        console.log(err);
        
    }

}


async function time(){
    return publicCall('/v3/time');
}

async function depth(symbol='BTCUSDT', limit=10){
    return await publicCall('/v3/depth',{symbol, limit});
}


///////////

async function candle(symbol='BNBUSDT', interval='1w', limit=250){ //=40
    
    //console.log(`Moeda ${symbol}  - ${interval}/${interval} - ${limit}`)
    //console.log('..............................')
    const res =await publicCall('/v3/klines',{symbol,interval, limit});
    //console.log('res.length: '+res.length)
    return res
}

async function trades(symbol='BNBUSDT', limit=30){ //=40
    
    //console.log(`Moeda ${symbol}  - ${interval}/${interval} - ${limit}`)
    //console.log('..............................')
    const res =await publicCall('/v3/trades',{symbol, limit});
    //console.log('res.length: '+res.length)
    return res
}


async function historicalTrades(symbol='BNBUSDT', limit=50, fromId=61049237){ //=40
    
    //console.log(`Moeda ${symbol}  - ${interval}/${interval} - ${limit}`)
    //console.log('..............................')
    const res =await publicCall('/v3/historicalTrades',{symbol, limit, fromId});
    //console.log('res.length: '+res.length)
    return res
}


async function aggTrades(symbol='BNBUSDT', limit=6){ //=40
    
    //console.log(`Moeda ${symbol}  - ${interval}/${interval} - ${limit}`)
    //console.log('..............................')
    const res =await publicCall('/v3/aggTrades',{symbol, limit});
    //console.log('res.length: '+res.length)
    return res
}

async function aggTradesDate(symbol='BNBUSDT', startTime=1644453864857, endTime=1644453874857 ,limit=6){ //=40
    
    //console.log(`Moeda ${symbol}  - ${interval}/${interval} - ${limit}`)
    //console.log('..............................')
    const res =await publicCall('/v3/aggTrades',{symbol, startTime, endTime, limit});
    //console.log('res.length: '+res.length)
    return res
}




async function exchangeInfo(){
    return publicCall('/v3/exchangeInfo');
}


module.exports= {time, depth, exchangeInfo, accountInfo, publicCall, privateCall, newOrder, candle, trades, aggTradesDate, historicalTrades, aggTrades}