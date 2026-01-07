import { Player } from "./task2.js";

export class PlayerInfo extends Player {

  constructor(name,level){
    super(name,level)
  }

  //metodo info()
  info() {
    console.log(`${this.name} has reachead level ${this.level}!`)
  }
}

  //dividir task:
console.log(`----Task 3----`)
//console.log(tara);

//crear jugador Tara
const tara = new PlayerInfo("Tara", 6);
tara.info();
