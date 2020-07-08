var optional = document.querySelector(".optional");

var arrow = document.querySelector(".arrow-optional");

arrow.addEventListener('click', function () {

if (optional.style.display === 'none') {
optional.style.display = "block";
if (document.getElementById("block-optional").classList.contains('fa-plus-circle')) {

document.getElementById("block-optional").classList.toggle('fa-minus-circle');
}
} else {
optional.style.display = "none";
if (document.getElementById("block-optional").classList.contains('fa-minus-circle')) {

document.getElementById("block-optional").classList.toggle('fa-plus-circle');
}

}

});
