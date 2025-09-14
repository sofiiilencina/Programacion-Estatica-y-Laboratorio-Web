function suma(){
			var n1,n2,suma,salida; 
			n1=prompt("Ingrese el primer número:");
			n2=prompt("Ingrese el segundo número:");
			suma=parseInt(n1)+parseInt(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'+'+n2+'='+suma+'\n'; 
		}

function resta(){
			var n1,n2,resta,salida; 
			n1=prompt("Ingrese el primer número:");
			n2=prompt("Ingrese el segundo número:");
			resta=(n1)-(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'-'+n2+'='+resta+'\n'; 
		}

function multiplicacion(){
			var n1,n2,multiplicacion,salida; 
			n1=prompt("Ingrese el primer número:");
			n2=prompt("Ingrese el segundo número:");
			multiplicacion=(n1)*(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'X'+n2+'='+multiplicacion+'\n'; 
		}

function division(){
			var n1,n2,division,salida; 
			n1=prompt("Ingrese el primer número:");
			n2=prompt("Ingrese el segundo número:");
			division=(n1)/(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'/'+n2+'='+division+'\n'; 
		}

function potencia(){
			var n1,n2,potencia,salida; 
			n1=prompt("Ingrese la base:");
			n2=prompt("Ingrese el exponente:");
			potencia=(n1)**(n2);
			salida=document.getElementById("salida");
			salida.value+=n1+'^'+n2+'='+potencia+'\n'; 
		}

function cuadrado(){
			var n1,n2,cuadrado,salida; 
			n1=prompt("Ingrese el número:");
			cuadrado=(n1)*(n1);
			salida=document.getElementById("salida");
			salida.value+=n1+'^ 2 ='+cuadrado+'\n'; 
		}