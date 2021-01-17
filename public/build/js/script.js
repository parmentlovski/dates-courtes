(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/script"],{

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("Emotion : ");
    // enregistre le script sw avec les navigateurs qui le gèrent
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js', { scope: '../' }).then(() => {
        console.log('Service Worker enregistré correctement.');
        console.log(':)')
      }).catch(error => {
        console.log('Erreur lors de l\'enregistrement du Service Worker : ', error);
        console.log(':/')
      });
    }
    else { // exemple erreur possible => site pas en https 
      console.log(":'(");
    }

/***/ })

},[["./assets/js/script.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUSIsImZpbGUiOiJqcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zb2xlLmxvZyhcIkVtb3Rpb24gOiBcIik7XG5cblxuLy8gICAgIC8vIGVucmVnaXN0cmUgbGUgc2NyaXB0IHN3IGF2ZWMgbGVzIG5hdmlnYXRldXJzIHF1aSBsZSBnw6hyZW50XG4vLyAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycsIHsgc2NvcGU6ICcuLi8nIH0pLnRoZW4oKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSBXb3JrZXIgZW5yZWdpc3Ryw6kgY29ycmVjdGVtZW50LicpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnOiknKVxuLy8gICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50IGR1IFNlcnZpY2UgV29ya2VyIDogJywgZXJyb3IpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnOi8nKVxuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2UgeyAvLyBleGVtcGxlIGVycmV1ciBwb3NzaWJsZSA9PiBzaXRlIHBhcyBlbiBodHRwcyBcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiOicoXCIpO1xuLy8gICAgIH0iXSwic291cmNlUm9vdCI6IiJ9