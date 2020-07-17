(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/dates"],{

/***/ "./assets/js/dates.js":
/*!****************************!*\
  !*** ./assets/js/dates.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.pad-start */ "./node_modules/core-js/modules/es.string.pad-start.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Calcul date du jour
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!

var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
var date2 = new Date(today); // Dates des produits

var rayons = document.querySelectorAll('.rayons');
var reserves = document.querySelectorAll('.reserves'); // Pour éviter l'erreur .concat is not function 

var array1 = _toConsumableArray(rayons);

var array2 = _toConsumableArray(reserves); // Additionne les deux tableaux 


var dates = array1.concat(array2);
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
    date.parentNode.classList.toggle("trash");
  } else if (Difference_In_Days > 30 && Difference_In_Days <= 60 && date.className === "reserves") {
    date.parentNode.classList.toggle("alert");
  } else {
    date.parentNode.classList.remove("trash");
  }
});

/***/ })

},[["./assets/js/dates.js","runtime","vendors~js/dates"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGF0ZXMuanMiXSwibmFtZXMiOlsidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZGF0ZTIiLCJyYXlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNlcnZlcyIsImFycmF5MSIsImFycmF5MiIsImRhdGVzIiwiY29uY2F0IiwiZm9yRWFjaCIsImRhdGUiLCJkYXRlU3RyaW5nIiwiaW5uZXJIVE1MIiwiZGF0ZVBhcnRzIiwic3BsaXQiLCJkYXRlT2JqZWN0IiwiZGF0ZTEiLCJ0b1N0cmluZyIsIkRpZmZlcmVuY2VfSW5fVGltZSIsImdldFRpbWUiLCJEaWZmZXJlbmNlX0luX0RheXMiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xhc3NOYW1lIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLElBQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDSCxLQUFLLENBQUNJLE9BQU4sRUFBRCxDQUFOLENBQXdCQyxRQUF4QixDQUFpQyxDQUFqQyxFQUFvQyxHQUFwQyxDQUFUO0FBQ0EsSUFBSUMsRUFBRSxHQUFHSCxNQUFNLENBQUNILEtBQUssQ0FBQ08sUUFBTixLQUFtQixDQUFwQixDQUFOLENBQTZCRixRQUE3QixDQUFzQyxDQUF0QyxFQUF5QyxHQUF6QyxDQUFULEMsQ0FBd0Q7O0FBQ3hELElBQUlHLElBQUksR0FBR1IsS0FBSyxDQUFDUyxXQUFOLEVBQVg7QUFDQVQsS0FBSyxHQUFHTSxFQUFFLEdBQUcsR0FBTCxHQUFXSixFQUFYLEdBQWdCLEdBQWhCLEdBQXNCTSxJQUE5QjtBQUNBLElBQUlFLEtBQUssR0FBRyxJQUFJVCxJQUFKLENBQVNELEtBQVQsQ0FBWixDLENBRUE7O0FBQ1EsSUFBSVcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLENBQWI7QUFDQSxJQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBZixDLENBRUE7O0FBQ0EsSUFBSUUsTUFBTSxzQkFBT0osTUFBUCxDQUFWOztBQUNBLElBQUlLLE1BQU0sc0JBQU9GLFFBQVAsQ0FBVixDLENBRUE7OztBQUNBLElBQUlHLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxNQUFQLENBQWNGLE1BQWQsQ0FBWjtBQUVBQyxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUc7QUFFekI7QUFDQSxNQUFJQyxVQUFVLEdBQUdELElBQUksQ0FBQ0UsU0FBdEI7QUFDQSxNQUFJQyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixHQUFqQixDQUFoQixDQUp5QixDQU16Qjs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBSXhCLElBQUosQ0FBUyxDQUFFc0IsU0FBUyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJBLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZSxDQUF4QyxFQUEyQyxDQUFFQSxTQUFTLENBQUMsQ0FBRCxDQUF0RCxDQUFqQjtBQUNBLE1BQUlHLEtBQUssR0FBRyxJQUFJekIsSUFBSixDQUFTd0IsVUFBVSxDQUFDRSxRQUFYLEVBQVQsQ0FBWixDQVJ5QixDQVV6Qjs7QUFDQSxNQUFJQyxrQkFBa0IsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEtBQWtCbkIsS0FBSyxDQUFDbUIsT0FBTixFQUEzQyxDQVh5QixDQVl6Qjs7QUFDQSxNQUFJQyxrQkFBa0IsR0FBR0Ysa0JBQWtCLElBQUksT0FBTyxJQUFQLEdBQWMsRUFBbEIsQ0FBM0MsQ0FieUIsQ0FjekI7QUFDQTs7QUFFSSxNQUFJRSxrQkFBa0IsSUFBSSxFQUExQixFQUE4QjtBQUM5QlYsUUFBSSxDQUFDVyxVQUFMLENBQWdCQyxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsT0FBakM7QUFDQyxHQUZELE1BSUssSUFBSUgsa0JBQWtCLEdBQUcsRUFBckIsSUFBMkJBLGtCQUFrQixJQUFJLEVBQWpELElBQXVEVixJQUFJLENBQUNjLFNBQUwsS0FBbUIsVUFBOUUsRUFBeUY7QUFDMUZkLFFBQUksQ0FBQ1csVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLE9BQWpDO0FBQ0gsR0FGSSxNQUlBO0FBQ0RiLFFBQUksQ0FBQ1csVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLE9BQWpDO0FBQ0g7QUFDSixDQTVCRyxFIiwiZmlsZSI6ImpzL2RhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2FsY3VsIGRhdGUgZHUgam91clxuXG52YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xudmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxudmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xudG9kYXkgPSBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcbnZhciBkYXRlMiA9IG5ldyBEYXRlKHRvZGF5KTtcblxuLy8gRGF0ZXMgZGVzIHByb2R1aXRzXG4gICAgICAgIHZhciByYXlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF5b25zJyk7XG4gICAgICAgIHZhciByZXNlcnZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNlcnZlcycpO1xuXG4gICAgICAgIC8vIFBvdXIgw6l2aXRlciBsJ2VycmV1ciAuY29uY2F0IGlzIG5vdCBmdW5jdGlvbiBcbiAgICAgICAgdmFyIGFycmF5MSA9IFsuLi5yYXlvbnNdO1xuICAgICAgICB2YXIgYXJyYXkyID0gWy4uLnJlc2VydmVzXTtcblxuICAgICAgICAvLyBBZGRpdGlvbm5lIGxlcyBkZXV4IHRhYmxlYXV4IFxuICAgICAgICB2YXIgZGF0ZXMgPSBhcnJheTEuY29uY2F0KGFycmF5Mik7XG5cbiAgICAgICAgZGF0ZXMuZm9yRWFjaChkYXRlID0+e1xuICAgICAgICBcbiAgICAvLyBDYWxjdWwgZGF0ZSBkZSBsJ2lucHV0XG4gICAgdmFyIGRhdGVTdHJpbmcgPSBkYXRlLmlubmVySFRNTDtcbiAgICB2YXIgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIik7XG5cbiAgICAvLyBtb250aCBpcyAwLWJhc2VkLCB0aGF0J3Mgd2h5IHdlIG5lZWQgZGF0YVBhcnRzWzFdIC0gMVxuICAgIHZhciBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKyBkYXRlUGFydHNbMl0sIGRhdGVQYXJ0c1sxXSAtIDEsICsgZGF0ZVBhcnRzWzBdKTtcbiAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZShkYXRlT2JqZWN0LnRvU3RyaW5nKCkpO1xuICAgIFxuICAgIC8vIFRvIGNhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlIG9mIHR3byBkYXRlc1xuICAgIHZhciBEaWZmZXJlbmNlX0luX1RpbWUgPSBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XG4gICAgLy8gVG8gY2FsY3VsYXRlIHRoZSBuby4gb2YgZGF5cyBiZXR3ZWVuIHR3byBkYXRlc1xuICAgIHZhciBEaWZmZXJlbmNlX0luX0RheXMgPSBEaWZmZXJlbmNlX0luX1RpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gICAgLy8gVG8gZGlzcGxheSB0aGUgZmluYWwgbm8uIG9mIGRheXMgKHJlc3VsdClcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRvdGFsIG51bWJlciBvZiBkYXlzIGJldHdlZW4gZGF0ZXMgIDxicj5cIiArIGRhdGUxICsgXCI8YnI+IGFuZCA8YnI+XCIgKyBkYXRlMiArIFwiIGlzOiA8YnI+IFwiICsgRGlmZmVyZW5jZV9Jbl9EYXlzKTtcbiAgICBcbiAgICAgICAgaWYgKERpZmZlcmVuY2VfSW5fRGF5cyA8PSAzMCkge1xuICAgICAgICBkYXRlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcInRyYXNoXCIpO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgZWxzZSBpZiAoRGlmZmVyZW5jZV9Jbl9EYXlzID4gMzAgJiYgRGlmZmVyZW5jZV9Jbl9EYXlzIDw9IDYwICYmIGRhdGUuY2xhc3NOYW1lID09PSBcInJlc2VydmVzXCIpe1xuICAgICAgICAgICAgZGF0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJhbGVydFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgeyBcbiAgICAgICAgICAgIGRhdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhc2hcIik7XG4gICAgICAgIH1cbiAgICB9KTsiXSwic291cmNlUm9vdCI6IiJ9