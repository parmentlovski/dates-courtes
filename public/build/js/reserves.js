(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/reserves"],{

/***/ "./assets/js/reserves.js":
/*!*******************************!*\
  !*** ./assets/js/reserves.js ***!
  \*******************************/
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
var dates = document.querySelectorAll('.reserves');
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

},[["./assets/js/reserves.js","runtime","vendors~js/dates~js/reserves"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVzZXJ2ZXMuanMiXSwibmFtZXMiOlsiZGF0ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGF0ZSIsImRhdGVTdHJpbmciLCJpbm5lckhUTUwiLCJkYXRlUGFydHMiLCJzcGxpdCIsImRhdGVPYmplY3QiLCJEYXRlIiwiZGF0ZTEiLCJ0b1N0cmluZyIsInRvZGF5IiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZGF0ZTIiLCJEaWZmZXJlbmNlX0luX1RpbWUiLCJnZXRUaW1lIiwiRGlmZmVyZW5jZV9Jbl9EYXlzIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQVo7QUFDQUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3RCLE1BQUlDLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxTQUF0QixDQURzQixDQUV0Qjs7QUFDQSxNQUFJQyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixHQUFqQixDQUFoQixDQUhzQixDQUl0Qjs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBSUMsSUFBSixDQUFTLENBQUVILFNBQVMsQ0FBQyxDQUFELENBQXBCLEVBQXlCQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBeEMsRUFBMkMsQ0FBRUEsU0FBUyxDQUFDLENBQUQsQ0FBdEQsQ0FBakI7QUFDQSxNQUFJSSxLQUFLLEdBQUcsSUFBSUQsSUFBSixDQUFTRCxVQUFVLENBQUNHLFFBQVgsRUFBVCxDQUFaLENBTnNCLENBT3RCO0FBQ0E7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlILElBQUosRUFBWjtBQUNBLE1BQUlJLEVBQUUsR0FBR0MsTUFBTSxDQUFDRixLQUFLLENBQUNHLE9BQU4sRUFBRCxDQUFOLENBQXdCQyxRQUF4QixDQUFpQyxDQUFqQyxFQUFvQyxHQUFwQyxDQUFUO0FBQ0EsTUFBSUMsRUFBRSxHQUFHSCxNQUFNLENBQUNGLEtBQUssQ0FBQ00sUUFBTixLQUFtQixDQUFwQixDQUFOLENBQTZCRixRQUE3QixDQUFzQyxDQUF0QyxFQUF5QyxHQUF6QyxDQUFULENBWHNCLENBV2tDOztBQUN4RCxNQUFJRyxJQUFJLEdBQUdQLEtBQUssQ0FBQ1EsV0FBTixFQUFYO0FBQ0FSLE9BQUssR0FBR0ssRUFBRSxHQUFHLEdBQUwsR0FBV0osRUFBWCxHQUFnQixHQUFoQixHQUFzQk0sSUFBOUIsQ0Fic0IsQ0FjdEI7O0FBQ0EsTUFBSUUsS0FBSyxHQUFHLElBQUlaLElBQUosQ0FBU0csS0FBVCxDQUFaLENBZnNCLENBZ0J0QjtBQUNBOztBQUNBLE1BQUlVLGtCQUFrQixHQUFHWixLQUFLLENBQUNhLE9BQU4sS0FBa0JGLEtBQUssQ0FBQ0UsT0FBTixFQUEzQyxDQWxCc0IsQ0FtQnRCOztBQUNBLE1BQUlDLGtCQUFrQixHQUFHRixrQkFBa0IsSUFBSSxPQUFPLElBQVAsR0FBYyxFQUFsQixDQUEzQyxDQXBCc0IsQ0FxQnRCO0FBQ0E7O0FBQ0EsTUFBSUUsa0JBQWtCLElBQUksRUFBMUIsRUFBOEI7QUFDOUI7QUFDQTtBQUNBckIsUUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLE9BQWpDLEVBSDhCLENBSTlCO0FBQ0MsR0FMRCxNQUtPO0FBQ0g7QUFDSjtBQUNBeEIsUUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLE9BQWpDLEVBSE8sQ0FJUDtBQUNDO0FBQ0EsQ0FsQ0QsRSIsImZpbGUiOiJqcy9yZXNlcnZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDHDqHJlIGRhdGUgPT4gZm9ybWF0IHN0cmluZyBpc3N1IGR1IGlucHV0XG52YXIgZGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXJ2ZXMnKTtcbmRhdGVzLmZvckVhY2goZGF0ZSA9PiB7XG52YXIgZGF0ZVN0cmluZyA9IGRhdGUuaW5uZXJIVE1MO1xuLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZyk7XG52YXIgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIik7XG4vLyBtb250aCBpcyAwLWJhc2VkLCB0aGF0J3Mgd2h5IHdlIG5lZWQgZGF0YVBhcnRzWzFdIC0gMVxudmFyIGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgrIGRhdGVQYXJ0c1syXSwgZGF0ZVBhcnRzWzFdIC0gMSwgKyBkYXRlUGFydHNbMF0pO1xudmFyIGRhdGUxID0gbmV3IERhdGUoZGF0ZU9iamVjdC50b1N0cmluZygpKTtcbi8vIGNvbnNvbGUubG9nKGRhdGUxKTtcbi8vIDLDqG1lIGRhdGUgPT4gZGF0ZSBkdSBqb3VyXG52YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxudmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xudG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcbi8vIGNvbnNvbGUubG9nKHRvZGF5KTtcbnZhciBkYXRlMiA9IG5ldyBEYXRlKHRvZGF5KTtcbi8vIGNvbnNvbGUubG9nKGRhdGUyKTtcbi8vIFRvIGNhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIG9mIHR3byBkYXRlc1xudmFyIERpZmZlcmVuY2VfSW5fVGltZSA9IGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcbi8vIFRvIGNhbGN1bGF0ZSB0aGUgbm8uIG9mIGRheXMgYmV0d2VlbiB0d28gZGF0ZXNcbnZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBEaWZmZXJlbmNlX0luX1RpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4vLyBUbyBkaXNwbGF5IHRoZSBmaW5hbCBuby4gb2YgZGF5cyAocmVzdWx0KVxuLy8gY29uc29sZS5sb2coXCJUb3RhbCBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIGRhdGVzICA8YnI+XCIgKyBkYXRlMSArIFwiPGJyPiBhbmQgPGJyPlwiICsgZGF0ZTIgKyBcIiBpczogPGJyPiBcIiArIERpZmZlcmVuY2VfSW5fRGF5cyk7XG5pZiAoRGlmZmVyZW5jZV9Jbl9EYXlzIDw9IDMwKSB7XG4vLyBjb25zb2xlLmxvZyhcIm9vb2ggdmEgamV0ZXIgdG9uIHByb2R1aXRcIik7XG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpZ25lcy5sZW5ndGg7IGkrKykge1xuZGF0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFzaFwiKTtcbi8vIH1cbn0gZWxzZSB7IFxuICAgIC8vIGNvbnNvbGUubG9nKFwiVG91dCBlc3QgYm9uXCIpO1xuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaWduZXMubGVuZ3RoOyBpKyspIHtcbmRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhc2hcIik7XG4vLyB9XG59XG59KTsiXSwic291cmNlUm9vdCI6IiJ9