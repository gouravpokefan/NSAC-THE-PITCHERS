/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Explosion2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("explosion2", "./Explosion2/costumes/explosion2.png", {
        x: 128,
        y: 128
      }),
      new Costume("explosion3", "./Explosion2/costumes/explosion3.png", {
        x: 128,
        y: 128
      }),
      new Costume("explosion4", "./Explosion2/costumes/explosion4.png", {
        x: 128,
        y: 128
      }),
      new Costume("explosion5", "./Explosion2/costumes/explosion5.png", {
        x: 128,
        y: 128
      }),
      new Costume("explosion6", "./Explosion2/costumes/explosion6.png", {
        x: 128,
        y: 128
      }),
      new Costume("explosion7", "./Explosion2/costumes/explosion7.png", {
        x: 128,
        y: 128
      }),
      new Costume("explosion8", "./Explosion2/costumes/explosion8.png", {
        x: 128,
        y: 128
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "TOUCH" }, this.whenIReceiveTouch)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTouch() {
    this.costume = "explosion2";
    this.goto(this.sprites["Rocketship"].x, this.sprites["Rocketship"].y);
    this.visible = true;
    for (let i = 0; i < 8; i++) {
      yield* this.wait(0.03);
      this.costumeNumber += 1;
      yield;
    }
    this.visible = false;
  }
}
