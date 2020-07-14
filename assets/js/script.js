window.onload = function (e) {
  apertaTecla(e);
}

function calcular(tipo, valor) {
  if (tipo === 'acao') {
    switch (valor) {
      case 'c':
        // limpar o visor
        document.getElementById('resultado').value = ''
        document.getElementById('resultado').style.background = ('')
        document.getElementById('resultado').style.color = ('#000000 ')
        break;
      case "clear":
        // limpar um por um
        let input = document.getElementById('resultado');
        let inputText = input.value;
        input.value = inputText.substring(0, inputText.length - 1);
        break;
      case '+':
        document.getElementById('resultado').value += valor;
        break;
      case '-':
        document.getElementById('resultado').value += valor;
        break;
      case '*':
        document.getElementById('resultado').value += valor;
        break;
      case '/':
        document.getElementById('resultado').value += valor;
        break;
      case '.':
        document.getElementById('resultado').value += valor;
        break;
      case '=':
        var valorCampo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valorCampo
        document.getElementById('resultado').style.background = ('#7FFFD4')
        // caso os valores sejam undefined
        if (valorCampo == undefined) {//alertas caso os valores sejam indefinidos
          document.getElementById('resultado').value = "Operação não suportada"
          document.getElementById('resultado').style.background = ('#FF0000')
          document.getElementById('resultado').style.color = ('#FFFFFF')
        }
        break;
    }
  } else if (tipo === 'valor') {
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
  //operacao vai salvar as teclas de operações por seus respetivo código 
  var operacao = String.fromCharCode(teclaChar);
  switch (operacao) {
    case String.fromCharCode(43):
      document.getElementById('resultado').value += operacao;
      break;
    case String.fromCharCode(47):
      document.getElementById('resultado').value += operacao;
      break;
    case String.fromCharCode(42):
      document.getElementById('resultado').value += operacao;
      break;
    case String.fromCharCode(45):
      document.getElementById('resultado').value += operacao;
      break;
    case String.fromCharCode(46):
      document.getElementById('resultado').value += operacao;
      break;
    case String.fromCharCode(13):
      var teclaEnter = eval(document.getElementById('resultado').value)
      var mostrarTela = document.getElementById('resultado').value = teclaEnter;
      document.getElementById('resultado').style.background = ('#7FFFD4')

      //caso o valor seja undefined da tecla enter
      if (teclaEnter == undefined) {
        document.getElementById('resultado').value = "Operação não suportada"
        document.getElementById('resultado').style.background = ('#FF0000')
        document.getElementById('resultado').style.color = ('#FFFFFF')
      }
      break;
  }
  //Remove o blur (foco) das teclas pra quando teclar enter não ficar reconhecendo a tecla que está em foco 
  var btn = document.getElementsByClassName("btn");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      this.blur();
    });
  }
  // em teclaValor é guardado o valor que foi digitado com base no código
  var teclaValor = String.fromCharCode(teclaChar);
  //verifica se é um número, se não for fica vazio. Se for um número retorna o valor.
  if (isNaN(teclaValor))
    return "";
  return teclaValor;
}
document.onkeypress = function (e) {
  // Recebe o valor retornado pela função acima
  var str = apertaTecla(e);
  // Adiciona o valor no input do visor da calculadora
  resultado.value += str;
}
