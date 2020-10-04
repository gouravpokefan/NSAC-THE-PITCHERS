/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stars", "./Stage/costumes/Stars.png", { x: 480, y: 360 }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.time = 2.800000000000001;
    this.vars.points = 0;

    this.watchers.time = new Watcher({
      label: "TIME",
      style: "normal",
      visible: true,
      value: () => this.vars.time,
      x: 245,
      y: 148
    });
  }
}
