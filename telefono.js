function llamada(){
	var llamar=prompt("Introduzca número o nombre de contacto: ", "");
	alert ("llamar a: " +llamar);
}

function mensaje() {
	var destinatario=prompt("Introduzca destinatario: ", "");
	var mensaje=prompt("Escribir texto: ", "");
	alert("Está a punto de enviar un mensaje a: "+destinatario+" con el texto:" +mensaje);
} 

function mail() {
	var destinatario=prompt("Introducir correo electrónico de destino: ", "");
	var asunto=prompt("Ingrese Asunto de mensaje: ", "");
	var mensaje=prompt("Escriba aquí su mensaje. ", "");
	alert ("va a enviar un correo electronico a: "+destinatario+" Ingrese asunto: "+asunto+ " mensaje: "+mensaje);
}
