(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var inputs = document.querySelectorAll('input');

for (var i = 0; i < inputs.length; i++) {
  var field = inputs[i]; // Si le form renvoie une erreur il faut que les labels des champs restent au dessus du texte

  if (field.value != "") {
    field.parentNode.classList.add('animation');
  } // Dès que l'user écrit le label doit passer au dessus


  field.addEventListener('input', function (e) {
    // console.log(e.target.value);
    if (e.target.value != "") {
      e.target.parentNode.classList.add('animation');
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove('animation');
    }
  });
}

/***/ })

},[["./assets/js/app.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbImlucHV0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJmaWVsZCIsInZhbHVlIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBZjs7QUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFFeEMsTUFBSUUsS0FBSyxHQUFHTCxNQUFNLENBQUNHLENBQUQsQ0FBbEIsQ0FGd0MsQ0FJeEM7O0FBQ0EsTUFBSUUsS0FBSyxDQUFDQyxLQUFOLElBQWUsRUFBbkIsRUFBdUI7QUFDdkJELFNBQUssQ0FBQ0UsVUFBTixDQUFpQkMsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLFdBQS9CO0FBQ0MsR0FQdUMsQ0FTeEM7OztBQUNBSixPQUFLLENBQUNLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUFFO0FBQ3pDLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTTixLQUFULElBQWtCLEVBQXRCLEVBQTBCO0FBQzFCSyxPQUFDLENBQUNDLE1BQUYsQ0FBU0wsVUFBVCxDQUFvQkMsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLFdBQWxDO0FBQ0MsS0FGRCxNQUVPLElBQUlFLENBQUMsQ0FBQ0MsTUFBRixDQUFTTixLQUFULElBQWtCLEVBQXRCLEVBQTBCO0FBQ2pDSyxPQUFDLENBQUNDLE1BQUYsQ0FBU0wsVUFBVCxDQUFvQkMsU0FBcEIsQ0FBOEJLLE1BQTlCLENBQXFDLFdBQXJDO0FBQ0M7QUFDQSxHQU5EO0FBU0MsQyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuXG5sZXQgZmllbGQgPSBpbnB1dHNbaV07XG5cbi8vIFNpIGxlIGZvcm0gcmVudm9pZSB1bmUgZXJyZXVyIGlsIGZhdXQgcXVlIGxlcyBsYWJlbHMgZGVzIGNoYW1wcyByZXN0ZW50IGF1IGRlc3N1cyBkdSB0ZXh0ZVxuaWYgKGZpZWxkLnZhbHVlICE9IFwiXCIpIHtcbmZpZWxkLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XG59XG5cbi8vIETDqHMgcXVlIGwndXNlciDDqWNyaXQgbGUgbGFiZWwgZG9pdCBwYXNzZXIgYXUgZGVzc3VzXG5maWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7IC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbmlmIChlLnRhcmdldC52YWx1ZSAhPSBcIlwiKSB7XG5lLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xufSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XG5lLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpO1xufVxufSk7XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==