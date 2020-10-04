/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rocketship extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rocketship-a", "./Rocketship/costumes/rocketship-a.svg", {
        x: 63,
        y: 92
      })
    ];

    this.sounds = [
      new Sound("space ripple", "./Rocketship/sounds/space ripple.wav"),
      new Sound("laser1", "./Rocketship/sounds/laser1.wav"),
      new Sound("laser2", "./Rocketship/sounds/laser2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "TOUCH" }, this.whenIReceiveTouch),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-224, 15);
    this.costume = "rocketship-a";
    this.visible = true;
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += 10;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -10;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      }
      yield;
    }
  }

  *whenIReceiveTouch() {
    this.visible = false;
    yield* this.wait(1);
    /* TODO: Implement stop all */ null;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.time = 0;
    while (true) {
      yield* this.wait(0.1);
      this.stage.vars.time += 0.1;
      yield;
    }
  }
}
