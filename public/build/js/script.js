(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/script"],{

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
// });
//   function displayNotification() {
//     if (Notification.permission == 'granted') {
//       navigator.serviceWorker.getRegistration().then(function(reg) {
//         var options = {
//           body: 'Here is a notification body!',
//           // icon: '/public/img/clock.png',
//           vibrate: [100, 50, 100],
//           data: {
//             dateOfArrival: Date.now(),
//             primaryKey: 1
//           }
//         };
//         reg.showNotification('Hello world!', options);
//       });
//     }
//   }
console.log('kikou la famille');
document.querySelector('#get-access').addEventListener('click', /*#__PURE__*/function () {
  var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var stream;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return navigator.mediaDevices.getUserMedia({
              audio: false,
              video: true,
              facingMode: {
                //Use the back camera
                exact: 'environment'
              }
            });

          case 3:
            stream = _context.sent;
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            alert("".concat(_context.t0.name));
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  function init(_x) {
    return _init.apply(this, arguments);
  }

  return init;
}());
navigator.mediaDevices.getUserMedia({
  video: true,
  facingMode: {
    exact: 'environment'
  }
}).then(function (mediaStream) {
  document.querySelector('video').srcObject = mediaStream;
  var track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);
})["catch"](function (error) {
  return console.log(error);
});
var grabFrameButton = document.querySelector('button#grabFrame');
var canvas = document.querySelector('canvas');
grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture.grabFrame().then(function (imageBitmap) {
    console.log('Grabbed frame:', imageBitmap);
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
    canvas.classList.remove('hidden');
  })["catch"](function (error) {
    console.log('grabFrame() error: ', error);
  });
} // var takePhotoButton = document.querySelector('button#takePhoto');
// var canvas = document.querySelector('canvas');
// var img = document.querySelector('img');
// takePhotoButton.onclick = takePhoto;
// // Get a Blob from the currently selected camera source and
// // display this with an img element.
// function takePhoto() {
//     imageCapture.takePhoto().then(function(blob) {
//     console.log('Took photo:', blob);
//     img.classList.remove('hidden');
//     img.src = URL.createObjectURL(blob);
// }).catch(function(error) {
//     console.log('takePhoto() error: ', error);
// });
// }
// var takePhotoButton = document.querySelector('button#takePhoto');
// takePhotoButton.onclick = getStream;
// function getUserMedia(options, successCallback, failureCallback) {
//     var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
//       navigator.mozGetUserMedia || navigator.msGetUserMedia;
//     if (api) {
//       return api.bind(navigator)(options, successCallback, failureCallback);
//     }
//   }
//   var theStream;
//   function getStream() {
//     if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
//       !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
//       alert('User Media API not supported.');
//       return;
//     }
//     var constraints = {
//       video: true
//     };
//     getUserMedia(constraints, function (stream) {
//       var mediaControl = document.querySelector('video');
//       if ('srcObject' in mediaControl) {
//         mediaControl.srcObject = stream;
//       } else if (navigator.mozGetUserMedia) {
//         mediaControl.mozSrcObject = stream;
//       } else {
//         mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
//       }
//       theStream = stream;
//     }, function (err) {
//       alert('Error: ' + err);
//     });
//   }
//   function takePhoto() {
//     if (!('ImageCapture' in window)) {
//       alert('ImageCapture is not available');
//       return;
//     }
//     if (!theStream) {
//       alert('Grab the video stream first!');
//       return;
//     }
//     var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);
//     theImageCapturer.takePhoto()
//       .then(blob => {
//         var theImageTag = document.getElementById("imageTag");
//         theImageTag.src = URL.createObjectURL(blob);
//       })
//       .catch(err => alert('Error: ' + err));
//   }

/***/ })

},
0,[["./assets/js/script.js","runtime","vendors-node_modules_core-js_internals_engine-v8-version_js-node_modules_core-js_internals_ex-af9ee3","vendors-node_modules_core-js_modules_es_function_name_js-node_modules_core-js_modules_es_prom-1d8f46"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJmYWNpbmdNb2RlIiwiZXhhY3QiLCJzdHJlYW0iLCJhbGVydCIsIm5hbWUiLCJlcnJvciIsImluaXQiLCJ0aGVuIiwibWVkaWFTdHJlYW0iLCJzcmNPYmplY3QiLCJ0cmFjayIsImdldFZpZGVvVHJhY2tzIiwiaW1hZ2VDYXB0dXJlIiwiSW1hZ2VDYXB0dXJlIiwiZ3JhYkZyYW1lQnV0dG9uIiwiY2FudmFzIiwib25jbGljayIsImdyYWJGcmFtZSIsImltYWdlQml0bWFwIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBRUFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsZ0JBQXRDLENBQXVELE9BQXZEO0FBQUEsc0VBQWdFLGlCQUFvQkMsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVuQ0MsU0FBUyxDQUFDQyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztBQUN2REMsbUJBQUssRUFBRSxLQURnRDtBQUV2REMsbUJBQUssRUFBRSxJQUZnRDtBQUd2REMsd0JBQVUsRUFBRTtBQUNWO0FBQ01DLHFCQUFLLEVBQUU7QUFGSDtBQUgyQyxhQUFwQyxDQUZtQzs7QUFBQTtBQUVsREMsa0JBRmtEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQnhEQyxpQkFBSyxXQUFJLFlBQU1DLElBQVYsRUFBTDtBQUNBZixtQkFBTyxDQUFDZ0IsS0FBUjs7QUFuQndEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWhFOztBQUFBLFdBQStFQyxJQUEvRTtBQUFBO0FBQUE7O0FBQUEsU0FBK0VBLElBQS9FO0FBQUE7QUF3QkVYLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsWUFBdkIsQ0FBb0M7QUFBQ0UsT0FBSyxFQUFFLElBQVI7QUFBY0MsWUFBVSxFQUFFO0FBQ3REQyxTQUFLLEVBQUU7QUFEK0M7QUFBMUIsQ0FBcEMsRUFHQ00sSUFIRCxDQUdNLFVBQUFDLFdBQVcsRUFBSTtBQUNuQmpCLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixFQUFnQ2lCLFNBQWhDLEdBQTRDRCxXQUE1QztBQUNBLE1BQU1FLEtBQUssR0FBR0YsV0FBVyxDQUFDRyxjQUFaLEdBQTZCLENBQTdCLENBQWQ7QUFDQUMsY0FBWSxHQUFHLElBQUlDLFlBQUosQ0FBaUJILEtBQWpCLENBQWY7QUFDRCxDQVBELFdBUU8sVUFBQUwsS0FBSztBQUFBLFNBQUloQixPQUFPLENBQUNDLEdBQVIsQ0FBWWUsS0FBWixDQUFKO0FBQUEsQ0FSWjtBQVdBLElBQUlTLGVBQWUsR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdEI7QUFDRixJQUFJdUIsTUFBTSxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFFQXNCLGVBQWUsQ0FBQ0UsT0FBaEIsR0FBMEJDLFNBQTFCOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkJMLGNBQVksQ0FBQ0ssU0FBYixHQUNDVixJQURELENBQ00sVUFBU1csV0FBVCxFQUFzQjtBQUMxQjdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCNEIsV0FBOUI7QUFDQUgsVUFBTSxDQUFDSSxLQUFQLEdBQWVELFdBQVcsQ0FBQ0MsS0FBM0I7QUFDQUosVUFBTSxDQUFDSyxNQUFQLEdBQWdCRixXQUFXLENBQUNFLE1BQTVCO0FBQ0FMLFVBQU0sQ0FBQ00sVUFBUCxDQUFrQixJQUFsQixFQUF3QkMsU0FBeEIsQ0FBa0NKLFdBQWxDLEVBQStDLENBQS9DLEVBQWtELENBQWxEO0FBQ0FILFVBQU0sQ0FBQ1EsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsUUFBeEI7QUFDRCxHQVBELFdBUU8sVUFBU25CLEtBQVQsRUFBZ0I7QUFDckJoQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ2UsS0FBbkM7QUFDRCxHQVZEO0FBV0QsQyxDQUdHO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsImZpbGUiOiJqcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oZnVuY3Rpb24oc3RhdHVzKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIHN0YXR1czonLCBzdGF0dXMpO1xuLy8gfSk7XG5cblxuLy8gICBmdW5jdGlvbiBkaXNwbGF5Tm90aWZpY2F0aW9uKCkge1xuLy8gICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PSAnZ3JhbnRlZCcpIHtcbi8vICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oZnVuY3Rpb24ocmVnKSB7XG4vLyAgICAgICAgIHZhciBvcHRpb25zID0ge1xuLy8gICAgICAgICAgIGJvZHk6ICdIZXJlIGlzIGEgbm90aWZpY2F0aW9uIGJvZHkhJyxcbi8vICAgICAgICAgICAvLyBpY29uOiAnL3B1YmxpYy9pbWcvY2xvY2sucG5nJyxcbi8vICAgICAgICAgICB2aWJyYXRlOiBbMTAwLCA1MCwgMTAwXSxcbi8vICAgICAgICAgICBkYXRhOiB7XG4vLyAgICAgICAgICAgICBkYXRlT2ZBcnJpdmFsOiBEYXRlLm5vdygpLFxuLy8gICAgICAgICAgICAgcHJpbWFyeUtleTogMVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgcmVnLnNob3dOb3RpZmljYXRpb24oJ0hlbGxvIHdvcmxkIScsIG9wdGlvbnMpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICB9XG5cblxuY29uc29sZS5sb2coJ2tpa291IGxhIGZhbWlsbGUnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dldC1hY2Nlc3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIGluaXQoZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgdmlkZW86IHRydWUsXG4gICAgICAgICAgZmFjaW5nTW9kZToge1xuICAgICAgICAgICAgLy9Vc2UgdGhlIGJhY2sgY2FtZXJhXG4gICAgICAgICAgICAgICAgICBleGFjdDogJ2Vudmlyb25tZW50J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc3QgdmlkZW9UcmFja3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVxuICAgICAgICAvLyBjb25zdCB0cmFjayA9IHZpZGVvVHJhY2tzWzBdXG4gICAgICAgIC8vIGFsZXJ0KGBHZXR0aW5nIHZpZGVvIGZyb206ICR7dHJhY2subGFiZWx9YClcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKS5zcmNPYmplY3QgPSBzdHJlYW1cbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dldC1hY2Nlc3MnKS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpXG4gICAgLy9UaGUgdmlkZW8gc3RyZWFtIGlzIHN0b3BwZWQgYnkgdHJhY2suc3RvcCgpIGFmdGVyIDMgc2Vjb25kIG9mIHBsYXliYWNrLlxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgdHJhY2suc3RvcCgpIH0sIDMgKiAxMDAwKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoYCR7ZXJyb3IubmFtZX1gKVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxuICB9KVxuXG5cbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe3ZpZGVvOiB0cnVlLCBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgZXhhY3Q6ICdlbnZpcm9ubWVudCdcbiAgICAgICAgfX0pXG4gIC50aGVuKG1lZGlhU3RyZWFtID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtXG4gICAgY29uc3QgdHJhY2sgPSBtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgIGltYWdlQ2FwdHVyZSA9IG5ldyBJbWFnZUNhcHR1cmUodHJhY2spO1xuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuXG4gIHZhciBncmFiRnJhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jZ3JhYkZyYW1lJyk7XG52YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5cbmdyYWJGcmFtZUJ1dHRvbi5vbmNsaWNrID0gZ3JhYkZyYW1lO1xuXG5mdW5jdGlvbiBncmFiRnJhbWUoKSB7XG4gIGltYWdlQ2FwdHVyZS5ncmFiRnJhbWUoKVxuICAudGhlbihmdW5jdGlvbihpbWFnZUJpdG1hcCkge1xuICAgIGNvbnNvbGUubG9nKCdHcmFiYmVkIGZyYW1lOicsIGltYWdlQml0bWFwKTtcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZUJpdG1hcC53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2VCaXRtYXAuaGVpZ2h0O1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWFnZUJpdG1hcCwgMCwgMCk7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KVxuICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZ3JhYkZyYW1lKCkgZXJyb3I6ICcsIGVycm9yKTtcbiAgfSk7XG59ICAgXG5cblxuICAgIC8vIHZhciB0YWtlUGhvdG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jdGFrZVBob3RvJyk7XG4gICAgLy8gdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIC8vIHZhciBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcblxuICAgIC8vIHRha2VQaG90b0J1dHRvbi5vbmNsaWNrID0gdGFrZVBob3RvO1xuXG4gICAgLy8gLy8gR2V0IGEgQmxvYiBmcm9tIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY2FtZXJhIHNvdXJjZSBhbmRcbiAgICAvLyAvLyBkaXNwbGF5IHRoaXMgd2l0aCBhbiBpbWcgZWxlbWVudC5cbiAgICAvLyBmdW5jdGlvbiB0YWtlUGhvdG8oKSB7XG4gICAgLy8gICAgIGltYWdlQ2FwdHVyZS50YWtlUGhvdG8oKS50aGVuKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1Rvb2sgcGhvdG86JywgYmxvYik7XG4gICAgLy8gICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAvLyAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgLy8gfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3Rha2VQaG90bygpIGVycm9yOiAnLCBlcnJvcik7XG4gICAgLy8gfSk7XG4gICAgLy8gfVxuICAgXG4gICAgLy8gdmFyIHRha2VQaG90b0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiN0YWtlUGhvdG8nKTtcbiAgICAvLyB0YWtlUGhvdG9CdXR0b24ub25jbGljayA9IGdldFN0cmVhbTtcblxuICAgIC8vIGZ1bmN0aW9uIGdldFVzZXJNZWRpYShvcHRpb25zLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgIC8vICAgICB2YXIgYXBpID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8XG4gICAgLy8gICAgICAgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWE7XG4gICAgLy8gICAgIGlmIChhcGkpIHtcbiAgICAvLyAgICAgICByZXR1cm4gYXBpLmJpbmQobmF2aWdhdG9yKShvcHRpb25zLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAgIFxuICAgIC8vICAgdmFyIHRoZVN0cmVhbTtcbiAgICAgIFxuICAgIC8vICAgZnVuY3Rpb24gZ2V0U3RyZWFtKCkge1xuICAgIC8vICAgICBpZiAoIW5hdmlnYXRvci5nZXRVc2VyTWVkaWEgJiYgIW5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgJiZcbiAgICAvLyAgICAgICAhbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSAmJiAhbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhKSB7XG4gICAgLy8gICAgICAgYWxlcnQoJ1VzZXIgTWVkaWEgQVBJIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgICAgIFxuICAgIC8vICAgICB2YXIgY29uc3RyYWludHMgPSB7XG4gICAgLy8gICAgICAgdmlkZW86IHRydWVcbiAgICAvLyAgICAgfTtcbiAgICAgIFxuICAgIC8vICAgICBnZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICAvLyAgICAgICB2YXIgbWVkaWFDb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcbiAgICAvLyAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gbWVkaWFDb250cm9sKSB7XG4gICAgLy8gICAgICAgICBtZWRpYUNvbnRyb2wuc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIC8vICAgICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgIC8vICAgICAgICAgbWVkaWFDb250cm9sLm1velNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgbWVkaWFDb250cm9sLnNyYyA9ICh3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwpLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgICB0aGVTdHJlYW0gPSBzdHJlYW07XG4gICAgLy8gICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAvLyAgICAgICBhbGVydCgnRXJyb3I6ICcgKyBlcnIpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH1cbiAgICAgIFxuICAgIC8vICAgZnVuY3Rpb24gdGFrZVBob3RvKCkge1xuICAgIC8vICAgICBpZiAoISgnSW1hZ2VDYXB0dXJlJyBpbiB3aW5kb3cpKSB7XG4gICAgLy8gICAgICAgYWxlcnQoJ0ltYWdlQ2FwdHVyZSBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgICAgIFxuICAgIC8vICAgICBpZiAoIXRoZVN0cmVhbSkge1xuICAgIC8vICAgICAgIGFsZXJ0KCdHcmFiIHRoZSB2aWRlbyBzdHJlYW0gZmlyc3QhJyk7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgICAgIFxuICAgIC8vICAgICB2YXIgdGhlSW1hZ2VDYXB0dXJlciA9IG5ldyBJbWFnZUNhcHR1cmUodGhlU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0pO1xuICAgICAgXG4gICAgLy8gICAgIHRoZUltYWdlQ2FwdHVyZXIudGFrZVBob3RvKClcbiAgICAvLyAgICAgICAudGhlbihibG9iID0+IHtcbiAgICAvLyAgICAgICAgIHZhciB0aGVJbWFnZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VUYWdcIik7XG4gICAgLy8gICAgICAgICB0aGVJbWFnZVRhZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgICAgLmNhdGNoKGVyciA9PiBhbGVydCgnRXJyb3I6ICcgKyBlcnIpKTtcbiAgICAvLyAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==