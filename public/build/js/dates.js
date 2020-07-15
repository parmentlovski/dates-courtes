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

// Dates des produits rayons
var dates = document.querySelectorAll('.rayons');
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
}); // Dates des produits réserves

var reserves = document.querySelectorAll('.reserves');
reserves.forEach(function (date) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGF0ZXMuanMiXSwibmFtZXMiOlsiZGF0ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGF0ZSIsImRhdGVTdHJpbmciLCJpbm5lckhUTUwiLCJkYXRlUGFydHMiLCJzcGxpdCIsImRhdGVPYmplY3QiLCJEYXRlIiwiZGF0ZTEiLCJ0b1N0cmluZyIsInRvZGF5IiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZGF0ZTIiLCJEaWZmZXJlbmNlX0luX1RpbWUiLCJnZXRUaW1lIiwiRGlmZmVyZW5jZV9Jbl9EYXlzIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsInJlc2VydmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDUSxJQUFJQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBWjtBQUNBRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFFbEIsTUFBSUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLFNBQXRCLENBRmtCLENBRzlCOztBQUNBLE1BQUlDLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxLQUFYLENBQWlCLEdBQWpCLENBQWhCLENBSjhCLENBSzlCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFJQyxJQUFKLENBQVMsQ0FBRUgsU0FBUyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJBLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZSxDQUF4QyxFQUEyQyxDQUFFQSxTQUFTLENBQUMsQ0FBRCxDQUF0RCxDQUFqQjtBQUNBLE1BQUlJLEtBQUssR0FBRyxJQUFJRCxJQUFKLENBQVNELFVBQVUsQ0FBQ0csUUFBWCxFQUFULENBQVosQ0FQOEIsQ0FROUI7QUFDQTs7QUFDQSxNQUFJQyxL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SyxDQUFDRSxPQUFOLEVBQTNDLENBcEJ5QixDQXFCekI7O0FBQ0EsTUFBSUMsa0JBQWtCLEdBQUdGLGtCQUFrQixJQUFJLE9BQU8sSUFBUCxHQUFjLEVBQWxCLENBQTNDLENBdEJ5QixDQXVCekI7QUFDQTs7QUFDQSxNQUFJRSxrQkFBa0IsSUFBSSxFQUExQixFQUE4QjtBQUM5QjtBQUNBO0FBQ0FyQixRQUFJLENBQUNzQixVQUFMLENBQWdCQyxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsT0FBakMsRUFIOEIsQ0FJOUI7QUFDQyxHQUxELE1BTUssSUFBSUgsa0JBQWtCLEdBQUcsRUFBckIsSUFBMkJBLGtCQUFrQixJQUFJLEVBQXJELEVBQXdEO0FBQ3pEckIsUUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLE9BQWpDO0FBQ0gsR0FGSSxNQUdBO0FBQ0Q7QUFDSjtBQUNBeEIsUUFBSSxDQUFDc0IsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLE9BQWpDLEVBSEssQ0FJTDtBQUNDO0FBQ0EsQ0F4Q0QsRSIsImZpbGUiOiJqcy9kYXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgXG5cbi8vIERhdGVzIGRlcyBwcm9kdWl0cyByYXlvbnNcbiAgICAgICAgdmFyIGRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJheW9ucycpO1xuICAgICAgICBkYXRlcy5mb3JFYWNoKGRhdGUgPT4ge1xuXG4gICAgICAgICAgICB2YXIgZGF0ZVN0cmluZyA9IGRhdGUuaW5uZXJIVE1MO1xuLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZyk7XG52YXIgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIik7XG4vLyBtb250aCBpcyAwLWJhc2VkLCB0aGF0J3Mgd2h5IHdlIG5lZWQgZGF0YVBhcnRzWzFdIC0gMVxudmFyIGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgrIGRhdGVQYXJ0c1syXSwgZGF0ZVBhcnRzWzFdIC0gMSwgKyBkYXRlUGFydHNbMF0pO1xudmFyIGRhdGUxID0gbmV3IERhdGUoZGF0ZU9iamVjdC50b1N0cmluZygpKTtcbi8vIGNvbnNvbGUubG9nKGRhdGUxKTtcbi8vIDLDqG1lIGRhdGUgPT4gZGF0ZSBkdSBqb3VyXG52YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxudmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xudG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcbi8vIGNvbnNvbGUubG9nKHRvZGF5KTtcbnZhciBkYXRlMiA9IG5ldyBEYXRlKHRvZGF5KTtcbi8vIGNvbnNvbGUubG9nKGRhdGUyKTtcbi8vIFRvIGNhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIG9mIHR3byBkYXRlc1xudmFyIERpZmZlcmVuY2VfSW5fVGltZSA9IGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcbi8vIFRvIGNhbGN1bGF0ZSB0aGUgbm8uIG9mIGRheXMgYmV0d2VlbiB0d28gZGF0ZXNcbnZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBEaWZmZXJlbmNlX0luX1RpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4vLyBUbyBkaXNwbGF5IHRoZSBmaW5hbCBuby4gb2YgZGF5cyAocmVzdWx0KVxuLy8gY29uc29sZS5sb2coXCJUb3RhbCBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIGRhdGVzICA8YnI+XCIgKyBkYXRlMSArIFwiPGJyPiBhbmQgPGJyPlwiICsgZGF0ZTIgKyBcIiBpczogPGJyPiBcIiArIERpZmZlcmVuY2VfSW5fRGF5cyk7XG5cbiAgICAgICAgaWYgKERpZmZlcmVuY2VfSW5fRGF5cyA8PSAzMCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9vb2ggdmEgamV0ZXIgdG9uIHByb2R1aXRcIik7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlnbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwidHJhc2hcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7IFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUb3V0IGVzdCBib25cIik7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGlnbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhc2hcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4vLyBEYXRlcyBkZXMgcHJvZHVpdHMgcsOpc2VydmVzXG4gICAgICAgIHZhciByZXNlcnZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNlcnZlcycpO1xuICAgICAgICByZXNlcnZlcy5mb3JFYWNoKGRhdGUgPT4ge1xuXG5cbiAgICAgICAgdmFyIGRhdGVTdHJpbmcgPSBkYXRlLmlubmVySFRNTDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZyk7XG4gICAgICAgIHZhciBkYXRlUGFydHMgPSBkYXRlU3RyaW5nLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgLy8gbW9udGggaXMgMC1iYXNlZCwgdGhhdCdzIHdoeSB3ZSBuZWVkIGRhdGFQYXJ0c1sxXSAtIDFcbiAgICAgICAgdmFyIGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgrIGRhdGVQYXJ0c1syXSwgZGF0ZVBhcnRzWzFdIC0gMSwgKyBkYXRlUGFydHNbMF0pO1xuICAgICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZShkYXRlT2JqZWN0LnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlMSk7XG4gICAgICAgIC8vIDLDqG1lIGRhdGUgPT4gZGF0ZSBkdSBqb3VyXG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxuICAgICAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRvZGF5ID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZGF5KTtcbiAgICAgICAgdmFyIGRhdGUyID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlMik7XG4gICAgICAgIC8vIFRvIGNhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIG9mIHR3byBkYXRlc1xuICAgICAgICB2YXIgRGlmZmVyZW5jZV9Jbl9UaW1lID0gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAvLyBUbyBjYWxjdWxhdGUgdGhlIG5vLiBvZiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzXG4gICAgICAgIHZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBEaWZmZXJlbmNlX0luX1RpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gICAgICAgIC8vIFRvIGRpc3BsYXkgdGhlIGZpbmFsIG5vLiBvZiBkYXlzIChyZXN1bHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG90YWwgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiBkYXRlcyAgPGJyPlwiICsgZGF0ZTEgKyBcIjxicj4gYW5kIDxicj5cIiArIGRhdGUyICsgXCIgaXM6IDxicj4gXCIgKyBEaWZmZXJlbmNlX0luX0RheXMpO1xuICAgICAgICBpZiAoRGlmZmVyZW5jZV9Jbl9EYXlzIDw9IDMwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib29vaCB2YSBqZXRlciB0b24gcHJvZHVpdFwiKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaWduZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFzaFwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChEaWZmZXJlbmNlX0luX0RheXMgPiAzMCAmJiBEaWZmZXJlbmNlX0luX0RheXMgPD0gNjApe1xuICAgICAgICAgICAgZGF0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhbGVydFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRvdXQgZXN0IGJvblwiKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaWduZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFzaFwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=