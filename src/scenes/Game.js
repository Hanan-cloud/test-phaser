import Phaser from "phaser";
import { plotSine } from "./Potting_Wave";
import { clearDraw } from "./Potting_Wave";

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

let number = 1;
let amplitude = 20;
let frequency = 20;
// colors
export default class Game extends Phaser.Scene {
  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }

  init() {
    this.timer;
  }

  create() {
    this.graph = this.add.graphics();
    this.graph.lineStyle(1000, 0x509555);

    //this.startD();
    // this.time.delayedCall(10000,this.clearDraw() ,null,this);

    // start sider

    var print1 = this.add.text(500, 400, "");
    this.rexUI.add
      .slider({
        x: 600,
        y: 500,
        width: 300,
        height: 30,
        orientation: "x",
        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        easeValue: { duration: 250 },
        value: 0.5,

        valuechangeCallback: function (value) {
          print1.text = Math.round(value * 100);
          amplitude = Math.round(value * 100);
        },
      })
      .layout();
<<<<<<< HEAD

=======
var waveLenght = this.add.text(100, 400, "");
>>>>>>> dbe14922c8379f5a1f85567872cd392cec705f84
    var print2 = this.add.text(0, 400, "");
    this.rexUI.add
      .slider({
        x: 200,
        y: 500,
        width: 300,
        height: 30,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        easeValue: { duration: 250 },

        valuechangeCallback: function (value) {
<<<<<<< HEAD
          print2.text = Math.round(value * 100);
          frequency = Math.round(value * 100);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          print2.text = Math.round(value * 100);
          frequency = Math.round(100-(value * 100));
          waveLenght = Math.round(100-(value*100));
=======
=======
>>>>>>> parent of de98a9b (l)
=======
>>>>>>> parent of de98a9b (l)
          print1.text = Math.round(value * 100);
          frequency = Math.round(value * 100);
>>>>>>> parent of de98a9b (l)
>>>>>>> dbe14922c8379f5a1f85567872cd392cec705f84
        },
      })
      .layout();
  }

  update() {
    plotSine(number, window.innerWidth, this.graph, amplitude, frequency);
    //this.graph.clear();
    number = number + 0.1;
    this.timer = this.time.delayedCall(100, this.startD, [], this);
  }

  startD() {
    this.timer = this.time.addEvent({
      delay: 100, // ms
      callback: clearDraw(this.graph),

      loop: true,
    });
  }
}