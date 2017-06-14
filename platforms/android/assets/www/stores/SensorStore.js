import { observable } from 'mobx';

export default class SensorStore {
  @observable accel = [0,0,0];
}
