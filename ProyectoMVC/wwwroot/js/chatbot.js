document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;
    if (userInput.trim() !== '') {
        displayMessage(userInput, 'user');
        inputField.value = '';
        getBotResponse(userInput)

    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message,sender')
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    let botResponse = '';
    if (userInput.toLowerCase().includes('hola')) {
        botResponse = '¡Hola! Bienvenido al Asistente Virtual de Heart Help. Mi nombre es Calmi. ¿Cómo te sientes hoy?  1-Alegre 2-Triste 3-Enojado 4-Ansioso';

    }
    else if (userInput.toLowerCase().includes('1')) {
        botResponse = "Me alegra a mí también escuchar eso. Deseo que tu día siga yendo bien.";
    }
    else if (userInput.toLowerCase().includes('2')) {
        botResponse = "Lamento escuchar eso. Te invito a registrar tus emociones en el apartado de Registro de emociones";
    }
    else if (userInput.toLowerCase().includes('3')) {
        botResponse = "Tus sentimientos son válidos. Tómate tu tiempo a solas para procesar tus emociones y pensamientos";
    }
    else if (userInput.toLowerCase().includes('4')) {
        botResponse = "Puedes abrir el apartado de Crisis si deseas técnicas de relajación";
    }
    else if (userInput.toLowerCase().includes('adios')) {
        botResponse = "¡Adiós! Ten un lindo día.";
    }
    else if (userInput.toLowerCase().includes('quiero llorar')) {
        botResponse = "Lamento escuchar eso. Contarme lo que pasó puede ayudarte. Soy todo oídos.";
    }
    else if (userInput.toLowerCase().includes('tuve un mal dia')) {
        botResponse = "Lo siento. ¿Quieres contarme qué pasó?";
    }
    else if (userInput.toLowerCase().includes('no')) {
        botResponse = "Está bien, respeto tu decisión :)";
    }
    else if (userInput.toLowerCase().includes('estoy ansioso')) {
        botResponse = "Respira un momento. Estás pasando por un momento difícil, pero sé que saldrás de esta, eres muy fuerte";
    }
    else if (userInput.toLowerCase().includes('quiero desahogarme')) {
        botResponse = "Yo te escucho, pero si gustas puedes también depositar tus pensamientos en el registro diario";
    }
    else if (userInput.toLowerCase().includes('quiero consejos para la ansiedad')) {
        botResponse = "Un consejo que te puedo dar es que hagas técnicas de respiración guiadas, de esa manera puedes regularizar tus emociones y frecuencia respiratoria";
    }
    else if (userInput.toLowerCase().includes('consuelame')) {
        botResponse = "Todo estará bien, aunque las cosas no se sientan así ahora, te aseguro que lo estarán. Respira hondo, tienes esto bajo control";
    }
    else if (userInput.toLowerCase().includes('dame una frase motivadora')) {
        botResponse = "Cada día es una nueva oportunidad para comenzar de nuevo";
    }
    else if (userInput.toLowerCase().includes('estoy entrando en crisis')) {
        botResponse = "Respira lento conmigo: Inhala 4 segundos, exhala 6. No estás solo/a";
    }
      else if (userInput.toLowerCase().includes('cuentame un chiste')) {
        botResponse = "¿Qué le dice un jaguar a otro jaguar?...Jaguar You?";
    }
    else {
        botResponse = "Calmi incorporará cada vez más respuestas a tus preguntas. Por ahora no se tiene una respuesta predeterminada.";
    }

    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 1000);

}