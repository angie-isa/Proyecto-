function verificarRespuestas() {
    let respuestasCorrectas = {
        p1: "b",
        p2: "c",
        p3: "c",
        p4: "a",
        p5: "b"
    };

    let puntos = 0;

    for (let pregunta in respuestasCorrectas) {
        let respuesta = document.querySelector('input[name="' + pregunta + '"]:checked');
        
        if (respuesta && respuesta.value == respuestasCorrectas[pregunta]) {
            puntos++;
        }
    }

    let resultado = document.getElementById("resultado");

    if (puntos == 5) {
        resultado.innerHTML = "¡Felicidades! Respondiste correctamente todas las preguntas";
    } else if (puntos >= 3) {
        resultado.innerHTML = "Buen intento, respondiste bien casi todas las preguntas " + puntos + "/5";
    } else {
        resultado.innerHTML = "Lee con más atención la vida del Beato y volvé a intentarlo. Sacaste " + puntos + "/5";
    }
}

function reiniciarTrivia() {
    document.getElementById("quiz").reset();
    document.getElementById("resultado").innerHTML = "";
}
