import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react/custom';
import {
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

@observer
class Main extends React.Component {
  render() {
    const { accel } = this.props.store;
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

Main.propTypes = {
  store: PropTypes.object.isRequired
};

export default Main;
