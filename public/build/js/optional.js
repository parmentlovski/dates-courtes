(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/optional"],{

/***/ "./assets/js/optional.js":
/*!*******************************!*\
  !*** ./assets/js/optional.js ***!
  \*******************************/
/***/ (() => {

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

},
0,[["./assets/js/optional.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvb3B0aW9uYWwuanMiXSwibmFtZXMiOlsib3B0aW9uYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnJvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWY7QUFFQSxJQUFJQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBWjtBQUVBQyxLQUFLLENBQUNDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVk7QUFFNUMsTUFBSUosUUFBUSxDQUFDSyxLQUFULENBQWVDLE9BQWYsS0FBMkIsTUFBL0IsRUFBdUM7QUFDdkNOLFlBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE9BQXpCOztBQUNBLFFBQUlMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsRUFBMENDLFNBQTFDLENBQW9EQyxRQUFwRCxDQUE2RCxnQkFBN0QsQ0FBSixFQUFvRjtBQUVwRlIsY0FBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0MsU0FBMUMsQ0FBb0RFLE1BQXBELENBQTJELGlCQUEzRDtBQUNDO0FBQ0EsR0FORCxNQU1PO0FBQ1BWLFlBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCOztBQUNBLFFBQUlMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsRUFBMENDLFNBQTFDLENBQW9EQyxRQUFwRCxDQUE2RCxpQkFBN0QsQ0FBSixFQUFxRjtBQUVyRlIsY0FBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0MsU0FBMUMsQ0FBb0RFLE1BQXBELENBQTJELGdCQUEzRDtBQUNDO0FBRUE7QUFFQSxDQWpCRCxFIiwiZmlsZSI6ImpzL29wdGlvbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG9wdGlvbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25hbFwiKTtcblxudmFyIGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1vcHRpb25hbFwiKTtcblxuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbmlmIChvcHRpb25hbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbm9wdGlvbmFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9jay1vcHRpb25hbFwiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXBsdXMtY2lyY2xlJykpIHtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9jay1vcHRpb25hbFwiKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1taW51cy1jaXJjbGUnKTtcbn1cbn0gZWxzZSB7XG5vcHRpb25hbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9jay1vcHRpb25hbFwiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLW1pbnVzLWNpcmNsZScpKSB7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvY2stb3B0aW9uYWxcIikuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtcGx1cy1jaXJjbGUnKTtcbn1cblxufVxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=