import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import { observable } from 'mobx';
import { observer } from 'mobx-react/custom';

class Realme extends React.Component {
  render() {
    const { accel } = this.props.appState;
    const text = `${accel[0]}, ${accel[1]}, ${accel[2]}`;

    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          {text}
        </Text>
      </View>
    );
  }
}

const appState = observable({
  accel: [0,0,0]
});

const Aurealme = observer(class Aurealme extends React.Component {
  render() {
    return (<Realme appState={appState} />);
  }
});

AppRegistry.registerComponent('Aurealme', () => Aurealme);

/*
function onMainWindowMessage(event){
  switch (event.data.type) {
    case 'accel':
      appState.accel = event.data;
    break;
    default:
    return;
  }
}

// send from the main window from cordova.
window.addEventListener('message', onMainWindowMessage);
*/

export default Aurealme;
