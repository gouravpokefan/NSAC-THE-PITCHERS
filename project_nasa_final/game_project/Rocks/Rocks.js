/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rocks extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rocks", "./Rocks/costumes/rocks.svg", { x: 59, y: 15 }),
      new Costume("rocks2", "./Rocks/costumes/rocks2.svg", { x: 59, y: 15 }),
      new Costume("rocks3", "./Rocks/costumes/rocks3.svg", { x: 59, y: 15 }),
      new Costume("rocks4", "./Rocks/costumes/rocks4.svg", { x: 59, y: 15 }),
      new Costume("rocks5", "./Rocks/costumes/rocks5.svg", { x: 59, y: 15 })
    ];

    this.sounds = [new Sound("pop", "./Rocks/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (!this.touching(this.sprites["Rocketship"].andClones())) {
      yield;
    }
    this.broadcast("TOUCH");
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    while (true) {
      this.createClone();
      yield* this.wait(this.random(1, 5));
      this.visible = true;
      this.goto(224, this.random(-150, 150));
      yield* this.glide(this.random(4, 7), -224, this.random(-150, 150));
      this.visible = false;
      this.costumeNumber += 1;
      yield;
    }
  }
}
