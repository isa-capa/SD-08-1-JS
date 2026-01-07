import { PlayerInfo } from "./task3.js";

export class LevelUpPlayer extends PlayerInfo {

  constructor(name,level){
    super(name,level);
  }

  //subir de nivel levelUp()
  levelUp() {
    this.level += 1;
  }
}

  //dividir task:
  console.log(`----Task 4----`)

  const tara = new LevelUpPlayer("Tara", 6);

  tara.info();
  tara.levelUp();
  tara.info();