window.onload = function () {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    //Lineas originales cambiadas por sugerencia de mi compañero Alejandro:

    //let randomWho = Math.floor(Math.random() * who.length);
    //let randomAction = Math.floor(Math.random() * action.length);
    //let randomWhat = Math.floor(Math.random() * what.length);
    //let randomWhen = Math.floor(Math.random() * when.length);

    //document.querySelector("#excusa").innerHTML = who[randomWho] + " " + action[randomAction]+  " "  + what[randomWhat]+  " "  + when[randomWhen];

    function numeroRandom(max) {
        return Math.floor(Math.random() * max);
    }

    window.generarExcusa = function () {
        let randomWho = who[numeroRandom(who.length)];
        let randomAction = action[numeroRandom(action.length)];
        let randomWhat = what[numeroRandom(what.length)];
        let randomWhen = when[numeroRandom(when.length)];

        let excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
        document.getElementById("excusa").textContent = excusa;
    };

    window.cambiarColor = function () {
        const colores = ['red', 'blue', 'green', 'purple', 'orange'];
        let color = colores[numeroRandom(colores.length)];
        document.getElementById("excusa").style.color = color;
    };

    generarExcusa();
};