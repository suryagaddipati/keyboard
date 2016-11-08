import React from 'react';
import Tone from 'tone';
class Music extends React.Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handlePress);
    window.addEventListener('keyup', this.handleRelease);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress);
    window.removeEventListener('keyup', this.handleRelease);
  }
  handlePress(ev) {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("E4", "8n");
  }
  handleRelease(ev) {
  }
  render(){
    return <h1>type</h1>
  }
}
export default Music;