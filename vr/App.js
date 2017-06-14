import React from 'react';
import SensorStore from './stores/SensorStore';
import Main from './components/Main';

const sensorStore = new SensorStore();

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onMainWindowMessage = this.onMainWindowMessage.bind(this);
  }

  componentDidMount() {
    // send from the main window from cordova.
    window.addEventListener('message', this.onMainWindowMessage);
  }

  componentDidUnmount() {
    window.removeEventListener('message', this.onMainWindowMessage);
  }

  onMainWindowMessage(event){
    switch (event.data.type) {
      case 'accel':
        const { data: { payload }} = event;

        sensorStore.accel[0] = payload[0];
        sensorStore.accel[1] = payload[1];
        sensorStore.accel[2] = payload[2];
        break;
      default:
        return;
    }
  }

  render() {
    return (<Main
      store={sensorStore}
    />);
  }
}

