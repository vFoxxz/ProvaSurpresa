
export function CalcularAcai (peq, med, grand, desc){


        if(peq< 0 || med<0 ||grand<0){
            throw new Error('Não foi possivel realizar a compra')
        }
        
        if(Number.isInteger(peq) === false || Number.isInteger(med) === false || Number.isInteger(grand) === false) throw new Error('Somente Valores Inteiros')
       
        if(peq >= 0 || med >=0 || grand >= 0 ){
            let soma = peq * 13.50 + med  * 15 + grand * 17.50
            let Desconto = soma * desc / 100
            let final = soma - Desconto

            return final

        }

        

}

export function CalcularSigno(dia, mes){
  
    let resp = ''
    
    if(dia>=23 && mes==="setembro" || dia <=22 && mes==="outubro"){
         resp =("Sim")
    }
    else{
         resp =("Não") 
    }

    return resp

}

export function calcularPrecoGrama (gramas){
    let total = 0
    if(gramas >= 1000){
        total = (gramas / 100) * 3
        return total
    }
    
    else if(gramas > 0) {
        total = (gramas / 100) * 3.50
        return total
    }
}

export function CalcularSalario (salarioBase, bonus, desconto){
    if(salarioBase <= 0){
        throw new Error("Digíte um salário válido")
    }
    
        let bonos = salarioBase * bonus / 100;
        let soma = salarioBase - desconto + bonos
        return soma
    
}

export function CalcularParada(capac, consumo, dist) {

    try {   
        let resultado = ''
        let litros = dist / consumo
        let paradas = litros / capac

        paradas = Math.ceil(paradas)

        if(paradas>1){
         resultado = 'Você precisará fazer ' + paradas + ' paradas para abastecer'
        }
        
        else if(paradas===1) {
            resultado = 'Você precisará fazer ' + paradas + ' parada para abastecer'
        }
         if(capac <= 0 || dist <= 0 || consumo <= 0) {
            resultado = 'Valores Inválidos'
        }
        return resultado
    } catch (err) {
        return (err.message)
    }
}

export function CalcularTemp(temp) {

    try {   
        let resultado = ''
        if(temp>=41){
         resultado = 'A situação da sua temperatura é Hipertemia'
        }
        else if(temp>=39.6 && temp<41) {
            resultado = 'A situação da sua temperatura é Febre Alta'
        }
        else if(temp>=37.6 && temp<39.6) {
            resultado = 'A situação da sua temperatura é Febre'
        }
        else if(temp>=36 && temp<37.6) {
            resultado = 'A situação da sua temperatura é Febre Normal'
        }
        else if(temp>=32 && temp<36) {
            resultado = 'A situação da sua temperatura é Hipotermia'
        }
        else if(temp < 32) {
            resultado = 'Você faleceu'
        }
        return resultado
    } catch (err) {
        return (err.message)
    }
}

export function OrcamentoFamiliar (ganhos, gastos) {
    let porcentagemGastos = gastos / ganhos * 100
    let msg = ''
    if(ganhos === 0 && gastos === 0){
        throw new Error('Ta quebrado hein cria')
    }
    else if(ganhos < 0 || gastos < 0) {
        msg = 'Valores Inválidos'
    }
    else if(porcentagemGastos <= 20) {
        msg = 'Parabéns, está gerenciando bem os seus gastos!'
    }
    else if(porcentagemGastos <= 50  ) {
        msg = 'Muito bem, seus gastos não ultrapassam a metade do orçamento!'
    }
    else if(porcentagemGastos <= 80  ) {
        msg = 'Atenção, melhor conter os gastos!'
    }
    else if(porcentagemGastos <= 100  ) {
        msg = 'Cuidado, seu orçamento pode ficar comprometido!'
    }
    else if(porcentagemGastos > 100  ) {
        msg = 'Orçamento comprometido, hora de rever os gastos!'
    }
    return msg
}

export function Cinemas (inteiras, meias, diaSemana, nacional){
    let msg ='O total a se pagar é de R$'
    let total = 0;
    
    if(nacional === true ){
        total = (inteiras + meias) * 5
        return msg + total
    }

    else if(diaSemana === 'Quarta-feira'){
        total = (inteiras + meias) * 14.25
        return msg + total
    }

    else{
        total = (inteiras * 28.5) + (meias * 14.25)
        return msg + total
    }

}

export function Contar (inicio, fim){
    if(isNaN(inicio) || isNaN(fim)) throw new Error('Isso não é um número!') 
    if(!inicio || !fim) {
        throw new Error('Coloque o numero ai meu rei')
    }
    let array = []
    for(let i= inicio; i<=fim; i++){
        array = [...array,i]
    }
    return array
}
export function DesenharLinha (qntd){
    if(isNaN(qntd)) throw new Error('Isso não é número!') 
    if(!qntd) {
        throw new Error('Coloque o numero ai meu rei')
    }
    let array = []
    for (let i = 0; i < qntd; i++) { 
        array[i] = ("*"); 
    } 
    return array
}

export function DesenharRetangulo (base, altura){
    if(isNaN(altura) || isNaN(base)) throw new Error('Isso não é um número!') 
    if(!altura || !base) {
        throw new Error('Coloque o numero ai meu rei')
    }
    let array = [];
    for(let i = 0; i < altura; i++){
        array=[...array,[]]
    
    for(let cont = 0; cont< base; cont++){
        array[i].push("*  ")
    }
}

return array


}
export function DesenharBolinha (base, altura){
    if(isNaN(altura) || isNaN(base)) throw new Error('Isso não é um número!') 
    if(!altura || !base) {
        throw new Error('Coloque o numero ai meu rei')
    }
    let array = [];
    for(let i = 0; i < altura; i++){
        array=[...array,[]]
    
    for(let cont = 0; cont< base; cont++){
        array[i].push("°  ")
    }
}

return array


}
export function DesenharFoto (base, altura){
    if(isNaN(altura) || isNaN(base)) throw new Error('Isso não é um número!') 
    if(!altura || !base) {
        throw new Error('Coloque o numero ai meu rei')
    }
    let array = [];
    for(let i = 0; i < altura; i++){
        array=[...array,[]]
    
    for(let cont = 0; cont< base; cont++){
        array[i].push('')
    }
}

return array


}

export function CalcularCafe(estudante,recipiente,mililitros){
    if(estudante,recipiente,mililitros === 0 ) throw new Error("Digíte os números")
    let L = (estudante * mililitros ) / 1000;
    let teste = L/recipiente;
    let final = Math.ceil(teste) * recipiente
 
    return final

   
}