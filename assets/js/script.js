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

document.querySelector('#get-access').addEventListener('click', async function init(e) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true,
          facingMode: {
            //Use the back camera
                  exact: 'environment'
                }
        })
        // const videoTracks = stream.getVideoTracks()
        // const track = videoTracks[0]
        // alert(`Getting video from: ${track.label}`)
        // document.querySelector('video').srcObject = stream
        // document.querySelector('#get-access').setAttribute('hidden', true)
    //The video stream is stopped by track.stop() after 3 second of playback.
        // setTimeout(() => { track.stop() }, 3 * 1000)
      } catch (error) {
        alert(`${error.name}`)
        console.error(error)
      }
  })


  navigator.mediaDevices.getUserMedia({video: true, facingMode: {
          exact: 'environment'
        }})
  .then(mediaStream => {
    document.querySelector('video').srcObject = mediaStream
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch(error => console.log(error));


  var grabFrameButton = document.querySelector('button#grabFrame');
var canvas = document.querySelector('canvas');

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture.grabFrame()
  .then(function(imageBitmap) {
    console.log('Grabbed frame:', imageBitmap);
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
    canvas.classList.remove('hidden');
  })
  .catch(function(error) {
    console.log('grabFrame() error: ', error);
  });
}   


    // var takePhotoButton = document.querySelector('button#takePhoto');
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
  