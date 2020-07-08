const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {

let field = inputs[i];

// Si le form renvoie une erreur il faut que les labels des champs restent au dessus du texte
if (field.value != "") {
field.parentNode.classList.add('animation');
}

// Dès que l'user écrit le label doit passer au dessus
field.addEventListener('input', (e) => { // console.log(e.target.value);
if (e.target.value != "") {
e.target.parentNode.classList.add('animation');
} else if (e.target.value == "") {
e.target.parentNode.classList.remove('animation');
}
});


}
