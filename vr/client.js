import {VRInstance} from 'react-vr-web';

// Not used worker -> main
function onVRMessage(event) {
  switch (event.data.type) {
  }
}

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'Aurealme', parent, {
    // Add custom options here
    ...options,
    nativeModules: [ ]
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();

  vr.rootView.context.worker.addEventListener('message', onVRMessage);

  sensors.enable(sensors.ACCELEROMETER);

  setInterval(() => {
    sensors.getState(sensors.ACCELEROMETER, (payload) => {
      vr.rootView.context.worker.postMessage({
        type: 'accel',
        payload: payload
      });
    });
  }, 2000);

  return vr;
}

window.ReactVR = {init};
