import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class Aurealme extends React.Component {
  state = {
    accel: [0,0,0]
  };

  componentDidMount() {
    sensors.enable(sensors.ACCELEROMETER);

    setInterval(() => {
      sensors.getState(sensors.ACCELEROMETER, (accel) => {
        this.setState({ accel });
      });
    }, 100);

    /*
    var gn = new GyroNorm();

    gn.init().then(() => {
      gn.start((data) => {
        console.log(data);
        // Process:
        // data.do.alpha	( deviceorientation event alpha value )
        // data.do.beta		( deviceorientation event beta value )
        // data.do.gamma	( deviceorientation event gamma value )
        // data.do.absolute	( deviceorientation event absolute value )

        // data.dm.x		( devicemotion event acceleration x value )
        // data.dm.y		( devicemotion event acceleration y value )
        // data.dm.z		( devicemotion event acceleration z value )

        // data.dm.gx		( devicemotion event accelerationIncludingGravity x value )
        // data.dm.gy		( devicemotion event accelerationIncludingGravity y value )
        // data.dm.gz		( devicemotion event accelerationIncludingGravity z value )

        // data.dm.alpha	( devicemotion event rotationRate alpha value )
        // data.dm.beta		( devicemotion event rotationRate beta value )
        // data.dm.gamma	( devicemotion event rotationRate gamma value )
      });
      this.setState({

      });
    }).catch(function(error){
      // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
      console.log(error);
    });
    */
  }

  render() {
    const { accel } = this.state;
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
};

AppRegistry.registerComponent('Aurealme', () => Aurealme);
