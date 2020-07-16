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

// Calcul date du jour
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!

var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
var date2 = new Date(today); // Dates des produits rayons

var dates = document.querySelectorAll('.rayons');
dates.forEach(function (date) {
  // Calcul date de l'input
  var dateString = date.innerHTML;
  var dateParts = dateString.split("/"); // month is 0-based, that's why we need dataParts[1] - 1

  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var date1 = new Date(dateObject.toString()); // To calculate the time difference of two dates

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
}); // Dates des produits réserves

var reserves = document.querySelectorAll('.reserves');
reserves.forEach(function (date) {
  var dateString = date.innerHTML; // console.log(dateString);

  var dateParts = dateString.split("/"); // month is 0-based, that's why we need dataParts[1] - 1

  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var date1 = new Date(dateObject.toString()); // To calculate the time difference of two dates

  var Difference_In_Time = date1.getTime() - date2.getTime(); // To calculate the no. of days between two dates

  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); // To display the final no. of days (result)

  if (Difference_In_Days <= 30) {
    // console.log("oooh va jeter ton produit");
    // for (let i = 0; i < lignes.length; i++) {
    date.parentNode.classList.toggle("trash"); // }
  } else if (Difference_In_Days > 30 && Difference_In_Days <= 60) {
    date.parentNode.classList.toggle("alert");
  } else {
    // console.log("Tout est bon");
    // for (let i = 0; i < lignes.length; i++) {
    date.parentNode.classList.remove("trash"); // }
  }
});

/***/ })

},[["./assets/js/dates.js","runtime","vendors~js/dates"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGF0ZXMuanMiXSwibmFtZXMiOlsidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZGF0ZTIiLCJkYXRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkYXRlIiwiZGF0ZVN0cmluZyIsImlubmVySFRNTCIsImRhdGVQYXJ0cyIsInNwbGl0IiwiZGF0ZU9iamVjdCIsImRhdGUxIiwidG9TdHJpbmciLCJEaWZmZXJlbmNlX0luX1RpbWUiLCJnZXRUaW1lIiwiRGlmZmVyZW5jZV9Jbl9EYXlzIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsInJlc2VydmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFJQSxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsSUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNILEtBQUssQ0FBQ0ksT0FBTixFQUFELENBQU4sQ0FBd0JDLFFBQXhCLENBQWlDLENBQWpDLEVBQW9DLEdBQXBDLENBQVQ7QUFDQSxJQUFJQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0gsS0FBSyxDQUFDTyxRQUFOLEtBQW1CLENBQXBCLENBQU4sQ0FBNkJGLFFBQTdCLENBQXNDLENBQXRDLEVBQXlDLEdBQXpDLENBQVQsQyxDQUF3RDs7QUFDeEQsSUFBSUcsSUFBSSxHQUFHUixLQUFLLENBQUNTLFdBQU4sRUFBWDtBQUNBVCxLQUFLLEdBQUdNLEVBQUUsR0FBRyxHQUFMLEdBQVdKLEVBQVgsR0FBZ0IsR0FBaEIsR0FBc0JNLElBQTlCO0FBRUEsSUFBSUUsS0FBSyxHQUFHLElBQUlULElBQUosQ0FBU0QsS0FBVCxDQUFaLEMsQ0FHQTs7QUFDUSxJQUFJVyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0Ms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c0NvbnRlbnQiOlsiICAgICAgIFxuICAgICAgIFxuLy8gQ2FsY3VsIGRhdGUgZHUgam91clxuXG52YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxudmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xudG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcblxudmFyIGRhdGUyID0gbmV3IERhdGUodG9kYXkpO1xuXG5cbi8vIERhdGVzIGRlcyBwcm9kdWl0cyByYXlvbnNcbiAgICAgICAgdmFyIGRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJheW9ucycpO1xuICAgICAgICBkYXRlcy5mb3JFYWNoKGRhdGUgPT4ge1xuXG4gICAgICAgIC8vIENhbGN1bCBkYXRlIGRlIGwnaW5wdXRcblxuICAgIHZhciBkYXRlU3RyaW5nID0gZGF0ZS5pbm5lckhUTUw7XG5cbiAgICB2YXIgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIik7XG4gICAgLy8gbW9udGggaXMgMC1iYXNlZCwgdGhhdCdzIHdoeSB3ZSBuZWVkIGRhdGFQYXJ0c1sxXSAtIDFcbiAgICB2YXIgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKCsgZGF0ZVBhcnRzWzJdLCBkYXRlUGFydHNbMV0gLSAxLCArIGRhdGVQYXJ0c1swXSk7XG4gICAgdmFyIGRhdGUxID0gbmV3IERhdGUoZGF0ZU9iamVjdC50b1N0cmluZygpKTtcbiAgICBcbiAgICBcbiAgICAgICAgLy8gVG8gY2FsY3VsYXRlIHRoZSB0aW1lIGRpZmZlcmVuY2Ugb2YgdHdvIGRhdGVzXG4gICAgdmFyIERpZmZlcmVuY2VfSW5fVGltZSA9IGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcbiAgICAvLyBUbyBjYWxjdWxhdGUgdGhlIG5vLiBvZiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzXG4gICAgdmFyIERpZmZlcmVuY2VfSW5fRGF5cyA9IERpZmZlcmVuY2VfSW5fVGltZSAvICgxMDAwICogMzYwMCAqIDI0KTtcbiAgICAvLyBUbyBkaXNwbGF5IHRoZSBmaW5hbCBuby4gb2YgZGF5cyAocmVzdWx0KVxuICAgIC8vIGNvbnNvbGUubG9nKFwiVG90YWwgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiBkYXRlcyAgPGJyPlwiICsgZGF0ZTEgKyBcIjxicj4gYW5kIDxicj5cIiArIGRhdGUyICsgXCIgaXM6IDxicj4gXCIgKyBEaWZmZXJlbmNlX0luX0RheXMpO1xuICAgIFxuXG4gICAgICAgIGlmIChEaWZmZXJlbmNlX0luX0RheXMgPD0gMzApIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvb29oIHZhIGpldGVyIHRvbiBwcm9kdWl0XCIpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpZ25lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcInRyYXNoXCIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgeyBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG91dCBlc3QgYm9uXCIpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxpZ25lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInRyYXNoXCIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuLy8gRGF0ZXMgZGVzIHByb2R1aXRzIHLDqXNlcnZlc1xuICAgICAgICB2YXIgcmVzZXJ2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXJ2ZXMnKTtcbiAgICAgICAgcmVzZXJ2ZXMuZm9yRWFjaChkYXRlID0+IHtcblxuXG4gICAgICAgIHZhciBkYXRlU3RyaW5nID0gZGF0ZS5pbm5lckhUTUw7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGVTdHJpbmcpO1xuICAgICAgICB2YXIgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIik7XG4gICAgICAgIC8vIG1vbnRoIGlzIDAtYmFzZWQsIHRoYXQncyB3aHkgd2UgbmVlZCBkYXRhUGFydHNbMV0gLSAxXG4gICAgICAgIHZhciBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKyBkYXRlUGFydHNbMl0sIGRhdGVQYXJ0c1sxXSAtIDEsICsgZGF0ZVBhcnRzWzBdKTtcbiAgICAgICAgdmFyIGRhdGUxID0gbmV3IERhdGUoZGF0ZU9iamVjdC50b1N0cmluZygpKTtcblxuXG4gICAgICAgIC8vIFRvIGNhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIG9mIHR3byBkYXRlc1xuICAgICAgICB2YXIgRGlmZmVyZW5jZV9Jbl9UaW1lID0gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAvLyBUbyBjYWxjdWxhdGUgdGhlIG5vLiBvZiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzXG4gICAgICAgIHZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBEaWZmZXJlbmNlX0luX1RpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gICAgICAgIC8vIFRvIGRpc3BsYXkgdGhlIGZpbmFsIG5vLiBvZiBkYXlzIChyZXN1bHQpXG5cbiAgICAgICAgaWYgKERpZmZlcmVuY2VfSW5fRGF5cyA8PSAzMCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9vb2ggdmEgamV0ZXIgdG9uIHByb2R1aXRcIik7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlnbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwidHJhc2hcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoRGlmZmVyZW5jZV9Jbl9EYXlzID4gMzAgJiYgRGlmZmVyZW5jZV9Jbl9EYXlzIDw9IDYwKXtcbiAgICAgICAgICAgIGRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWxlcnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUb3V0IGVzdCBib25cIik7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlnbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhc2hcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICB9KTsiXSwic291cmNlUm9vdCI6IiJ9