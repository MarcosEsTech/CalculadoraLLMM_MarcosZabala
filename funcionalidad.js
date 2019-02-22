var resultado = document.getElementById('resultado');
var reset = document.getElementById('reset');
var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');
var potencia = document.getElementById('potencia');
var raiz = document.getElementById('raiz');
var hex = document.getElementById('hex');
var bin = document.getElementById('bin');
var igual = document.getElementById('igual');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');
var punto = document.getElementById('punto');
var operaciones = new Array();
var tamanoArray = 0;

 uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
      operaciones[tamanoArray] = resultado.textContent;
  }
  dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
      operaciones[tamanoArray] = resultado.textContent;
  }
  tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
      operaciones[tamanoArray] = resultado.textContent;
  }
  cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
      operaciones[tamanoArray] = resultado.textContent;
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
      operaciones[tamanoArray] = resultado.textContent;
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
      operaciones[tamanoArray] = resultado.textContent;
  }
  siete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
      operaciones[tamanoArray] = resultado.textContent;
  }
  ocho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
      operaciones[tamanoArray] = resultado.textContent;
  }
  nueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
      operaciones[tamanoArray] = resultado.textContent;
  }
  cero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
      operaciones[tamanoArray] = resultado.textContent;
  }
  punto.onclick = function(e){
      resultado.textContent = resultado.textContent  + ".";
      operaciones[tamanoArray] = resultado.textContent;
  }
  reset.onclick = function(e){
      resetear();
  }

  suma.onclick = function(e){
  	if(tamanoArray==2){
  		resolver();
  		tamanoArray=1;
  		operaciones[tamanoArray]= "+";
  		tamanoArray++;
  		limpiar();
  	}else{
  		tamanoArray++;
  		operaciones[tamanoArray]= "+";
  		tamanoArray++;
  		limpiar();
  	}
  }
  resta.onclick = function(e){
  	if(tamanoArray==2){
  		resolver();
  		tamanoArray=1;
  		operaciones[tamanoArray]= "-";
  		tamanoArray++;
  		limpiar();
  	}else{
  		tamanoArray++;
  		operaciones[tamanoArray]= "-";
  		tamanoArray++;
  		limpiar();
  	}
  }
  multiplicacion.onclick = function(e){
  	if(tamanoArray==2){
  		resolver();
  		tamanoArray=1;
  		operaciones[tamanoArray]= "*";
  		tamanoArray++;
  		limpiar();
  	}else{
  		tamanoArray++;
  		operaciones[tamanoArray]= "*";
  		tamanoArray++;
  		limpiar();
  	}
  }
  division.onclick = function(e){
  	if(tamanoArray==2){
  		resolver();
  		tamanoArray=1;
  		operaciones[tamanoArray]= "/";
  		tamanoArray++;
  		limpiar();
  	}else{
  		tamanoArray++;
  		operaciones[tamanoArray]= "/";
  		tamanoArray++;
  		limpiar();
  	}
  }
    potencia.onclick = function(e){
    if(tamanoArray==2){
  		resolver();
  		tamanoArray=1;
  		operaciones[tamanoArray]= "^";
  		tamanoArray++;
  		limpiar();
  	}else{
  		tamanoArray++;
  		operaciones[tamanoArray]= "^";
  		tamanoArray++;
  		limpiar();
  	}
  }
    raiz.onclick = function(e){
    if(tamanoArray==2){
  		resolver();
  		tamanoArray=1;
  		operaciones[tamanoArray]= "√";
  		tamanoArray++;
  		limpiar();
  	}else{
  		tamanoArray++;
  		operaciones[tamanoArray]= "√";
  		tamanoArray++;
  		limpiar();
  	}
  }
  igual.onclick = function(e){
      resolver();
  }

  function limpiar(){
  resultado.textContent = "";
}


function resetear(){
  resultado.textContent = "";
  tamanoArray=0;
  operaciones[0]=null;
  operaciones[1]=null;
  operaciones[2]=null;
}


function resolver(){
	console.log(operaciones);
  var res = 0;
  switch (operaciones[1]) {
  	case "+":
  		res=parseFloat(operaciones[0]) + parseFloat(operaciones[2]);
  		break;
  	case "-":
  		res=parseFloat(operaciones[0]) - parseFloat(operaciones[2]);
 		break;
 	case "*":
  		res=parseFloat(operaciones[0]) * parseFloat(operaciones[2]);
 		break;
 	case "/":
  		res=parseFloat(operaciones[0]) / parseFloat(operaciones[2]);
 		break;
 	case "^":
  		res=Math.pow(parseFloat(operaciones[0]),parseFloat(operaciones[2]));
 		break;
 	case "√":
    	res =Math.pow(parseFloat(operaciones[0]),1/parseFloat(operaciones[2]));
    	break;
  }
  resultado.textContent=res;
  operaciones[0] = res;
}
