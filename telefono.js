function llamada(){
	var llamar=prompt("Introduzca numero o nombre de contacto");
	alert ("llamar a: " + llamar);
}

function mensaje(){
	var destinatario=prompt("Introduzca destinatario");
	var mensaje=prompt("Escribir texto");
	alert("está a punto de enviar un mensaje a: " destinatario +" con el texto:" +mensaje);
} 

function mail() {
	var destinatario=prompt("Introducir correo electronico de destino");
	var asunto=prompt("Ingrese Asunto de mensaje");
	var mensaje=prompt("Escriba aqui su mensaje");
	alert ("va a enviar un correo electronico a: " +destinatario +" Ingrese asunto: "+ asunto + " mensaje: " + mensaje);
}
