import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Rocketship from "./Rocketship/Rocketship.js";
import Rocks from "./Rocks/Rocks.js";
import Rocks2 from "./Rocks2/Rocks2.js";
import Rocks3 from "./Rocks3/Rocks3.js";
import Rocks4 from "./Rocks4/Rocks4.js";
import Rocks5 from "./Rocks5/Rocks5.js";
import Explosion2 from "./Explosion2/Explosion2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Rocketship: new Rocketship({
    x: -194,
    y: 15,
    direction: 180,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  }),
  Rocks: new Rocks({
    x: -82.88,
    y: -37.434999999999995,
    direction: 90,
    costumeNumber: 3,
    size: 40,
    visible: false,
    layerOrder: 5
  }),
  Rocks2: new Rocks2({
    x: 2.3146666666666533,
    y: -43.733666666666664,
    direction: 90,
    costumeNumber: 3,
    size: 40,
    visible: true,
    layerOrder: 1
  }),
  Rocks3: new Rocks3({
    x: 113.232,
    y: -0.48925000000000196,
    direction: 90,
    costumeNumber: 3,
    size: 40,
    visible: true,
    layerOrder: 2
  }),
  Rocks4: new Rocks4({
    x: 135.3856,
    y: 32.0878,
    direction: 90,
    costumeNumber: 3,
    size: 40,
    visible: true,
    layerOrder: 3
  }),
  Rocks5: new Rocks5({
    x: 25.104965306694858,
    y: -17.56562685840748,
    direction: 90,
    costumeNumber: 3,
    size: 40,
    visible: false,
    layerOrder: 4
  }),
  Explosion2: new Explosion2({
    x: 66,
    y: -25,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 60 // Set to 60 to make your project run faster
});
export default project;
