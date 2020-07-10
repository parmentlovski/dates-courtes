(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/optional"],{

/***/ "./assets/js/optional.js":
/*!*******************************!*\
  !*** ./assets/js/optional.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

},[["./assets/js/optional.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvb3B0aW9uYWwuanMiXSwibmFtZXMiOlsib3B0aW9uYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnJvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBRUEsSUFBSUMsS0FBSyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQVo7QUFFQUMsS0FBSyxDQUFDQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFZO0FBRTVDLE1BQUlKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxPQUFmLEtBQTJCLE1BQS9CLEVBQXVDO0FBQ3ZDTixZQUFRLENBQUNLLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixPQUF6Qjs7QUFDQSxRQUFJTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxTQUExQyxDQUFvREMsUUFBcEQsQ0FBNkQsZ0JBQTdELENBQUosRUFBb0Y7QUFFcEZSLGNBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsRUFBMENDLFNBQTFDLENBQW9ERSxNQUFwRCxDQUEyRCxpQkFBM0Q7QUFDQztBQUNBLEdBTkQsTUFNTztBQUNQVixZQUFRLENBQUNLLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6Qjs7QUFDQSxRQUFJTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxTQUExQyxDQUFvREMsUUFBcEQsQ0FBNkQsaUJBQTdELENBQUosRUFBcUY7QUFFckZSLGNBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsRUFBMENDLFNBQTFDLENBQW9ERSxNQUFwRCxDQUEyRCxnQkFBM0Q7QUFDQztBQUVBO0FBRUEsQ0FqQkQsRSIsImZpbGUiOiJqcy9vcHRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvcHRpb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uYWxcIik7XG5cbnZhciBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctb3B0aW9uYWxcIik7XG5cbmFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG5pZiAob3B0aW9uYWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5vcHRpb25hbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvY2stb3B0aW9uYWxcIikuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1wbHVzLWNpcmNsZScpKSB7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvY2stb3B0aW9uYWxcIikuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtbWludXMtY2lyY2xlJyk7XG59XG59IGVsc2Uge1xub3B0aW9uYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvY2stb3B0aW9uYWxcIikuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1taW51cy1jaXJjbGUnKSkge1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsb2NrLW9wdGlvbmFsXCIpLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXBsdXMtY2lyY2xlJyk7XG59XG5cbn1cblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9