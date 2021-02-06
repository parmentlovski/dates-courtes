(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

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

},
0,[["./assets/js/app.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbImlucHV0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJmaWVsZCIsInZhbHVlIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixDQUFmOztBQUVBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBTSxDQUFDSSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUV4QyxNQUFJRSxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0csQ0FBRCxDQUFsQixDQUZ3QyxDQUl4Qzs7QUFDQSxNQUFJRSxLQUFLLENBQUNDLEtBQU4sSUFBZSxFQUFuQixFQUF1QjtBQUN2QkQsU0FBSyxDQUFDRSxVQUFOLENBQWlCQyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsV0FBL0I7QUFDQyxHQVB1QyxDQVN4Qzs7O0FBQ0FKLE9BQUssQ0FBQ0ssZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQUU7QUFDekMsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNOLEtBQVQsSUFBa0IsRUFBdEIsRUFBMEI7QUFDMUJLLE9BQUMsQ0FBQ0MsTUFBRixDQUFTTCxVQUFULENBQW9CQyxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsV0FBbEM7QUFDQyxLQUZELE1BRU8sSUFBSUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNOLEtBQVQsSUFBa0IsRUFBdEIsRUFBMEI7QUFDakNLLE9BQUMsQ0FBQ0MsTUFBRixDQUFTTCxVQUFULENBQW9CQyxTQUFwQixDQUE4QkssTUFBOUIsQ0FBcUMsV0FBckM7QUFDQztBQUNBLEdBTkQ7QUFTQyxDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG5cbmxldCBmaWVsZCA9IGlucHV0c1tpXTtcblxuLy8gU2kgbGUgZm9ybSByZW52b2llIHVuZSBlcnJldXIgaWwgZmF1dCBxdWUgbGVzIGxhYmVscyBkZXMgY2hhbXBzIHJlc3RlbnQgYXUgZGVzc3VzIGR1IHRleHRlXG5pZiAoZmllbGQudmFsdWUgIT0gXCJcIikge1xuZmllbGQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcbn1cblxuLy8gRMOocyBxdWUgbCd1c2VyIMOpY3JpdCBsZSBsYWJlbCBkb2l0IHBhc3NlciBhdSBkZXNzdXNcbmZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHsgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuaWYgKGUudGFyZ2V0LnZhbHVlICE9IFwiXCIpIHtcbmUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XG59IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcbmUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uJyk7XG59XG59KTtcblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9