

export function CalcularAcai (peq, med, grand, desc){


        if(peq< 0 || med<0 ||grand<0){
            throw new Error('Não foi possivel realizar a compra')
        }
        
        if(Number.isInteger(peq) == false || Number.isInteger(med) == false || Number.isInteger(grand) == false) throw new Error('Somente Valores Inteiros')
       
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
    if(salarioBase > 0 || bonus > 0 || desconto > 0 ){
        let bonos = salarioBase * bonus / 100;
        let soma = salarioBase - desconto + bonos
        return soma
    }
}