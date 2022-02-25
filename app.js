const burl =' https://api3.binance.com';
const query = '/api/v3/ticker/24hr'; //'/vapi/v1/ping';
//query += ''; //'?symbol=BTCUSDT&interval=15m&limit=2';
const url = burl+query;
let objData = {};
let objData2 = {};
let objData3 = {};
let objData4 = {};
let percquery= 0;
let data = {}
let result={"id":"","value":""};
result.id = '';

//Primeira chamada API
fetch(url)
.then(res =>{
    res.json().then(json =>{
        json.filter(o => o.symbol.endsWith('USDT')  && !/^.{2,}(DOWN|UP)USDT$/.test(o.symbol)) //BLVT
        .map(o=> {
            objData[o.symbol]= o.priceChangePercent
            objData2[o.symbol]=o.lastPrice
            objData3[o.symbol]=o.quoteVolume
            objData4[o.symbol]=o.openPrice

        })
        result = Object.keys(objData).map(symbol =>{
            return{
                id:symbol.replace('USDT', ''), value: objData[symbol], pro:objData2[symbol], vol:objData3[symbol], open:objData4[symbol]
            }
        })
        .filter(o => Math.abs(o.value) > percquery)    
        data = JSON.stringify(result)
        setTimeout(() => {
            console.log(`Temos ${result.length} pares USDT disponíveis (${data.length} total)`)
        }, 3000);
        
        //let ajudaa=[]
        //PRIMEIRO FOR
        for(let i =0; i<result.length; i++){
            //let gelo= result[i].pro
            //ajudaa.push(`{"cry":${result[i].id}, "gelo":${gelo}}`)

            entracry(result,i)
        }
        //ajudaa.sort()
        //let jss= JSON.stringify(ajudaa)
        //console.log(ajudaa)

    })
})
.catch(err=> console.error('Algo deu errado',err))


//funcao entracry p ciclo 1 e 2
function entracry(result,i){
    
    let voll = (result[i].vol/1000000).toFixed(3);

    let td1 = document.createElement("td")
    td1.setAttribute('id', `mo_${result[i].id}`)
    td1.setAttribute("class","td")

    let td11 = document.createElement("td")
    td11.setAttribute('id', `vol_${result[i].id}`)
    td11.setAttribute("class","td")

    let td1312 = document.createElement("td")
    td1312.setAttribute('id',`gelo240_${result[i].id}`)
    td1312.setAttribute("class","tdp")

    let td1313 = document.createElement("td")
    td1313.setAttribute('id',`gelo120_${result[i].id}`)
    td1313.setAttribute("class","tdp")

    let td131 = document.createElement("td")
    td131.setAttribute('id',`gelo60_${result[i].id}`)
    td131.setAttribute("class","tdp")

    let td132 = document.createElement("td")
    td132.setAttribute('id',`gelo45_${result[i].id}`)
    td132.setAttribute("class","tdp")

    let td133 = document.createElement("td")
    td133.setAttribute('id',`gelo30_${result[i].id}`)
    td133.setAttribute("class","tdp")

    let td13 = document.createElement("td")
    td13.setAttribute('id',`gelo_${result[i].id}`)
    td13.setAttribute("class","tdp")

    let td1343 = document.createElement("td")
    td1343.setAttribute('id',`desde_${result[i].id}`)
    td1343.setAttribute("class","tdp")

    let td1341 = document.createElement("td")
    td1341.setAttribute('id',`percgel240_${result[i].id}`)
    td1341.setAttribute("class","tdp")

    let td1342 = document.createElement("td")
    td1342.setAttribute('id',`percgel120_${result[i].id}`)
    td1342.setAttribute("class","tdp")

    let td134 = document.createElement("td")
    td134.setAttribute('id',`percgel60_${result[i].id}`)
    td134.setAttribute("class","tdp")

    let td135 = document.createElement("td")
    td135.setAttribute('id',`percgel45_${result[i].id}`)
    td135.setAttribute("class","tdp")

    let td136 = document.createElement("td")
    td136.setAttribute('id',`percgel30_${result[i].id}`)
    td136.setAttribute("class","tdp")

    let td12 = document.createElement("td")
    td12.setAttribute('id', `auvol_${result[i].id}`)
    td12.setAttribute("class","td")

    let td2 = document.createElement("td")
    td2.setAttribute('id',`in_${result[i].id}`)
    td2.setAttribute("class","td")

    let td22 = document.createElement("td")
    td22.setAttribute('id',`at_${result[i].id}`)
    td22.setAttribute("class","td")

    let td23 = document.createElement("td")
    td23.setAttribute('id',`dif_${result[i].id}`)
    td23.setAttribute("class","td")

    let td231 = document.createElement("td")
    td231.setAttribute('id',`inv15_${result[i].id}`)
    td231.setAttribute("class","td")

    let td24 = document.createElement("td")
    td24.setAttribute('id',`ope_${result[i].id}`)
    td24.setAttribute("class","tdp")

    let td3 = document.createElement("td")
    td3.setAttribute('id',`pe_${result[i].id}`)
    td3.setAttribute("class","tdp")

    let td4 = document.createElement("td")
    td4.setAttribute('id',result[i].id)
    td4.setAttribute("class","tdp")
    td4.style.backgroundColor='#d2dd54'

    let td41 = document.createElement("td")
    td41.setAttribute('id',`sup_${result[i].id}`)
    td41.setAttribute("class","tdp")

    let td42 = document.createElement("td")
    td42.setAttribute('id',`difsup_${result[i].id}`)
    td42.setAttribute("class","tdp")

    let td411 = document.createElement("td")
    td411.setAttribute('id',`res_${result[i].id}`)
    td411.setAttribute("class","tdp")

    let td412 = document.createElement("td")
    td412.setAttribute('id',`difres_${result[i].id}`)
    td412.setAttribute("class","tdp")

    let td413 = document.createElement("td")
    td413.setAttribute('id',`m50_${result[i].id}`)
    td413.setAttribute("class","td")

    let td4131 = document.createElement("td")
    td4131.setAttribute('id',`difm50_${result[i].id}`)
    td4131.setAttribute("class","td")

    let td414 = document.createElement("td")
    td414.setAttribute('id',`m200_${result[i].id}`)
    td414.setAttribute("class","td")

    let td431 = document.createElement("td")
    td431.setAttribute('id',`classe_${result[i].id}`)
    td431.setAttribute("class","tdp")

    let td43 = document.createElement("td")
    td43.setAttribute('id',`qualymes_${result[i].id}`)
    td43.setAttribute("class","tdp")

    let td44 = document.createElement("td")
    td44.setAttribute('id',`rmaxtu_${result[i].id}`)
    td44.setAttribute("class","td")


    let td441 = document.createElement("td")
    td441.setAttribute('id',`dep50pc_${result[i].id}`)
    td441.setAttribute("class","td")
    let td442 = document.createElement("td")
    td442.setAttribute('id',`dep50rel_${result[i].id}`)
    td442.setAttribute("class","td")
    let td443 = document.createElement("td")
    td443.setAttribute('id',`dep10pc_${result[i].id}`)
    td443.setAttribute("class","td")
    let td444 = document.createElement("td")
    td444.setAttribute('id',`dep10rel_${result[i].id}`)
    td444.setAttribute("class","td")




    let td45 = document.createElement("td")
    td45.setAttribute('id',`favor_${result[i].id}`)
    td45.setAttribute("class","td")

    let td46 = document.createElement("td")
    td46.setAttribute('id',`volmom_${result[i].id}`)
    td46.setAttribute("class","td")

    let td47 = document.createElement("td")
    td47.setAttribute('id',`relvolmom_${result[i].id}`)
    td47.setAttribute("class","td")

    let td48 = document.createElement("td")
    td48.setAttribute('id',`reltrade_${result[i].id}`)
    td48.setAttribute("class","td")

    let td4925 = document.createElement("td")
    td4925.setAttribute('id',`totrades_${result[i].id}`)
    td4925.setAttribute("class","td")

    let td4924 = document.createElement("td")
    td4924.setAttribute('id',`trades4_${result[i].id}`)
    td4924.setAttribute("class","td")

    let td4923 = document.createElement("td")
    td4923.setAttribute('id',`trades3_${result[i].id}`)
    td4923.setAttribute("class","td")

    let td4922 = document.createElement("td")
    td4922.setAttribute('id',`trades2_${result[i].id}`)
    td4922.setAttribute("class","td")

    let td492 = document.createElement("td")
    td492.setAttribute('id',`trades_${result[i].id}`)
    td492.setAttribute("class","td")

    let td491 = document.createElement("td")
    td491.setAttribute('id',`recup_${result[i].id}`)
    td491.setAttribute("class","td")

    let td49 = document.createElement("td")
    td49.setAttribute('id',`perda_${result[i].id}`)
    td49.setAttribute("class","td")

    let td4933 = document.createElement("td")
    td4933.setAttribute('id',`difperec_${result[i].id}`)
    td4933.setAttribute("class","td")

    let td4934 = document.createElement("td")
    td4934.setAttribute('id',`difprcnt_${result[i].id}`)
    td4934.setAttribute("class","td")

    let tdac = document.createElement("td")
    tdac.setAttribute('id',`acu_${result[i].id}`)
    tdac.setAttribute("class","td")
    /*
    tdac.addEventListener('click',()=>{
        let valpz= document.getElementById(`${result[i].id}`).innerHTML
        document.getElementById(`pe_${result[i].id}`).innerHTML= valpz
        tdac.innerHTML='0.000'
        tdac.style.backgroundColor= '#ffffff'
        let azul = document.getElementById(`max_${result[i].id}`)
        azul.style.backgroundColor= '#8d8ec4'
    })*/

    let tdmx = document.createElement("td")
    tdmx.setAttribute('id',`max_${result[i].id}`)
    tdmx.setAttribute("class","td")

    let tdmn = document.createElement("td")
    tdmn.setAttribute('id',`min_${result[i].id}`)
    tdmn.setAttribute("class","td")

    let tdult = document.createElement("td")
    tdult.setAttribute('id',`ultimo_${result[i].id}`)
    tdult.setAttribute("class","tdp")

    let tdifm = document.createElement("td")
    tdifm.setAttribute('id',`difmm_${result[i].id}`)
    tdifm.setAttribute("class","td")

    let td5 = document.createElement("td")
    td5.setAttribute('id',`au_${result[i].id}`)
    td5.setAttribute("class","td")

    let tr = document.createElement("tr")
    tr.setAttribute('id', `tr_${result[i].id}`)

    setTimeout(500)

    tr.appendChild(td1)
    tr.appendChild(td11)
    tr.appendChild(td1312)
    tr.appendChild(td1313)
    tr.appendChild(td131)
    tr.appendChild(td132)
    tr.appendChild(td133)
    tr.appendChild(td13)
    tr.appendChild(td1343)
    tr.appendChild(td1341)
    tr.appendChild(td1342)
    tr.appendChild(td134)
    tr.appendChild(td135)
    tr.appendChild(td136)
    tr.appendChild(td12)
    tr.appendChild(td2)
    tr.appendChild(td22)
    tr.appendChild(td23)
    tr.appendChild(td231)
    tr.appendChild(td24)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td41)
    tr.appendChild(td42)
    tr.appendChild(td411)
    tr.appendChild(td412)
    tr.appendChild(td413)
    tr.appendChild(td4131)
    tr.appendChild(td414)
    tr.appendChild(td431)
    tr.appendChild(td43)
    tr.appendChild(td44)
    tr.appendChild(td441)
    tr.appendChild(td442)
    tr.appendChild(td443)
    tr.appendChild(td444)

    tr.appendChild(td45)
    tr.appendChild(td46)
    tr.appendChild(td47)
    tr.appendChild(td48)
    tr.appendChild(td4925)
    tr.appendChild(td4924)
    tr.appendChild(td4923)
    tr.appendChild(td4922)
    tr.appendChild(td492)
    tr.appendChild(td491)
    tr.appendChild(td49)
    tr.appendChild(td4933)
    tr.appendChild(td4934)
    tr.appendChild(tdac)
    tr.appendChild(tdmx)
    tr.appendChild(tdmn)
    tr.appendChild(tdult)
    tr.appendChild(tdifm)
    tr.appendChild(td5)
    
    let tab = document.getElementById('tbody')

    tab.appendChild(tr)

    let campvoll= document.getElementById(`vol_${result[i].id}`)
    document.getElementById(`mo_${result[i].id}`).innerHTML= result[i].id;
    campvoll.innerHTML= voll
    document.getElementById(`gelo240_${result[i].id}`).innerHTML= '0';
    document.getElementById(`gelo120_${result[i].id}`).innerHTML= '0';
    document.getElementById(`gelo60_${result[i].id}`).innerHTML= '0';
    document.getElementById(`gelo45_${result[i].id}`).innerHTML= '0';
    document.getElementById(`gelo30_${result[i].id}`).innerHTML= '0';
    document.getElementById(`gelo_${result[i].id}`).innerHTML= '0';
    document.getElementById(`desde_${result[i].id}`).innerHTML= '0';
    document.getElementById(`percgel240_${result[i].id}`).innerHTML= '0';
    document.getElementById(`percgel120_${result[i].id}`).innerHTML= '0';
    document.getElementById(`percgel60_${result[i].id}`).innerHTML= '0';
    document.getElementById(`percgel45_${result[i].id}`).innerHTML= '0';
    document.getElementById(`percgel30_${result[i].id}`).innerHTML= '0';
    document.getElementById(`auvol_${result[i].id}`).innerHTML= '0';
    document.getElementById(`in_${result[i].id}`).innerHTML= result[i].value;
    document.getElementById(`at_${result[i].id}`).innerHTML= '0';
    document.getElementById(`dif_${result[i].id}`).innerHTML= '0';
    document.getElementById(`inv15_${result[i].id}`).innerHTML= '0';
    document.getElementById(`ope_${result[i].id}`).innerHTML= result[i].open;
    document.getElementById(`pe_${result[i].id}`).innerHTML= result[i].pro;
    document.getElementById(result[i].id).innerHTML= result[i].pro;
    document.getElementById(`sup_${result[i].id}`).innerHTML= '0';
    document.getElementById(`difsup_${result[i].id}`).innerHTML= '999';
    document.getElementById(`res_${result[i].id}`).innerHTML= '0';
    document.getElementById(`difres_${result[i].id}`).innerHTML= '0';
    document.getElementById(`m50_${result[i].id}`).innerHTML= '0';
    document.getElementById(`difm50_${result[i].id}`).innerHTML= '0';
    document.getElementById(`m200_${result[i].id}`).innerHTML= '0';
    document.getElementById(`classe_${result[i].id}`).innerHTML= '0';
    document.getElementById(`qualymes_${result[i].id}`).innerHTML= '0';
    document.getElementById(`rmaxtu_${result[i].id}`).innerHTML= '0';

    document.getElementById(`dep50pc_${result[i].id}`).innerHTML= '0';
    document.getElementById(`dep50rel_${result[i].id}`).innerHTML= '0';
    document.getElementById(`dep10pc_${result[i].id}`).innerHTML= '0';
    document.getElementById(`dep10rel_${result[i].id}`).innerHTML= '0';

    document.getElementById(`favor_${result[i].id}`).innerHTML= '0';
    document.getElementById(`volmom_${result[i].id}`).innerHTML= '000';
    document.getElementById(`relvolmom_${result[i].id}`).innerHTML= '0';
    document.getElementById(`reltrade_${result[i].id}`).innerHTML= '0';
    document.getElementById(`totrades_${result[i].id}`).innerHTML= '0';
    document.getElementById(`trades4_${result[i].id}`).innerHTML= '0';
    document.getElementById(`trades3_${result[i].id}`).innerHTML= '0';
    document.getElementById(`trades2_${result[i].id}`).innerHTML= '0';
    document.getElementById(`trades_${result[i].id}`).innerHTML= '0';
    document.getElementById(`recup_${result[i].id}`).innerHTML= '0';
    document.getElementById(`perda_${result[i].id}`).innerHTML= '0';
    document.getElementById(`difperec_${result[i].id}`).innerHTML= '0';
    document.getElementById(`difprcnt_${result[i].id}`).innerHTML= '0';
    document.getElementById(`acu_${result[i].id}`).innerHTML= '0';
    document.getElementById(`max_${result[i].id}`).innerHTML= '0';
    document.getElementById(`min_${result[i].id}`).innerHTML= '0';
    document.getElementById(`ultimo_${result[i].id}`).innerHTML= '0';
    document.getElementById(`difmm_${result[i].id}`).innerHTML= '0';
    document.getElementById(`au_${result[i].id}`).innerHTML= '0';

    //colocando cor na coluna Volume vol_XXX
    if(voll < 1.0){
        campvoll.style.backgroundColor = "#b51717"; //vermelho escuro

    }else if(voll >= 1.0 && voll < 2.0){
        campvoll.style.backgroundColor = "#f7281d"; //vermelho medio

    }else if(voll >=2.0 && voll < 3.0){
        campvoll.style.backgroundColor = "#f9645c"; //vermelho claro

    }else if(voll >= 3.0 && voll < 4.0){
        campvoll.style.backgroundColor = "#f9a29d"; //laranja-vermelho

    }else if(voll >=4.0 && voll < 5.0){
        campvoll.style.backgroundColor = "#fcdcd1"; //laranja

    }else if(voll >=5.0 && voll <10.0){
        campvoll.style.backgroundColor = "#c5f271"; //amarelo

    }else if(voll >=10.0 && voll <50.0){
        campvoll.style.backgroundColor = "#d2dd54"; //amarelo esverdeado

    }else if(voll >=50.0 && voll <100.0){
        campvoll.style.backgroundColor = "#9db541"; // verde claro

    }else if(voll >=100.0 && voll <500.0){
        campvoll.style.backgroundColor = "#1da548"; // verde medio

    }else if(voll >=500.0 && voll < 1300.0){
        campvoll.style.backgroundColor = "#138437"; // verde escuro

    }else if(voll >= 1300.0){
        campvoll.style.backgroundColor = "#0b5623"; // verde escurao

    }

}





// SEGUNDA PARTE
const btnZerar = document.querySelector(".btn");
btnZerar.addEventListener("click", ativar);


let qtsmoe=[]

//declarando tag audio
let audio = document.querySelector('audio')
let sorte=[]

function ativar(){
    btnZerar.innerHTML = 'Iniciado'
    btnZerar.style.backgroundColor='#fff'
    let urll=url;
    let apisel=''
    function selecapi(){
        apisel= document.querySelector('input[name="htapi"]:checked').value
        urll= `${apisel}binance.com/api/v3/ticker/24hr`
    }
    selecapi()

    
    //hora de inicio do botao
    let interval =30000;
    let timais = 1000;
    let agora = new Date();
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    let input = document.getElementById('input');
    let quase = input.value
    let inter = parseInt(quase)
    if(inter){
        interval= inter*1000;
    }

    //aplicando funcão cronometro
    let duration = interval/1000; //60 * 5; // Converter para segundos
    let display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display);// iniciando o timer
    document.getElementById('time').innerHTML=` ${hora}h ${min}m ${seg}s`
    let displaydo = document.querySelector('#timerdo');
    startTimer(duration, displaydo);// iniciando o timer dois
    //repetindo... chamadas API
    let c = 0;
    let cresc ='';
    let i =0;
    let v=0;
    
    let contpos=0
    let contrest=0

    console.log(`Bom dia. Iniciando com intervalo de ${duration} segundos pela ${apisel}`)

    setInterval(() => {
        fetch(urll)
        .then(res =>{
            res.json().then(json =>{
                json.filter(o => o.symbol.endsWith('USDT')  && !/^.{2,}(DOWN|UP)USDT$/.test(o.symbol)) //BLVT
                .map(o=> {
                    objData[o.symbol]= o.priceChangePercent
                    objData2[o.symbol]=o.lastPrice
                    objData3[o.symbol]=o.quoteVolume
                    objData4[o.symbol]=o.openPrice
                })
                result = Object.keys(objData).map(symbol =>{
                    return{
                        id:symbol.replace('USDT', ''), value: objData[symbol], pro:objData2[symbol], vol:objData3[symbol], open:objData4[symbol]
                    }
                })
                .filter(o => Math.abs(o.value) > percquery)    
                data = JSON.stringify(result)
                //console.log(data)
                console.log(`chegando ${result.length} pares  (${data.length})`)

                //Zerando campos 2 p alertas
                document.getElementById('max2').innerHTML='0.000'
                document.getElementById('min2').innerHTML='0.000'
                document.getElementById('maxac2').innerHTML='0.000'
                document.getElementById('minac2').innerHTML='0.000'
                
                //let ajudaa =''
                //SEGUNDO FOR
                for(i =0; i<result.length; i++){
                    //ajudaa= `{"cry":${result[i].id},"gelo":${result[i].pro}},`
                    //console.log(ajudaa)
                    let moe = result[i].id
                    let preco = result[i].pro
                    //let voll = (result[i].vol/1000000).toFixed(3);
                    //let valperc= result[i].value

                    //calculo de difm50 dif entre atual preço / m50
                    let difmed=''
                    if(document.getElementById(`m50_${result[i].id}`)){
                        basmed = document.getElementById(`m50_${result[i].id}`).innerHTML
                        if(parseFloat(basmed)===0){
                            //difmed=parseFloat(result[i].pro/basmed).toFixed(3)
                            document.getElementById(`difm50_${result[i].id}`).innerHTML=0

                        }else{
                            difmed=parseFloat(result[i].pro/basmed).toFixed(3)
                            document.getElementById(`difm50_${result[i].id}`).innerHTML=difmed

                        }
                        
                    }
                

                    

                    
                    //calculo da DIFSUP diferença entre valor atual e suporte Tabela Principal
                    let supmom = ''
                    let difsup=999.999
                    let resmom=''
                    let difres=99.99
                    
                    if(document.getElementById(`sup_${moe}`)){
                        supmom = document.getElementById(`sup_${moe}`).innerHTML
                        difsup = parseFloat(preco-supmom)/parseFloat(preco)
                        document.getElementById(`difsup_${result[i].id}`).innerHTML= (difsup*100).toFixed(2)
                    }

                    if(document.getElementById(`res_${moe}`)){
                        resmom = document.getElementById(`res_${moe}`).innerHTML
                        difres = parseFloat(preco-resmom)/parseFloat(preco)
                        document.getElementById(`difres_${result[i].id}`).innerHTML= (difres*100).toFixed(2)
                    }

                    
                    //logando init-atual x sup/res na rodada qual esta entre  
                    //console.log(`rodada ${c}`)
                    let init=preco
                    if(document.getElementById(`classe_${moe}`)){
                        let classit=document.getElementById(`classe_${moe}`).innerHTML
                        if(classit.length>5){
                            classit=classit.slice(-5)
                        }
                        if(parseInt(classit)===0){
                            if(parseFloat(init)>= parseFloat(supmom) && parseFloat(init)<= parseFloat(resmom)){
                                //entre 2
                                document.getElementById(`classe_${moe}`).innerHTML='2'
                            }else if(parseFloat(init)> parseFloat(resmom)){
                                //acima da resistencia 3
                                document.getElementById(`classe_${moe}`).innerHTML='3'
                            }else{
                                //abaixo do suporte 1
                                document.getElementById(`classe_${moe}`).innerHTML='1'
                            }
                        }else{
                            let ultimo=classit.slice(-1)
                            if(parseFloat(init)>= parseFloat(supmom) && parseFloat(init)<= parseFloat(resmom)){
                                //entre 2
                                if(parseInt(ultimo)===1 || parseInt(ultimo)===3){
                                    classit=classit+'2'
                                    document.getElementById(`classe_${moe}`).innerHTML=classit
                                }
                            }else if(parseFloat(init)> parseFloat(resmom)){
                                //acima da resistencia 3
                                if(parseInt(ultimo)===1 || parseInt(ultimo)===2){
                                    classit=classit+'3'
                                    document.getElementById(`classe_${moe}`).innerHTML=classit
                                }
                            }else{
                                //abaixo do suporte 1
                                if(parseInt(ultimo)===2 || parseInt(ultimo)===3){
                                    classit=classit+'1'
                                    document.getElementById(`classe_${moe}`).innerHTML=classit
                                }
                            }

                        }
                    }
                                       

                    //criando e/ou setando a tabela 2
                    if(parseFloat(difsup)<=0){
                        //if(Mathsign(difsup)==! 1){
                        if(document.getElementById(`cryalt_${moe}`)){

                            document.getElementById(`resqth_${moe}`).innerHTML= preco; //preço atual
                            document.getElementById(`resumh_${moe}`).innerHTML= supmom; //suporte
                            document.getElementById(`resqzm_${moe}`).innerHTML= (difsup*100).toFixed(2); //DifSup

                        }else{

                            //integracao(result[i].id)
                            //console.log(`O par difsup zero é ${moe}`)
                            //console.log(`O parlength ${par.length}`)
                            //console.log(`O par 1 ${par[0]}`)

                            let td1 = document.createElement("td")
                            td1.setAttribute('id', `cryalt_${moe}`) //cry cryalt
                            td1.setAttribute("class","td")
                        
                            td1.addEventListener('click',()=>{
                                let crycam= document.getElementById(`cryalt_${moe}`)
                                crycam.style.backgroundColor= '#8d8ec4'
                                //rechamar(par)
                                //document.getElementById(`pe_${result[i].id}`).innerHTML= valpz
                                //tdac.innerHTML='0.000'
                                //tdac.style.backgroundColor= '#ffffff'
                                //let azul = document.getElementById(`max_${result[i].id}`)
                                
                            })

                            let td2 = document.createElement("td")
                            td2.setAttribute('id', `resmes_${moe}`)//mes resmes
                            td2.setAttribute("class","td")

                            let td3 = document.createElement("td")
                            td3.setAttribute('id', `ressem_${moe}`)//sem ressem
                            td3.setAttribute("class","td")

                            let td4 = document.createElement("td")
                            td4.setAttribute('id', `resdia_${moe}`)//dia resdia
                            td4.setAttribute("class","td")

                            let td5 = document.createElement("td")
                            td5.setAttribute('id', `resqth_${moe}`)//4h resqth
                            td5.setAttribute("class","td")

                            let td6 = document.createElement("td")
                            td6.setAttribute('id', `resumh_${moe}`)//1h resumh
                            td6.setAttribute("class","td")

                            let td7 = document.createElement("td")
                            td7.setAttribute('id', `resqzm_${moe}`)//15m resqzm
                            td7.setAttribute("class","td")

                            let td8 = document.createElement("td")
                            td8.setAttribute('id', `rescim_${moe}`)//5m rescim
                            td8.setAttribute("class","td")

                            let td9 = document.createElement("td")
                            td9.setAttribute('id', `resumi_${moe}`)//1m resumi
                            td9.setAttribute("class","td")

                            let tr = document.createElement("tr") //produzindo o tr
                            tr.setAttribute('id', `trres_${moe}`)

                            tr.appendChild(td1)
                            tr.appendChild(td2)
                            tr.appendChild(td3)
                            tr.appendChild(td4)
                            tr.appendChild(td5)
                            tr.appendChild(td6)
                            tr.appendChild(td7)
                            tr.appendChild(td8)
                            tr.appendChild(td9)

                            let tab = document.getElementById('tbody22')

                            tab.appendChild(tr)
                            ///////////////////////////////////
                            document.getElementById(`cryalt_${moe}`).innerHTML= moe; //crypto
                            document.getElementById(`resmes_${moe}`).innerHTML= '000' ; //volume
                            document.getElementById(`ressem_${moe}`).innerHTML= '000'; //%24h

                            let opesu = document.getElementById(`ope_${moe}`).innerHTML

                            document.getElementById(`resdia_${moe}`).innerHTML= opesu; //open
                            document.getElementById(`resqth_${moe}`).innerHTML= preco; //preço atual
                            document.getElementById(`resumh_${moe}`).innerHTML= supmom; //suporte
                            document.getElementById(`resqzm_${moe}`).innerHTML= difsup.toFixed(8); //DifSup

                            let qualymsu = document.getElementById(`qualymes_${moe}`).innerHTML
                            let rmaxsu = document.getElementById(`rmaxtu_${moe}`).innerHTML

                            document.getElementById(`rescim_${moe}`).innerHTML= qualymsu; //Qualymes
                            document.getElementById(`resumi_${moe}`).innerHTML= rmaxsu;// RMT 1

                            document.getElementById('destaq').innerHTML= 'Suporte!!!'
                            
                            //audio.play()



                        }
                        
                    }else{
                        if(document.getElementById(`cryalt_${moe}`)){

                            //atual - sup = difsup
                            document.getElementById(`resqth_${moe}`).innerHTML= preco; //preço atual
                            document.getElementById(`resumh_${moe}`).innerHTML= supmom; //suporte
                            let trques = document.getElementById(`resqzm_${moe}`)
                            trques.innerHTML= difsup.toFixed(8); //DifSup
                            trques.style.backgroundColor = "#1da548"
                        }
                    }


                    //calculo do aumento
                    
                    let qubas= 1;
                    let base = 1;
                    let aumento, aum;
                    if(document.getElementById(`${moe}`)){
                        qubas= document.getElementById(`${moe}`)
                        base = qubas.innerHTML
                        aum = (parseFloat(result[i].pro) - parseFloat(base))/parseFloat(base);
                        aumento = aum*100
                        cresc = aumento.toFixed(3)

                        
                        //1 aumento (cresc) indo p coluna aumento
                        let campcr=   document.getElementById(`au_${moe}`)
                        campcr.innerHTML = cresc;

                        let docfor = document.getElementById(`${result[i].id}`);
                        docfor.innerHTML= preco
        
                        //colocando cor coluna aumento campcr cresc
                        if(cresc<= -4.0){
                            campcr.style.backgroundColor = "#700b0b"; //vermelho escurao

                        }else if(cresc > -4.0 && cresc <= -3.0){
                            campcr.style.backgroundColor = "#b51717"; //vermelho escuro

                        }else if(cresc > -3.0 && cresc <= -2.0){
                            campcr.style.backgroundColor = "#f7281d"; //vermelho medio

                        }else if(cresc >-2.0 && cresc <= -1.0){
                            campcr.style.backgroundColor = "#f9645c"; //vermelho claro

                        }else if(cresc > -1 && cresc <= -0.1){
                            campcr.style.backgroundColor = "#f9a29d"; //laranja-vermelho

                        }else if(cresc >-0.1 && cresc <= -0.01){
                            campcr.style.backgroundColor = "#fcdcd1"; //laranja

                        }else if(cresc >-0.01 && cresc <0.01){
                            campcr.style.backgroundColor = "#ffffff"; //branco

                        }else if(cresc >=0.01 && cresc <0.1){
                            campcr.style.backgroundColor = "#c5f271"; //amarelo

                        }else if(cresc >=0.1 && cresc <1.0){
                            campcr.style.backgroundColor = "#d2dd54"; //amarelo esverdeado

                        }else if(cresc >=1.0 && cresc <2.0){
                            campcr.style.backgroundColor = "#9db541"; // verde claro

                        }else if(cresc >=2.0 && cresc <3.0){
                            campcr.style.backgroundColor = "#1da548"; // verde medio

                        }else if(cresc >=3.0 && cresc < 4.0){
                            campcr.style.backgroundColor = "#138437"; // verde escuro

                        }else if(cresc > 4.0){
                            campcr.style.backgroundColor = "#0b5623"; // verde escurao

                        }


                        //2 acumulado (cracum) indo p coluna acumulado
                        let inip= document.getElementById(`pe_${moe}`).innerHTML
                        let acumu=(parseFloat(result[i].pro) - parseFloat(inip))/parseFloat(inip);
                        crac = (acumu*100)
                        cracum = crac.toFixed(3)
                        let campacu=   document.getElementById(`acu_${moe}`)
                        campacu.innerHTML = cracum;

                        //quantos posistivos? indo p painel 
                        if(parseFloat(cracum)>0){
                            contpos++
                        }else{
                            contrest++
                        }
                        




                        ///////////////////////////////////////////////////

                        //4 verificando acumulado p coluna MAXIMO e MINIMO e ULTIMO/PRIMEIRO
                        let maxvlr= document.getElementById(`max_${moe}`).innerHTML
                        let minvlr= document.getElementById(`min_${moe}`).innerHTML
                        let ultcamp= document.getElementById(`ultimo_${moe}`).innerHTML


                        if(Math.sign(cracum)=== -1){

                            if(parseFloat(maxvlr)===0){
                                document.getElementById(`max_${moe}`).innerHTML=cracum
                            }else if(parseFloat(maxvlr)<=0 && parseFloat(maxvlr)<parseFloat(cracum)){
                                document.getElementById(`max_${moe}`).innerHTML=cracum
                            }

                            if(parseFloat(cracum)<parseFloat(minvlr)){
                                document.getElementById(`min_${moe}`).innerHTML=cracum
                                minvlr=cracum
                                document.getElementById(`min_${moe}`).style.backgroundColor= '#f4f7ad' //amarelo clarinho
                                document.getElementById(`max_${moe}`).style.backgroundColor= '#ffffff' //branco

                            }
                            
                            if(parseInt(ultcamp)===0){
                                //ultcamp=cracum
                                document.getElementById(`ultimo_${moe}`).innerHTML='-100'

                            }

                            
                            
                        }else if(Math.sign(cracum)===1){

                            if(parseFloat(minvlr)===0){
                                document.getElementById(`min_${moe}`).innerHTML=cracum
                            }else if(parseFloat(minvlr)>0 && parseFloat(minvlr)>parseFloat(cracum)){
                                document.getElementById(`min_${moe}`).innerHTML=cracum
                            }

                            if(Math.abs(cracum)>=Math.abs(maxvlr)){
                                document.getElementById(`max_${moe}`).innerHTML=cracum
                                maxvlr=cracum
                                document.getElementById(`min_${moe}`).style.backgroundColor= '#ffffff' //branco
                                document.getElementById(`max_${moe}`).style.backgroundColor= '#f4f7ad' //amarelo clarinho

                            }
                            
                            if(parseInt(ultcamp)===0){
                                //ultcamp=cracum
                                document.getElementById(`ultimo_${moe}`).innerHTML='100'
                            }

                            

                            
                        }else if(Math.sign(cracum)===0){

                        }

                        

                        

                        let perdacamp= document.getElementById(`perda_${moe}`).innerHTML
                        let recupcamp= document.getElementById(`recup_${moe}`).innerHTML
                        let perda=''
                        let recup=''

                        //perda e recuperaçao
                        if(Math.sign(ultcamp)===1){//PRIMEIRO tocado foi o max
                            if(Math.sign(minvlr)===0){//nao tocou negativo
                                perda=parseFloat(cracum-maxvlr).toFixed(3)
                                if(parseFloat(cracum-maxvlr)===0){
                                    perda=parseFloat(cracum-maxvlr).toFixed(0)
                                }else{
                                    perda=parseFloat(cracum-maxvlr).toFixed(3)
                                }
                                if(parseFloat(perda)<0){
                                    
                                    document.getElementById(`perda_${moe}`).innerHTML=perda
                                }else{
                                    
                                    document.getElementById(`perda_${moe}`).innerHTML='0'
                                    document.getElementById(`recup_${moe}`).innerHTML=cracum
                                }
                            }else{//tocou negativo
                                //perda=parseFloat((maxvlr-cracum)*-1).toFixed(3) //(minvlr*-1)+maxvlr
                                //recup=parseFloat(cracum-minvlr).toFixed(3)
                                if(parseFloat(maxvlr-cracum)===0){
                                    perda=parseFloat((maxvlr-cracum)*-1).toFixed(0)
                                }else{
                                    perda=parseFloat((maxvlr-cracum)*-1).toFixed(3)
                                }
                                if(parseFloat(cracum-minvlr)===0){
                                    recup=parseFloat(cracum-minvlr).toFixed(0)
                                }else{
                                    recup=parseFloat(cracum-minvlr).toFixed(3)
                                }
                                
                                document.getElementById(`perda_${moe}`).innerHTML=perda
                                if(parseFloat(recup)>0){
                                    document.getElementById(`recup_${moe}`).innerHTML=recup
                                }else{
                                    document.getElementById(`recup_${moe}`).innerHTML='0'
                                }
                            }
                        }else if(Math.sign(ultcamp)===-1){//PRIMEIRO tocado foi o min

                            if(parseFloat(cracum-minvlr)===0){
                                recup= parseFloat(cracum-minvlr).toFixed(0)
                            }else{
                                recup= parseFloat(cracum-minvlr).toFixed(3)
                            }

                            if(Math.sign(maxvlr)===0){//nao tocou positivo
                                


                                if(parseFloat(recup)>0){
                                    document.getElementById(`recup_${moe}`).innerHTML=recup
                                    perda=cracum
                                    if(parseFloat(perda)===0){
                                        perda=parseFloat(perda).toFixed(0)
                                    }
                                    
                                    document.getElementById(`perda_${moe}`).innerHTML=perda
                                }else if(parseFloat(recup)<=0){
                                    perda=recup*-1//recup//parseFloat(minvlr-cracum).toFixed(3)
                                    if(parseFloat(perda)===0){
                                        perda=parseFloat(perda).toFixed(0)
                                    }
                                   
                                    document.getElementById(`perda_${moe}`).innerHTML=cracum
                                }




                            }else{//tocou positivo
                                //recup= parseFloat((cracum-minvlr)).toFixed(3)
                                if(Math.sign(recup)===-1){
                                    recup=-1*recup
                                }
                                document.getElementById(`recup_${moe}`).innerHTML=recup
                                perda=parseFloat(maxvlr-cracum).toFixed(3)
                                if(parseFloat(perda)<=0){
                                   
                                    document.getElementById(`perda_${moe}`).innerHTML='0'
                                }else{
                                    perda=-1*perda
                                   
                                    document.getElementById(`perda_${moe}`).innerHTML=perda
                                }
                            } 
                        }
                        
                        //diferença Maximo-Mínimo - Intervalo maximo
                        let difmm=''
                        if(document.getElementById(`difmm_${moe}`)){
                                difmm= parseFloat(maxvlr-minvlr).toFixed(3)
                                document.getElementById(`difmm_${moe}`).innerHTML=difmm

                            
                        }

                        //diferença entre recuper e perda

                        //let cdirecper= document.getElementById(`difperec_${moe}`).innerHTML
                        let gain=0
                        let perdeu=0
                        let difrecp=0
                        let campdifrecp= document.getElementById(`difperec_${moe}`).innerHTML
                        let campdifprcnt= document.getElementById(`difprcnt_${moe}`).innerHTML
                        let newcprc=''

                        if(document.getElementById(`perda_${moe}`)){
                            perdeu= document.getElementById(`perda_${moe}`).innerHTML
                            gain= document.getElementById(`recup_${moe}`).innerHTML
                            difrecp=parseFloat(gain)+parseFloat(perdeu)
                            if(parseFloat(difrecp)===0){
                                difrecp=difrecp.toFixed(0)
                            }else{
                                difrecp=difrecp.toFixed(3)
                            }

                            if(parseFloat(difrecp)>parseFloat(campdifrecp)){//melhorrou + a dif
                                document.getElementById(`difperec_${moe}`).style.backgroundColor = "#1da548";//verde medio
                                if(parseFloat(campdifprcnt)>=0){//se a contagem esta positiva ou zero
                                    newcprc= parseFloat(campdifprcnt)+1
                                    document.getElementById(`difprcnt_${moe}`).innerHTML=newcprc
                                }else if(parseFloat(campdifprcnt)<=0){//se a contagem esta negativa ou zero
                                    newcprc= 1
                                    document.getElementById(`difprcnt_${moe}`).innerHTML=newcprc
                                }
                                

                            }else if(parseFloat(difrecp)<parseFloat(campdifrecp)){//piorou - a dif
                                document.getElementById(`difperec_${moe}`).style.backgroundColor = "#f7281d";//vermelho medio
                                if(parseFloat(campdifprcnt)>=0){//se a contagem esta positiva ou zero
                                    newcprc= -1
                                    document.getElementById(`difprcnt_${moe}`).innerHTML=newcprc
                                }else if(parseFloat(campdifprcnt)<=0){//se a contagem esta negativa ou zero
                                    newcprc= parseFloat(campdifprcnt-1)
                                    document.getElementById(`difprcnt_${moe}`).innerHTML=newcprc
                                }
                               


                            }


                            document.getElementById(`difperec_${moe}`).innerHTML=difrecp
                            //console.log(`${moe} gain${gain} + perdeu${perdeu} = dif ${difrecp}`)


                           

                        }




                        ///////////////////////////// IFs DA SORTE!!
                        let selecult=document.getElementById(`ultimo_${moe}`).innerHTML
                        let selecmin=document.getElementById(`min_${moe}`).innerHTML
                        let selecdrp=document.getElementById(`difperec_${moe}`).innerHTML
                        let selecacu=document.getElementById(`acu_${moe}`).innerHTML

                        if(Math.sign(selecult)===-1){
                            if(Math.abs(selecmin)>0 && Math.abs(selecmin)<1.7){
                                    if(parseFloat(selecacu)>=0){
                                        //console.log(`BOA SORTE com ${moe}`)
                                        sorte.push(moe)
                                    }else if(parseFloat(selecacu)>2){
                                        if(parseFloat(selec3)>0){
                                            //console.log(`COMPRAR ${moe}  por ${preco}!!`)
                                        }
                                    }
                            }
                        }else if(Math.sign(selecult)===1){
                            if(Math.abs(selecmin)>0 && Math.abs(selecmin)<=1){
                                if(parseFloat(selecdrp)>0){
                                    if(parseFloat(selecacu)>0 && parseFloat(selecacu)<1){
                                        //console.log(`BOA SORTE com ${moe}`)
                                        sorte.push(moe)
                                    }else if(parseFloat(selecacu)>=1){
                                        //console.log(`COMPRAR ${moe}  por ${preco}!!`)
                                    }
                                }
                            }else if(Math.abs(selecmin)===0){
                                if(parseFloat(selecdrp)>=0){
                                    if(parseFloat(selecacu)>1 && Math.abs(selecmin)<2){
                                    //console.log(`BOA SORTE com ${moe}`)
                                    sorte.push(moe)
                                    }else if(parseFloat(selecacu)>=2){
                                        //console.log(`COMPRAR ${moe} por ${preco}!!`)
                                    }
                                }
                            }
                        }
                        //////////////////////////////////
                        



                        //colocando cor coluna acumulado campacu cracum
                        if(cracum<= -4.0){
                            campacu.style.backgroundColor = "#700b0b"; //vermelho escurao

                        }else if(cracum > -4.0 && cracum <= -3.0){
                            campacu.style.backgroundColor = "#b51717"; //vermelho escuro

                        }else if(cracum > -3.0 && cracum <= -2.0){
                            campacu.style.backgroundColor = "#f7281d"; //vermelho medio

                        }else if(cracum >-2.0 && cracum <= -1.0){
                            campacu.style.backgroundColor = "#f9645c"; //vermelho claro

                        }else if(cracum > -1 && cracum <= -0.1){
                            campacu.style.backgroundColor = "#f9a29d"; //laranja-vermelho

                        }else if(cracum >-0.1 && cracum <= -0.01){
                            campacu.style.backgroundColor = "#fcdcd1"; //laranja

                        }else if(cracum >-0.01 && cracum <0.01){
                            campacu.style.backgroundColor = "#ffffff"; //branco

                        }else if(cracum >=0.01 && cracum <0.1){
                            campacu.style.backgroundColor = "#c5f271"; //amarelo

                        }else if(cracum >=0.1 && cracum <1.0){
                            campacu.style.backgroundColor = "#d2dd54"; //amarelo esverdeado

                        }else if(cracum >=1.0 && cracum <2.0){
                            campacu.style.backgroundColor = "#9db541"; // verde claro

                        }else if(cracum >=2.0 && cracum <3.0){
                            campacu.style.backgroundColor = "#1da548"; // verde medio

                        }else if(cracum >=3.0 && cracum < 4.0){
                            campacu.style.backgroundColor = "#138437"; // verde escuro

                        }else if(cracum > 4.0){
                            campacu.style.backgroundColor = "#0b5623"; // verde escurao

                        }

                    }else{
                        qtsmoe.push(moe)
                        //console.log(`Nova moeda nao cadastrada: ${moe}`)
                        entracry(result,i)
                        //console.log(`Entrou ${moe}`)
                    }

                    //console.log(`Quantas moedas nao cadastrada: ${qtsmoe.length}`)
                    //console.log(`São elas: ${qtsmoe}`)


                    //Quarto FOR - OUTRAS CRYO QUE NAO ENTRARAM
                   
                    setTimeout(500)   //timeout

                    cresc=cracum
                    grafico(moe, c, cresc)

                    //preparando campo max min - Aumento rodada ?? Record
                    let maxperc=document.getElementById('max').innerHTML
                    let maxperc2=document.getElementById('max2').innerHTML

                    let minperc=document.getElementById('min').innerHTML
                    let minperc2=document.getElementById('min2').innerHTML


                    //preparando input max min Aumento
                    let inpmaxcamp= document.getElementById('inpmax')
                    let inpmax= inpmaxcamp.value
                    let inpmin= document.getElementById('inpmin').value
                    
                    let audio2=document.getElementById('audio')


                    // 5 aqui entra os recordes da rodada
                    if(cresc>maxperc){
                        document.getElementById('max').innerHTML= cresc
                        document.getElementById('moemax').innerHTML= moe
                    }
                    if(cresc>maxperc2){
                        document.getElementById('max2').innerHTML= cresc
                        document.getElementById('moemax2').innerHTML= moe
                    }
                    if(cresc[0]==='-'&& Math.abs(cresc)>Math.abs(minperc)){
                        document.getElementById('min').innerHTML=cresc
                        document.getElementById('moemin').innerHTML= moe
                    }
                    if(cresc[0]==='-'&& Math.abs(cresc)>Math.abs(minperc2)) {
                        document.getElementById('min2').innerHTML=cresc
                        document.getElementById('moemin2').innerHTML= moe
                    }
                    audio = document.querySelector('audio')

                    //aqui compara input max recorde / aumento ???
                    if(inpmax){
                        if(cresc>=parseFloat(inpmax)){
                            console.log(`ALERTA! Moeda ${moe} atingiu alta de ${cresc}% na rodada`)
                            audio2.play()
                            document.getElementById('butmax').style.backgroundColor = "#138437"
                        }
                    }

                    //aqui compara input min recorde/ aumento ???
                    if(inpmin){
                        if(cresc[0]==='-'&& Math.abs(cresc)>=Math.abs(inpmin)){
                            console.log(`ALERTA! Moeda ${moe} atingiu baixa de ${cresc}% na rodada`)
                            let audio = document.querySelector('audio')

                            audio2.play()
                            document.getElementById('butmin').style.backgroundColor = "#138437"
                        }
                    }



                    //Alerta max min Acumulado - 
                    let itemacum= '';
                    if(document.getElementById(`acu_${moe}`)){
                        itemacum= document.getElementById(`acu_${moe}`).innerHTML
                       
                    }
                    let minpercac= document.getElementById('minac').innerHTML
                    let minpercac2= document.getElementById('minac2').innerHTML
                    let maxpercac= document.getElementById('maxac').innerHTML
                    let maxpercac2= document.getElementById('maxac2').innerHTML
                    let inpmaxactst= document.getElementById('inpmaxac').value
                    let inpmaxac= parseFloat(inpmaxactst)
                    let inpminac= document.getElementById('inpminac').value
                    
                    
                    if(parseFloat(itemacum)>parseFloat(maxpercac)){
                        let agora = new Date();
                        let hora = agora.getHours()
                        let min = agora.getMinutes()
                        let seg = agora.getSeconds()
                        document.getElementById('maxac').innerHTML=itemacum
                        document.getElementById('moemaxac').innerHTML= moe
                        console.log(`Novo Record acum+ ${moe}: ${itemacum}% às ${hora}:${min}:${seg}`)
                        if(parseFloat(itemacum)>5){
                            console.log(`Record >5%. Imprimindo...`)
                            geraponta()
                        }
                    }
                    if(parseFloat(itemacum)>parseFloat(maxpercac2)){
                        document.getElementById('maxac2').innerHTML= parseFloat(itemacum)
                        document.getElementById('moemaxac2').innerHTML= moe
                    }
                    if(Math.sign(itemacum)===-1 && Math.abs(itemacum)>Math.abs(minpercac)){
                        document.getElementById('minac').innerHTML= itemacum
                        document.getElementById('moeminac').innerHTML= moe
                    }
                    if(Math.sign(itemacum)===-1 && Math.abs(itemacum)>Math.abs(minpercac2)) {
                        document.getElementById('minac2').innerHTML= itemacum
                        document.getElementById('moeminac2').innerHTML= moe
                    }
                    if(inpmaxac){
                        if(itemacum>=inpmaxac){//primeiro play
                            console.log(`ALERTA! Moeda ${moe} atingiu alta de ${itemacum}% no acumulado`)
                            audio = document.querySelector('audio')
                            audio2.play()
                            document.getElementById('butmaxac').style.backgroundColor = "#138437"
                            
                            
                        }
                    }
                    if(inpminac){
                        if(Math.sign(itemacum)===-1 && Math.abs(itemacum)>=Math.abs(inpminac)){
                            console.log(`ALERTA! Moeda ${moe} atingiu baixa de ${cresc}% no acumulado`)
                            audio2.play()
                            document.getElementById('butminac').style.backgroundColor = "#138437"
                        }
                    }


                    //colocando valores na coluna %24at e %24dif...(%at-%ini/%ini)...
                    let percat =''
                    let difer=''
                    if(document.getElementById(`ope_${moe}`)){
                        opebas=document.getElementById(`ope_${moe}`).innerHTML
                        //campo %24 at recebendo valor percat
                        let parca=  parseFloat(((preco-opebas)/opebas))
                        let percat= (parca*100).toFixed(2)
                        document.getElementById(`at_${moe}`).innerHTML= percat
                        //calculando diferença %24dif(%at-%ini/%ini)
                        let percin= document.getElementById(`in_${moe}`).innerHTML
                        difer =parseFloat(percat-percin).toFixed(2)
                        
                        let campdif= document.getElementById(`dif_${moe}`)
                        campdif.innerHTML=difer // (difer*100).toFixed(2)
                        
                        // coluna dif %24h recebendo cor
                        if(difer<= -4.0){
                            campdif.style.backgroundColor = "#700b0b"; //vermelho escurao

                        }else if(difer > -4.0 && difer <= -3.0){
                            campdif.style.backgroundColor = "#b51717"; //vermelho escuro

                        }else if(difer > -3.0 && difer <= -2.0){
                            campdif.style.backgroundColor = "#f7281d"; //vermelho medio

                        }else if(difer >-2.0 && difer <= -1.0){
                            campdif.style.backgroundColor = "#f9645c"; //vermelho claro

                        }else if(difer > -1 && difer <= -0.1){
                            campdif.style.backgroundColor = "#f9a29d"; //laranja-vermelho

                        }else if(difer >-0.1 && difer <= -0.01){
                            campdif.style.backgroundColor = "#fcdcd1"; //laranja

                        }else if(difer >-0.01 && difer <0.01){
                            campdif.style.backgroundColor = "#ffffff"; //branco

                        }else if(difer >=0.01 && difer <0.1){
                            campdif.style.backgroundColor = "#c5f271"; //amarelo

                        }else if(difer >=0.1 && difer <1.0){
                            campdif.style.backgroundColor = "#d2dd54"; //amarelo esverdeado

                        }else if(difer >=1.0 && difer <2.0){
                            campdif.style.backgroundColor = "#9db541"; // verde claro

                        }else if(difer >=2.0 && difer <3.0){
                            campdif.style.backgroundColor = "#1da548"; // verde medio

                        }else if(difer >=3.0 && difer < 4.0){
                            campdif.style.backgroundColor = "#138437"; // verde escuro

                        }else if(difer > 4.0){
                            campdif.style.backgroundColor = "#0b5623"; // verde escurao

                        }
                    }

                    //calculo do aumento %24 gelo---onde era aum vol auvol_
                    let basgelo=''

                    let aumgelo=''
                    let aumgelo2=''
                    let aumgelo3=''
                    let aumgelo4=''
                    let aumgelo5=''
                    let aumgelo6=''
                    //1
                    if(document.getElementById(`gelo_${result[i].id}`)){
                        basgelo = document.getElementById(`gelo_${result[i].id}`).innerHTML
                        if(parseFloat(basgelo)===0){
                            aumgelo=0
                        }else{
                            aumgelo = parseFloat((preco-basgelo)/basgelo)
                        }
                        //aumgelo = parseFloat((preco-basgelo)/basgelo)

                        if(document.getElementById(`auvol_${result[i].id}`)){
                            aumgelo=(aumgelo*100).toFixed(2)
                            document.getElementById(`auvol_${result[i].id}`).innerHTML= aumgelo
                        }
                        if(parseFloat(aumgelo)>0){
                            let verd1=document.getElementById(`auvol_${result[i].id}`)
                            verd1.style.backgroundColor="#9db541"
                        }
                        
                    }
                    
                    
                    //2
                    if(document.getElementById(`gelo30_${result[i].id}`)){
                        basgelo = document.getElementById(`gelo30_${result[i].id}`).innerHTML
                        if(parseFloat(basgelo)===0){
                            aumgelo2=0
                        }else{
                            aumgelo2 = parseFloat((preco-basgelo)/basgelo)
                        }
                        //aumgelo = parseFloat((preco-basgelo)/basgelo)

                        if(document.getElementById(`percgel30_${result[i].id}`)){
                            aumgelo2=(aumgelo2*100).toFixed(2)
                            document.getElementById(`percgel30_${result[i].id}`).innerHTML= aumgelo2
                        }
                        if(parseFloat(aumgelo2)>=parseFloat(aumgelo)){
                            let verd2=document.getElementById(`percgel30_${result[i].id}`)
                            verd2.style.backgroundColor="#9db541"
                        }
                        
                        
                    }

                    
                    
                    //3
                    if(document.getElementById(`gelo45_${result[i].id}`)){
                        basgelo = document.getElementById(`gelo45_${result[i].id}`).innerHTML
                        if(parseFloat(basgelo)===0){
                            aumgelo3=0
                        }else{
                            aumgelo3 = parseFloat((preco-basgelo)/basgelo)
                        }
                        //aumgelo = parseFloat((preco-basgelo)/basgelo)

                        if(document.getElementById(`percgel45_${result[i].id}`)){
                            aumgelo3=(aumgelo3*100).toFixed(2)
                            document.getElementById(`percgel45_${result[i].id}`).innerHTML= aumgelo3
                        }
                        if(parseFloat(aumgelo3)>=parseFloat(aumgelo2)){
                            let verd3=document.getElementById(`percgel45_${result[i].id}`)
                            verd3.style.backgroundColor="#9db541"
                            
                        }
                        
                        
                    }

                    //4
                    if(document.getElementById(`gelo60_${result[i].id}`)){
                        basgelo = document.getElementById(`gelo60_${result[i].id}`).innerHTML
                        if(parseFloat(basgelo)===0){
                            aumgelo4=0
                        }else{
                            aumgelo4 = parseFloat((preco-basgelo)/basgelo)
                        }
                        //aumgelo = parseFloat((preco-basgelo)/basgelo)

                        if(document.getElementById(`percgel60_${result[i].id}`)){
                            aumgelo4=(aumgelo4*100).toFixed(2)
                            document.getElementById(`percgel60_${result[i].id}`).innerHTML= aumgelo4
                        }
                        if(parseFloat(aumgelo4)>parseFloat(aumgelo3)){
                            let verd4=document.getElementById(`percgel60_${result[i].id}`)
                            verd4.style.backgroundColor="#9db541"
                            

                        }
                        
                    }

                    //5
                    if(document.getElementById(`gelo120_${result[i].id}`)){
                        basgelo = document.getElementById(`gelo120_${result[i].id}`).innerHTML
                        if(parseFloat(basgelo)===0){
                            aumgelo5=0
                        }else{
                            aumgelo5 = parseFloat((preco-basgelo)/basgelo)
                        }
                        //aumgelo = parseFloat((preco-basgelo)/basgelo)

                        if(document.getElementById(`percgel120_${result[i].id}`)){
                            aumgelo5=(aumgelo5*100).toFixed(2)
                            document.getElementById(`percgel120_${result[i].id}`).innerHTML= aumgelo5
                        }
                        if(parseFloat(aumgelo5)>parseFloat(aumgelo4)){
                            let verd5=document.getElementById(`percgel120_${result[i].id}`)
                            verd5.style.backgroundColor="#9db541"
                            

                        }
                        
                    }

                    //6
                    if(document.getElementById(`gelo240_${result[i].id}`)){
                        basgelo = document.getElementById(`gelo240_${result[i].id}`).innerHTML
                        if(parseFloat(basgelo)===0){
                            aumgelo6=0
                        }else{
                            aumgelo6 = parseFloat((preco-basgelo)/basgelo)
                        }
                        //aumgelo = parseFloat((preco-basgelo)/basgelo)

                        if(document.getElementById(`percgel240_${result[i].id}`)){
                            aumgelo6=(aumgelo6*100).toFixed(2)
                            document.getElementById(`percgel240_${result[i].id}`).innerHTML= aumgelo6
                        }
                        if(parseFloat(aumgelo6)>parseFloat(aumgelo5)){
                            let verd6=document.getElementById(`percgel240_${result[i].id}`)
                            verd6.style.backgroundColor="#9db541"
                        }
                    }

                    //inv15
                    /*
                    if(document.getElementById(`inv15_${result[i].id}`)){
                        let inver15=document.getElementById(`inv15_${result[i].id}`).innerHTML
                        let difinat= document.getElementById(`dif_${result[i].id}`).innerHTML
                        let perc15= document.getElementById(`auvol_${result[i].id}`).innerHTML
                        let perc30= document.getElementById(`percgel30_${result[i].id}`).innerHTML
                        let perc45= document.getElementById(`percgel45_${result[i].id}`).innerHTML
                        let perc60= document.getElementById(`percgel60_${result[i].id}`).innerHTML
                        let perc120= document.getElementById(`percgel120_${result[i].id}`).innerHTML
                        let perc240= document.getElementById(`percgel240_${result[i].id}`).innerHTML
                        if(parseInt(inver15)===0){
                            if(Math.sign(difinat)===1 && Math.sign(perc15)===-1){
                                if(Math.abs(difinat)>Math.abs(perc15)){
                                    document.getElementById(`inv15_${result[i].id}`).innerHTML=15

                                }

                            }
                        }

                        

                        

                    }*/


                    //desde
                    let desde=''
                    let campdesde=document.getElementById(`desde_${result[i].id}`)
                    //let difag=document.getElementById(`dif_${result[i].id}`).innerHTML
                    
                    if(parseFloat(difer)>0){
                        desde='1'
                        if(parseFloat(aumgelo)>0){
                            desde=desde+'1'
                            if(parseFloat(aumgelo2)>=parseFloat(aumgelo)){
                                desde=desde+'1'
                                if(parseFloat(aumgelo3)>=parseFloat(aumgelo2)){
                                    desde=desde+'1'
                                    if(parseFloat(aumgelo4)>=parseFloat(aumgelo3)){
                                        desde=desde+'1'
                                        if(parseFloat(aumgelo5)>=parseFloat(aumgelo4)){
                                            desde=desde+'1'
                                            if(parseFloat(aumgelo6)>=parseFloat(aumgelo5)){
                                                desde=desde+'1'
                                                campdesde.innerHTML=desde
                                            }else{
                                                campdesde.innerHTML=desde
                                            }  
                                        }else{
                                            campdesde.innerHTML=desde
                                        }
                    
                                    }else{
                                        campdesde.innerHTML=desde
                                    }
                
                                }else{
                                    campdesde.innerHTML=desde
                                }
        
                            }else{
                                campdesde.innerHTML=desde
                            }

                        }else{
                            campdesde.innerHTML=desde
                            
                        }
    
                    }else if(parseFloat(difer)<0){
                        desde='-1'
                        if(parseFloat(aumgelo)<0){
                            desde='-11'
                            if(parseFloat(aumgelo2)<=parseFloat(aumgelo)){
                                desde='-111'
                                if(parseFloat(aumgelo3)<=parseFloat(aumgelo2)){
                                    desde='-1111'
                                    if((aumgelo4)<=parseFloat(aumgelo3)){
                                        desde='-11111'
                                        if(parseFloat(aumgelo5)<=parseFloat(aumgelo4)){
                                            desde='-111111'
                                            if(parseFloat(aumgelo6)<=parseFloat(aumgelo5)){
                                                desde='-1111111'
                                                campdesde.innerHTML=desde
                                            }else{
                                                campdesde.innerHTML=desde
                                            }
                                        }else{
                                            campdesde.innerHTML=desde
                                        }
                                    }else{
                                        campdesde.innerHTML=desde
                                    }

                                }else{
                                    campdesde.innerHTML=desde
                                }
                            }else{
                                campdesde.innerHTML=desde
                            }
                        }else{
                            campdesde.innerHTML=desde
                        }
                    }else{
                        //campdesde.innerHTML=desde                        
                    }
                }

                //enviando quantos % acumulado positivo
                let conttot=parseInt((contpos/(contpos+contrest))*100)
                //console.log(`contpos= ${contpos} e contrest = ${contrest} e %=${conttot}`)
                if(document.getElementById('quantpos')){
                    document.getElementById('quantpos').innerHTML=conttot

                }
                //ajudaa.sort()
                //let jss= JSON.stringify(ajudaa)
                //console.log(jss)
                //console.log(`Acima da resistência: [${acimas}]`)
                //console.log(`Entre suporte e resistência: [${entresups}]`)
                //console.log(`Abaixo do suporte: [${abaixos}]`)
                //console.log(`SORTE DA RODADA: ${sorte}`)
                sorte=[]
                

            })
            
        })
        .catch(err=> console.error('Algo deu errado',err))
        
        v+=i
        document.getElementById('qtatul').innerHTML= i
        document.getElementById('render').innerHTML= c
        document.getElementById('ttteste').innerHTML= v
        let tot= parseFloat(v/c)
        document.getElementById('ttrela').innerHTML= parseInt(tot)


        if(parseInt(qtsmoe.length)>=1){
            console.log(`Entraram + ${qtsmoe.length}: ${qtsmoe}`)
            let qttem = document.getElementById('quantcry').innerHTML
            let tottem = parseInt(qttem)+ parseInt(qtsmoe.length)
            document.getElementById('quantcry').innerHTML= tottem
            lissuporte()
            //gelar()
            console.log(`Total: ${tottem} pares/USDT`)

            if(tottem>=320){
                console.log(`Imprimindo chave com ${tottem} cryptos...`)
                setTimeout(() => {
                    integrar()
                }, 60000);
            }
        }
        
        

        
        if(c>4){
            if(tot<200){
                automatic()
            }
            
        }
        
        c= c+1;

        qtsmoe=[]
    
    }, interval);
    
}

//ZERAR Alerta max min Aumento--Recorde
let btnZMax =document.getElementById('rodamax')
btnZMax.addEventListener("click", ()=>{
    document.getElementById('max').innerHTML= '0.000'
    document.getElementById('moemax').innerHTML= 'MOE'
});
let btnZMin =document.getElementById('rodamin')
btnZMin.addEventListener("click", ()=>{
    document.getElementById('min').innerHTML= '0.000'
    document.getElementById('moemin').innerHTML= 'MOE'
});

//ZERAR Alerta max min Acumulado --Recorde
let btnZMaxac =document.getElementById('rodamaxac')
btnZMaxac.addEventListener("click", ()=>{
    document.getElementById('maxac').innerHTML= '0.000'
    document.getElementById('moemaxac').innerHTML= 'MOE'
});
let btnZMinac =document.getElementById('rodaminac')
btnZMinac.addEventListener("click", ()=>{
    document.getElementById('minac').innerHTML= '0.000'
    document.getElementById('moeminac').innerHTML= 'MOE'
});



//iniciar cronometro
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//marcar o gráfico

function grafico(moe, c, cresc){

    //console.log(moe.length)
    let tdg = document.createElement("td")
    tdg.setAttribute("id",`gr_${moe}_${c}`)
    tdg.setAttribute("class","tg")

    let trg = '';
    if(document.getElementById(`tr_${moe}`)){

        trg = document.getElementById(`tr_${moe}`)
        trg.appendChild(tdg)

        let tabg = document.getElementById('tbody')
        tabg.appendChild(trg)
        let campgr= document.getElementById(`gr_${moe}_${c}`)


            //colocando cor gráfico
        if(cresc<= -4.0){
            campgr.style.backgroundColor = "#700b0b"; //vermelho escurao

        }else if(cresc > -4.0 && cresc <= -3.0){
            campgr.style.backgroundColor = "#b51717"; //vermelho escuro

        }else if(cresc > -3.0 && cresc <= -2.0){
            campgr.style.backgroundColor = "#f7281d"; //vermelho medio

        }else if(cresc >-2.0 && cresc <= -1.0){
            campgr.style.backgroundColor = "#f9645c"; //vermelho claro

        }else if(cresc > -1 && cresc <= -0.1){
            campgr.style.backgroundColor = "#f9a29d"; //laranja-vermelho

        }else if(cresc >-0.1 && cresc <= -0.01){
            campgr.style.backgroundColor = "#fcdcd1"; //laranja

        }else if(cresc >=0.01 && cresc <0.1){
            campgr.style.backgroundColor = "#c5f271"; //amarelo

        }else if(cresc >=0.1 && cresc <1.0){
            campgr.style.backgroundColor = "#d2dd54"; //amarelo esverdeado

        }else if(cresc >=1.0 && cresc <2.0){
            campgr.style.backgroundColor = "#9db541"; // verde claro

        }else if(cresc >=2.0 && cresc <3.0){
            campgr.style.backgroundColor = "#1da548"; // verde medio

        }else if(cresc >=3.0 && cresc < 4.0){
            campgr.style.backgroundColor = "#138437"; // verde escuro

        }else if(cresc > 4.0){
            campgr.style.backgroundColor = "#0b5623"; // verde escurao

        }

    }else{
        console.log(`sem grafico p ${moe}`)
    }


    let btnzeg= document.getElementById('zeragraf')
    btnzeg.addEventListener('click', ()=>{
        if(document.getElementById(`gr_${moe}_${c}`)){
            let grapag= document.getElementById(`gr_${moe}_${c}`).remove()
            
        }
        console.log(`Reiniciando marcações gráficas`)
    })
    

}


//Botao ALERTAS - pausar audio
btnaux= document.getElementById('butmax')
btnaux.addEventListener('click',()=>{
    btnaux.style.backgroundColor= '#ffffff'
    audio.pause()
})

btnaum= document.getElementById('butmin')
btnaum.addEventListener('click',()=>{
    btnaum.style.backgroundColor= '#ffffff'
    audio.pause()
})

btnacx= document.getElementById('butmaxac')
btnacx.addEventListener('click',()=>{
    btnacx.style.backgroundColor= '#ffffff'
    audio.pause()
})

btnacm= document.getElementById('butminac')
btnacm.addEventListener('click',()=>{
    btnacm.style.backgroundColor= '#ffffff'
    audio.pause()
})

// 313 cryptos...
function quantcry(){
    let total=''
    setTimeout(() => {
        let out= document.getElementsByTagName('tr')
        total= out.length-2
        document.getElementById('quantcry').innerHTML= total

        if(total>=319){
            setTimeout(() => {
                console.log(`Imprimindo chave com ${total} cryptos...`)
                integrar()
            }, 60000);
        }
        
    }, 10000);
    
    
}
quantcry()

//contar tr, td, gr_moe_1


//FUNCAO AUTOMATIC
function automatic(){
    document.location.reload(true);
    // Recarrega a página atual sem usar o cache
}

///////// botao reload -automatico -tem q setar/tirar checked no input

function restart(){
    let start = document.querySelector('input[name="autom"]:checked').value
    if(start){
    //window.addEventListener('load', reativar)
    ativar()
    document.getElementById('inpmaxac').value= '10'
    document.getElementById('inpminac').value= '10'
    document.getElementById('inpmin').value= '5'
    document.getElementById('inpmax').value= '5'
    }
    console.log('(modo automático)')
}
restart()






/*
function integracao(par){
    
    //let cryalt= document.getElementById('cryalt').innerHTML
    //let resmes= document.getElementById('resmes').innerHTML
    //let ressem= document.getElementById('ressem').innerHTML
    //let resdia= document.getElementById('resdia').innerHTML
    //let resqth= document.getElementById('resqth').innerHTML
    //let resumh= document.getElementById('resumh').innerHTML
    //let resqzm= document.getElementById('resqzm').innerHTML
    //let rescim= document.getElementById('rescim').innerHTML
    //let resumi= document.getElementById('resumi').innerHTML
    
    //if(newpar ==! par){

        console.log(`O par é ${par}`)
        console.log(`O parlength ${par.length}`)
        //console.log(`O par 1 ${par[0]}`)

        
        let td1 = document.createElement("td")
        td1.setAttribute('id', `cryalt_${par}`) //cry cryalt
        td1.setAttribute("class","td")
        

        td1.addEventListener('click',()=>{
            let crycam= document.getElementById(`cryalt_${par}`)
            crycam.style.backgroundColor= '#8d8ec4'
            //rechamar(par)
            //document.getElementById(`pe_${result[i].id}`).innerHTML= valpz
            //tdac.innerHTML='0.000'
            //tdac.style.backgroundColor= '#ffffff'
            //let azul = document.getElementById(`max_${result[i].id}`)
            
        })

        let td2 = document.createElement("td")
        td2.setAttribute('id', `resmes_${par}`)//mes resmes
        td2.setAttribute("class","td")

        let td3 = document.createElement("td")
        td3.setAttribute('id', `ressem_${par}`)//sem ressem
        td3.setAttribute("class","td")

        let td4 = document.createElement("td")
        td4.setAttribute('id', `resdia_${par}`)//dia resdia
        td4.setAttribute("class","td")

        let td5 = document.createElement("td")
        td5.setAttribute('id', `resqth_${par}`)//4h resqth
        td5.setAttribute("class","td")

        let td6 = document.createElement("td")
        td6.setAttribute('id', `resumh_${par}`)//1h resumh
        td6.setAttribute("class","td")

        let td7 = document.createElement("td")
        td7.setAttribute('id', `resqzm_${par}`)//15m resqzm
        td7.setAttribute("class","td")

        let td8 = document.createElement("td")
        td8.setAttribute('id', `rescim_${par}`)//5m rescim
        td8.setAttribute("class","td")

        let td9 = document.createElement("td")
        td9.setAttribute('id', `resumi_${par}`)//1m resumi
        td9.setAttribute("class","td")

        let tr = document.createElement("tr") //produzindo o tr
        tr.setAttribute('id', `trres_${par}`)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)

        let tab = document.getElementById('tbody22')

    tab.appendChild(tr)
    ///////////////////////////////////
    document.getElementById(`cryalt_${par}`).innerHTML= par;
    document.getElementById(`resmes_${par}`).innerHTML= ;
    document.getElementById(`ressem_${par}`).innerHTML= 'pts';
    document.getElementById(`resdia_${par}`).innerHTML= 'pts';
    document.getElementById(`resqth_${par}`).innerHTML= 'pts';
    document.getElementById(`resumh_${par}`).innerHTML= 'pts';
    document.getElementById(`resqzm_${par}`).innerHTML= 'pts';
    document.getElementById(`rescim_${par}`).innerHTML= 'pts';
    document.getElementById(`resumi_${par}`).innerHTML= 'pts';


    //////////////////////////////////////////}
    

    //setTimeout(200)
    //rechamar(par)
    

}
*/
/////////////////////////