function calcular(tipo, valor) {
    if(tipo === 'acao'){
        if(valor === 'c'){
           // limpar o visor
           document.getElementById('resultado').value = '' 
           document.getElementById('resultado').style.background = ('')
           document.getElementById('resultado').style.color = ('#000000 ') 
           
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' ||valor === '.') {
            document.getElementById('resultado').value += valor
        }
        if (valor === '=') {
           var valorCampo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valorCampo
            document.getElementById('resultado').style.background = ('#7FFFD4')
            
            if (valorCampo == undefined) {//alertas caso os valores sejam indefinidos
                document.getElementById('resultado').value = "Operação não suportada"
                document.getElementById('resultado').style.background = ('#FF0000')
                document.getElementById('resultado').style.color = ('#FFFFFF')
                
            }
        }
    }else if (tipo === 'valor') {
    
        document.getElementById('resultado').value += valor 
    }
}
