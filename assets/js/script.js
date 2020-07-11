window.onload = function(e) {
    apertaTecla(e);
  }
  
  function calcular(tipo, valor) {
    if(tipo === 'acao'){
        if(valor === 'c'){
          // limpar o visor
          document.getElementById('resultado').value = ''
          document.getElementById('resultado').style.background = ('')
          document.getElementById('resultado').style.color = ('#000000 ')
        }
        // Backspace
        if (valor === 'clear'){
          let input = document.getElementById('resultado');
          let inputText = input.value;
          input.value = inputText.substring(0,inputText.length-1);
        }
        //Reconhecendo as operações e a virgula
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' ||valor === '.') {
          document.getElementById('resultado').value += valor
        }
        //Realiza as operações que são imputadas e disponibilizadas no visor da calculadora,
        // por meio do eval, que tranfomar valores string em valores possiveis de realizar operações 
        if (valor === '=') {
          var valorCampo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valorCampo
            document.getElementById('resultado').style.background = ('#7FFFD4')
            // caso os valores sejam undefined
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
  //parte do teclado
  var resultado = document.getElementById('resultado');
  
  function apertaTecla(e) {
      // e é o evento de click do teclado
      e = e || window.event;
      // em teclaChar vai salvar o código que corresponde a tecla
      var teclaChar = e.keyCode || e.which; 
      //operacao vai salvar as teclas de operações por seus respectivo código 
      var operacao = String.fromCharCode(teclaChar);
      if(operacao === String.fromCharCode(43) || operacao === String.fromCharCode(47)|| operacao === String.fromCharCode(42) || operacao === String.fromCharCode(45) || operacao === String.fromCharCode(46))    
      document.getElementById('resultado').value += operacao;
      //recomhece o click da tecla enter e mostra o resultado
     if (operacao === String.fromCharCode(13)){
        var teclaEnter = eval(document.getElementById('resultado').value)
        var mostrarTela = document.getElementById('resultado').value = teclaEnter;
        document.getElementById('resultado').style.background = ('#7FFFD4')

        //Remove o blur (foco) das teclas pra quando teclar enter não ficar reconhecendo a tecla que está em foco 
        //preciso estudar mais um pouco essa part, pois a peguei feita 
        var btn = document.getElementsByClassName("btn");
        for (var i = 0; i < btn.length; i++){
            btn[i].addEventListener('click', function(){
                 this.blur();
            });
        }
      //caso ovalor seja undefined  
      if (teclaEnter == undefined){
        document.getElementById('resultado').value = "Operação não suportada"
        document.getElementById('resultado').style.background = ('#FF0000')
        document.getElementById('resultado').style.color = ('#FFFFFF')
      }
     };
      // em teclaValor é guardado o valor que foi digitado com base no codigo
      var teclaValor = String.fromCharCode(teclaChar);
      //verifica se é um número, se não for fica vazio. Se for um número retorna o valor.
      if(isNaN(teclaValor))
        return "";  
      return teclaValor;
    }
    document.onkeypress = function(e) {
      // Recebe o valor retornado pela função acima
      var str = apertaTecla(e);
      // Adiciona o valor no input do visor da calculadora
      resultado.value += str;
  }
 