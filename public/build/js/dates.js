(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/dates"],{

/***/ "./assets/js/dates.js":
/*!****************************!*\
  !*** ./assets/js/dates.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.pad-start */ "./node_modules/core-js/modules/es.string.pad-start.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

// 1ère date => format string issu du input
var dates = document.querySelectorAll('.dates');
dates.forEach(function (date) {
  var dateString = date.innerHTML; // console.log(dateString);

  var dateParts = dateString.split("/"); // month is 0-based, that's why we need dataParts[1] - 1

  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var date1 = new Date(dateObject.toString()); // console.log(date1);
  // 2ème date => date du jour

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!

  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy; // console.log(today);

  var date2 = new Date(today); // console.log(date2);
  // To calculate the time difference of two dates

  var Difference_In_Time = date1.getTime() - date2.getTime(); // To calculate the no. of days between two dates

  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); // To display the final no. of days (result)
  // console.log("Total number of days between dates  <br>" + date1 + "<br> and <br>" + date2 + " is: <br> " + Difference_In_Days);

  if (Difference_In_Days <= 30) {
    // console.log("oooh va jeter ton produit");
    // for (let i = 0; i < lignes.length; i++) {
    date.parentNode.classList.toggle("trash"); // }
  } else {
    // console.log("Tout est bon");
    // for (let i = 0; i < lignes.length; i++) {
    date.parentNode.classList.remove("trash"); // }
  }
});

/***/ })

},[["./assets/js/dates.js","runtime","vendors~js/dates~js/reserves"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGF0ZXMuanMiXSwibmFtZXMiOlsiZGF0ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGF0ZSIsImRhdGVTdHJpbmciLCJpbm5lckhUTUwiLCJkYXRlUGFydHMiLCJzcGxpdCIsImRhdGVPYmplY3QiLCJEYXRlIiwiZGF0ZTEiLCJ0b1N0cmluZyIsInRvZGF5IiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZGF0ZTIiLCJEaWZmZXJlbmNlX0luX1RpbWUiLCJnZXRUaW1lIiwiRGlmZmVyZW5jZV9Jbl9EYXlzIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFFO0FBQ00sSUFBSUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLENBQVo7QUFDQUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3RCLE1BQUlDLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxTQUF0QixDQURzQixDQUV0Qjs7QUFDQSxNQUFJQyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixHQUFqQixDQUFoQixDQUhzQixDQUl0Qjs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBSUMsSUFBSixDQUFTLENBQUVILFNBQVMsQ0FBQyxDQUFELENBQXBCLEVBQXlCQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBeEMsRUFBMkMsQ0FBRUEsU0FBUyxDQUFDLENBQUQsQ0FBdEQsQ0FBakI7QUFDQSxNQUFJSSxLQUFLLEdBQUcsSUFBSUQsSUFBSixDQUFTRCxVQUFVLENBQUNHLFFBQVgsRUFBVCxDQUFaLENBTnNCLENBT3RCO0FBQ0E7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlILElBQUosRUFBWjtBQUNBLE1BQUlJLEVBQUUsR0FBR0MsTUFBTSxDQUFDRixLQUFLLENBQUNHLE9BQU4sRUFBRCxDQUFOLENBQXdCQyxRQUF4QixDQUFpQyxDQUFqQyxFQUFvQyxHQUFwQyxDQUFUO0FBQ0EsTUFBSUMsRUFBRSxHQUFHSCxNQUFNLENBQUNGLEtBQUssQ0FBQ00sUUFBTixLQUFtQixDQUFwQixDQUFOLENBQTZCRixRQUE3QixDQUFzQyxDQUF0QyxFQUF5QyxHQUF6QyxDQUFULENBWHNCLENBV2tDOztBQUN4RCxNQUFJRyxJQUFJLEdBQUdQLEtBQUssQ0FBQ1EsV0FBTixFQUFYO0FBQ0FSLE9BQUssR0FBR0ssRUFBRSxHQUFHLEdBQUwsR0FBV0osRUFBWCxHQUFnQixHQUFoQixHQUFzQk0sSUFBOUIsQ0Fic0IsQ0FjdEI7O0FBQ0EsTUFBSUUsS0FBSyxHQUFHLElBQUlaLElBQUosQ0FBU0csS0FBVCxDQUFaLENBZnNCLENBZ0J0QjtBQUNBOztBQUNBLE1BQUlVLGtCQUFrQixHQUFHWixLQUFLLENBQUNhLE9BQU4sS0FBa0JGLEtBQUssQ0FBQ0UsT0FBTixFQUEzQyxDQWxCc0IsQ0FtQnRCOztBQUNBLE1BQUlDLGtCQUFrQixHQUFHRixrQkFBa0IsSUFBSSxPQUFPLElBQVAsR0FBYyxFQUFsQixDQUEzQyxDQXBCc0IsQ0FxQnRCO0FBQ0E7O0FBQ0EsTUFBSUUsa0JBQWtCLElBQUksRUFBMUIsRUFBOEI7QUFDOUI7QUFDQTtBQUNBckIsUUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLE9BQWpDLEVBSDhCLENBSTlCO0FBQ0MsR0FMRCxNQUtPO0FBQ0g7QUFDSjtBQUNBeEIsUUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLE9BQWpDLEVBSE8sQ0FJUDtBQUNDO0FBQ0EsQ0FsQ0QsRSIsImZpbGUiOiJqcy9kYXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlx0XHQvLyAxw6hyZSBkYXRlID0+IGZvcm1hdCBzdHJpbmcgaXNzdSBkdSBpbnB1dFxuICAgICAgICB2YXIgZGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZXMnKTtcbiAgICAgICAgZGF0ZXMuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgICAgdmFyIGRhdGVTdHJpbmcgPSBkYXRlLmlubmVySFRNTDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZyk7XG4gICAgICAgIHZhciBkYXRlUGFydHMgPSBkYXRlU3RyaW5nLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgLy8gbW9udGggaXMgMC1iYXNlZCwgdGhhdCdzIHdoeSB3ZSBuZWVkIGRhdGFQYXJ0c1sxXSAtIDFcbiAgICAgICAgdmFyIGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgrIGRhdGVQYXJ0c1syXSwgZGF0ZVBhcnRzWzFdIC0gMSwgKyBkYXRlUGFydHNbMF0pO1xuICAgICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZShkYXRlT2JqZWN0LnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlMSk7XG4gICAgICAgIC8vIDLDqG1lIGRhdGUgPT4gZGF0ZSBkdSBqb3VyXG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxuICAgICAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRvZGF5ID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZGF5KTtcbiAgICAgICAgdmFyIGRhdGUyID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlMik7XG4gICAgICAgIC8vIFRvIGNhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIG9mIHR3byBkYXRlc1xuICAgICAgICB2YXIgRGlmZmVyZW5jZV9Jbl9UaW1lID0gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAvLyBUbyBjYWxjdWxhdGUgdGhlIG5vLiBvZiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzXG4gICAgICAgIHZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBEaWZmZXJlbmNlX0luX1RpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gICAgICAgIC8vIFRvIGRpc3BsYXkgdGhlIGZpbmFsIG5vLiBvZiBkYXlzIChyZXN1bHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG90YWwgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiBkYXRlcyAgPGJyPlwiICsgZGF0ZTEgKyBcIjxicj4gYW5kIDxicj5cIiArIGRhdGUyICsgXCIgaXM6IDxicj4gXCIgKyBEaWZmZXJlbmNlX0luX0RheXMpO1xuICAgICAgICBpZiAoRGlmZmVyZW5jZV9Jbl9EYXlzIDw9IDMwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib29vaCB2YSBqZXRlciB0b24gcHJvZHVpdFwiKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaWduZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFzaFwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG91dCBlc3QgYm9uXCIpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpZ25lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInRyYXNoXCIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==