import React from 'react';
import Tone from 'tone';
import WebMidi from 'WebMidi';
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
    var synth = this.synth;
    WebMidi.enable(function (err) {

      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        var input = WebMidi.getInputByName("SmartPAD");
        input.addListener('noteon', "all", function(e) {
          synth.triggerAttackRelease(e.note.name+e.note.octave, "8n");
          console.log( e.note);
        });
        input.addListener('controlchange', "all", function(e) {
          console.log( e.data);
        });
        input.addListener('channelmode', "all", function(e) {
          console.log( e);
        });
        input.addListener('programchange', "all", function(e) {
          console.log( e);
        });
        input.addListener('songposition', "all", function(e) {
          console.log( e);
        });
        input.addListener('songselect', "all", function(e) {
          console.log( e);
        });
        input.addListener('sysex', "all", function(e) {
          console.log( e);
        });
        input.addListener('tuningrequest', "all", function(e) {
          console.log( e);
        });
        input.addListener('unknownsystemmessage', "all", function(e) {
          console.log( e);
        });
        input.addListener('timecode', "all", function(e) {
          console.log( e);
        });
        input.addListener('reset', "all", function(e) {
          console.log( e);
        });

        input.addListener('start', "all", function(e) {
          console.log( e);
        });
        input.addListener('stop', "all", function(e) {
          console.log( e);
        });


      }

    });



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
