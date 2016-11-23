import React from 'react';
import Tone from 'tone';
var keypress = require( 'keypress.js')
class Music extends React.Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
    this.synth = new Tone.Synth().toMaster();
    this.allowed = true
  }
  componentDidMount() {
    var listener = new keypress.keypress.Listener();
    listener.simple_combo("shift s", this.tabSpace);


    window.addEventListener('keydown', this.handlePress);
    window.addEventListener('keyup', this.handleRelease);
  }
  tabSpace(){
    console.log("meow")
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress);
    window.removeEventListener('keyup', this.handleRelease);
  }
  handlePress(ev) {
    if (ev.repeat != undefined) {
      this.allowed = !ev.repeat;
    }
    if (!this.allowed) return;
    this.allowed = false;


    var keys = ['a','b','c','d','e','f','g'];
    if( keys.indexOf(ev.key) < 0 ) return;
    this.synth.triggerAttack(ev.key+"4");
  }
  handleRelease(ev) {
    this.allowed = true;
    this.synth.triggerRelease();

  }
  render(){
    return <h1>type</h1>
  }
}
export default Music;
